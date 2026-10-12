// Source facts: docs/RELAUNCH-BRIEFING.md (12.10.2026). Stable section IDs.
import { section, note } from './helpers.mjs';
export const involvementPages = [
  {
    url: '/mitmachen/',
    title: 'Gemeinsam wächst mehr.',
    navTitle: 'Mitmachen',
    eyebrow: 'Mitmachen',
    intro: 'Familien, Förderverein und Kooperationspartner bringen sich in das Schulleben ein. Engagement hat viele Formen.',
    theme: 'green',
    sections: [section(
        'gemeinsam',
        'Zeit, Ideen und Unterstützung',
        ['Der Förderverein unterstützt die pädagogische Arbeit durch ehrenamtliches Engagement, Geld und Zusammenarbeit. Kooperationen verbinden Schule mit Sport, Kultur, Naturbildung, Beratung und weiterführenden Schulen.'],
        {
          links: [
            ['Förderverein kennenlernen', '/mitmachen/foerderverein/'],
            ['Unser Netzwerk', '/mitmachen/kooperationen/'],
            ['Beim Schulobst helfen', '/schulalltag/schulobst/'],
            ['Elternmitwirkung', '/unsere-schule/mitwirkung/']
          ]
        }
      )]
  },
  {
    url: '/mitmachen/foerderverein/',
    title: 'Für Kinder etwas bewegen.',
    navTitle: 'Förderverein',
    eyebrow: 'Mitmachen · Förderverein',
    intro: 'Der Förderverein der Heinrich-Grupe-Schule Rosdorf e.V. unterstützt die pädagogische Arbeit und das gemeinsame Schulleben.',
    theme: 'peach',
    imageId: 'B12',
    sections: [
      section(
        'verein',
        'Ehrenamtlich verbunden',
        [
          'Familien und Schule arbeiten im Förderverein zusammen. Engagement, Beteiligung und finanzielle Unterstützung helfen, pädagogische Vorhaben zu ermöglichen.',
          'Vorstand laut Bestandsseite: Daniel Dielenschneider (Vorsitz), Andreas Müller (Stellvertretung), Carsten Wiegmann (Kasse) und Frank Leifheit (Schriftführung). Die Besetzung ist vor Veröffentlichung zu bestätigen.'
        ],
        {
          contact: {
            name: 'Förderverein der Heinrich-Grupe-Schule Rosdorf e.V.',
            role: 'Kontakt zum Verein',
            email: 'foerderverein-hgs-rosdorf@web.de'
          }
        }
      ),
      section(
        'mitglied',
        'Mitglied werden',
        [
          'Das Beitrittsformular nennt einen jährlichen Mindestbeitrag von sieben Euro. Höhere freiwillige Beiträge sind möglich. Es beschreibt den SEPA-Einzug zum 01.10.; die Satzung vom Dezember 2017 nennt einen anderen Zahlungstermin. Bitte klären Sie den gültigen Ablauf mit dem Verein.',
          'Die Bestandsseite bezeichnet das Formular als editierbar; die technische Ausfüllbarkeit ist noch zu prüfen. Die unter „Satzung der Schule“ verlinkte Datei wird hier korrekt als Fördervereinssatzung benannt.'
        ],
        {
          documents: ['D15', 'D16', 'D68']
        }
      )
    ],
    sourceUrls: ['https://www.heinrich-grupe-schule.de/seite/708749/förderverein.html']
  },
  {
    url: '/mitmachen/kooperationen/',
    title: 'Lernen im starken Netzwerk.',
    navTitle: 'Kooperationspartner',
    eyebrow: 'Mitmachen · Kooperationen',
    intro: 'Schule wirkt über das Schulgelände hinaus. Partnerschaften verbinden Lernen, Bewegung, Natur und Beratung.',
    theme: 'blue',
    sections: [
      section(
        'rosdorf',
        'Partner in Rosdorf',
        ['Der Bestand nennt das Bündnis für Familie mit dem Familiencafé Laterna Magica, fünf Kitas, einen angegliederten Hort, die evangelische Kirche mit Südindien-Partnerschaft und den MTV Rosdorf. Die Kitas werden im Briefing nicht einzeln benannt.']
      ),
      section(
        'goettingen',
        'Partner in Göttingen und der Region',
        [
          'Genannt werden Begabungsförderung Göttingen II, Leineberg-, Bonifatius- und Lohbergschule, Kitas und das Felix-Klein-Gymnasium. Für Umweltbildung nennt die Seite Transfer 21 und Reinhausen, für Freiwilligendienst und Fit für Pisa den ASC sowie für Familienberatung die AWO.',
          'Übergangskooperationen bestehen laut Seite mit dem Felix-Klein-Gymnasium und der Carl-Friedrich-Gauß-Schule Groß Schneen. Alte Programmbezeichnungen und die aktuellen Partnerschaften sind noch zu prüfen.'
        ],
        {
          media: ['B21', 'B22', 'B23', 'B24'],
          documents: ['D39', 'D40']
        }
      ),
      section(
        'angebote',
        'Außerschulische Angebote',
        ['Die verlinkte Angebotsseite war bei der Erfassung nicht abrufbar; die mobile Variante meldete 404. Konkrete Angebote, Dokumente und Bilder müssen von der Schule ergänzt werden. Bitte erfragen Sie bestätigte aktuelle Angebote bei der Schule.'],
        {
          links: [['Angebote erfragen', '/kontakt/']]
        }
      )
    ],
    sourceUrls: [
      'https://www.heinrich-grupe-schule.de/seite/765366/kooperationspartner.html',
      'https://www.heinrich-grupe-schule.de/seite/748797/angebote-außerschulischer-kooperationspartner.html'
    ]
  }
];
