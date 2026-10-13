// Integrity checks cover the migration rather than re-testing template details.
import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import assert from 'node:assert/strict';
import { loadContent, loadInventory } from '../src/content-data.mjs';
import { validateContent } from '../src/validate-content.mjs';
const root = fileURLToPath(new URL('../', import.meta.url)),
  dist = path.join(root, 'dist');
const { basePath, concept } = JSON.parse(await readFile(path.join(dist, 'build-config.json'), 'utf8'));
const unscoped = pathname => {
  assert(pathname.startsWith(basePath), `Path escapes project: ${pathname}`);
  return '/' + pathname.slice(basePath.length);
};
validateContent(await loadContent(), { inventory: await loadInventory() });
const redirects = JSON.parse(await readFile(path.join(dist, 'redirects.json'), 'utf8'));
const html = new Map();
async function walk(dir) {
  for (const item of await readdir(dir, {
    withFileTypes: true
  })) {
    const file = path.join(dir, item.name);
    if (item.isDirectory()) await walk(file);else if (item.name.endsWith('.html')) html.set(file, await readFile(file, 'utf8'));
  }
}
await walk(dist);
const decodeEntities = s => s.replaceAll('&amp;', '&').replaceAll('&#39;', "'").replaceAll('&quot;', '"');
let links = 0;
for (const [file, text] of html) {
  assert.equal((text.match(/<h1[ >]/g) || []).length, 1, `${file}: missing/duplicate h1`);
  assert(text.includes('<html lang="de">'));
  assert(text.includes('<title>'));
  if (concept) assert(text.includes('<meta name="robots" content="noindex,follow">'));
  assert(text.includes(`<meta name="site-base-path" content="${basePath}">`));
  const ids = [...text.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]);
  assert.equal(new Set(ids).size, ids.length, `${file}: duplicate HTML id`);
  for (const m of text.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const target = decodeEntities(m[1]);
    if (!target.startsWith('/') && !target.startsWith('#')) continue;
    links++;
    const url = new URL(target, 'http://local' + basePath + path.relative(dist, file).replace(/index\.html$/, ''));
    let pathname = unscoped(decodeURIComponent(url.pathname));
    let dest = pathname === '/404/' ? path.join(dist, '404.html') : path.join(dist, pathname.endsWith('/') ? pathname + 'index.html' : pathname);
    if (target.startsWith('#')) dest = file;
    let content;
    try {
      content = html.get(dest) || (await readFile(dest, 'utf8'));
    } catch {
      throw Error(`${path.relative(root, file)}: broken local target ${target}`);
    }
    if (url.hash) {
      const id = decodeURIComponent(url.hash.slice(1));
      assert(content.includes(`id="${id}"`), `${file}: missing anchor ${target}`);
    }
  }
}
for (const r of redirects) {
  const target = new URL(r.to, 'http://local');
  const file = path.join(dist, unscoped(decodeURIComponent(target.pathname)), 'index.html');
  assert(html.has(file), `Redirect target missing ${r.to}`);
  if (target.hash) assert(html.get(file).includes(`id="${decodeURIComponent(target.hash.slice(1))}"`));
}
const all = [...html.values()].join('\n');
assert(!/<iframe/.test(all), 'Map must not load before activation');
assert(!/https?:\/\/[^" ]+\.(?:webp|jpg|png)[^" ]*"[^>]*\bsrc=/.test(all));
assert(!all.includes('form_id=10032229" method="post"'));
console.log(`Integrity passed: ${html.size} HTML files, ${links} internal references, ${redirects.length} redirects, exact source registries.`);
