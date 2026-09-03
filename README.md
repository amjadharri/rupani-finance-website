# U.S. Insurance Funding (USIF)

Marketing site built from the USIF Figma design system.
Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4.

## Getting started

```bash
cp .env.example .env.local
npm install
npm run dev
```

Open http://localhost:3000.

## Scripts

| Script | What it does |
| --- | --- |
| `npm run dev` | Dev server (Turbopack) |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run lint` | ESLint |
| `npm test` | Jest — unit + integration |
| `npm run test:e2e` | Playwright — Chromium + WebKit, desktop (1440) and mobile (390) |

## Routes

| Route | Figma board |
| --- | --- |
| `/` | Homepage — `57-16` |
| `/about` | About Us |
| `/how-it-works` | How It Works |
| `/api/quote` | Callback request handler for the Get a Quote form |

Navigation also links to `/what-we-finance`, `/who-we-serve`, `/states-we-fund`,
`/blogs`, `/faqs`, `/testimonials`, `/contact`, `/apply`, `/become-an-agent` and
`/login`. Those boards are not in the design file yet, so the routes 404 until
they are designed.

## Design system

Tokens live in `app/globals.css`. The colour collection has two modes; every page
board is bound to **Red-led**, where `brand/blue` resolves to red and `brand/red`
to navy. Switching is a matter of the `data-mode` attribute on `<html>`.

Rules enforced from the Figma `05 / Rules` board:

- **Two typefaces only** — Archivo (display), Public Sans (text).
- **16px floor** — asserted in `e2e/mobile.spec.ts`.
- **8px radius** — `rounded-card`; the circular logo lockup is the only exception.
- **Tokens, not hexes** — no raw hex appears in any component.
- **44px tap targets** — asserted in `e2e/mobile.spec.ts`.

See [ARCHITECTURE.md](./ARCHITECTURE.md) for layer boundaries and conventions.

## Placeholders

Three things need client assets before launch; all are marked `PLACEHOLDER` in code:

1. `components/layout/Logo.tsx` — the real USIF mark (a 56px circle).
2. `components/sections/MediaFrame.tsx` — greyscale photography. It holds the exact
   aspect ratio, so dropping in `next/image` changes no layout.
3. `app/api/quote/route.ts` — no CRM or mail transport is wired up; the handler
   validates and logs.

## Deployment

Serverless (Vercel/Netlify) works as-is. For containers,
`docker build -t usif .` — the Dockerfile sets `BUILD_STANDALONE=true`.

CI runs typecheck, lint, unit tests, build and the Playwright suite on every PR.
