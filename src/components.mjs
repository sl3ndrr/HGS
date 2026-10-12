export const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
})[c]);
const paths = {
  arrow: 'M5 12h14m-6-6 6 6-6 6',
  heart: 'M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z',
  clock: 'M12 8v4l3 2 M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0',
  sun: 'M12 2v2m0 16v2M2 12h2m16 0h2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4m0-14.2-1.4 1.4M6.3 17.7l-1.4 1.4M17 12a5 5 0 1 1-10 0 5 5 0 0 1 10 0',
  meal: 'M4 3v7a3 3 0 0 0 6 0V3M7 3v19M20 22V3c-5 3-5 10 0 10',
  pencil: 'm16 3 5 5-12 12-6 1 1-6L16 3Zm-2 2 5 5',
  download: 'M12 3v12m-5-5 5 5 5-5M4 17v4h16v-4',
  chat: 'M21 11a9 9 0 0 1-9 9H3l2-5a9 9 0 1 1 16-4Z',
  phone: 'M6 3H3c-1 10 8 19 18 18v-3l-5-3-3 3-7-7 3-3-3-5Z',
  search: 'M21 21l-5-5M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0',
  menu: 'M3 6h18M3 12h18M3 18h18',
  close: 'm5 5 14 14M19 5 5 19',
  leaf: 'M20 3C5 2 1 9 6 16s16 3 14-13ZM4 21l13-13',
  file: 'M14 2H4v20h16V8l-6-6ZM14 2v6h6M8 13h8m-8 4h8',
  mail: 'M3 5h18v14H3V5Zm0 0 9 8 9-8',
  pin: 'M12 22s8-8 8-14A8 8 0 0 0 4 8c0 6 8 14 8 14ZM15 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0',
  up: 'm6 15 6-6 6 6',
  spark: 'm12 2 3 7 7 3-7 3-3 7-3-7-7-3 7-3 3-7'
};
export const icon = (name, classes = '') => [
  `<svg class="icon ${classes}" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">`,
  `<path d="${paths[name] || paths.arrow}"/>`,
  `</svg>`
].join('');
export const a = (title, url, classes = '') => `<a class="${classes}" href="${esc(url)}">${esc(title)}</a>`;
export const buttonLink = (title, url, variant = 'primary') => `<a class="button ${variant}" href="${esc(url)}">${esc(title)}${icon('arrow')}</a>`;
export const links = items => items?.length ? `<div class="text-links">${items.map(([t, u]) => `<a href="${esc(u)}">${esc(t)}${icon('arrow')}</a>`).join('')}</div>` : '';
export const notice = n => n ? `<aside class="notice"><span class="notice-dot" aria-hidden="true"></span><div><h2>${esc(n.title)}</h2><p>${esc(n.text)}</p></div></aside>` : '';
export const dateLabel = d => new Intl.DateTimeFormat('de-DE', {
  day: '2-digit',
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC'
}).format(new Date(`${d}T12:00:00Z`));
export function header(settings, navigation, url) {
  const brand = settings.logoFile ? `<img src="${esc(settings.logoFile)}" width="239" height="104" alt="Heinrich-Grupe-Schule Rosdorf">` : `<span class="wordmark"><span>Heinrich-Grupe<span class="brand-dot">.</span></span><span>Schule Rosdorf</span></span>`;
  return [
    `<a class="skip-link" href="#inhalt">Zum Inhalt springen</a>`,
    `<header class="site-header" id="oben">`,
    `<div class="header-inner">`,
    `<a class="brand" href="/" aria-label="Heinrich-Grupe-Schule – Startseite">${brand}</a>`,
    `<div class="header-tools">`,
    `<a href="/downloads/" class="utility">${icon('download')}<span>Downloads</span>`,
    `</a>`,
    `<a href="/suche/" class="search-link" aria-label="Website durchsuchen">${icon('search')}</a>`,
    `<button class="menu-toggle" aria-expanded="false" aria-controls="hauptnavigation">${icon('menu')}<span>Menü</span>`,
    `</button>`,
    `</div>`,
    [
      `<nav id="hauptnavigation" class="main-nav" aria-label="Hauptnavigation">${navigation.map(n => [
        `<details class="nav-group"${url.startsWith(n.url) ? ' data-active="true"' : ''}>`,
        `<summary>${esc(n.title)}<span class="chevron" aria-hidden="true">`,
        `</span>`,
        `</summary>`,
        `<div class="nav-dropdown">${n.items.map(([t, u]) => `<a href="${u}"${url === u ? ' aria-current="page"' : ''}>${esc(t)}${icon('arrow')}</a>`).join('')}</div>`,
        `</details>`
      ].join('')).join('')}<a class="nav-contact" href="/kontakt/"${url === '/kontakt/' ? ' aria-current="page"' : ''}>Kontakt${icon('arrow')}</a>`
    ].join(''),
    `</nav>`,
    `</div>`,
    `</header>`
  ].join('');
}
export function footer(s) {
  return [
    `<footer class="site-footer">`,
    `<div class="container footer-top">`,
    `<div>`,
    `<p class="eyebrow light">Heinrich-Grupe-Schule Rosdorf</p>`,
    `<p class="footer-motto">Bunt wie<br>`,
    `<em>das Leben.</em>`,
    `</p>`,
    `<span class="color-dots" aria-hidden="true">`,
    `<i>`,
    `</i>`,
    `<i>`,
    `</i>`,
    `<i>`,
    `</i>`,
    `<i>`,
    `</i>`,
    `</span>`,
    `</div>`,
    `<div>`,
    `<h2>Besuchen Sie uns</h2>`,
    `<address>${esc(s.address)}<br>${esc(s.postalCode)} ${esc(s.place)}</address>${a('Kontakt & Anfahrt', '/kontakt/', 'footer-link')}</div>`,
    `<div>`,
    [
      `<h2>In Verbindung bleiben</h2>${a(s.phone, `tel:${s.phoneHref}`, 'footer-link')}${a(s.officeEmail, `mailto:${s.officeEmail}`, 'footer-link')}${a('Krankmeldung über SchoolFox', '/eltern/krankmeldung/', 'footer-link')}</div>`
    ].join(''),
    `</div>`,
    `<div class="container footer-bottom">`,
    `<p>Grundschule · Schulkindergarten · Offener Ganztag</p>`,
    `<div>${a('Impressum', '/impressum/')}${a('Datenschutz', '/datenschutz/')}${a('Nach oben ↑', '#oben')}</div>`,
    `</div>`,
    `</footer>`,
    [
      `<nav class="mobile-bar" aria-label="Schnellzugänge">${[
        ['Krankmeldung', '/eltern/krankmeldung/', 'heart'],
        ['Zeiten', '/schulalltag/', 'clock'],
        ['Kontakt', '/kontakt/', 'phone']
      ].map(([t, u, i]) => `<a href="${u}">${icon(i)}<span>${t}</span></a>`).join('')}<button class="bottom-menu">${icon('menu')}<span>Menü</span>`
    ].join(''),
    `</button>`,
    `</nav>`
  ].join('');
}
export function breadcrumb(page, nav) {
  let parent = nav.find(n => page.url.startsWith(n.url));
  let entries = [['Startseite', '/']];
  if (parent && parent.url !== page.url) entries.push([parent.title, parent.url]);
  if (page.kind === 'news-detail') entries.push(['Nachrichten', '/schulleben/nachrichten/']);
  return [
    `<nav class="breadcrumbs" aria-label="Brotkrumennavigation">`,
    `<ol>${entries.map(([t, u]) => `<li>${a(t, u)}<span aria-hidden="true">/</span></li>`).join('')}<li aria-current="page">${esc(page.navTitle || page.title)}</li>`,
    `</ol>`,
    `</nav>`
  ].join('');
}
export function photo(id, media, {
  className = '',
  eager = false
} = {}) {
  const m = media.find(x => x.id === id);
  if (!m) return '';
  const source = m.localFile || m.originalUrl;
  return [
    `<figure class="media-figure ${className}" data-media-id="${esc(id)}">`,
    [
      `<div class="photo-frame${m.localFile ? ' local' : ''}"${m.localFile ? '' : ' data-external-photo="true"'}>${m.localFile ? [
        [
          `<img src="${esc(source)}" width="${m.width || 960}" height="${m.height || 640}"${m.variants?.length ? ` srcset="${m.variants.map(v => `${esc(v.url)} ${v.width}w`).join(", ")}" sizes="(max-width: 760px) calc(100vw - 40px), (max-width: 1050px) 45vw, 800px"` : ""} alt="${esc(m.alt)}" loading="${eager ? 'eager' : 'lazy'}" decoding="async">`
        ].join('')
      ].join('') : [
        `<img data-src="${esc(source)}" width="960" height="640" alt="${esc(m.alt)}" hidden decoding="async">`,
        `<div class="photo-placeholder">`,
        `<span class="placeholder-art" aria-hidden="true">${icon('leaf')}</span>`,
        `<p>${esc(m.context)}</p>`,
        `<button type="button" class="photo-enable">Originalfoto laden ↗</button>`,
        `<span class="small">Externer Inhalt · nur nach Aktivierung</span>`,
        `</div>`
      ].join('')}<div class="photo-error" hidden>`
    ].join(''),
    `<p>Dieses Bild ist gerade nicht erreichbar.</p>${a('Originalressource öffnen ↗', m.originalUrl)}</div>`,
    `</div>`,
    `<figcaption>${esc(m.context)}</figcaption>`,
    `</figure>`
  ].join('');
}
export function docCard(d) {
  return [
    [
      `<li class="document" data-category="${esc(d.category)}" data-language="${esc(d.language)}" data-search="${esc([d.title, d.category, d.language, d.schoolYear, d.stand].join(' ').toLocaleLowerCase('de'))}">`
    ].join(''),
    `<div class="doc-symbol" aria-hidden="true">${icon('file')}</div>`,
    `<div class="doc-body">`,
    `<h3>`,
    `<a href="${esc(d.originalUrl)}">${esc(d.title)}<span class="sr-only"> (${esc(d.type)}, externe Ressource)</span>`,
    `</a>`,
    `</h3>`,
    [
      `<p class="doc-meta">${esc(d.type)} · ${esc(d.language)} · ${esc(d.schoolYear ? `Schuljahr ${d.schoolYear}` : d.stand)}</p>${d.note ? `<p class="small">${esc(d.note)}</p>` : ''}</div>`
    ].join(''),
    `<a class="doc-open" href="${esc(d.originalUrl)}" aria-label="${esc(d.title)} öffnen (${esc(d.type)}, externe Ressource)">${icon('download')}</a>`,
    `</li>`
  ].join('');
}
export function docList(docs) {
  return docs?.length ? `<ul class="document-list">${docs.map(docCard).join('')}</ul>` : '';
}
export function contactCard(c) {
  return [
    `<div class="contact-card">`,
    `<p class="eyebrow">${esc(c.role)}</p>`,
    [
      `<h3>${esc(c.name)}</h3>${c.phone ? `<a href="tel:${esc(c.phoneHref || c.phone.replaceAll(' ', ''))}">${icon('phone')}${esc(c.phone)}</a>` : ''}${c.email ? `<a href="mailto:${esc(c.email)}">${icon('mail')}${esc(c.email)}</a>` : ''}</div>`
    ].join('')
  ].join('');
}
export function newsCard(n, media) {
  return [
    [
      `<article class="news-card" data-category="${esc(n.category)}" data-year="${n.published.slice(0, 4)}" data-search="${esc((n.title + ' ' + n.summary).toLocaleLowerCase('de'))}">${n.imageId ? photo(n.imageId, media, {
        className: 'news-photo'
      }) : `<div class="news-art" aria-hidden="true">${icon(n.category === 'Natur & Umwelt' ? 'leaf' : n.category === 'Bewegung' ? 'sun' : 'spark')}</div>`}<div class="news-card-body">`
    ].join(''),
    `<div class="news-meta">`,
    `<span>${esc(n.category)}</span>`,
    `<time datetime="${n.published}">${dateLabel(n.published)}</time>`,
    `</div>`,
    `<h2>${a(n.title, n.url)}</h2>`,
    `<p>${esc(n.summary)}</p>`,
    `<a class="read-more" href="${n.url}">Bericht lesen${icon('arrow')}<span class="sr-only">: ${esc(n.title)}</span>`,
    `</a>`,
    `</div>`,
    `</article>`
  ].join('');
}
export function quickGrid(items, {
  compact = false
} = {}) {
  return [
    [
      `<div class="quick-grid${compact ? ' compact' : ''}">${items.map(([t, u, i, desc], index) => [
        `<a href="${u}" class="quick-card tone-${index % 4}">`,
        `<span class="quick-icon">${icon(i)}</span>`,
        `<span>`,
        `<strong>${esc(t)}</strong>${desc ? `<small>${esc(desc)}</small>` : ''}</span>${icon('arrow', 'quick-arrow')}</a>`
      ].join('')).join('')}</div>`
    ].join('')
  ].join('');
}
