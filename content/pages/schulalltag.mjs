// Source facts: docs/RELAUNCH-BRIEFING.md (12.10.2026). Stable section IDs.
import { section, note } from './helpers.mjs';
export const dailyPages = [
  {
    url: '/schulalltag/',
    title: 'Ein Tag voller Möglichkeiten.',
    navTitle: 'Tagesablauf & Unterrichtszeiten',
    eyebrow: 'Schulalltag',
    intro: 'Lernen, gemeinsame Pausen, Bewegung und Zeit zum Üben: Ein klarer Tagesrhythmus gibt Kindern Orientierung.',
    theme: 'yellow',
    kind: 'schedule',
    sections: [
      section(
        'zeiten',
        'Unterricht & Pausen',
        ['Die folgende Vormittagsstruktur ist als zugänglicher Webtext aus dem Schul-ABC 2025/26 übernommen. Sie ist ein älterer Quellenstand. Die Tagesstruktur-Grafik des Bestands muss vor einer verbindlichen Aktualisierung redaktionell bestätigt werden.'],
        {
          schedule: true,
          documents: ['D02'],
          media: ['B03']
        }
      ),
      section(
        'verlässlichkeit',
        'Verlässliche Grundschule',
        [
          'Die bisherige Schulwebsite beschreibt Unterrichtsschluss nach der fünften Stunde für alle Klassen. Für die Jahrgänge 1 und 2 werden eine beziehungsweise zwei Betreuungsstunden am Vormittag durch pädagogische Mitarbeitende genannt.',
          'Die Betreuungskontingente weichen teilweise von einem älteren Vertretungskonzept ab. Bitte klären Sie die konkrete Betreuung Ihres Kindes mit der Schule.'
        ],
        {
          links: [['Kontakt zur Schule', '/kontakt/']]
        }
      ),
      section(
        'nachmittag',
        'Und nach dem Vormittag?',
        ['Im offenen Ganztag folgen Mittagessen, angeleitete Übungszeit und Spiel- beziehungsweise AG-Angebote. Das Formular 2026/27 und die Ganztagsseite nennen 14:30 beziehungsweise 15:30 Uhr als End- und Abholzeiten.'],
        {
          links: [
            ['Ganztag & Betreuung', '/schulalltag/ganztag/'],
            ['Mittagessen & Speisepläne', '/schulalltag/mittagessen/']
          ]
        }
      )
    ],
    sourceUrls: [
      'https://www.heinrich-grupe-schule.de/seite/708746/unterrichtszeiten.html',
      'https://www.heinrich-grupe-schule.de/seite/708736/verlässliche-grundschule.html'
    ]
  },
  {
    url: '/schulalltag/ganztag/',
    title: 'Mehr Zeit zum Entdecken.',
    navTitle: 'Ganztag & Betreuung',
    eyebrow: 'Schulalltag · Ganztag',
    intro: 'Gemeinsam essen, üben, spielen und Neues ausprobieren: Der offene Ganztag ergänzt den verlässlichen Vormittag.',
    theme: 'green',
    sections: [
      section(
        'ueberblick',
        'Gut durch den Nachmittag',
        [
          'Die bisherige Schulwebsite beschreibt Ganztag von Montag bis Donnerstag ab 12:45 Uhr bis 14:30 oder 15:30 Uhr. Für Erstklässler wird zusätzlich freitags ein Angebot genannt. Bitte bestätigen Sie die konkrete Freitagsregelung und die verfügbaren Betreuungstage bei der Schule.',
          'Die qualifizierten Angebote sind kostenfrei. Bei einzelnen AGs können Materialkosten anfallen. Der Bestand beschreibt eine Anmeldung für einen oder vier Tage.'
        ],
        {
          facts: [
            ['07:30–07:55', 'Frühbetreuung laut Formular 2026/27'],
            ['14:30 / 15:30', 'End- und Abholzeiten laut neuerem Bestand']
          ]
        }
      ),
      section(
        'angebote',
        'Lernen, spielen, zusammen sein',
        [
          'Vier Essensschichten, eine angeleitete Übungszeit und feste Jahrgangsbezugskräfte strukturieren den Nachmittag. Spielangebote finden in sogenannten „Heimat“-Räumen statt. Für die Klassen 2 bis 4 sind ab 14:30 Uhr altersgemischte AGs beschrieben.',
          'Lehrkräfte, pädagogische Mitarbeitende, Sportvereine und Freiwilligendienstkräfte gestalten das Angebot. Aktuelle AG-Plätze und konkrete Angebote erfragen Sie bitte bei der Schule.'
        ],
        {
          links: [['Kinderstimmen aus dem Schulleben', '/schulleben/kinderstimmen/']]
        }
      ),
      section(
        'anmeldung',
        'Den Ganztag anmelden',
        [
          'Das Formular für 2026/27 enthält die Anmeldung, Angaben zur Frühbetreuung, Abholzeiten, Mittagessen und ein SEPA-Mandat. Laden Sie das Formular herunter und klären Sie offene Vertragsfragen mit dem Sekretariat.',
          'Die bisherige Schulwebsite nennt eine Jahresbindung. Das Formular nennt eine Halbjahresbindung mit Verlängerung und unterschiedliche Kündigungshinweise (30.11.2026 beziehungsweise vier Wochen vor Halbjahresende). Diese Angaben sind noch nicht vereinheitlicht; hier wird keine verbindliche Frist festgelegt.'
        ],
        {
          documents: ['D05'],
          note: note('Neuere und ältere Zeiten', '2026/27: 14:30 / 15:30 Uhr. Das ältere Schul-ABC 2025/26 nennt noch 14:15 / 15:15 Uhr. Bitte verwenden Sie das Formular für das passende Schuljahr.'),
          links: [['Fragen zur Anmeldung', '/kontakt/'], ['Mittagessen', '/schulalltag/mittagessen/']]
        }
      )
    ],
    sourceUrls: ['https://www.heinrich-grupe-schule.de/seite/708737/offene-ganztagsschule.html']
  },
  {
    url: '/schulalltag/mittagessen/',
    title: 'Gemeinsam schmeckt’s besser.',
    navTitle: 'Mittagessen & Speisepläne',
    eyebrow: 'Schulalltag · Mensa',
    intro: 'Ganztagskinder können in der Schulmensa zu Mittag essen. Die erfassten Speisepläne finden Sie hier gesammelt.',
    theme: 'peach',
    sections: [
      section(
        'mensa',
        'Essen in der Schulmensa',
        [
          'Der Bestand nennt Vissers Fritze als Lieferant. Der Anbieterort ist widersprüchlich: Die bisherige Schulwebsite nennt Moringen, das Ganztagsformular Hardegsen. Die genaue Angabe ist noch zu bestätigen.',
          'Im Ganztagsformular 2026/27 sind 4,80 Euro je Essen genannt. Das ältere Schul-ABC 2025/26 nennt 4,60 Euro. Es gelten die Angaben und Vereinbarungen für das jeweilige Schuljahr; bitte klären Sie den gültigen Preis mit der Schule.'
        ],
        {
          documents: ['D05']
        }
      ),
      section(
        'speiseplaene',
        'Speisepläne zum Herunterladen',
        [
          'Die Wochenangaben stammen aus dem Bestand. Das Jahr ist in den Linktiteln nicht ausgewiesen; die Pläne werden deshalb nicht automatisch als „diese Woche“ bezeichnet. Gerichte, Allergene und weitere Angaben stehen in den Original-PDFs.',
          'Der zusätzliche, falsch auf die Vorwoche verlinkte Eintrag „07.12–11.12“ wurde nicht verdoppelt. Die separat ermittelte Originaldatei für 07.–11.12. bleibt erhalten.'
        ],
        {
          documentCategory: 'Speisepläne'
        }
      ),
      section(
        'fragen',
        'Fragen zu Essen oder Anmeldung?',
        ['Das Sekretariat hilft bei Fragen zur Ganztagsanmeldung und zu den dafür benötigten Unterlagen.'],
        {
          links: [['Kontakt', '/kontakt/'], ['Schulobst & Mithelfen', '/schulalltag/schulobst/']]
        }
      )
    ],
    sourceUrls: ['https://www.heinrich-grupe-schule.de/seite/708739/mittagessen.html']
  },
  {
    url: '/schulalltag/schulobst/',
    title: 'Frische Ideen. Frisches Obst.',
    navTitle: 'Schulobst',
    eyebrow: 'Schulalltag · Ernährung',
    intro: 'Obst und Gemüse gehören zum Schulalltag. Familien können bei der Vorbereitung der Snacks mithelfen.',
    theme: 'green',
    imageId: 'B25',
    sections: [
      section(
        'programm',
        'Das EU-Schulobstprogramm',
        ['Seit 2024/25 beteiligt sich die Schule am EU-Schulobstprogramm. Laut Bestandsseite liefert Lotta Karotta in 21 von 38 Schulwochen zweimal wöchentlich Obst und Gemüse. Daraus werden täglich Snacks vorbereitet.'],
        {
          documents: ['D41']
        }
      ),
      section(
        'mithelfen',
        'Morgens gemeinsam anpacken',
        ['Eltern und Großeltern können laut Bestandsseite morgens zwischen 07:30 und 08:30 Uhr helfen. Wenn Sie mitmachen möchten, stimmen Sie Einsatz und aktuelle Helferzeiten bitte mit der Schule ab.'],
        {
          links: [['Mithelfen & Kontakt aufnehmen', '/kontakt/']]
        }
      )
    ],
    sourceUrls: ['https://www.heinrich-grupe-schule.de/seite/806610/schulobst.html']
  }
];
