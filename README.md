# Gridline Studio — gridlinestudiochi.com

Static site. No build step. Upload the contents of this folder to the root of the
GitHub Pages repository and it deploys as-is.

## Deploy

1. Upload every file and folder in this directory to the repo root.
2. Settings → Pages → Source: `main` / `/ (root)`.
3. `CNAME` is already present, so the custom domain `gridlinestudiochi.com` is picked up
   automatically. Point the DNS `A`/`CNAME` records at GitHub Pages if not already done.

## Important

`.nojekyll` **must stay in the repo root.** Without it, GitHub Pages ignores any folder
whose name starts with an underscore, which would drop `_ds/` and break every page's
styling.

## Structure

    index.html        redirect from / to Home.dc.html
    Home.dc.html      home
    Work.dc.html      work / services-as-work
    Services.dc.html  services
    About.dc.html     about
    Contact.dc.html   contact
    Header.dc.html    shared header (imported by the pages)
    Footer.dc.html    shared footer (imported by the pages)
    support.js        runtime for the .dc.html pages — required
    sitemap.xml       sitemap
    CNAME             custom domain
    assets/           images, PDFs, site.css, analytics.js
    _ds/              Gridline Studio design system (tokens + component bundle)

Every page loads `support.js`, `_ds/.../_ds_bundle.js`, and `assets/site.css`. All paths
are relative, so the site also runs from a subdirectory.
