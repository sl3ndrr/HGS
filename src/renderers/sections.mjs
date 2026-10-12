import * as C from '../components.mjs';
import { schedules } from '../../content/schedule.mjs';
export function createSectionRenderer({
  settings,
  documents,
  media,
  findDocs
}) {
  const schedule = () => [
    `<div class="schedule">`,
    `<table>`,
    `<caption>Vormittag · Quellenstand Schul-ABC 2025/26, Aktualität offen</caption>`,
    `<thead>`,
    `<tr>`,
    `<th scope="col">Zeit</th>`,
    `<th scope="col">Was findet statt?</th>`,
    `</tr>`,
    `</thead>`,
    `<tbody>${schedules.map(([t, a]) => `<tr><th scope="row">${t}</th><td>${C.esc(a)}</td></tr>`).join('')}</tbody>`,
    `</table>`,
    `</div>`,
    `<p class="small">Das ältere ABC nennt für den Schulkindergarten 08:30–12:05 Uhr und für Zeugnis-Ausgabetage Unterrichtsende 10:40 Uhr. Diese Angaben sind ebenfalls noch nicht aktuell bestätigt.</p>`
  ].join('');
  function renderValues(s) {
    return `<div class="values">${s.values.map(([t, d], i) => `<div><span class="value-number">0${i + 1}</span><h3>${C.esc(t)}</h3><p>${C.esc(d)}</p></div>`).join('')}</div>`;
  }
  function renderFacts(s) {
    return `<dl class="facts">${s.facts.map(([t, d]) => `<div><dt>${C.esc(t)}</dt><dd>${C.esc(d)}</dd></div>`).join('')}</dl>`;
  }
  function renderSteps(s) {
    return `<ol class="steps">${s.steps.map(([t, d], i) => `<li><span aria-hidden="true">${i + 1}</span><div><h3>${C.esc(t)}</h3><p>${C.esc(d)}</p></div></li>`).join('')}</ol>`;
  }
  function renderMap(s) {
    return [
      `<div class="map-box" data-map-url="${C.esc(settings.mapUrl)}">`,
      `<div class="map-consent">`,
      `<span class="map-pin">${C.icon('pin')}</span>`,
      `<h3>Lange Str. 17 · Rosdorf</h3>`,
      `<p>Die Google-Karte lädt erst nach Ihrer Aktivierung. Dabei werden Daten an Google übermittelt; es gelten dessen Datenschutzbestimmungen. Die Textadresse bleibt ohne Karte nutzbar.</p>`,
      `<button class="button primary" id="load-map" type="button">Google-Karte laden${C.icon('arrow')}</button>`,
      `<a href="/datenschutz/#karte">Mehr zum Datenschutz</a>`,
      `</div>`,
      `<div class="map-loaded" hidden>`,
      `<div class="map-frame">`,
      `</div>`,
      `<button type="button" class="button secondary" id="unload-map">Karte deaktivieren</button>`,
      `<p class="small">Bereits an Google übermittelte Daten werden durch das Deaktivieren nicht zurückgeholt.</p>`,
      `</div>`,
      `</div>`
    ].join('');
  }
  function section(s) {
    return [
      `<section id="${C.esc(s.id)}" class="content-section">`,
      `<h2>${C.esc(s.title)}</h2>`,
      (s.paragraphs || []).map(p => `<p>${C.esc(p)}</p>`).join(''),
      s.note ? C.notice(s.note) : '',
      s.values ? renderValues(s) : '',
      s.facts ? renderFacts(s) : '',
      s.steps ? renderSteps(s) : '',
      s.schedule ? schedule() : '',
      s.contact ? C.contactCard(s.contact) : '',
      s.media ? `<div class="media-grid">${s.media.map(id => C.photo(id, media)).join('')}</div>` : '',
      s.documents ? C.docList(findDocs(s.documents)) : '',
      s.documentCategory ? C.docList(documents.filter(d => d.category === s.documentCategory)) : '',
      C.links(s.links),
      s.map ? renderMap(s) : '',
      `</section>`
    ].join('');
  }
  return section;
}
