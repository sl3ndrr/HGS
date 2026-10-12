// Source facts: docs/RELAUNCH-BRIEFING.md (12.10.2026). Stable section IDs.
import { section, note } from './helpers.mjs';
export const servicePages = [
  {
    url: '/downloads/',
    title: 'Alles an einem Ort.',
    navTitle: 'Downloads',
    eyebrow: 'Service · Dokumente',
    intro: 'Anmeldungen, Elterninformationen, Konzepte und Projektblätter – nach Thema und Sprache übersichtlich gesammelt.',
    theme: 'yellow',
    kind: 'downloads',
    sections: []
  },
  {
    url: '/kontakt/',
    title: 'Wir sind für Sie erreichbar.',
    navTitle: 'Kontakt & Anfahrt',
    eyebrow: 'Service · Kontakt',
    intro: 'Sie haben eine Frage oder möchten einen Gesprächstermin vereinbaren? Rufen Sie uns an oder schreiben Sie der passenden Ansprechperson.',
    theme: 'blue',
    kind: 'contact',
    sections: [
      section(
        'sekretariat',
        'Sekretariat',
        [
          'Sabine Kikos unterstützt bei organisatorischen Fragen. Das Schul-ABC 2025/26 nennt Montag bis Donnerstag 07:00–12:00 Uhr als Sekretariatszeiten. Eine aktuelle HTML-Bestätigung fehlt; bitte stimmen Sie Besuche telefonisch ab.',
          'Auch der aktuelle Raum ist wegen des Umbaus zu bestätigen. Das ältere ABC nennt den ersten Stock; der Baubrief beschreibt die Aula als zwischenzeitlichen Verwaltungsstandort.'
        ],
        {
          contact: {
            name: 'Sabine Kikos',
            role: 'Sekretariat',
            phone: '0551 7899469',
            phoneHref: '+495517899469',
            email: 'sekretariat@hgs-rosdorf.de'
          }
        }
      ),
      section(
        'leitung',
        'Schulleitung',
        ['Esther Jacobsen ist Schulleiterin. Julia Aramayo ist Konrektorin.'],
        {
          contact: {
            name: 'Esther Jacobsen',
            role: 'Schulleiterin',
            phone: '0551 7899469',
            phoneHref: '+495517899469',
            email: 'schulleitung@hgs-rosdorf.de'
          },
          links: [['Unser Team', '/unsere-schule/team/'], ['Vertrauliche Beratung', '/eltern/beratung/']]
        }
      ),
      section(
        'nachricht',
        'Telefon oder E-Mail',
        ['Ein Versanddienst für ein Website-Formular ist noch nicht angeschlossen. Die Kontaktbuttons öffnen Ihr E-Mail-Programm oder die Telefonfunktion. Diese Website versendet und speichert keine Kontaktanfragen. Bitte melden Sie Erkrankungen Ihres Kindes über SchoolFox.'],
        {
          links: [['Hinweise zur Krankmeldung', '/eltern/krankmeldung/']]
        }
      ),
      section(
        'anfahrt',
        'So finden Sie uns',
        ['Heinrich-Grupe-Schule, Lange Str. 17, 37124 Rosdorf. Stimmen Sie wegen der Baumaßnahmen den aktuellen Zugang bitte mit der Schule ab.'],
        {
          map: true
        }
      )
    ],
    sourceUrls: ['https://www.heinrich-grupe-schule.de/formulare/index.php?form_id=10032229']
  },
  {
    url: '/impressum/',
    title: 'Impressum',
    navTitle: 'Impressum',
    eyebrow: 'Rechtliches',
    intro: 'Herausgeberangaben aus dem erfassten Schulauftritt und Hinweise zum Stand dieses Relaunchs.',
    theme: 'green',
    legal: true,
    sections: [
      section(
        'herausgeber',
        'Herausgeberkontakt',
        ['Heinrich-Grupe-Schule, Lange Str. 17, 37124 Rosdorf. Als Herausgeberkontakt nennt der Bestand Esther Jacobsen. Telefon: 0551 7899469. E-Mail: schulleitung@hgs-rosdorf.de. Schulträger ist die Gemeinde Rosdorf.'],
        {
          links: [['Kontakt', '/kontakt/']]
        }
      ),
      section(
        'stand',
        'Vor einer öffentlichen Bereitstellung prüfen',
        [
          'Diese Umsetzung ist eine unveröffentlichte Relaunchfassung. Rechtsform, rechtliche Vertretung, zuständige Aufsicht und die vollständigen erforderlichen Anbieterangaben müssen durch Schule und Schulträger bestätigt werden. Die Angabe „Herausgeberkontakt“ ersetzt keine bestätigte rechtliche Vertretungsregelung.',
          'Die PortUNA-Betreiber-, Design- und Technologietexte des alten CMS werden nicht als Angaben zur neuen Umsetzung übernommen. Die alten Förderhinweise „Niedersachsen vernetzt“ und „Azubi-Projekte“ sind auf weitere Gültigkeit zu prüfen. Es wird kein neuer Betreiber oder Dienstanbieter erfunden.'
        ]
      ),
      section(
        'rechte',
        'Inhalte und Bildrechte',
        ['Die Inhalte wurden aus dem Redesign-Briefing vom 12.10.2026 übernommen und redaktionell aufbereitet. Bild- und Dokumentadressen verweisen auf den erfassten Bestand. Rechte, Einwilligungen und die Zulässigkeit der Wiederverwendung sind vor Veröffentlichung durch den Schulbetreiber zu bestätigen.']
      ),
      section(
        'original',
        'Dokumentierter Bestandsstand',
        ['Die ursprüngliche Impressumsseite bleibt als Quelle nachvollziehbar. Deren CMS- und Fördertexte sind nicht automatisch auf diese Infrastruktur anwendbar.'],
        {
          links: [['Impressum des Bestands ↗', 'https://www.heinrich-grupe-schule.de/impressum/index.php']]
        }
      )
    ]
  },
  {
    url: '/datenschutz/',
    title: 'Datenschutz',
    navTitle: 'Datenschutz',
    eyebrow: 'Rechtliches',
    intro: 'Transparenz über die tatsächlich umgesetzten Funktionen. Diese Fassung muss vor Veröffentlichung an den gewählten Betrieb angepasst und fachlich geprüft werden.',
    theme: 'green',
    legal: true,
    notice: note('Relaunchfassung · fachliche Prüfung erforderlich', 'Hostingdienst, Verantwortlichkeit, Datenschutzkontakt, Protokollierung, Speicherfristen und Rechtsgrundlagen sind noch nicht abschließend bestätigt. Dies ist keine freigegebene Datenschutzerklärung für den öffentlichen Betrieb.'),
    sections: [
      section(
        'kontakt',
        'Verantwortlichkeit & Kontakt',
        ['Der Bestand nennt die Heinrich-Grupe-Schule, Lange Str. 17, 37124 Rosdorf, mit Esther Jacobsen als Herausgeberkontakt. Kontakt: schulleitung@hgs-rosdorf.de, 0551 7899469. Verantwortliche Stelle und Datenschutzbeauftragte müssen durch Schule und Schulträger bestätigt werden.']
      ),
      section(
        'technik',
        'Technischer Aufbau dieser Fassung',
        [
          'Diese Website besteht aus statischen HTML-, CSS- und JavaScript-Dateien. Suche, Dokument- und Nachrichtenfilter arbeiten im Browser. Es gibt keine Analysewerkzeuge, Werbetracker, Newsletteranmeldung oder Kommentarbereiche. Es werden keine Cookies oder lokalen Speicher für diese Funktionen eingesetzt. Schriften werden über die Systemschrift des Geräts dargestellt.',
          'Der mitgelieferte Node-Server legt selbst keine Zugriffsprotokolldateien an. Hostinganbieter, vorgeschaltete Proxys und deren Verarbeitung – etwa IP-Adresse, Zeitpunkt, URL und Browserinformationen – sind noch nicht festgelegt. Ihre Protokollierung, Rechtsgrundlage und Speicherfristen sind vor Veröffentlichung zu dokumentieren. Die sieben Tage aus der alten CMS-Erklärung werden nicht ungeprüft übernommen.'
        ]
      ),
      section(
        'medien',
        'Bilder & Dokumentlinks',
        [
          'Originalfotos werden in dieser Prüffassung nur nach Ihrer ausdrücklichen Aktivierung von Verwaltungsportal-Domains geladen, sofern keine lokale Datei verfügbar ist. Dadurch werden insbesondere Ihre IP-Adresse und technische Browserinformationen an den jeweiligen Anbieter übermittelt. Die Aktivierung gilt nur für die aktuell geöffnete Seite; sie wird nicht gespeichert. Vor Veröffentlichung sollen freigegebene Medien lokal eingebunden werden.',
          'Beim Öffnen eines Original-PDFs oder externen Links verlassen Sie die Website beziehungsweise laden Inhalte des angegebenen Anbieters. Dort gelten die jeweiligen Datenschutzbestimmungen. Die Dokumente werden nicht im Hintergrund vorgeladen.'
        ]
      ),
      section(
        'anfragen',
        'Kontakt & SchoolFox',
        [
          'Es ist kein Website-Kontaktformular angeschlossen. Telefon- und E-Mail-Links öffnen die passende Anwendung auf Ihrem Gerät. Die Schule verarbeitet die von Ihnen dort übermittelten Angaben zur Bearbeitung Ihrer Anfrage; Zweck, Rechtsgrundlage und Speicherfristen muss die verantwortliche Stelle ergänzen.',
          'SchoolFox ist ein gesonderter externer Kommunikationsdienst. Auf dieser Website gibt es keinen eingebetteten Login und keine Verarbeitung von Krankmeldungen.'
        ]
      ),
      section(
        'karte',
        'Google Maps nur nach Aktivierung',
        [
          'Die Karte auf der Kontaktseite wird erst geladen, wenn Sie „Google-Karte laden“ aktivieren. Dabei wird eine Verbindung zu Google hergestellt; insbesondere IP-Adresse und technische Browserinformationen können an Google übermittelt und Cookies durch Google gesetzt werden. Die Einwilligung wird nicht dauerhaft gespeichert und gilt nur für diese Seitenansicht. Eine Deaktivierung entfernt die Einbettung; bereits übermittelte Daten werden dadurch nicht zurückgeholt. Ohne Aktivierung bleibt die Adresse als Text nutzbar.',
          'Mögliche Drittlandübermittlungen, Dienstanbieterangaben, Rechtsgrundlagen und Informationen über Garantien müssen vor Veröffentlichung fachlich geprüft und ergänzt werden. Videos werden in dieser Umsetzung nicht eingebettet.'
        ]
      ),
      section(
        'rechte',
        'Ihre Rechte',
        ['Soweit die gesetzlichen Voraussetzungen vorliegen, bestehen Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung und Datenübertragbarkeit sowie Widerspruch. Eine Einwilligung kann für die Zukunft widerrufen werden. Zudem besteht ein Beschwerderecht bei einer Datenschutzaufsichtsbehörde. Der zuständige behördliche Datenschutzkontakt und die zuständige Aufsicht sind vor Veröffentlichung zu benennen.']
      ),
      section(
        'bestand',
        'Quelle & weitere Hinweise',
        ['Die neue Fassung beschreibt die umgesetzte Technik. Die ursprüngliche Erklärung mit Angaben zu PortUNA, optionalem reCAPTCHA und Newsletterfunktionen bleibt als Bestandsquelle erhalten. Nicht vorhandene Dienste werden hier nicht als eingesetzt dargestellt.'],
        {
          links: [[
              'Datenschutzerklärung des Bestands ↗',
              'https://www.heinrich-grupe-schule.de/datenschutz/index.php'
            ]]
        }
      )
    ]
  },
  {
    url: '/suche/',
    title: 'Wonach suchen Sie?',
    navTitle: 'Suche',
    eyebrow: 'Service · Suche',
    intro: 'Seiten, Nachrichten und Dokumente gemeinsam durchsuchen.',
    theme: 'yellow',
    kind: 'search',
    sections: []
  }
];
