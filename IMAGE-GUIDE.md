# AstroNeeti website — image guide

## Sab images ek jagah se change hongi
Open `site-config.js`.

### App logo
Change:
`logo: '...'`

### App screenshots
Change any item inside:
`screenshots: [ ... ]`

Example local image:
`screenshots: ['assets/images/home.jpg','assets/images/chat.jpg']`

Then create:
`assets/images/home.jpg`
`assets/images/chat.jpg`

You do NOT need to edit `index.html`.

## Recommended sizes
- App screenshot: 1080×1920 or 1242×2208 if portrait.
- Landscape feature screenshot: 1920×1080.
- Logo: square PNG/SVG, ideally 512×512.

## Current setup
The default URLs point to the current Google Play CDN creatives. If you update screenshots in Play Store later, simply replace the URLs in `site-config.js`.
