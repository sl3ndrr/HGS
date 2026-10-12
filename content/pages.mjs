// Authored web content. Source facts: docs/RELAUNCH-BRIEFING.md (12.10.2026).
// Text is intentionally separated from rendering; section IDs are stable deep links.
const section = (id, title, paragraphs, extra = {}) => ({
  id,
  title,
  paragraphs,
  ...extra
});
const note = (title, text) => ({
  title,
  text
});
export const quickLinks = [['Krankmeldung', '/eltern/krankmeldung/', 'heart', 'Vor Unterrichtsbeginn'], ['Unterrichtszeiten', '/schulalltag/', 'clock', 'Den Tag im Blick'], ['Ganztag', '/schulalltag/ganztag/', 'sun', 'Lernen, spielen, entdecken'], ['Speiseplan', '/schulalltag/mittagessen/', 'meal', 'Was gibt es zu essen?'], ['Schulanmeldung', '/eltern/anmeldung/', 'pencil', 'Gut in die Schule starten'], ['Downloads', '/downloads/', 'download', 'Alles an einem Ort'], ['Beratung', '/eltern/beratung/', 'chat', 'Gemeinsam eine Lösung finden'], ['Kontakt', '/kontakt/', 'phone', 'Wir sind erreichbar']];
export const pages = [{
  url: '/unsere-schule/',
  title: 'Eine Schule. Viele Möglichkeiten.',
  navTitle: 'Unsere Schule',
  eyebrow: 'Unsere Schule',
  intro: 'Jedes Kind bringt etwas Eigenes mit. An der Heinrich-Grupe-Schule in Rosdorf geben wir dieser Vielfalt Raum – zum Lernen, Wachsen und Zusammenleben.',
  theme: 'green',
  imageId: 'B06',
  sections: [section('profil', 'Mitten in Rosdorf. Mitten im Leben.', ['Die Heinrich-Grupe-Schule ist eine Grundschule mit Schulkindergarten, verlässlichem Vormittagsangebot und offenem Ganztag. Zum Einzugsgebiet gehören Rosdorf, Klein Wiershausen, Settmarshausen und Olenhusen.', 'Unsere Umgebung eröffnet viele Lernorte: Freibad, Rase, Kiesseen, Wartberg, Mühle und Bücherei. Busverbindungen führen nach Göttingen. Auf dem Schulgelände werden Innenhof und Bühne, Spiel- und Sportflächen, eine Spieleausleihe, Obstbäume und ein kleines Gartenbeet beschrieben.'], {
    links: [['Klassen kennenlernen', '/unsere-schule/klassen/'], ['Schulalltag entdecken', '/schulalltag/']]
  }), section('leitbild', 'Bunt wie das Leben', ['Vielfalt und individuelle Lernwege stehen im Mittelpunkt unseres Leitbilds. Differenzierte Methoden, Lernwerkstatt, altersübergreifende Projekte sowie Förderung und Forderung sollen die Entwicklung jedes Kindes unterstützen. Kreativität, Sport und Musik gehören ebenso dazu wie die Zusammenarbeit mit Kitas und weiterführenden Schulen.', 'Kinder übernehmen Verantwortung: als Helferkinder, in der Spieleausleihe und bei der Streitschlichtung. Gesprächskreise, Klassenrat und Schülerrat geben ihnen eine Stimme. Feste Bezugspersonen, gemeinsame Regeln und Rituale bieten Sicherheit.', 'Lernentwicklungsgespräche, Elternabende und Feste verbinden Familien und Schule. Teamarbeit und ein respektvolles Miteinander tragen diese Gemeinschaft. Die Angebotsdetails des Leitbilds werden vor Veröffentlichung auf Aktualität geprüft.'], {
    documents: ['D01'],
    values: [['Individuell wachsen', 'Lernwege, die Unterschiede ernst nehmen.'], ['Gemeinschaft erleben', 'Verantwortung übernehmen und mitentscheiden.'], ['Die Welt entdecken', 'Natur, Bewegung und Kreativität verbinden.']]
  }), section('geschichte', 'Wurzeln, die tragen', ['Das Schulgebäude entstand 1922. Seit 1965 wird es als Grundschule genutzt; 1968 erhielt es den Namen von Prof. Dr. Heinrich Grupe. Sein naturkundlich-anschaulicher Unterricht bildet einen historischen Bezug für unsere Schule. Seit 1973 wurde das Gebäude in mehreren Schritten erweitert.'], {
    media: ['B08'],
    links: [['Mehr zur Schulentwicklung', '/unsere-schule/entwicklung/']]
  })],
  sourceUrls: ['https://www.heinrich-grupe-schule.de/seite/708809/unsere-schule.html']
}, {
  url: '/unsere-schule/team/',
  title: 'Menschen, die Schule gestalten.',
  navTitle: 'Unser Team',
  eyebrow: 'Unsere Schule · Team',
  intro: 'Lehrkräfte, pädagogische Mitarbeitende, Schulsozialarbeit und viele helfende Hände begleiten den Schulalltag.',
  theme: 'peach',
  kind: 'team',
  sections: [section('leitung', 'Gemeinsam für die Kinder', ['Esther Jacobsen leitet die Schule. Julia Aramayo ist Konrektorin. Für organisatorische Fragen ist das Sekretariat mit Sabine Kikos ansprechbar.'], {
    links: [['Kontakt aufnehmen', '/kontakt/'], ['Beratung kennenlernen', '/eltern/beratung/']]
  })],
  notice: note('Personenstand des Bestands', 'Die Teamseite des bisherigen Auftritts nennt kein Schuljahr. Die hier übernommenen Namen und Rollen stammen aus dem Briefing vom 12.10.2026 und müssen vor Veröffentlichung bestätigt werden; das Organigramm 2025/26 weicht teilweise ab.'),
  documents: ['D03'],
  sourceUrls: ['https://www.heinrich-grupe-schule.de/seite/708728/kollegium.html']
}, {
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
}, {
  url: '/unsere-schule/mitwirkung/',
  title: 'Schule lebt vom Mitgestalten.',
  navTitle: 'Gremien & Mitwirkung',
  eyebrow: 'Unsere Schule · Mitwirkung',
  intro: 'Eltern, Kinder und Mitarbeitende bringen ihre Perspektiven ein. Gemeinsam gestalten sie das Schulleben und seine Entwicklung.',
  theme: 'blue',
  sections: [section('schulvorstand', 'Der Schulvorstand', ['Der Schulvorstand bringt Lehrkräfte und Eltern gleichgewichtig zusammen. Die Bestandsseite beschreibt seine Arbeit an Budget, Kooperationen, Stundentafel, Projektwochen, Sponsoring und schulischer Qualitätsprüfung.', 'Diese Aufgabenbeschreibung stammt vom 10.09.2019. Eine aktuelle Mitgliederliste ist auf der bisherigen Seite nicht vorhanden. Die Namen im Organigramm beziehen sich auf 2025/26; aktuelle rechtliche Grundlagen und Besetzungen sind vor Veröffentlichung zu prüfen.']), section('elternrat', 'Der Schulelternrat', ['Der Schulelternrat vertritt die Interessen der Familien und verbindet Elternschaft und Schule. Er unterstützt die Zusammenarbeit und wirkt bei schulischen Entscheidungen mit.', 'Das Organigramm 2025/26 nennt Reutter als Vorsitz und Hauk als Stellvertretung. Aktuelle Kontaktdaten und Besetzung sind nicht bestätigt. Das Sekretariat hilft bei der Kontaktaufnahme.'], {
    links: [['Zum Sekretariat', '/kontakt/']]
  }), section('konferenzen', 'Konferenzen & Zusammenarbeit', ['Das Organigramm beschreibt die Zusammenarbeit von Leitung, Klassen- und Fachteams, Gremien, Betreuung, Mensa und Förderverein. Der Konferenzkalender 2026/27 umfasst unter anderem Dienstbesprechungen, Fach-, Gesamt- und Zeugniskonferenzen sowie Lernentwicklungsgespräche.', 'Einzelne Kalendertermine werden erst nach Prüfung der ursprünglichen PDF-Tabellen als Webtermine veröffentlicht.'], {
    documents: ['D03', 'D04']
  }), section('kinder', 'Auch Kinder entscheiden mit', ['Gesprächskreise, Klassenrat und Schülerrat stärken Beteiligung. Helferkinder, Spieleausleihe und Streitschlichtung bieten Gelegenheiten, Verantwortung zu übernehmen.'], {
    links: [['Unser Leitbild', '/unsere-schule/#leitbild']]
  })],
  sourceUrls: ['https://www.heinrich-grupe-schule.de/seite/708731/schulvorstand.html', 'https://www.heinrich-grupe-schule.de/seite/708732/schulelternrat.html', 'https://www.heinrich-grupe-schule.de/seite/708733/konferenzen.html']
}, {
  url: '/unsere-schule/entwicklung/',
  title: 'Raum für die Zukunft.',
  navTitle: 'Schulentwicklung & Umbau',
  eyebrow: 'Unsere Schule · Entwicklung',
  intro: 'Die Schule verändert sich. Hier finden Sie die dokumentierten Informationen zum Umbau mit ihrem jeweiligen Quellenstand.',
  theme: 'peach',
  imageId: 'B11',
  notice: note('Historischer Informationsstand', 'Der Elternbrief vom 04.03.2025 und das Baustellenfoto beschreiben einen damaligen Stand. Sie sind keine Bestätigung des heutigen Baufortschritts oder aktueller Zugangswege.'),
  sections: [section('umbau', 'Was der Elternbrief beschreibt', ['Der Elternbrief vom 04.03.2025 kündigt den Ersatz des ältesten Gebäudeteils und anschließende Sanierungen an. Ziel sind mehr Platz und Inklusion; ein Aufzug ist vorgesehen. Zunächst sind Verwaltung, Lernwerkstatt und Schulkindergarten betroffen.', 'Der Brief beschreibt die Verlegung von Lehrerzimmer und Sekretariat in die Aula sowie geänderte Höfe und Zugänge. Genannt werden ungefähr zwei Jahre Neubau und danach zwei Jahre Sanierung. Unterricht, Lernorte und Pausen sollen angepasst werden. Diese Zeitangaben werden hier als damalige Planung wiedergegeben.'], {
    documents: ['D71']
  }), section('zugang', 'Aktuelle Wege bitte erfragen', ['Der heutige Sekretariatsstandort und die Zugangswege sind noch zu bestätigen. Bitte wenden Sie sich für einen Besuch an die Schule.'], {
    links: [['Kontakt & Anfahrt', '/kontakt/'], ['Bauberichte im Archiv', '/schulleben/nachrichten/?thema=Schulentwicklung']]
  })],
  sourceUrls: ['https://www.heinrich-grupe-schule.de/seite/708806/umbau.html']
}, {
  url: '/schulalltag/',
  title: 'Ein Tag voller Möglichkeiten.',
  navTitle: 'Tagesablauf & Unterrichtszeiten',
  eyebrow: 'Schulalltag',
  intro: 'Lernen, gemeinsame Pausen, Bewegung und Zeit zum Üben: Ein klarer Tagesrhythmus gibt Kindern Orientierung.',
  theme: 'yellow',
  kind: 'schedule',
  sections: [section('zeiten', 'Unterricht & Pausen', ['Die folgende Vormittagsstruktur ist als zugänglicher Webtext aus dem Schul-ABC 2025/26 übernommen. Sie ist ein älterer Quellenstand. Die Tagesstruktur-Grafik des Bestands muss vor einer verbindlichen Aktualisierung redaktionell bestätigt werden.'], {
    schedule: true,
    documents: ['D02'],
    media: ['B03']
  }), section('verlässlichkeit', 'Verlässliche Grundschule', ['Die bisherige Schulwebsite beschreibt Unterrichtsschluss nach der fünften Stunde für alle Klassen. Für die Jahrgänge 1 und 2 werden eine beziehungsweise zwei Betreuungsstunden am Vormittag durch pädagogische Mitarbeitende genannt.', 'Die Betreuungskontingente weichen teilweise von einem älteren Vertretungskonzept ab. Bitte klären Sie die konkrete Betreuung Ihres Kindes mit der Schule.'], {
    links: [['Kontakt zur Schule', '/kontakt/']]
  }), section('nachmittag', 'Und nach dem Vormittag?', ['Im offenen Ganztag folgen Mittagessen, angeleitete Übungszeit und Spiel- beziehungsweise AG-Angebote. Das Formular 2026/27 und die Ganztagsseite nennen 14:30 beziehungsweise 15:30 Uhr als End- und Abholzeiten.'], {
    links: [['Ganztag & Betreuung', '/schulalltag/ganztag/'], ['Mittagessen & Speisepläne', '/schulalltag/mittagessen/']]
  })],
  sourceUrls: ['https://www.heinrich-grupe-schule.de/seite/708746/unterrichtszeiten.html', 'https://www.heinrich-grupe-schule.de/seite/708736/verlässliche-grundschule.html']
}, {
  url: '/schulalltag/ganztag/',
  title: 'Mehr Zeit zum Entdecken.',
  navTitle: 'Ganztag & Betreuung',
  eyebrow: 'Schulalltag · Ganztag',
  intro: 'Gemeinsam essen, üben, spielen und Neues ausprobieren: Der offene Ganztag ergänzt den verlässlichen Vormittag.',
  theme: 'green',
  sections: [section('ueberblick', 'Gut durch den Nachmittag', ['Die bisherige Schulwebsite beschreibt Ganztag von Montag bis Donnerstag ab 12:45 Uhr bis 14:30 oder 15:30 Uhr. Für Erstklässler wird zusätzlich freitags ein Angebot genannt. Bitte bestätigen Sie die konkrete Freitagsregelung und die verfügbaren Betreuungstage bei der Schule.', 'Die qualifizierten Angebote sind kostenfrei. Bei einzelnen AGs können Materialkosten anfallen. Der Bestand beschreibt eine Anmeldung für einen oder vier Tage.'], {
    facts: [['07:30–07:55', 'Frühbetreuung laut Formular 2026/27'], ['14:30 / 15:30', 'End- und Abholzeiten laut neuerem Bestand']]
  }), section('angebote', 'Lernen, spielen, zusammen sein', ['Vier Essensschichten, eine angeleitete Übungszeit und feste Jahrgangsbezugskräfte strukturieren den Nachmittag. Spielangebote finden in sogenannten „Heimat“-Räumen statt. Für die Klassen 2 bis 4 sind ab 14:30 Uhr altersgemischte AGs beschrieben.', 'Lehrkräfte, pädagogische Mitarbeitende, Sportvereine und Freiwilligendienstkräfte gestalten das Angebot. Aktuelle AG-Plätze und konkrete Angebote erfragen Sie bitte bei der Schule.'], {
    links: [['Kinderstimmen aus dem Schulleben', '/schulleben/kinderstimmen/']]
  }), section('anmeldung', 'Den Ganztag anmelden', ['Das Formular für 2026/27 enthält die Anmeldung, Angaben zur Frühbetreuung, Abholzeiten, Mittagessen und ein SEPA-Mandat. Laden Sie das Formular herunter und klären Sie offene Vertragsfragen mit dem Sekretariat.', 'Die bisherige Schulwebsite nennt eine Jahresbindung. Das Formular nennt eine Halbjahresbindung mit Verlängerung und unterschiedliche Kündigungshinweise (30.11.2026 beziehungsweise vier Wochen vor Halbjahresende). Diese Angaben sind noch nicht vereinheitlicht; hier wird keine verbindliche Frist festgelegt.'], {
    documents: ['D05'],
    note: note('Neuere und ältere Zeiten', '2026/27: 14:30 / 15:30 Uhr. Das ältere Schul-ABC 2025/26 nennt noch 14:15 / 15:15 Uhr. Bitte verwenden Sie das Formular für das passende Schuljahr.'),
    links: [['Fragen zur Anmeldung', '/kontakt/'], ['Mittagessen', '/schulalltag/mittagessen/']]
  })],
  sourceUrls: ['https://www.heinrich-grupe-schule.de/seite/708737/offene-ganztagsschule.html']
}, {
  url: '/schulalltag/mittagessen/',
  title: 'Gemeinsam schmeckt’s besser.',
  navTitle: 'Mittagessen & Speisepläne',
  eyebrow: 'Schulalltag · Mensa',
  intro: 'Ganztagskinder können in der Schulmensa zu Mittag essen. Die erfassten Speisepläne finden Sie hier gesammelt.',
  theme: 'peach',
  sections: [section('mensa', 'Essen in der Schulmensa', ['Der Bestand nennt Vissers Fritze als Lieferant. Der Anbieterort ist widersprüchlich: Die bisherige Schulwebsite nennt Moringen, das Ganztagsformular Hardegsen. Die genaue Angabe ist noch zu bestätigen.', 'Im Ganztagsformular 2026/27 sind 4,80 Euro je Essen genannt. Das ältere Schul-ABC 2025/26 nennt 4,60 Euro. Es gelten die Angaben und Vereinbarungen für das jeweilige Schuljahr; bitte klären Sie den gültigen Preis mit der Schule.'], {
    documents: ['D05']
  }), section('speiseplaene', 'Speisepläne zum Herunterladen', ['Die Wochenangaben stammen aus dem Bestand. Das Jahr ist in den Linktiteln nicht ausgewiesen; die Pläne werden deshalb nicht automatisch als „diese Woche“ bezeichnet. Gerichte, Allergene und weitere Angaben stehen in den Original-PDFs.', 'Der zusätzliche, falsch auf die Vorwoche verlinkte Eintrag „07.12–11.12“ wurde nicht verdoppelt. Die separat ermittelte Originaldatei für 07.–11.12. bleibt erhalten.'], {
    documentCategory: 'Speisepläne'
  }), section('fragen', 'Fragen zu Essen oder Anmeldung?', ['Das Sekretariat hilft bei Fragen zur Ganztagsanmeldung und zu den dafür benötigten Unterlagen.'], {
    links: [['Kontakt', '/kontakt/'], ['Schulobst & Mithelfen', '/schulalltag/schulobst/']]
  })],
  sourceUrls: ['https://www.heinrich-grupe-schule.de/seite/708739/mittagessen.html']
}, {
  url: '/schulalltag/schulobst/',
  title: 'Frische Ideen. Frisches Obst.',
  navTitle: 'Schulobst',
  eyebrow: 'Schulalltag · Ernährung',
  intro: 'Obst und Gemüse gehören zum Schulalltag. Familien können bei der Vorbereitung der Snacks mithelfen.',
  theme: 'green',
  imageId: 'B25',
  sections: [section('programm', 'Das EU-Schulobstprogramm', ['Seit 2024/25 beteiligt sich die Schule am EU-Schulobstprogramm. Laut Bestandsseite liefert Lotta Karotta in 21 von 38 Schulwochen zweimal wöchentlich Obst und Gemüse. Daraus werden täglich Snacks vorbereitet.'], {
    documents: ['D41']
  }), section('mithelfen', 'Morgens gemeinsam anpacken', ['Eltern und Großeltern können laut Bestandsseite morgens zwischen 07:30 und 08:30 Uhr helfen. Wenn Sie mitmachen möchten, stimmen Sie Einsatz und aktuelle Helferzeiten bitte mit der Schule ab.'], {
    links: [['Mithelfen & Kontakt aufnehmen', '/kontakt/']]
  })],
  sourceUrls: ['https://www.heinrich-grupe-schule.de/seite/806610/schulobst.html']
}, {
  url: '/eltern/',
  title: 'Der Schulalltag. Einfach erreichbar.',
  navTitle: 'Für Eltern',
  eyebrow: 'Für Eltern',
  intro: 'Die wichtigsten Wege für Eltern und Erziehungsberechtigte – von der ersten Anmeldung bis zu Fragen im Schulalltag.',
  theme: 'blue',
  kind: 'parents',
  sections: [section('zusammenarbeit', 'Gut informiert. Gut verbunden.', ['SchoolFox verbindet Schule und Familien. Persönliche Gespräche, Elternabende und Lernentwicklungsgespräche ergänzen den Austausch. Bei Sorgen und Fragen stehen vertrauliche Beratungsangebote zur Verfügung.'], {
    links: [['SchoolFox kennenlernen', '/eltern/schoolfox/'], ['Beratung finden', '/eltern/beratung/']]
  }), section('orientierung', 'Wissen für den Schulalltag', ['Im Schul-ABC finden Sie die ausführlichen Informationen des Schuljahres 2025/26. Die neu aufbereiteten Themenseiten kennzeichnen neuere Angaben und offene Unterschiede.'], {
    links: [['Zum Schul-ABC', '/eltern/schul-abc/'], ['Zeugnisse & Rückmeldungen', '/eltern/zeugnisse/'], ['Konzepte & Regeln', '/eltern/konzepte/']]
  })]
}, {
  url: '/eltern/krankmeldung/',
  title: 'Ihr Kind ist krank?',
  navTitle: 'Krankmeldung',
  eyebrow: 'Für Eltern · Krankmeldung',
  intro: 'Bitte informieren Sie die Schule am selben Tag vor Unterrichtsbeginn über SchoolFox. Hier finden Sie die weiteren Hinweise aus dem Bestand.',
  theme: 'peach',
  sections: [section('melden', 'So melden Sie Ihr Kind krank', [], {
    steps: [['Vor Unterrichtsbeginn melden', 'Nutzen Sie SchoolFox, um die Schule noch am selben Tag zu informieren.'], ['Fehlzeit entschuldigen', 'Laut Schulvorgabe ist bei mehr als drei Krankheitstagen normalerweise eine schriftliche Entschuldigung erforderlich. Geben Sie bei der Rückkehr eine schriftliche Entschuldigung über die Fehlzeit mit. Ein Attest kann in besonderen Fällen verlangt werden.'], ['Ansteckende Erkrankungen mitteilen', 'Informieren Sie die Schule unverzüglich über ansteckende oder meldepflichtige Erkrankungen. Ihr Kind soll erst zurückkehren, wenn es ausreichend gesund und belastbar ist.']]
  }), section('hilfe', 'SchoolFox funktioniert nicht?', ['Wenn Sie keinen Zugang haben oder Unterstützung benötigen, wenden Sie sich an die Schule. Diese Website nimmt keine Krankmeldungen entgegen. Die Hinweise zur Fehlzeit sind als Schulvorgaben aus dem Bestand wiedergegeben.'], {
    links: [['SchoolFox-Hilfe', '/eltern/schoolfox/'], ['Schule anrufen: 0551 7899469', 'tel:+495517899469']]
  })],
  sourceUrls: ['https://www.heinrich-grupe-schule.de/seite/847750/krankheit-eines-kindes.html']
}, {
  url: '/eltern/schoolfox/',
  title: 'In Verbindung bleiben.',
  navTitle: 'SchoolFox',
  eyebrow: 'Für Eltern · Kommunikation',
  intro: 'SchoolFox ist der externe Kommunikationsweg zwischen Schule, Lehrkräften und Familien – auch für Krankmeldungen.',
  theme: 'blue',
  sections: [section('start', 'Ihr Einstieg in SchoolFox', ['Die Schule gibt die Anmeldecodes aus. Mit SchoolFox werden Nachrichten ausgetauscht, Empfangsbestätigungen gegeben und Krankmeldungen übermittelt. Ein Zugang zu SchoolFox wird auf dieser Website nicht eingebettet.', 'Wenn Ihnen ein Code fehlt oder der Einstieg nicht gelingt, hilft die Schule weiter.'], {
    links: [['Unterstützung anfragen', '/kontakt/'], ['Hinweise zur Krankmeldung', '/eltern/krankmeldung/']]
  }), section('sprachen', 'Willkommensbriefe in sechs Sprachen', ['Die Einstiegsinformationen stehen auf Deutsch, Arabisch, Englisch, Russisch, Serbisch und Türkisch bereit. Das Elternhandbuch erklärt die Nutzung ausführlicher auf 44 Seiten.'], {
    documentCategory: 'SchoolFox'
  })],
  sourceUrls: ['https://www.heinrich-grupe-schule.de/seite/708744/schoolfox.html']
}, {
  url: '/eltern/anmeldung/',
  title: 'Ein guter Anfang.',
  navTitle: 'Schulanmeldung',
  eyebrow: 'Für Eltern · Schulanmeldung',
  intro: 'Die Anmeldung beginnt mit den passenden Unterlagen. Hier finden Sie das Dokumentenpaket und einen verständlichen Überblick.',
  theme: 'yellow',
  sections: [section('schritte', 'In drei Schritten vorbereiten', [], {
    steps: [['Unterlagen herunterladen', 'Anmeldebogen, Merkblätter und Einverständniserklärungen bilden den Einstieg. Lesen Sie auch die zugehörigen Belehrungen, Konzepte und Datenschutzhinweise.'], ['Angaben sorgfältig vorbereiten', 'Der Aufnahmebogen fragt nach dem Kind, bisheriger Betreuung oder Schule, Sorgeberechtigten, Notfallkontakten, Sorgeberechtigung und Einwilligungen. Die Merkblätter bündeln Kenntnisnahmen und Einverständnisse, unter anderem zu SchoolFox, Zahnvorsorge und klasseninternen Fotos.'], ['Abgabe mit der Schule abstimmen', 'Bitte klären Sie Termin, Abgabeweg und offene Fragen mit dem Sekretariat. Eine aktuelle Anmeldefrist und eine Online-Anmeldung sind im erfassten Bestand nicht belegt.']],
    links: [['Sekretariat kontaktieren', 'mailto:sekretariat@hgs-rosdorf.de']]
  }), section('unterlagen', 'Die Unterlagen zur Anmeldung', ['Die Anmeldung erfolgt mit den Originaldokumenten. Diese Website erfasst keine Daten Ihres Kindes und übermittelt keine Schulanmeldung.'], {
    documentCategory: 'Schulanmeldung'
  }), section('kennenlernen', 'Unsere Schule kennenlernen', ['Zum Einzugsgebiet gehören Rosdorf, Klein Wiershausen, Settmarshausen und Olenhusen. Informationen zum Schulkindergarten, Schulalltag und Ganztag helfen bei der Orientierung.'], {
    links: [['Schulprofil & Leitbild', '/unsere-schule/'], ['Klassen & Schulkindergarten', '/unsere-schule/klassen/'], ['Ganztag', '/schulalltag/ganztag/']]
  })],
  sourceUrls: ['https://www.heinrich-grupe-schule.de/seite/765298/schulanmeldung.html']
}, {
  url: '/eltern/zeugnisse/',
  title: 'Entwicklung sichtbar machen.',
  navTitle: 'Zeugnisse',
  eyebrow: 'Für Eltern · Lernen & Rückmeldung',
  intro: 'Rückmeldungen sollen Fähigkeiten, Fortschritte und Förderbedarf differenziert sichtbar machen. Hier finden Sie Informationen und die dokumentierte Planung.',
  theme: 'green',
  notice: note('Planung, kein bestätigter Beschluss', 'Die Einführung kompetenzorientierter Zeugnisse wurde angekündigt. Ein Ergebnis der für 01.06.2026 angekündigten Gesamtkonferenz ist in den erfassten Quellen nicht nachgewiesen.'),
  sections: [section('rueckmeldung', 'Mehr als eine einzelne Note', ['Kompetenzorientierte Rückmeldungen beschreiben Fähigkeiten und Lernfortschritte differenziert und benennen Unterstützungsbedarf. Die Bestandsseite erläutert dieses Prinzip; Musterzeugnisse zeigen die vorgesehenen Darstellungen.']), section('planung', 'Der dokumentierte Planungsstand', ['Die bisherige Schulwebsite beschreibt eine geplante Umstellung für Jahrgang 3 ab 2026/27. Der Elternbrief vom 28.04.2026 erweitert die Planung auf Jahrgang 4 ab 2027/28 und kündigt eine Entscheidung am 01.06.2026 an. Der Beschluss muss von der Schule bestätigt werden.'], {
    documentCategory: 'Zeugnisse'
  }), section('mehr', 'Weiterführende Quellen', ['Die Bestandsseite verweist ergänzend auf das niedersächsische Kultusministerium, das Deutsche Schulportal, Learn Learning with Caroline und die ARD-Mediathek. Ein eindeutiger Episodenlink zur Mediathek ist nicht dokumentiert.'], {
    links: [['Kultusministerium Niedersachsen ↗', 'https://www.mk.niedersachsen.de'], ['Deutsches Schulportal ↗', 'https://deutsches-schulportal.de'], ['Learn Learning with Caroline ↗', 'https://www.learnlearningwithcaroline.com'], ['ARD-Mediathek ↗', 'https://www.ardmediathek.de']]
  })],
  sourceUrls: ['https://www.heinrich-grupe-schule.de/seite/708755/zeugnisse.html']
}, {
  url: '/eltern/beratung/',
  title: 'Manchmal hilft ein Gespräch.',
  navTitle: 'Beratung & Mobbingprävention',
  eyebrow: 'Für Eltern · Beratung & Schutz',
  intro: 'Bei Sorgen, Konflikten oder Fragen müssen Familien nicht allein nach Lösungen suchen. Die Schule bietet vertrauliche Unterstützung.',
  theme: 'blue',
  sections: [section('sozialarbeit', 'Schulsozialarbeit: Iris Laskowski', ['Iris Laskowski ist Diplom-Sozialpädagogin und seit dem 01.08.2019 an der HGS tätig. Für Kinder gehören Sozialtraining, Präventionsprojekte und Hilfe bei Streit oder Problemen zum Angebot.', 'Eltern erhalten Beratung und Begleitung bei schulischen, familiären, erzieherischen und finanziellen Anliegen. Gespräche sind vertraulich; Termine werden vereinbart.'], {
    contact: {
      name: 'Iris Laskowski',
      role: 'Schulsozialarbeit',
      phone: '0151 70871990',
      phoneHref: '+4915170871990',
      email: 'iris.laskowski@schule-nds.de'
    }
  }), section('beratungslehrerin', 'Beratungslehrerin: Kerstin Groß', ['Die Beratung ist freiwillig, unabhängig und vertraulich. Themen sind unter anderem Ängste, Übergänge, Krisen, Trennung und Verlust, Konflikte, Schulwechsel, Medienkonsum und Erziehungsfragen. Das Angebot richtet sich an Kinder, Eltern, Lehrkräfte und Mitarbeitende.', 'Die Bestandsseite nennt Montag 11:25–12:05 Uhr, Mittwoch ab 13:00 Uhr und Donnerstag 09:40–10:20 Uhr sowie einen Raum gegenüber dem Wasserspender. Wegen widersprüchlicher Kontaktdaten und des Umbaus bitten wir Sie, Termin und Zugang zunächst über das Sekretariat zu klären.'], {
    note: note('Kontakt noch nicht vereinheitlicht', 'Beratungsseite: 0551-899469 / downtrend@web.de. Mobbingseite: 0551-7899469 / kerstin.gross@schule-nds.de. Schutzkonzept: 0170-8074767. Keine Variante ist hier als aktuell bestätigt ausgewählt.'),
    links: [['Gespräch über das Sekretariat anfragen', 'mailto:sekretariat@hgs-rosdorf.de']]
  }), section('mobbing', 'Mobbing erkennen. Gemeinsam handeln.', ['Ein zeitlich begrenzter Konflikt zwischen ähnlich starken Beteiligten ist etwas anderes als wiederholtes, gezieltes Mobbing mit einem Machtungleichgewicht. Soziale Projekte, aufmerksames Beobachten, Gespräche, Regeln und erreichbare Ansprechpersonen dienen der Prävention.', 'Zum Mobbing-Interventionsteam gehören laut Bestand Iris Laskowski, Kerstin Groß und Viola Becker. Das Team arbeitet mit Schulleitung und Klassenlehrkräften zusammen. Das Prozessdokument beschreibt Aufnahme, Fallklärung, Teambesprechungen und Interventionen, unter anderem den No-Blame-Ansatz und Klassentraining.', 'Iris Laskowski ist unter den oben genannten Daten erreichbar. Viola Becker: 0551 7899469, viola.becker@schule-nds.de (Quelle: Mobbingseite). Die abweichenden Angaben zu Kerstin Groß sind noch zu klären.'], {
    documents: ['D38', 'D24'],
    links: [['Kontakt zur Schule', '/kontakt/'], ['Schutz- und Beschwerdekonzept', '/eltern/konzepte/']]
  })],
  sourceUrls: ['https://www.heinrich-grupe-schule.de/seite/708729/schulsozialarbeiterin.html', 'https://www.heinrich-grupe-schule.de/seite/708756/beratungsangebote.html', 'https://www.heinrich-grupe-schule.de/seite/858078/mobbing-interventionsteam.html']
}, {
  url: '/eltern/konzepte/',
  title: 'Ein verlässlicher Rahmen.',
  navTitle: 'Konzepte & Regeln',
  eyebrow: 'Für Eltern · Konzepte',
  intro: 'Gemeinsame Regeln und nachvollziehbare Wege helfen, den Schulalltag respektvoll und sicher zu gestalten.',
  theme: 'green',
  sections: [section('schutz', 'Erziehungs- und Schutzkonzept', ['Das Konzept behandelt Kinderrechte, gewaltfreie Konfliktlösung, einen Verhaltenskodex, Risikoanalyse, Fortbildungen und jahrgangsbezogene Prävention. Es beschreibt außerdem gestufte Maßnahmen (A–D), Beschwerdewege und Interventionen.', 'Wichtige Ansprechpartner und die Einordnung von Konflikten und Mobbing finden Sie auch als Webtext im Beratungsbereich.'], {
    documents: ['D24'],
    links: [['Beratung & Mobbingprävention', '/eltern/beratung/']]
  }), section('beschwerden', 'Konflikte respektvoll klären', ['Das Beschwerdekonzept vom 29.11.2015 beschreibt einen gestuften Weg: zuerst die unmittelbar betroffene Person ansprechen, dann gegebenenfalls die nächste Ebene einbeziehen. Vertrauenspersonen, Elternvertretung, Schulleitung oder Beratungslehrkraft können Gespräche begleiten. Vereinbarungen können protokolliert werden. Ziel sind tragfähige Lösungen.'], {
    documents: ['D34']
  }), section('vertretung', 'Unterrichtskontinuität bei Vertretung', ['Das Vertretungskonzept vom April 2024 behandelt Teamvertretung, gestufte Personalmaßnahmen, Materialversorgung und Kommunikation. Ein öffentlicher Live-Vertretungsplan ist im Bestand nicht nachgewiesen.'], {
    documents: ['D25']
  }), section('gesundheit', 'Gesundheit & weitere Regelungen', ['Die Infektionsschutzbelehrung, Informationen zu Kopfläusen und das Waffenverbot sind im Dokumentbereich verfügbar. Die Infektionsschutzbelehrung gehört ebenfalls zu den Anmeldeunterlagen.'], {
    documents: ['D32', 'D69', 'D35'],
    links: [['Krankmeldung', '/eltern/krankmeldung/']]
  })],
  sourceUrls: ['https://www.heinrich-grupe-schule.de/seite/708747/konzepte.html']
}, {
  url: '/eltern/schul-abc/',
  title: 'Von A bis Schulalltag.',
  navTitle: 'Schul-ABC',
  eyebrow: 'Für Eltern · Schul-ABC',
  intro: 'Das Schul-ABC bündelt ausführliche Elterninformationen. Der erfasste Download gehört zum Schuljahr 2025/26.',
  theme: 'yellow',
  notice: note('Älterer Quellenstand', 'Zeiten, Preise, Räume und Personalangaben aus dem Schul-ABC 2025/26 können vom neueren Bestand abweichen. Die Themenseiten kennzeichnen diese Unterschiede.'),
  sections: [section('abc', 'Was steht im Schul-ABC?', ['Das achtseitige Dokument behandelt Ansprechpartner, Tagesstruktur, Beratung, Bildung und Teilhabe, Elternmitwirkung, Ferienbetreuung, Alarmübungen, Fundsachen, Ganztag, Ernährung und Wasserspender, Geräteverwendung, Hausaufgaben, Infektionsschutz, Zeugnisse, Schulweg und Parken, Religion, Sport und Schwimmen, Schäden, SchoolFox und Schulregeln.', 'Hausaufgaben werden als selbstständige Übung für etwa 30 Minuten beschrieben. Informationen zu Ferienangeboten werden laut Dokument über SchoolFox weitergegeben.'], {
    documents: ['D02']
  }), section('wege', 'Die wichtigsten Themen als Webtext', ['Für häufige Fragen führen die neu aufbereiteten Seiten direkt zu den passenden Informationen.'], {
    links: [['Tagesablauf & Zeiten', '/schulalltag/'], ['Ganztag', '/schulalltag/ganztag/'], ['Beratung', '/eltern/beratung/'], ['Gremien & Elternmitwirkung', '/unsere-schule/mitwirkung/'], ['SchoolFox', '/eltern/schoolfox/']]
  })],
  sourceUrls: ['https://www.heinrich-grupe-schule.de/seite/765392/schul-abc.html']
}, {
  url: '/schulleben/',
  title: 'So bunt ist unser Schulleben.',
  navTitle: 'Schulleben',
  eyebrow: 'Schulleben',
  intro: 'Sport, Natur, Kreativität und Gemeinschaft: Berichte aus dem Schulalltag zeigen, was Kinder gemeinsam erleben.',
  theme: 'peach',
  kind: 'schoollife',
  sections: [section('entdecken', 'Geschichten, die verbinden', ['Im Nachrichtenarchiv sind alle 33 erfassten Meldungen von Dezember 2024 bis Juni 2026 erhalten. Kinderberichte, Projektwochen und Fotobereiche eröffnen weitere Perspektiven. Die Beiträge sind datierte Rückblicke.'], {
    links: [['Nachrichtenarchiv', '/schulleben/nachrichten/'], ['Kinderstimmen', '/schulleben/kinderstimmen/'], ['Projekte', '/schulleben/projekte/'], ['Fotos', '/schulleben/fotos/'], ['Termine', '/schulleben/termine/']]
  })]
}, {
  url: '/schulleben/nachrichten/',
  title: 'Kleine Momente. Große Geschichten.',
  navTitle: 'Nachrichten & Archiv',
  eyebrow: 'Schulleben · Nachrichten',
  intro: '33 Geschichten aus unserer Schule. Entdecken Sie die erfassten Berichte nach Jahr und Thema.',
  theme: 'green',
  kind: 'news',
  sections: []
}, {
  url: '/schulleben/termine/',
  title: 'Was steht an?',
  navTitle: 'Termine',
  eyebrow: 'Schulleben · Termine',
  intro: 'Termine brauchen einen verlässlichen Stand. Hier finden Sie den erfassten Kalender und Hinweise zur laufenden Information.',
  theme: 'yellow',
  sections: [section('kalender', 'Zurzeit keine bestätigten Webtermine', ['Beim Abruf der Bestandsseite wurden keine Veranstaltungen angezeigt. Das bedeutet nicht, dass die Schule keine Termine hat. Bestätigte Termine werden ergänzt, sobald die redaktionellen Daten vorliegen.', 'Der Konferenzkalender 2026/27 bleibt als Original-PDF verfügbar. Einzeltermine – darunter der dort genannte Schilf-Tag 03.02.2027 – werden erst nach Prüfung der PDF-Spalten und schulischer Bestätigung übernommen.'], {
    documents: ['D04'],
    links: [['Informationen über SchoolFox', '/eltern/schoolfox/']]
  })],
  sourceUrls: ['https://www.heinrich-grupe-schule.de/veranstaltungen/index.php']
}, {
  url: '/schulleben/projekte/',
  title: 'Ideen werden lebendig.',
  navTitle: 'Projekte & Projektwoche',
  eyebrow: 'Schulleben · Projekte',
  intro: 'Unter dem Motto „Bunt wie das Leben“ wurde im April 2025 ausprobiert, gestaltet und gemeinsam gefeiert.',
  theme: 'peach',
  imageId: 'B26',
  sections: [section('projektwoche', 'Rückblick: Projektwoche 2025', ['Kollegium, Schulsozialarbeit, externe Fachleute und Eltern begleiteten die Projekte. Der Bericht nennt 25 Projekte, unter anderem Tanz, Clown, Natur, Insekten und Klima, Graffiti an Toiletten sowie Schwimmen und Seepferdchen.', 'Beim abschließenden Schulfest wurden Theater und Musical, Trommeln, Cheerleading, Tanz und Clownbeiträge gezeigt. Der Rückblick nennt den 22.–24.04.2025 und das Fest am 25.04.; die frühere Ankündigung nennt den 23.–25.04.2025. Die unterschiedlichen Datumsangaben bleiben ausdrücklich erhalten.'], {
    media: ['B27', 'B28'],
    links: [['Rückblick vom 16.05.2025', '/schulleben/nachrichten/1071867/'], ['Ankündigung vom 12.03.2025', '/schulleben/nachrichten/1042075/'], ['Fotoalbum', '/schulleben/fotos/']]
  }), section('projektblaetter', 'Die Projektblätter', ['26 verschiedene Projekt-PDFs sind im Bestand verlinkt, obwohl der Bericht 25 Projekte nennt. Die Dokumente sind bildbasiert; weitere Inhalte werden hier nicht allein aus ihren Titeln abgeleitet.'], {
    documentCategory: 'Projekte'
  })],
  sourceUrls: ['https://www.heinrich-grupe-schule.de/seite/766080/projektwoche.html']
}, {
  url: '/schulleben/kinderstimmen/',
  title: 'Aus Sicht der Kinder.',
  navTitle: 'Kinderstimmen',
  eyebrow: 'Schulleben · Kinderstimmen',
  intro: 'Lesen, musizieren, experimentieren und gemeinsam Sport treiben: Kinder erzählen von ihren Erlebnissen.',
  theme: 'blue',
  kind: 'children',
  sections: [section('berichte', 'Einmal erzählt. Hier wiedergefunden.', ['Der Bibliotheksbesuch der damaligen Klassen 1a und 1b am 17.03.2025 und die mittwochs von Steffi Christoph geleitete Slime-AG sind auf der Bestandsseite „Schülerbeiträge“ dokumentiert. Beide Berichte sind auch im Nachrichtenarchiv enthalten. Weitere als Kinderberichte erfasste Beiträge werden hier aus denselben Beitragsdaten verknüpft.'])],
  sourceUrls: ['https://www.heinrich-grupe-schule.de/seite/713223/schülerbeiträge.html']
}, {
  url: '/schulleben/fotos/',
  title: 'Erinnerungen in Bildern.',
  navTitle: 'Fotos',
  eyebrow: 'Schulleben · Fotos',
  intro: 'Einblicke in Projekte und Schulmomente. Die Zuordnung der Bilder folgt dem Medienregister des Briefings.',
  theme: 'yellow',
  kind: 'photos',
  sections: [section('album', 'Fotoalbum: Projektwoche 2025', ['Das Originalalbum ist auf den 16.05.2025 datiert. Seine Einzelbildadressen sind im verfügbaren Material nicht aufgelöst. Bis ein vollständiger Galerieexport vorliegt, führt der Link zum vorhandenen Album. Es werden keine Ersatzfotos von Kindern oder Schulräumen erzeugt.'], {
    links: [['Originalalbum Projektwoche 2025 öffnen ↗', 'https://www.heinrich-grupe-schule.de/fotos/2/214451/sonstige/projektwoche-2025/']]
  }), section('einblicke', 'Dokumentierte Projekteinblicke', ['Die folgenden drei Bilder sind der Projektwochenseite zugeordnet. Weitere Nachrichtenbilder bleiben ihren jeweiligen Beiträgen zugeordnet.'], {
    media: ['B26', 'B27', 'B28'],
    links: [['Zum Nachrichtenarchiv', '/schulleben/nachrichten/']]
  })]
}, {
  url: '/mitmachen/',
  title: 'Gemeinsam wächst mehr.',
  navTitle: 'Mitmachen',
  eyebrow: 'Mitmachen',
  intro: 'Familien, Förderverein und Kooperationspartner bringen sich in das Schulleben ein. Engagement hat viele Formen.',
  theme: 'green',
  sections: [section('gemeinsam', 'Zeit, Ideen und Unterstützung', ['Der Förderverein unterstützt die pädagogische Arbeit durch ehrenamtliches Engagement, Geld und Zusammenarbeit. Kooperationen verbinden Schule mit Sport, Kultur, Naturbildung, Beratung und weiterführenden Schulen.'], {
    links: [['Förderverein kennenlernen', '/mitmachen/foerderverein/'], ['Unser Netzwerk', '/mitmachen/kooperationen/'], ['Beim Schulobst helfen', '/schulalltag/schulobst/'], ['Elternmitwirkung', '/unsere-schule/mitwirkung/']]
  })]
}, {
  url: '/mitmachen/foerderverein/',
  title: 'Für Kinder etwas bewegen.',
  navTitle: 'Förderverein',
  eyebrow: 'Mitmachen · Förderverein',
  intro: 'Der Förderverein der Heinrich-Grupe-Schule Rosdorf e.V. unterstützt die pädagogische Arbeit und das gemeinsame Schulleben.',
  theme: 'peach',
  imageId: 'B12',
  sections: [section('verein', 'Ehrenamtlich verbunden', ['Familien und Schule arbeiten im Förderverein zusammen. Engagement, Beteiligung und finanzielle Unterstützung helfen, pädagogische Vorhaben zu ermöglichen.', 'Vorstand laut Bestandsseite: Daniel Dielenschneider (Vorsitz), Andreas Müller (Stellvertretung), Carsten Wiegmann (Kasse) und Frank Leifheit (Schriftführung). Die Besetzung ist vor Veröffentlichung zu bestätigen.'], {
    contact: {
      name: 'Förderverein der Heinrich-Grupe-Schule Rosdorf e.V.',
      role: 'Kontakt zum Verein',
      email: 'foerderverein-hgs-rosdorf@web.de'
    }
  }), section('mitglied', 'Mitglied werden', ['Das Beitrittsformular nennt einen jährlichen Mindestbeitrag von sieben Euro. Höhere freiwillige Beiträge sind möglich. Es beschreibt den SEPA-Einzug zum 01.10.; die Satzung vom Dezember 2017 nennt einen anderen Zahlungstermin. Bitte klären Sie den gültigen Ablauf mit dem Verein.', 'Die Bestandsseite bezeichnet das Formular als editierbar; die technische Ausfüllbarkeit ist noch zu prüfen. Die unter „Satzung der Schule“ verlinkte Datei wird hier korrekt als Fördervereinssatzung benannt.'], {
    documents: ['D15', 'D16', 'D68']
  })],
  sourceUrls: ['https://www.heinrich-grupe-schule.de/seite/708749/förderverein.html']
}, {
  url: '/mitmachen/kooperationen/',
  title: 'Lernen im starken Netzwerk.',
  navTitle: 'Kooperationspartner',
  eyebrow: 'Mitmachen · Kooperationen',
  intro: 'Schule wirkt über das Schulgelände hinaus. Partnerschaften verbinden Lernen, Bewegung, Natur und Beratung.',
  theme: 'blue',
  sections: [section('rosdorf', 'Partner in Rosdorf', ['Der Bestand nennt das Bündnis für Familie mit dem Familiencafé Laterna Magica, fünf Kitas, einen angegliederten Hort, die evangelische Kirche mit Südindien-Partnerschaft und den MTV Rosdorf. Die Kitas werden im Briefing nicht einzeln benannt.']), section('goettingen', 'Partner in Göttingen und der Region', ['Genannt werden Begabungsförderung Göttingen II, Leineberg-, Bonifatius- und Lohbergschule, Kitas und das Felix-Klein-Gymnasium. Für Umweltbildung nennt die Seite Transfer 21 und Reinhausen, für Freiwilligendienst und Fit für Pisa den ASC sowie für Familienberatung die AWO.', 'Übergangskooperationen bestehen laut Seite mit dem Felix-Klein-Gymnasium und der Carl-Friedrich-Gauß-Schule Groß Schneen. Alte Programmbezeichnungen und die aktuellen Partnerschaften sind noch zu prüfen.'], {
    media: ['B21', 'B22', 'B23', 'B24'],
    documents: ['D39', 'D40']
  }), section('angebote', 'Außerschulische Angebote', ['Die verlinkte Angebotsseite war bei der Erfassung nicht abrufbar; die mobile Variante meldete 404. Konkrete Angebote, Dokumente und Bilder müssen von der Schule ergänzt werden. Bitte erfragen Sie bestätigte aktuelle Angebote bei der Schule.'], {
    links: [['Angebote erfragen', '/kontakt/']]
  })],
  sourceUrls: ['https://www.heinrich-grupe-schule.de/seite/765366/kooperationspartner.html', 'https://www.heinrich-grupe-schule.de/seite/748797/angebote-außerschulischer-kooperationspartner.html']
}, {
  url: '/downloads/',
  title: 'Alles an einem Ort.',
  navTitle: 'Downloads',
  eyebrow: 'Service · Dokumente',
  intro: 'Anmeldungen, Elterninformationen, Konzepte und Projektblätter – nach Thema und Sprache übersichtlich gesammelt.',
  theme: 'yellow',
  kind: 'downloads',
  sections: []
}, {
  url: '/kontakt/',
  title: 'Wir sind für Sie erreichbar.',
  navTitle: 'Kontakt & Anfahrt',
  eyebrow: 'Service · Kontakt',
  intro: 'Sie haben eine Frage oder möchten einen Gesprächstermin vereinbaren? Rufen Sie uns an oder schreiben Sie der passenden Ansprechperson.',
  theme: 'blue',
  kind: 'contact',
  sections: [section('sekretariat', 'Sekretariat', ['Sabine Kikos unterstützt bei organisatorischen Fragen. Das Schul-ABC 2025/26 nennt Montag bis Donnerstag 07:00–12:00 Uhr als Sekretariatszeiten. Eine aktuelle HTML-Bestätigung fehlt; bitte stimmen Sie Besuche telefonisch ab.', 'Auch der aktuelle Raum ist wegen des Umbaus zu bestätigen. Das ältere ABC nennt den ersten Stock; der Baubrief beschreibt die Aula als zwischenzeitlichen Verwaltungsstandort.'], {
    contact: {
      name: 'Sabine Kikos',
      role: 'Sekretariat',
      phone: '0551 7899469',
      phoneHref: '+495517899469',
      email: 'sekretariat@hgs-rosdorf.de'
    }
  }), section('leitung', 'Schulleitung', ['Esther Jacobsen ist Schulleiterin. Julia Aramayo ist Konrektorin.'], {
    contact: {
      name: 'Esther Jacobsen',
      role: 'Schulleiterin',
      phone: '0551 7899469',
      phoneHref: '+495517899469',
      email: 'schulleitung@hgs-rosdorf.de'
    },
    links: [['Unser Team', '/unsere-schule/team/'], ['Vertrauliche Beratung', '/eltern/beratung/']]
  }), section('nachricht', 'Telefon oder E-Mail', ['Ein Versanddienst für ein Website-Formular ist noch nicht angeschlossen. Die Kontaktbuttons öffnen Ihr E-Mail-Programm oder die Telefonfunktion. Diese Website versendet und speichert keine Kontaktanfragen. Bitte melden Sie Erkrankungen Ihres Kindes über SchoolFox.'], {
    links: [['Hinweise zur Krankmeldung', '/eltern/krankmeldung/']]
  }), section('anfahrt', 'So finden Sie uns', ['Heinrich-Grupe-Schule, Lange Str. 17, 37124 Rosdorf. Stimmen Sie wegen der Baumaßnahmen den aktuellen Zugang bitte mit der Schule ab.'], {
    map: true
  })],
  sourceUrls: ['https://www.heinrich-grupe-schule.de/formulare/index.php?form_id=10032229']
}, {
  url: '/impressum/',
  title: 'Impressum',
  navTitle: 'Impressum',
  eyebrow: 'Rechtliches',
  intro: 'Herausgeberangaben aus dem erfassten Schulauftritt und Hinweise zum Stand dieses Relaunchs.',
  theme: 'green',
  legal: true,
  sections: [section('herausgeber', 'Herausgeberkontakt', ['Heinrich-Grupe-Schule, Lange Str. 17, 37124 Rosdorf. Als Herausgeberkontakt nennt der Bestand Esther Jacobsen. Telefon: 0551 7899469. E-Mail: schulleitung@hgs-rosdorf.de. Schulträger ist die Gemeinde Rosdorf.'], {
    links: [['Kontakt', '/kontakt/']]
  }), section('stand', 'Vor einer öffentlichen Bereitstellung prüfen', ['Diese Umsetzung ist eine unveröffentlichte Relaunchfassung. Rechtsform, rechtliche Vertretung, zuständige Aufsicht und die vollständigen erforderlichen Anbieterangaben müssen durch Schule und Schulträger bestätigt werden. Die Angabe „Herausgeberkontakt“ ersetzt keine bestätigte rechtliche Vertretungsregelung.', 'Die PortUNA-Betreiber-, Design- und Technologietexte des alten CMS werden nicht als Angaben zur neuen Umsetzung übernommen. Die alten Förderhinweise „Niedersachsen vernetzt“ und „Azubi-Projekte“ sind auf weitere Gültigkeit zu prüfen. Es wird kein neuer Betreiber oder Dienstanbieter erfunden.']), section('rechte', 'Inhalte und Bildrechte', ['Die Inhalte wurden aus dem Redesign-Briefing vom 12.10.2026 übernommen und redaktionell aufbereitet. Bild- und Dokumentadressen verweisen auf den erfassten Bestand. Rechte, Einwilligungen und die Zulässigkeit der Wiederverwendung sind vor Veröffentlichung durch den Schulbetreiber zu bestätigen.']), section('original', 'Dokumentierter Bestandsstand', ['Die ursprüngliche Impressumsseite bleibt als Quelle nachvollziehbar. Deren CMS- und Fördertexte sind nicht automatisch auf diese Infrastruktur anwendbar.'], {
    links: [['Impressum des Bestands ↗', 'https://www.heinrich-grupe-schule.de/impressum/index.php']]
  })]
}, {
  url: '/datenschutz/',
  title: 'Datenschutz',
  navTitle: 'Datenschutz',
  eyebrow: 'Rechtliches',
  intro: 'Transparenz über die tatsächlich umgesetzten Funktionen. Diese Fassung muss vor Veröffentlichung an den gewählten Betrieb angepasst und fachlich geprüft werden.',
  theme: 'green',
  legal: true,
  notice: note('Relaunchfassung · fachliche Prüfung erforderlich', 'Hostingdienst, Verantwortlichkeit, Datenschutzkontakt, Protokollierung, Speicherfristen und Rechtsgrundlagen sind noch nicht abschließend bestätigt. Dies ist keine freigegebene Datenschutzerklärung für den öffentlichen Betrieb.'),
  sections: [section('kontakt', 'Verantwortlichkeit & Kontakt', ['Der Bestand nennt die Heinrich-Grupe-Schule, Lange Str. 17, 37124 Rosdorf, mit Esther Jacobsen als Herausgeberkontakt. Kontakt: schulleitung@hgs-rosdorf.de, 0551 7899469. Verantwortliche Stelle und Datenschutzbeauftragte müssen durch Schule und Schulträger bestätigt werden.']), section('technik', 'Technischer Aufbau dieser Fassung', ['Diese Website besteht aus statischen HTML-, CSS- und JavaScript-Dateien. Suche, Dokument- und Nachrichtenfilter arbeiten im Browser. Es gibt keine Analysewerkzeuge, Werbetracker, Newsletteranmeldung oder Kommentarbereiche. Es werden keine Cookies oder lokalen Speicher für diese Funktionen eingesetzt. Schriften werden über die Systemschrift des Geräts dargestellt.', 'Der mitgelieferte Node-Server legt selbst keine Zugriffsprotokolldateien an. Hostinganbieter, vorgeschaltete Proxys und deren Verarbeitung – etwa IP-Adresse, Zeitpunkt, URL und Browserinformationen – sind noch nicht festgelegt. Ihre Protokollierung, Rechtsgrundlage und Speicherfristen sind vor Veröffentlichung zu dokumentieren. Die sieben Tage aus der alten CMS-Erklärung werden nicht ungeprüft übernommen.']), section('medien', 'Bilder & Dokumentlinks', ['Originalfotos werden in dieser Prüffassung nur nach Ihrer ausdrücklichen Aktivierung von Verwaltungsportal-Domains geladen, sofern keine lokale Datei verfügbar ist. Dadurch werden insbesondere Ihre IP-Adresse und technische Browserinformationen an den jeweiligen Anbieter übermittelt. Die Aktivierung gilt nur für die aktuell geöffnete Seite; sie wird nicht gespeichert. Vor Veröffentlichung sollen freigegebene Medien lokal eingebunden werden.', 'Beim Öffnen eines Original-PDFs oder externen Links verlassen Sie die Website beziehungsweise laden Inhalte des angegebenen Anbieters. Dort gelten die jeweiligen Datenschutzbestimmungen. Die Dokumente werden nicht im Hintergrund vorgeladen.']), section('anfragen', 'Kontakt & SchoolFox', ['Es ist kein Website-Kontaktformular angeschlossen. Telefon- und E-Mail-Links öffnen die passende Anwendung auf Ihrem Gerät. Die Schule verarbeitet die von Ihnen dort übermittelten Angaben zur Bearbeitung Ihrer Anfrage; Zweck, Rechtsgrundlage und Speicherfristen muss die verantwortliche Stelle ergänzen.', 'SchoolFox ist ein gesonderter externer Kommunikationsdienst. Auf dieser Website gibt es keinen eingebetteten Login und keine Verarbeitung von Krankmeldungen.']), section('karte', 'Google Maps nur nach Aktivierung', ['Die Karte auf der Kontaktseite wird erst geladen, wenn Sie „Google-Karte laden“ aktivieren. Dabei wird eine Verbindung zu Google hergestellt; insbesondere IP-Adresse und technische Browserinformationen können an Google übermittelt und Cookies durch Google gesetzt werden. Die Einwilligung wird nicht dauerhaft gespeichert und gilt nur für diese Seitenansicht. Eine Deaktivierung entfernt die Einbettung; bereits übermittelte Daten werden dadurch nicht zurückgeholt. Ohne Aktivierung bleibt die Adresse als Text nutzbar.', 'Mögliche Drittlandübermittlungen, Dienstanbieterangaben, Rechtsgrundlagen und Informationen über Garantien müssen vor Veröffentlichung fachlich geprüft und ergänzt werden. Videos werden in dieser Umsetzung nicht eingebettet.']), section('rechte', 'Ihre Rechte', ['Soweit die gesetzlichen Voraussetzungen vorliegen, bestehen Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung und Datenübertragbarkeit sowie Widerspruch. Eine Einwilligung kann für die Zukunft widerrufen werden. Zudem besteht ein Beschwerderecht bei einer Datenschutzaufsichtsbehörde. Der zuständige behördliche Datenschutzkontakt und die zuständige Aufsicht sind vor Veröffentlichung zu benennen.']), section('bestand', 'Quelle & weitere Hinweise', ['Die neue Fassung beschreibt die umgesetzte Technik. Die ursprüngliche Erklärung mit Angaben zu PortUNA, optionalem reCAPTCHA und Newsletterfunktionen bleibt als Bestandsquelle erhalten. Nicht vorhandene Dienste werden hier nicht als eingesetzt dargestellt.'], {
    links: [['Datenschutzerklärung des Bestands ↗', 'https://www.heinrich-grupe-schule.de/datenschutz/index.php']]
  })]
}, {
  url: '/suche/',
  title: 'Wonach suchen Sie?',
  navTitle: 'Suche',
  eyebrow: 'Service · Suche',
  intro: 'Seiten, Nachrichten und Dokumente gemeinsam durchsuchen.',
  theme: 'yellow',
  kind: 'search',
  sections: []
}];
