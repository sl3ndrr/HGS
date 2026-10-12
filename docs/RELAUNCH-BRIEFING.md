# EXECUTIVE SUMMARY

## Auftrag, Stand und Belastbarkeit

Dieses Redesign-Briefing beschreibt den bestehenden öffentlichen Webauftritt der **Heinrich-Grupe-Schule in Rosdorf** und dient als Inhaltsbasis für einen vollständigen Relaunch in einem GitHub-Repository. **Analysestand: 12. Oktober 2026.** Quellen sind die angehängte ZIP-Datei, die live abgerufenen Inhaltsseiten, die mobile Ansicht, das Nachrichtenarchiv und verlinkte Dokumente.

Die ZIP enthält **500 Einträge: 496 Dateien und vier Verzeichniseinträge**. Darunter befinden sich **eine HTML-Seite (`index.html`), 48 Rasterbilddateien, 13 CSS-Dateien, fünf JavaScript-Dateien und 429 Schriftdateien**. Die Unterseiten und PDFs sind nicht offline enthalten. Deshalb ergänzt dieses Briefing den Export um die öffentlich abrufbaren Unterseiten.

**Abdeckungsgrenze:** Die gesamte im Export sichtbare Hauptnavigation, ihre Untermenüs, Footerziele und die 33 Meldungen des öffentlichen Archivs wurden erfasst. Eine verlinkte Partnerangebotsseite ist nicht abrufbar. Die Originaladressen von 57 inhaltlichen Bildressourcen wurden ermittelt. Die Originaladresse des Schullogos, einzelne Dekorations-/Bediengrafiken und die Einzelbildadressen der Projektwochen-Galerie sind mit den verfügbaren Quellen nicht abschließend auflösbar. Diese Lücken stehen ausdrücklich im Medienregister. Die Erfassung ist keine Behauptung, sämtliche unverlinkten CMS-Dateien oder nichtöffentlichen Inhalte zu kennen.

## Schule, Zweck und Zielgruppen

Die HGS ist eine **Grundschule mit Schulkindergarten, verlässlichem Vormittagsangebot und offenem Ganztag** in der Gemeinde Rosdorf. Naturbezogenes Lernen, individuelle Entwicklung, Vielfalt, Sport, Kreativität, demokratische Beteiligung und ein respektvolles Miteinander prägen die öffentlich dargestellte Identität. Das Schulmotto lautet **„Bunt wie das Leben“**. Die Startseite verwendet wachsende Pflanzen als Bild für die Entwicklung der Kinder.

Der Webauftritt erfüllt vier Aufgaben: Orientierung für neue Familien, praktische Informationen für den Schulalltag, Darstellung des Schullebens und Zugang zu Ansprechpersonen und Dokumenten.

| Zielgruppe | Zentrale Bedürfnisse |
| --- | --- |
| Eltern und Erziehungsberechtigte | Unterricht/Ganztag, Krankheit melden, Essen, Anmeldung, Zeugnisse, Beratung, Downloads |
| Künftige Schulfamilien | Schule kennenlernen, Einzugsgebiet, Schulkindergarten, Schulanmeldung, Tagesablauf |
| Kinder | Projekte, eigene Beiträge, Fotos und Angebote |
| Lehrkräfte und Mitarbeitende | Gremien, Konzepte, Konferenzkalender, konsistente Elternkommunikation |
| Förderverein, Kooperationspartner und Öffentlichkeit | Engagement, Veranstaltungen, Schulentwicklung, Kontakt |

## Stammdaten

| Merkmal | Erfasste Angabe | Quellen-/Versionshinweis |
| --- | --- | --- |
| Name | Heinrich-Grupe-Schule; im CMS auch „Heinrich Grupe Grundschule“ | Schreibweisen beim Relaunch vereinheitlichen |
| Anschrift | Lange Str. 17, 37124 Rosdorf | Footer, Kontakt, Impressum |
| Telefon | 0551 7899469 | Footer, Kontakt, Impressum |
| Schulleitung | Esther Jacobsen | Kollegium, Impressum |
| Stellvertretung | Julia Aramayo | Kollegium |
| E-Mail Schulleitung | schulleitung@hgs-rosdorf.de | `(at)` im Webtext normalisiert |
| Sekretariat | Sabine Kikos; sekretariat@hgs-rosdorf.de | Kollegium und Schul-ABC 2025/26 |
| E-Mail Konrektorin | konrektor@hgs-rosdorf.de | Schul-ABC 2025/26 |
| Fax | 0551 7893941 | PDF-Briefköpfe; Aktualität prüfen |
| Sekretariatszeiten | Mo–Do 07:00–12:00 Uhr | Schul-ABC 2025/26; keine aktuelle HTML-Bestätigung |
| Einzugsgebiet | Rosdorf, Klein Wiershausen, Settmarshausen, Olenhusen | „Unsere Schule“ |
| Schulträger | Gemeinde Rosdorf | Fördervereinssatzung und Baubericht |
| Schulsozialarbeit | Iris Laskowski; 0151 70871990; iris.laskowski@schule-nds.de | Schulsozialarbeiterin / Mobbingteam |
| Beratungslehrerin | Kerstin Groß | Abweichende Kontaktdaten im Abschnitt zur Beratung |
| Förderverein | Förderverein der Heinrich-Grupe-Schule Rosdorf e.V.; foerderverein-hgs-rosdorf@web.de | Fördervereinsseite |

**Quellen:** [Kontakt](https://www.heinrich-grupe-schule.de/formulare/index.php?form_id=10032229), [Kollegium](https://www.heinrich-grupe-schule.de/seite/708728/kollegium.html), [Unsere Schule](https://www.heinrich-grupe-schule.de/seite/708809/unsere-schule.html), [Schul-ABC](https://www.heinrich-grupe-schule.de/seite/765392/schul-abc.html).

## Zentrale Befunde für den Relaunch

Die Inhalte sind substanziell, aber stark verteilt: Anmeldung, Konzepte, Ganztagsformulare und Gesundheitsinformationen liegen auf verschiedenen Seiten. Der Startseitenbereich „News“ überschneidet sich mit „Aktuelle Meldungen“. Manche Menügruppen verweisen nur auf die Startseite. „Fotoalben“ und „Bilder der Projektwoche“ öffnen dasselbe Album. Wichtige Zeiten sind als Grafik eingebunden. Das Schul-ABC und das Organigramm tragen noch den Stand 2025/26, während einzelne Dokumente bereits 2026/27 betreffen.

Der Relaunch sollte deshalb praktische Elternaufgaben priorisieren, Dokumente zentral auffindbar machen, Inhalte nach Schuljahr versionieren und aktuelle Hinweise von historischen Berichten trennen. Die vorhandene Farb-/Schulidentität darf neu interpretiert werden; alte Layout-, Schrift- und Skriptsysteme müssen nicht übernommen werden.

# SITEMAP & MENÜSTRUKTUR

## Bestehende Hauptnavigation

Die Reihenfolge entspricht dem Export. **Menügruppe** bedeutet: Der Elternpunkt verlinkt derzeit auf `/` und besitzt keine eigenständige Inhaltsseite.

- [Startseite](https://www.heinrich-grupe-schule.de/) — Einstieg

- [Unsere Schule](https://www.heinrich-grupe-schule.de/seite/708809/unsere-schule.html) — Schulprofil

  - [Leitbild](https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Leitbild.pdf) — PDF

  - [Schul-ABC](https://www.heinrich-grupe-schule.de/seite/765392/schul-abc.html)

  - [Kollegium](https://www.heinrich-grupe-schule.de/seite/708728/kollegium.html)

  - [Schulsozialarbeiterin](https://www.heinrich-grupe-schule.de/seite/708729/schulsozialarbeiterin.html)

  - [Klassen](https://www.heinrich-grupe-schule.de/seite/708730/klassen.html)

  - [Schulvorstand](https://www.heinrich-grupe-schule.de/seite/708731/schulvorstand.html)

  - [Schulelternrat](https://www.heinrich-grupe-schule.de/seite/708732/schulelternrat.html)

  - [Konferenzen](https://www.heinrich-grupe-schule.de/seite/708733/konferenzen.html)

  - [Umbau](https://www.heinrich-grupe-schule.de/seite/708806/umbau.html)

- **Aktuelles** — Menügruppe, Ziel: `/`

  - [Nachrichten](https://www.heinrich-grupe-schule.de/news/index.php?rubrik=1)

  - [Termine](https://www.heinrich-grupe-schule.de/veranstaltungen/index.php)

- **Ganztag** — Menügruppe, Ziel: `/`

  - [Verlässliche Grundschule](https://www.heinrich-grupe-schule.de/seite/708736/verlässliche-grundschule.html)

  - [Offene Ganztagsschule](https://www.heinrich-grupe-schule.de/seite/708737/offene-ganztagsschule.html)

  - [Mittagessen](https://www.heinrich-grupe-schule.de/seite/708739/mittagessen.html)

- [Förderverein](https://www.heinrich-grupe-schule.de/seite/708749/förderverein.html) — Engagement

- **Für Eltern** — Menügruppe, Ziel: `/`

  - [Schoolfox](https://www.heinrich-grupe-schule.de/seite/708744/schoolfox.html)

  - [Unterrichtszeiten](https://www.heinrich-grupe-schule.de/seite/708746/unterrichtszeiten.html)

  - [Konzepte](https://www.heinrich-grupe-schule.de/seite/708747/konzepte.html)

  - [Krankheit eines Kindes](https://www.heinrich-grupe-schule.de/seite/847750/krankheit-eines-kindes.html)

  - [Zeugnisse](https://www.heinrich-grupe-schule.de/seite/708755/zeugnisse.html)

  - [Beratungsangebote](https://www.heinrich-grupe-schule.de/seite/708756/beratungsangebote.html)

  - [Angebote außerschulischer Kooperationspartner](https://www.heinrich-grupe-schule.de/seite/748797/angebote-außerschulischer-kooperationspartner.html)

  - [Schulanmeldung](https://www.heinrich-grupe-schule.de/seite/765298/schulanmeldung.html)

  - [Mobbing-Interventionsteam](https://www.heinrich-grupe-schule.de/seite/858078/mobbing-interventionsteam.html)

- **Für Kinder** — Menügruppe, Ziel: `/`

  - [Surftipps](https://www.heinrich-grupe-schule.de/seite/708759/surftipps.html)

  - [Schülerbeiträge](https://www.heinrich-grupe-schule.de/seite/713223/schülerbeiträge.html)

  - [Fotoalben](https://www.heinrich-grupe-schule.de/fotos/2/214451/sonstige/projektwoche-2025/)

- [Kooperationspartner](https://www.heinrich-grupe-schule.de/seite/765366/kooperationspartner.html) — Netzwerk

- [Schulobst](https://www.heinrich-grupe-schule.de/seite/806610/schulobst.html) — Gesundheit/Ernährung

- [Projektwoche](https://www.heinrich-grupe-schule.de/seite/766080/projektwoche.html) — Projektbericht

  - [Bilder der Projektwoche](https://www.heinrich-grupe-schule.de/fotos/2/214451/sonstige/projektwoche-2025/)

- **Formulare** — Menügruppe, Ziel: `/`

  - [Formulare](https://www.heinrich-grupe-schule.de/seite/708761/formulare.html)

- [Kontakt](https://www.heinrich-grupe-schule.de/formulare/index.php?form_id=10032229) — Kontaktformular

## Ergänzende Seiten und technische Ansichten

- [Nachrichtenarchiv](https://www.heinrich-grupe-schule.de/news/index.php?archiv=1&rubrik=1) — nach Jahr und Monat gegliedert; 10 Beiträge 2026, 21 Beiträge 2025, zwei Beiträge 2024. Sämtliche Detailziele stehen im Nachrichtenkatalog.
- [Weitere Meldungen](https://www.heinrich-grupe-schule.de/news/1) — zusätzlicher Einstieg in Nachrichten.
- [Projektwoche: Albenübersicht](https://www.heinrich-grupe-schule.de/fotos/2/album/projektwoche/) — Rücksprung aus dem Album; beim Abruf ohne gelistete Alben.
- [Mobile Ansicht](https://www.heinrich-grupe-schule.de/m/) — separate mobile CMS-Routen mit Suchfeld und Schnellzugängen. Keine eigene redaktionelle Inhaltsfamilie.
- [Druckansicht Startseite](https://www.heinrich-grupe-schule.de/?modus=drucken) — vereinfachte Ausgabe.
- [Link zur Seite versenden](https://www.heinrich-grupe-schule.de/contact/index/link/?referrer=https://www.heinrich-grupe-schule.de/) — vorhandene Hilfsfunktion.

## Footer, Kontaktbereich und Hilfsnavigation

| Element | Ziel / Bedeutung |
| --- | --- |
| Startseite | [index.php](https://www.heinrich-grupe-schule.de/index.php) |
| Datenschutz | [Datenschutzerklärung](https://www.heinrich-grupe-schule.de/datenschutz/index.php) |
| Impressum | [Impressum](https://www.heinrich-grupe-schule.de/impressum/index.php) |
| Förderhinweis | [Niedersachsen vernetzt](http://www.Niedersachsen-vernetzt.de) |
| Telefon | `tel:05517899469` |
| E-Mail | schulleitung@hgs-rosdorf.de; im sichtbaren Text verschleiert |
| Karte | Google-Maps-Einbettung mit vorgeschaltetem Hinweis und Aktivierung |
| Zurück nach oben | Seiteninterner Anker |
| Sprunglinks | Navigation überspringen; Zusatzfunktionen überspringen |
| Mobile Zusatznavigation | Startseite, Datenschutz, Impressum, klassische Ansicht; Suche |

## Empfohlene neue Informationsarchitektur

Dies ist eine **Empfehlung**, keine Beschreibung des Bestands. Seiten dürfen zusammengeführt werden, solange alle fachlichen Inhalte und Dokumentziele erhalten bleiben.

1. **Unsere Schule:** Profil/Leitbild, Team, Klassen, Gremien, Schulentwicklung/Umbau.
2. **Schulalltag & Ganztag:** Tagesablauf, Verlässlichkeit, Ganztag/AGs, Mensa/Speisepläne, Schulobst.
3. **Für Eltern:** Anmeldung, Krankmeldung, SchoolFox, Zeugnisse, Beratung/Kinderschutz, Schul-ABC.
4. **Schulleben:** Nachrichten/Archiv, Termine, Projekte, Schülerbeiträge, Fotoalben.
5. **Mitmachen:** Förderverein und Kooperationen.
6. **Service:** zentraler Downloadbereich und Kontakt; Impressum/Datenschutz im Footer.

Auf der Startseite sind schnelle Wege zu **Krankmeldung, Tagesablauf, Ganztag, Speiseplan, Anmeldung, Downloads und Kontakt** sinnvoll. Ein Umbauhinweis sollte nur mit datiertem, redaktionell bestätigtem Stand prominent erscheinen.

# INHALTS- UND FUNKTIONSKATALOG

## Startseite

**Quelle:** [https://www.heinrich-grupe-schule.de/](https://www.heinrich-grupe-schule.de/)

**Funktion:** Orientierung, Schulidentität, aktueller Einstieg und Kontakt. Die Begrüßung stellt die Schule als unterstützenden Entwicklungsort dar. Fünf runde Motivbilder zeigen Blumen-/Wachstumsmotive, Graffiti, Mosaik und Turnhalle. Ein Banner und das Schullogo bilden die Kopfgestaltung.

„News“ zeigt fünf Meldungsteaser, „Aktuelle Meldungen“ wiederholt drei davon. Alle Meldungen tragen Veröffentlichungsdatum, Titel, Kurztext und Detaillink; drei Teaserbilder liegen auch in der ZIP. Kontaktblock, aktivierbare Karte, Druckansicht und Linkversand ergänzen die Seite.

**Relaunch:** Ein gemeinsames Nachrichtenmodul, klare Eltern-Schnellzugänge und sichtbare Stammdaten. Das Blumenbild kann als gestalterisches Leitmotiv dienen, ohne die alte Startseitenkomposition zu kopieren.

## Unsere Schule

**Quelle:** [https://www.heinrich-grupe-schule.de/seite/708809/unsere-schule.html](https://www.heinrich-grupe-schule.de/seite/708809/unsere-schule.html)

**Kategorie:** Schulprofil.

Das Schulgebäude entstand 1922; seit 1965 wird es als Grundschule genutzt. Die Benennung nach Prof. Dr. Heinrich Grupe erfolgte 1968. Sein naturkundlich-anschaulicher Unterricht bildet einen historischen Bezug. Die zentrale Lage bietet Lernorte wie Freibad, Rase, Kiesseen, Wartberg, Mühle und Bücherei sowie Busverbindungen nach Göttingen. Seit 1973 erfolgten Erweiterungen. Beschrieben werden Innenhof/Bühne, Schulhof mit Spiel- und Sportmöglichkeiten, Spieleausleihe, Alarm-Sammelstellen, Lauf-/Sprunganlage, Obstbäume und ein kleines Gartenbeet.

**Funktionen / Relaunch-Hinweise:** Namensgeberportrait; kein gesondertes Schulgartenalbum nachgewiesen.

## Leitbild

**Quelle:** [https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Leitbild.pdf](https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Leitbild.pdf)

**Kategorie:** Pädagogisches Profil / Direkt-PDF.

Vielfalt und individuelle Lernwege stehen im Zentrum. Genannt werden differenzierte Methoden, Lernwerkstatt, altersübergreifende Projekte, Kreativ-/Sport-/Musikangebote, Förder- und Forderunterricht und Kooperationen mit Kitas und weiterführenden Schulen. Verantwortung wird durch Helferkinder, Spielausleihe und Streitschlichtung eingeübt. Teamarbeit, feste Bezugspersonen, Regeln und Rituale sollen Sicherheit schaffen. Gesprächskreise, Klassenrat und Schülerrat stärken Beteiligung. Lernentwicklungsgespräche, Elternabende und Feste verbinden Schule und Familien.

**Funktionen / Relaunch-Hinweise:** Zweiseitiges PDF; im Relaunch zusätzlich als zugänglicher Webtext zusammenfassen. Angebotsdetails auf Aktualität prüfen.

## Schul-ABC

**Quelle:** [https://www.heinrich-grupe-schule.de/seite/765392/schul-abc.html](https://www.heinrich-grupe-schule.de/seite/765392/schul-abc.html)

**Kategorie:** Elterninformation / PDF-Einstieg.

Die Seite enthält ausschließlich den Download „Wichtige Infos 2025_26“. Das achtseitige Dokument behandelt Ansprechpartner, Tagesstruktur, Beratung, Bildung und Teilhabe, Elternmitwirkung/Gremien, Ferienbetreuung, Alarmübungen, Fundsachen, Ganztag, Ernährung/Wasserspender, Geräteverwendung, Hausaufgaben, Infektionsschutz, Zeugnisse, Schulweg/Parken, Religion, Sport/Schwimmen, Schäden, SchoolFox und Schulregeln. Hausaufgaben sind als selbstständige Übung für etwa 30 Minuten beschrieben. Ferienangebote werden über SchoolFox weitergegeben.

**Funktionen / Relaunch-Hinweise:** PDF statt HTML-ABC. Zeit-, Preis-, Raum- und Kontaktangaben sind teilweise älter als andere Quellen; siehe Konfliktregister.

## Schulsozialarbeiterin

**Quelle:** [https://www.heinrich-grupe-schule.de/seite/708729/schulsozialarbeiterin.html](https://www.heinrich-grupe-schule.de/seite/708729/schulsozialarbeiterin.html)

**Kategorie:** Beratung / Kinder- und Familienunterstützung.

Iris Laskowski ist Diplom-Sozialpädagogin und seit 01.08.2019 an der HGS tätig. Sie beschreibt Erfahrung in Familienberatung und Prävention. Angebote für Kinder: Sozialtraining, Präventionsprojekte und Hilfe bei Streit oder Problemen. Angebote für Eltern: Beratung/Begleitung zu schulischen, familiären, erzieherischen und finanziellen Anliegen. Termine nach Vereinbarung; Gespräche vertraulich. Kontakt: 0151 70871990 und iris.laskowski@schule-nds.de.

**Funktionen / Relaunch-Hinweise:** Kontaktinformationen als strukturierte Karte; Querverbindung zu Beratung und Mobbingteam.

## Schulvorstand

**Quelle:** [https://www.heinrich-grupe-schule.de/seite/708731/schulvorstand.html](https://www.heinrich-grupe-schule.de/seite/708731/schulvorstand.html)

**Kategorie:** Gremium / Schulqualität.

Die Seite erklärt die Funktion des Schulvorstands und verweist auf das niedersächsische Schulgesetz. Beschrieben sind eine gleichgewichtige Beteiligung von Lehrkräften und Eltern sowie Entscheidungen zu Budget, Kooperationen, Stundentafel, Projektwochen, Sponsoring und schulischer Qualitätsprüfung. Der Text trägt das Datum 10.09.2019.

**Funktionen / Relaunch-Hinweise:** Keine aktuelle Mitgliederliste auf dieser HTML-Seite; historische Namen stehen im Organigramm 2025/26. Rechtsbezüge als Bestandsinhalt, nicht als neu geprüfte Rechtsauskunft behandeln.

## Schulelternrat

**Quelle:** [https://www.heinrich-grupe-schule.de/seite/708732/schulelternrat.html](https://www.heinrich-grupe-schule.de/seite/708732/schulelternrat.html)

**Kategorie:** Elternmitwirkung.

Der Elternrat wird als Interessenvertretung von Familien und Bindeglied zur Schule beschrieben. Er unterstützt Zusammenarbeit und Mitwirkung bei schulischen Entscheidungen.

**Funktionen / Relaunch-Hinweise:** HTML-Titel „Elternrat“; aktuelle Kontaktdaten fehlen. Organigramm 2025/26 nennt Reutter als Vorsitz und Hauk als Stellvertretung; Aktualität offen.

## Konferenzen

**Quelle:** [https://www.heinrich-grupe-schule.de/seite/708733/konferenzen.html](https://www.heinrich-grupe-schule.de/seite/708733/konferenzen.html)

**Kategorie:** Organisation / Dokumente.

Die Seite „Konferenzen und Organigramm“ verlinkt das Organigramm 2025/26 und den Konferenzkalender 2026/27. Das Organigramm ordnet Schulleitung, Schulsozialarbeit, Beratungslehrkraft, Klassen-/Fachteams, Gremien, Betreuung, Mensa und Förderverein zu. Saskia Kuster ist dort als Vertretungsplanerin genannt. Der Kalender enthält Dienstbesprechungen, Fach-, Gesamt- und Zeugniskonferenzen, Steuergruppe, Schulvorstand, Schulausschuss und Lernentwicklungsgespräche.

**Funktionen / Relaunch-Hinweise:** Zwei PDFs unterschiedlicher Schuljahre. Der Kalender nennt unter anderem 03.02.2027 als schulfreien Schilf-Tag; Kalenderdaten vor Übernahme prüfen, da Tabellenextraktion die Spaltenstruktur verliert.

## Umbau

**Quelle:** [https://www.heinrich-grupe-schule.de/seite/708806/umbau.html](https://www.heinrich-grupe-schule.de/seite/708806/umbau.html)

**Kategorie:** Schulentwicklung / aktuelle Hinweise.

Die Inhaltsseite meldet den begonnenen Abriss und zeigt ein Baustellenfoto. Der Elternbrief vom 04.03.2025 erklärt den Ersatz des ältesten Gebäudeteils und spätere Sanierungen für mehr Platz und Inklusion. Verwaltung, Lernwerkstatt und Schulkindergarten sind zuerst betroffen. Lehrerzimmer/Sekretariat werden in die Aula verlegt; Hof und Zugänge ändern sich. Genannt werden ungefähr zwei Jahre Neubau und anschließend zwei Jahre Sanierung sowie ein Aufzug. Unterricht, Lernorte und Pausen sollen angepasst werden.

**Funktionen / Relaunch-Hinweise:** Baustellenfoto plus gesonderter Nachrichtenbeitrag/PDF. Historischen Ablauf nicht als aktuellen Baufortschritt darstellen.

## Verlässliche Grundschule

**Quelle:** [https://www.heinrich-grupe-schule.de/seite/708736/verlässliche-grundschule.html](https://www.heinrich-grupe-schule.de/seite/708736/verlässliche-grundschule.html)

**Kategorie:** Vormittagsbetreuung.

Alle Klassen haben laut HTML-Seite nach der fünften Stunde Unterrichtsschluss. Für Jahrgang 1 und 2 werden eine beziehungsweise zwei Betreuungsstunden am Vormittag durch pädagogische Mitarbeitende beschrieben.

**Funktionen / Relaunch-Hinweise:** Der Betreuungstext stimmt nicht vollständig mit der detaillierten Stundenkontingentbeschreibung im älteren Vertretungskonzept überein; fachlich abgleichen.

## Offene Ganztagsschule

**Quelle:** [https://www.heinrich-grupe-schule.de/seite/708737/offene-ganztagsschule.html](https://www.heinrich-grupe-schule.de/seite/708737/offene-ganztagsschule.html)

**Kategorie:** Betreuung / AG-Angebote / Anmeldung.

Das HTML beschreibt Ganztag Mo–Do von 12:45 bis 14:30 beziehungsweise 15:30 Uhr; für Erstklässler zusätzlich freitags. Anmeldung für einen oder vier Tage, laut Webtext für ein Jahr. Qualifizierte Angebote sind kostenfrei; Materialkosten einzelner AGs können anfallen. Mittagessen in vier Schichten, angeleitete Übungszeit, feste Jahrgangsbezugskräfte und Spielangebote in „Heimat“-Räumen ergänzen altersgemischte AGs für Klasse 2–4 ab 14:30. Lehrkräfte, pädagogische Mitarbeitende, Sportvereine und Freiwilligendienstkräfte tragen das Angebot.

**Funktionen / Relaunch-Hinweise:** Anmelde-PDF 2026/27 ergänzt Frühbetreuung 07:30–07:55, Abholzeiten 14:30/15:30, Essen 4,80 Euro und SEPA. PDF nennt Halbjahresbindung/Verlängerung und unterschiedliche Kündigungshinweise; nicht ungeprüft als einheitliche Regel veröffentlichen.

## Mittagessen

**Quelle:** [https://www.heinrich-grupe-schule.de/seite/708739/mittagessen.html](https://www.heinrich-grupe-schule.de/seite/708739/mittagessen.html)

**Kategorie:** Mensa / Speisepläne.

Für Ganztagskinder wird Mittagessen in der Schulmensa angeboten. Die Seite nennt Vissers Fritze aus Moringen als Lieferant. Verlinkt sind neun unterschiedliche Wochen-PDFs von 05.–09.10. bis 21.–22.12.; ein zusätzlicher Link „07.12–11.12“ führt fälschlich zur Datei 30.11–04.12.

**Funktionen / Relaunch-Hinweise:** Wöchentliche PDF-Liste; Jahr fehlt in Linktiteln. Essenspreis nur in Formularen/ABC: 4,80 Euro im Formular 2026/27, 4,60 Euro im älteren ABC. Formular nennt Vissers Fritze/Hardegsen; Lieferantenort ebenfalls vereinheitlichen.

## Förderverein

**Quelle:** [https://www.heinrich-grupe-schule.de/seite/708749/förderverein.html](https://www.heinrich-grupe-schule.de/seite/708749/förderverein.html)

**Kategorie:** Engagement / Mitgliedschaft.

Der ehrenamtliche Förderverein unterstützt pädagogische Arbeit durch Beteiligung, Geld und Zusammenarbeit zwischen Familien und Schule. Vorstand laut Seite: Daniel Dielenschneider (Vorsitz), Andreas Müller (Stellvertretung), Carsten Wiegmann (Kasse), Frank Leifheit (Schriftführung). Kontakt: foerderverein-hgs-rosdorf@web.de. Beitrittsformular und Satzung sind verlinkt. Das Formular nennt sieben Euro jährlichen Mindestbeitrag, freiwillig höhere Beiträge und SEPA-Einzug zum 01.10.

**Funktionen / Relaunch-Hinweise:** Vereinsbanner; editierbares PDF laut Seitenbeschreibung. Technische Ausfüllbarkeit nicht separat getestet. Satzung von Dezember 2017; dort anderer Zahlungstermin als im Beitrittsformular.

## Schoolfox

**Quelle:** [https://www.heinrich-grupe-schule.de/seite/708744/schoolfox.html](https://www.heinrich-grupe-schule.de/seite/708744/schoolfox.html)

**Kategorie:** Elternkommunikation / Einführung.

SchoolFox dient dem Austausch zwischen Schule, Lehrkräften und Eltern. Sechs Willkommensbriefe erklären den Einstieg auf Deutsch, Arabisch, Englisch, Russisch, Serbisch und Türkisch; zusätzlich existiert ein 44-seitiges Elternhandbuch. Anmeldecodes werden von der Schule ausgegeben. Nachrichten, Empfangsbestätigungen und Krankmeldungen sind zentrale Anwendungsfälle.

**Funktionen / Relaunch-Hinweise:** SchoolFox-Grafik; externe Kommunikationsplattform, kein nachgewiesener eingebetteter Login. PDF-Handbuch enthält Screenshots, die keine getrennten Bilddateien sind.

## Unterrichtszeiten

**Quelle:** [https://www.heinrich-grupe-schule.de/seite/708746/unterrichtszeiten.html](https://www.heinrich-grupe-schule.de/seite/708746/unterrichtszeiten.html)

**Kategorie:** Tagesablauf.

Die HTML-Seite besteht aus einer Tagesstruktur-Grafik. Zeiten sind als Bild und nicht als durchsuchbarer Webtext hinterlegt. Für eine ergänzende Transkription liefert das Schul-ABC 2025/26 eine ältere Tagesstruktur; diese ist im folgenden Zeitregister getrennt dokumentiert.

**Funktionen / Relaunch-Hinweise:** Originalgrafik im Medienregister. Tagesablauf beim Relaunch als HTML-Tabelle aufbauen; aktuellen Stand der Grafik redaktionell bestätigen.

## Konzepte

**Quelle:** [https://www.heinrich-grupe-schule.de/seite/708747/konzepte.html](https://www.heinrich-grupe-schule.de/seite/708747/konzepte.html)

**Kategorie:** Pädagogik / Regeln / Qualität.

Das Beschwerdekonzept vom 29.11.2015 beschreibt respektvolle Zusammenarbeit und eine gestufte Klärung: zuerst die unmittelbar betroffene Person, dann gegebenenfalls die nächste Ebene. Vertrauenspersonen, Elternvertretung, Schulleitung oder Beratungslehrkraft können Gespräche begleiten; Vereinbarungen können protokolliert werden. Ziel sind tragfähige Lösungen. Ergänzend sind Erziehungs-/Schutzkonzept und Vertretungskonzept verlinkt.

**Funktionen / Relaunch-Hinweise:** Schutzkonzept: Kinderrechte, gewaltfreie Konfliktlösung, Stufen A–D, Verhaltenskodex, Risikoanalyse, Fortbildungen, jahrgangsbezogene Prävention, Beschwerde-/Interventionswege. Vertretungskonzept April 2024: Unterrichtskontinuität, Teamvertretung, gestufte Personalmaßnahmen, Materialversorgung und Kommunikation. Es ist kein öffentlich zugänglicher Live-Vertretungsplan belegt.

## Krankheit eines Kindes

**Quelle:** [https://www.heinrich-grupe-schule.de/seite/847750/krankheit-eines-kindes.html](https://www.heinrich-grupe-schule.de/seite/847750/krankheit-eines-kindes.html)

**Kategorie:** Krankmeldung / Anwesenheit.

Bei Krankheit sollen Eltern die Schule am selben Tag vor Unterrichtsbeginn über SchoolFox informieren. Für mehr als drei Krankheitstage ist laut Seite normalerweise eine schriftliche Entschuldigung erforderlich; ein Attest kann in besonderen Fällen verlangt werden. Ansteckende oder meldepflichtige Erkrankungen sollen unverzüglich mitgeteilt werden. Rückkehr erst bei ausreichender Gesundheit/Belastbarkeit; schriftliche Entschuldigung über die Fehlzeit mitgeben.

**Funktionen / Relaunch-Hinweise:** Handlungsinformation, kein Web-Krankmeldeformular. Im Relaunch mit SchoolFox-Hilfe und Kontaktdaten verbinden; Formulierungen als Schulvorgabe kennzeichnen.

## Zeugnisse

**Quelle:** [https://www.heinrich-grupe-schule.de/seite/708755/zeugnisse.html](https://www.heinrich-grupe-schule.de/seite/708755/zeugnisse.html)

**Kategorie:** Leistungsrückmeldung / Schulentwicklung.

Die Schule erläutert kompetenzorientierte Rückmeldungen als differenzierte Darstellung von Fähigkeiten, Fortschritten und Förderbedarf. Die HTML-Seite beschreibt eine für Jahrgang 3 ab 2026/27 geplante Umstellung. Der Elternbrief vom 28.04.2026 erweitert die Planung auf Jahrgang 4 ab 2027/28 und kündigt die Entscheidung der Gesamtkonferenz am 01.06.2026 an. Verlinkt sind Elternbrief, Präsentation und Musterzeugnisse für Klasse 1/2 sowie 3/4.

**Funktionen / Relaunch-Hinweise:** Der Beschluss ist in den abgerufenen Quellen nicht nachgewiesen. Nicht als abgeschlossen darstellen. Präsentation: Originaladresse erhalten, wegen rund 27,9 MB nicht inhaltlich auslesbar. Quellenlinks zu Kultusministerium, Deutschem Schulportal, Learn Learning with Caroline und ARD Mediathek.

## Beratungsangebote

**Quelle:** [https://www.heinrich-grupe-schule.de/seite/708756/beratungsangebote.html](https://www.heinrich-grupe-schule.de/seite/708756/beratungsangebote.html)

**Kategorie:** Vertrauliche Beratung.

Kerstin Groß bietet freiwillige, unabhängige und vertrauliche Beratung für Kinder, Eltern, Lehrkräfte und Mitarbeitende. Themen sind Ängste, Übergänge, Krisen/Trennung/Verlust, Konflikte, Schulwechsel, Medienkonsum und Erziehungsfragen. Regelmäßige Supervision und Fortbildung werden genannt. Sprechzeiten laut Seite: Mo 11:25–12:05, Mi ab 13:00, Do 09:40–10:20; Raum gegenüber dem Wasserspender.

**Funktionen / Relaunch-Hinweise:** Portrait. Kontakt auf dieser Seite: 0551-899469 und downtrend@web.de; Mobbingseite nennt 0551-7899469 und kerstin.gross@schule-nds.de. Schutzkonzept nennt 0170-8074767. Keine Variante stillschweigend korrigieren oder als bestätigt auswählen.

## Angebote außerschulischer Kooperationspartner

**Quelle:** [https://www.heinrich-grupe-schule.de/seite/748797/angebote-außerschulischer-kooperationspartner.html](https://www.heinrich-grupe-schule.de/seite/748797/angebote-außerschulischer-kooperationspartner.html)

**Kategorie:** Externe Angebote.

Der Menüpunkt und seine Zieladresse sind im Export vorhanden. Die Seite konnte nicht inhaltlich abgerufen werden; die mobile Variante meldet 404. Angebote, Dateien und Bilder dieser Seite sind daher unbekannt.

**Funktionen / Relaunch-Hinweise:** Als defekten/zu klärenden Navigationspunkt erfassen. Keine konkreten Angebote aus dem Seitentitel erfinden.

## Schulanmeldung

**Quelle:** [https://www.heinrich-grupe-schule.de/seite/765298/schulanmeldung.html](https://www.heinrich-grupe-schule.de/seite/765298/schulanmeldung.html)

**Kategorie:** Aufnahme / Unterlagen.

Die HTML-Seite ist ein Dokumentenpaket: Anmeldebogen, Merkblätter/Einverständnisse, Infektionsschutzbelehrung, Erziehungs-/Schutzkonzept, Beschwerdekonzept, Waffenverbot und zwei Datenschutzdokumente. Der dreiseitige Aufnahmebogen erfasst Kind, bisherige Betreuung/Schule, Sorgeberechtigte, Notfallkontakte, Sorgeberechtigung und Einwilligungen. Die Merkblätter bündeln Kenntnisnahmen und Einverständnisse, unter anderem SchoolFox, Zahnvorsorge und klasseninterne Fotos.

**Funktionen / Relaunch-Hinweise:** PDF-Downloadprozess; keine Online-Schulanmeldung, keine aktuelle Anmeldefrist und kein Aufnahmeportal nachgewiesen. Beim Relaunch als verständliche Unterlagen-Checkliste aufbereiten.

## Mobbing-Interventionsteam

**Quelle:** [https://www.heinrich-grupe-schule.de/seite/858078/mobbing-interventionsteam.html](https://www.heinrich-grupe-schule.de/seite/858078/mobbing-interventionsteam.html)

**Kategorie:** Prävention / Schutz / Intervention.

Die Seite grenzt zeitlich begrenzte Konflikte zwischen ähnlich starken Beteiligten von wiederholtem, gezieltem Mobbing mit Machtungleichgewicht ab. Prävention umfasst soziale Projekte, Aufmerksamkeit, Gespräche, Regeln und erreichbare Ansprechpersonen. Das Team besteht aus Iris Laskowski, Kerstin Groß und Viola Becker und arbeitet mit Leitung/Klassenlehrkräften. Das Prozess-PDF beschreibt Aufnahme, Fallklärung, Teambesprechungen und Intervention, unter anderem No-Blame-Ansatz/Klassentraining.

**Funktionen / Relaunch-Hinweise:** Kontakt: Laskowski 0151 70871990 / iris.laskowski@schule-nds.de; Groß 0551 7899469 / kerstin.gross@schule-nds.de; Becker 0551 7899469 / viola.becker@schule-nds.de. Prozessgrafik nicht ohne fachliche Prüfung vereinfacht nachzeichnen.

## Surftipps

**Quelle:** [https://www.heinrich-grupe-schule.de/seite/708759/surftipps.html](https://www.heinrich-grupe-schule.de/seite/708759/surftipps.html)

**Kategorie:** Kinder / geplante Linkempfehlungen.

Die Seite enthält lediglich einen Aufbauhinweis. Konkrete Links oder Angebote sind nicht vorhanden.

**Funktionen / Relaunch-Hinweise:** Im Relaunch erst veröffentlichen, wenn verifizierte Inhalte vorliegen; keinen dauerhaften leeren Menüpunkt übernehmen.

## Schülerbeiträge

**Quelle:** [https://www.heinrich-grupe-schule.de/seite/713223/schülerbeiträge.html](https://www.heinrich-grupe-schule.de/seite/713223/schülerbeiträge.html)

**Kategorie:** Kinderperspektive / Berichte.

Ein Kinderbericht beschreibt den Bibliotheksbesuch der damaligen Klassen 1a/1b am 17.03.2025 mit Vorlesen und Basteln. Ein zweiter stellt die mittwochs von Steffi Christoph geleitete Slime-AG und ihre Experimente vor. Beide Inhalte sind auch als Nachrichten veröffentlicht.

**Funktionen / Relaunch-Hinweise:** Fünf Fotos/Grafiken sind zugeordnet. Berichte als redaktionell betreute Kinderstimmen erhalten; Dubletten durch einheitliche Beitragsdaten vermeiden.

## Fotoalben

**Quelle:** [https://www.heinrich-grupe-schule.de/fotos/2/214451/sonstige/projektwoche-2025/](https://www.heinrich-grupe-schule.de/fotos/2/214451/sonstige/projektwoche-2025/)

**Kategorie:** Fotogalerie.

Der Link führt unmittelbar zum Album „Projektwoche 2025“, datiert 16.05.2025. Die Seite beschreibt Projektergebnisse und zeigt eine Reihe von Galeriepositionen ohne auslesbare Einzelbildadressen. Der Link unter „Projektwoche“ führt zum selben Album. Die verlinkte Rubrikübersicht meldet hingegen keine Alben.

**Funktionen / Relaunch-Hinweise:** Galerie und Übersicht sind widersprüchlich. Albumadresse erhalten; Einzelbilder müssen vor vollständiger Migration separat aus dem CMS oder einem vollständigen Export ergänzt werden.

## Kooperationspartner

**Quelle:** [https://www.heinrich-grupe-schule.de/seite/765366/kooperationspartner.html](https://www.heinrich-grupe-schule.de/seite/765366/kooperationspartner.html)

**Kategorie:** Netzwerk / Förderung / Übergänge.

Rosdorfer Partner: Bündnis für Familie/Familiencafé Laterna Magica, fünf Kitas, angegliederter Hort, evangelische Kirche/Südindien-Partnerschaft und MTV. Göttinger Partner: Begabungsförderung Göttingen II, Leineberg-/Bonifatius-/Lohbergschule, Kitas und Felix-Klein-Gymnasium; Umweltbildung/Transfer 21/Reinhausen; ASC für Freiwilligendienst und Fit für Pisa; AWO-Familienberatung. Übergangskooperationen bestehen laut Seite mit FKG und Carl-Friedrich-Gauß-Schule Groß Schneen. Vier Logos betreffen Begabungsförderung, Klima macht Schule, Wälderwärts und RUZ Göttingen.

**Funktionen / Relaunch-Hinweise:** Downloads: KOV-Konzept 2025 und Landkreis-Information zur Schulbuchförderung. Alte Programmbezeichnungen auf Aktualität prüfen.

## Schulobst

**Quelle:** [https://www.heinrich-grupe-schule.de/seite/806610/schulobst.html](https://www.heinrich-grupe-schule.de/seite/806610/schulobst.html)

**Kategorie:** Ernährung / Mitmachen.

Seit 2024/25 beteiligt sich die Schule am EU-Schulobstprogramm. Laut Seite liefert Lotta Karotta in 21 von 38 Schulwochen zweimal wöchentlich Obst/Gemüse. Daraus werden täglich Snacks vorbereitet. Eltern/Großeltern können morgens 07:30–08:30 helfen.

**Funktionen / Relaunch-Hinweise:** Programmlogo und Lieferkalender 2026/27. Lieferung, Helferzeiten und Förderprogramm als eigenständige strukturierte Informationen führen.

## Projektwoche

**Quelle:** [https://www.heinrich-grupe-schule.de/seite/766080/projektwoche.html](https://www.heinrich-grupe-schule.de/seite/766080/projektwoche.html)

**Kategorie:** Projektprofil / Rückblick / Projektblätter.

Der Bericht vom 25.04.2025 beschreibt die Projektwoche unter dem Schulmotto und das abschließende Schulfest. Genannt werden 25 Projekte; beteiligt sind Kollegium, Sozialarbeit, externe Fachleute und Eltern. Beispiele: Tanz, Clown, Natur, Insekten/Klima, Graffiti an Toiletten und Schwimmen/Seepferdchen. Die Abschlussveranstaltung zeigt Theater/Musical, Trommeln, Cheerleading, Tanz und Clown. Drei Bilder begleiten den Bericht.

**Funktionen / Relaunch-Hinweise:** 26 verschiedene Projekt-PDFs sind verlinkt, obwohl der Bericht 25 Projekte nennt. Originaldateien im Dokumentregister. Terminabweichung: Rückblick 22.–24.04. mit Fest 25.04.; Ankündigung 23.–25.04.2025.

## Formulare

**Quelle:** [https://www.heinrich-grupe-schule.de/seite/708761/formulare.html](https://www.heinrich-grupe-schule.de/seite/708761/formulare.html)

**Kategorie:** Downloads / Regelungen.

Die Seite listet „Satzung der Schule“, „Information zu Kopfläusen“ und „Infektionsschutzgesetz“. Der erste Link führt tatsächlich zur Fördervereinssatzung, nicht zu einer eigenen Schulsatzung. Das Infektionsschutzblatt ist zugleich Teil der Schulanmeldung.

**Funktionen / Relaunch-Hinweise:** Irreführenden Dateititel korrigieren. Zentraler Downloadbereich muss zusätzlich Ganztag, Anmeldung, SchoolFox, Zeugnisse und Konzepte einschließen.

## Kontakt

**Quelle:** [https://www.heinrich-grupe-schule.de/formulare/index.php?form_id=10032229](https://www.heinrich-grupe-schule.de/formulare/index.php?form_id=10032229)

**Kategorie:** Kontakt / Formular / Lage.

Die Seite nennt Esther Jacobsen, Anschrift, Telefon und Schulleitungs-E-Mail. Das Formular enthält Name (Pflicht), E-Mail (ohne sichtbare Pflichtmarkierung), Telefon mit Vorwahl/Rufnummer (Pflicht), Nachricht (Pflicht), Datenschutzbestätigung und Sicherheitsabfrage. Ein Honeypot-Feld dient der Spamabwehr. Ein Hinweis beschreibt die elektronische Verarbeitung beim Absenden. Die Karte ist erst nach Aktivierung sichtbar.

**Funktionen / Relaunch-Hinweise:** Keine Nachricht versendet; Zustellung und Servervalidierung nicht getestet. Im Relaunch zugängliche Labels, klare Fehler-/Erfolgsmeldungen und einen tatsächlich angeschlossenen Versanddienst vorsehen.

## Kollegium

**Quelle:** [Kollegium](https://www.heinrich-grupe-schule.de/seite/708728/kollegium.html).

| Bereich | Personen laut HTML-Seite |
| --- | --- |
| Leitung | Esther Jacobsen; Julia Aramayo |
| Lehrkräfte | Viola Becker; Judith Bode; Maren Dege; Marie Disep; Kerstin Ebener; Barbara Erk; Kerstin Groß; Annika Grünewald (Elternzeit); Amrei Gutenberg; Kerstin Hinz; Saskia Kuster; Catarina Lourenco da Costa Barlas (Elternzeit); Jennifer Golze; Evelyn Rettberg; Diana Schlicker-Maerz; Anja Schmidt; Stephanie Stellmacher; Antonia Voss; Enrico Weiss |
| Lehramtsanwärterin | Luisa Schulte |
| Pädagogische Mitarbeitende | Angela Trost; Wioletta Lubowski; Margo Meister; Steffi Christoph; Guido Nobbe; Mirijam Bartmann |
| Freiwilligendienst | Alexandra; Anna; Lenja; Nachnamen nicht angegeben |
| Sekretariat | Sabine Kikos |
| Hausmeister | Wolfgang Schwarz |
| Mensa | Steven Goderjahn; Hanim Onal |

Zwei Portraits zeigen die Leitung. Die Teamseite enthält kein explizites Schuljahr; das ältere Organigramm weist andere Besetzungen auf. Personen und Rollen daher vor Veröffentlichung bestätigen.

## Klassen

**Quelle:** [Klassen](https://www.heinrich-grupe-schule.de/seite/708730/klassen.html). Die Zuordnung stammt aus der aktuellen HTML-Seite; sie unterscheidet sich vom Organigramm 2025/26.

| Klasse / Gruppenname | Klassenleitung(en) laut Seite |
| --- | --- |
| SKG Zeselklasse | Frau Schmidt |
| 1a Schildkrötenklasse | Frau Disep; Frau Becker |
| 1b Eichhörnchenklasse | Frau Bode; Frau Erk |
| 1c Eulenklasse | Frau Rettberg; Frau Schlicker |
| 2a Waschbärklasse | Frau Groß; Frau Ebener |
| 2b Bienenklasse | Frau Gutenberg; Frau Hinz |
| 2c Koalaklasse | Frau Erk; Frau Kuster |
| 3a Alpakaklasse | Frau Aramayo; Frau Jacobsen |
| 3b Fuchsklasse | Frau Schlicker-Maerz; Frau Rettberg |
| 3c Regenbogenklasse | Frau Voss; Herr Weiss |
| 4a Zebraklasse | Frau Becker; Frau Disep |
| 4b Otterklasse | Frau Kuster; Frau Schmidt |
| 4c Tigerklasse | Frau Hinz; Frau Golze |
| 4d Dschungelklasse | Herr Weiss; Frau Voss |

Die Schreibweise „Zeselklasse“ ist unverändert übernommen und redaktionell zu prüfen. Es sind 13 Klassen plus Schulkindergarten aufgeführt; eine Gesamtschülerzahl wird nicht daraus abgeleitet.

## Zeitregister: getrennte Quellenstände

Die aktuelle [Ganztagsseite](https://www.heinrich-grupe-schule.de/seite/708737/offene-ganztagsschule.html) und das Anmeldeformular 2026/27 nennen **14:30/15:30 Uhr** als End-/Abholzeiten. Das Formular ergänzt **Frühbetreuung 07:30–07:55 Uhr**.

Die folgende Vormittagstabelle stammt dagegen aus **„Wichtige Infos 2025/26“**, nicht aus einer bestätigten aktuellen Transkription der Tagesstruktur-Grafik:

| Zeit | Eintrag |
| --- | --- |
| 07:55–08:25 | Mo Erzählkreis; Di–Do Lernzeit; Fr Klassenrat |
| 08:30–09:10 | Unterricht |
| 09:10–09:20 | Frühstück |
| 09:20–09:40 | Pause |
| 09:40–10:20 | Unterricht |
| 10:25–11:05 | Unterricht |
| 11:05–11:10 | Snackpause |
| 11:10–11:25 | Pause |
| 11:25–12:05 | Unterricht |
| 12:10–12:50 | Unterricht / verlässlicher Vormittag |

Das gleiche ältere PDF nennt für den Schulkindergarten **08:30–12:05 Uhr**, für Zeugnis-Ausgabetage Unterrichtsende **10:40 Uhr** und für den Ganztag noch **14:15/15:15 Uhr**. Diese Altangaben nicht mit dem Stand 2026/27 mischen.

## Termine

**Quelle:** [Termine](https://www.heinrich-grupe-schule.de/veranstaltungen/index.php).

Die Seite bietet einen Zeitraumfilter mit Von-/Bis-Datum und dem Entfernen des Datumsfilters. Beim Abruf wurden keine Veranstaltungen angezeigt. Daraus folgt weder, dass die Schule keine Termine hat, noch dass der verlinkte Konferenzkalender leer wäre. Ein Kalenderexport, Veranstaltungsdetails oder wiederkehrende Termine sind in diesem Abruf nicht belegt. Beim Relaunch einen verständlichen Leerzustand und einen Verweis zum aktuellen PDF-Kalender vorsehen; Termine erst aus bestätigten Daten importieren.

## Nachrichten, Archiv und Detailseiten

**Funktion:** Chronologische Schulberichte mit Veröffentlichung, Text, häufig einem Bild und Links zu weiteren Meldungen. Das öffentliche Archiv umfasst **33 Beiträge**. Die folgende Tabelle erfasst jeden Beitrag einzeln. Veröffentlichungsdatum und Ereignisdatum sind getrennt zu betrachten. Beiträge sind historische Inhalte; Begriffe wie „heute“, „gestern“ oder „kommend“ benötigen beim Relaunch Datumsbezug.

**Quelle:** [Nachrichtenarchiv](https://www.heinrich-grupe-schule.de/news/index.php?archiv=1&rubrik=1).

| Veröffentlichung | Beitrag / Originalseite | Inhaltliche Zusammenfassung |
| --- | --- | --- |
| So, 28. Juni 2026 | [Erfrischung an der HGS](https://www.heinrich-grupe-schule.de/news/1/1256501/nachrichten/erfrischung-an-der-hgs.html) | Feuerwehr Rosdorf kühlt Kinder in zwei heißen Pausen mit Wasser ab; zusätzlich Wassereis. |
| Di, 16. Juni 2026 | [Heinrich-Grupe-Schule gewinnt das Junior League-Finale in Hannover](https://www.heinrich-grupe-schule.de/news/1/1251211/nachrichten/heinrich-grupe-schule-gewinnt-das-junior-league-finale-in-hannover.html) | Zehn Viertklässler gewinnen am 11.06.2026 in Hannover alle sechs Spiele des Junior-League-Finales; Begleitung Christian Brand und Julia Aramayo. |
| Mi, 03. Juni 2026 | [Heinrich-Grupe-Schule beim Göttinger Sparkassen-Volkslauf erfolgreich vertreten](https://www.heinrich-grupe-schule.de/news/1/1243236/nachrichten/heinrich-grupe-schule-beim-g%C3%B6ttinger-sparkassen-volkslauf-erfolgreich-vertreten.html) | Rund 60 Kinder aus Jahrgang 1–4 laufen beim Göttinger Volkslauf zwei Kilometer; Tilda Strittmatter erreicht Platz zwei. |
| Mi, 03. Juni 2026 | [Sportfest an der HGS](https://www.heinrich-grupe-schule.de/news/1/1243223/nachrichten/sportfest-an-der-hgs.html) | Sportfest am 29.05.2026 mit Sprint, Weitsprung, Wurf und Ausdauer; Helfende und REWE Jacobs unterstützen Verpflegung/Erfrischung. |
| Di, 28. April 2026 | [Klima macht Schule](https://www.heinrich-grupe-schule.de/news/1/1228388/nachrichten/klima-macht-schule.html) | Abschluss des Klimaschutzprojekts mit der Grundschule im Drammetal; Link zu einem StadtRadio-Beitrag. |
| Fr, 20. März 2026 | [Osterfeier](https://www.heinrich-grupe-schule.de/news/1/1213140/nachrichten/osterfeier.html) | Erste Klassen präsentieren zur Osterfeier Gedicht und Theater; gemeinsamer musikalischer Abschluss. |
| Fr, 20. März 2026 | [Waldtag der 2.Klassen](https://www.heinrich-grupe-schule.de/news/1/1213138/nachrichten/waldtag-der-2.klassen.html) | Zweite Klassen erleben den ersten von vier Jahreszeiten-Waldtagen mit Wälderwärts; Tierspuren und Sinneserfahrungen; Förderung durch Umwelt-Bingo-Stiftung. |
| Mo, 09. März 2026 | [Handballtag](https://www.heinrich-grupe-schule.de/news/1/1207347/nachrichten/handballtag.html) | Handballtag am 27.02.2026 mit MTV Rosdorf, Übungsstationen, Handballpass und Spielen. |
| Mo, 16. Februar 2026 | [Handball-Grundschulliga- Turnier](https://www.heinrich-grupe-schule.de/news/1/1199013/nachrichten/handball-grundschulliga-turnier.html) | Kinderbericht über Handball-Turniersieg: Halbfinale 7:5 und Finale 11:6; Autoren Les und Ferdi, damalige 4c. |
| Mo, 16. Februar 2026 | [Faschingsfeier 2026](https://www.heinrich-grupe-schule.de/news/1/1198833/nachrichten/faschingsfeier-2026.html) | Fasching am 13.02.2026 mit Kostümen, Buffets, Polonaise, Disco und Bewegungslandschaft. |
| Di, 14. Oktober 2025 | [KUK Göttingen zu Besuch bei den 2.Klassen](https://www.heinrich-grupe-schule.de/news/1/1150694/nachrichten/kuk-g%C3%B6ttingen-zu-besuch-bei-den-2.klassen.html) | KuK Göttingen vermittelt den zweiten Klassen am 07.10.2025 Kinderrechte, Schutz und Beteiligung. |
| Fr, 10. Oktober 2025 | [Teilnahme der Heinrich Gruppe Grundschule an der Junior League Handball](https://www.heinrich-grupe-schule.de/news/1/1150696/nachrichten/teilnahme-der-heinrich-gruppe-grundschule-an-der-junior-league-handball.html) | Zehn Kinder erreichen beim ASC-Junior-League-Turnier den dritten Platz; Unterstützung durch Jan Schild und MTV. |
| Fr, 26. September 2025 | [Gesundes Frühstück](https://www.heinrich-grupe-schule.de/news/1/1128550/nachrichten/gesundes-fr%C3%BChst%C3%BCck.html) | Gesundes Frühstück vom 15.–19.09.2025, teilweise mit Patenklassen; Brotspende Obermühle, Obst/Gemüse und selbst gemachte Aufstriche. |
| Mo, 15. September 2025 | [Grundschulliga 2025: Heinrich-Grupe-Schule holt den Titel!](https://www.heinrich-grupe-schule.de/news/1/1119674/nachrichten/grundschulliga-2025-heinrich-grupe-schule-holt-den-titel.html) | Turniersieg am 10.09.2025 auf den Göttinger Soccercourts; Halbfinale 2:0, entscheidendes Finaltor kurz vor Schluss. |
| Mo, 15. September 2025 | [Mit Herz und Helm – Wir bauen Zukunft](https://www.heinrich-grupe-schule.de/news/1/1119667/nachrichten/mit-herz-und-helm--wir-bauen-zukunft.html) | Kirmesumzug unter einem Baustellen-/Zukunftsmotto; zweiter Platz und 150 Euro für den Förderverein. |
| Mo, 01. September 2025 | [Nachweis Rettungsfähigkeit](https://www.heinrich-grupe-schule.de/news/1/1113789/nachrichten/nachweis-rettungsf%C3%A4higkeit.html) | Kollegiumsmitglieder aktualisieren ihre Rettungsfähigkeit im Freibad Rosdorf zur sicheren Schwimmbegleitung. |
| Do, 03. Juli 2025 | [Abschlussfest der 4.Klassen](https://www.heinrich-grupe-schule.de/news/1/1089279/nachrichten/abschlussfest-der-4.klassen.html) | Abschiedsfest der vierten Klassen mit Liedern, Sketch, Tanz und Verabschiedung der Freiwilligendienstkräfte Finn/Niklas. |
| Do, 03. Juli 2025 | [Sportabzeichentour im Jahnstadion und wir waren dabei](https://www.heinrich-grupe-schule.de/news/1/1089264/nachrichten/sportabzeichentour-im-jahnstadion-und-wir-waren-dabei.html) | Sportabzeichentour in Göttingen mit über 1.000 Kindern; eingebetteter SAT.1-Regionalbeitrag mit Aktivierungshinweis. |
| Do, 03. Juli 2025 | [Schulchor auf dem Sommerfest der Heinrich-Grupe Schule](https://www.heinrich-grupe-schule.de/news/1/1089249/nachrichten/schulchor-auf-dem-sommerfest-der-heinrich-grupe-schule.html) | Kinderbericht über Chor-AG bei Frau Kreische und Auftritt am Familienzentrum am 29.06.2025. |
| Mo, 16. Juni 2025 | [Die HGS bei den Mini-Olympics](https://www.heinrich-grupe-schule.de/news/1/1082475/nachrichten/die-hgs-bei-den-mini-olympics.html) | 63 Kinder der damaligen 4a–4c nehmen am 02.04.2025 an Mini-Olympics am FKG teil; Sportstationen und Schülerinterviews. |
| Fr, 16. Mai 2025 | [Projektwoche](https://www.heinrich-grupe-schule.de/news/1/1071867/nachrichten/projektwoche.html) | Rückblick auf Projektwoche und Schulfest April 2025; weitgehend identischer Inhalt zur dauerhaften Projektwochenseite. |
| Fr, 16. Mai 2025 | [Klimaschutz an der HGS: Auszeichnung für „Klima macht Schule“](https://www.heinrich-grupe-schule.de/news/1/1071858/nachrichten/klimaschutz-an-der-hgs-auszeichnung-f%C3%BCr-klima-macht-schule.html) | Dritte Auszeichnung durch EAM für das seit 2022 bestehende Klimaprojekt; Prämienverleihung am 14.05.2025 und konkrete Energie-/Naturmaßnahmen. |
| Di, 22. April 2025 | [Hobby Horsing](https://www.heinrich-grupe-schule.de/news/1/1058444/nachrichten/hobby-horsing.html) | Hobby-Horsing-Club: Kinder bauen Parcours, erproben Hindernisse und bewegen sich mit Steckenpferden. |
| Di, 08. April 2025 | [Osterfeier der 1.Klässler](https://www.heinrich-grupe-schule.de/news/1/1053782/nachrichten/osterfeier-der-1.kl%C3%A4ssler.html) | Osteraufführung der Erstklässler am letzten Schultag vor den Ferien; musikalisch-theatralischer Gemeinschaftsanlass. |
| Mo, 07. April 2025 | [Ball über die Schnur Turnier](https://www.heinrich-grupe-schule.de/news/1/1053139/nachrichten/ball-%C3%BCber-die-schnur-turnier.html) | Vierte Klassen erreichen beim Turnier am 28.03.2025 mit elf Teams Platz zwei; Bericht von Alina, Lana und Minela. |
| Do, 03. April 2025 | [Ausflug der 1a und 1b zur Stadtbibliothek](https://www.heinrich-grupe-schule.de/news/1/1051514/nachrichten/ausflug-der-1a-und-1b-zur-stadtbibliothek.html) | Kinderbericht über Bibliotheksfahrt der damaligen 1a/1b am 17.03.2025, Vorlesen und Basteln; auch unter Schülerbeiträge. |
| Mi, 12. März 2025 | [Projektwoche](https://www.heinrich-grupe-schule.de/news/1/1042075/nachrichten/projektwoche.html) | Ankündigung der Projektwoche 23.–25.04.2025; verweist auf den damaligen Menüpunkt mit Stift-Symbol. |
| Do, 06. März 2025 | [Neue Leseecke](https://www.heinrich-grupe-schule.de/news/1/1039697/nachrichten/neue-leseecke.html) | Neue Leseecke am früheren Aquariumstandort; gefundene Bücher für gemeinsames Lesen, Bitte um sorgfältige Nutzung. |
| Di, 04. März 2025 | [Elternbrief Baumaßnahmen](https://www.heinrich-grupe-schule.de/news/1/1038659/nachrichten/elternbrief-bauma%C3%9Fnahmen.html) | Ausführlicher Elternbrief zum mehrstufigen Abriss, Neubau und zur Sanierung; Aula als Verwaltungsersatz, angepasste Hof-/Unterrichtsorganisation und PDF. |
| Di, 04. März 2025 | [Faschingsfeier](https://www.heinrich-grupe-schule.de/news/1/1038690/nachrichten/faschingsfeier.html) | Fasching am 28.02.2025 mit Turnhallenparcours, Polonaise und Klassenfeiern. |
| Di, 04. März 2025 | [Slime-AG stellt sich vor](https://www.heinrich-grupe-schule.de/news/1/1038612/nachrichten/slime-ag-stellt-sich-vor.html) | Vorstellung der mittwöchlichen Slime-AG bei Steffi Christoph; Experimente und Kinderbericht; auch unter Schülerbeiträge. |
| Di, 17. Dezember 2024 | [Adventszeit](https://www.heinrich-grupe-schule.de/news/1/1012969/nachrichten/adventszeit.html) | Gemeinsames Adventssingen mit jahrgangsweisen Beiträgen; Weihnachtsaufführung des zweiten Jahrgangs. |
| Di, 17. Dezember 2024 | [Ukulelen-AG übt fleißig](https://www.heinrich-grupe-schule.de/news/1/1012964/nachrichten/ukulelen-ag-%C3%BCbt-flei%C3%9Fig.html) | Ukulelen-AG erprobt und stimmt Instrumente und beginnt gemeinsames Musizieren. |

## Impressum und Datenschutz

**Quellen:** [Impressum](https://www.heinrich-grupe-schule.de/impressum/index.php), [Datenschutz](https://www.heinrich-grupe-schule.de/datenschutz/index.php).

Das Impressum nennt die Schule und Esther Jacobsen als Herausgeberkontakt. Es enthält einen Förderhinweis auf Azubi-Projekte, Haftungs-/Urheberrechtstexte und eine Beschreibung des PortUNA-CMS-Netzwerks. Inhaltliche Rechte werden dem Herausgeber, Design-/Technologierechte dem Betreiber zugeordnet. Beim Relaunch sind die Betreibertexte und Förderhinweise auf tatsächliche weitere Gültigkeit zu prüfen.

Die Datenschutzerklärung beschreibt Zugriffsprotokolle mit grundsätzlich sieben Tagen Speicherzeit, technische Dateien auf Verwaltungsportal-Domains, Cookies, Kontaktverarbeitung und aktivierungspflichtige Fremdeinbettungen. Weitere Abschnitte behandeln Social-Share-Links, Newsletter, optionales reCAPTCHA, Google Maps, lokal vom System ausgelieferte Webfonts und Betroffenenrechte. Ein **sichtbarer Newsletter-Anmeldeweg**, aktives reCAPTCHA oder Kommentarfunktion wurden dadurch allein nicht nachgewiesen. Neue technische Dienste erfordern entsprechend aktualisierte Angaben.

## Funktionsmatrix und technische Bestandsbefunde

| Funktion | Befund | Konsequenz für den Relaunch |
| --- | --- | --- |
| Nachrichten | Liste, 33 Archivdetails, Teaser auf Startseite, Weiterempfehlungen | Einheitliches Beitragsmodell und Archiv; Datum/Ereignisdatum trennen |
| Kalender | Zeitraum-von/bis-Filter; beim Abruf keine Veranstaltungen gefunden | Sinnvoller Leerzustand; PDF-Konferenzkalender zusätzlich auffindbar |
| Downloads | Schuljahr-/Themen-PDFs auf vielen Seiten verteilt | Gemeinsames Dokumentmodell mit Typ, Sprache, Jahr und Quelle |
| Galerie | Projektwochenalbum verlinkt; Einzelbild-URLs nicht auslesbar; Übersicht leer | Vollständigen Galerieexport ergänzen, keine Bilder erfinden |
| Kontaktformular | Pflichtfelder, Datenschutz, Honeypot, Zeichen-Sicherheitsabfrage | Serverseitige Validierung/Spamabwehr und echten Versand implementieren |
| SchoolFox | Kommunikationsdienst, Krankmeldung und Empfangsbestätigung; PDF-Hilfe | Auf Hilfe/Ansprechpartner verweisen; keinen erfundenen Login bauen |
| Karten | Google-Einbettung mit vorheriger Aktivierung | Einbettung erst nach Nutzeraktion laden; Textadresse immer sichtbar |
| Suche | Suchfeld in mobiler Ansicht | Suche für Seiten, Meldungen und Dokumente optional neu konzipieren |
| Druck / Linkversand | Druckansicht und Weiterleitungsfunktion im Bestand | Druck-CSS sinnvoll; Linkversand nach Bedarf durch Teilen/URL-Kopieren ersetzen |
| Vertretungsplan | Konzept-PDF belegt; interner Plan im Lehrerzimmer beschrieben | Öffentlichen Live-Plan nicht behaupten oder mit Testdaten vortäuschen |
| Newsletter / RSS | Newsletter nur im Datenschutztext erwähnt; RSS nicht belegt | Nur nach tatsächlicher Einrichtung als Funktion ausweisen |
| CMS / Oberfläche | PortUNA-Verwaltungsportal, jQuery-Hilfen, Slick-Banner, Fancybox, separate `/m/`-Ansicht | Neue Codearchitektur frei wählen; ein responsiver Auftritt statt doppelter Pflege |

Die ZIP enthält viele globale Bediengrafiken und Schriftdateien; deren Vorhandensein beweist nicht, dass jede zugehörige CMS-Funktion auf dieser Schule aktiv genutzt wird. Schriften, Icons und UI-Code sind technische Bestandsressourcen und kein fachlicher Inhalt.

## Redaktionelle Konflikte und offene Entscheidungen

| Thema | Quellenlage | Erforderliche Behandlung |
| --- | --- | --- |
| Ganztags-Endzeiten | HTML/Formular 2026/27: 14:30/15:30; ABC 2025/26: 14:15/15:15 | Neueren Stand priorisieren, Änderung fachlich bestätigen; Alt-PDF kennzeichnen |
| Ganztagsbindung | HTML: ein Jahr; Formular: ein Halbjahr mit Verlängerung | Vertragstext klären |
| Kündigungsfrist Ganztag | Formular: 30.11.2026 und zusätzlich vier Wochen vor Halbjahresende | Widerspruch nicht selbst auflösen |
| Essenspreis | Formular 2026/27: 4,80 Euro; ABC: 4,60 Euro | Schuljahresgültigkeit dokumentieren |
| Lieferantenort | Web: Moringen; Formular: Hardegsen | Anbieterangabe bestätigen |
| Beratungslehrkraft | Abweichende Telefonnummern und E-Mails auf Beratungsseite, Mobbingseite, ABC und Schutzkonzept | Eine bestätigte Kontaktquelle herstellen |
| Sekretariatsraum | ABC: erster Stock; Baubrief: Aula während Umbau | Aktuellen Standort und Zugangsweg bestätigen |
| Klassen / Personal | Aktuelle HTML-Seiten weichen vom Organigramm 2025/26 ab | Team/Klassen jährlich versionieren |
| Kompetenzzeugnisse | Beschluss für 01.06.2026 angekündigt; Ergebnis fehlt | Planung nicht zur bestätigten Einführung umdeuten |
| PDF „Satzung der Schule“ | Ziel ist Fördervereinssatzung | Dokument korrekt benennen |
| Speiseplan Dezember | Doppellabel 07.–11.12.; ein Link verweist auf Vorwoche | Beschriftung und Ziel korrigieren |
| Projektwoche | 25 Projekte im Bericht, 26 Projektblätter; unterschiedliche Datumsangaben | Historische Angaben mit Quelle erhalten und prüfen |
| Außerschulische Angebote | Verlinkte Seite nicht abrufbar / mobile Variante 404 | Inhalt beim Betreiber nachfordern oder Menü bereinigen |
| Galerie | Detailalbum vorhanden, Rubrikübersicht leer | Zuordnung/Export klären |
| Bildfreigaben | Dateien öffentlich sichtbar; daraus folgt keine neue Freigabe für jede Verwendung | Bestehende Bildrechte und Einwilligungen vom Schulbetreiber bestätigen lassen; nicht als technisch geklärt markieren |

# BILD- UND MEDIENREGISTER

## Erfassungsregeln

Jede nachfolgende Originaladresse wurde aus einem vorhandenen Link beziehungsweise einer Ressourcenantwort ermittelt. Pfade, doppelte Schrägstriche, Prozentkodierung und `?v=`-Parameter bleiben erhalten. Dateinamen oder Bildtitel sind Kontextbelege, keine unabhängige visuelle Bestätigung von Personen, Aufnahmeort oder Urheber. Ein erfolgreicher Abruf im Recherchewerkzeug ersetzt keinen Hotlink-/Browser-Ladetest.

**57 inhaltliche Bildressourcen** sind adressiert: 28 aus Startseite/Informationsseiten und 29 aus Nachrichten. Inhaltliche Bildadressen werden vollständig ausgeschrieben und nicht nur als CDN-Basis plus Dateiname angegeben.

## Schulprofil, Startseite und Informationsseiten

| ID | Seite / Kontext | Original-Bild-URL |
| --- | --- | --- |
| B01 | Startseite / global: Kopfbild / Banner | [https://fotos.verwaltungsportal.de/menuAdministration/2/2/0/1/3/6/gross/slider2-1349x447.png](https://fotos.verwaltungsportal.de/menuAdministration/2/2/0/1/3/6/gross/slider2-1349x447.png) |
| B02 | Startseite: Graffiti-Motiv | [https://daten.verwaltungsportal.de/dateien//mypage/3/8/2/2/5/0/0/IMG-20250515-WA0019.jpg?v=1775565296](https://daten.verwaltungsportal.de/dateien//mypage/3/8/2/2/5/0/0/IMG-20250515-WA0019.jpg?v=1775565296) |
| B03 | Unterrichtszeiten: Tagesstruktur-Grafik | [https://daten.verwaltungsportal.de/dateien//mypage/2/4/8/8/3/2/5/Tagesstruktur.png?v=1734441084](https://daten.verwaltungsportal.de/dateien//mypage/2/4/8/8/3/2/5/Tagesstruktur.png?v=1734441084) |
| B04 | Startseite: Wachstum/Blumen, Motiv 1 | [https://daten.verwaltungsportal.de/dateien//mypage/3/8/2/2/4/9/8/image.webp?v=1775565296](https://daten.verwaltungsportal.de/dateien//mypage/3/8/2/2/4/9/8/image.webp?v=1775565296) |
| B05 | Startseite: Wachstum/Blumen, Motiv 2 | [https://daten.verwaltungsportal.de/dateien//mypage/3/8/2/2/4/9/9/image.webp?v=1775565296](https://daten.verwaltungsportal.de/dateien//mypage/3/8/2/2/4/9/9/image.webp?v=1775565296) |
| B06 | Startseite: Mosaik | [https://daten.verwaltungsportal.de/dateien//mypage/3/8/2/2/5/0/1/signal-2025-04-24-21-03-19-780.jpg?v=1775565296](https://daten.verwaltungsportal.de/dateien//mypage/3/8/2/2/5/0/1/signal-2025-04-24-21-03-19-780.jpg?v=1775565296) |
| B07 | Startseite: Turnhalle | [https://daten.verwaltungsportal.de/dateien//mypage/3/8/2/2/5/0/2/signal-2025-04-25-09-25-38-440.jpg?v=1775565296](https://daten.verwaltungsportal.de/dateien//mypage/3/8/2/2/5/0/2/signal-2025-04-25-09-25-38-440.jpg?v=1775565296) |
| B08 | Unsere Schule: Portrait Namensgeber Dr. Heinrich Grupe; GIF-Adresse trotz nicht unterstützter Vorschau ermittelt | [https://fotos.verwaltungsportal.de/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Dr._Heinrich_Grupe.gif](https://fotos.verwaltungsportal.de/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Dr._Heinrich_Grupe.gif) |
| B09 | Kollegium: Portrait Schulleiterin Esther Jacobsen | [https://fotos.verwaltungsportal.de/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Esther_Passbild.jpg](https://fotos.verwaltungsportal.de/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Esther_Passbild.jpg) |
| B10 | Kollegium: Portrait Konrektorin Julia Aramayo | [https://fotos.verwaltungsportal.de/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Julia_Passbild.jpg](https://fotos.verwaltungsportal.de/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Julia_Passbild.jpg) |
| B11 | Umbau: Baustellen-/Abrissfoto | [https://fotos.verwaltungsportal.de/seitengenerator/b84408a40072694b0d18b80a926ca076249919/IMG-20251203-WA0035.webp](https://fotos.verwaltungsportal.de/seitengenerator/b84408a40072694b0d18b80a926ca076249919/IMG-20251203-WA0035.webp) |
| B12 | Förderverein: Vereinsbanner | [https://daten.verwaltungsportal.de/dateien//mypage/3/7/8/5/4/6/8/Banner-HGS.webp?v=1774020444](https://daten.verwaltungsportal.de/dateien//mypage/3/7/8/5/4/6/8/Banner-HGS.webp?v=1774020444) |
| B13 | SchoolFox: SchoolFox-Grafik | [https://daten.verwaltungsportal.de/dateien//mypage/2/9/6/4/0/1/1/unnamed.png?v=1740490521](https://daten.verwaltungsportal.de/dateien//mypage/2/9/6/4/0/1/1/unnamed.png?v=1740490521) |
| B14 | Zeugnisse: Grafik/Screenshot zu kompetenzorientierten Zeugnissen | [https://daten.verwaltungsportal.de/dateien//mypage/3/8/6/4/2/7/4/Screenshot_2026-04-22_121029.webp?v=1777360416](https://daten.verwaltungsportal.de/dateien//mypage/3/8/6/4/2/7/4/Screenshot_2026-04-22_121029.webp?v=1777360416) |
| B15 | Beratungsangebote: Portrait Kerstin Groß | [https://daten.verwaltungsportal.de/dateien//mypage/2/8/3/8/1/5/3/signal-2024-12-18-19-41-06-997.jpg?v=1734595857](https://daten.verwaltungsportal.de/dateien//mypage/2/8/3/8/1/5/3/signal-2024-12-18-19-41-06-997.jpg?v=1734595857) |
| B16 | Schülerbeiträge: Bibliotheksbericht, Bilder Buchwoche 2 | [https://daten.verwaltungsportal.de/dateien//mypage/3/0/4/2/6/4/7/Bilder_Buchwoche_2.jpg?v=1743663263](https://daten.verwaltungsportal.de/dateien//mypage/3/0/4/2/6/4/7/Bilder_Buchwoche_2.jpg?v=1743663263) |
| B17 | Schülerbeiträge: Bibliotheksbericht, Bilder Buchwoche | [https://daten.verwaltungsportal.de/dateien//mypage/3/0/4/2/6/4/8/Bilder_Buchwoche.jpg?v=1743663265](https://daten.verwaltungsportal.de/dateien//mypage/3/0/4/2/6/4/8/Bilder_Buchwoche.jpg?v=1743663265) |
| B18 | Schülerbeiträge: Slime-AG, Kinder | [https://daten.verwaltungsportal.de/dateien//mypage/2/9/7/8/3/8/0/signal-2025-02-26-18-58-06-861.jpg?v=1741090878](https://daten.verwaltungsportal.de/dateien//mypage/2/9/7/8/3/8/0/signal-2025-02-26-18-58-06-861.jpg?v=1741090878) |
| B19 | Schülerbeiträge: Slime-AG, Bild 1 | [https://daten.verwaltungsportal.de/dateien//mypage/2/9/7/8/3/8/1/signal-2025-02-26-18-24-19-896-1.jpg?v=1741090879](https://daten.verwaltungsportal.de/dateien//mypage/2/9/7/8/3/8/1/signal-2025-02-26-18-24-19-896-1.jpg?v=1741090879) |
| B20 | Schülerbeiträge: Slime-AG, Bild 2 | [https://daten.verwaltungsportal.de/dateien//mypage/2/9/7/8/3/8/2/signal-2025-02-26-18-24-19-896.jpg?v=1741090879](https://daten.verwaltungsportal.de/dateien//mypage/2/9/7/8/3/8/2/signal-2025-02-26-18-24-19-896.jpg?v=1741090879) |
| B21 | Kooperationspartner: Logo Begabungsförderung Niedersachsen | [https://daten.verwaltungsportal.de/dateien//mypage/3/7/6/4/1/6/0/Logo_Begabungsfoerderung_Niedersachsenklein.webp?v=1773233033](https://daten.verwaltungsportal.de/dateien//mypage/3/7/6/4/1/6/0/Logo_Begabungsfoerderung_Niedersachsenklein.webp?v=1773233033) |
| B22 | Kooperationspartner: Logo Klima macht Schule | [https://daten.verwaltungsportal.de/dateien//mypage/3/7/6/4/1/6/1/Klima_macht_Schule.webp?v=1773233033](https://daten.verwaltungsportal.de/dateien//mypage/3/7/6/4/1/6/1/Klima_macht_Schule.webp?v=1773233033) |
| B23 | Kooperationspartner: Grafik Wälderwärts | [https://daten.verwaltungsportal.de/dateien//mypage/3/7/6/4/1/6/2/Screenshot_2.webp?v=1773233033](https://daten.verwaltungsportal.de/dateien//mypage/3/7/6/4/1/6/2/Screenshot_2.webp?v=1773233033) |
| B24 | Kooperationspartner: Grafik RUZ Göttingen | [https://daten.verwaltungsportal.de/dateien//mypage/3/7/6/4/1/6/4/Screenshot_3.webp?v=1773233034](https://daten.verwaltungsportal.de/dateien//mypage/3/7/6/4/1/6/4/Screenshot_3.webp?v=1773233034) |
| B25 | Schulobst: Logo Schulobstprogramm | [https://daten.verwaltungsportal.de/dateien//mypage/3/3/6/1/3/3/9/Schulobst_logo.webp?v=1757328315](https://daten.verwaltungsportal.de/dateien//mypage/3/3/6/1/3/3/9/Schulobst_logo.webp?v=1757328315) |
| B26 | Projektwoche: Graffiti-Projekt | [https://daten.verwaltungsportal.de/dateien//mypage/3/1/2/4/8/7/0/IMG-20250515-WA0008.jpg?v=1747385441](https://daten.verwaltungsportal.de/dateien//mypage/3/1/2/4/8/7/0/IMG-20250515-WA0008.jpg?v=1747385441) |
| B27 | Projektwoche: StadtRadio-Projekt | [https://daten.verwaltungsportal.de/dateien//mypage/3/1/2/4/8/7/2/signal-2025-04-24-15-36-50-642.jpg?v=1747385442](https://daten.verwaltungsportal.de/dateien//mypage/3/1/2/4/8/7/2/signal-2025-04-24-15-36-50-642.jpg?v=1747385442) |
| B28 | Projektwoche: Waldwärts-Projekt | [https://daten.verwaltungsportal.de/dateien//mypage/3/1/2/4/8/7/3/signal-2025-04-24-16-26-12-219.jpg?v=1747385442](https://daten.verwaltungsportal.de/dateien//mypage/3/1/2/4/8/7/3/signal-2025-04-24-16-26-12-219.jpg?v=1747385442) |

## Nachrichtenbilder

Das Originalbild ist der jeweiligen Meldung zugeordnet; die ersten drei erscheinen zusätzlich als Teaser auf der Startseite. Für vier der 33 Meldungen ist kein gesondertes Nachrichtenbild belegt (Klima-Bericht 2026, Abschlussfest, Sportabzeichentour, Baumaßnahmenbrief).

| ID | Meldung / Bildkontext | Original-Bild-URL |
| --- | --- | --- |
| N01 | [Erfrischung an der HGS](https://www.heinrich-grupe-schule.de/m/news/1/1256501/nachrichten/erfrischung-an-der-hgs.html) | [https://fotos.verwaltungsportal.de/news/1/2/5/6/5/0/1/file_00000000066c720a8a01ed5d3d30f5d2.webp](https://fotos.verwaltungsportal.de/news/1/2/5/6/5/0/1/file_00000000066c720a8a01ed5d3d30f5d2.webp) |
| N02 | [Heinrich-Grupe-Schule gewinnt das Junior League-Finale in Hannover](https://www.heinrich-grupe-schule.de/m/news/1/1251211/nachrichten/heinrich-grupe-schule-gewinnt-das-junior-league-finale-in-hannover.html) | [https://fotos.verwaltungsportal.de/news/1/2/5/1/2/1/1/HandballFinals.webp](https://fotos.verwaltungsportal.de/news/1/2/5/1/2/1/1/HandballFinals.webp) |
| N03 | [Heinrich-Grupe-Schule beim Göttinger Sparkassen-Volkslauf erfolgreich vertreten](https://www.heinrich-grupe-schule.de/m/news/1/1243236/nachrichten/heinrich-grupe-schule-beim-g%C3%B6ttinger-sparkassen-volkslauf-erfolgreich-vertreten.html) | [https://fotos.verwaltungsportal.de/news/1/2/4/3/2/3/6/20260531_132811_2.webp](https://fotos.verwaltungsportal.de/news/1/2/4/3/2/3/6/20260531_132811_2.webp) |
| N04 | [Sportfest an der HGS](https://www.heinrich-grupe-schule.de/m/news/1/1243223/nachrichten/sportfest-an-der-hgs.html) | [https://fotos.verwaltungsportal.de/news/1/2/4/3/2/2/3/IMG-20260529-WA0059.webp](https://fotos.verwaltungsportal.de/news/1/2/4/3/2/2/3/IMG-20260529-WA0059.webp) |
| N05 | [Osterfeier](https://www.heinrich-grupe-schule.de/m/news/1/1213140/nachrichten/osterfeier.html) | [https://fotos.verwaltungsportal.de/news/1/2/1/3/1/4/0/20260320_102230_3.webp](https://fotos.verwaltungsportal.de/news/1/2/1/3/1/4/0/20260320_102230_3.webp) |
| N06 | [Waldtag der 2.Klassen](https://www.heinrich-grupe-schule.de/m/news/1/1213138/nachrichten/waldtag-der-2.klassen.html) | [https://fotos.verwaltungsportal.de/news/1/2/1/3/1/3/8/20260316_091821.webp](https://fotos.verwaltungsportal.de/news/1/2/1/3/1/3/8/20260316_091821.webp) |
| N07 | [Handballtag](https://www.heinrich-grupe-schule.de/m/news/1/1207347/nachrichten/handballtag.html) | [https://fotos.verwaltungsportal.de/news/1/2/0/7/3/4/7/IMG-20260305-WA0000.webp](https://fotos.verwaltungsportal.de/news/1/2/0/7/3/4/7/IMG-20260305-WA0000.webp) |
| N08 | [Handball-Grundschulliga- Turnier](https://www.heinrich-grupe-schule.de/m/news/1/1199013/nachrichten/handball-grundschulliga-turnier.html) | [https://fotos.verwaltungsportal.de/news/1/1/9/9/0/1/3/signal-2026-02-11-12-00-35-811.webp](https://fotos.verwaltungsportal.de/news/1/1/9/9/0/1/3/signal-2026-02-11-12-00-35-811.webp) |
| N09 | [Faschingsfeier 2026](https://www.heinrich-grupe-schule.de/m/news/1/1198833/nachrichten/faschingsfeier-2026.html) | [https://fotos.verwaltungsportal.de/news/1/1/9/8/8/3/3/IMG-20260213-WA0008.webp](https://fotos.verwaltungsportal.de/news/1/1/9/8/8/3/3/IMG-20260213-WA0008.webp) |
| N10 | [KUK Göttingen zu Besuch bei den 2.Klassen](https://www.heinrich-grupe-schule.de/m/news/1/1150694/nachrichten/kuk-g%C3%B6ttingen-zu-besuch-bei-den-2.klassen.html) | [https://fotos.verwaltungsportal.de/news/1/1/5/0/6/9/4/20251007_102348.webp](https://fotos.verwaltungsportal.de/news/1/1/5/0/6/9/4/20251007_102348.webp) |
| N11 | [Teilnahme der Heinrich Gruppe Grundschule an der Junior League Handball](https://www.heinrich-grupe-schule.de/m/news/1/1150696/nachrichten/teilnahme-der-heinrich-gruppe-grundschule-an-der-junior-league-handball.html) | [https://fotos.verwaltungsportal.de/news/1/1/5/0/6/9/6/IMG-20251010-WA0011.webp](https://fotos.verwaltungsportal.de/news/1/1/5/0/6/9/6/IMG-20251010-WA0011.webp) |
| N12 | [Gesundes Frühstück](https://www.heinrich-grupe-schule.de/m/news/1/1128550/nachrichten/gesundes-fr%C3%BChst%C3%BCck.html) | [https://fotos.verwaltungsportal.de/news/1/1/2/8/5/5/0/20250918_085900.webp](https://fotos.verwaltungsportal.de/news/1/1/2/8/5/5/0/20250918_085900.webp) |
| N13 | [Grundschulliga 2025: Heinrich-Grupe-Schule holt den Titel!](https://www.heinrich-grupe-schule.de/m/news/1/1119674/nachrichten/grundschulliga-2025-heinrich-grupe-schule-holt-den-titel.html) | [https://fotos.verwaltungsportal.de/news/1/1/1/9/6/7/4/DSC07483-Kopie.webp](https://fotos.verwaltungsportal.de/news/1/1/1/9/6/7/4/DSC07483-Kopie.webp) |
| N14 | [Mit Herz und Helm – Wir bauen Zukunft](https://www.heinrich-grupe-schule.de/m/news/1/1119667/nachrichten/mit-herz-und-helm--wir-bauen-zukunft.html) | [https://fotos.verwaltungsportal.de/news/1/1/1/9/6/6/7/IMG-20250913-WA0080.webp](https://fotos.verwaltungsportal.de/news/1/1/1/9/6/6/7/IMG-20250913-WA0080.webp) |
| N15 | [Nachweis Rettungsfähigkeit](https://www.heinrich-grupe-schule.de/m/news/1/1113789/nachrichten/nachweis-rettungsf%C3%A4higkeit.html) | [https://fotos.verwaltungsportal.de/news/1/1/1/3/7/8/9/IMG_5570.webp](https://fotos.verwaltungsportal.de/news/1/1/1/3/7/8/9/IMG_5570.webp) |
| N16 | [Schulchor auf dem Sommerfest der Heinrich-Grupe Schule](https://www.heinrich-grupe-schule.de/m/news/1/1089249/nachrichten/schulchor-auf-dem-sommerfest-der-heinrich-grupe-schule.html) | [https://fotos.verwaltungsportal.de/news/1/0/8/9/2/4/9/20250629_123643.jpg](https://fotos.verwaltungsportal.de/news/1/0/8/9/2/4/9/20250629_123643.jpg) |
| N17 | [Die HGS bei den Mini-Olympics](https://www.heinrich-grupe-schule.de/m/news/1/1082475/nachrichten/die-hgs-bei-den-mini-olympics.html) | [https://fotos.verwaltungsportal.de/news/1/0/8/2/4/7/5/IMG_4765.jpg](https://fotos.verwaltungsportal.de/news/1/0/8/2/4/7/5/IMG_4765.jpg) |
| N18 | [Projektwoche](https://www.heinrich-grupe-schule.de/m/news/1/1071867/nachrichten/projektwoche.html) | [https://fotos.verwaltungsportal.de/news/1/0/7/1/8/6/7/IMG-20250515-WA0011.jpg](https://fotos.verwaltungsportal.de/news/1/0/7/1/8/6/7/IMG-20250515-WA0011.jpg) |
| N19 | [Klimaschutz an der HGS: Auszeichnung für „Klima macht Schule“](https://www.heinrich-grupe-schule.de/m/news/1/1071858/nachrichten/klimaschutz-an-der-hgs-auszeichnung-f%C3%BCr-klima-macht-schule.html) | [https://fotos.verwaltungsportal.de/news/1/0/7/1/8/5/8/Pra%CC%88mie-HGS.jpg](https://fotos.verwaltungsportal.de/news/1/0/7/1/8/5/8/Pra%CC%88mie-HGS.jpg) |
| N20 | [Hobby Horsing](https://www.heinrich-grupe-schule.de/m/news/1/1058444/nachrichten/hobby-horsing.html) | [https://fotos.verwaltungsportal.de/news/1/0/5/8/4/4/4/20250422_124348.jpg](https://fotos.verwaltungsportal.de/news/1/0/5/8/4/4/4/20250422_124348.jpg) |
| N21 | [Osterfeier unscharf](https://www.heinrich-grupe-schule.de/m/news/1/1053782/nachrichten/osterfeier-der-1.kl%C3%A4ssler.html) | [https://fotos.verwaltungsportal.de/news/1/0/5/3/7/8/2/Osterfeier_unscharf.jpg](https://fotos.verwaltungsportal.de/news/1/0/5/3/7/8/2/Osterfeier_unscharf.jpg) |
| N22 | [Ball über die Schnur Turnier](https://www.heinrich-grupe-schule.de/m/news/1/1053139/nachrichten/ball-%C3%BCber-die-schnur-turnier.html) | [https://fotos.verwaltungsportal.de/news/1/0/5/3/1/3/9/signal-2025-04-07-13-43-35-111.jpg](https://fotos.verwaltungsportal.de/news/1/0/5/3/1/3/9/signal-2025-04-07-13-43-35-111.jpg) |
| N23 | [Ausflug der 1a und 1b zur Stadtbibliothek](https://www.heinrich-grupe-schule.de/m/news/1/1051514/nachrichten/ausflug-der-1a-und-1b-zur-stadtbibliothek.html) | [https://fotos.verwaltungsportal.de/news/1/0/5/1/5/1/4/Bilder_Buchwoche.jpg](https://fotos.verwaltungsportal.de/news/1/0/5/1/5/1/4/Bilder_Buchwoche.jpg) |
| N24 | [Projektwoche](https://www.heinrich-grupe-schule.de/m/news/1/1042075/nachrichten/projektwoche.html) | [https://fotos.verwaltungsportal.de/news/1/0/4/2/0/7/5/Plakate_Projektwoche.png](https://fotos.verwaltungsportal.de/news/1/0/4/2/0/7/5/Plakate_Projektwoche.png) |
| N25 | [Neue Leseecke](https://www.heinrich-grupe-schule.de/m/news/1/1039697/nachrichten/neue-leseecke.html) | [https://fotos.verwaltungsportal.de/news/1/0/3/9/6/9/7/Lesecke.jpg](https://fotos.verwaltungsportal.de/news/1/0/3/9/6/9/7/Lesecke.jpg) |
| N26 | [Faschingsfeier](https://www.heinrich-grupe-schule.de/m/news/1/1038690/nachrichten/faschingsfeier.html) | [https://fotos.verwaltungsportal.de/news/1/0/3/8/6/9/0/signal-2025-03-04-13-59-30-659.jpg](https://fotos.verwaltungsportal.de/news/1/0/3/8/6/9/0/signal-2025-03-04-13-59-30-659.jpg) |
| N27 | [Slime-AG stellt sich vor](https://www.heinrich-grupe-schule.de/m/news/1/1038612/nachrichten/slime-ag-stellt-sich-vor.html) | [https://fotos.verwaltungsportal.de/news/1/0/3/8/6/1/2/signal-2025-02-26-18-58-06-861.jpg](https://fotos.verwaltungsportal.de/news/1/0/3/8/6/1/2/signal-2025-02-26-18-58-06-861.jpg) |
| N28 | [Adventszeit](https://www.heinrich-grupe-schule.de/m/news/1/1012969/nachrichten/adventszeit.html) | [https://fotos.verwaltungsportal.de/news/1/0/1/2/9/6/9/signal-2024-12-20-13-54-56-829.jpg](https://fotos.verwaltungsportal.de/news/1/0/1/2/9/6/9/signal-2024-12-20-13-54-56-829.jpg) |
| N29 | [Ukulelen-AG übt fleißig](https://www.heinrich-grupe-schule.de/m/news/1/1012964/nachrichten/ukulelen-ag-%C3%BCbt-flei%C3%9Fig.html) | [https://fotos.verwaltungsportal.de/news/1/0/1/2/9/6/4/IMG_8776_002.jpg](https://fotos.verwaltungsportal.de/news/1/0/1/2/9/6/4/IMG_8776_002.jpg) |

## Nicht abschließend aufgelöste Bilder und Exportressourcen

| Ressource | Beleg / gesicherter Bezug | Status |
| --- | --- | --- |
| Schullogo | ZIP: `images/logo-heinrich-grupe-schule-mit-bg.png`, 478 × 207 im HTML; Link zur Startseite | Original-Remote-URL im Export ersetzt; mit den verfügbaren Abrufen nicht ermittelbar. Lokale Originaldatei erhalten. |
| Banner-Varianten | ZIP: `slider2-1349x447.png`, `_1.png`, `_2.png`; HTML-`srcset` für 1200/900/600w | Haupt-Originaladresse B01 gesichert; ursprüngliche Variantenadressen nicht nachgewiesen. |
| Projektwochen-Galerie | [Album 2025](https://www.heinrich-grupe-schule.de/fotos/2/214451/sonstige/projektwoche-2025/) | Einzelbildadressen weder in der Startseiten-ZIP noch in den abrufbaren Textansichten enthalten; vollständiger CMS-/Galerieexport erforderlich. |
| Dekor / Förderlogo / Favicon | ZIP: `schmuckleiste-bunt.png`, `hirsch.png`, `vernetzt.png`, `favicon.png` | Lokale Dateien vorhanden; ursprüngliche Adressen nicht nachgewiesen. Kontext von `hirsch.png` nicht zuverlässig bestimmt. |
| Bediengrafiken | ZIP: weitere PNG/GIF-Dateien | Kein redaktioneller Bildbestand; Originaladressen teilweise unbekannt. Neu gestaltete Icons dürfen sie ersetzen. |
| Bilder in PDFs | Handbuch, Musterzeugnisse, Projektblätter, Speisepläne | Teil der PDF-Dateien; keine gesonderte Original-Bild-URL belegt. PDF-Adressen bleiben erhalten. |

**Keine URL darf aus einem vermuteten CMS-Verzeichnis oder einem Dateinamen erfunden werden.** Das anschließende Modell muss diese offenen Ressourcen gezielt ergänzen oder lokale Exportdateien verwenden. Ohne Galerie-/Logoergänzung darf es keine vollständige Medienmigration behaupten.

Alle 48 lokalen Rasterdateien des Exports sind im folgenden Sicherungsinventar enthalten. `images/...` sind **Exportpfade**, keine verifizierten öffentlichen Website-URLs:

- `images/20260531_132811_2.webp`

- `images/HandballFinals.webp`

- `images/IMG-20250515-WA0019.jpg`

- `images/arrow-down.png`

- `images/arrows_contrast.png`

- `images/bullets.png`

- `images/bullets_black.png`

- `images/bullets_white.png`

- `images/button_submit.png`

- `images/calender_today.png`

- `images/calender_today_dark.png`

- `images/camera_alt.png`

- `images/camera_alt_dark.png`

- `images/clndr-view-switch-clndr.png`

- `images/clndr-view-switch-normal.png`

- `images/fancybox.png`

- `images/favicon.png`

- `images/file_00000000066c720a8a01ed5d3d30f5d2.webp`

- `images/formular-absenden-darkmode.png`

- `images/formular-absenden.png`

- `images/get_app.png`

- `images/get_app_dark.png`

- `images/google.png`

- `images/hirsch.png`

- `images/image.webp`

- `images/image_1.webp`

- `images/info.png`

- `images/info_dark.png`

- `images/insert_link.png`

- `images/insert_link_dark.png`

- `images/loading.gif`

- `images/logo-heinrich-grupe-schule-mit-bg.png`

- `images/neu.gif`

- `images/news_3_arrow.png`

- `images/news_3_arrow_dark.png`

- `images/outline_place.png`

- `images/print.gif`

- `images/schmuckleiste-bunt.png`

- `images/sendlink.gif`

- `images/shrbtns.png`

- `images/signal-2025-04-24-21-03-19-780.jpg`

- `images/signal-2025-04-25-09-25-38-440.jpg`

- `images/slider2-1349x447.png`

- `images/slider2-1349x447_1.png`

- `images/slider2-1349x447_2.png`

- `images/suche-lupe.png`

- `images/vernetzt.png`

- `images/visibility_off_black_transparent.png`

## Dokumente, Formulare und weitere Medien

Das Register hält **72 aus Seiten heraus aufgelöste Ressourcenverweise** fest, einschließlich Mehrfachverlinkungen. Original-Downloadadresse und Quellseite bilden zusammen die Migrationszuordnung. Die Projektblätter sind einseitige, bildbasierte PDFs ohne auslesbaren Text; ihre konkreten Inhalte wurden nicht aus den Titeln erschlossen. Die Schulbuchförderungsdatei weist defekte Textkodierung auf. Speiseplan-PDFs wurden adressiert, ihre einzelnen Gerichte/Allergene nicht zuverlässig extrahiert.

| ID | Quellseite / Linktitel | Original-Ressource | Abruf-/Inhaltsstatus |
| --- | --- | --- | --- |
| D01 | [Leitbild](https://www.heinrich-grupe-schule.de/) | [https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Leitbild.pdf](https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Leitbild.pdf) | Adresse und Ressourcentyp ermittelt |
| D02 | [Wichtige Infos 2025/26](https://www.heinrich-grupe-schule.de/seite/765392/schul-abc.html) | [https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Wichtige_Infos_2025_26.pdf](https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Wichtige_Infos_2025_26.pdf) | Adresse und Ressourcentyp ermittelt |
| D03 | [Organigramm 25-26](https://www.heinrich-grupe-schule.de/seite/708733/konferenzen.html) | [https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Organigramm_25-26.pdf](https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Organigramm_25-26.pdf) | Adresse und Ressourcentyp ermittelt |
| D04 | [Konferenzkalender 26-27](https://www.heinrich-grupe-schule.de/seite/708733/konferenzen.html) | [https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Konferenzkalender_26-27.pdf](https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Konferenzkalender_26-27.pdf) | Adresse und Ressourcentyp ermittelt |
| D05 | [Anmeldung Ganztag](https://www.heinrich-grupe-schule.de/seite/708737/offene-ganztagsschule.html) | [https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Anmeldung.pdf](https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Anmeldung.pdf) | Adresse und Ressourcentyp ermittelt |
| D06 | [05-09.10](https://www.heinrich-grupe-schule.de/seite/708739/mittagessen.html) | [https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/05-09.10.pdf](https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/05-09.10.pdf) | PDF abrufbar; bildbasiert / ohne auslesbaren Text |
| D07 | [26-30.10](https://www.heinrich-grupe-schule.de/seite/708739/mittagessen.html) | [https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/26-30.10.pdf](https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/26-30.10.pdf) | PDF abrufbar; bildbasiert / ohne auslesbaren Text |
| D08 | [02.11-06.11](https://www.heinrich-grupe-schule.de/seite/708739/mittagessen.html) | [https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/02.11-06.11.pdf](https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/02.11-06.11.pdf) | PDF abrufbar; bildbasiert / ohne auslesbaren Text |
| D09 | [16.11-20.11](https://www.heinrich-grupe-schule.de/seite/708739/mittagessen.html) | [https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/16.11-20.11.pdf](https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/16.11-20.11.pdf) | PDF abrufbar; bildbasiert / ohne auslesbaren Text |
| D10 | [23.11-27.11](https://www.heinrich-grupe-schule.de/seite/708739/mittagessen.html) | [https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/23.11-27.11.pdf](https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/23.11-27.11.pdf) | PDF abrufbar; bildbasiert / ohne auslesbaren Text |
| D11 | [30.11-04.12](https://www.heinrich-grupe-schule.de/seite/708739/mittagessen.html) | [https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/30.11-04.12.pdf](https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/30.11-04.12.pdf) | PDF abrufbar; bildbasiert / ohne auslesbaren Text |
| D12 | [07.12-11.12](https://www.heinrich-grupe-schule.de/seite/708739/mittagessen.html) | [https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/07.12-11.12.pdf](https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/07.12-11.12.pdf) | PDF abrufbar; bildbasiert / ohne auslesbaren Text |
| D13 | [14.12-18.12](https://www.heinrich-grupe-schule.de/seite/708739/mittagessen.html) | [https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/14.12-18.12.pdf](https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/14.12-18.12.pdf) | PDF abrufbar; bildbasiert / ohne auslesbaren Text |
| D14 | [21.12-22.12](https://www.heinrich-grupe-schule.de/seite/708739/mittagessen.html) | [https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/21.12-22.12.pdf](https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/21.12-22.12.pdf) | PDF abrufbar; bildbasiert / ohne auslesbaren Text |
| D15 | [Beitrittserklärung Förderverein HGS](https://www.heinrich-grupe-schule.de/seite/708749/f%C3%B6rderverein.html) | [https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Formular_Beitritt_Foerderverein.pdf](https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Formular_Beitritt_Foerderverein.pdf) | Adresse und Ressourcentyp ermittelt |
| D16 | [FV-HGS-Satzung](https://www.heinrich-grupe-schule.de/seite/708749/f%C3%B6rderverein.html) | [https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/FV-HGS-Satzung_1.pdf](https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/FV-HGS-Satzung_1.pdf) | Adresse und Ressourcentyp ermittelt |
| D17 | [Deutsch](https://www.heinrich-grupe-schule.de/seite/708744/schoolfox.html) | [https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Wilkommensbrief_Deutsch.pdf](https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Wilkommensbrief_Deutsch.pdf) | Adresse und Ressourcentyp ermittelt |
| D18 | [Arabisch](https://www.heinrich-grupe-schule.de/seite/708744/schoolfox.html) | [https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Willkommensbrief_Arabisch.pdf](https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Willkommensbrief_Arabisch.pdf) | Adresse und Ressourcentyp ermittelt |
| D19 | [Englisch](https://www.heinrich-grupe-schule.de/seite/708744/schoolfox.html) | [https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Willkommensbrief_Englisch.pdf](https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Willkommensbrief_Englisch.pdf) | Adresse und Ressourcentyp ermittelt |
| D20 | [Russisch](https://www.heinrich-grupe-schule.de/seite/708744/schoolfox.html) | [https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Willkommensbrief_Russisch.pdf](https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Willkommensbrief_Russisch.pdf) | Adresse und Ressourcentyp ermittelt |
| D21 | [Serbisch](https://www.heinrich-grupe-schule.de/seite/708744/schoolfox.html) | [https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Wilkommensbrief_Serbisch.pdf](https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Wilkommensbrief_Serbisch.pdf) | Adresse und Ressourcentyp ermittelt |
| D22 | [Türkisch](https://www.heinrich-grupe-schule.de/seite/708744/schoolfox.html) | [https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Willkommensbrief_Tuerkisch.pdf](https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Willkommensbrief_Tuerkisch.pdf) | Adresse und Ressourcentyp ermittelt |
| D23 | [Handbuch Schoolfox](https://www.heinrich-grupe-schule.de/seite/708744/schoolfox.html) | [https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Handbuch_SchoolFox_Eltern.pdf](https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Handbuch_SchoolFox_Eltern.pdf) | Adresse und Ressourcentyp ermittelt |
| D24 | [Download als PDF](https://www.heinrich-grupe-schule.de/seite/708747/konzepte.html) | [https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Erziehungs-_und_Schutzkonzept.pdf](https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Erziehungs-_und_Schutzkonzept.pdf) | Adresse und Ressourcentyp ermittelt |
| D25 | [Download als PDF](https://www.heinrich-grupe-schule.de/seite/708747/konzepte.html) | [https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Vertretungskonzept.pdf](https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Vertretungskonzept.pdf) | Adresse und Ressourcentyp ermittelt |
| D26 | [Elternbrief Einführung](https://www.heinrich-grupe-schule.de/seite/708755/zeugnisse.html) | [https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Elternbrief_Einfuehrung.pdf](https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Elternbrief_Einfuehrung.pdf) | Adresse und Ressourcentyp ermittelt |
| D27 | [Präsentation Kompetenzorientierte Zeugnisse](https://www.heinrich-grupe-schule.de/seite/708755/zeugnisse.html) | [https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Praesentation_Kompetenzorientierte_Zeugnisse.pdf](https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Praesentation_Kompetenzorientierte_Zeugnisse.pdf) | Adresse ermittelt; Inhalt wegen Dateigröße nicht auslesbar |
| D28 | [Beispielzeugnis Klasse 3+4](https://www.heinrich-grupe-schule.de/seite/708755/zeugnisse.html) | [https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/3Test_Musterman_18.pdf](https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/3Test_Musterman_18.pdf) | Adresse und Ressourcentyp ermittelt |
| D29 | [Beispielzeugnis Klasse 1+2](https://www.heinrich-grupe-schule.de/seite/708755/zeugnisse.html) | [https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/1Test_Musterman_1.pdf](https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/1Test_Musterman_1.pdf) | Adresse und Ressourcentyp ermittelt |
| D30 | [Anmeldebogen](https://www.heinrich-grupe-schule.de/seite/765298/schulanmeldung.html) | [https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Anmeldebogen_neu.pdf](https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Anmeldebogen_neu.pdf) | Adresse und Ressourcentyp ermittelt |
| D31 | [Merkblätter-Einverständniserklärung](https://www.heinrich-grupe-schule.de/seite/765298/schulanmeldung.html) | [https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Merkblaetter_Einverstaendniserklaerungen.pdf](https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Merkblaetter_Einverstaendniserklaerungen.pdf) | Adresse und Ressourcentyp ermittelt |
| D32 | [Infektionsschutzgesetz](https://www.heinrich-grupe-schule.de/seite/765298/schulanmeldung.html) | [https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/belehrungsbogen_eltern_deutsch.pdf](https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/belehrungsbogen_eltern_deutsch.pdf) | Adresse und Ressourcentyp ermittelt |
| D33 | [Erziehungs- und Schutzkonzept](https://www.heinrich-grupe-schule.de/seite/765298/schulanmeldung.html) | [https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Erziehungs-_und_Schutzkonzept.pdf](https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Erziehungs-_und_Schutzkonzept.pdf) | Adresse und Ressourcentyp ermittelt |
| D34 | [Beschwerdekonzept_hgs](https://www.heinrich-grupe-schule.de/seite/765298/schulanmeldung.html) | [https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Beschwerdekonzept_hgs.pdf](https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Beschwerdekonzept_hgs.pdf) | Adresse und Ressourcentyp ermittelt |
| D35 | [Waffenverbot](https://www.heinrich-grupe-schule.de/seite/765298/schulanmeldung.html) | [https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Waffenverbot_1.pdf](https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Waffenverbot_1.pdf) | Adresse und Ressourcentyp ermittelt |
| D36 | [Datenschutz](https://www.heinrich-grupe-schule.de/seite/765298/schulanmeldung.html) | [https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Elternhinweis_Datenschutz.pdf](https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Elternhinweis_Datenschutz.pdf) | Adresse und Ressourcentyp ermittelt |
| D37 | [Tabelle Datenschutz](https://www.heinrich-grupe-schule.de/seite/765298/schulanmeldung.html) | [https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Tabelle_Datenschutz.pdf](https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Tabelle_Datenschutz.pdf) | Adresse und Ressourcentyp ermittelt |
| D38 | [hier](https://www.heinrich-grupe-schule.de/seite/858078/mobbing-interventionsteam.html) | [https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Infos_ueber_das_MIT.pdf](https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Infos_ueber_das_MIT.pdf) | Adresse und Ressourcentyp ermittelt |
| D39 | [Konzept des Kooperationsverbundes Begabungsförderung](https://www.heinrich-grupe-schule.de/seite/765366/kooperationspartner.html) | [https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/KOV_GOe2_Konzept_2025.pdf](https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/KOV_GOe2_Konzept_2025.pdf) | Adresse und Ressourcentyp ermittelt |
| D40 | [Bücherförderung Landkreis](https://www.heinrich-grupe-schule.de/seite/765366/kooperationspartner.html) | [https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/2024-05-02_Einleger_Schulbuecher-webversion_29052024_015206.pdf](https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/2024-05-02_Einleger_Schulbuecher-webversion_29052024_015206.pdf) | PDF abrufbar; Textkodierung nicht verlässlich |
| D41 | [Schulobstkalender 2026-27  LOTTA KAROTTA](https://www.heinrich-grupe-schule.de/seite/806610/schulobst.html) | [https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Schulobstkalender_2026-27_LOTTA_KAROTTA.pdf](https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Schulobstkalender_2026-27_LOTTA_KAROTTA.pdf) | Adresse und Ressourcentyp ermittelt |
| D42 | [Auf den Spuren Göttingens](https://www.heinrich-grupe-schule.de/seite/766080/projektwoche.html) | [https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Auf_den_Spuren_Goettingens.pdf](https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Auf_den_Spuren_Goettingens.pdf) | PDF abrufbar; bildbasiert / ohne auslesbaren Text |
| D43 | [Auf den Spuren der Ureinwohners Amerikas](https://www.heinrich-grupe-schule.de/seite/766080/projektwoche.html) | [https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Auf_den_Spuren_der_Ureinwohners_Amerikas.pdf](https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Auf_den_Spuren_der_Ureinwohners_Amerikas.pdf) | PDF abrufbar; bildbasiert / ohne auslesbaren Text |
| D44 | [Buntes aus der Küche](https://www.heinrich-grupe-schule.de/seite/766080/projektwoche.html) | [https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Buntes_aus_der_Kueche.pdf](https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Buntes_aus_der_Kueche.pdf) | PDF abrufbar; bildbasiert / ohne auslesbaren Text |
| D45 | [Cafe HGS](https://www.heinrich-grupe-schule.de/seite/766080/projektwoche.html) | [https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Cafe_HGS.pdf](https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Cafe_HGS.pdf) | PDF abrufbar; bildbasiert / ohne auslesbaren Text |
| D46 | [Cheerleading](https://www.heinrich-grupe-schule.de/seite/766080/projektwoche.html) | [https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Cheerleading.pdf](https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Cheerleading.pdf) | PDF abrufbar; bildbasiert / ohne auslesbaren Text |
| D47 | [Cajons](https://www.heinrich-grupe-schule.de/seite/766080/projektwoche.html) | [https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Cajons.pdf](https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Cajons.pdf) | PDF abrufbar; bildbasiert / ohne auslesbaren Text |
| D48 | [Clown-Projekt](https://www.heinrich-grupe-schule.de/seite/766080/projektwoche.html) | [https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Clown-Projekt.pdf](https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Clown-Projekt.pdf) | PDF abrufbar; bildbasiert / ohne auslesbaren Text |
| D49 | [Experimente mit Strom](https://www.heinrich-grupe-schule.de/seite/766080/projektwoche.html) | [https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Experimente_mit_Strom.pdf](https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Experimente_mit_Strom.pdf) | PDF abrufbar; bildbasiert / ohne auslesbaren Text |
| D50 | [Experimente mit Wasser](https://www.heinrich-grupe-schule.de/seite/766080/projektwoche.html) | [https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Experimente_mit_Wasser.pdf](https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Experimente_mit_Wasser.pdf) | PDF abrufbar; bildbasiert / ohne auslesbaren Text |
| D51 | [Graffiti](https://www.heinrich-grupe-schule.de/seite/766080/projektwoche.html) | [https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Graffiti.pdf](https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Graffiti.pdf) | PDF abrufbar; bildbasiert / ohne auslesbaren Text |
| D52 | [Let´s play the ball](https://www.heinrich-grupe-schule.de/seite/766080/projektwoche.html) | [https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Let_s_play_the_ball.pdf](https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Let_s_play_the_ball.pdf) | PDF abrufbar; bildbasiert / ohne auslesbaren Text |
| D53 | [Mosaik](https://www.heinrich-grupe-schule.de/seite/766080/projektwoche.html) | [https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Mosaik.pdf](https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Mosaik.pdf) | PDF abrufbar; bildbasiert / ohne auslesbaren Text |
| D54 | [Musical](https://www.heinrich-grupe-schule.de/seite/766080/projektwoche.html) | [https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Musical.pdf](https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Musical.pdf) | PDF abrufbar; bildbasiert / ohne auslesbaren Text |
| D55 | [Nähmaschine](https://www.heinrich-grupe-schule.de/seite/766080/projektwoche.html) | [https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Naehmaschine.pdf](https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Naehmaschine.pdf) | PDF abrufbar; bildbasiert / ohne auslesbaren Text |
| D56 | [Werken mal anders](https://www.heinrich-grupe-schule.de/seite/766080/projektwoche.html) | [https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Werken_mal_anders.pdf](https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Werken_mal_anders.pdf) | PDF abrufbar; bildbasiert / ohne auslesbaren Text |
| D57 | [Weben](https://www.heinrich-grupe-schule.de/seite/766080/projektwoche.html) | [https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Weben.pdf](https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Weben.pdf) | PDF abrufbar; bildbasiert / ohne auslesbaren Text |
| D58 | [Waldwärts#](https://www.heinrich-grupe-schule.de/seite/766080/projektwoche.html) | [https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Waldwaerts.pdf](https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Waldwaerts.pdf) | PDF abrufbar; bildbasiert / ohne auslesbaren Text |
| D59 | [Upcycling](https://www.heinrich-grupe-schule.de/seite/766080/projektwoche.html) | [https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Upcycling.pdf](https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Upcycling.pdf) | PDF abrufbar; bildbasiert / ohne auslesbaren Text |
| D60 | [Unterwasserwelt](https://www.heinrich-grupe-schule.de/seite/766080/projektwoche.html) | [https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Unterwasserwelt.pdf](https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Unterwasserwelt.pdf) | PDF abrufbar; bildbasiert / ohne auslesbaren Text |
| D61 | [Theaterprojekt](https://www.heinrich-grupe-schule.de/seite/766080/projektwoche.html) | [https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Theaterprojekt.pdf](https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Theaterprojekt.pdf) | PDF abrufbar; bildbasiert / ohne auslesbaren Text |
| D62 | [Tanzspass_fuer_Kids.pdf](https://www.heinrich-grupe-schule.de/seite/766080/projektwoche.html) | [https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Tanzspass_fuer_Kids.pdf](https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Tanzspass_fuer_Kids.pdf) | PDF abrufbar; bildbasiert / ohne auslesbaren Text |
| D63 | [Stadtradio.pdf](https://www.heinrich-grupe-schule.de/seite/766080/projektwoche.html) | [https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Stadtradio.pdf](https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Stadtradio.pdf) | PDF abrufbar; bildbasiert / ohne auslesbaren Text |
| D64 | [Schwimmen.pdf](https://www.heinrich-grupe-schule.de/seite/766080/projektwoche.html) | [https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Schwimmen.pdf](https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Schwimmen.pdf) | PDF abrufbar; bildbasiert / ohne auslesbaren Text |
| D65 | [Schoene_Insektenwelt.pdf](https://www.heinrich-grupe-schule.de/seite/766080/projektwoche.html) | [https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Schoene_Insektenwelt.pdf](https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Schoene_Insektenwelt.pdf) | PDF abrufbar; bildbasiert / ohne auslesbaren Text |
| D66 | [Rueckschlagspiele.pdf](https://www.heinrich-grupe-schule.de/seite/766080/projektwoche.html) | [https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Rueckschlagspiele.pdf](https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Rueckschlagspiele.pdf) | PDF abrufbar; bildbasiert / ohne auslesbaren Text |
| D67 | [Papierwerkstatt.pdf](https://www.heinrich-grupe-schule.de/seite/766080/projektwoche.html) | [https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Papierwerkstatt.pdf](https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Papierwerkstatt.pdf) | PDF abrufbar; bildbasiert / ohne auslesbaren Text |
| D68 | [Satzung der Schule](https://www.heinrich-grupe-schule.de/seite/708761/formulare.html) | [https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/FV-HGS-Satzung.pdf](https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/FV-HGS-Satzung.pdf) | Adresse und Ressourcentyp ermittelt |
| D69 | [Information zu Kopfläusen](https://www.heinrich-grupe-schule.de/seite/708761/formulare.html) | [https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Information_zu_Kopfl_usen.pdf](https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/Information_zu_Kopfl_usen.pdf) | PDF abrufbar; bildbasiert / ohne auslesbaren Text |
| D70 | [Infektionsschutzgesetz](https://www.heinrich-grupe-schule.de/seite/708761/formulare.html) | [https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/belehrungsbogen_eltern_deutsch.pdf](https://daten2.verwaltungsportal.de/dateien/seitengenerator/b84408a40072694b0d18b80a926ca076249919/belehrungsbogen_eltern_deutsch.pdf) | Adresse und Ressourcentyp ermittelt |
| D71 | [Elternbrief (pdf)](https://www.heinrich-grupe-schule.de/news/1/1038659/nachrichten/elternbrief-bauma%C3%9Fnahmen.html) | [https://daten.verwaltungsportal.de/dateien/news/1/0/3/8/6/5/9/elternbrief_zum_umbau_der_heinrich.pdf](https://daten.verwaltungsportal.de/dateien/news/1/0/3/8/6/5/9/elternbrief_zum_umbau_der_heinrich.pdf) | Adresse und Ressourcentyp ermittelt |
| D72 | [Klima macht Schule im Stadtradio](https://www.heinrich-grupe-schule.de/news/1/1228388/nachrichten/klima-macht-schule.html) | [https://www.stadtradio-goettingen.de./beitraege/umwelt_und_verkehr/klimaschutz_im_klassenzimmer_vier_jahre_klima_macht_schule_in_rosdorf/](https://www.stadtradio-goettingen.de./beitraege/umwelt_und_verkehr/klimaschutz_im_klassenzimmer_vier_jahre_klima_macht_schule_in_rosdorf/) | Adresse und Ressourcentyp ermittelt |

## Weitere externe Quellen und Einbettungen

| Bezug | Gesicherte URL / Status |
| --- | --- |
| Zeugnisse: Kultusministerium | [https://www.mk.niedersachsen.de](https://www.mk.niedersachsen.de) |
| Zeugnisse: Deutsches Schulportal | [https://deutsches-schulportal.de](https://deutsches-schulportal.de) |
| Zeugnisse: Lernkultur | [https://www.learnlearningwithcaroline.com](https://www.learnlearningwithcaroline.com) |
| Zeugnisse: ARD-Mediathek | [https://www.ardmediathek.de](https://www.ardmediathek.de) — Bestandsseite enthält keinen eindeutigen Episoden-Deep-Link |
| Sportabzeichentour | `sat1regional.de` als einwilligungsabhängige Einbettung erkennbar; konkrete Video-/Embed-Adresse nicht im verfügbaren Export enthalten |
| Förderung der Website | [http://www.Niedersachsen-vernetzt.de](http://www.Niedersachsen-vernetzt.de) |
| Impressum: Azubi-Projekte | [https://www.azubi-projekte.de](https://www.azubi-projekte.de) — Link zur Website-Erstellung, kein Schulangebot |

**Google-Maps-Originaleinbettung aus der ZIP:**

[https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.4978316759357!2d9.898801376899572!3d51.50408211094539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a4d34c8d2e2d27%3A0x60f6168d2e11e482!2sLange%20Str.%2017%2C%2037124%20Rosdorf!5e0!3m2!1sde!2sde!4v1717578675579!5m2!1sde!2sde](https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.4978316759357!2d9.898801376899572!3d51.50408211094539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a4d34c8d2e2d27%3A0x60f6168d2e11e482!2sLange%20Str.%2017%2C%2037124%20Rosdorf!5e0!3m2!1sde!2sde!4v1717578675579!5m2!1sde!2sde)

# CHATGPT-RELAUNCH-BRIEFING

## Direkt nutzbarer System-/Projektkontext

Du bist GPT-6.1 Sol mit hoher Reasoning-Einstellung und arbeitest als Senior Webdesigner, UX-Architekt und Full-Stack-Entwickler. Entwickle im vorgesehenen GitHub-Repository einen vollständig neu konzipierten deutschsprachigen Webauftritt für die Heinrich-Grupe-Schule Rosdorf. Dieses Briefing ist deine fachliche Inhaltsbasis; die angehängte ZIP ist ein Startseiten-/Ressourcenexport und kein vollständiger Website-Crawl.

**Du hast freie Hand bei Design, UX, Code-Architektur, Technologieauswahl, Informationsarchitektur, Layout, Typografie, Farbgestaltung und Komponenten.** Du darfst Seiten zusammenführen, Inhalte neu ordnen und vorhandene Darstellungen grundsätzlich neu gestalten. Bewahre dabei die fachlichen Informationen, ihre Quellen, Dokumentziele und Bildzuordnungen. Übernimm keine alten CSS-/CMS-Strukturen nur deshalb, weil sie im Export vorhanden sind.

Die Schule ist eine Grundschule mit Schulkindergarten, verlässlichem Vormittagsangebot und offenem Ganztag in Rosdorf. Schwerpunkte: individuelle Entwicklung, Vielfalt, Natur/Umwelt, Bewegung, Kreativität, Beteiligung und Kinderschutz. Das Motto „Bunt wie das Leben“ und das Wachstumsmotiv sind Identitätsanker. Hauptzielgruppe sind Eltern; Kinder, neue Familien, Mitarbeitende, Förderverein und Kooperationspartner benötigen ebenfalls verständliche Zugänge.

Priorisiere Kontakt, Tagesablauf, Ganztag, Speiseplan, Krankmeldung über SchoolFox, Schulanmeldung, Downloads, Beratung und aktuelle Hinweise. Führe die beiden Nachrichtenbereiche der Startseite zusammen. Erhalte alle 33 archivierten Meldungen als datierte Beiträge mit stabilen URLs oder dokumentierten Weiterleitungen. Vermeide leere Surftipps- und Galerie-Übersichten.

Nutze strukturierte Inhalte für `schoolSettings`, Personen/Rollen, schuljahresbezogene Klassen, Seiten, Nachrichten, Termine, Dokumente und Medien. Dokumente benötigen mindestens Titel, Original-URL, Kategorie, Sprache, Schuljahr/Stand und Quellenbezug; Medien mindestens Original-URL oder Exportpfad, Seitenzuordnung, Beschreibung und Auflösungsstatus. Die Namen sind mögliche Modelle, keine vorgeschriebene Codearchitektur.

Implementiere einen responsiven Auftritt mit zugänglicher Navigation, klaren Überschriften, Tastaturbedienung, gut lesbaren Kontrasten und zugänglichen Formularen. Stelle Zeiten und wichtige Elterninformationen als HTML dar, zusätzlich zu Original-PDFs/Grafiken. Plane optimierte Bilder, SEO-Metadaten und sinnvolle Leer-, Fehler- und Erfolgszustände. Richte die Lösung auf WCAG 2.2 AA aus und dokumentiere die tatsächliche Prüfung; behaupte keine Konformität ohne Nachweis.

Erhalte jede im Medienregister gesicherte Originaladresse exakt, einschließlich Query-Parameter und Kodierung. Verwende die dokumentierten Bildkontexte. Lade bei zulässiger Wiederverwendung Bilder lokal oder über die Originaladresse; stelle passende Alternativtexte bereit. Speichere das Original-URL-Mapping auch bei lokaler Optimierung. Bildrechte/Einwilligungen sind durch den Schulbetreiber zu bestätigen, nicht aus öffentlicher Sichtbarkeit abzuleiten. Nutze die lokale Logo-Datei, falls ihre Remote-Adresse weiter unbekannt bleibt. Erfinde keine Galerieadressen und keine Ersatzfotos, die reale Personen oder Räume vortäuschen.

Behandle alle im Konfliktregister genannten Angaben als offene redaktionelle Punkte. Neue HTML-Seiten und das Formular 2026/27 sprechen für 14:30/15:30 Uhr Ganztag und 4,80 Euro Essen; ältere PDFs nennen andere Werte. Die Vertragsbindung/Kündigungsfrist, Beratungsdaten, Sekretariatslage, Team-/Klassenstände und Beschlusslage der Zeugnisumstellung müssen bestätigt werden. Kennzeichne Quellenstände; korrigiere Widersprüche nicht durch Vermutung. Veröffentliche keine erfundenen Termine, Anmeldefristen, Schülerzahlen, Zertifikate oder abgeschlossenen Baumaßnahmen.

SchoolFox bleibt ein externer Kommunikationsweg. Ein öffentlicher Live-Vertretungsplan, RSS-Feed oder sichtbarer Newsletterdienst sind nicht belegt. Ein Kontaktformular muss einen echten Versandweg besitzen, serverseitig validieren und verständliche Rückmeldungen liefern. Bis ein Versandweg vorhanden ist, verwende eine ehrliche Kontaktalternative. Lade Google-/Videoeinbettungen erst nach Nutzeraktivierung. Passe Datenschutz/Impressum an die tatsächlich verwendete Infrastruktur an und dokumentiere nötige fachliche Freigaben.

Arbeite innerhalb der vorhandenen Repository-Regeln. Halte Inhalt und Darstellung trennbar, dokumentiere Installation, Pflege, Contentmigration, alte/neue URL-Zuordnung und ungelöste Ressourcen. Prüfe Navigation, responsives Layout, Formularverhalten, Dokument-/Bildlinks, Tastaturbedienung und Produktionsbuild. Lege keine Zugangsdaten ins Repository. Das Ergebnis muss mit realen erfassten Inhalten reviewbar sein; unaufgelöste Quellen bleiben ausdrücklich gekennzeichnet.

## Abnahmekriterien

- Alle Navigationsziele des Bestands besitzen eine dokumentierte neue Zuordnung, Weiterleitung oder begründete Bereinigung.
- Die Stammdaten sind konsistent; Schuljahre, Planungsstände und historische Beiträge sind erkennbar.
- Alle 33 Nachrichten und alle ermittelten Dokument-/Bildverweise sind erhalten beziehungsweise nachvollziehbar migriert.
- Eltern erreichen die wichtigsten Alltagsthemen unmittelbar über klare, mobile Wege.
- Dateien sind korrekt beschriftet; „Satzung der Schule“ ist als Fördervereinssatzung korrigiert.
- Kein Formular meldet Versand ohne tatsächliche Zustellung; Fremdeinbettungen laden kontrolliert.
- Fehlende Galerie-/Logo-Originaladressen und unlesbare Dokumentdetails werden transparent dokumentiert.
- Repository enthält Pflegeanleitung, URL-Mapping und angemessene technische/visuelle Prüfbelege.
