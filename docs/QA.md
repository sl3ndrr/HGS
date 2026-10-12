# Qualitätsprüfung

## Ergebnis

Der abschließende GitHub-Actions-Lauf **[38266030069](https://github.com/sl3ndrr/HGS/actions/runs/38266030069)** vom 12.10.2026 ist erfolgreich. Geprüfter PR-Head: `e0585faef9413190ab2c3bf3938cb9fb64587788`. Der Runner prüfte den dazugehörigen GitHub-Merge-Ref `089718a6c2e81a80ecb8c3e61d42199765a4ef58`. Der folgende Dokumentationscommit verändert keine Website-Build-Eingaben.

- Produktionsbuild mit Node 22 im CI erfolgreich: **65 Inhaltsseiten plus 404**. Lokal zusätzlich mit Node 24.19.0 ausgeführt.
- Inhalts-/Linkprüfung: **66 HTML-Dateien, 3.371 interne Verweise und 189 Weiterleitungsziele**, einschließlich aller Abschnittsanker; keine fehlenden internen Ziele.
- **Fünf Node-Tests bestanden**: vollständiges Archiv mit Jahresverteilung 10/21/2, Dokumentmehrfachverweise, unveränderte Medienadressen, explizit offene Planungen und Kontrast der tatsächlichen CSS-Farbwerte.
- Alle **57 Medienadressen und 72 Dokumentverweise** gegen das Briefing geprüft, einschließlich Kodierung, doppelter Schrägstriche und Parameter.
- **20 Chromium-Seitenansichten** ohne horizontales Scrollen, Konsolenfehler oder fehlende lokale Ressourcen. Keine externe Bild-/Kartenanfrage vor Aktivierung.
- **16 zusätzliche Funktionsprüfungen bestanden** (Details in `qa/browser/report.json`).

## Tatsächliche Browsermatrix

| Seitentyp | 320×740 | 390×844 | 768×1024 | 1440×1000 |
| --- | --- | --- | --- | --- |
| Startseite | bestanden | bestanden | bestanden | bestanden |
| Ganztag, umfangreiche Inhaltsseite | bestanden | bestanden | bestanden | bestanden |
| Nachrichtenarchiv | bestanden | bestanden | bestanden | bestanden |
| Downloads | bestanden | bestanden | bestanden | bestanden |
| Kontakt | bestanden | bestanden | bestanden | bestanden |

Das ist Viewport-/Touch-Emulation in Chromium 151, kein Test auf physischen Geräten. Die Browserdateien sind durch GitHub Actions erzeugt worden: 20 vollständige Seitenscreenshots, vier Startseiten-Ausschnitte und ein maschinenlesbarer Bericht unter `docs/qa/browser/`. Das zugehörige CI-Artefakt hat die ID `11754383437`; die dauerhaft ins Repository kopierten Belege benötigen keinen späteren Artefaktzugriff.

## Funktionen und visuelle Kontrolle

Geprüft wurden Sprunglink und Fokus auf allen vier Größen, native Tastatur-Disclosures, mobile Menübedienung/Schließen mit Escape, mindestens 44×44 px große mobile Schnellzugänge, Suchergebnisse, Nachrichtenfilter nach Jahr/Stichwort, Downloadfilter nach Thema/Sprache, Zurücksetzen und Leerzustand. Weiter geprüft: Mail-/Telefonalternative ohne falsches Kontaktformular, Google-iframe erst nach Aktivierung und wieder entfernbar, verständlicher Fehlerzustand beim nicht erreichbaren Originalfoto, reduzierte Bewegung, nutzbare Dokumentliste/Navigation ohne JavaScript und echtes HTTP-404-Verhalten.

Die Routingprüfung umfasst klassische Altseiten, Unicode-Abschnittsziele sowie das Nachrichtenarchiv bei vertauschter Query-Reihenfolge. Der Node-Server liefert dabei korrekte 301-Header.

Die Screenshots der fünf Seitentypen wurden in allen Größen visuell auf Navigation, Typografie, Lesbarkeit, Umbruch, Dokumentlisten, Kartenhinweis, Farbführung und Bildflächen kontrolliert. Die unteren Bereiche von Ganztag und Kontakt wurden zusätzlich auf Formular-/Dokumenthinweise, Kartenaktivierung und Footer geprüft. Die mobile Startseite zeigt jetzt die Elternwege vor der dekorativen Illustration.

Der erste Browserlauf fand einen Fehler beim Downloadfilter-Reset: Ein Microtask wurde vor dem abgeschlossenen nativen Form-Reset ausgeführt. Der Reset leert die drei Filter nun ausdrücklich und filtert unmittelbar neu; die Wiederholungsprüfung besteht. Eine sekundäre Textfarbe erreichte auf Pfirsich nur 4,44:1 und wurde abgedunkelt. Alle 13 geprüften Kern-Farbpaare erreichen nun mindestens **4,87:1** für normalen Text; Werte in `qa/contrast.json`, Regressionstest in `tests/contrast.test.mjs`.

## Barrierefreiheit und Grenzen

Semantische Regionen, genau ein H1, strukturierte Überschriften, Tabellenüberschrift und `scope`, Formularlabels, sichtbare Fokuszustände, Alt-/Kontexttexte und Live-Ergebnisrückmeldungen sind implementiert und in den genannten Prüfungen berücksichtigt. Der Aufbau orientiert sich an WCAG 2.2 AA. **Eine umfassend nachgewiesene WCAG-Konformität wird nicht behauptet.**

Noch nicht durchgeführt: Screenreaderprüfung mit realen Hilfsmitteln, physische Endgeräte, Firefox/WebKit, vollständige PDF-Barrierefreiheits- und Inhaltsprüfung, tatsächliche Google-Kartenauslieferung (im automatisierten Test abgefangen), E-Mail-Zustellung, Bildrechte oder rechtliche/redaktionelle Freigaben.

Der Direktabruf externer Dateien und die Cloud-Vorschau waren in der ursprünglichen Arbeitsumgebung gesperrt beziehungsweise nicht erreichbar. Der reguläre Preview-Supervisor fehlte. Diese Umgebungslücke wurde für die Websiteprüfung durch den reproduzierbaren CI-Browserlauf geschlossen; sie ist kein Beleg für eine Störung der Originalwebsite. Originalfoto- und PDF-Adressen sind erhalten, ihre vollständige externe Verfügbarkeit wurde nicht behauptet.
