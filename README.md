# TRIBS Logistics & Services Corp. — website

Static site (HTML, CSS, vanilla JS; no build step) built on the TRIBS design system.

## Pages
- `index.html`: Home (hero, services, why choose TRIBS, mission/vision)
- `about.html`: About Us
- `services.html`: Our Services (`#repair`, `#truck`, `#delivery`)
- `fleet.html`: Fleet
- `contact.html`: Contact and quote form (`?service=Truck%20for%20Hire` preselects a service)

## Structure
- `css/styles.css`: design tokens (light + dark) and all components. Fonts: Archivo (headings, buttons, nav) + Source Sans 3 (body), replacing the design system's Montserrat
- `js/main.js`: line icons (`<svg data-icon="truck">`), mobile menu, services dropdown, quote form, header shadow on scroll and the scroll-reveal motion (skipped under `prefers-reduced-motion`)
- `assets/logos`: `tribs-emblem-light.png` (header, light mode), `tribs-emblem-white.png` (all-white emblem with red stars, for the dark-mode header and the footer) and `tribs-favicon.png` are the client's round emblem with the background keyed out and trimmed; `tribs-emblem-reversed.png` is the client's dark-background variant, kept but unused; `tribs-emblem-on-white.png` is the untouched original on white, kept as an image reference for Higgsfield prompts. The header and footer lockup is the emblem plus HTML text (`.brand`), so the wordmark stays crisp. The older `tribs-logo-horizontal*.png`, `tribs-wordmark.png` and `tribs-emblem.png` from the design system are no longer referenced.
- `assets/photos`: site photography (see Images)

The header and footer are repeated in each page; change them in all five files.

## Run locally
```
python3 -m http.server 8420
```

## Before launch
- Contact details are real: +63 906 443 1326, customersupport@tribsmotor.com, 3924 Sun Valley Drive, Parañaque (map pinned at 14.4903609, 121.0352779). The About story, footer blurb and meta descriptions still say "Las Piñas City"; confirm with the client whether that should read Parañaque.
- The quote form opens the visitor's email app (mailto). For direct submissions, point it at a form service (e.g. Formspree) or a backend.
- Photos are AI-generated (see Images). Swap in the client's own photography if they prefer; keep the file names.
- Review drafted copy: About story, mission/vision, fleet and service bullet points, office hours.

## Images
The photos in `assets/photos/` were generated on Higgsfield (Nano Banana Pro, 2k, with `assets/logos/tribs-emblem-on-white.png` as the image reference) using the prompts in `higgsfield-prompts.md`, then cropped and resized with `sips` to the sizes the pages expect: hero 1600x1028 (+800w), service cards 1200x491 (+600w). Full-size masters are in `assets/originals/higgsfield/`. The small mockup extractions the site started with are still in `assets/originals/`. To replace a photo, regenerate it with the matching prompt, crop to the same size and keep the file name; the pages need no changes.
