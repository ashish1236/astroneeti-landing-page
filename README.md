# AstroNeeti Premium Website

This version uses the current AstroNeeti Google Play listing as the source of product information and the published Play Store icon/screenshots as remote visual resources.

Google Play:
https://play.google.com/store/apps/details?id=com.victusprime.hindugodchant2

## Important before publishing
- The site already points all Download buttons to the live Play Store listing.
- The screenshots are loaded from Google's Play image CDN, so internet access is required.
- Replace privacy.html and terms.html with final legal text matching the app's actual data/payment practices.
- Verify support email and developer/legal details before launch.
- If you later want the site independent of Google's image CDN, download the Play assets and replace the remote URLs in index.html with local `/assets/...` files.

## Publish
Upload the contents of this folder to any static host such as Netlify, Vercel, Cloudflare Pages or GitHub Pages.
