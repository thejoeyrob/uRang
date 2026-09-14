uRang PWA — v1.4.0
A JW EDS product

THIS IS THE IPHONE-FRIENDLY PWA BUILD

Install behaviour
- Browser/Safari view is an install screen only.
- Add uRang to the Home Screen and launch it from the icon to use the app.
- The icon uses the full uRang wordmark.

What works without any paid service
- Paste/type a missed-call number.
- Domestic/international normalisation.
- Country of origin.
- UK mobile/landline/service classification.
- Selected UK geographic landline area hints.
- Previous-search memory and Recent list stored only on the device.
- Previous result appears before Search when the number is recognised.
- WhatsApp handoff for the user's manual name/photo check.
- Exact-number public web research using both international and local forms.
- Offline app shell after first load.
- About page with JW EDS branding and version.

Automatic reverse lookup
config.js contains lookupApi. Leave it blank for the static version. When a server-side reverse-lookup endpoint is available, set the HTTPS URL there. uRang will then call it automatically during the same single Search action and merge the result into the concise result screen. No redesign is required.

Important iPhone limitation
Installed iPhone PWAs cannot search the user's Contacts database. That is the only major local capability deliberately omitted. A later native/App Store uRang build can add Contacts permission while retaining this interface.

HOSTING
Upload ALL files from this ZIP to the same HTTPS folder. GitHub Pages, Cloudflare Pages or Netlify are suitable static hosts.
On iPhone: open the URL in Safari > Share > Add to Home Screen > Open as Web App > Add.
