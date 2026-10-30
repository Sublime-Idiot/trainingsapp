# Trainingsapp A & B

Web-app voor bovenlichaamtraining A en B: supersets om en om, afvinken per oefening en een instelbare rusttimer. Installeerbaar op Android via Chrome en offline te gebruiken.

## Bestanden

| Bestand | Wat het doet |
|---|---|
| `index.html` | De app: schermen, illustraties, schema en timer |
| `manifest.webmanifest` | Naam, kleuren en icoon voor op je beginscherm |
| `sw.js` | Service worker: bewaart de app zodat hij offline werkt |
| `icons/` | App-iconen (192 en 512 px) |

## Stap 1: lokaal testen

Open een terminal in deze map en start Claude Code (`claude`). Vraag:

> Start een lokale server voor deze map zodat ik de app in mijn browser kan testen.

Of zelf: `python3 -m http.server 8000` en open `http://localhost:8000`.

Dubbelklikken op `index.html` is niet genoeg: de service worker werkt alleen via een server.

## Stap 2: Git en GitHub

1. Maak een gratis account op github.com.
2. Vraag Claude Code:

> Maak van deze map een git-repository, maak een eerste commit en zet hem op GitHub in een nieuwe openbare repository "trainingsapp".

3. Zet op GitHub GitHub Pages aan: repository → Settings → Pages → Source: "Deploy from a branch" → branch `main`, map `/ (root)`.
4. Na een minuut of twee staat de app op `https://<jouw-gebruikersnaam>.github.io/trainingsapp/`.

## Stap 3: installeren op Android

1. Open de link in Chrome.
2. Menu (drie puntjes) → "App installeren" of "Toevoegen aan startscherm".

## Bijwerken

1. Pas de app aan (bijvoorbeeld via Claude Code).
2. Verhoog in `sw.js` het versienummer: `trainingsapp-v1` wordt `trainingsapp-v2`.
3. Commit en push naar GitHub.
4. Open de app op je telefoon; bij de volgende keer openen draait de nieuwe versie.

## Schema aanpassen

Oefeningen staan in `index.html` in het blok `EX` (naam, sets, herhalingen, aanwijzing). De volgorde van de supersets staat in `PLAN`.
