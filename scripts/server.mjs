// Small dependency-free static server. Shared dev and production routing semantics.
import http from 'node:http';
import {readFile,stat} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {execFileSync} from 'node:child_process';
const root=fileURLToPath(new URL('../',import.meta.url));
if(!process.argv.includes('--production'))execFileSync(process.execPath,[path.join(root,'scripts/build.mjs')],{stdio:'inherit'});
const dist=path.join(root,'dist');
const redirects=JSON.parse(await readFile(path.join(dist,'redirects.json'),'utf8'));
const normalize=(s)=>{try{const u=new URL(s,'http://local');return decodeURIComponent(u.pathname)+'?'+[...u.searchParams].sort(([a],[b])=>a.localeCompare(b)).map(([k,v])=>`${k}=${v}`).join('&');}catch{return s;}};
const mime={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.json':'application/json; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.webp':'image/webp','.gif':'image/gif','.pdf':'application/pdf','.xml':'application/xml; charset=utf-8','.txt':'text/plain; charset=utf-8'};
const csp="default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' https://daten.verwaltungsportal.de https://fotos.verwaltungsportal.de; frame-src https://www.google.com; connect-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'self'";
const server=http.createServer(async(req,res)=>{res.setHeader('X-Content-Type-Options','nosniff');res.setHeader('Referrer-Policy','no-referrer');res.setHeader('Permissions-Policy','camera=(), microphone=(), geolocation=()');res.setHeader('Content-Security-Policy',csp);res.setHeader('X-Frame-Options','SAMEORIGIN');
if(!['GET','HEAD'].includes(req.method)){res.writeHead(405,{'Allow':'GET, HEAD'});res.end('Method not allowed');return;}
try{const url=new URL(req.url,'http://local');let pathname=decodeURIComponent(url.pathname);const target=redirects.find(r=>normalize(r.from)===normalize(req.url))||redirects.find(r=>!r.from.includes('?')&&decodeURIComponent(r.from)===pathname);if(target){res.writeHead(301,{Location:encodeURI(target.to)});res.end();return;}
let file=path.resolve(dist,'.'+pathname);if(!file.startsWith(dist+path.sep)&&file!==dist){res.writeHead(403);res.end();return;}
let info;try{info=await stat(file);}catch{}
if(info?.isDirectory()){if(!pathname.endsWith('/')){res.writeHead(301,{Location:encodeURI(pathname+'/')+url.search});res.end();return;}file=path.join(file,'index.html');}
let status=200;let body;try{body=await readFile(file);}catch{status=404;file=path.join(dist,'404.html');body=await readFile(file);}
res.writeHead(status,{'Content-Type':mime[path.extname(file)]||'application/octet-stream','Cache-Control':process.argv.includes('--production')?'public, max-age=300':'no-cache'});res.end(req.method==='HEAD'?undefined:body);
}catch{res.writeHead(400,{'Content-Type':'text/plain; charset=utf-8'});res.end('Ungültige Anfrage');}});
const port=Number(process.env.PORT||4173),host=process.env.HOST||'0.0.0.0';
server.listen(port,host,()=>console.log(`HGS preview: http://${host}:${port}/`));
process.on('SIGTERM',()=>server.close());process.on('SIGINT',()=>server.close());
