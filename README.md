# People + Spaces

Website for People + Spaces, an interior design studio. The home page is an interactive moodboard. Each pinned material links to a page.

## Getting started

```sh
npm install
npm run dev       # local dev server
npm run build     # type-check + production build into dist/
npm run preview   # serve the production build
npm run images    # regenerate optimised images from /Resources
```

## Stack

- **React + TypeScript** on **Vite**
- **React Router**: routes in `src/App.tsx`; inner pages are code-split
- **Tailwind CSS v4**: design tokens (colours, fonts) live in `src/index.css` under `@theme`
- **Motion** for animation, **Radix Dialog** for the menu, **react-compare-slider** for before/after,
  **react-hook-form + zod** for the contact form, **lucide-react** icons, **Fontsource** fonts (Abel, Lexend Deca, La Belle Aurore)
- **sharp** (dev only) converts the source artwork in `/Resources` into WebP in `src/assets/images`

## Where things live

| What | Where |
| --- | --- |
| Site details, nav, moodboard hotspot positions, material swatches | `src/content/site.ts` |
| Moodboard sizing (sideways scroll on phones, full board on wide screens) | `.board*` rules in `src/index.css` |
| Pages | `src/pages/` |
| Shared components (header, menu, footer, hotspots…) | `src/components/` |

Hotspot `x`/`y` values are percentages of the 1920×1080 moodboard image.

## Deploying

This is a static single-page app. Any static host works (Netlify, Vercel, Cloudflare Pages…). Configure it to
fall back to `index.html` for unknown paths so that URLs like `/about` load directly.
