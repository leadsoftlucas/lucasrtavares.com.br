# RavenDB Design System

Brand + product design system for **RavenDB** (Hibernating Rhinos Ltd.), the modern NoSQL document database.

**Sources**
- `uploads/Brand.pdf` — RavenDB Brand Guidelines, © 2023 Studio NikaPika (19 pages)
- `uploads/Presentation4.pptx` — 2026 presentation template (7 slides): extended color palette, cosmic/neon visual language, 3D product renders, full-color raven-R mark
- Website: [ravendb.net](https://ravendb.net)

## Index

- `styles.css` — CSS variables (color, type, spacing, radii, shadow, motion, gradients)
- `assets/logo/` — Full-color raven-R mark
- `assets/backgrounds/` — Brand backgrounds: radial blue hero, cyan→blue gradient, off-white dot grid, cosmic warp, gradient bars (H/V), deep-blue gradient
- `assets/renders/` — 3D neon product renders (cloud, database)
- `assets/social/` — GitHub, LinkedIn, YouTube icons
- `preview/` — `@dsCard` preview tiles rendered on the Design System tab
- `templates/deck/` — Pitch/marketing deck starter (`Deck.dc.html`)
- `SKILL.md` — Agent Skill manifest

---

## Content Fundamentals

**Tone:** confident, technical, no-nonsense. RavenDB writes for developers and technical decision-makers. Copy is direct and specific — never fluffy. Sentence case in headlines; ALL-CAPS reserved for overlines and small labels. Prefer "you" over "we"; avoid marketing hyperbole ("revolutionary", "game-changing"). Emoji are **not** used in product copy or brand materials.

**Vibe:** engineering-first, quietly premium. The bird is watchful and precise — the writing should feel the same.

---

## Visual Foundations

### Color

Two layers:

1. **Core brand** (from 2023 guidelines) — Blue `#388EE9`, Turquoise `#1CC8EE`, Black `#0F1425`, plus a neutral scale.
2. **Extended palette** (from 2026 PPT) — Deep Blue `#0C2FA5`, Midnight `#071F72`, Teal `#0097A7`, Neon Purple `#7B51FF`, Neon Mint `#63FFA6`. Used on dark backgrounds and 3D renders.

Gradients are the brand's signature — `--grad-brand` (blue→cyan, 135°) is the workhorse; `--grad-cosmic` (purple/cyan/midnight radial) sets the tone on hero slides.

### Type

**Montserrat** everywhere. Weights 300–900. `-0.02em` letter-spacing on display and headings. Small labels use ALL-CAPS at `0.22em` tracking. Mono is JetBrains Mono for code.

### Backgrounds

Four families:
- **Light paper** — `#F7F5FA` with a soft lilac dot grid (see `dots-offwhite.jpg`)
- **Brand blue** — radial or linear blue→cyan; used for hero moments
- **Deep blue** — `#388EE9 → #071F72` linear gradient; for dark editorial slides
- **Cosmic** — near-black navy with purple/cyan light-streaks; for premium/hero slides featuring 3D renders

Full-bleed images are common. No hand-drawn illustrations. 3D product renders are dark-navy scenes with neon rim-light (cyan / magenta / mint).

### Layout & rhythm

- Generous margins, large type. Hero slides put the mark and gradient in tension against negative space.
- The gradient bar (horizontal or vertical) is used as a section divider or edge accent — never as body decoration.
- Cards: white, `--r-md` (12px) corners, `--shadow-md`. Corners get more generous (`--r-lg`, `--r-xl`) on marketing surfaces.

### Motion & interaction

- Easing: `cubic-bezier(.2,.7,.2,1)` out, `cubic-bezier(.6,.05,.98,.6)` in.
- Durations: 120ms / 200ms / 360ms.
- Hover: slight opacity dip (`0.85`) or a shift toward `--rdb-turquoise`. No bounce, no scale-up.
- Press: quick color darken, no shrink.
- Glow shadows (`--shadow-glow-*`) are used sparingly on dark surfaces to echo the neon renders.

### Iconography

- Product icons follow the **3D neon render** style on dark navy: rim-lit in cyan/purple/mint, glass-like, no ground.
- UI icons: line, 2px stroke, rounded caps. When needed, substitute from **Lucide** (CDN) — closest match to the wordmark's geometry. Flag substitutions.
- Social icons: soft lilac-on-paper (see `assets/social/`).
- Emoji and unicode symbols are **not** used as icons.

---

## Logo rules (from 2023 guidelines)

- Wordmark uses **Montserrat Bold** — do not substitute.
- Wordmark and R-mark are used **independently**; do not pair or lock them together.
- Do not stretch, recolor per-letter, add drop shadows, or place on busy imagery.
- Full-color R-mark uses the brand gradient; on dark surfaces use the same mark (its cyan/blue reads on navy).

---

## Font substitution

The 2023 guidelines specify Montserrat, and the file is loaded from Google Fonts here — no substitution needed. If the guidelines' custom Montserrat OTF is required for print production, request it from the brand owner.

---

## For agents

Read `SKILL.md`, load `styles.css`, and reference assets by their paths above. When building slides or marketing surfaces, prefer the **cosmic/deep-blue** aesthetic for hero moments and the **paper + dot-grid** for content-dense slides.
