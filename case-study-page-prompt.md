# Prompt — "Case Study / Project Detail" page (Panacea Junkiez style)

Paste this into another project (with the Gridline Studio design system bound) to generate a matching page. Replace the ALL-CAPS placeholders with your project's content.

---

Build a **project case-study page** as a single Design Component, styled with the Gridline Studio design system. Match this exact structure, spacing, and typographic system — it should read as a quiet, editorial, monochrome case study.

**Global setup**
- Load the Gridline Studio token stylesheets and `_ds_bundle.js` in `<helmet>`, plus `image-slot.js` for droppable image placeholders.
- Body background `var(--surface-page)`, text `var(--text-primary)`. Links default to `var(--text-primary)`, hover `var(--text-secondary)`.
- Fonts come only from design-system tokens: `var(--font-display)` for headings, `var(--font-body)` (Helvetica Neue Light, weight 300) for body, mono for coordinates/hex. Any project-specific brand fonts go only inside the "type system" specimen cards.
- Wrap everything in a full-height container; mount a shared `Header` at the top and `Footer` at the bottom via `<dc-import>`.

**Sections, in order (all centered, 40px page padding):**

1. **Eyebrow + title block** (`max-width:1000px`, centered)
   - A tracked-uppercase "← All work" back link (11px, letter-spacing 0.14em, `--text-muted`).
   - A tracked-uppercase category/year eyebrow, e.g. `LOGO REFRESH — 2026`.
   - `<h1>` in display font, weight 600, ~64px, line-height 1.04, letter-spacing −0.03em: **PROJECT NAME**.
   - One 20px body-font intro paragraph (`--text-secondary`, max-width 640px).

2. **Meta strip** — a 3-column grid inside a top+bottom hairline border (`--border-default`), 28px vertical padding. Each cell: tiny uppercase mono-ish label (`--text-muted`) over a 15px value. Columns: **Client · Tier · Year** (rename as needed).

3. **Hero image** (`max-width:1200px`) — a `5/2` aspect-ratio `<image-slot>` (fit="contain"), distinct id, placeholder text naming the image.

4. **The challenge** — centered eyebrow "The challenge" over a large display-font statement (weight 500, ~26px, line-height 1.4, max-width 760px). One or two sentences of tension/positioning.

5. **Before** — numbered section header (`00` in muted + display-font `Before` at 22px), then a centered `<figure>`: the old asset image (max-width ~420px) with a 14px caption explaining what was wrong.

6. **Deliverables — after** — a centered tracked-uppercase eyebrow, then a series of numbered blocks. Each block starts with a hairline top border, a `NN` index (muted) + display-font 22px title, then its content:
   - **01 Logo variations** — 2-up grid of `16/9` `<image-slot>`s with uppercase captions. (Put one variation on an ink background `var(--gl-ink-9)` to show reversed use.)
   - **02 Color palette** — 3–5-column grid of 132px swatches (hairline border), each with a name and hex in mono.
   - **03 Two-font type system** — 2-up grid of bordered cards: one Display, one Body. Each shows `Aa` at 96px in the actual font, the role label, and the font name.
   - **04 Branding guide PDF** — a bordered link row: file icon + title + "PDF" sublabel on the left, "Download →" on the right.
   - Add/remove numbered blocks to fit the project's deliverables; keep the same header pattern and 64px gaps.

7. **Next project** — a hairline-bordered link row (`max-width:1000px`): "Next project" eyebrow over a 32px display-font name, with a large `→` on the right, linking to the next case-study page.

**Rules**
- Two background colors max (cream page + ink accents). No gradients, shadows only where the DS uses them, hairline borders everywhere else.
- All decorative/photographic slots use `<image-slot>` with unique ids and descriptive placeholders — never fake imagery.
- Keep copy spare, confident, sentence case; uppercase only for tracked labels and coordinates.
