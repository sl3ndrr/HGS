/* Progressive enhancement; page contents and links work without JavaScript. */
'use strict';

document.documentElement.classList.add('has-js');
const nav = document.querySelector('.main-nav');
const menu = document.querySelector('.menu-toggle');
const bottomMenu = document.querySelector('.bottom-menu');
function toggleMenu(force) {
  const open = force ?? nav.dataset.open !== 'true';
  nav.dataset.open = String(open);
  menu.setAttribute('aria-expanded', String(open));
  bottomMenu?.setAttribute('aria-expanded', String(open));
}
menu?.addEventListener('click', () => toggleMenu());
if (bottomMenu) {
  bottomMenu.setAttribute('aria-expanded', 'false');
  bottomMenu.setAttribute('aria-controls', 'hauptnavigation');
  bottomMenu.addEventListener('click', () => {
    toggleMenu(true);
    window.scrollTo({
      top: 0,
      behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'
    });
    nav.querySelector('summary')?.focus();
  });
}
const navGroups = [...document.querySelectorAll('.nav-group')];
navGroups.forEach(d => d.addEventListener('toggle', () => {
  if (d.open) navGroups.filter(x => x !== d).forEach(x => x.open = false);
}));
document.addEventListener('click', event => {
  if (!event.target.closest('.site-header') && !event.target.closest('.mobile-bar')) {
    navGroups.forEach(d => d.open = false);
    toggleMenu(false);
  }
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    const opened = navGroups.find(d => d.open);
    if (opened) {
      opened.open = false;
      opened.querySelector('summary').focus();
    } else if (nav.dataset.open === 'true') {
      toggleMenu(false);
      menu.focus();
    }
  }
});
// No connection to image providers until the user activates a particular image.
document.querySelectorAll('.photo-enable').forEach(button => button.addEventListener('click', () => {
  const frame = button.closest('.photo-frame'),
    img = frame.querySelector('img'),
    placeholder = frame.querySelector('.photo-placeholder'),
    error = frame.querySelector('.photo-error');
  button.disabled = true;
  button.textContent = 'Bild wird geladen …';
  img.addEventListener('load', () => {
    img.hidden = false;
    placeholder.hidden = true;
    error.hidden = true;
  }, {
    once: true
  });
  img.addEventListener('error', () => {
    img.hidden = true;
    placeholder.hidden = true;
    error.hidden = false;
    error.querySelector('a')?.focus();
  }, {
    once: true
  });
  img.referrerPolicy = 'no-referrer';
  img.src = img.dataset.src;
}));
const map = document.querySelector('.map-box');
if (map) {
  const consent = map.querySelector('.map-consent'),
    loaded = map.querySelector('.map-loaded'),
    frame = map.querySelector('.map-frame');
  map.querySelector('#load-map').addEventListener('click', () => {
    const iframe = document.createElement('iframe');
    iframe.title = 'Google Maps: Heinrich-Grupe-Schule, Lange Str. 17, Rosdorf';
    iframe.src = map.dataset.mapUrl;
    iframe.referrerPolicy = 'no-referrer';
    iframe.allowFullscreen = true;
    frame.replaceChildren(iframe);
    consent.hidden = true;
    loaded.hidden = false;
    map.querySelector('#unload-map').focus();
  });
  map.querySelector('#unload-map').addEventListener('click', () => {
    frame.replaceChildren();
    loaded.hidden = true;
    consent.hidden = false;
    map.querySelector('#load-map').focus();
  });
}
const normalize = value => value.toLocaleLowerCase('de').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replaceAll('ß', 'ss');
const filterForm = document.querySelector('[data-filter-form]');
if (filterForm) {
  const type = filterForm.dataset.filterForm,
    list = [...document.querySelectorAll('.filter-items > [data-search]')],
    query = filterForm.querySelector('[name=q]'),
    category = filterForm.querySelector('[name=thema]'),
    extra = filterForm.querySelector('[name=jahr],[name=sprache]'),
    status = document.querySelector('.filter-count'),
    empty = document.querySelector('.filter-empty'),
    params = new URLSearchParams(location.search);
  for (const control of [query, category, extra]) {
    const v = params.get(control.name);
    if (v !== null) {
      if (control.tagName === 'SELECT') {
        if ([...control.options].some(o => o.value === v)) control.value = v;
      } else control.value = v;
    }
  }
  function filter() {
    const terms = normalize(query.value.trim()).split(/\s+/).filter(Boolean);
    let count = 0;
    for (const item of list) {
      const match = terms.every(term => normalize(item.dataset.search).includes(term)) && (!category.value || item.dataset.category === category.value) && (!extra.value || item.dataset[type === 'news' ? 'year' : 'language'] === extra.value);
      item.hidden = !match;
      if (match) count++;
    }
    status.textContent = `${count} ${type === 'news' ? `von ${list.length} Beiträgen` : `von ${list.length} Ressourcen`}${count === 0 ? ' · Keine passenden Ergebnisse' : ''}`;
    empty.hidden = count > 0;
    const p = new URLSearchParams();
    for (const c of [query, category, extra]) if (c.value) p.set(c.name, c.value);
    history.replaceState(null, '', location.pathname + (p.size ? '?' + p.toString() : ''));
  }
  filterForm.addEventListener('submit', e => {
    e.preventDefault();
    filter();
  });
  filterForm.addEventListener('input', filter);
  filterForm.addEventListener('change', filter);
  filterForm.addEventListener('reset', event => {
    event.preventDefault();
    for (const c of [query, category, extra]) c.value = '';
    filter();
  });
  filter();
}
const search = document.querySelector('.site-search');
if (search) {
  const input = search.querySelector('input'),
    status = document.querySelector('#search-status'),
    results = document.querySelector('#search-results');
  input.value = new URLSearchParams(location.search).get('q') || '';
  let indexPromise;
  const index = () => indexPromise ??= fetch(new URL('assets/search-index.json', new URL(
    document.querySelector('meta[name="site-base-path"]').content, location.origin
  ))).then(r => {
    if (!r.ok) throw Error('Index nicht erreichbar');
    return r.json();
  });
  let request = 0;
  async function run() {
    const current = ++request,
      query = input.value.trim(),
      terms = normalize(query).split(/\s+/).filter(Boolean);
    results.replaceChildren();
    const p = new URLSearchParams();
    if (query) p.set('q', query);
    history.replaceState(null, '', location.pathname + (p.size ? '?' + p.toString() : ''));
    if (!terms.length) {
      status.textContent = 'Geben Sie ein Stichwort ein.';
      return;
    }
    status.textContent = 'Suche läuft …';
    try {
      const data = await index();
      if (current !== request) return;
      const matches = data.map(item => ({
        ...item,
        score: terms.every(t => normalize(item.title + ' ' + item.text).includes(t)) ? terms.reduce((s, t) => s + (normalize(item.title).includes(t) ? 3 : 1), 0) : 0
      })).filter(i => i.score > 0).sort((a, b) => b.score - a.score).slice(0, 60);
      status.textContent = matches.length ? `${matches.length} passende Ergebnisse${matches.length === 60 ? ' (maximal 60 angezeigt)' : ''}` : 'Keine Ergebnisse. Versuchen Sie ein anderes Stichwort.';
      for (const item of matches) {
        const li = document.createElement('li'),
          type = document.createElement('p'),
          heading = document.createElement('h2'),
          link = document.createElement('a'),
          excerpt = document.createElement('p');
        type.className = 'eyebrow';
        type.textContent = item.type;
        link.textContent = item.title;
        link.href = item.url;
        heading.append(link);
        excerpt.textContent = item.text.length > 190 ? item.text.slice(0, 190) + ' …' : item.text;
        li.append(type, heading, excerpt);
        results.append(li);
      }
    } catch {
      if (current === request) status.textContent = 'Die Suche ist gerade nicht erreichbar. Nutzen Sie bitte die Navigation oder den Downloadbereich.';
    }
  }
  search.addEventListener('submit', e => {
    e.preventDefault();
    run();
  });
  let timer;
  input.addEventListener('input', () => {
    clearTimeout(timer);
    timer = setTimeout(run, 180);
  });
  if (input.value) run();
}

// If a locally imported asset is missing, keep its original source reachable.
document.querySelectorAll('.photo-frame.local img').forEach(img => img.addEventListener('error', () => {
  img.hidden = true;
  img.closest('.photo-frame').querySelector('.photo-error').hidden = false;
}));
