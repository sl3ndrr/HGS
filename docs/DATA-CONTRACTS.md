# Datenverträge und historisches Migrationsinventar (AP02)

`src/validate-content.mjs` ist die ausführbare Referenz. Build und Check laden
sämtliche Register mit `src/content-data.mjs` und validieren vor dem Rendering.
Ein Buildfehler benennt Register, Objekt und Feld, z. B.
`news[1256501].documentIds: unbekannte referenzierte ID …`.
Der Build validiert vor dem Entfernen eines vorhandenen `dist/`.
Keine Produktionsabhängigkeit; Node 22+.

## Historische Evidenz und erweiterbarer Bestand

`docs/migration-inventory.json` ist ein eingefrorenes Inventar, kein Live-Zähler.
Es wurde vom aktuellen main `74d443b78bcbb49c638d080f90c1f8e34598edb6`
nach dem AP01-Merge aus Bestand und Briefing abgeglichen. Der SHA-256 des
unveränderten Briefings ist darin erfasst. Import schreibt diese Datei nicht.
Bei Fehlern Originaldaten wiederherstellen; Inventar nicht auf neue Sollwerte
umstellen. Historische Inventareinträge werden weder ersetzt noch ergänzt.
Neue bestätigte Inhalte gehören ausschließlich in die laufenden Register.

| Register | Eingefrorene Evidenz | Identität und erhaltene Originalwerte |
| --- | --- | --- |
| Nachrichten | 33 | `id`, `sourceUrl`, `published` |
| Medien | 57 | `id`, `originalUrl`, `source` (Originalquellseite oder null) |
| Dokumentverweise | 72 | `id`, `originalUrl`, `sourceUrl`, `originalTitle` |
| Dokumentressourcen | 70 | `id`, `originalUrl`, historische `referenceIds` |

`assertMigration` verlangt jeden historischen Eintrag mit seinem eigenen
Originalwert. Eine URL, die irgendwo anders im Briefing vorkommt, genügt nicht.
Zusätzliche Nachrichten, Medien, Verweise oder Ressourcen bestehen bei gültigem
Vertrag. Weitere Verweise an bestehende Ressourcen dürfen ergänzt werden.

Der tatsächliche Abgleich ergab keine Abweichung bei diesen IDs/Originalwerten.
72 Verweise sind **keine 72 unterschiedlichen Dateien**: D24/D33 referenzieren
das Schutzkonzept, D32/D70 denselben Infektionsschutzbogen. Die beiden
Satzungsadressen D16/D68 bleiben verschiedene Ressourcen. Der falsch
beschriftete Speiseplan erhält keine erfundene Adresse. Diese Sachverhalte
bleiben nachvollziehbar statt die Menge zu „korrigieren“.

Die Evidenz umfasst adressierte Ressourcen, keine bestätigte aktuelle
Erreichbarkeit, Rechtefreigabe oder Vollständigkeit unbekannter CMS-Dateien.
Die Export-ZIP, Original-Logo-/Galeriedaten und redaktionellen Konflikte aus
`REDAKTION.md` bleiben offen. Zusammenfassungen der 33 Nachrichten reichen.

## Registerverträge

IDs sind nichtleere eindeutige Zeichenfolgen aus Buchstaben, Ziffern, `_` und
`-`. Seitenidentität ist der eindeutige `url`-Pfad, Klassenidentität `class`,
Navigationsgruppen verwenden `url`, Personengruppen ihren `title`.
IDs bleiben bei Bearbeitung erhalten. Frei ergänzbare, nicht gerenderte
Erweiterungsfelder werden beim Reimport erhalten; bekannte Felder müssen ihren
Vertrag erfüllen. Eine Erweiterung schafft keinen neuen gerenderten Seitentyp.

| Inhalt | Erforderlicher Vertrag | Referenzen / optionale Angaben |
| --- | --- | --- |
| Seiten (`pages.mjs`) | `url`, `title`, `intro`, `eyebrow`, `theme`, `sections`; Abschnitt `id`, `title` | `imageId`, `documents`, `sourceUrls`, `notice`; Abschnitte: Textlisten, Textpaare `facts`/`values`/`steps`, `links`, `media`, `documents`, `documentCategory`, `contact`, Boolean `map`/`schedule` |
| Nachrichten | `id`, `url`, `title`, `summary`, `paragraphs`, `category`, `published`, `sourceUrl`, Boolean `historical`, Liste `documentIds` | `eventDate`, `eventNote`, `imageId`, `schoolYearBasis` |
| Dokumente / Verweise | `id`, `title`, `originalTitle`, `originalUrl`, `sourceUrl`, `category`, `language`, `stand`, `type`, `status` | `note`; Ressource zusätzlich nichtleere `referenceIds` und `sources` aus `{url,title}` |
| Medien | `id`, `context`, `alt`, `originalUrl`, `rights`, `status` | `source`, `localFile`, positive ganzzahlige `width`/`height`, `variants` aus `{url,width,height?}`; eindeutige Varianten-URLs |
| Navigation | Gruppe `{title,url,items}`; `items` aus `[Titel,Ziel]` | eindeutige Gruppenpfade und Ziele innerhalb der Gruppe; Quicklinks `[Titel,Ziel,Icon,Beschreibung?]` |
| Personen | `{stand,groups}`; Gruppe `{title,people}`; Person `{id,name}` | `role`, `email`, `phone`, `imageId` |
| Klassen | `{stand,classes}`; Klasse `{class,name,teachers}` | `teachers`: eindeutige belegte Beschriftungen; `teacherIds`: optional bestätigte Referenzen auf Personen-IDs |
| Redirects | `{from,to,reason}`; eindeutige wörtliche `from`-Werte | lokale Quellroute, optional Query, ohne Fragment; internes auflösbares Ziel einschließlich Anker |

Bekannte Seitenarten: normale Seite (`kind` fehlt oder `page`), `team`,
`classes`, `schedule`, `parents`, `schoollife`, `news`, `children`, `photos`,
`downloads`, `contact`, `search`. Themen: `green`, `peach`, `yellow`, `blue`.
Dokumenttypen: `PDF`, `Webbeitrag`. Kategorien und Sprachen sind nichtleere
redaktionelle Texte; `documentCategory` muss eine vorhandene Kategorie treffen.

Jede Dokumentreferenz gehört genau einer Ressource. Ihre Originaladresse und
Quellseite mit Originalbeschriftung müssen in der Ressource übereinstimmen.
Ressourcen haben eindeutige Originaladressen; mehrere Referenzen derselben
Adresse werden einer Ressource zugeordnet. Dokumentzuordnungen in Seiten/News
verwenden **Referenz-IDs**, z. B. D33, auch wenn die Ressource D24 heißt.
Alle Medien-/Personenreferenzen müssen existieren. Renderer werfen zusätzlich
Fehler, statt unbekannte Dokument-/Medien-IDs still zu überspringen.

36 vorhandene Personen erhalten P01–P36 in unveränderter Reihenfolge.
Keine Person wurde ergänzt oder anhand von Namensähnlichkeit zusammengeführt.
„Frau Schlicker“ in Klassen ist keine bestätigte Identität mit einer anderen
Namensform. Klassenbeschriftungen bleiben unverändert; `teacherIds` sind noch
nicht befüllt. Neue Personen-IDs dürfen nur eindeutige belegte Identitäten
abbilden; technische Eindeutigkeit ersetzt keine redaktionelle Identitätsprüfung.

## URLs, Pfade, Daten und Anker

- Original-/Quellenadressen: absolute HTTP(S)-URLs ohne Zugangsdaten, rohe
  Leer-/Steuerzeichen oder Backslash. Validierung schreibt/normalisiert sie
  **nicht**. Kodierung, doppelte Schrägstriche, Hostschreibweise und Parameter
  bleiben bytegenau erhalten.
- Inhaltsseiten: lokale Pfade mit führendem und abschließendem `/`, ohne
  Query/Fragment. `/`, `/404/` und Shell-Anker sind reserviert. Normalisierte
  Unicode-/kodierte Pfade dürfen nicht doppelt auf verschiedene Seiten zeigen.
- Lokale Medien/Varianten/Logo: unter `/assets/`, ohne Query/Fragment oder
  Traversal. Literal-, URL-kodierte und doppelt kodierte Traversal-Pfade,
  kodierte Schrägstriche, Backslashes und protokollrelative URLs werden abgewiesen.
  Der nachgelagerte Linkcheck prüft die Existenz tatsächlich gerenderter Dateien.
- Links: HTTP(S), `mailto:`, `tel:` oder auflösbare interne Seiten/Anker.
  Abschnittsanker sind pro Seite eindeutig und kollidieren nicht mit Shell-
  oder generierten Spezialseiten-Ankern. Check prüft zusätzlich alle HTML-IDs.
- Vorhandene kodierte/unicode Redirect-Aliasse bleiben erhalten. Query-Reihenfolge
  und Pfadkodierung werden zur Konfliktprüfung normalisiert: gleiche Ziele
  sind zulässig, widersprüchliche Ziele scheitern. Das sind Mappingprüfungen;
  externe echte HTTP-301 am Originalhost bleiben Infrastrukturaufgabe AP10.
- Datumsfelder: echte Kalenderdaten `YYYY-MM-DD` (kein 31. April, falscher
  Schalttag oder Jahr 0000). Jahresbezüge werden nicht aus Aktualität geraten.

## Unbekannter Prüfstand und getrennte Sachverhalte

Die folgenden Felder sind optional an Inhaltsobjekten, Personen/Klassen und
Medien. Weglassen oder `null` bedeutet unbekannt/nicht erfasst. AP02 befüllt
keinen Prüfstand, keine Gültigkeit und keine neue Schuljahresvermutung.

| Feld | Zulässige Werte / Bedeutung |
| --- | --- |
| `reviewedAt` | Kalenderdatum oder null; fachlicher Prüfzeitpunkt |
| `reviewStatus` | `unknown`, `pending`, `reviewed`, `needs-review` oder null; kein technischer Beleg einer Schul-/Rechtefreigabe |
| `schoolYear` | `YYYY/YY` mit Folgejahr oder null; vorhandene historische, explizit dokumentierte Zuordnungen bleiben erhalten |
| `validFrom`, `validTo` | Kalenderdatum oder null; bekannte Endgrenze darf nicht vor der Startgrenze liegen |
| `provenance` | null oder `{kind,sourceUrl?,note?}`; `kind`: `briefing`, `school-supplied`, `editorial`, `unknown`; insbesondere Medienherkunft |
| `editorial` | null oder `{note?,sourceUrl?}`; aktuelle redaktionelle Ergänzung/Beleg |
| `availability` | null oder `{status,checkedAt?,note?}`; `status`: `unknown`, `reachable`, `unreachable`, `blocked`; gesonderte technische Beobachtung |

`originalUrl` ist die ursprüngliche Adresse; `source`/`sourceUrl`/`sources`
belegen den ursprünglichen Kontext. Aktuelle Texte/Notizen und `editorial`
sind redaktionelle Bearbeitung. `availability` beschreibt einen tatsächlichen
Abruf und dessen Zeit, nicht fachliche Aktualität. `localFile`/`variants` sind
technische Zuordnungen. Bestehende freie `status`-/`rights`-Texte sind
Quellen-/Reviewhinweise; ein lokal erfolgreicher Import bestätigt keine Rechte.
Unbekannte `schoolYear`-Werte bestehen den Datenvertrag; ihre UI-Darstellung
und dynamische Mengen-/Jahreslisten sind AP04.
