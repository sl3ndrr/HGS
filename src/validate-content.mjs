import { assertMigration } from './migration.mjs';

const fail = (where, message) => { throw Error(`${where}: ${message}`); };
const object = (value, where) => {
  if (!value || typeof value !== 'object' || Array.isArray(value)) fail(where, 'Objekt erwartet');
};
const string = (value, where) => {
  if (typeof value !== 'string' || !value.trim()) fail(where, 'nichtleerer Text erwartet');
};
const array = (value, where) => {
  if (!Array.isArray(value)) fail(where, 'Liste erwartet');
};
const strings = (value, where) => {
  array(value, where);
  value.forEach((item, i) => string(item, `${where}[${i}]`));
};
const choice = (value, values, where) => {
  if (!values.includes(value)) fail(where, `unbekannter Wert ${JSON.stringify(value)}; erlaubt: ${values.join(', ')}`);
};
const boolean = (value, where) => {
  if (typeof value !== 'boolean') fail(where, 'Boolean erwartet');
};
const optional = (value, check, where) => {
  if (value !== undefined && value !== null) check(value, where);
};
const unique = (items, key, where) => {
  const seen = new Set();
  array(items, where);
  for (const item of items) {
    object(item, where);
    string(item[key], `${where}.${key}`);
    if (key === 'id' && !/^[\p{L}\p{N}_-]+$/u.test(item[key])) fail(`${where}[${item[key]}]`, 'ID darf nur Buchstaben, Zahlen, _ und - enthalten');
    if (seen.has(item[key])) fail(`${where}[${item[key]}]`, `doppelte ${key}`);
    seen.add(item[key]);
  }
  return seen;
};
const uniqueStrings = (items, where) => {
  strings(items, where);
  if (new Set(items).size !== items.length) fail(where, 'doppelte Werte');
};

export function calendarDate(value, where) {
  string(value, where);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value) || value.startsWith('0000-')) fail(where, 'echtes Kalenderdatum YYYY-MM-DD erwartet');
  const parsed = new Date(value + 'T00:00:00Z');
  if (!Number.isFinite(parsed.getTime()) || parsed.toISOString().slice(0, 10) !== value) fail(where, `ungültiges Kalenderdatum ${value}`);
}

export function httpUrl(value, where) {
  string(value, where);
  if (!/^https?:\/\//.test(value) || /[\s\\<>"\x00-\x1f\x7f]/u.test(value)) fail(where, 'sichere absolute HTTP(S)-Adresse erwartet');
  let url;
  try { url = new URL(value); } catch { fail(where, 'ungültige URL'); }
  if (!url.hostname || url.username || url.password) fail(where, 'URL mit Host ohne Zugangsdaten erwartet');
  return url;
}

// Inspect the literal path before WHATWG URL normalization can hide traversal.
export function localPath(value, where, { file = false, route = false } = {}) {
  string(value, where);
  if (!value.startsWith('/') || value.startsWith('//') || /[\\\s<>"\x00-\x1f\x7f]/u.test(value)) fail(where, `unsicherer lokaler Pfad ${value}`);
  const pathname = value.split(/[?#]/)[0];
  let decoded;
  try { decoded = decodeURIComponent(pathname); } catch { fail(where, 'ungültige Pfadkodierung'); }
  if (/[\\\x00-\x1f\x7f?#%]/.test(decoded) || /%2f|%5c/i.test(pathname) || decoded.startsWith('//') || decoded.split('/').some(part => part === '.' || part === '..')) fail(where, `unsicherer lokaler Pfad ${value}`);
  if (route && (/[?#]/.test(value) || !value.endsWith('/') || value === '/404/')) fail(where, 'Seitenpfad mit abschließendem / ohne Query/Fragment erwartet; /404/ ist reserviert');
  if (file && (!decoded.startsWith('/assets/') || /[?#]/.test(value) || value.endsWith('/'))) fail(where, 'lokale Datei unter /assets/ ohne Query/Fragment erwartet');
  return new URL(value, 'https://local.invalid');
}

function metadata(item, where) {
  optional(item.reviewedAt, calendarDate, where + '.reviewedAt');
  optional(item.reviewStatus, (v, w) => choice(v, ['unknown', 'pending', 'reviewed', 'needs-review'], w), where + '.reviewStatus');
  optional(item.schoolYear, (v, w) => {
    string(v, w);
    const match = v.match(/^(\d{4})\/(\d{2})$/);
    if (!match || Number(match[1]) < 1 || (Number(match[1]) + 1) % 100 !== Number(match[2])) fail(w, 'Schuljahr YYYY/YY mit Folgejahr erwartet; unbekannt = null');
  }, where + '.schoolYear');
  for (const field of ['validFrom', 'validTo']) optional(item[field], calendarDate, where + '.' + field);
  if (item.validFrom && item.validTo && item.validFrom > item.validTo) fail(where + '.validTo', 'liegt vor validFrom');
  optional(item.provenance, (v, w) => {
    object(v, w);
    choice(v.kind, ['briefing', 'school-supplied', 'editorial', 'unknown'], w + '.kind');
    optional(v.sourceUrl, httpUrl, w + '.sourceUrl');
    optional(v.note, string, w + '.note');
  }, where + '.provenance');
  optional(item.availability, (v, w) => {
    object(v, w);
    choice(v.status, ['unknown', 'reachable', 'unreachable', 'blocked'], w + '.status');
    optional(v.checkedAt, calendarDate, w + '.checkedAt');
    optional(v.note, string, w + '.note');
  }, where + '.availability');
  optional(item.editorial, (v, w) => {
    object(v, w);
    optional(v.note, string, w + '.note');
    optional(v.sourceUrl, httpUrl, w + '.sourceUrl');
  }, where + '.editorial');
}

export function validateContent(data, { inventory } = {}) {
  object(data, 'content');
  const { pages, news, media, documents, refs, nav, people, classes, redirects, quickLinks, settings, conflicts } = data;
  object(people, 'people');
  array(people.groups, 'people.groups');
  const mediaIds = unique(media, 'id', 'media');
  const refIds = unique(refs, 'id', 'refs');
  unique(documents, 'id', 'documents');
  unique(news, 'id', 'news');
  unique(pages, 'url', 'pages');
  const reference = (id, known, where) => {
    string(id, where);
    if (!known.has(id)) fail(where, `unbekannte referenzierte ID ${id}`);
  };
  const references = (ids, known, where) => {
    uniqueStrings(ids, where);
    ids.forEach(id => reference(id, known, where));
  };
  const routes = new Map([['/', new Set(['inhalt', 'oben', 'hauptnavigation'])]]);
  for (const item of [...pages, ...news]) {
    const w = `${pages.includes(item) ? 'pages' : 'news'}[${item.id || item.url}]`;
    const url = localPath(item.url, w + '.url', { route: true });
    const key = decodeURIComponent(url.pathname).normalize('NFC');
    if (routes.has(key)) fail(w + '.url', `doppelter Seitenpfad ${key}`);
    routes.set(key, new Set(['inhalt', 'oben', 'hauptnavigation']));
  }
  const target = (value, where, current = '/') => {
    string(value, where);
    if (/^https?:\/\//.test(value)) return httpUrl(value, where);
    if (/^(mailto|tel):[^\s<>"\\]+$/.test(value)) return;
    if (value.startsWith('#')) value = current + value;
    const url = localPath(value, where);
    const key = decodeURIComponent(url.pathname).normalize('NFC');
    const anchors = routes.get(key);
    if (!anchors) fail(where, `unauflösbarer Seitenpfad ${value}`);
    if (url.hash) {
      let anchor;
      try { anchor = decodeURIComponent(url.hash.slice(1)); } catch { fail(where, `ungültige Ankerkodierung ${value}`); }
      if (!anchors.has(anchor)) fail(where, `unauflösbarer Anker ${value}`);
    }
  };
  const pairs = (value, where) => {
    array(value, where);
    value.forEach((pair, i) => {
      array(pair, `${where}[${i}]`);
      if (pair.length !== 2) fail(`${where}[${i}]`, 'Textpaar erwartet');
      pair.forEach((text, j) => string(text, `${where}[${i}][${j}]`));
    });
  };
  const notice = (value, where) => {
    object(value, where);
    string(value.title, where + '.title');
    string(value.text, where + '.text');
  };
  for (const p of pages) {
    const w = `pages[${p.url}]`;
    metadata(p, w);
    for (const field of ['title', 'intro', 'eyebrow']) string(p[field], w + '.' + field);
    optional(p.navTitle, string, w + '.navTitle');
    choice(p.theme, ['green', 'peach', 'yellow', 'blue'], w + '.theme');
    optional(p.kind, (v, c) => choice(v, ['page', 'team', 'classes', 'schedule', 'parents', 'schoollife', 'news', 'children', 'photos', 'downloads', 'contact', 'search'], c), w + '.kind');
    optional(p.legal, boolean, w + '.legal');
    optional(p.notice, notice, w + '.notice');
    optional(p.sourceUrls, (v, c) => { strings(v, c); v.forEach(u => httpUrl(u, c)); }, w + '.sourceUrls');
    optional(p.imageId, (v, c) => reference(v, mediaIds, c), w + '.imageId');
    optional(p.documents, (v, c) => references(v, refIds, c), w + '.documents');
    unique(p.sections, 'id', w + '.sections');
    const anchors = routes.get(decodeURIComponent(p.url).normalize('NFC'));
    const addAnchor = id => {
      if (!/^[\p{L}\p{N}_-]+$/u.test(id) || anchors.has(id)) fail(w + '.sections[' + id + ']', 'ungültiger/doppelter oder reservierter Anker');
      anchors.add(id);
    };
    for (const s of p.sections) addAnchor(s.id);
    const specialAnchors = p.kind === 'team' ? people.groups.map((_, i) => `team-${i}`) : p.kind === 'search' ? ['site-query', 'search-status', 'search-results'] : ['news', 'downloads'].includes(p.kind) ? ['filter-search', 'filter-category', 'filter-extra'] : [];
    if (p.sections.some(s => s.map)) specialAnchors.push('load-map', 'unload-map');
    specialAnchors.forEach(addAnchor);
    for (const s of p.sections) {
      const sw = w + `.sections[${s.id}]`;
      metadata(s, sw);
      string(s.title, sw + '.title');
      optional(s.paragraphs, strings, sw + '.paragraphs');
      optional(s.note, notice, sw + '.note');
      optional(s.contact, (v, c) => {
        object(v, c);
        string(v.name, c + '.name');
        string(v.role, c + '.role');
        optional(v.email, (email, cw) => target('mailto:' + email, cw), c + '.email');
        optional(v.phoneHref, (phone, cw) => target('tel:' + phone, cw), c + '.phoneHref');
      }, sw + '.contact');
      for (const field of ['facts', 'values', 'steps']) optional(s[field], pairs, sw + '.' + field);
      for (const field of ['map', 'schedule']) optional(s[field], boolean, sw + '.' + field);
      optional(s.media, (v, c) => references(v, mediaIds, c), sw + '.media');
      optional(s.documents, (v, c) => references(v, refIds, c), sw + '.documents');
      optional(s.documentCategory, (v, c) => {
        string(v, c);
        if (!documents.some(d => d.category === v)) fail(c, `unbekannte Dokumentkategorie ${v}`);
      }, sw + '.documentCategory');
    }
  }
  // Links are resolved after every page's anchors have been collected.
  for (const p of pages) for (const s of p.sections) {
    if (s.links !== undefined) {
      pairs(s.links, `pages[${p.url}].sections[${s.id}].links`);
      s.links.forEach(([, url]) => target(url, `pages[${p.url}].sections[${s.id}].links`, p.url));
    }
  }
  for (const n of news) {
    const w = `news[${n.id}]`;
    metadata(n, w);
    for (const field of ['title', 'summary', 'category']) string(n[field], w + '.' + field);
    strings(n.paragraphs, w + '.paragraphs');
    calendarDate(n.published, w + '.published');
    optional(n.eventDate, calendarDate, w + '.eventDate');
    optional(n.eventNote, string, w + '.eventNote');
    optional(n.schoolYearBasis, string, w + '.schoolYearBasis');
    httpUrl(n.sourceUrl, w + '.sourceUrl');
    boolean(n.historical, w + '.historical');
    optional(n.imageId, (v, c) => reference(v, mediaIds, c), w + '.imageId');
    references(n.documentIds, refIds, w + '.documentIds');
  }
  const owners = new Map();
  for (const d of [...refs, ...documents]) {
    const w = `${refs.includes(d) ? 'refs' : 'documents'}[${d.id}]`;
    metadata(d, w);
    for (const field of ['title', 'originalTitle', 'category', 'language', 'stand', 'status']) string(d[field], w + '.' + field);
    choice(d.type, ['PDF', 'Webbeitrag'], w + '.type');
    httpUrl(d.originalUrl, w + '.originalUrl');
    httpUrl(d.sourceUrl, w + '.sourceUrl');
    optional(d.note, string, w + '.note');
    if (!documents.includes(d)) continue;
    references(d.referenceIds, refIds, w + '.referenceIds');
    if (!d.referenceIds.length) fail(w + '.referenceIds', 'mindestens ein Verweis erwartet');
    array(d.sources, w + '.sources');
    for (const source of d.sources) {
      object(source, w + '.sources');
      httpUrl(source.url, w + '.sources.url');
      string(source.title, w + '.sources.title');
    }
    for (const id of d.referenceIds) {
      if (owners.has(id)) fail(w + '.referenceIds', `Verweis ${id} bereits ${owners.get(id).id} zugeordnet`);
      owners.set(id, d);
    }
  }
  unique(documents, 'originalUrl', 'documents');
  for (const ref of refs) {
    const d = owners.get(ref.id);
    if (!d) fail(`refs[${ref.id}]`, 'keiner Dokumentressource zugeordnet');
    if (d.originalUrl !== ref.originalUrl || !d.sources.some(s => s.url === ref.sourceUrl && s.title === ref.originalTitle)) fail(`refs[${ref.id}]`, `Originaladresse/Quellzuordnung weicht von documents[${d.id}] ab`);
  }
  for (const m of media) {
    const w = `media[${m.id}]`;
    metadata(m, w);
    for (const field of ['context', 'alt', 'rights', 'status']) string(m[field], w + '.' + field);
    httpUrl(m.originalUrl, w + '.originalUrl');
    optional(m.source, httpUrl, w + '.source');
    optional(m.localFile, (v, c) => localPath(v, c, { file: true }), w + '.localFile');
    const dimension = (v, c) => { if (!Number.isSafeInteger(v) || v <= 0) fail(c, 'positive ganzzahlige Pixelzahl erwartet'); };
    for (const field of ['width', 'height']) optional(m[field], dimension, w + '.' + field);
    optional(m.variants, (variants, c) => {
      unique(variants, 'url', c);
      for (const v of variants) {
        localPath(v.url, c + '.url', { file: true });
        dimension(v.width, c + '.width');
        optional(v.height, dimension, c + '.height');
      }
    }, w + '.variants');
  }
  array(nav, 'navigation');
  unique(nav, 'url', 'navigation');
  for (const group of nav) {
    const w = `navigation[${group.url}]`;
    string(group.title, w + '.title');
    target(group.url, w + '.url');
    pairs(group.items, w + '.items');
    group.items.forEach(([, url]) => target(url, w + '.items'));
    if (new Set(group.items.map(([, url]) => url)).size !== group.items.length) fail(w + '.items', 'doppeltes Navigationsziel');
  }
  array(quickLinks, 'quickLinks');
  quickLinks.forEach((q, i) => {
    array(q, `quickLinks[${i}]`);
    if (q.length < 3 || q.length > 4) fail(`quickLinks[${i}]`, 'Titel, Ziel, Icon, optional Beschreibung erwartet');
    q.forEach((v, j) => string(v, `quickLinks[${i}][${j}]`));
    target(q[1], `quickLinks[${i}].url`);
  });
  object(people, 'people');
  metadata(people, 'people');
  string(people.stand, 'people.stand');
  unique(people.groups, 'title', 'people.groups');
  const persons = people.groups.flatMap(g => { array(g.people, `people.groups[${g.title}].people`); return g.people; });
  const personIds = unique(persons, 'id', 'people');
  for (const p of persons) {
    const w = `people[${p.id}]`;
    metadata(p, w);
    string(p.name, w + '.name');
    optional(p.role, string, w + '.role');
    optional(p.imageId, (v, c) => reference(v, mediaIds, c), w + '.imageId');
    optional(p.email, (v, c) => target('mailto:' + v, c), w + '.email');
    optional(p.phone, string, w + '.phone');
  }
  object(classes, 'classes');
  metadata(classes, 'classes');
  string(classes.stand, 'classes.stand');
  unique(classes.classes, 'class', 'classes');
  for (const c of classes.classes) {
    const w = `classes[${c.class}]`;
    metadata(c, w);
    string(c.name, w + '.name');
    uniqueStrings(c.teachers, w + '.teachers');
    optional(c.teacherIds, (v, context) => references(v, personIds, context), w + '.teacherIds');
  }
  unique(redirects, 'from', 'redirects');
  const redirectKeys = new Map();
  for (const r of redirects) {
    const w = `redirects[${r.from}]`;
    const from = localPath(r.from, w + '.from');
    if (from.hash) fail(w + '.from', 'HTTP-Quellroute darf keinen Anker enthalten');
    from.searchParams.sort();
    const key = decodeURIComponent(from.pathname).normalize('NFC') + from.search;
    if (redirectKeys.has(key) && redirectKeys.get(key) !== r.to) fail(w + '.from', 'widersprüchliche Ziele für dieselbe normalisierte Route');
    redirectKeys.set(key, r.to);
    localPath(r.to, w + '.to');
    target(r.to, w + '.to');
    string(r.reason, w + '.reason');
  }
  object(settings, 'settings');
  optional(settings.logoFile, (v, c) => localPath(v, c, { file: true }), 'settings.logoFile');
  httpUrl(settings.mapUrl, 'settings.mapUrl');
  unique(conflicts, 'id', 'editorial-review');
  for (const c of conflicts) {
    metadata(c, `editorial-review[${c.id}]`);
    for (const field of ['topic', 'evidence', 'action', 'status']) string(c[field], `editorial-review[${c.id}].${field}`);
  }
  if (inventory) assertMigration(data, inventory);
  return data;
}
