# Sicherer Briefing-Import (AP02)

Der Import ergänzt die laufenden Register nach stabilen IDs. Das archivierte
Briefing und `migration-inventory.json` werden niemals geschrieben.
Seitenmodule, Klassen, Personen, Navigation und Redirects werden ebenfalls
nicht importiert; neue Zielrouten müssen bei Bedarf redaktionell ergänzt werden.
Datenverträge: [DATA-CONTRACTS.md](DATA-CONTRACTS.md).

## Review und Anwendung

```sh
npm run import:briefing
npm run import:briefing -- --dry-run
npm run import:briefing -- --dry-run --briefing=/absoluter/pfad/briefing.md
npm run import:briefing -- --write --briefing=/absoluter/pfad/briefing.md
npm run build
npm run check
npm test
```

Ohne `--write` ist der Import ein Dry-Run. Er liest sämtliche Daten, parst die
komplette Quelle und validiert deren Datenverträge/Referenzen. Danach zeigt er
den JSON-Review-Diff; vor jeder Anwendung prüfen zusätzlich das eingefrorene
Inventar und der vollständig zusammengeführte Bestand. Ungültige Quellen
werden auch im Dry-Run mit Exitcode 1 abgewiesen. Historische Originalwert-
Änderungen dürfen nicht durch einen Reimport oder eine Inventarneuberechnung
legitimiert werden.

| Diff-Feld | Bedeutung |
| --- | --- |
| `added` | neue importierte Objekte |
| `preserved` | lokale/redaktionelle Felder, die vom Parserwert abweichen und erhalten bleiben |
| `sourceChanges` | Änderungen der Eingangsquelle gegenüber dem unveränderten archivierten Briefing; getrennt vom lokalen Review-Diff |
| `missingFromSource` | vorhandene Objekte ohne Zeile in der neuen Quelle; bleiben im Bestand erhalten; fehlende historische Zeilen blockieren die Anwendung trotzdem |
| `changes` | konkrete Kandidatenänderungen mit vorherigem/nachherigem Objekt |

Bei ungültiger Struktur kann der Import bereits vor dem Diff abbrechen.
Geänderte historische Originaladressen werden nach dem separat angezeigten
Quelldiff abgewiesen. Ein Quelldiff ist keine automatische fachliche Bestätigung.
Quelltextänderungen an bestehenden Zusammenfassungen/Titeln müssen separat
redaktionell übernommen werden; Reimport überschreibt die lokale Bearbeitung
nicht. Das archivierte Briefing bleibt dabei unverändert.

## Was erhalten bleibt

Vorhandene IDs und lokale Reihenfolge bleiben stabil. Neue Objekte werden
angehängt. Pro ID bleiben alle vorhandenen Nicht-Identitätsfelder erhalten,
auch zukünftige Erweiterungsfelder: Medienpfade, Varianten, Abmessungen,
Alttexte, Rechte-/Erreichbarkeitshinweise, Review-/Gültigkeitsdaten,
Zusammenfassungen, Absätze, Kategorie, Schuljahr, aktuelle Dokumenttitel und
Notizen. Zusätzliche lokale Einträge werden nicht gelöscht. Dokumente behalten
zusätzliche `referenceIds`/`sources`; neue belegte Zuordnungen werden vereinigt.

Die expliziten Quellidentitätsfelder stehen in `src/import-briefing.mjs`:
News-ID/Quell-URL/Veröffentlichung, Medien-ID/Original-URL/Originalquelle,
Dokument-ID/Original-URL/Originalquelle/Originaltitel, Konflikt-ID/Thema/Evidenz.
Historische Identitätswerte müssen weiterhin dem Inventar entsprechen.
Der Import parst keine lokalen Zuordnungen aus Namensähnlichkeiten und
setzt keine Freigabe-/Reviewdaten zurück.

Ein unveränderter Reimport ist ein No-op: keine Neuformatierung der Bestands-
dateien und keine Transaktion. Eine Quellenänderung kann im Diff erscheinen,
auch wenn alle betroffenen lokalen Texte bewusst erhalten bleiben.

## Transaktion, Fehler und Wiederherstellung

Erst nach erfolgreicher Validierung werden sämtliche fünf Registerausgaben
vorbereitet. `content/.briefing-import/` sperrt weitere Importe und Build/Check.
Der Import vergleicht den Bestandsstand noch einmal mit den vor dem Review
beobachteten Bytes; Änderungen während des Reviews werden nicht überschrieben.
Backups, Ausgaben und Journal werden vor dem ersten Ersetzen vollständig
geschrieben und auf Dateiebene synchronisiert. Ersetzen erfolgt durch lokale
atomare Renames; Dateimodi bleiben erhalten.

Bei einem gewöhnlichen Schreibfehler werden alle Bestandsdateien aus den
Byte-Backups wiederhergestellt. Wenn auch das Rollback scheitert oder der
Prozess abstürzt, bleiben Backups und Marker erhalten; Build/Check verweigern
den Zwischenstand. Nach Ende des Importprozesses:

```sh
npm run import:briefing -- --recover
npm run build
npm run check
npm test
```

`--recover` verweigert die Wiederherstellung, solange der im Marker erfasste
Prozess noch läuft. Ein vorbereiteter, unbestätigter Import wird vollständig
zurückgesetzt. Ein als vollständig geschrieben markierter Import wird nur
aufgeräumt. Journal/Backups bei Wiederherstellungsfehlern nicht blind löschen;
Dateisystem/Zugriff beheben und die Wiederherstellung erneut ausführen.
Wenn Owner oder Journal beschädigt sind, nennt das Werkzeug diesen Fehler;
Backups müssen dann manuell geprüft werden.

Die fünf Renames sind keine globale atomare Dateisystemtransaktion. Die
Sperrmarkierung verhindert, dass Projektwerkzeuge einen erkannten Zwischenstand
nutzen. Gleichzeitige externe Handbearbeitung der Register während des kurzen
Ersetzens ist zu vermeiden; ein vollständiger Strom-/Datenträgerausfall kann
nicht durch Node-Dateioperationen garantiert abgesichert werden. Kein Import
lädt Originalmedien herunter oder prüft deren Erreichbarkeit/Rechte.

Regressionen verwenden ausschließlich isolierte temporäre Daten. Synthetische
Meldungen, Medien, Dokumente und Testwerte gehören nicht in `content/`.
