import { readFile, writeFile, mkdir, rm, cp } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { pages, quickLinks } from '../content/pages.mjs';
import { createRenderers } from '../src/renderers/index.mjs';
import * as C from '../src/components.mjs';
import { normalizeBasePath, sitePath } from '../src/hosting.mjs';
const root = fileURLToPath(new URL('../', import.meta.url));
const read = async name => JSON.parse(await readFile(path.join(root, 'content', name + '.json'), 'utf8'));
const [settings, nav, news, documents, media, people, classes] = await Promise.all(['settings', 'navigation', 'news', 'documents', 'media', 'people', 'classes'].map(read));
const basePath = normalizeBasePath(process.env.BASE_PATH || '/');
const origin = new URL(process.env.SITE_URL || 'https://sl3ndrr.github.io');
if (!['https:', 'http:'].includes(origin.protocol) || origin.pathname !== '/' || origin.search || origin.hash || origin.username || origin.password) {
  throw new Error('SITE_URL must be an HTTP(S) origin without a project path. Set BASE_PATH separately.');
}
const siteUrl = origin.origin + (basePath === '/' ? '' : basePath.slice(0, -1));
const ready = process.env.RELEASE_READY === '1';
await rm(path.join(root, 'dist'), {
  recursive: true,
  force: true
});
await mkdir(path.join(root, 'dist'), {
  recursive: true
});
await cp(path.join(root, 'public'), path.join(root, 'dist'), {
  recursive: true
});
const writePage = async (url, html) => {
  const filename = url === '/' ? 'index.html' : path.join(url.slice(1), 'index.html');
  await mkdir(path.dirname(path.join(root, 'dist', filename)), {
    recursive: true
  });
  await writeFile(path.join(root, 'dist', filename), html);
};
const {
  homepage,
  layout,
  article,
  errorPage
} = createRenderers({
  settings,
  nav,
  news,
  documents,
  media,
  people,
  classes,
  quickLinks,
  siteUrl,
  ready,
  basePath
});
await writePage('/', homepage());
for (const p of pages) await writePage(p.url, layout(p));
for (const n of news) await writePage(n.url, article(n));
await writeFile(path.join(root, 'dist/404.html'), errorPage());
const searchIndex = [...pages.filter(p => !p.legal && p.kind !== 'search').map(p => ({
  title: p.navTitle || p.title,
  url: sitePath(p.url, basePath),
  type: 'Seite',
  text: [p.intro, ...p.sections.flatMap(s => [s.title, ...(s.paragraphs || [])])].join(' ')
})), ...news.map(n => ({
  title: n.title,
  url: sitePath(n.url, basePath),
  type: `Nachricht · ${n.published.slice(0, 4)}`,
  text: n.summary
})), ...documents.map(d => ({
  title: d.title,
  url: d.originalUrl,
  type: `${d.type} · ${d.language}`,
  text: [d.category, d.schoolYear, d.stand].filter(Boolean).join(' ')
}))];
await writeFile(path.join(root, 'dist/assets/search-index.json'), JSON.stringify(searchIndex));
const paths = ['/', ...pages.filter(p => p.kind !== 'search').map(p => p.url), ...news.map(n => n.url)];
await writeFile(path.join(root, 'dist/sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map(p => `<url><loc>${C.esc(siteUrl + p)}</loc></url>`).join('')}</urlset>`);
await writeFile(path.join(root, 'dist/robots.txt'), `User-agent: *\n${ready ? 'Allow: /' : 'Disallow: /'}\nSitemap: ${siteUrl}/sitemap.xml\n`);
const redirects = JSON.parse(await readFile(path.join(root, 'content/redirects.json'), 'utf8'))
  .map(r => ({ ...r, from: sitePath(r.from, basePath), to: sitePath(r.to, basePath) }));
await writeFile(path.join(root, 'dist/redirects.json'), JSON.stringify(redirects, null, 2));
await writeFile(path.join(root, 'dist/_redirects'), redirects.filter(r => !r.from.includes('?')).map(r => `${r.from} ${r.to} 301`).join('\n') + '\n');
await writeFile(path.join(root, 'dist/_headers'), '/*\n  X-Content-Type-Options: nosniff\n  Referrer-Policy: no-referrer\n  Permissions-Policy: camera=(), microphone=(), geolocation=()\n  X-Frame-Options: SAMEORIGIN\n');
await writeFile(path.join(root, 'dist/.nojekyll'), '');
await writeFile(path.join(root, 'dist/build-config.json'), JSON.stringify({ basePath, siteUrl, concept: !ready }, null, 2) + '\n');
console.log(`Build successful: ${1 + pages.length + news.length} pages + 404; ${news.length} news; ${documents.length} resources; ${media.length} media; indexing ${ready ? 'enabled' : 'disabled'}.`);
