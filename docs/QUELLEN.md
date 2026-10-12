# Quellen und Migrationsnachweis

## Verbindliche Grundlage

`RELAUNCH-BRIEFING.md` wurde vollständig gelesen und unverändert im Repository gesichert. Analysestand des bereitgestellten Dokuments: 12.10.2026. Die wesentlichen fachlichen Inhalte sind als Webtexte aufbereitet; es werden keine vollständigen wörtlichen Kopien aller Originalartikel behauptet.

## Zusätzliche gezielte Verifikation

Am 12.10.2026 wurde die öffentliche Startseite `https://www.heinrich-grupe-schule.de/` über das Recherchewerkzeug abgerufen. Sichtbar bestätigt wurden die vorhandene Hauptnavigation, Motto/Wachstumsbezug, die ersten Nachrichten samt Veröffentlichungsdaten sowie Anschrift, Telefon und Schulleitungs-E-Mail. Es wurden keine neuen Personen, Termine, Angebote oder Beschlüsse daraus ergänzt. Der Abruf ist im Sitzungskontext als `turn0view0` dokumentiert; diese interne Referenz ist kein öffentlicher Link.

Das Banner B01 war im Recherchewerkzeug als Bildressource erreichbar. Das Werkzeug stellte keine lokal speicherbare Originaldatei bereit. Der direkte HTTPS-Dateiabruf aus der Entwicklungsumgebung antwortete mit HTTP 403; der Cloud-Browser meldete `ERR_BLOCKED_BY_CLIENT`. Daraus wird nicht geschlossen, dass die Website für normale Besucher unerreichbar ist.

Die erwähnte ZIP lag im bereitgestellten Arbeitsbereich nicht vor. Deshalb wurden weder deren 500 Einträge noch Original-Logo oder offline Bilder hier selbst untersucht. Die Inventarangaben aus dem Briefing bleiben Quellenangaben, keine neuen Prüfbehauptungen.

## Exakte Register

Der nachvollziehbare Import `scripts/import-briefing.mjs` extrahiert unverändert:

- 57 Bildadressen in `content/media.json`, einschließlich doppelter Schrägstriche, URL-Kodierung und Versionsparameter.
- 33 Archivbeiträge in `content/news.json`; Publikation und belegtes Ereignisdatum sind getrennt.
- 72 Dokumentverweise in `content/document-references.json`.
- 70 unterschiedliche Ressourcen in `content/documents.json`, mit allen ursprünglichen Verweisen/Quellseiten.
- 15 redaktionelle Konflikte in `content/editorial-review.json`.

Die 72 Verweise wurden nicht auf 72 angeblich unterschiedliche Dateien umgedeutet. Zwei echte Mehrfachverlinkungen (Schutzkonzept und Infektionsschutz) werden in der zentralen Liste zusammengefasst. Die zwei verschiedenen Satzungs-URLs bleiben getrennt und korrekt benannt. Die zusätzliche fehlerhafte Speiseplanbeschriftung erhält keinen neuen erfundenen Dateipfad.

## Alte und neue URLs

`content/redirects.json` enthält jede erfasste Seitenroute samt neuen Themenzielen und die 33 Nachrichtenrouten. Erkannte kodierte Schreibvarianten und mobile Pfade werden zusammengeführt; als technische Aliasse werden mobile Pfade abgeleitet, ohne zu behaupten, dass jeder einzelne Alias live geprüft wurde. Die Daten enthalten pro Route die Begründung. Der Node-Server berücksichtigt Query-Parameter unabhängig von ihrer Reihenfolge.

Leere Menügruppen werden durch neue Bereichsseiten ersetzt. Surftipps werden wegen fehlender Inhalte zum Schulleben geführt; die nicht abrufbare Partnerangebotsseite wird zu einem ehrlichen Informationsstand bei den Kooperationen geführt. Galerieziele führen zum Fotobereich mit erhaltenem Originalalbumlink und erklärter Exportlücke. Alte technische Druck-/Linkversandansichten werden funktional bereinigt.

Die sitemapbezogenen Hauptthemen, PDF-Leitbild, Kalender, Originalalbum und externen Quellen bleiben auffindbar. Der alte Leitbild-PDF-Link bleibt ein externer Download; er wird nicht durch eine erfundene interne Originaladresse ersetzt.
