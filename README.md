# chicken-dinner-website
Website of the band Chicken Dinner

## Voraussetzungen

- NodeJS ^20 und npm ^10 müssen installiert sein.
- Am Anfang einmal `npm install` ausführen, um die Abhängigkeiten herunterzuladen.

## Workflow

In `src` schreibt man den Sourcecode.
Es gibt kein Content-Management-System, die Inhalte stehen direkt in den Quelldateien.
Im Watch-mode kann man seine Änderungen auf `localhost:3000` sehen.

```
npm run dev
```

Wenn man fertig ist, baut man alles und es wird ein Ordner `dist` erzeugt.

```
npm run build
```

Diesen lädt man dann per FTP auf den Webspace hoch.

## TODO

- [ ] Fonts
- [ ] Icons: fontawesome
- [ ] jQuery: slick-slider, lightbox, featherlight
- [ ] Startseite Layout (Sidebar mit Navigation, Logo)
- [ ] Startseite: Willkommen (großes Bild)
- [ ] Startseite: Unsere Musik (Songauswahl)
- [ ] Startseite: Das sind wir (Einzelbilder)
- [ ] Startseite: Action! (Bildergalerie)
- [ ] Startseite: Action! (YouTube-Einbettung)
- [ ] Startseite: Events
- [ ] Startseite: Schreib uns
- [ ] Startseite: Hühnchenslider
- [ ] Datenschutz
- [ ] Impressum
- Webpack Optimierungen:
  - [ ] [ImageMinimizer](https://webpack.js.org/plugins/image-minimizer-webpack-plugin/)
  - [ ] HTML partials
