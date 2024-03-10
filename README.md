# chicken-dinner-website
Website of the band Chicken Dinner

## Ordnerstruktur

- In `reference` befindet sich eine (runtergehackte) statische Website _komplett ohne_ NodeJS, einfach nur HTML, (S)CSS, JS.
- Diese ist sprechend nicht optimiert und alles muss 100% manuell gemacht werden, was auch ätzend zu pflegen ist.
- Deswegen gibt es dieses Repository: 
  - In `src` schreibt man mit angenehmer Developer-Experience den Sourcecode 
  - Das wird dann durch Webpack gejagt und was dabei im `dist`-Ordner hintenraus fällt, lädt man per FTP auf den Webspace hoch.
- Es gibt kein Content-Management-System, die Inhalte stehen direkt in den Quelldateien.

_TODO:_ Was in `reference` steht, sollte in `src` überführt werden:

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


## Developing

`npm run watch`

## Deploying

- Build `npm run build`
- Upload folder `dist` to webspace