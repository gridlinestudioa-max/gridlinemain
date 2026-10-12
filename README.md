# gridlinestudiochi.com — redirect to will-potter.com

Gridline Studio is retired; the business now operates as **Will Potter Design** at
https://will-potter.com. This repo now only forwards old URLs there.

| Old path | Goes to |
|---|---|
| `/`, `index.html`, `Home.dc.html`, `Contact.dc.html` | `https://will-potter.com/HOME.dc.html` |
| `Work.dc.html` | `https://will-potter.com/WORK.dc.html` |
| `Services.dc.html` | `https://will-potter.com/SERVICES.dc.html` |
| `About.dc.html` | `https://will-potter.com/ABOUT.dc.html` |
| anything else (via `404.html`) | Home (or the matching page above, matched by file name) |

## Why these are not true 301s

The site is hosted on GitHub Pages (`CNAME` + `.nojekyll`), which cannot send
server-side redirects. Each page above is a stub with an instant
`<meta http-equiv="refresh">`, a `window.location.replace()` call and a
`rel="canonical"` pointing at the new URL. Search engines treat this as a
permanent move, but the HTTP status is still 200 (404 for unknown paths).

For real 301s, put the domain behind a host that supports redirect rules, e.g.:

- **Cloudflare** (DNS proxied): a Redirect Rule / Bulk Redirect from
  `gridlinestudiochi.com/*` with status 301, mapping the paths above.
- **Netlify / Vercel**: deploy this repo there and add the equivalent
  `_redirects` / `vercel.json` rules.

Nothing in this branch changes DNS or deployment settings.

`CNAME` and `.nojekyll` must stay in the repo root.
