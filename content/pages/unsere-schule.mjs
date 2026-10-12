// Source facts: docs/RELAUNCH-BRIEFING.md (12.10.2026). Stable section IDs.
import { section, note } from './helpers.mjs';
export const schoolPages = [
  {
    url: '/unsere-schule/',
    title: 'Eine Schule. Viele Möglichkeiten.',
    navTitle: 'Unsere Schule',
    eyebrow: 'Unsere Schule',
    intro: 'Jedes Kind bringt etwas Eigenes mit. An der Heinrich-Grupe-Schule in Rosdorf geben wir dieser Vielfalt Raum – zum Lernen, Wachsen und Zusammenleben.',
    theme: 'green',
    imageId: 'B06',
    sections: [
      section(
        'profil',
        'Mitten in Rosdorf. Mitten im Leben.',
        [
          'Die Heinrich-Grupe-Schule ist eine Grundschule mit Schulkindergarten, verlässlichem Vormittagsangebot und offenem Ganztag. Zum Einzugsgebiet gehören Rosdorf, Klein Wiershausen, Settmarshausen und Olenhusen.',
          'Unsere Umgebung eröffnet viele Lernorte: Freibad, Rase, Kiesseen, Wartberg, Mühle und Bücherei. Busverbindungen führen nach Göttingen. Auf dem Schulgelände werden Innenhof und Bühne, Spiel- und Sportflächen, eine Spieleausleihe, Obstbäume und ein kleines Gartenbeet beschrieben.'
        ],
        {
          links: [
            ['Klassen kennenlernen', '/unsere-schule/klassen/'],
            ['Schulalltag entdecken', '/schulalltag/']
          ]
        }
      ),
      section(
        'leitbild',
        'Bunt wie das Leben',
        [
          'Vielfalt und individuelle Lernwege stehen im Mittelpunkt unseres Leitbilds. Differenzierte Methoden, Lernwerkstatt, altersübergreifende Projekte sowie Förderung und Forderung sollen die Entwicklung jedes Kindes unterstützen. Kreativität, Sport und Musik gehören ebenso dazu wie die Zusammenarbeit mit Kitas und weiterführenden Schulen.',
          'Kinder übernehmen Verantwortung: als Helferkinder, in der Spieleausleihe und bei der Streitschlichtung. Gesprächskreise, Klassenrat und Schülerrat geben ihnen eine Stimme. Feste Bezugspersonen, gemeinsame Regeln und Rituale bieten Sicherheit.',
          'Lernentwicklungsgespräche, Elternabende und Feste verbinden Familien und Schule. Teamarbeit und ein respektvolles Miteinander tragen diese Gemeinschaft. Die Angebotsdetails des Leitbilds werden vor Veröffentlichung auf Aktualität geprüft.'
        ],
        {
          documents: ['D01'],
          values: [
            ['Individuell wachsen', 'Lernwege, die Unterschiede ernst nehmen.'],
            ['Gemeinschaft erleben', 'Verantwortung übernehmen und mitentscheiden.'],
            ['Die Welt entdecken', 'Natur, Bewegung und Kreativität verbinden.']
          ]
        }
      ),
      section(
        'geschichte',
        'Wurzeln, die tragen',
        ['Das Schulgebäude entstand 1922. Seit 1965 wird es als Grundschule genutzt; 1968 erhielt es den Namen von Prof. Dr. Heinrich Grupe. Sein naturkundlich-anschaulicher Unterricht bildet einen historischen Bezug für unsere Schule. Seit 1973 wurde das Gebäude in mehreren Schritten erweitert.'],
        {
          media: ['B08'],
          links: [['Mehr zur Schulentwicklung', '/unsere-schule/entwicklung/']]
        }
      )
    ],
    sourceUrls: ['https://www.heinrich-grupe-schule.de/seite/708809/unsere-schule.html']
  },
  {
    url: '/unsere-schule/team/',
    title: 'Menschen, die Schule gestalten.',
    navTitle: 'Unser Team',
    eyebrow: 'Unsere Schule · Team',
    intro: 'Lehrkräfte, pädagogische Mitarbeitende, Schulsozialarbeit und viele helfende Hände begleiten den Schulalltag.',
    theme: 'peach',
    kind: 'team',
    sections: [section(
        'leitung',
        'Gemeinsam für die Kinder',
        ['Esther Jacobsen leitet die Schule. Julia Aramayo ist Konrektorin. Für organisatorische Fragen ist das Sekretariat mit Sabine Kikos ansprechbar.'],
        {
          links: [['Kontakt aufnehmen', '/kontakt/'], ['Beratung kennenlernen', '/eltern/beratung/']]
        }
      )],
    notice: note('Personenstand des Bestands', 'Die Teamseite des bisherigen Auftritts nennt kein Schuljahr. Die hier übernommenen Namen und Rollen stammen aus dem Briefing vom 12.10.2026 und müssen vor Veröffentlichung bestätigt werden; das Organigramm 2025/26 weicht teilweise ab.'),
    documents: ['D03'],
    sourceUrls: ['https://www.heinrich-grupe-schule.de/seite/708728/kollegium.html']
  },
  {
    url: '/unsere-schule/klassen/',
    title: 'Viele Klassen. Eine Gemeinschaft.',
    navTitle: 'Unsere Klassen',
    eyebrow: 'Unsere Schule · Klassen',
    intro: 'Die Klassen tragen eigene Gruppen- und Tiernamen. Hier finden Sie die Klassenleitungen und den Schulkindergarten aus dem erfassten Bestand.',
    theme: 'yellow',
    kind: 'classes',
    sections: [],
    notice: note('Zuordnung noch bestätigen', 'Die bisherige Klassenseite und das Organigramm 2025/26 unterscheiden sich. Ein Schuljahr ist auf der bisherigen Seite nicht ausgewiesen. Auch die übernommene Schreibweise „Zeselklasse“ ist noch zu prüfen.'),
    sourceUrls: ['https://www.heinrich-grupe-schule.de/seite/708730/klassen.html']
  },
  {
    url: '/unsere-schule/mitwirkung/',
    title: 'Schule lebt vom Mitgestalten.',
    navTitle: 'Gremien & Mitwirkung',
    eyebrow: 'Unsere Schule · Mitwirkung',
    intro: 'Eltern, Kinder und Mitarbeitende bringen ihre Perspektiven ein. Gemeinsam gestalten sie das Schulleben und seine Entwicklung.',
    theme: 'blue',
    sections: [
      section(
        'schulvorstand',
        'Der Schulvorstand',
        [
          'Der Schulvorstand bringt Lehrkräfte und Eltern gleichgewichtig zusammen. Die Bestandsseite beschreibt seine Arbeit an Budget, Kooperationen, Stundentafel, Projektwochen, Sponsoring und schulischer Qualitätsprüfung.',
          'Diese Aufgabenbeschreibung stammt vom 10.09.2019. Eine aktuelle Mitgliederliste ist auf der bisherigen Seite nicht vorhanden. Die Namen im Organigramm beziehen sich auf 2025/26; aktuelle rechtliche Grundlagen und Besetzungen sind vor Veröffentlichung zu prüfen.'
        ]
      ),
      section(
        'elternrat',
        'Der Schulelternrat',
        [
          'Der Schulelternrat vertritt die Interessen der Familien und verbindet Elternschaft und Schule. Er unterstützt die Zusammenarbeit und wirkt bei schulischen Entscheidungen mit.',
          'Das Organigramm 2025/26 nennt Reutter als Vorsitz und Hauk als Stellvertretung. Aktuelle Kontaktdaten und Besetzung sind nicht bestätigt. Das Sekretariat hilft bei der Kontaktaufnahme.'
        ],
        {
          links: [['Zum Sekretariat', '/kontakt/']]
        }
      ),
      section(
        'konferenzen',
        'Konferenzen & Zusammenarbeit',
        [
          'Das Organigramm beschreibt die Zusammenarbeit von Leitung, Klassen- und Fachteams, Gremien, Betreuung, Mensa und Förderverein. Der Konferenzkalender 2026/27 umfasst unter anderem Dienstbesprechungen, Fach-, Gesamt- und Zeugniskonferenzen sowie Lernentwicklungsgespräche.',
          'Einzelne Kalendertermine werden erst nach Prüfung der ursprünglichen PDF-Tabellen als Webtermine veröffentlicht.'
        ],
        {
          documents: ['D03', 'D04']
        }
      ),
      section(
        'kinder',
        'Auch Kinder entscheiden mit',
        ['Gesprächskreise, Klassenrat und Schülerrat stärken Beteiligung. Helferkinder, Spieleausleihe und Streitschlichtung bieten Gelegenheiten, Verantwortung zu übernehmen.'],
        {
          links: [['Unser Leitbild', '/unsere-schule/#leitbild']]
        }
      )
    ],
    sourceUrls: [
      'https://www.heinrich-grupe-schule.de/seite/708731/schulvorstand.html',
      'https://www.heinrich-grupe-schule.de/seite/708732/schulelternrat.html',
      'https://www.heinrich-grupe-schule.de/seite/708733/konferenzen.html'
    ]
  },
  {
    url: '/unsere-schule/entwicklung/',
    title: 'Raum für die Zukunft.',
    navTitle: 'Schulentwicklung & Umbau',
    eyebrow: 'Unsere Schule · Entwicklung',
    intro: 'Die Schule verändert sich. Hier finden Sie die dokumentierten Informationen zum Umbau mit ihrem jeweiligen Quellenstand.',
    theme: 'peach',
    imageId: 'B11',
    notice: note('Historischer Informationsstand', 'Der Elternbrief vom 04.03.2025 und das Baustellenfoto beschreiben einen damaligen Stand. Sie sind keine Bestätigung des heutigen Baufortschritts oder aktueller Zugangswege.'),
    sections: [
      section(
        'umbau',
        'Was der Elternbrief beschreibt',
        [
          'Der Elternbrief vom 04.03.2025 kündigt den Ersatz des ältesten Gebäudeteils und anschließende Sanierungen an. Ziel sind mehr Platz und Inklusion; ein Aufzug ist vorgesehen. Zunächst sind Verwaltung, Lernwerkstatt und Schulkindergarten betroffen.',
          'Der Brief beschreibt die Verlegung von Lehrerzimmer und Sekretariat in die Aula sowie geänderte Höfe und Zugänge. Genannt werden ungefähr zwei Jahre Neubau und danach zwei Jahre Sanierung. Unterricht, Lernorte und Pausen sollen angepasst werden. Diese Zeitangaben werden hier als damalige Planung wiedergegeben.'
        ],
        {
          documents: ['D71']
        }
      ),
      section(
        'zugang',
        'Aktuelle Wege bitte erfragen',
        ['Der heutige Sekretariatsstandort und die Zugangswege sind noch zu bestätigen. Bitte wenden Sie sich für einen Besuch an die Schule.'],
        {
          links: [
            ['Kontakt & Anfahrt', '/kontakt/'],
            ['Bauberichte im Archiv', '/schulleben/nachrichten/?thema=Schulentwicklung']
          ]
        }
      )
    ],
    sourceUrls: ['https://www.heinrich-grupe-schule.de/seite/708806/umbau.html']
  }
];
