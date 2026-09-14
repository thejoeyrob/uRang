uRang PWA — v1.0

WHAT THIS BUILD DOES
- Browser mode is locked to an install screen.
- Installed/Home Screen standalone mode opens the actual uRang app.
- Coral minimalist welcome screen closely matches the approved visual.
- Phone number paste/input.
- Home-country detection from browser locale, with a minimal country selector.
- Converts domestic numbers to international form for research.
- Identifies likely origin country.
- Adds useful UK mobile/landline/service classification and selected UK landline area hints.
- Remembers previous searches on-device and shows the previous result before Search is pressed.
- Local/Web mode.
- If Local finds no previous uRang match, Web becomes the next active path.
- WhatsApp handoff for the user's existing manual identity check.
- Public web-search handoff with both international and domestic number variants.
- Offline app shell via service worker.
- No login and no analytics.

IMPORTANT iPHONE LIMITATION
A PWA on iPhone cannot enumerate/search the user's Contacts, Messages, Notes, call log or WhatsApp database.
The interface has deliberately been built so the same PWA can later be wrapped in a native iOS shell
(e.g. Capacitor) and a Contacts permission module added without redesigning the app.

ONLINE RESEARCH
This static build does not embed a paid search API key in browser JavaScript (that would expose the secret).
"Search the web" creates a real public search using multiple number representations. For fully automatic
in-app web-result aggregation, connect app.js to a small server-side search endpoint later.

INSTALL / HOST
1. Upload ALL files in this ZIP to the same public web folder (flat, no nested directories).
2. Serve over HTTPS (GitHub Pages, Cloudflare Pages, Netlify, etc.).
3. Open the URL on the phone.
4. Browser mode will show Install to continue.
5. iPhone/iPad: Share > Add to Home Screen > keep "Open as Web App" enabled > Add.
6. Launch uRang from the Home Screen.

FILES
index.html
styles.css
app.js
manifest.webmanifest
sw.js
icon-192.png
icon-512.png
apple-touch-icon.png
README.txt
