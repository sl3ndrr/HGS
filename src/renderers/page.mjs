import * as C from '../components.mjs';
export function createPageRenderer({
  nav,
  media,
  findDocs,
  shell,
  section,
  special
}) {
  function layout(page) {
    const wide = ['news', 'downloads', 'classes', 'search', 'schoollife', 'children'].includes(page.kind);
    const sidebar = page.sections.length ? [
      `<aside class="page-sidebar">`,
      `<nav aria-label="Auf dieser Seite">`,
      `<p class="eyebrow">Auf dieser Seite</p>`,
      `<ul>${page.sections.map(s => `<li><a href="#${s.id}">${C.esc(s.title)}</a></li>`).join('')}</ul>`,
      `</nav>`,
      `<div class="sidebar-help">${C.icon('chat')}<h2>Noch eine Frage?</h2>`,
      `<p>Wir helfen Ihnen gerne weiter.</p>${C.a('Kontakt aufnehmen', '/kontakt/', 'read-more')}</div>`,
      `</aside>`
    ].join('') : '';
    return shell(page, [
      `<main id="inhalt" tabindex="-1">`,
      `<div class="container">${C.breadcrumb(page, nav)}</div>`,
      `<div class="page-heading">`,
      `<div class="container">`,
      `<p class="eyebrow">${C.esc(page.eyebrow)}</p>`,
      `<h1>${C.esc(page.title)}</h1>`,
      `<p class="intro">${C.esc(page.intro)}</p>`,
      `<span class="heading-mark" aria-hidden="true">${C.icon(page.theme === 'green' ? 'leaf' : page.theme === 'yellow' ? 'sun' : page.theme === 'blue' ? 'chat' : 'spark')}</span>`,
      `</div>`,
      `</div>`,
      `<div class="container page-content${wide ? ' wide' : ''}">${!wide ? sidebar : ''}<div class="page-body">${C.notice(page.notice)}${['parents', 'contact', 'search'].includes(page.kind) ? special(page) : ''}${page.imageId ? C.photo(page.imageId, media, {
          className: 'intro-photo'
        }) : ''}${page.sections.map(section).join('')}${!['parents', 'contact', 'search'].includes(page.kind) ? special(page) : ''}${page.documents ? C.docList(findDocs(page.documents)) : ''}${page.sourceUrls?.length ? [
          `<details class="source-note">`,
          `<summary>Quellen & Informationsstand</summary>`,
          `<p>Webtexte auf Grundlage des Briefings vom 12.10.2026. Abweichende Schuljahre und ungeklärte Angaben sind an den betreffenden Stellen gekennzeichnet.</p>`,
          `<ul>${page.sourceUrls.map(u => `<li>${C.a('Originalseite ↗', u)}</li>`).join('')}</ul>`,
          `</details>`
        ].join('') : ''}</div>`,
      `</div>`,
      `</main>`
    ].join(''));
  }
  return layout;
}
