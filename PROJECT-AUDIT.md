# Ashafaq Landing Page — Project Audit

## 1. Project Type & Stack

- **Framework**: Next.js **16.2.9** (App Router) with React **19.2.4** and TypeScript **^5**.
- **Rendering mode**: **Static export** (`output: "export"` in `next.config.ts`). No server runtime at deploy time — the site ships as pre-rendered HTML/CSS/JS.
- **Bundler**: Turbopack (Next 16 default).
- **Language**: TypeScript (`strict: true`, `target: ES2017`, `moduleResolution: bundler`).
- **Node version**: not pinned in `package.json` (`engines` field absent). `@types/node: ^20` is a type-only hint; the project should build on Node 18.18+ per Next 16 requirements.

## 2. File Structure

```
ashafaq_protofolio/
├── app/                        # Next.js App Router
│   ├── layout.tsx              # Root layout, metadata, JSON-LD, fonts
│   ├── page.tsx                # Home page (single-page composition)
│   ├── globals.css             # Tailwind import + design tokens + keyframes
│   ├── icon.png                # Auto-served favicon (512×512)
│   ├── apple-icon.png          # Auto-served Apple touch icon (512×512)
│   ├── robots.ts               # Generates /robots.txt at build
│   └── sitemap.ts              # Generates /sitemap.xml at build
├── components/                 # All page sections (client components)
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Trust.tsx
│   ├── Services.tsx
│   ├── AppSection.tsx
│   ├── Companies.tsx           # For-business fleet section
│   ├── Branches.tsx            # Map + branch list
│   ├── BranchesMap.tsx         # Leaflet map (dynamically imported, SSR off)
│   ├── Why.tsx
│   ├── Franchise.tsx
│   ├── Social.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── LanguageProvider.tsx    # AR/EN context + localStorage
├── lib/
│   ├── i18n.ts                 # AR + EN dictionaries + CONTACT constants
│   └── branches.ts             # Branch data + SOCIAL_LINKS + APP_LINKS
├── public/
│   └── images/                 # Logos, app screenshots, vehicle assets
├── next.config.ts
├── tsconfig.json
├── eslint.config.mjs
├── postcss.config.mjs
├── package.json / package-lock.json
├── AGENTS.md / CLAUDE.md       # Repo guidance for AI agents
└── README.md                   # Default create-next-app README
```

- **Pages**: single route (`app/page.tsx`) composed of the section components under `components/`.
- **Styling**: single global stylesheet `app/globals.css` (Tailwind v4 `@import` + design tokens + keyframes). No CSS modules, no `styled-components`.

## 3. Dependencies

**Runtime dependencies (all actually used):**
- `next` **16.2.9** — framework.
- `react` / `react-dom` **19.2.4** — UI runtime.
- `framer-motion` **^12.40.0** — used in every section component for scroll/entry animations (`motion.div`, `AnimatePresence`, `whileInView`).
- `leaflet` **^1.9.4** + `react-leaflet` **^5.0.0** — used in `components/BranchesMap.tsx` for the Riyadh branch map with Carto dark tiles.
- `@types/leaflet` — TypeScript types for Leaflet (used via the map component).

**Dev dependencies (all actually used):**
- `tailwindcss` **^4** + `@tailwindcss/postcss` — styling. Imported via `@import "tailwindcss"` in `app/globals.css` with a `@theme inline` block.
- `typescript` **^5**, `@types/react`, `@types/react-dom`, `@types/node`.
- `eslint` **^9** + `eslint-config-next` **16.2.9** — via `npm run lint`.

**UI libraries**: **Tailwind CSS v4 only**. No Bootstrap, MUI, shadcn, HeadlessUI, Radix, Chakra, or other component libraries. All UI is hand-built.

## 4. Current Design

- **Color scheme**: dark theme. Design tokens declared in `app/globals.css` under `@theme inline`:
  - `--color-background: #070819` (deep navy, page bg)
  - `--color-foreground: #ffffff`
  - `--color-brand: #1B1F52` (deep blue)
  - `--color-brand-2: #2E93B9` (cyan/teal accent)
  - `color-scheme: dark`
- **Brand gradient**: `linear-gradient(135deg, #1B1F52 0%, #2E93B9 100%)` — exposed via utility classes `.bg-brand-gradient` and `.text-gradient` (which additionally interpolates through `#c8e7f3`).
- **Fonts**: loaded through `next/font/google` in `app/layout.tsx`:
  - **Cairo** (`--font-cairo`) with `arabic` + `latin` subsets — default for RTL.
  - **Inter** (`--font-inter`) with `latin` subset — default for LTR.
  - Both `display: swap`. Font family switches based on `html[dir]` in `globals.css`.
- **Design system**: informal but consistent — a set of hand-rolled utility classes in `globals.css` acts as the design system:
  - `.glass` / `.glass-strong` — translucent backgrounds with `backdrop-filter: blur()`.
  - `.glow-ring` — layered `box-shadow` in the cyan brand color.
  - `.text-gradient` / `.bg-brand-gradient` / `.bg-brand-gradient-soft` — gradient utilities.
  - `.shine` — animated highlight sweep on hover.
  - Custom keyframes: `mesh-shift` (blob drift), `float-y` (bob), `shine`, `drift` (particles).
  - `prefers-reduced-motion` and mobile-specific overrides included.
- **Section pattern** (reused across every section): small cyan eyebrow tag (uppercase, `tracking-[0.3em]`) → large `.text-gradient` `<h2>` → white/65% subtitle → content grid using `.glass` cards with hover states.

## 5. Pages & Content

- `/` — Single-page landing site. Sections rendered in order by `app/page.tsx`:
  - **Navbar** — sticky header with logo, nav links, language toggle (AR/EN), mobile hamburger drawer.
  - **Hero** (`#home`) — headline, CTAs, trust strip, animated screenshot mock card.
  - **Trust** — stat strip (year founded, branches, rating).
  - **Services** (`#services`) — 4-card grid of services.
  - **AppSection** (`#app`) — mobile app pitch with iOS/Android download links and phone screenshot carousel.
  - **Companies** (`#companies`) — corporate fleet offering: billing models, service channels, vehicle sizes, features, CTA row.
  - **Branches** (`#branches`) — Leaflet map + scrollable branch list.
  - **Why** — trust card + feature checklist.
  - **Franchise** (`#franchise`) — investment CTA.
  - **Social** — social links.
  - **Contact** (`#contact`) — download/call/whatsapp/email CTAs.
  - **Footer** — brand, quick links, socials, contact.
- `/robots.txt` — generated by `app/robots.ts`.
- `/sitemap.xml` — generated by `app/sitemap.ts`.
- `/icon.png` and `/apple-icon.png` — served via App Router file conventions.
- `/404` — Next.js default not-found page.

## 6. Backend & Database

- **No backend, no API routes, no database.** There are no `app/api/*` files, no `route.ts` handlers, no server actions, no cookies/headers use, no environment variables consumed at runtime.
- All data is either static in the code (`lib/branches.ts`, `lib/i18n.ts`) or fetched client-side from third parties (Leaflet tiles from `basemaps.cartocdn.com`, external `wa.me` / `tel:` / `mailto:` links).
- Language state is client-side only, persisted in `localStorage` via `components/LanguageProvider.tsx`.

## 7. Deployment

- **No deployment config files in the repo**: no `vercel.json`, `netlify.toml`, `Dockerfile`, `.github/workflows/`, `.htaccess`, or `render.yaml`.
- **`next.config.ts` reveals static-export intent**: `output: "export"` + `trailingSlash: true` + `images.unoptimized: true` — the build emits an `out/` folder of static HTML/CSS/JS suitable for any static host (Apache/Nginx/cPanel/S3/etc).
- **Currently deployed at**: `https://ashafaq-wash.net` — inferred from:
  - `SITE_URL = "https://ashafaq-wash.net"` in `app/layout.tsx:19`.
  - `metadataBase`, canonical, OG, and Twitter meta all resolve against this host.
  - `app/sitemap.ts` base URL and `app/robots.ts` Host/Sitemap fields both point to `https://ashafaq-wash.net`.
- **Build artifacts committed to repo root**: `out.zip`, `out2.zip`, `out_old.zip` — likely manual pre-deploy snapshots ready to upload to cPanel. `out/` itself is gitignored.

## 8. Notable Issues

- **Committed build artifacts**: `out.zip`, `out2.zip`, `out_old.zip` in the repo root are large binary snapshots of the `out/` directory. `out/` is already in `.gitignore` — these zip files should probably be too (or moved to a `dist/` bucket). Adds churn to git history.
- **Default `create-next-app` cruft still in `public/`**: `file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, `window.svg` are unreferenced by any component and are being copied into every deployment. Safe to delete.
- **Duplicate logo asset**: `public/images/Logo1.png` and `public/images/Logo11.png` are both 500×268. `Logo11.png` doesn't appear to be referenced anywhere — likely dead file.
- **README is the stock create-next-app template** — no project-specific documentation about deployment (basePath history, cPanel upload path, robots.txt-at-root caveat, etc.). Given the deployment migrated from `/ar/` subpath to root, and given the app is hosted on a subdomain that used to redirect from the main domain, a short deployment README would be valuable.
- **Language routing is client-side only** — both AR and EN content live on the same URL and are toggled via `localStorage`. Search engines will only ever see the SSR-default (Arabic) version. There is no `/en/` route. Not a bug (this was an intentional decision documented in the SEO passes) but worth flagging: EN content is effectively invisible to crawlers.
- **`AGENTS.md` and `CLAUDE.md`** exist at the repo root and contain AI-agent instructions. Not a bug, just non-standard project files.
- **Two conversation-note zips (`out.zip` / `out2.zip` / `out_old.zip`)** are tracked or being tracked. Recommend adding `out*.zip` to `.gitignore`.
- **No test suite** — no `test/`, `__tests__/`, `*.test.ts(x)`, Vitest/Jest/Playwright configs. Acceptable for a marketing landing page but worth noting.
- **`Why.tsx` currently references `Logo1.png` inside a `w-16 h-16 rounded-2xl bg-brand-gradient p-3` tile** — same wide-logo-in-a-small-square pattern that was fixed in header/footer. Renders as a tiny mark inside a gradient tile. Cosmetic, but inconsistent with the header/footer fix.
- **`Hero.tsx` has a similar in-card mini-logo** (`w-12 h-12 rounded-2xl bg-brand-gradient p-2` around `Logo1.png`) inside the hero visual card. Same cosmetic inconsistency.
- **No `engines` field in `package.json`** — CI/host runtimes must guess a Node version compatible with Next 16 (Node ≥18.18).
