# Qualitätsprüfung

## Bereits tatsächlich ausgeführt

- Produktionsbuild mit Node.js 24.19.0 in der Arbeitsumgebung erfolgreich: 65 Inhaltsseiten plus 404.
- `npm run check`: 66 HTML-Dateien, **3.370 interne Verweise** einschließlich Abschnitten und **189 Weiterleitungsziele** geprüft; keine fehlenden internen Ziele.
- Unveränderte Originaladressen für alle 57 Medien und 72 Dokumentverweise gegen das Briefing geprüft.
- Vier Migrationstests erfolgreich: 33 eindeutige Beiträge mit Jahresverteilung 10/21/2, Dokument-Mehrfachverweise, URL-Erhalt und explizit offene Planungen.
- JavaScript-Syntax geprüft; Karten-iframe wird nicht in das initiale HTML geschrieben, externe Fotos besitzen initial keinen `src`.
- Echter Node-Server gestartet; die Cloud-Browserumgebung kann diesen Arbeitsbereich nicht erreichen. Der Sites-Supervisor fehlt (`mailbox unavailable`), Cloud-Vorschau meldet `ERR_CONNECTION_REFUSED`. Kein Browsererfolg wird daraus abgeleitet.

## GitHub-Browserlauf

`quality.yml` baut den exakten PR-/Commitstand und startet auf dem GitHub-Runner einen lokalen Server. `scripts/browser-qa.mjs` erstellt für fünf Seiten in vier Größen Screenshots und `report.json`. Der abgeschlossene Bericht und die visuelle Auswertung werden nach dem Lauf hier ergänzt; bis dahin sind diese Tests **noch nicht als bestanden bestätigt**.

Prüfmatrix: Startseite, Ganztag (umfangreiche Inhaltsseite), Nachrichten, Downloads und Kontakt jeweils in 320×740, 390×844, 768×1024 und 1440×1000. Zusätzlich werden Tastaturmenü/Sprunglink, Touch-Ziele, Suche, Nachrichten-/Dokumentfilter, Kontaktalternative, aktivierungspflichtige Karte, fehlendes Originalfoto, reduzierte Bewegung, Betrieb ohne JavaScript und HTTP-Routing geprüft.

## Barrierefreiheit und Grenzen

Semantische Regionen, ein H1 pro Seite, echte Überschriften, `scope` in der Zeittabelle, Formularlabels, sichtbare Fokusmarkierungen, Alt-/Kontexttexte und Live-Ergebnisrückmeldungen sind implementiert. Touch-Ziele sind auf mindestens 44 px ausgelegt; Fokus, Navigation und Umbruch werden im Browser geprüft. Farbgestaltung verwendet dunkle Schrift auf hellen Flächen. Eine formale WCAG-2.2-AA-Konformität wird nicht behauptet.

Nicht ersetzt werden Screenreaderprüfung mit realen Hilfsmitteln, physische Endgeräte, umfassende PDF-Barrierefreiheitsprüfung, tatsächliche Google-Auslieferung (im automatisierten Test abgefangen), E-Mail-Zustellung, Bildrechte und Rechts-/Redaktionsfreigaben. Externe Dokumente und Medien sind in dieser Arbeitsumgebung nicht vollständig direkt ladbar; ihre Originalverweise bleiben erhalten.
