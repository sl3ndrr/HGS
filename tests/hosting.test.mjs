import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { normalizeBasePath, sitePath, scopeHtml } from '../src/hosting.mjs';

test('Project paths keep queries, anchors, Unicode and external URLs intact', () => {
  assert.equal(normalizeBasePath('/HGS'), '/HGS/');
  assert.equal(normalizeBasePath('/'), '/');
  for (const invalid of ['https://example.com', '/a/../b/', '//HGS/', '/HGS/?x=1']) {
    assert.throws(() => normalizeBasePath(invalid));
  }
  assert.equal(sitePath('/schulalltag/#verlässlichkeit', '/HGS/'), '/HGS/schulalltag/#verlässlichkeit');
  assert.equal(sitePath('/suche/?q=a%20b', '/HGS/'), '/HGS/suche/?q=a%20b');
  for (const url of ['#oben', 'mailto:a@example.com', '//example.com/a', 'https://example.com/a%CC%88?x=1&y=2']) {
    assert.equal(sitePath(url, '/HGS/'), url);
  }
  const input = '<a href="/kontakt/">Kontakt</a><img src="/assets/a.png" srcset="/assets/a.png 480w, /assets/b.png 960w"><a href="https://example.com//a?x=1&amp;y=2">Quelle</a>';
  assert.equal(scopeHtml(input, '/HGS/'), '<a href="/HGS/kontakt/">Kontakt</a><img src="/HGS/assets/a.png" srcset="/HGS/assets/a.png 480w, /HGS/assets/b.png 960w"><a href="https://example.com//a?x=1&amp;y=2">Quelle</a>');
});

test('Built search results and metadata use the same hosting path', async () => {
  const read = file => readFile(new URL(`../dist/${file}`, import.meta.url), 'utf8');
  const { basePath, siteUrl, concept } = JSON.parse(await read('build-config.json'));
  const html = await read('index.html');
  assert(html.includes(`href="${basePath}assets/site.css"`));
  assert(html.includes(`rel="canonical" href="${siteUrl}/"`));
  if (concept) assert(html.includes('content="noindex,follow"'));
  for (const result of JSON.parse(await read('assets/search-index.json'))) {
    if (result.type === 'Seite' || result.type.startsWith('Nachricht')) {
      assert(result.url.startsWith(basePath), result.url);
    }
  }
  assert.equal(await read('.nojekyll'), '');
});
