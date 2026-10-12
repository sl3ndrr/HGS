import * as C from '../components.mjs';
export function createArticleRenderer({
  nav,
  news,
  media,
  findDocs,
  shell
}) {
  function article(n) {
    const page = {
      ...n,
      kind: 'news-detail',
      navTitle: n.title,
      eyebrow: `Schulleben · ${n.category}`,
      theme: 'green',
      intro: n.summary,
      sections: []
    };
    return shell(page, [
      `<main id="inhalt" tabindex="-1">`,
      `<div class="container">${C.breadcrumb(page, nav)}</div>`,
      `<header class="article-heading container">`,
      `<p class="eyebrow">${C.esc(n.category)} · Historischer Bericht</p>`,
      `<h1>${C.esc(n.title)}</h1>`,
      `<dl class="article-dates">`,
      `<div>`,
      `<dt>Veröffentlicht</dt>`,
      `<dd>`,
      `<time datetime="${n.published}">${C.dateLabel(n.published)}</time>`,
      `</dd>`,
      `</div>`,
      `<div>`,
      `<dt>Ereignisdatum</dt>`,
      `<dd>${n.eventDate ? `<time datetime="${n.eventDate}">${C.dateLabel(n.eventDate)}</time>` : n.eventNote ? C.esc(n.eventNote) : 'Im Briefing nicht eindeutig ausgewiesen'}</dd>`,
      `</div>`,
      `<div>`,
      `<dt>Schuljahr</dt>`,
      `<dd>${n.schoolYear}<small>Zuordnung nach Veröffentlichung</small>`,
      `</dd>`,
      `</div>`,
      `</dl>`,
      `</header>`,
      `<div class="container article-body">${n.imageId ? C.photo(n.imageId, media, {
          className: 'article-photo'
        }) : ''}<div class="prose">${n.paragraphs.map(p => `<p>${C.esc(p)}</p>`).join('')}${n.eventDate && n.eventNote ? `<p>${C.esc(n.eventNote)}</p>` : ''}<aside class="historical-note">`,
      `<p>Dieser Beitrag dokumentiert einen damaligen Schulmoment. Genannte Klassen, Personen, Angebote und Planungen beziehen sich auf den historischen Bericht.</p>`,
      `</aside>${C.docList(findDocs(n.documentIds))}${n.id === '1071867' ? C.links([
          ['Projektwoche & Projektblätter', '/schulleben/projekte/'],
          ['Fotoalbum', '/schulleben/fotos/']
        ]) : ''}${n.id === '1051514' ? `<div class="media-grid">${['B16', 'B17'].map(id => C.photo(id, media)).join('')}</div>` : ''}${n.id === '1038612' ? `<div class="media-grid">${['B19', 'B20'].map(id => C.photo(id, media)).join('')}</div>` : ''}${n.id === '1089264' ? '<p>Im Bestand ist ein SAT.1-Regionalvideo erkennbar. Die konkrete Video-Adresse ist nicht aufgelöst; deshalb wird keine Einbettung geladen.</p>' : ''}<details class="source-note">`,
      `<summary>Quelle & redaktionelle Aufbereitung</summary>`,
      `<p>Inhaltliche Zusammenfassung aus dem Briefing 12.10.2026. Das Ereignisdatum wurde nur übernommen, wenn es dort ausdrücklich dokumentiert ist. Die Schuljahreszuordnung folgt dem Veröffentlichungsdatum.</p>${C.a('Originalbeitrag öffnen ↗', n.sourceUrl)}</details>${C.buttonLink('Zurück zum Nachrichtenarchiv', '/schulleben/nachrichten/', 'secondary')}</div>`,
      `</div>`,
      `<section class="container related-news">`,
      `<p class="eyebrow">Weiterlesen</p>`,
      `<h2>Mehr aus dem Schulleben.</h2>`,
      `<div class="news-grid">${news.filter(x => x.id !== n.id && x.category === n.category).slice(0, 2).map(x => C.newsCard(x, media)).join('')}</div>`,
      `</section>`,
      `</main>`
    ].join(''));
  }
  return article;
}
