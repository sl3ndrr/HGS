# Umsetzung und Paketübergabe

Diese Datei hält verbindliche Projektentscheidungen und den nachgewiesenen
Paketstand fest. Sie beschreibt eine Konzeptvorstellung, keine Freigabe eines
offiziellen Schulauftritts. Das Schreiben dieser Dokumentation erzeugt keine
zusätzliche Freigabeanforderung für die Konzeptarbeit.

## Feststehende Entscheidungen

- Ziel-Origin: `https://sl3ndrr.github.io`; Projektpfad: `/HGS/`.
  Konzeptadresse: `https://sl3ndrr.github.io/HGS/`.
- Konzeptmodus: kein freigegebener offizieller Schulauftritt. Konzept-Builds
  bleiben `noindex`. `noindex` ist kein Zugriffsschutz.
- Zusammenfassungen der 33 historischen Nachrichten reichen aus; eine
  wortgetreue Volltextmigration ist nicht gefordert.
- Keine Schulangaben, Personen, Fristen, Termine, bestätigten Entscheidungen
  oder Rechtefreigaben erfinden. Quellenstände und redaktionelle Konflikte
  erhalten. Original-Medien- und Dokumentadressen bleiben bytegenau.
- Node 22+; progressive HTML/CSS/JS; keine Produktionspaketabhängigkeiten.
  Inhalte unter `content/`, gemeinsame Renderer unter `src/`.
  Keine neue Frameworkarchitektur.
- Echte HTTP-301 für Altrouten benötigen Kontrolle über den Ausgangshost.
  JavaScript oder Meta-Refresh erfüllen AP10 nicht. Lokale Node-301-Tests und
  generierte Hostregeln belegen keine Weiterleitung am ursprünglichen Host.
- Jedes Paket startet vom dann aktuellen `main` nach seinen Vorgängern, auf
  eigenem Branch mit reviewbarem PR. Merge und Deployment sind außerhalb
  dieser Pakete, sofern nicht ausdrücklich beauftragt.
  Keine unaufgeforderten DNS- oder Kontoeinstellungen.

## Paketfolge

AP01–AP09 werden nacheinander umgesetzt. AP10 benötigt zusätzlich einen
kontrollierten Ausgangshost. AP11 setzt AP01–AP09 voraus und weist den externen
AP10-Status gesondert aus. Die Tabelle behauptet keinen Merge-Status.

| Paket | Umfang | Voraussetzung | Nachgewiesener Paketstand |
| --- | --- | --- | --- |
| AP01 | Codebasis/Projektentscheidungen | keine | integriert: PR #2 am 12.10.2026 gemergt; Prüfevidenz unten |
| AP02 | Datenverträge/Migrationsinventar/Import | AP01 | implementiert auf eigenem Branch; lokale Prüfevidenz unten, PR-CI folgt; nicht gemergt |
| AP03 | Projektpfad/statische Auslieferung | AP02 | offen |
| AP04 | Suche/dynamische Listen | AP03 | offen |
| AP05 | Barrierefreiheit/Interaktionen | AP04 | offen |
| AP06 | Listen-UX | AP05 | offen |
| AP07 | Konzeptmodus/Redaktion/Medien | AP06 | offen |
| AP08 | CI/QA | AP07 | offen |
| AP09 | Pages-Workflow | AP08 | offen |
| AP10 | externe echte HTTP-301 | Mapping; kontrollierter Ausgangshost | extern blockiert: Hostkontrolle nicht nachgewiesen |
| AP11 | Abschlussreview/Konzeptrelease | AP01–AP09; AP10 separat ausweisen | offen |

## Übergabekonvention

Pro Paket festhalten: Ausgangs-Commit und Branch/PR, Änderungen, tatsächlich
ausgeführte Befehle mit Ergebnis und Beleg, nicht ausgeführte Prüfungen,
Blocker und Einstieg für das Folgepaket. Vorgeschlagene Prüfungen von
ausgeführten trennen. „Erledigt“ nur mit Belegen; „extern blockiert“ ist
zulässig. Merge nur nach bestätigtem Repository-Status vermerken. Frühere
Verbesserungen gegen aktuellen Code prüfen und erhalten, statt historische
Audit-Befunde ungeprüft zu übernehmen.

## AP01: Lesbare Codebasis und dauerhafte Entscheidungen

Ausgang: am 12.10.2026 über GitHub abgefragter `main`,
`9c9207ea2d846d755decfde0cc69853d1d4aa7f5`. Der aktuelle Branch zeigte zu
Beginn tatsächlich auf diesen Commit; er wurde nicht als historische Basis
fest vorgegeben. Branch: `audit/01-foundation`, [PR #2](https://github.com/sl3ndrr/HGS/pull/2).
AP01 hat keine Vorgänger.

### Änderungen und Pflegewege

- Reine Formatierung in einem eigenen Commit, Refactoring separat.
  Zwei Leerzeichen, lesbare Listen und HTML-Fragmente. Lange redaktionelle
  Strings bleiben zusammen, damit ihr Text unverändert ist.
- `scripts/build.mjs` liest Register und schreibt Build-Dateien.
  `src/renderers/index.mjs` bindet den Rendering-Kontext einmalig.
  `shell.mjs` rendert Gerüst/Metadaten, `page.mjs` redaktionelle Seiten,
  `sections.mjs` Abschnitte, `special-pages.mjs` besondere Seitentypen;
  `home.mjs`, `article.mjs`, `error.mjs` die weiteren Seitenformen.
  Renderer führen keine Dateioperationen aus.
- `content/pages/` trennt Unsere Schule, Schulalltag, Eltern, Schulleben,
  Mitmachen und Service. `content/pages.mjs` exportiert weiterhin `pages`
  und `quickLinks` in derselben Reihenfolge. Exporte von
  `src/components.mjs` bleiben kompatibel. Der vorhandene Zeitplan liegt
  unverändert in `content/schedule.mjs`.
- HTML-Fragmente werden mit `join('')` verbunden: Quellcodeumbrüche fügen
  keinen Leerraum in Texte oder Inline-Elemente der ausgelieferten Seite ein.
- Keine neue Paketabhängigkeit. Einmalige Formatierung/AST-Prüfung mit dem
  bereits in der Arbeitsumgebung vorhandenen Babel-Parser/Generator aus
  Playwright; er gehört nicht zum Build und wird nicht importiert.
  Prettier-Abruf mit HTTP 403 gesperrt; keine Abhängigkeit hinzugefügt.
  Für weitere Änderungen gelten die dokumentierten Codekonventionen.

### Tatsächlich ausgeführte Prüfungen

- Node `v24.19.0`: `npm run build`, `npm run check`, `npm test` vor der
  Änderung, nach Formatierung und nach Refactoring erfolgreich.
  65 Inhaltsseiten plus 404, 66 HTML-Dateien, 3.371 interne Verweise,
  189 gültige Weiterleitungsziele, fünf bestandene Tests.
- Vorher-/Nachher-Ausgaben in getrennten temporären Verzeichnissen verglichen:
  gleiche 76 Dateipfade; 74 Dateien bytegleich, darunter sämtliche 66 HTML-Dateien,
  Suchindex, Sitemap, robots.txt, Redirect-Dateien, Header und SVGs.
  Seiteninhalt, Reihenfolge, interne Ziele und Metadaten sind damit identisch.
- Einzige unterschiedliche Build-Dateien: `assets/site.css`, `assets/site.js`
  durch Formatierung. CSS-Tokenfolge einschließlich Selektoren, Werte, Strings
  und Kommentare gleich; JavaScript-AST nach Entfernen von Quellpositionen
  und Schreibweisen-Metadaten gleich. Beleg:
  [qa/ap01/build-comparison.json](qa/ap01/build-comparison.json).
- `pages` und `quickLinks` gegen ursprünglichen Export tief verglichen;
  Komponenten-Exportnamen gleich. Lokale Foto-/Varianten- und fehlende
  Medienzweige zusätzlich gegen ursprünglichen Renderer verglichen.
- `git diff --check` erfolgreich.
- `node scripts/browser-qa.mjs` lokal ausgeführt, aber vor Browserprüfungen
  abgebrochen: Chromium-Executable fehlt. Kein lokaler Browsererfolg behauptet.
  Diese lokale Werkzeuglücke wurde durch den erfolgreichen PR-CI-Lauf geschlossen.

Vergleich wiederholen: Ausgang und Paketbranch in zwei temporäre Checkouts
legen, mit gleicher Node-Version und identischen `SITE_URL`-/`RELEASE_READY`-
Werten bauen; `diff -qr` der beiden `dist/` ausführen. Erwartet sind nur
Formatunterschiede bei CSS/JS. HTML nicht normalisieren: volle Bytegleichheit
ist hier der stärkere Nachweis. Für CSS/JS wurde zusätzlich die Tokenfolge
beziehungsweise der AST verglichen; der verwendete Parser ist ein Werkzeug
der Arbeitsumgebung, keine zusätzliche Projektvoraussetzung.

### CI-Beleg und visueller Abgleich

[GitHub Actions 38282908095](https://github.com/sl3ndrr/HGS/actions/runs/38282908095)
vom 12.10.2026 erfolgreich, geprüfter Code-Head
`c25ada459f179e14f686578e41d1182031bbe516`.
Node 22.23.3: Build, Inhalts-/Linkprüfung und fünf Tests erfolgreich.
`node scripts/browser-qa.mjs` erfolgreich: 20 Ansichten der fünf Seitentypen
bei 320, 390, 768 und 1440 Pixeln sowie 16 Funktionsprüfungen.
Startseiten-Ausschnitte bei 1440 und 390 Pixeln zusätzlich visuell angesehen.
Weitere Screenshots wurden hier nicht manuell als geprüft ausgegeben.
Kein umfassender WCAG-, PDF-, Medienrechte- oder Freigabenachweis.

Artefakt `hgs-browser-quality`, ID `11762350788`: 24 Screenshots und
Browserbericht; Aufbewahrung bis 11.11.2026. Dauerhafter Lauf-/Lognachweis:
[qa/ap01/ci-evidence.json](qa/ap01/ci-evidence.json).
Dieser abschließende Evidenzcommit ändert nur Dokumentation.
Der reine Formatierungscommit `2c1e31a` wurde zusätzlich für alle zwölf
betroffenen JavaScript-Module auf AST-Gleichheit geprüft.
Refactoring getrennt in `6db1714` und `c25ada4`.
Zum AP01-Abschluss war der PR offen und nicht gemergt; damals wurde keine Bereitstellung ausgeführt. PR #2 wurde später am 12.10.2026 um 20:38 UTC gemergt (Main `73066c6a9d6aed36dd04c198667b3b9f7ccd8e0b`).

### Grenzen und nächste Übergabe

AP01 ändert weder Gestaltung noch fachliche Inhalte. Konflikte, fehlende
Export-ZIP/Logo-/Galeriedaten, Medienrechte und externe Verfügbarkeitsgrenzen
aus `REDAKTION.md` bleiben erhalten.

Zum Abschluss von AP01 verwendete der Code noch root-relative Links und die Originaldomain
für Canonicals; der ergänzende 404-Fix unten behebt diesen Auslieferungsfehler. Die dokumentierte Zieladresse ist die Entscheidung für AP03,
keine Behauptung einer bereits erfolgten Projektpfad-Umstellung. Bestehende
Relaunch-/Unveröffentlicht-Texte auf Inhaltsseiten gehören zu AP07.
`RELEASE_READY=1` gehört nicht zu einem Konzept-Build. Der bestehende Workflow
prüft, deployt aber nicht; Pages-Arbeit gehört zu AP09.

Nächstes Paket: AP02. Nach Integration von AP01 vom aktuellen `main` starten;
`AGENTS.md`, README und diese Datei lesen. Datenverträge und Inventar anhand
unveränderter JSON-Register und `scripts/import-briefing.mjs` prüfen;
zentrale `pages`-/`quickLinks`-Exporte weiterverwenden. AP03–AP09 nicht
vorziehen. AP10 bleibt von nachgewiesener Kontrolle des Ausgangshosts
abhängig. Kein Merge und kein Deployment in AP01 ausgeführt.

## Ergänzender Auftrag: 404 der Konzeptvorschau beheben

Am 12.10.2026 nach AP01 beauftragt: Die Konzeptseite unter
`https://sl3ndrr.github.io/HGS/` erreichbar machen. Das erlaubt für diesen
gezielten Fehlerfix die Integration und Veröffentlichung der Konzeptvorschau.
Es ist keine Freigabe des offiziellen Schulauftritts. Die Paketfolge AP02–AP11
bleibt dokumentiert; die gesamte Abnahme von AP03 oder AP09 wird damit nicht
vorweg als erledigt markiert. Keine DNS-/Kontoeinstellungen geändert.

Ausgang: aktueller Main `73066c6a9d6aed36dd04c198667b3b9f7ccd8e0b`.
Branch `fix/pages-concept-preview`.

- Fehlende Pages-Bereitstellung ergänzt: Nach erfolgreichen Qualitätsprüfungen
  auf `main` wird `dist/` als Pages-Artefakt hochgeladen und mit
  `actions/deploy-pages` veröffentlicht. PR-Läufe veröffentlichen nichts. Nach dem Deployment prüft der Runner
  die öffentliche URL, Ressourcen, noindex, Canonical und echte 404.
  Deploy-Job erhält ausschließlich `pages: write` und `id-token: write`.
- `BASE_PATH=/HGS/`, `SITE_URL=https://sl3ndrr.github.io`,
  `RELEASE_READY=0` im Workflow. Alle Konzeptseiten bleiben `noindex`.
  `noindex` ist kein Zugriffsschutz.
- Interne HTML-Links, lokale Ressourcen, Formularziele, Suchindex und
  Redirect-Ziele werden beim Build mit dem Projektpfad versehen. Die
  Inhaltsregister und Original-Medien-/Dokumentadressen bleiben unverändert.
  Canonicals, OpenGraph, Sitemap und robots.txt verwenden das Konzeptziel.
- Browser-Suche liest den Pfad aus Build-Metadaten. Lokaler Node-Server und
  Link-/Browserprüfungen berücksichtigen den gleichen Auslieferungspfad.
  `.nojekyll` liegt im Artefakt; `dist/index.html` bleibt an dessen Wurzel.
- Keine Produktionsabhängigkeit hinzugefügt. Lokaler Entwicklungsbetrieb
  unter `/` bleibt möglich.

Tatsächlich geprüft, Node 24.19.0: `npm run build`, `npm run check`, `npm test`
für `/` und `/HGS/` erfolgreich: 66 HTML-Dateien, 3.371 interne Verweise,
189 gültige Redirect-Ziele, sieben Tests. HTTP-Test unter `/HGS/` prüft
Startseite, Kontakt, Suche, CSS, JS, Suchindex, HEAD, `/HGS` zu `/HGS/`
und echte 404. `git diff --check` erfolgreich.
Lokaler Browserstart versucht, aber Chromium fehlt in dieser Arbeitsumgebung;
kein lokaler Browsererfolg behauptet. Die Browsermatrix läuft deshalb im PR-CI.
[PR #3](https://github.com/sl3ndrr/HGS/pull/3) nach erfolgreichem PR-CI
[38307771793](https://github.com/sl3ndrr/HGS/actions/runs/38307771793)
gemergt, Main-Commit `71b41c64ef7c9da094bf988738c49330ba01a397`.
Der Main-Lauf [38307950446](https://github.com/sl3ndrr/HGS/actions/runs/38307950446)
hat Build, Linkprüfung, sieben Tests, die Browsermatrix unter `/HGS/`,
Pages-Artefakt, Deployment und Live-HTTP-Prüfung erfolgreich abgeschlossen.
Öffentlich bestätigt: `https://sl3ndrr.github.io/HGS/`, noindex und Canonical,
CSS, JS, Suchindex, Kontakt, Suche mit HTTP 200 sowie echte 404.
Dauerhafter Beleg: [qa/pages/verification.json](qa/pages/verification.json).
Die Cloud-Browser-Navigation war mit `ERR_BLOCKED_BY_CLIENT` gesperrt;
das ist eine Einschränkung dieser Arbeitsumgebung. Die Live-Verifikation
erfolgte im GitHub-Runner, nicht durch eine behauptete lokale Browserprüfung.
Externe 301 am ursprünglichen Host bleiben AP10; Node-Tests beweisen diese
Infrastrukturaufgabe nicht. Bestehende redaktionelle/Mediengrenzen bleiben offen.

## AP02: Datenverträge, Migrationsinventar und sicherer Import

Ausgang: am 13.10.2026 über GitHub abgefragter aktueller `main`,
`74d443b78bcbb49c638d080f90c1f8e34598edb6`. AP01 ist nachweislich als
PR #2 gemergt (`73066c6a9d6aed36dd04c198667b3b9f7ccd8e0b`); der ergänzende
Pages-/Projektpfad-Fix ist ebenfalls integriert. Branch:
`audit/02-content-integrity`. Reviewbarer PR wird unten nach Erstellung verlinkt.
Kein Merge und kein Deployment durch AP02.

### Änderungen

- Eingefrorenes `docs/migration-inventory.json`: IDs und bytegenaue
  Original-/Quellenadressen der 33 Nachrichten, 57 Medien und 72 Verweise
  auf 70 Ressourcen, Nachrichten-Veröffentlichung und Ressourcen-Zuordnungen.
  Briefing und aktueller Bestand stimmen dabei überein. Keine neuen Sollwerte
  geraten; D24/D33 und D32/D70 sind echte Mehrfachverweise, D16/D68 getrennte
  Satzungsressourcen. Historische Inventardaten werden beim Import nie geschrieben.
- `src/validate-content.mjs`, `content-data.mjs`, `migration.mjs` prüfen vor dem
  Build Seiten, News, Dokumente/Referenzen, Medien, Navigation, Klassen/Personen,
  Redirects und redaktionelle Konflikte. Keine festen Live-Mengen mehr.
  Eindeutige Identitäten/Pfade/Anker, Kalenderdaten, bekannte Typen,
  auflösbare Referenzen, sichere Schemen und lokale Pfade. Absichtliche
  Unicode-/kodierte Redirect-Aliasse mit gleichem Ziel bleiben erhalten;
  widersprüchliche Ziele werden abgewiesen. Renderer überspringen unbekannte
  Medien-/Dokument-IDs nicht mehr still. Check prüft zusätzlich HTML-ID-Duplikate.
- Optionale Prüf-/Gültigkeits-/Schuljahres-/Herkunftsangaben unterstützen
  unbekannt/null. Originalquelle, redaktionelle Ergänzung, technische
  Erreichbarkeit und Rechtehinweise sind getrennt dokumentiert. Keine neuen
  vermuteten Metadaten oder Freigaben eingetragen.
- 36 vorhandene Personen erhalten stabile P01–P36; Namen, Rollen, Reihenfolge
  und sonstige Fakten tief gegen main verglichen und unverändert. Keine neue
  Person, keine vermutete Namensgleichheit. Optionale Klassen-`teacherIds`
  bleiben unbefüllt; vorhandene Klassenbeschriftungen sind erhalten.
- Reiner Briefing-Parser und separater Importplan: vollständige Validierung,
  JSON-Review-Diff, eigener Quelldiff, Dry-Run als Standard, Anwendung mit
  `--write`. Erhalt aller lokalen/redaktionellen Nicht-Identitätsfelder nach
  stabilen IDs, zusätzlicher Einträge und Reihenfolge. Erfolgreich geprüfte
  Ergebnisse werden mit vorbereiteten Backups/Journal/Renames ersetzt;
  Fehler rollen vollständig zurück, erkannte Unterbrechungen blockieren
  Build/Check bis zur expliziten Wiederherstellung. Kein Medienabruf.
- Pflegewege: [DATA-CONTRACTS.md](DATA-CONTRACTS.md), [IMPORT.md](IMPORT.md),
  README und QUELLEN aktualisiert. Keine Produktionsabhängigkeit hinzugefügt.

### Tatsächlich ausgeführte Prüfungen

Lokal Node `v24.19.0`, Beleg [qa/ap02/local-evidence.json](qa/ap02/local-evidence.json):

- `npm run build`, `npm run check`, `npm test` auf der Ausgangsversion
  erfolgreich (sieben Tests) und auf AP02 für `/` sowie `/HGS/` erfolgreich:
  65 Inhaltsseiten plus 404, 66 HTML-Dateien, 3.371 interne Verweise,
  189 gültige Redirect-Ziele, **24 bestandene Tests**.
- Gezielt `node --test tests/content-contracts.test.mjs tests/migration.test.mjs
  tests/import.test.mjs`: **21 Tests bestanden**. Zusatzbeitrag in isoliertem
  Checkout besteht den echten Build/Check (34 News, 67 HTML-Dateien).
  Entfernter Altbestand/geänderte Originaladressen scheitern; unzulässige
  Daten, unbekannte Dokument-/Medien-IDs und unsichere Pfade scheitern mit
  Objektbezug auch im tatsächlichen Build. Vorheriger `dist/` bleibt erhalten.
- Importfehler vor dem Schreiben: alle Bestandsdateien bytegleich.
  Schreibfehler nach dem ersten Ersetzen: vollständiges Byte-Rollback.
  Erzwungener Rollbackfehler: Zwischenstand wird blockiert; Wiederherstellung
  nach Prozessende stellt die Bytes wieder her. Kein Überschreiben eines
  zwischen Review und Anwendung geänderten Bestands. Wiederimport und echter
  Import eines Zusatzdatensatzes erhalten lokale Pfade, Varianten,
  Review-/Rechte-/Erreichbarkeitsdaten, Ergänzungen und Reihenfolge.
- `npm run import:briefing -- --dry-run`: null Änderungen, null Schreibvorgänge.
  Testdaten liegen nur in Speicher/temporären isolierten Verzeichnissen;
  veröffentlichte Contentdateien auf Bytegleichheit geprüft und zusätzlich
  nach synthetischen IDs/Markern durchsucht: keine Testmeldungen/Testpersonen.
- Vorher-/Nachher-Builds für `/` und `/HGS/`: alle Ausgabepfade und sämtliche
  Dateien bytegleich. Keine Änderung der UI, Suchindex-Ausgabe oder Metadaten.
  `git diff --check` erfolgreich.
- Direkter Git-Clone versucht, HTTP 403 (Umgebungs-URL gesperrt). Checkout
  über GitHub-Anbindung auf den exakten main-SHA; alle 61 materialisierten
  Textdateien haben die Original-Git-Blob-SHAs. Remote-Basisbaum erhält
  vorhandene Binärdateien/Screenshots unverändert.
- `node scripts/browser-qa.mjs` lokal ausgeführt, vor Browserstart gescheitert:
  Playwright-Paket fehlt (`ERR_MODULE_NOT_FOUND`). Kein lokaler Browsererfolg
  behauptet. Bestehender PR-CI installiert das optionale Werkzeug und führt
  die Browsermatrix aus; sein Ergebnis wird separat ergänzt.

### Grenzen und Übergabe an AP03/AP04

Keine aktuellen Schulangaben, neuen Personen, Termine, Rechtefreigaben oder
Originaladressen erfunden. Quellenbestand, Zusammenfassungen und Konflikte
bleiben erhalten. Technische Validierung ist keine fachliche Identitäts-,
Rechte-, PDF-Inhalts- oder Erreichbarkeitsprüfung. Export-ZIP/Logo/Galerie und
redaktionelle Bestätigungen aus REDAKTION bleiben offen.

Mehrdatei-Renames sind keine globale atomare Dateisystemtransaktion. Bei
Prozess-/Datenträgerproblemen verweigert der Journalmarker die Nutzung eines
erkannten Zwischenstands; nach Ende des Importprozesses `--recover` verwenden.
Gleichzeitige externe Handbearbeitung während des kurzen Ersetzens vermeiden;
kein Strom-/Datenträgerausfall garantiert abgedeckt. Beschädigte Journale oder
nicht verfügbare Backups erfordern Behebung des Dateisystemproblems und Prüfung.

AP03 startet nach Integration von AP02 vom dann aktuellen main. Den bestehenden
`/HGS/`-Fix und noindex-Konzeptmodus erhalten; Datenvalidierung vor allen
Build-Schreibvorgängen belassen. AP04 übernimmt dynamische Mengen-/Jahreslisten
und die UI-Darstellung unbekannter Schuljahre; zulässige Ergänzungen dürfen
nicht wieder durch feste Live-Mengen abgewiesen werden. Das Inventar unverändert
lassen. Neue Personenreferenzen nur bei bestätigter Identität ergänzen.
Externe echte HTTP-301 am ursprünglichen Host bleiben AP10 und benötigen
nachgewiesene Kontrolle dieses Hosts. Keine DNS-/Kontoeinstellungen verändert.
