# Gestaltung und UX

## Richtung

„Eigene Wege. Gemeinsame Wurzeln.“ Eine ruhige, freundliche Grundschulwebsite: warme Papierfläche, dunkles Waldgrün, sanftes Pfirsich, sonniges Gelb und helles Blau. Pflanzen dienen als Bild für individuelle Entwicklung und Gemeinschaft. Die botanischen SVGs sind dekorative, eigens geschriebene Vektoren und keine Ersatzfotos.

Die mobile Startseite stellt zunächst Identität und Schulprofil vor. Direkt anschließend folgen acht alltagsbezogene Elternwege. Auf kleinen Bildschirmen sind Krankmeldung, Zeiten, Kontakt und Menü zusätzlich in einer mit einer Hand erreichbaren unteren Navigation verfügbar. Umfangreiche Texte haben lokale Abschnittslinks; Tabellen sind schmal, Dokumentlisten umbrechen statt horizontal zu scrollen.

## Typografie und Komponenten

Systemschriften für Bedienung und Texte, Georgia für große Überschriften. Keine zusätzlichen Schriftanfragen und keine Laufzeitbibliotheken. Kurze Zeilen, klare Überschriften und bewusst begrenzte Textbreiten unterstützen Lesbarkeit. Kein Fließtext auf Fotos.

Pastellfarben strukturieren Inhalte; Bedeutung und Status werden immer auch mit Text vermittelt. Stabile Kartengrößen, deklarierte Bildflächen und SVG-Abmessungen vermeiden unnötige Layoutsprünge. Animiert werden nur zurückhaltende Hover-Übergänge; bei reduzierter Bewegung entfallen Übergänge und sanftes Scrollen.

Navigation verwendet native `details`/`summary`-Elemente als Tastatur-Disclosures. Mobile Menüs sind ebenfalls Disclosures, keine Dialoge. Escape schließt erst die geöffnete Untergruppe, dann das Gesamtmenü und stellt den Fokus wieder her. Fokus bleibt sichtbar; der Sprunglink erreicht direkt den Hauptinhalt.

## Bildkonzept und Grenzen

Alle authentischen Medien behalten die dokumentierte Originalzuordnung. Bis lokale freigegebene Dateien vorliegen, werden Fotos einzeln als externe Inhalte aktivierbar dargestellt. Portraits und Projektdokumentationen erhalten Kontextbeschriftungen. Die verfügbaren Adressen werden nicht um erfundene Varianten ergänzt.

Das Original-Schullogo muss aus der fehlenden ZIP nachgeliefert werden; die interimistische Namensdarstellung behauptet keine neue Schulmarke. Das vorhandene Logo kann über `settings.logoFile` ohne Layoutumbau integriert werden.
