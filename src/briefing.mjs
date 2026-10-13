// Pure parser: no file writes, network requests or editorial decisions.
export function parseBriefing(text) {
  const link = value => [...value.matchAll(/\[([^\]]+)\]\(([^)]+)\)/g)].map(m => ({
    title: m[1],
    url: m[2]
  }));
  const rows = text.split('\n').filter(l => l.startsWith('|')).map(l => l.split('|').slice(1, -1).map(x => x.trim()));
  const requiredLink = (row, column) => {
    const value = link(row[column] || '')[0];
    if (!value) throw Error(`Briefing[${row[0]}].Spalte${column + 1}: Quellenlink fehlt`);
    return value;
  };
  const media = rows.filter(r => /^[BN]\d{2}$/.test(r[0])).map(r => ({
    id: r[0],
    context: link(r[1])[0]?.title || r[1],
    source: link(r[1])[0]?.url || null,
    originalUrl: requiredLink(r, 2).url,
    localFile: null,
    alt: link(r[1])[0]?.title || r[1],
    rights: 'Bestandsrechte und Einwilligungen vor Veröffentlichung bestätigen',
    status: 'Originaladresse aus Briefing; direkte Abrufe in Arbeitsumgebung gesperrt'
  }));
  const months = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
  const newsRows = rows.filter(r => /^\w+, \d{2}\. /.test(r[0]) && link(r[1])[0]?.url.includes('/news/'));
  const events = {
    '1251211': '2026-06-11',
    '1243223': '2026-05-29',
    '1207347': '2026-02-27',
    '1198833': '2026-02-13',
    '1150694': '2025-10-07',
    '1119674': '2025-09-10',
    '1089249': '2025-06-29',
    '1082475': '2025-04-02',
    '1071858': '2025-05-14',
    '1053139': '2025-03-28',
    '1051514': '2025-03-17',
    '1038690': '2025-02-28'
  };
  const news = newsRows.map(r => {
    const l = link(r[1])[0],
      date = r[0].match(/(\d{2})\. (\S+) (\d{4})/),
      published = `${date[3]}-${String(months.indexOf(date[2]) + 1).padStart(2, '0')}-${date[1]}`,
      id = l.url.match(/\/news\/1\/(\d+)\//)[1];
    const image = media.find(m => m.source?.includes(`/news/1/${id}/`));
    const category = /handball|sport|volkslauf|olympics|ball über|hobby|rettungs/i.test(l.title) ? 'Bewegung' : /klima|wald/i.test(l.title) ? 'Natur & Umwelt' : /baumaßnahmen|herz und helm/i.test(l.title) ? 'Schulentwicklung' : /chor|slime|ukulelen|bibliothek|leseecke/i.test(l.title) ? 'Kinderstimmen' : 'Gemeinschaft';
    const year = Number(published.slice(0, 4)),
      start = Number(published.slice(5, 7)) >= 8 ? year : year - 1;
    return {
      id,
      title: l.title,
      url: `/schulleben/nachrichten/${id}/`,
      sourceUrl: l.url,
      published,
      eventDate: events[id] || null,
      eventNote: id === '1071867' ? 'Rückblick: 22.–24.04.2025, Schulfest 25.04.2025; abweichende Ankündigung 23.–25.04.2025.' : id === '1042075' ? 'Ankündigung: 23.–25.04.2025; der spätere Rückblick nennt andere Tage.' : null,
      schoolYear: `${start}/${String(start + 1).slice(-2)}`,
      schoolYearBasis: 'aus Veröffentlichungsdatum zugeordnet; Ereignis kann abweichen',
      category,
      summary: r[2],
      paragraphs: [r[2]],
      imageId: image?.id || null,
      documentIds: id === '1038659' ? ['D71'] : id === '1228388' ? ['D72'] : [],
      historical: true
    };
  });
  const titles = {
    D01: 'Leitbild',
    D02: 'Schul-ABC – Wichtige Infos 2025/26',
    D03: 'Organigramm 2025/26',
    D04: 'Konferenzkalender 2026/27',
    D05: 'Ganztagsanmeldung 2026/27',
    D15: 'Beitrittserklärung Förderverein',
    D16: 'Satzung des Fördervereins (Vereinsseite)',
    D24: 'Erziehungs- und Schutzkonzept',
    D25: 'Vertretungskonzept',
    D26: 'Elternbrief zu kompetenzorientierten Zeugnissen',
    D30: 'Anmeldebogen zur Schulaufnahme',
    D31: 'Merkblätter und Einverständniserklärungen',
    D32: 'Infektionsschutz – Belehrung für Eltern',
    D33: 'Erziehungs- und Schutzkonzept',
    D34: 'Beschwerdekonzept',
    D36: 'Datenschutzhinweis für Eltern',
    D37: 'Datenschutz – Übersicht',
    D38: 'Informationen zum Mobbing-Interventionsteam',
    D40: 'Schulbuchförderung des Landkreises',
    D68: 'Satzung des Fördervereins (Formularseite)',
    D70: 'Infektionsschutz – Belehrung für Eltern',
    D71: 'Elternbrief zu den Baumaßnahmen',
    D72: 'Klima macht Schule – Beitrag im StadtRadio'
  };
  const docRows = rows.filter(r => /^D\d{2}$/.test(r[0]));
  const refs = docRows.map(r => {
    const id = r[0],
      num = Number(id.slice(1)),
      src = requiredLink(r, 1),
      resource = requiredLink(r, 2);
    const category = num <= 4 ? 'Schule & Organisation' : num === 5 ? 'Ganztag' : num <= 14 ? 'Speisepläne' : num <= 16 ? 'Förderverein' : num <= 23 ? 'SchoolFox' : num <= 25 ? 'Konzepte' : num <= 29 ? 'Zeugnisse' : num <= 37 ? 'Schulanmeldung' : num === 38 ? 'Beratung & Schutz' : num <= 40 ? 'Kooperationen' : num === 41 ? 'Schulobst' : num <= 67 ? 'Projekte' : num === 68 ? 'Förderverein' : num <= 70 ? 'Gesundheit' : num === 71 ? 'Schulentwicklung' : 'Schulleben';
    const languages = {
      D17: 'Deutsch',
      D18: 'Arabisch',
      D19: 'Englisch',
      D20: 'Russisch',
      D21: 'Serbisch',
      D22: 'Türkisch'
    };
    const title = titles[id] || (num >= 17 && num <= 22 ? `SchoolFox – Willkommensbrief ${languages[id]}` : category === 'Speisepläne' ? `Speiseplan ${src.title.replaceAll('-', '–')}` : src.title.replace(/\.pdf$/, ''));
    const schoolYear = ['D02', 'D03'].includes(id) ? '2025/26' : ['D04', 'D05', 'D41'].includes(id) ? '2026/27' : category === 'Projekte' ? '2024/25' : null;
    const stand = {
      D01: 'Stand nicht angegeben',
      D16: 'Dezember 2017',
      D25: 'April 2024',
      D26: '28.04.2026',
      D34: '29.11.2015',
      D39: '2025',
      D40: '2024',
      D68: 'Dezember 2017',
      D71: '04.03.2025'
    }[id] || (category === 'Speisepläne' ? 'Jahr nicht ausgewiesen' : schoolYear ? `Schuljahr ${schoolYear}` : 'Stand nicht angegeben');
    return {
      id,
      title,
      originalTitle: src.title,
      originalUrl: resource.url,
      sourceUrl: src.url,
      category,
      language: languages[id] || 'Deutsch',
      schoolYear,
      stand,
      type: resource.url.endsWith('.pdf') ? 'PDF' : 'Webbeitrag',
      status: r[3],
      note: id === 'D27' ? 'Große Datei, etwa 27,9 MB; Inhalt im Briefing nicht ausgelesen.' : category === 'Projekte' ? 'Historisches Projektblatt; bildbasiertes PDF ohne auslesbaren Text.' : category === 'Speisepläne' ? 'Das Jahr ist im Bestand nicht angegeben. Gerichte und Allergene stehen im PDF.' : null
    };
  });
  const documents = [];
  for (const ref of refs) {
    const existing = documents.find(d => d.originalUrl === ref.originalUrl);
    if (existing) {
      existing.referenceIds.push(ref.id);
      existing.sources.push({
        url: ref.sourceUrl,
        title: ref.originalTitle
      });
    } else documents.push({
      ...ref,
      referenceIds: [ref.id],
      sources: [{
        url: ref.sourceUrl,
        title: ref.originalTitle
      }]
    });
  }
  const conflictsStart = text.indexOf('## Redaktionelle Konflikte und offene Entscheidungen');
  if (conflictsStart < 0 || text.indexOf('# BILD- UND MEDIENREGISTER', conflictsStart) < 0) throw Error('Briefing: Konflikt-/Medienregister fehlt');
  const conflicts = text.slice(conflictsStart, text.indexOf('# BILD- UND MEDIENREGISTER', conflictsStart)).split('\n').filter(l => l.startsWith('|') && !l.startsWith('| ---') && !l.startsWith('| Thema')).map((l, i) => {
    const r = l.split('|').slice(1, -1).map(x => x.trim());
    return {
      id: `R${String(i + 1).padStart(2, '0')}`,
      topic: r[0],
      evidence: r[1],
      action: r[2],
      status: 'offen'
    };
  });
  return { news, media, documents, refs, conflicts };
}
