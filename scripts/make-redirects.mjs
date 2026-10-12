// Run after adding an old route. No guessed original resource URLs.
import { readFile, writeFile } from 'node:fs/promises';
const brief = await readFile(new URL('../docs/RELAUNCH-BRIEFING.md', import.meta.url), 'utf8');
const news = JSON.parse(await readFile(new URL('../content/news.json', import.meta.url), 'utf8'));
const map = {
  '708809': '/unsere-schule/',
  '765392': '/eltern/schul-abc/',
  '708728': '/unsere-schule/team/',
  '708729': '/eltern/beratung/#sozialarbeit',
  '708730': '/unsere-schule/klassen/',
  '708731': '/unsere-schule/mitwirkung/#schulvorstand',
  '708732': '/unsere-schule/mitwirkung/#elternrat',
  '708733': '/unsere-schule/mitwirkung/#konferenzen',
  '708806': '/unsere-schule/entwicklung/',
  '708736': '/schulalltag/#verlässlichkeit',
  '708737': '/schulalltag/ganztag/',
  '708739': '/schulalltag/mittagessen/',
  '708749': '/mitmachen/foerderverein/',
  '708744': '/eltern/schoolfox/',
  '708746': '/schulalltag/',
  '708747': '/eltern/konzepte/',
  '847750': '/eltern/krankmeldung/',
  '708755': '/eltern/zeugnisse/',
  '708756': '/eltern/beratung/',
  '748797': '/mitmachen/kooperationen/#angebote',
  '765298': '/eltern/anmeldung/',
  '858078': '/eltern/beratung/#mobbing',
  '708759': '/schulleben/',
  '713223': '/schulleben/kinderstimmen/',
  '765366': '/mitmachen/kooperationen/',
  '806610': '/schulalltag/schulobst/',
  '766080': '/schulleben/projekte/',
  '708761': '/downloads/'
};
const entries = [];
const add = (from, to, reason = 'Inhalt migriert') => {
  if (!entries.some(r => r.from === from)) entries.push({
    from,
    to,
    reason
  });
};
for (const match of brief.matchAll(/https:\/\/www\.heinrich-grupe-schule\.de(\/seite\/(\d+)\/[^)\s]+)/g)) {
  if (map[match[2]]) {
    add(match[1], map[match[2]], match[2] === '708759' ? 'Leerer Surftipps-Menüpunkt bereinigt; Schulleben als Einstieg' : undefined);
    add('/m' + match[1], map[match[2]], 'Mobile Altansicht zusammengeführt');
  }
}
for (const n of news) {
  const old = new URL(n.sourceUrl).pathname;
  add(old, n.url);
  add('/m' + old, n.url);
}
for (const [old, target] of [['/index.php', '/'], ['/m/', '/'], ['/news/index.php?rubrik=1', '/schulleben/nachrichten/'], ['/news/index.php?archiv=1&rubrik=1', '/schulleben/nachrichten/'], ['/news/1', '/schulleben/nachrichten/'], ['/veranstaltungen/index.php', '/schulleben/termine/'], ['/formulare/index.php?form_id=10032229', '/kontakt/'], ['/impressum/index.php', '/impressum/'], ['/datenschutz/index.php', '/datenschutz/'], ['/?modus=drucken', '/'], ['/fotos/2/214451/sonstige/projektwoche-2025/', '/schulleben/fotos/'], ['/fotos/2/album/projektwoche/', '/schulleben/fotos/']]) add(old, target, 'Bestandsfunktion neu zugeordnet');
// Linkversand is removed rather than reusing a form without a delivery service.
add('/contact/index/link/', '/kontakt/', 'Alter Linkversand entfällt; URL kann direkt geteilt werden');
await writeFile(new URL('../content/redirects.json', import.meta.url), JSON.stringify(entries, null, 2) + '\n');
console.log(`${entries.length} documented old routes`);
