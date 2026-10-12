// Source facts: docs/RELAUNCH-BRIEFING.md (12.10.2026). Stable section IDs.
import { section, note } from './helpers.mjs';
export const schoollifePages = [
  {
    url: '/schulleben/',
    title: 'So bunt ist unser Schulleben.',
    navTitle: 'Schulleben',
    eyebrow: 'Schulleben',
    intro: 'Sport, Natur, Kreativität und Gemeinschaft: Berichte aus dem Schulalltag zeigen, was Kinder gemeinsam erleben.',
    theme: 'peach',
    kind: 'schoollife',
    sections: [section(
        'entdecken',
        'Geschichten, die verbinden',
        ['Im Nachrichtenarchiv sind alle 33 erfassten Meldungen von Dezember 2024 bis Juni 2026 erhalten. Kinderberichte, Projektwochen und Fotobereiche eröffnen weitere Perspektiven. Die Beiträge sind datierte Rückblicke.'],
        {
          links: [
            ['Nachrichtenarchiv', '/schulleben/nachrichten/'],
            ['Kinderstimmen', '/schulleben/kinderstimmen/'],
            ['Projekte', '/schulleben/projekte/'],
            ['Fotos', '/schulleben/fotos/'],
            ['Termine', '/schulleben/termine/']
          ]
        }
      )]
  },
  {
    url: '/schulleben/nachrichten/',
    title: 'Kleine Momente. Große Geschichten.',
    navTitle: 'Nachrichten & Archiv',
    eyebrow: 'Schulleben · Nachrichten',
    intro: '33 Geschichten aus unserer Schule. Entdecken Sie die erfassten Berichte nach Jahr und Thema.',
    theme: 'green',
    kind: 'news',
    sections: []
  },
  {
    url: '/schulleben/termine/',
    title: 'Was steht an?',
    navTitle: 'Termine',
    eyebrow: 'Schulleben · Termine',
    intro: 'Termine brauchen einen verlässlichen Stand. Hier finden Sie den erfassten Kalender und Hinweise zur laufenden Information.',
    theme: 'yellow',
    sections: [section(
        'kalender',
        'Zurzeit keine bestätigten Webtermine',
        [
          'Beim Abruf der Bestandsseite wurden keine Veranstaltungen angezeigt. Das bedeutet nicht, dass die Schule keine Termine hat. Bestätigte Termine werden ergänzt, sobald die redaktionellen Daten vorliegen.',
          'Der Konferenzkalender 2026/27 bleibt als Original-PDF verfügbar. Einzeltermine – darunter der dort genannte Schilf-Tag 03.02.2027 – werden erst nach Prüfung der PDF-Spalten und schulischer Bestätigung übernommen.'
        ],
        {
          documents: ['D04'],
          links: [['Informationen über SchoolFox', '/eltern/schoolfox/']]
        }
      )],
    sourceUrls: ['https://www.heinrich-grupe-schule.de/veranstaltungen/index.php']
  },
  {
    url: '/schulleben/projekte/',
    title: 'Ideen werden lebendig.',
    navTitle: 'Projekte & Projektwoche',
    eyebrow: 'Schulleben · Projekte',
    intro: 'Unter dem Motto „Bunt wie das Leben“ wurde im April 2025 ausprobiert, gestaltet und gemeinsam gefeiert.',
    theme: 'peach',
    imageId: 'B26',
    sections: [
      section(
        'projektwoche',
        'Rückblick: Projektwoche 2025',
        [
          'Kollegium, Schulsozialarbeit, externe Fachleute und Eltern begleiteten die Projekte. Der Bericht nennt 25 Projekte, unter anderem Tanz, Clown, Natur, Insekten und Klima, Graffiti an Toiletten sowie Schwimmen und Seepferdchen.',
          'Beim abschließenden Schulfest wurden Theater und Musical, Trommeln, Cheerleading, Tanz und Clownbeiträge gezeigt. Der Rückblick nennt den 22.–24.04.2025 und das Fest am 25.04.; die frühere Ankündigung nennt den 23.–25.04.2025. Die unterschiedlichen Datumsangaben bleiben ausdrücklich erhalten.'
        ],
        {
          media: ['B27', 'B28'],
          links: [
            ['Rückblick vom 16.05.2025', '/schulleben/nachrichten/1071867/'],
            ['Ankündigung vom 12.03.2025', '/schulleben/nachrichten/1042075/'],
            ['Fotoalbum', '/schulleben/fotos/']
          ]
        }
      ),
      section(
        'projektblaetter',
        'Die Projektblätter',
        ['26 verschiedene Projekt-PDFs sind im Bestand verlinkt, obwohl der Bericht 25 Projekte nennt. Die Dokumente sind bildbasiert; weitere Inhalte werden hier nicht allein aus ihren Titeln abgeleitet.'],
        {
          documentCategory: 'Projekte'
        }
      )
    ],
    sourceUrls: ['https://www.heinrich-grupe-schule.de/seite/766080/projektwoche.html']
  },
  {
    url: '/schulleben/kinderstimmen/',
    title: 'Aus Sicht der Kinder.',
    navTitle: 'Kinderstimmen',
    eyebrow: 'Schulleben · Kinderstimmen',
    intro: 'Lesen, musizieren, experimentieren und gemeinsam Sport treiben: Kinder erzählen von ihren Erlebnissen.',
    theme: 'blue',
    kind: 'children',
    sections: [section(
        'berichte',
        'Einmal erzählt. Hier wiedergefunden.',
        ['Der Bibliotheksbesuch der damaligen Klassen 1a und 1b am 17.03.2025 und die mittwochs von Steffi Christoph geleitete Slime-AG sind auf der Bestandsseite „Schülerbeiträge“ dokumentiert. Beide Berichte sind auch im Nachrichtenarchiv enthalten. Weitere als Kinderberichte erfasste Beiträge werden hier aus denselben Beitragsdaten verknüpft.']
      )],
    sourceUrls: ['https://www.heinrich-grupe-schule.de/seite/713223/schülerbeiträge.html']
  },
  {
    url: '/schulleben/fotos/',
    title: 'Erinnerungen in Bildern.',
    navTitle: 'Fotos',
    eyebrow: 'Schulleben · Fotos',
    intro: 'Einblicke in Projekte und Schulmomente. Die Zuordnung der Bilder folgt dem Medienregister des Briefings.',
    theme: 'yellow',
    kind: 'photos',
    sections: [
      section(
        'album',
        'Fotoalbum: Projektwoche 2025',
        ['Das Originalalbum ist auf den 16.05.2025 datiert. Seine Einzelbildadressen sind im verfügbaren Material nicht aufgelöst. Bis ein vollständiger Galerieexport vorliegt, führt der Link zum vorhandenen Album. Es werden keine Ersatzfotos von Kindern oder Schulräumen erzeugt.'],
        {
          links: [[
              'Originalalbum Projektwoche 2025 öffnen ↗',
              'https://www.heinrich-grupe-schule.de/fotos/2/214451/sonstige/projektwoche-2025/'
            ]]
        }
      ),
      section(
        'einblicke',
        'Dokumentierte Projekteinblicke',
        ['Die folgenden drei Bilder sind der Projektwochenseite zugeordnet. Weitere Nachrichtenbilder bleiben ihren jeweiligen Beiträgen zugeordnet.'],
        {
          media: ['B26', 'B27', 'B28'],
          links: [['Zum Nachrichtenarchiv', '/schulleben/nachrichten/']]
        }
      )
    ]
  }
];
