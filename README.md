# Ashafaq Car Wash — Landing Site

Marketing site for **Ashafaq Car Wash** (الشفق لغسيل السيارات), a Riyadh-based car-wash brand founded in 2017. The site serves as the storefront: services, pricing, branches, corporate fleet offering, mobile-wash service, mobile-app pitch, blog, and FAQ.

Live at: **https://ashafaq-wash.net/**

---

## Tech stack

- **Next.js 16** (App Router, Turbopack)
- **React 19** + **TypeScript** (strict)
- **Tailwind CSS v4** (light theme; design tokens in `app/globals.css`)
- **Framer Motion** for entry animations
- **Leaflet + react-leaflet** for the branches map (Carto light tiles)
- **Static export** (`output: "export"` in `next.config.ts`) — the entire site ships as pre-rendered HTML/CSS/JS, no server runtime

## Run locally

```bash
npm install
npm run dev       # starts http://localhost:3000
npm run build     # produces the static site in out/
npm run lint      # eslint
```

Requires **Node ≥ 22** (pinned in `package.json` engines). Node 20 reached EOL on 2026-04-30; Node 22 is in LTS Maintenance (supported until 2027-04) and Node 24 is the current Active LTS.

## Deployment (cPanel static hosting)

1. `npm run build` — emits everything into `out/`.
2. Upload the **contents of `out/`** (not the folder itself) into the domain's document root (e.g. `public_html/`).
3. Do NOT add a catch-all Apache rewrite; the site relies on real HTML files per route.
4. `trailingSlash: true` is enabled — every route emits as `route/index.html`, so Apache's default `DirectoryIndex` handles routing without any config.

Optional `.htaccess` in the doc root:

```apache
DirectoryIndex index.html
ErrorDocument 404 /404.html
```

Long-lived cache headers are safe on `_next/static/*` (files are hashed).

## Project structure

```
app/                       Next.js App Router — every route lives here
├── page.tsx               Home page (teaser composition)
├── layout.tsx             Root layout (fonts, metadata, JSON-LD, LanguageProvider, Navbar, Footer)
├── globals.css            Design tokens + utilities (.card, .btn-primary, .eyebrow, ...)
├── icon.png               Favicon (Next auto-serves)
├── apple-icon.png         Apple touch icon
├── robots.ts              Generates /robots.txt at build
├── sitemap.ts             Generates /sitemap.xml at build
├── services/              /services/
├── prices/                /prices/
├── branches/              /branches/ + /branches/[slug]/  (10 dynamic branch pages)
├── fleet/                 /fleet/
├── app/                   /app/  (route named "app" — different from the router directory)
├── mobile-wash/           /mobile-wash/
├── faq/                   /faq/
├── contact/               /contact/
└── blog/                  /blog/ + /blog/[slug]/  (6 SSG article pages)
components/                Shared React components (all client-side)
lib/
├── i18n.ts                AR + EN dictionaries + CONTACT constants
├── branches.ts            Branch records + Branch type + helpers
├── blog.ts                Blog article catalogue + ArticleBody type system
└── testimonials.ts        Customer testimonials data (currently empty — pending real reviews)
public/images/             Static assets (logos, screenshots, vehicle photos)
```

## i18n (Arabic / English)

Language state is client-side only, persisted in `localStorage` via `components/LanguageProvider.tsx`. Both AR and EN share the same URL — there is no `/en/` route. Consequences:

- Every user-facing string lives in `lib/i18n.ts` under `dictionaries.ar.*` and `dictionaries.en.*`. Both dictionaries **must have identical shape** — TypeScript enforces this via the shared `Dictionary` type at the bottom of the file.
- To add a new string, add the key to BOTH dictionaries. Consumer components pull it via `const { dict } = useLang()`.
- The `<html dir>` and `<html lang>` attributes are swapped at runtime when the user toggles the language.
- Blog article bodies are **Arabic-only** by design (Riyadh audience). The `<article>` element in `app/blog/[slug]/ArticleClient.tsx` is force-set to `dir="rtl" lang="ar"` regardless of site language toggle.

## Adding a new branch

1. Open `lib/branches.ts`.
2. Add a new record to the `BRANCHES` array. Required fields: `id`, `slug` (kebab-case latin), `nameAr`, `nameEn`, `lat`, `lng`, `mapsUrl`.
3. Optional fields: `hours`, `servicesAvailable[]`, `photoSrc`, `googleReviewsUrl`, `googleMapsUrl`. Leave them undefined if unknown — the UI already handles missing values gracefully (e.g. hours block shows a "check on Google Maps" link if `hours` is empty).

That's it. The new branch **automatically**:
- Gets a dedicated page at `/branches/[slug]/` via `generateStaticParams` in `app/branches/[slug]/page.tsx`.
- Appears in the /branches overview map + list.
- Gets a sitemap entry (`app/sitemap.ts` maps over `BRANCHES`).
- Shows up in the dynamic neighborhood list rendered inside the `/blog/car-wash-branches-riyadh` article.

## Adding a new blog article

1. Open `lib/blog.ts`.
2. Add a new entry to `BLOG_ARTICLES`. Required fields: `slug`, `title`, `metaTitle`, `metaDescription`, `category`, `excerpt`.
3. To add a full article body, populate the optional `body: ArticleBody` field. Shape:

```ts
body: {
  sections: [
    { paragraphs: [/* intro */] },                // no heading = intro block
    { heading: "H2 heading", paragraphs: [...] }, // regular H2 section
  ],
  closingLine: "optional italic closer",
  related: {                                       // optional related-links block
    title: "روابط ذات صلة",
    links: [{ label: "الفروع", href: "/branches/" }],
  },
}
```

Each paragraph is either:
- A plain string, or
- `{ segments: [...] }` where segments alternate raw text and `{ text, href }` link objects (rendered via `next/link`), or
- `{ dynamic: "branchList" }` — resolved at render time from `lib/branches.ts` (used to keep the branches article's neighborhood list in sync with real data).

Articles without a `body` render the excerpt as placeholder — no code changes needed to publish metadata-only stubs.

The article automatically gets a static page at `/blog/[slug]/`, a sitemap entry, and per-slug SEO metadata.

## Known follow-ups

- **Testimonials are placeholder-only.** `lib/testimonials.ts` exports an empty `TESTIMONIALS` array. `components/Testimonials.tsx` renders a "coming soon" card until real reviews are added. When you have reviews, drop them into the array — the component switches to a card grid automatically.
- **Schema.org LocalBusiness structured data** is present in `app/layout.tsx` as a JSON-LD `@graph` (WebSite + LocalBusiness entities). Extending it with `AggregateRating`, per-branch `LocalBusiness` nodes, and `Review` entries is deferred until real review data is available.
- **Google Reviews integration** — the branch data model has an optional `googleReviewsUrl` field on `Branch`, and `BranchClient.tsx` conditionally renders a "read reviews on Google" button when populated. All 10 branches currently have `googleReviewsUrl: undefined`; populate them when you have the URLs.
- **Franchise section** is currently a CTA block on the homepage (`components/Franchise.tsx`) with no dedicated page. Promoting it to `/franchise/` is a follow-up when there's franchise-specific copy to write.
- **Real branch hours and photos** — `Branch` has optional `hours` and `photoSrc` fields, populated for zero branches today. Branch pages currently fall back to a "check on Google Maps" hint for hours and to `/images/ashafaq_home.jpg` for the photo. Drop real values into the branch records when you have them.
- **Accordion answer inline links (FAQ page)** — FAQ answers are rendered as plain strings today. If you want clickable inline links inside answers (like blog paragraphs support), extend `faqPage.categories[].items[].a` from `string` to `string | RichParagraph` and add ~10 lines of segment-walking to `FaqClient.tsx`. All existing plain-string answers keep working (union type covers them).
