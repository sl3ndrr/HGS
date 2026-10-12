// Source facts: docs/RELAUNCH-BRIEFING.md (12.10.2026). Stable section IDs.
import { section, note } from './helpers.mjs';
export const parentPages = [
  {
    url: '/eltern/',
    title: 'Der Schulalltag. Einfach erreichbar.',
    navTitle: 'Für Eltern',
    eyebrow: 'Für Eltern',
    intro: 'Die wichtigsten Wege für Eltern und Erziehungsberechtigte – von der ersten Anmeldung bis zu Fragen im Schulalltag.',
    theme: 'blue',
    kind: 'parents',
    sections: [
      section(
        'zusammenarbeit',
        'Gut informiert. Gut verbunden.',
        ['SchoolFox verbindet Schule und Familien. Persönliche Gespräche, Elternabende und Lernentwicklungsgespräche ergänzen den Austausch. Bei Sorgen und Fragen stehen vertrauliche Beratungsangebote zur Verfügung.'],
        {
          links: [
            ['SchoolFox kennenlernen', '/eltern/schoolfox/'],
            ['Beratung finden', '/eltern/beratung/']
          ]
        }
      ),
      section(
        'orientierung',
        'Wissen für den Schulalltag',
        ['Im Schul-ABC finden Sie die ausführlichen Informationen des Schuljahres 2025/26. Die neu aufbereiteten Themenseiten kennzeichnen neuere Angaben und offene Unterschiede.'],
        {
          links: [
            ['Zum Schul-ABC', '/eltern/schul-abc/'],
            ['Zeugnisse & Rückmeldungen', '/eltern/zeugnisse/'],
            ['Konzepte & Regeln', '/eltern/konzepte/']
          ]
        }
      )
    ]
  },
  {
    url: '/eltern/krankmeldung/',
    title: 'Ihr Kind ist krank?',
    navTitle: 'Krankmeldung',
    eyebrow: 'Für Eltern · Krankmeldung',
    intro: 'Bitte informieren Sie die Schule am selben Tag vor Unterrichtsbeginn über SchoolFox. Hier finden Sie die weiteren Hinweise aus dem Bestand.',
    theme: 'peach',
    sections: [
      section(
        'melden',
        'So melden Sie Ihr Kind krank',
        [],
        {
          steps: [
            [
              'Vor Unterrichtsbeginn melden',
              'Nutzen Sie SchoolFox, um die Schule noch am selben Tag zu informieren.'
            ],
            [
              'Fehlzeit entschuldigen',
              'Laut Schulvorgabe ist bei mehr als drei Krankheitstagen normalerweise eine schriftliche Entschuldigung erforderlich. Geben Sie bei der Rückkehr eine schriftliche Entschuldigung über die Fehlzeit mit. Ein Attest kann in besonderen Fällen verlangt werden.'
            ],
            [
              'Ansteckende Erkrankungen mitteilen',
              'Informieren Sie die Schule unverzüglich über ansteckende oder meldepflichtige Erkrankungen. Ihr Kind soll erst zurückkehren, wenn es ausreichend gesund und belastbar ist.'
            ]
          ]
        }
      ),
      section(
        'hilfe',
        'SchoolFox funktioniert nicht?',
        ['Wenn Sie keinen Zugang haben oder Unterstützung benötigen, wenden Sie sich an die Schule. Diese Website nimmt keine Krankmeldungen entgegen. Die Hinweise zur Fehlzeit sind als Schulvorgaben aus dem Bestand wiedergegeben.'],
        {
          links: [
            ['SchoolFox-Hilfe', '/eltern/schoolfox/'],
            ['Schule anrufen: 0551 7899469', 'tel:+495517899469']
          ]
        }
      )
    ],
    sourceUrls: ['https://www.heinrich-grupe-schule.de/seite/847750/krankheit-eines-kindes.html']
  },
  {
    url: '/eltern/schoolfox/',
    title: 'In Verbindung bleiben.',
    navTitle: 'SchoolFox',
    eyebrow: 'Für Eltern · Kommunikation',
    intro: 'SchoolFox ist der externe Kommunikationsweg zwischen Schule, Lehrkräften und Familien – auch für Krankmeldungen.',
    theme: 'blue',
    sections: [
      section(
        'start',
        'Ihr Einstieg in SchoolFox',
        [
          'Die Schule gibt die Anmeldecodes aus. Mit SchoolFox werden Nachrichten ausgetauscht, Empfangsbestätigungen gegeben und Krankmeldungen übermittelt. Ein Zugang zu SchoolFox wird auf dieser Website nicht eingebettet.',
          'Wenn Ihnen ein Code fehlt oder der Einstieg nicht gelingt, hilft die Schule weiter.'
        ],
        {
          links: [
            ['Unterstützung anfragen', '/kontakt/'],
            ['Hinweise zur Krankmeldung', '/eltern/krankmeldung/']
          ]
        }
      ),
      section(
        'sprachen',
        'Willkommensbriefe in sechs Sprachen',
        ['Die Einstiegsinformationen stehen auf Deutsch, Arabisch, Englisch, Russisch, Serbisch und Türkisch bereit. Das Elternhandbuch erklärt die Nutzung ausführlicher auf 44 Seiten.'],
        {
          documentCategory: 'SchoolFox'
        }
      )
    ],
    sourceUrls: ['https://www.heinrich-grupe-schule.de/seite/708744/schoolfox.html']
  },
  {
    url: '/eltern/anmeldung/',
    title: 'Ein guter Anfang.',
    navTitle: 'Schulanmeldung',
    eyebrow: 'Für Eltern · Schulanmeldung',
    intro: 'Die Anmeldung beginnt mit den passenden Unterlagen. Hier finden Sie das Dokumentenpaket und einen verständlichen Überblick.',
    theme: 'yellow',
    sections: [
      section(
        'schritte',
        'In drei Schritten vorbereiten',
        [],
        {
          steps: [
            [
              'Unterlagen herunterladen',
              'Anmeldebogen, Merkblätter und Einverständniserklärungen bilden den Einstieg. Lesen Sie auch die zugehörigen Belehrungen, Konzepte und Datenschutzhinweise.'
            ],
            [
              'Angaben sorgfältig vorbereiten',
              'Der Aufnahmebogen fragt nach dem Kind, bisheriger Betreuung oder Schule, Sorgeberechtigten, Notfallkontakten, Sorgeberechtigung und Einwilligungen. Die Merkblätter bündeln Kenntnisnahmen und Einverständnisse, unter anderem zu SchoolFox, Zahnvorsorge und klasseninternen Fotos.'
            ],
            [
              'Abgabe mit der Schule abstimmen',
              'Bitte klären Sie Termin, Abgabeweg und offene Fragen mit dem Sekretariat. Eine aktuelle Anmeldefrist und eine Online-Anmeldung sind im erfassten Bestand nicht belegt.'
            ]
          ],
          links: [['Sekretariat kontaktieren', 'mailto:sekretariat@hgs-rosdorf.de']]
        }
      ),
      section(
        'unterlagen',
        'Die Unterlagen zur Anmeldung',
        ['Die Anmeldung erfolgt mit den Originaldokumenten. Diese Website erfasst keine Daten Ihres Kindes und übermittelt keine Schulanmeldung.'],
        {
          documentCategory: 'Schulanmeldung'
        }
      ),
      section(
        'kennenlernen',
        'Unsere Schule kennenlernen',
        ['Zum Einzugsgebiet gehören Rosdorf, Klein Wiershausen, Settmarshausen und Olenhusen. Informationen zum Schulkindergarten, Schulalltag und Ganztag helfen bei der Orientierung.'],
        {
          links: [
            ['Schulprofil & Leitbild', '/unsere-schule/'],
            ['Klassen & Schulkindergarten', '/unsere-schule/klassen/'],
            ['Ganztag', '/schulalltag/ganztag/']
          ]
        }
      )
    ],
    sourceUrls: ['https://www.heinrich-grupe-schule.de/seite/765298/schulanmeldung.html']
  },
  {
    url: '/eltern/zeugnisse/',
    title: 'Entwicklung sichtbar machen.',
    navTitle: 'Zeugnisse',
    eyebrow: 'Für Eltern · Lernen & Rückmeldung',
    intro: 'Rückmeldungen sollen Fähigkeiten, Fortschritte und Förderbedarf differenziert sichtbar machen. Hier finden Sie Informationen und die dokumentierte Planung.',
    theme: 'green',
    notice: note('Planung, kein bestätigter Beschluss', 'Die Einführung kompetenzorientierter Zeugnisse wurde angekündigt. Ein Ergebnis der für 01.06.2026 angekündigten Gesamtkonferenz ist in den erfassten Quellen nicht nachgewiesen.'),
    sections: [
      section(
        'rueckmeldung',
        'Mehr als eine einzelne Note',
        ['Kompetenzorientierte Rückmeldungen beschreiben Fähigkeiten und Lernfortschritte differenziert und benennen Unterstützungsbedarf. Die Bestandsseite erläutert dieses Prinzip; Musterzeugnisse zeigen die vorgesehenen Darstellungen.']
      ),
      section(
        'planung',
        'Der dokumentierte Planungsstand',
        ['Die bisherige Schulwebsite beschreibt eine geplante Umstellung für Jahrgang 3 ab 2026/27. Der Elternbrief vom 28.04.2026 erweitert die Planung auf Jahrgang 4 ab 2027/28 und kündigt eine Entscheidung am 01.06.2026 an. Der Beschluss muss von der Schule bestätigt werden.'],
        {
          documentCategory: 'Zeugnisse'
        }
      ),
      section(
        'mehr',
        'Weiterführende Quellen',
        ['Die Bestandsseite verweist ergänzend auf das niedersächsische Kultusministerium, das Deutsche Schulportal, Learn Learning with Caroline und die ARD-Mediathek. Ein eindeutiger Episodenlink zur Mediathek ist nicht dokumentiert.'],
        {
          links: [
            ['Kultusministerium Niedersachsen ↗', 'https://www.mk.niedersachsen.de'],
            ['Deutsches Schulportal ↗', 'https://deutsches-schulportal.de'],
            ['Learn Learning with Caroline ↗', 'https://www.learnlearningwithcaroline.com'],
            ['ARD-Mediathek ↗', 'https://www.ardmediathek.de']
          ]
        }
      )
    ],
    sourceUrls: ['https://www.heinrich-grupe-schule.de/seite/708755/zeugnisse.html']
  },
  {
    url: '/eltern/beratung/',
    title: 'Manchmal hilft ein Gespräch.',
    navTitle: 'Beratung & Mobbingprävention',
    eyebrow: 'Für Eltern · Beratung & Schutz',
    intro: 'Bei Sorgen, Konflikten oder Fragen müssen Familien nicht allein nach Lösungen suchen. Die Schule bietet vertrauliche Unterstützung.',
    theme: 'blue',
    sections: [
      section(
        'sozialarbeit',
        'Schulsozialarbeit: Iris Laskowski',
        [
          'Iris Laskowski ist Diplom-Sozialpädagogin und seit dem 01.08.2019 an der HGS tätig. Für Kinder gehören Sozialtraining, Präventionsprojekte und Hilfe bei Streit oder Problemen zum Angebot.',
          'Eltern erhalten Beratung und Begleitung bei schulischen, familiären, erzieherischen und finanziellen Anliegen. Gespräche sind vertraulich; Termine werden vereinbart.'
        ],
        {
          contact: {
            name: 'Iris Laskowski',
            role: 'Schulsozialarbeit',
            phone: '0151 70871990',
            phoneHref: '+4915170871990',
            email: 'iris.laskowski@schule-nds.de'
          }
        }
      ),
      section(
        'beratungslehrerin',
        'Beratungslehrerin: Kerstin Groß',
        [
          'Die Beratung ist freiwillig, unabhängig und vertraulich. Themen sind unter anderem Ängste, Übergänge, Krisen, Trennung und Verlust, Konflikte, Schulwechsel, Medienkonsum und Erziehungsfragen. Das Angebot richtet sich an Kinder, Eltern, Lehrkräfte und Mitarbeitende.',
          'Die Bestandsseite nennt Montag 11:25–12:05 Uhr, Mittwoch ab 13:00 Uhr und Donnerstag 09:40–10:20 Uhr sowie einen Raum gegenüber dem Wasserspender. Wegen widersprüchlicher Kontaktdaten und des Umbaus bitten wir Sie, Termin und Zugang zunächst über das Sekretariat zu klären.'
        ],
        {
          note: note('Kontakt noch nicht vereinheitlicht', 'Beratungsseite: 0551-899469 / downtrend@web.de. Mobbingseite: 0551-7899469 / kerstin.gross@schule-nds.de. Schutzkonzept: 0170-8074767. Keine Variante ist hier als aktuell bestätigt ausgewählt.'),
          links: [['Gespräch über das Sekretariat anfragen', 'mailto:sekretariat@hgs-rosdorf.de']]
        }
      ),
      section(
        'mobbing',
        'Mobbing erkennen. Gemeinsam handeln.',
        [
          'Ein zeitlich begrenzter Konflikt zwischen ähnlich starken Beteiligten ist etwas anderes als wiederholtes, gezieltes Mobbing mit einem Machtungleichgewicht. Soziale Projekte, aufmerksames Beobachten, Gespräche, Regeln und erreichbare Ansprechpersonen dienen der Prävention.',
          'Zum Mobbing-Interventionsteam gehören laut Bestand Iris Laskowski, Kerstin Groß und Viola Becker. Das Team arbeitet mit Schulleitung und Klassenlehrkräften zusammen. Das Prozessdokument beschreibt Aufnahme, Fallklärung, Teambesprechungen und Interventionen, unter anderem den No-Blame-Ansatz und Klassentraining.',
          'Iris Laskowski ist unter den oben genannten Daten erreichbar. Viola Becker: 0551 7899469, viola.becker@schule-nds.de (Quelle: Mobbingseite). Die abweichenden Angaben zu Kerstin Groß sind noch zu klären.'
        ],
        {
          documents: ['D38', 'D24'],
          links: [
            ['Kontakt zur Schule', '/kontakt/'],
            ['Schutz- und Beschwerdekonzept', '/eltern/konzepte/']
          ]
        }
      )
    ],
    sourceUrls: [
      'https://www.heinrich-grupe-schule.de/seite/708729/schulsozialarbeiterin.html',
      'https://www.heinrich-grupe-schule.de/seite/708756/beratungsangebote.html',
      'https://www.heinrich-grupe-schule.de/seite/858078/mobbing-interventionsteam.html'
    ]
  },
  {
    url: '/eltern/konzepte/',
    title: 'Ein verlässlicher Rahmen.',
    navTitle: 'Konzepte & Regeln',
    eyebrow: 'Für Eltern · Konzepte',
    intro: 'Gemeinsame Regeln und nachvollziehbare Wege helfen, den Schulalltag respektvoll und sicher zu gestalten.',
    theme: 'green',
    sections: [
      section(
        'schutz',
        'Erziehungs- und Schutzkonzept',
        [
          'Das Konzept behandelt Kinderrechte, gewaltfreie Konfliktlösung, einen Verhaltenskodex, Risikoanalyse, Fortbildungen und jahrgangsbezogene Prävention. Es beschreibt außerdem gestufte Maßnahmen (A–D), Beschwerdewege und Interventionen.',
          'Wichtige Ansprechpartner und die Einordnung von Konflikten und Mobbing finden Sie auch als Webtext im Beratungsbereich.'
        ],
        {
          documents: ['D24'],
          links: [['Beratung & Mobbingprävention', '/eltern/beratung/']]
        }
      ),
      section(
        'beschwerden',
        'Konflikte respektvoll klären',
        ['Das Beschwerdekonzept vom 29.11.2015 beschreibt einen gestuften Weg: zuerst die unmittelbar betroffene Person ansprechen, dann gegebenenfalls die nächste Ebene einbeziehen. Vertrauenspersonen, Elternvertretung, Schulleitung oder Beratungslehrkraft können Gespräche begleiten. Vereinbarungen können protokolliert werden. Ziel sind tragfähige Lösungen.'],
        {
          documents: ['D34']
        }
      ),
      section(
        'vertretung',
        'Unterrichtskontinuität bei Vertretung',
        ['Das Vertretungskonzept vom April 2024 behandelt Teamvertretung, gestufte Personalmaßnahmen, Materialversorgung und Kommunikation. Ein öffentlicher Live-Vertretungsplan ist im Bestand nicht nachgewiesen.'],
        {
          documents: ['D25']
        }
      ),
      section(
        'gesundheit',
        'Gesundheit & weitere Regelungen',
        ['Die Infektionsschutzbelehrung, Informationen zu Kopfläusen und das Waffenverbot sind im Dokumentbereich verfügbar. Die Infektionsschutzbelehrung gehört ebenfalls zu den Anmeldeunterlagen.'],
        {
          documents: ['D32', 'D69', 'D35'],
          links: [['Krankmeldung', '/eltern/krankmeldung/']]
        }
      )
    ],
    sourceUrls: ['https://www.heinrich-grupe-schule.de/seite/708747/konzepte.html']
  },
  {
    url: '/eltern/schul-abc/',
    title: 'Von A bis Schulalltag.',
    navTitle: 'Schul-ABC',
    eyebrow: 'Für Eltern · Schul-ABC',
    intro: 'Das Schul-ABC bündelt ausführliche Elterninformationen. Der erfasste Download gehört zum Schuljahr 2025/26.',
    theme: 'yellow',
    notice: note('Älterer Quellenstand', 'Zeiten, Preise, Räume und Personalangaben aus dem Schul-ABC 2025/26 können vom neueren Bestand abweichen. Die Themenseiten kennzeichnen diese Unterschiede.'),
    sections: [
      section(
        'abc',
        'Was steht im Schul-ABC?',
        [
          'Das achtseitige Dokument behandelt Ansprechpartner, Tagesstruktur, Beratung, Bildung und Teilhabe, Elternmitwirkung, Ferienbetreuung, Alarmübungen, Fundsachen, Ganztag, Ernährung und Wasserspender, Geräteverwendung, Hausaufgaben, Infektionsschutz, Zeugnisse, Schulweg und Parken, Religion, Sport und Schwimmen, Schäden, SchoolFox und Schulregeln.',
          'Hausaufgaben werden als selbstständige Übung für etwa 30 Minuten beschrieben. Informationen zu Ferienangeboten werden laut Dokument über SchoolFox weitergegeben.'
        ],
        {
          documents: ['D02']
        }
      ),
      section(
        'wege',
        'Die wichtigsten Themen als Webtext',
        ['Für häufige Fragen führen die neu aufbereiteten Seiten direkt zu den passenden Informationen.'],
        {
          links: [
            ['Tagesablauf & Zeiten', '/schulalltag/'],
            ['Ganztag', '/schulalltag/ganztag/'],
            ['Beratung', '/eltern/beratung/'],
            ['Gremien & Elternmitwirkung', '/unsere-schule/mitwirkung/'],
            ['SchoolFox', '/eltern/schoolfox/']
          ]
        }
      )
    ],
    sourceUrls: ['https://www.heinrich-grupe-schule.de/seite/765392/schul-abc.html']
  }
];
