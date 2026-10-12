# Heinrich-Grupe-Schule Rosdorf

**Projektkontext:** Die Website unter https://sl3ndrr.github.io/HGS/ ist zunächst eine Konzeptvorstellung, kein freigegebener offizieller Schulauftritt. Origin `https://sl3ndrr.github.io`, Projektpfad `/HGS/`. Verbindliche Entscheidungen, Paketfolge AP01–AP11 und aktuelle Übergabe: [docs/IMPLEMENTATION.md](docs/IMPLEMENTATION.md). Die nachfolgenden Bestandsangaben beschreiben die ursprüngliche Relaunch-Umsetzung. Der ergänzende 404-Fix berücksichtigt den Projektpfad und veröffentlicht die Konzeptvorschau. Die vollständigen Folgepakete, insbesondere redaktionelle Konzeptkennzeichnung (AP07), bleiben gesondert. Konzept-Builds bleiben `noindex`; das ist kein Zugriffsschutz.

Vollständige Relaunch-Umsetzung auf Grundlage des Briefings vom **12.10.2026**: **65 Inhaltsseiten plus Fehlerseite**, alle **33 Nachrichten**, **57 unveränderte Bildadressen** und **72 Dokumentverweise auf 70 Ressourcen**. Mobile Elternwege, mehrsprachige SchoolFox-Dokumente, Suche, Nachrichten- und Dokumentfilter sind integriert. **Konzeptvorschau unter [sl3ndrr.github.io/HGS/](https://sl3ndrr.github.io/HGS/); kein freigegebener offizieller Schulauftritt.**

## Starten

Voraussetzung: **Node.js 22 oder neuer**. Der Website-Build hat keine externen Paketabhängigkeiten; eine Paketinstallation ist dafür nicht nötig.

```sh
npm run dev
```

Die Website läuft unter `http://localhost:4173/`. `PORT=3000 npm run dev` verwendet einen anderen Port. Der Entwicklungsserver erzeugt beim Start die Seiten neu; nach Inhaltsänderungen erneut `npm run build` ausführen und im Browser aktualisieren.

```sh
npm run build
npm run check
npm test
npm start
```

`npm start` liefert den bestehenden Produktionsbuild aus `dist/` aus. Der Node-Server unterstützt 301-Weiterleitungen einschließlich alter Query-Routen, die echte 404-Seite, GET/HEAD sowie Sicherheitsheader. Er benötigt keinen Kontakt- oder Datenbankdienst.

## Technik & Aufbau

- `content/settings.json`: Stammdaten, Logo-Datei, exakte Original-Kartenadresse.
- `content/pages.mjs`: kompatibler zentraler Export; redaktionelle Texte, Abschnitte, Querverbindungen und Dokumentzuordnungen liegen nach Themen in `content/pages/`. Reihenfolge und IDs erhalten.
- `content/schedule.mjs`: vorhandener Zeitplan mit unverändertem Quellenstand.
- `content/people.json`, `classes.json`: Personen/Rollen und Klassen mit explizitem Quellenstand.
- `content/news.json`: 33 Beiträge, stabile IDs/URLs, Veröffentlichungsdatum, gesondertes Ereignisdatum (oder `null`), Schuljahreszuordnung und historische Einordnung.
- `content/documents.json`: zentrale Ressourcen; Thema, Sprache, Schuljahr/Stand, Originaladresse und sämtliche Quellseiten.
- `content/document-references.json`: alle 72 ursprünglichen Verweise, auch bei zusammengeführten Dokumenten.
- `content/media.json`: alle 57 Originaladressen, Kontext, Alttext und optional lokale Datei/Varianten.
- `content/editorial-review.json`: 15 im Briefing erfasste Konflikte. Weitere Integrationsaufgaben in [docs/REDAKTION.md](docs/REDAKTION.md).
- `content/navigation.json`, `redirects.json`: Navigation und 189 dokumentierte Altrouten.
- `src/components.mjs`: wiederverwendbare, HTML-escapende Komponenten.
- `src/renderers/`: Seitengerüst, Abschnitte und Spezialseiten; Rendering ohne Dateioperationen.
- `public/assets/`: CSS, progressive JavaScript-Ergänzungen und eigene dekorative SVG-Illustrationen.
- `scripts/build.mjs`: statischer Generator mit Metadaten, Sitemap, Fehlerseite, Suchindex und Hostingdateien.
- `docs/RELAUNCH-BRIEFING.md`: unveränderte vollständige Arbeitsgrundlage.
- `docs/IMPLEMENTATION.md`: dauerhafte Entscheidungen, Paketstatus und Prüfevidenz für Folgepakete.

Mehrseitiges, semantisches HTML mit echten Links hält Navigation, Inhalte und Downloads auch ohne JavaScript nutzbar. JavaScript ergänzt Suche, Filter, mobile Menüs und die bewusste Aktivierung externer Inhalte. Keine Client-Routing-Abhängigkeit, keine Systemduplikation für Mobilgeräte, kein Tracking und keine extern geladenen Schriften. Farben und CSS-Komponenten sind in [docs/DESIGN.md](docs/DESIGN.md) erklärt.

## Inhalte pflegen

1. Zuständige Redaktion bestätigt fachlichen Stand, insbesondere Schuljahr, Personal und Zeiten.
2. Die betreffende Inhaltsdatei ändern. Bestehende Abschnitts- und Beitrags-IDs möglichst beibehalten.
3. Dokument: Originaladresse exakt erfassen; `referenceIds` und `sources` bei Mehrfachverlinkungen ergänzen. Nicht bekannte Sprache/Versionsangaben ausdrücklich kennzeichnen statt erraten. Dokumentverknüpfungen über die Referenz-ID in `pages.mjs` setzen.
4. Nachricht: stabile neue ID/URL, tatsächliches Veröffentlichungsdatum und separat belegtes Ereignisdatum eintragen. Ereignisdatum sonst `null`; Schuljahresbasis angeben. Fotos nur anhand bestätigten Kontexts zuordnen.
5. `npm run build`, `npm run check`, `npm test` ausführen und die betroffenen Seiten im Browser prüfen.

Die Archivtexte sind wesentliche, sprachlich aufbereitete Zusammenfassungen aus dem Briefing, keine behauptete wortgetreue Volltextmigration. Originalbeiträge bleiben an jedem Artikel erreichbar. Alte Zeitangaben, fehlende Termine und die nicht belegte Zeugnisentscheidung wurden nicht in neue Fakten umgedeutet.

`npm run import:briefing` regeneriert die importierten Register aus dem archivierten Briefing und **überschreibt redaktionelle Änderungen an diesen Registern**. Für laufende Pflege die JSON-Dateien direkt ändern. Die selbst verfassten Webtexte werden dadurch nicht überschrieben.

## Bilder, Logo und fehlende ZIP

In dieser Sitzung lag ausschließlich die Markdown-Datei vor. **Die im Auftrag erwähnte ZIP wurde nicht bereitgestellt.** Deshalb konnte das Original-Schullogo nicht daraus übernommen werden. Die Namensdarstellung ist bewusst kein erfundenes Logo. Botanische SVGs sind als Illustration gekennzeichnet und stellen keine realen Schulräume oder Personen dar.

Die Originalfotos lassen sich einzeln bewusst aktivieren. Ohne lokale Datei erfolgt kein Kontakt zum Medienanbieter vor dem Klick. Bei gesperrten oder fehlenden Bildern bleibt die Originaladresse erreichbar. Die vollständige Medienmigration ist damit **noch nicht abgeschlossen**.

Nach Lieferung der ZIP:

```sh
python3 scripts/inspect-export.py /absoluter/pfad/export.zip
npm run build
```

Das Hilfsskript inventarisiert das Archiv, prüft unsichere Pfade und übernimmt ausschließlich das eindeutig gefundene Original-PNG-Logo. Andere Dateien werden nicht blind übernommen. Bildzuordnungen anhand HTML-Export/Medienregister prüfen und `localFile` ergänzen. Galerie-Einzelbilder benötigen einen vollständigen Galerie-/CMS-Export.

Nach Bestätigung der Bildrechte und Einwilligungen können Medien von den exakt gespeicherten Originaladressen lokal synchronisiert werden:

```sh
npm run media:sync -- --rights-confirmed --id=B02
```

Ohne `--id` werden alle 57 Medien versucht. Das Skript lädt keine geratenen Ressourcenadressen. Optional installiertes `sharp` erzeugt WebP-Varianten mit 480/960/1440 Pixeln; ohne `sharp` wird das Original gespeichert. `variants`, Abmessungen, `localFile` und Originaladresse bleiben im Mapping. **Dieses Skript wurde hier nicht mit einer Rechtebestätigung ausgeführt.** Direkte Dateiabrufe sind in der Arbeitsumgebung gesperrt.

## Kontakt, Datenschutz & Integrationen

Kein Versanddienst ist konfiguriert. Die Website zeigt deshalb ausdrücklich Telefon- und E-Mail-Kontakt und meldet keinen angeblichen Formularversand. SchoolFox bleibt ein gesonderter Kommunikationsweg. Die Website nimmt weder Krankmeldungen noch Schulanmeldungen entgegen.

Google Maps wird erst nach Aktivierung auf der Kontaktseite eingebettet und kann wieder entfernt werden; die Einwilligung wird nicht gespeichert. Ein SAT.1-Video wird mangels belegter Embed-Adresse nicht eingebunden. Suche und Filter speichern keine personenbezogenen Angaben.

Impressum und Datenschutzhinweise beschreiben diese Technik und sind als **fachlich zu prüfende Relaunchfassungen** gekennzeichnet. Hosting, Verantwortlichkeit, Datenschutzkontakt, Protokolle, Fristen, Bildrechte und etwaige Drittlandübermittlung müssen vor öffentlichem Betrieb bestätigt werden. Alte PortUNA-Texte und Speicherfristen werden nicht automatisch auf neue Infrastruktur übertragen.

Für ein späteres Kontaktformular werden Versanddienst und Secrets außerhalb des Repositories, serverseitige Validierung, Spamabwehr, Fehler-/Erfolgsrückmeldungen und eine tatsächliche Zustellprüfung benötigt. Ein solches Formular ist keine Voraussetzung für die hier umgesetzte, funktionierende Kontaktalternative.

## Build & spätere Bereitstellung

`dist/` ist reproduzierbare Ausgabe und wird nicht mit Git versioniert. Sie kann von einem üblichen statischen Host oder dem mitgelieferten Node-Server ausgeliefert werden. Beim Node-Betrieb: `npm run build`, danach `npm start`, Reverse Proxy/TLS und Hostingprotokolle fachlich/technisch konfigurieren.

**Öffentliche Veröffentlichung nur nach ausdrücklicher Anweisung.** Standardmäßig sind Suchmaschinenindexierung und Crawling deaktiviert. Erst für eine freigegebene Veröffentlichung:

```sh
SITE_URL=https://www.heinrich-grupe-schule.de BASE_PATH=/ RELEASE_READY=1 npm run build
```

Der Canonical-Origin ist standardmäßig `https://sl3ndrr.github.io`; `SITE_URL` setzt ausschließlich den Origin, `BASE_PATH` den Projektpfad. Der Pages-Workflow verwendet `/HGS/` und erzwingt Konzept-Builds mit `RELEASE_READY=0`. Die Sitemap wird ohne erfundenes `lastmod` erzeugt.

`dist/_redirects` enthält pfadbasierte Regeln für kompatible statische Hosts. **Query-abhängige Altrouten** (Nachrichtenarchiv und Kontaktformular) benötigen bei rein statischem Hosting zusätzliche Hostregeln; das vollständige Mapping liegt in `content/redirects.json`. Der Node-Server setzt auch diese Fälle korrekt um. Echte externe HTTP-301 am ursprünglichen Host benötigen Kontrolle über diesen Ausgangshost und sind AP10; lokale Tests und Hostdateien belegen diese externe Umstellung nicht. `_headers` enthält grundlegende Header; CSP und TLS müssen beim jeweiligen Host konfiguriert werden. Die Node-Auslieferung setzt zusätzlich eine restriktive Content Security Policy.

Für einen lokalen Build mit dem GitHub-Pages-Projektpfad:

```sh
BASE_PATH=/HGS/ SITE_URL=https://sl3ndrr.github.io RELEASE_READY=0 npm run build
npm run check
npm test
npm start
```

Danach `http://localhost:4173/HGS/` öffnen. `npm run dev` ohne diese Variablen
verwendet weiterhin `/`.

## Prüfung & Screenshots

**Abschließender Chromium-Lauf erfolgreich:** 20 Ansichten und 16 Funktionsprüfungen. Fünf Node-Tests und 3.371 interne Verweise bestehen ebenfalls. Die tatsächlich ausgeführten Prüfungen sowie Grenzen stehen in [docs/QA.md](docs/QA.md). GitHub Actions führt Build, Inhalts-/Linkprüfung und Browserprüfung aus und legt Screenshots samt maschinenlesbarem Bericht als Artefakt `hgs-browser-quality` ab. Der Workflow veröffentlicht nach erfolgreichen Prüfungen auf `main` die noindex-Konzeptvorschau auf GitHub Pages; PR-Läufe veröffentlichen nichts.

Browserprüfung lokal optional (separate Testabhängigkeit, nicht für den Build erforderlich):

```sh
npm install --no-save --ignore-scripts playwright@1.62.1
npx playwright install --with-deps chromium
npm run build
node scripts/browser-qa.mjs
```

Geprüfte Größen: 320×740, 390×844, 768×1024 und 1440×1000. Der Test erzeugt 20 vollständige Seitenscreenshots plus vier Startseiten-Ausschnitte; er prüft horizontales Scrollen, Ressourcen, Konsolenfehler, Tastaturmenüs, Sprunglink, mobile Touch-Ziele, Suche, Filter, Kontaktalternative, externe Aktivierung, reduzierte Bewegung, JavaScript-Ausfall und Routing. Die automatisierten Tests ersetzen keine vollständige WCAG-2.2-AA-Prüfung und keine redaktionelle Freigabe.

## Visuelle Vorschau

Die Screenshots stammen aus dem erfolgreich geprüften Build; dies sind keine Design-Mockups.

![Startseite Desktop](docs/qa/browser/home-1440-viewport.png)

[Startseite mobil](docs/qa/browser/home-390-viewport.png) · [Ganztag mobil](docs/qa/browser/ganztag-390.png) · [Downloads mobil](docs/qa/browser/downloads-390.png) · [Kontakt mobil](docs/qa/browser/contact-390.png)

Alle 24 Screenshots und der Prüfbericht sind in `docs/qa/browser/` dauerhaft versioniert.

