// Integrity checks cover the migration rather than re-testing template details.
import {readFile,readdir} from 'node:fs/promises';import path from 'node:path';import {fileURLToPath} from 'node:url';
import assert from 'node:assert/strict';
const root=fileURLToPath(new URL('../',import.meta.url)),dist=path.join(root,'dist');
const read=async n=>JSON.parse(await readFile(path.join(root,'content',n+'.json'),'utf8'));
const [news,media,refs,docs,redirects]=await Promise.all(['news','media','document-references','documents','redirects'].map(read));
assert.equal(news.length,33);assert.equal(media.length,57);assert.equal(refs.length,72);assert.equal(docs.length,70);
const brief=await readFile(path.join(root,'docs/RELAUNCH-BRIEFING.md'),'utf8');
for(const m of [...media,...refs])assert(brief.includes(m.originalUrl),`Original URL modified: ${m.id}`);
for(const n of news){assert(brief.includes(n.sourceUrl));assert.match(n.published,/^\d{4}-\d{2}-\d{2}$/);assert(n.eventDate===null||/^\d{4}-\d{2}-\d{2}$/.test(n.eventDate));}
const html=new Map();async function walk(dir){for(const item of await readdir(dir,{withFileTypes:true})){const file=path.join(dir,item.name);if(item.isDirectory())await walk(file);else if(item.name.endsWith('.html'))html.set(file,await readFile(file,'utf8'));}}await walk(dist);
const decodeEntities=s=>s.replaceAll('&amp;','&').replaceAll('&#39;',"'").replaceAll('&quot;','"');
let links=0;for(const [file,text]of html){assert.equal((text.match(/<h1[ >]/g)||[]).length,1,`${file}: missing/duplicate h1`);assert(text.includes('<html lang="de">'));assert(text.includes('<title>'));for(const m of text.matchAll(/(?:href|src)="([^"]+)"/g)){const target=decodeEntities(m[1]);if(!target.startsWith('/')&&!target.startsWith('#'))continue;links++;const url=new URL(target,'http://local/'+path.relative(dist,file).replace(/index\.html$/,''));let pathname=decodeURIComponent(url.pathname);let dest=pathname==='/404/'?path.join(dist,'404.html'):path.join(dist,pathname.endsWith('/')?pathname+'index.html':pathname);if(target.startsWith('#'))dest=file;let content;try{content=html.get(dest)||await readFile(dest,'utf8');}catch{throw Error(`${path.relative(root,file)}: broken local target ${target}`);}if(url.hash){const id=decodeURIComponent(url.hash.slice(1));assert(content.includes(`id="${id}"`),`${file}: missing anchor ${target}`);}}}
for(const r of redirects){const target=new URL(r.to,'http://local');const file=path.join(dist,target.pathname,'index.html');assert(html.has(file),`Redirect target missing ${r.to}`);if(target.hash)assert(html.get(file).includes(`id="${decodeURIComponent(target.hash.slice(1))}"`));}
const all=[...html.values()].join('\n');assert(!/<iframe/.test(all),'Map must not load before activation');assert(!/https?:\/\/[^" ]+\.(?:webp|jpg|png)[^" ]*"[^>]*\bsrc=/.test(all));
assert(!all.includes('form_id=10032229" method="post"'));console.log(`Integrity passed: ${html.size} HTML files, ${links} internal references, ${redirects.length} redirects, exact source registries.`);
