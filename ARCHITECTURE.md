# Architecture

The structure follows the four concerns from
[this guide](https://medium.com/bitsrc/frontend-architecture-a-complete-guide-to-building-scalable-next-js-applications-d28b0000e2ee):
component organisation, state management, data fetching, and performance/deployment.

The content comes from the USIF Figma file — its design system board defines the
tokens, type scale and rules that `app/globals.css` encodes.

## 1. Component organisation

Two homes for components, and the rule for picking one is ownership:

- **`components/ui/`** — used by more than one route, knows nothing about routes or
  domain data. `Button`, `Card`, `Chip`, `Accordion`, `Section`, `Container`,
  `Heading`, `Eyebrow`, `StatTile`, `ListRow`, `NoteStrip`, `Field`.
- **`app/<route>/_components/`** — used by exactly one route, named after the Figma
  section it renders (`01 / Hero` → `Hero.tsx`). Colocated so it is obvious what a
  route owns, and so deleting a route deletes its components too. The `_` prefix
  keeps the folder out of the router.
- **`components/sections/`** — composed sections shared by more than one route
  (`CtaBand`, `RatesTable`, `MediaFrame`). This is one deliberate extension to the
  guide's two-bucket model: a rates table is not a UI primitive, but it is also not
  owned by a single route, so neither existing bucket fit.

Promote a component from `_components/` to `components/ui/` the moment a second
route needs it — not in anticipation of one.

`components/layout/` holds page chrome (header, footer) mounted by the root layout.

## 2. State management

Pick by what kind of state it is, not by habit:

| Kind of state | Tool | Lives in |
| --- | --- | --- |
| Server state (anything the API owns) | React Query | `hooks/use-*.ts` |
| Simple global client state | Context | `lib/auth/`, `lib/theme/` |
| Complex shared client state | Redux Toolkit | *not used — see below* |

**Redux is deliberately absent.** The guide's own advice is to reach for it only
when client state is genuinely complex, and this site has none: the quote form is
a React Query mutation, and the nav and accordion are local component state.
Adding a store would have been dead code. If complex shared state arrives later,
`lib/store/` with slices is the place for it.

**Providers** are composed once in `providers/app-providers.tsx` and mounted by the
root layout. Both the Redux store and the React Query client are created through
factories, never as module singletons: a singleton would be shared across requests
on the server and leak one user's data into another's response.

## 3. Data fetching

| Pattern | When | Example |
| --- | --- | --- |
| Server Component (default) | Every marketing section | all of `app/**/_components/` except `GetAQuote` |
| React Query mutation in a Client Component | Interactive writes | `hooks/use-quote.ts` → `useSubmitQuote` |
| Route handler | Form submission target | `app/api/quote/route.ts` |
| `generateStaticParams` | Known-at-build content | add when `/blogs/[slug]` is designed |
| `<Suspense>` | Independent sections streaming separately | add when a section fetches |

This is a content site, so almost everything is a Server Component with no client
JavaScript. Only three components are `"use client"`: the header (menus), the
accordion, and the quote form. All requests go through `lib/api/client.ts`, so the
base URL, headers and error shape (`ApiError`) are defined once.

## 4. Performance and deployment

- `next/image` for all images; `formats: ["image/avif", "image/webp"]`.
- `next/dynamic` for heavy, below-the-fold components.
- React Query: `staleTime` 5 min, `gcTime` 10 min — stops refetch storms on nav.
- `removeConsole` in production builds, `error`/`warn` kept.
- Security headers set in `next.config.ts`.
- `output: "standalone"` behind `BUILD_STANDALONE=true` for container deploys.

## Errors

- `app/error.tsx` — route-level failures.
- `app/not-found.tsx` — 404.
- `components/ErrorBoundary.tsx` — wrap a single widget so one broken section does
  not take down the page. Both log to `console.error`; swap in Sentry/LogRocket there.

## Testing

Pyramid: ~70% unit, ~20% integration, ~10% E2E.

- **Unit** — `components/ui/__tests__/`. Jest + Testing Library.
- **Integration** — `app/**/__tests__/`. Rendered through `test-utils/render.tsx`,
  which wraps components in the *real* provider stack.
- **E2E** — `e2e/`, Playwright against a production build, on Chromium and WebKit.
  `desktop.spec.ts` runs at 1440 and `mobile.spec.ts` at 390 — the two board widths
  in the design file. Both assert design-system rules directly: the 1280 content
  column, the type scale, the 16px floor and 44px tap targets.

jsdom implements neither `matchMedia` nor `<dialog>`'s modal methods; both are
stubbed in `jest.setup.ts`.

## Conventions

- Path alias `@/*` maps to the project root. Prefer it over `../../..`.
- Components are `PascalCase.tsx`; hooks, utils, and slices are `kebab-case.ts`.
- Each folder has an `index.ts` barrel — import from `@/lib/api`, not `@/lib/api/client`.
- `process.env` is read only in `lib/config/env.ts`. Server-only values go on
  `serverEnv` and must never be imported from a `"use client"` module.
