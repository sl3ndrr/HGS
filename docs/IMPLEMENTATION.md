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
| AP01 | Codebasis/Projektentscheidungen | keine | umgesetzt; Review offen; Prüfevidenz unten |
| AP02 | Datenverträge/Migrationsinventar/Import | AP01 | offen |
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
fest vorgegeben. Branch: `audit/01-foundation`. AP01 hat keine Vorgänger.

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
  PR-CI-Ergebnis wird nach dem Lauf ergänzt.

Vergleich wiederholen: Ausgang und Paketbranch in zwei temporäre Checkouts
legen, mit gleicher Node-Version und identischen `SITE_URL`-/`RELEASE_READY`-
Werten bauen; `diff -qr` der beiden `dist/` ausführen. Erwartet sind nur
Formatunterschiede bei CSS/JS. HTML nicht normalisieren: volle Bytegleichheit
ist hier der stärkere Nachweis. Für CSS/JS wurde zusätzlich die Tokenfolge
beziehungsweise der AST verglichen; der verwendete Parser ist ein Werkzeug
der Arbeitsumgebung, keine zusätzliche Projektvoraussetzung.

### Grenzen und nächste Übergabe

AP01 ändert weder Gestaltung noch fachliche Inhalte. Konflikte, fehlende
Export-ZIP/Logo-/Galeriedaten, Medienrechte und externe Verfügbarkeitsgrenzen
aus `REDAKTION.md` bleiben erhalten.

Der Code verwendet noch root-relative Links und standardmäßig die Originaldomain
für Canonicals. Die dokumentierte Zieladresse ist die Entscheidung für AP03,
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
