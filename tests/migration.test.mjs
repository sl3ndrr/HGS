import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
const read = async n => JSON.parse(await readFile(new URL(`../content/${n}.json`, import.meta.url), 'utf8'));
test('All archived contributions are preserved with unique stable URLs and dates', async () => {
  const n = await read('news');
  assert.equal(n.length, 33);
  assert.equal(new Set(n.map(x => x.id)).size, 33);
  assert.equal(new Set(n.map(x => x.url)).size, 33);
  assert.deepEqual(n.reduce((a, x) => (a[x.published.slice(0, 4)]++, a), {
    '2026': 0,
    '2025': 0,
    '2024': 0
  }), {
    '2026': 10,
    '2025': 21,
    '2024': 2
  });
  assert.equal(n.find(x => x.id === '1251211').eventDate, '2026-06-11');
  assert.equal(n.find(x => x.id === '1256501').eventDate, null);
});
test('Every original document reference maps to a resource, including duplicates', async () => {
  const [refs, docs] = await Promise.all([read('document-references'), read('documents')]);
  assert.equal(refs.length, 72);
  for (const ref of refs) {
    const d = docs.find(d => d.referenceIds.includes(ref.id));
    assert(d, ref.id);
    assert.equal(d.originalUrl, ref.originalUrl);
    assert(d.sources.some(s => s.url === ref.sourceUrl));
  }
  assert.match(docs.find(d => d.id === 'D68').title, /Förderverein/);
});
test('No original media URL has been altered or a gallery URL invented', async () => {
  const m = await read('media');
  const brief = await readFile(new URL('../docs/RELAUNCH-BRIEFING.md', import.meta.url), 'utf8');
  assert.equal(m.length, 57);
  for (const item of m) assert(brief.includes(item.originalUrl));
  assert(m.find(x => x.id === 'B02').originalUrl.includes('/dateien//mypage/'));
  assert(m.find(x => x.id === 'N19').originalUrl.includes('Pra%CC%88mie'));
});
test('Planning remains planning and missing topics remain explicit', async () => {
  const {
    pages
  } = await import('../content/pages.mjs');
  assert.match(pages.find(p => p.url === '/eltern/zeugnisse/').notice.text, /nicht nachgewiesen/);
  assert.match(pages.find(p => p.url === '/mitmachen/kooperationen/').sections.find(s => s.id === 'angebote').paragraphs.join(' '), /nicht abrufbar/);
});
