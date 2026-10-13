import test from 'node:test';
import assert from 'node:assert/strict';
import { loadContent, loadInventory } from '../src/content-data.mjs';
import { validateContent } from '../src/validate-content.mjs';
import { photo } from '../src/components.mjs';
import { createRenderers } from '../src/renderers/index.mjs';

const current = await loadContent();
const inventory = await loadInventory();
const rejects = (change, expression) => {
  const data = structuredClone(current);
  change(data);
  assert.throws(() => validateContent(data, { inventory }), expression);
};
test('Invalid calendar dates fail with object and field context; leap days pass', () => {
  rejects(d => d.news[0].eventDate = '2026-02-29', /news\[1256501\]\.eventDate.*Kalenderdatum/);
  rejects(d => d.news[0].published = '2026-04-31', /news\[1256501\]\.published.*Kalenderdatum/);
  const d = structuredClone(current);
  d.news[0].eventDate = '2024-02-29';
  assert.doesNotThrow(() => validateContent(d, { inventory }));
});
test('Unknown document/media/person IDs fail with owning object context', () => {
  rejects(d => d.news[0].documentIds = ['missing-doc'], /news\[1256501\]\.documentIds.*missing-doc/);
  rejects(d => d.pages[0].sections[0].documents = ['missing-doc'], /pages\[\/unsere-schule\/\].*missing-doc/);
  rejects(d => d.news[0].imageId = 'missing-image', /news\[1256501\]\.imageId.*missing-image/);
  rejects(d => d.pages[0].sections[0].media = ['missing-image'], /pages\[\/unsere-schule\/\].*missing-image/);
  rejects(d => d.people.groups[0].people[0].imageId = 'missing-image', /people\[P01\].*missing-image/);
  rejects(d => d.classes.classes[0].teacherIds = ['missing-person'], /classes\[SKG\].*missing-person/);
});
test('Unsafe URL schemes and literal/encoded local traversal fail with object context', () => {
  for (const value of ['/assets/../secret.jpg', '/assets/%2e%2e/secret.jpg', '/assets/%252e%252e/secret.jpg', '//evil.invalid/image.jpg', '/assets/a%2f..%2fsecret.jpg', '/assets/back\\slash.jpg']) {
    rejects(d => d.media[0].localFile = value, /media\[B01\]\.localFile.*(unsicher|lokale Datei)/);
  }
  rejects(d => d.news[0].url = '/schulleben/../evil/', /news\[1256501\]\.url.*unsicher/);
  rejects(d => d.media[0].originalUrl = 'javascript:alert(1)', /media\[B01\]\.originalUrl.*HTTP/);
  rejects(d => d.pages[0].sections[0].links = [['Unsicher', 'data:text/html,x']], /pages\[\/unsere-schule\/\].*links.*unsicher/);
  rejects(d => d.media[0].variants = [{ url: '/assets/../x.webp', width: 480 }], /media\[B01\]\.variants.*unsicher/);
});
test('Duplicate IDs, routes, anchors, unknown types and broken source mappings fail', () => {
  rejects(d => d.news.push(d.news[0]), /news\[1256501\].*doppelte id/);
  rejects(d => d.news[1].url = d.news[0].url, /news\[1251211\].*doppelter Seitenpfad/);
  rejects(d => d.pages[0].sections[1].id = d.pages[0].sections[0].id, /pages\[\/unsere-schule\/\].*doppelte id/);
  rejects(d => d.pages[0].sections[0].id = 'inhalt', /pages\[\/unsere-schule\/\].*reservierter Anker/);
  rejects(d => d.pages[0].kind = 'invented-type', /pages\[\/unsere-schule\/\]\.kind.*unbekannter/);
  rejects(d => d.documents[0].type = 'EXE', /documents\[D01\]\.type.*unbekannter/);
  rejects(d => d.documents[0].sources = [], /refs\[D01\].*Quellzuordnung/);
  rejects(d => d.nav[0].items[0][1] = '/missing/', /navigation\[\/unsere-schule\/\].*unauflösbarer/);
  rejects(d => d.redirects[0].to = '/unsere-schule/#missing-anchor', /redirects\[.*unauflösbarer Anker/);
  rejects(d => d.people.groups[1].people[0].id = 'P01', /people\[P01\].*doppelte id/);
  rejects(d => d.classes.classes[1].class = 'SKG', /classes\[SKG\].*doppelte class/);
});
test('Unknown review/validity metadata is supported without invented dates', () => {
  const d = structuredClone(current);
  Object.assign(d.news[0], { reviewedAt: null, reviewStatus: 'unknown', schoolYear: null, validFrom: null, validTo: null });
  Object.assign(d.people, { schoolYear: null, reviewedAt: null });
  d.media[0].provenance = { kind: 'unknown', sourceUrl: null };
  d.media[0].availability = { status: 'unknown', checkedAt: null };
  assert.doesNotThrow(() => validateContent(d, { inventory }));
  rejects(d => d.news[0].reviewedAt = '2026-02-30', /news\[1256501\]\.reviewedAt.*Kalenderdatum/);
  rejects(d => d.news[0].reviewStatus = 'approved-guessed', /reviewStatus.*unbekannter/);
  rejects(d => d.news[0].schoolYear = '2026/29', /schoolYear.*Folgejahr/);
  rejects(d => Object.assign(d.news[0], { validFrom: '2026-02-02', validTo: '2026-01-01' }), /validTo.*vor validFrom/);
});
test('Renderer entry points fail loudly instead of silently skipping referenced IDs', () => {
  assert.throws(() => photo('unknown', current.media), /photo\[unknown\].*Medien-ID/);
  const renderer = createRenderers({ ...current, basePath: '/', siteUrl: 'https://local.invalid', ready: false });
  const article = { ...current.news[0], documentIds: ['unknown'] };
  assert.throws(() => renderer.article(article), /findDocs\[unknown\].*Dokumentreferenz-ID/);
});
