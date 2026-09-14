uRang PWA — v1.5.0
A JW EDS product

USER FLOW
Paste number > Search.

1. uRang identifies the number country locally.
2. The most relevant configured reverse-directory route is checked FIRST.
3. If an identity is returned, uRang shows the short result and only offers:
      Search deeper
      Search again
4. "Search deeper" reveals:
      Recheck directory
      Check WhatsApp
      Research online
5. If the directory returns no identity or is unavailable, the fallback actions
   appear automatically:
      Refresh directory & retry
      Check WhatsApp
      Research online

DIRECTORY REFRESH
- uRang keeps a small device-side cache of prior directory responses.
- Positive matches default to 7 days.
- Negative matches default to 12 hours.
- A lightweight directory route/status check can refresh when the app opens.
- "Refresh directory & retry" bypasses the cached lookup.
- uRang does NOT download a full identity directory onto the iPhone.

WHY
A full directory would be large, stale, licensing-sensitive, and unreliable in
iPhone PWA storage. Country-routed live lookup is lighter and more current.

LIVE REVERSE LOOKUP
The app-side call is built in, but a directory provider cannot safely be called
with a secret API key directly from public JavaScript. Deploy the included
backend-lookup-worker.js, add a provider key server-side, then set lookupApi in
config.js.

See BACKEND_SETUP.txt.

IPHONE LIMITATION
A PWA cannot enumerate the iPhone Contacts database. The native version can add
that permission later without changing the uRang user experience.
