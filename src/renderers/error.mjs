import * as C from '../components.mjs';
export function renderErrorPage({
  shell,
  quickLinks
}) {
  const error = {
    url: '/404/',
    title: 'Hier wächst noch nichts.',
    navTitle: 'Seite nicht gefunden',
    intro: 'Diese Seite ist nicht vorhanden. Über die Startseite oder die Suche finden Sie den passenden Weg.',
    theme: 'yellow'
  };
  return shell(error, [
    `<main id="inhalt" tabindex="-1" class="container error-page">`,
    `<p class="eyebrow">404 · Seite nicht gefunden</p>`,
    `<h1>Hier wächst<br>noch nichts.</h1>`,
    `<p>Der Link ist möglicherweise veraltet. Wir helfen Ihnen beim Weiterfinden.</p>`,
    `<div class="hero-actions">${C.buttonLink('Zur Startseite', '/')}${C.buttonLink('Website durchsuchen', '/suche/', 'secondary')}</div>${C.quickGrid(quickLinks, {
        compact: true
      })}</main>`
  ].join(''));
}
