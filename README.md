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
| `/what-we-finance` | What We Finance |
| `/who-we-serve` | Who We Serve |
| `/states-we-fund` | States We Fund |
| `/why-choose-usif` | Why Choose USIF |
| `/blogs` | Blogs — titled "Resources" on the board |
| `/blogs/[slug]` | Blog Detail Page |
| `/faqs` | FAQS |
| `/testimonials` | Testimonials |
| `/contact` | Contact Us |
| `/api/quote` | Callback request handler for the Get a Quote form |
| `/popup-preview` | Preview harness for the shade pop-up — `noindex`, out of the sitemap |

`/resources` redirects to `/blogs`: the Blogs board *is* the resources centre —
its eyebrow reads "Resources" and its breadcrumb Home / Resources — and both the
nav and the footer point at that name.

Navigation also links to `/apply`, `/become-an-agent` and `/login`. Those boards
are not in the design file yet, so the routes 404 until they are designed.

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

These still need client input; all are marked `PLACEHOLDER` in code:

1. `components/layout/Logo.tsx` — the real USIF mark (a 56px circle).
2. `app/api/quote/route.ts` — no CRM or mail transport is wired up; the handler
   validates and logs.
3. `app/testimonials/page.tsx` — the Google Business Profile review URL, and the
   "Submit Your Testimonial" form, which the board itself draws as a dashed
   placeholder over the note "Form fields to be defined with the USIF team."
4. `lib/content/posts.ts` — only the article the Blog Detail board is drawn from
   has its body copy in the design. The other eight run their excerpt and say so.

## Images

`assets/images/` holds the photography exported from the Figma boards at 2x (1.5x
for two of the homepage images), already duotoned and cropped to their frames.
They are imported as static assets so `next/image` gets intrinsic dimensions and
a blur placeholder, and only the optimised copies ship — nothing sits in
`public/`.

Two section backgrounds are **not** real photos: `08 / Get a Quote` on the homepage
and the How It Works hero use image fills applied to the section frame itself, with
the content drawn on top, so they cannot be exported as clean assets from a
view-only file. Both are rendered as solid dark bands, which is close to how they
read in the design.

## Deployment

Serverless (Vercel/Netlify) works as-is. For containers,
`docker build -t usif .` — the Dockerfile sets `BUILD_STANDALONE=true`.

CI runs typecheck, lint, unit tests, build and the Playwright suite on every PR.
