@AGENTS.md

# Ashafaq Landing — Working Context

Persistent context for continuity across sessions. Update this file as
the project evolves — do NOT delete or reword existing rules unless the
client explicitly changes them.

Today's date context when this file was last updated: **2026-08-26**.

---

## 1. Design system

**Palette (exact hex values — do not paraphrase):**

| Token | Hex | Role |
|---|---|---|
| Navy | `#0B1F3A` | Headings, footer, contact block, franchise block, primary text on dark |
| Blue | `#1F5EFF` | Primary interactive: links, buttons, icons, focus states |
| Light blue | `#EAF1FF` | Soft backgrounds, hover surfaces, icon tiles |
| White | `#FFFFFF` | Main page background |
| Light gray | `#F5F7FA` | Alternate section backgrounds, card interiors |
| Secondary text gray | `#667085` | Subtitles, captions, muted copy |
| Primary text | `#111827` | Body copy on white |
| Gold | `#F5B942` | **RESERVED — offers/promotions/discount badges ONLY. Never general UI, never CTA buttons, never link colors.** |

**Rules:**
- **Never use more than 3 primary colors on a single screen/section.**
- **No gold anywhere except real promotional badges.** The `.badge-offer` utility class is ready in `globals.css`; use it, don't invent gold accents.
- **Light corporate theme.** No glassmorphism / heavy backdrop blur (`.glass` and `.glass-strong` are aliased to plain `.card` styling in `globals.css`).
- **Three intentional dark navy anchor blocks** on the site: Footer, Contact CTA block (`components/Contact.tsx`), and Franchise block (`components/Franchise.tsx`). These are the only sections that use `bg-[#0B1F3A]` as a full-bleed background — they create visual rhythm on an otherwise light site. Don't add more dark blocks.

**Fonts:** `Cairo` (Arabic, `--font-cairo`) + `Inter` (English, `--font-inter`) both loaded via `next/font/google` in `app/layout.tsx`. Font family swaps based on `html[dir]` in `globals.css`.

**Shared utilities in `app/globals.css`:** `.card`, `.btn-primary`, `.btn-secondary`, `.eyebrow`, `.section`, `.section-alt`, `.container-x`, `.badge-offer`, `.text-gradient` (navy→blue, use sparingly — hero H1 only), `.bg-brand-gradient` (navy→blue). Reuse these rather than re-implementing per component.

---

## 2. Content authenticity rules (NON-NEGOTIABLE)

These have been re-established across many passes. Break these and the client will (rightly) push back:

- **Never invent business hours.** If `branch.hours` is undefined, render the "check on Google Maps" fallback link, NOT a fake "8am–10pm" placeholder.
- **Never invent phone numbers.** The site-wide phone lives in `CONTACT` in `lib/i18n.ts`. Per-branch phone numbers do not exist yet — if a branch had one, it would go in a new optional `Branch` field.
- **Never invent star ratings or review counts.** Earlier passes deleted a hardcoded "4.9/5 ⭐⭐⭐⭐⭐" trust chip because it had no data source. If asked to add a rating, verify it's backed by real data first.
- **Never invent testimonials or customer names.** Testimonials in `lib/testimonials.ts` came from real App Store / Instagram / Snapchat quotes and were intentionally recorded WITHOUT names (no name data was collected). Don't add fake names to make cards "look complete."
- **Never invent branch counts.** Always compute from `BRANCH_COUNT` / `BRANCH_COUNT_DISPLAY` in `lib/branches.ts` — hardcoding "11+" or "٫١١" was a recurring bug that took multiple sweeps to fully eliminate. Use `withBranchCount(str)` from `lib/i18n.ts` for i18n strings containing `{count}` placeholders.
- **Never invent Google reviews URLs.** `branch.googleReviewsUrl` is optional; the "Read reviews on Google" button on branch pages only renders when populated.
- **When real data is missing, omit the field/section cleanly** rather than showing a fabricated placeholder. The one exception: honest "not yet available, check X" fallbacks where explicitly established (currently only `branch.hours`).
- **Pricing is two-tier and both tiers must always be shown together.** External-only: 20/25/30 SAR (small/mid/large). Interior+exterior: 30/35/40 SAR. Never quote just one tier — that was a recurring stale-copy bug.
- **Free "لمسة الشفق" list is exactly 3 items**: تلبيس الدركسون، تلبيس القير، تعليقة عطر الشفق. Never introduce a 4th (an earlier "تلبيس المساحات" wiper cover was dropped by the client).

---

## 3. Key data shapes

### `lib/branches.ts` — Branch type

```ts
type Branch = {
  id: string;              // internal ID (kebab-case, matches slug today)
  slug: string;            // URL slug for /branches/[slug]/
  nameAr: string;          // e.g. "فرع المونسية"
  nameEn: string;          // e.g. "Al Munsiyah Branch"
  lat: number;             // real GPS
  lng: number;             // real GPS
  mapsUrl: string;         // existing google.com/maps place URL
  hours?: string;          // OPTIONAL — DO NOT INVENT
  servicesAvailable?: string[]; // OPTIONAL — omit for generic 2-tier fallback
  photoSrc?: string;       // OPTIONAL — /images/branches/*.jpg or similar
  googleReviewsUrl?: string; // OPTIONAL — only populate with real URLs
  googleMapsUrl?: string;  // OPTIONAL — override for "Open directions" button
};
```

Also exported: `BRANCH_COUNT` (integer), `BRANCH_COUNT_DISPLAY` (string like `"10+"`), `getBranchBySlug(slug)`, `buildDirectionsUrl(branch)`.

**Note on planned schema additions**: the in-flight prompt (see §6) will add `description` (Arabic) and possibly `descriptionEn` fields. When added, keep them optional and follow the same authenticity rule — no invented copy.

### `lib/blog.ts` — ArticleBody type system

```ts
type LinkSegment      = { text: string; href: string };
type ParagraphSegment = string | LinkSegment;
type RichParagraph    = { segments: ParagraphSegment[] };
type DynamicBlock     = { dynamic: "branchList" };  // renderer resolves at runtime
type Paragraph        = string | RichParagraph | DynamicBlock;
type ArticleSection   = { heading?: string; paragraphs: Paragraph[] };
type RelatedLink      = { label: string; href: string };
type ArticleBody      = {
  sections: ArticleSection[];
  closingLine?: string;
  related?: { title: string; links: RelatedLink[] };
};
type BlogArticle = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: string;
  excerpt: string;
  body?: ArticleBody;  // optional — articles without body render the excerpt as placeholder
};
```

Renderer lives in `app/blog/[slug]/ArticleClient.tsx`. Article bodies are **Arabic-only by design** — the `<article>` wrapper forces `dir="rtl" lang="ar"` regardless of site language toggle.

### `lib/i18n.ts` — bilingual dictionary

**Rule: every user-facing string lives in `dictionaries.ar.*` AND `dictionaries.en.*` — both dictionaries must have identical shape.** TypeScript enforces this via the `Dictionary` type at the bottom of the file.

Consumer pattern:
```tsx
const { dict } = useLang();
<h1>{dict.hero.headline}</h1>
```

For strings containing `{count}` placeholder, wrap with the helper:
```tsx
import { withBranchCount } from "@/lib/i18n";
<p>{withBranchCount(dict.hero.subheadline)}</p>
```

Article bodies (in `lib/blog.ts`) intentionally break this bilingual rule — they're Arabic-only. All other UI strings must have both AR and EN entries.

---

## 4. Current project state (as of 2026-08-26)

- **Branches: 10** in `lib/branches.ts`
  - Slugs: `al-nahdah`, `al-aziziyah`, `al-nadwah`, `al-munsiyah`, `al-manar`, `al-fayha`, `al-uraija`, `al-shifa`, `dar-al-baida`, `al-badiah`
  - Zero branches have real `hours`, `photoSrc`, `googleReviewsUrl`, or per-branch `telephone` populated. `description` field does not exist yet — will be added in §6 work.
- **Blog articles: 6** in `lib/blog.ts`, all with full Arabic `body` populated:
  - `car-wash-prices-riyadh`
  - `how-to-choose-car-wash-riyadh`
  - `car-wash-branches-riyadh`
  - `mobile-car-wash-riyadh`
  - `fleet-car-wash-riyadh`
  - `car-care-after-wash-riyadh`
- **FAQ: 30 items across 6 categories** in `lib/i18n.ts` under `faqPage.categories[]`:
  - `prices` (5), `service` (7), `branches` (4), `app-mobile` (6), `fleet` (5), `general` (3)
- **Routes: 32 total** (10 static content pages + 10 branch SSG + 6 blog SSG + 5 metadata routes + `/_not-found`)
- **Sitemap URLs: 26** (10 static + 10 branches + 6 blog)
- **Testimonials**: 3 categories × 5 quotes each = 15 real customer quotes in `lib/testimonials.ts`, all Arabic, no names, no per-quote ratings (none were collected)

**Stack pinned**: Next 16.3.3, React 19.2.8, Node engines `>=22.0.0` (Node 22.x LTS Maintenance until 2027-04, Node 24.x current Active LTS). Zero npm audit vulnerabilities as of last audit.

**GA4**: `G-89R2NSHZG1` wired via `components/GoogleAnalytics.tsx` (in `app/layout.tsx`). Route-change page_view tracking active. 7 custom events instrumented: `booking_click`, `app_download_click`, `phone_call_click`, `whatsapp_click`, `directions_click`, `branch_select`, `fleet_quote_request`. Analytics helper: `trackEvent(name, params)` from `lib/analytics.ts` — never pass PII.

**JSON-LD**: site-wide `Organization` node (in `app/layout.tsx`) with `department` array listing each branch as an `AutoWash` reference. Per-branch pages emit their own inline `<script type="application/ld+json">` with a full `AutoWash` node populated only from real data (omits `image`, `openingHours`, `telephone`, `aggregateRating` since none exist yet).

---

## 5. Open / deferred items

- **Dedicated `/franchise/` page**: currently only the homepage `Franchise` CTA block exists. Promoting it to its own route is pending client-provided franchise content. The block's CTA button currently routes to `/contact/` as an interim.
- **Real Google Reviews integration**: `branch.googleReviewsUrl` field exists on the type, `BranchClient.tsx` conditionally renders the "Read reviews on Google" button when populated. All 10 branches currently have `undefined` — populate as URLs become available.
- **FAQ inline rich-text links**: FAQ answers in `lib/i18n.ts` `faqPage.categories[].items[].a` are plain strings. The accordion renderer in `app/faq/FaqClient.tsx` doesn't support the `RichParagraph` inline-link pattern that blog paragraphs use. If the client wants clickable links inside answers later, extend the type from `string` to `string | RichParagraph` and add ~10 lines of segment-walking to `FaqClient.tsx` — the existing plain-string answers will still work under the union type.
- **Schema.org extensions** (deferred): `AggregateRating`, per-branch `LocalBusiness` phone/hours, and `Review` entities — all pending real data.
- **Real branch photos**: `branch.photoSrc` field exists, all 10 branches currently `undefined`. Branch pages fall back to the generic `/images/ashafaq_home.jpg` product image. §6 work will populate real photos.

---

## 6. In-flight work (NOT executed yet as of this snapshot)

A large multi-part client prompt is queued next. It will cover:

- **Add one new branch** to `lib/branches.ts` (real data expected).
- **Rename an existing branch** (slug + display name change — will require redirect handling and sitemap regeneration).
- **Real branch photos** — populate `photoSrc` for existing branches with actual JPGs to be dropped into `public/images/branches/`.
- **Real hours** per branch — populate `branch.hours` for the first time.
- **Unified contact number** — likely a per-branch `telephone` field alongside the site-wide `CONTACT.phone`. Follow the same "never invent" rule.
- **Per-branch descriptions** — new `description` (AR, required) and possibly `descriptionEn` (optional) fields on `Branch`, plus a description block rendered on `/branches/[slug]/`.
- **Homepage testimonials collapse** — likely a collapsed/carousel treatment of the current 3-category × 5-quote grid to reduce homepage vertical length.
- **`/branches` page redesign** — new visual treatment for the list. Do NOT drop the map or the per-branch link — those are load-bearing.

**Before executing that prompt**: read the actual data the client provides carefully. Do NOT invent any field's value if the client didn't provide it. Follow §2 authenticity rules strictly. When renaming a branch, the old slug should ideally still resolve (via redirect or a deprecated-slug map) to preserve external links and search-engine equity.

---

## Session-continuity notes

- The project has `.claude/settings.local.json` accidentally tracked in git from the initial commit — flagged in an earlier pass, not fixed because untracking affects clones. Leave it uncommitted (unless client asks to clean it up).
- `out.zip` was git-tracked once, now excluded via `out*.zip` in `.gitignore`. Do not re-track build artifacts.
- All commits authored as `M-Abdulrhman-Alomari <abdulrhmangithub@gmail.com>` (repo owner). Do NOT add AI/assistant attribution to commit messages.
