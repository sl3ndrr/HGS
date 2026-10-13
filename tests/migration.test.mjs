import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { loadContent, loadInventory } from '../src/content-data.mjs';
import { validateContent } from '../src/validate-content.mjs';
import { assertMigration } from '../src/migration.mjs';
import { parseBriefing } from '../src/briefing.mjs';

const inventory = await loadInventory();
const current = await loadContent();
test('Frozen inventory matches the archived briefing by ID, original URL and source', async () => {
  const brief = await readFile(new URL('../docs/RELAUNCH-BRIEFING.md', import.meta.url), 'utf8');
  assert.equal(createHash('sha256').update(brief).digest('hex'), inventory.sourceSha256);
  const parsed = parseBriefing(brief);
  assert.deepEqual(inventory.counts, { news: 33, media: 57, refs: 72, documents: 70 });
  for (const key of Object.keys(inventory.counts)) {
    assert.equal(inventory[key].length, inventory.counts[key]);
    assert.equal(parsed[key].length, inventory.counts[key]);
    for (const entry of inventory[key]) {
      const actual = parsed[key].find(x => x.id === entry.id);
      assert(actual, `${key}[${entry.id}]`);
      for (const field of Object.keys(entry)) assert.deepEqual(actual[field], entry[field], `${key}[${entry.id}].${field}`);
    }
  }
  assertMigration(current, inventory);
  validateContent(current, { inventory });
});
test('Additional editorial news passes without weakening historical inventory', () => {
  const data = structuredClone(current);
  data.news.push({ ...data.news[0], id: 'synthetic-test-only', url: '/schulleben/nachrichten/synthetic-test-only/', title: 'Synthetische Testmeldung', published: '2027-01-02', schoolYear: null, historical: false, imageId: null, documentIds: [] });
  assert.doesNotThrow(() => validateContent(data, { inventory }));
  data.news = data.news.filter(n => n.id !== inventory.news[0].id);
  assert.throws(() => assertMigration(data, inventory), /news\[1256501\].*historische ID/);
});
test('Removed historical media, reference and resource IDs fail independently of live size', () => {
  for (const key of ['media', 'refs', 'documents']) {
    const data = structuredClone(current);
    data[key].shift();
    assert.throws(() => assertMigration(data, inventory), new RegExp(`${key}\\[.*historische ID`));
  }
});
test('Additional media and document references/resources may extend the running registries', () => {
  const data = structuredClone(current);
  data.media.push({ ...data.media[0], id: 'editorial-media-test', originalUrl: 'https://example.invalid/test.jpg', source: null });
  const ref = { ...data.refs[0], id: 'editorial-document-test', originalUrl: 'https://example.invalid/test.pdf', sourceUrl: 'https://example.invalid/source' };
  data.refs.push(ref);
  data.documents.push({ ...ref, referenceIds: [ref.id], sources: [{ url: ref.sourceUrl, title: ref.originalTitle }] });
  assert.doesNotThrow(() => validateContent(data, { inventory }));
});
test('Original URLs are locked to their own IDs, not a substring elsewhere in the briefing', () => {
  for (const [key, field] of [['media', 'originalUrl'], ['refs', 'originalUrl'], ['documents', 'originalUrl'], ['news', 'sourceUrl']]) {
    const data = structuredClone(current);
    data[key][0][field] = data[key][1][field];
    assert.throws(() => assertMigration(data, inventory), new RegExp(`${key}\\[.*${field}.*Originalwert`));
  }
  assert(current.media.find(m => m.id === 'B02').originalUrl.includes('/dateien//mypage/'));
  assert(current.media.find(m => m.id === 'N19').originalUrl.includes('Pra%CC%88mie'));
});
test('Historical dates and editorial limitations remain explicit', () => {
  assert.equal(current.news.find(n => n.id === '1251211').eventDate, '2026-06-11');
  assert.equal(current.news.find(n => n.id === '1256501').eventDate, null);
  assert.match(current.documents.find(d => d.id === 'D68').title, /Förderverein/);
  assert.match(current.pages.find(p => p.url === '/eltern/zeugnisse/').notice.text, /nicht nachgewiesen/);
  assert.match(current.pages.find(p => p.url === '/mitmachen/kooperationen/').sections.find(s => s.id === 'angebote').paragraphs.join(' '), /nicht abrufbar/);
});
