import * as C from '../components.mjs';
export function createSpecialRenderer({
  settings,
  news,
  documents,
  media,
  people,
  classes,
  quickLinks
}) {
  const filters = type => {
    const categories = type === 'news' ? [...new Set(news.map(n => n.category))] : [...new Set(documents.map(d => d.category))];
    return [
      `<form class="filters" data-filter-form="${type}" role="search">`,
      `<div class="filter-search">`,
      `<label for="filter-search">${type === 'news' ? 'Nachrichten suchen' : 'Dokument suchen'}</label>`,
      [
        `<div class="input-wrap">${C.icon('search')}<input type="search" id="filter-search" name="q" placeholder="${type === 'news' ? 'Titel oder Stichwort …' : 'z. B. Anmeldung, SchoolFox …'}" autocomplete="off">`
      ].join(''),
      `</div>`,
      `</div>`,
      `<div>`,
      `<label for="filter-category">Thema</label>`,
      `<select id="filter-category" name="thema">`,
      `<option value="">Alle Themen</option>${categories.map(c => `<option value="${C.esc(c)}">${C.esc(c)}</option>`).join('')}</select>`,
      `</div>`,
      `<div>`,
      `<label for="filter-extra">${type === 'news' ? 'Jahr' : 'Sprache'}</label>`,
      `<select id="filter-extra" name="${type === 'news' ? 'jahr' : 'sprache'}">`,
      [
        `<option value="">${type === 'news' ? 'Alle Jahre' : 'Alle Sprachen'}</option>${(type === 'news' ? ['2026', '2025', '2024'] : [...new Set(documents.map(d => d.language))]).map(x => `<option value="${x}">${x}</option>`).join('')}</select>`
      ].join(''),
      `</div>`,
      `<button class="filter-reset" type="reset">Zurücksetzen</button>`,
      `</form>`,
      [
        `<p class="filter-count" role="status" aria-live="polite" aria-atomic="true">${type === 'news' ? news.length : documents.length} ${type === 'news' ? 'Beiträge' : 'Dokumente und Medienverweise'}</p>`
      ].join(''),
      `<div class="filter-empty" hidden>`,
      `<h2>Keine passenden Ergebnisse</h2>`,
      `<p>Versuchen Sie ein anderes Stichwort oder setzen Sie die Filter zurück.</p>`,
      `</div>`,
      `<noscript>`,
      `<p class="notice">Die Filter benötigen JavaScript. Alle Einträge sind unten vollständig lesbar.</p>`,
      `</noscript>`
    ].join('');
  };
  function renderTeam() {
    return [[
        `<p class="small">${C.esc(people.stand)}</p>${people.groups.map((g, i) => [
          `<section class="content-section" id="team-${i}">`,
          `<h2>${C.esc(g.title)}</h2>`,
          [
            `<div class="people-grid">${g.people.map(p => [
              `<article class="person-card">${p.imageId ? C.photo(p.imageId, media) : ''}<div>`,
              [
                `<h3>${C.esc(p.name)}</h3>${p.role ? `<p>${C.esc(p.role)}</p>` : ''}${p.email ? C.a(p.email, `mailto:${p.email}`) : ''}${p.phone ? C.a(p.phone, `tel:${p.phone.replaceAll(' ', '')}`) : ''}</div>`
              ].join(''),
              `</article>`
            ].join('')).join('')}</div>`
          ].join(''),
          `</section>`
        ].join('')).join('')}`
      ].join('')].join('');
  }
  function renderClasses() {
    return [
      `<p class="small">${C.esc(classes.stand)}</p>`,
      [
        `<div class="class-grid">${classes.classes.map((c, i) => [
          `<article class="class-card tone-${i % 4}">`,
          `<span class="class-id">${C.esc(c.class)}</span>`,
          `<h2>${C.esc(c.name)}</h2>`,
          `<p class="eyebrow">Klassenleitung</p>`,
          `<p>${c.teachers.map(C.esc).join('<br>')}</p>`,
          `</article>`
        ].join('')).join('')}</div>`
      ].join('')
    ].join('');
  }
  function renderParents() {
    return C.quickGrid(quickLinks);
  }
  function renderNews() {
    return [
      `${filters('news')}<div class="news-grid filter-items">${news.map(n => C.newsCard(n, media)).join('')}</div>`,
      `<p class="small">Archivstand: Briefing 12.10.2026. Veröffentlichungs- und Ereignisdatum stehen getrennt in den Beiträgen. Es werden keine neueren Meldungen behauptet.</p>`
    ].join('');
  }
  function renderDownloads() {
    return [
      `${filters('downloads')}<ul class="document-list filter-items">${documents.map(C.docCard).join('')}</ul>`,
      [
        `<p class="small">70 unterschiedliche Ressourcen aus 72 dokumentierten Verweisen. Mehrfachverlinkungen wurden zusammengeführt. Alle Originaladressen und Quellseiten sind im Repository erhalten. „Stand nicht angegeben“ bedeutet, dass keine verlässliche Versionsangabe erfasst wurde.</p>`
      ].join('')
    ].join('');
  }
  function renderChildren() {
    return `<div class="news-grid">${news.filter(n => ['1051514', '1038612', '1199013', '1089249', '1053139'].includes(n.id)).map(n => C.newsCard(n, media)).join('')}</div>`;
  }
  function renderSchoollife() {
    return `<div class="news-grid">${news.slice(0, 3).map(n => C.newsCard(n, media)).join('')}</div>`;
  }
  function renderContact() {
    return [
      `<div class="contact-intro">`,
      `<div class="contact-heading">${C.icon('phone')}<p>Ein kurzer Weg zu uns.</p>`,
      `</div>`,
      `<div>${C.buttonLink('0551 7899469', `tel:${settings.phoneHref}`)}${C.buttonLink('E-Mail an das Sekretariat', `mailto:${settings.officeEmail}`, 'secondary')}</div>`,
      `</div>`
    ].join('');
  }
  function renderSearch() {
    return [
      `<form class="site-search" action="/suche/" role="search">`,
      `<label for="site-query">Suchbegriff</label>`,
      `<div class="search-input">`,
      `<input name="q" id="site-query" type="search" placeholder="Was möchten Sie wissen?" autocomplete="off">`,
      `<button class="button primary" type="submit">Suchen${C.icon('search')}</button>`,
      `</div>`,
      `</form>`,
      `<p id="search-status" role="status" aria-live="polite">Geben Sie ein Stichwort ein.</p>`,
      `<ul id="search-results" class="search-results">`,
      `</ul>`,
      `<noscript>`,
      `<p>Die Volltextsuche benötigt JavaScript. Die Bereiche und alle Dokumente sind über diese Links erreichbar:</p>${C.quickGrid(quickLinks)}</noscript>`
    ].join('');
  }
  const renderers = {
    team: renderTeam,
    classes: renderClasses,
    parents: renderParents,
    news: renderNews,
    downloads: renderDownloads,
    children: renderChildren,
    schoollife: renderSchoollife,
    contact: renderContact,
    search: renderSearch
  };
  function special(page) {
    return renderers[page.kind]?.() || "";
  }
  return special;
}
