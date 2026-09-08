# Project Domain Glossary

Plain-English definitions of terms used across `GOAL.md`, `PHASES.md`,
`PROGRESS.md` and `SEO.md`. Glossary only — no implementation details.

## Terms

**Local pack:** The block of three map results Google shows above the organic
results for location-intent queries. Placement is driven largely by review
count and proximity, not by page quality. This is the single reason the site
earns impressions but no clicks.

**Local-pack gated:** A keyword whose results are dominated by the local pack,
so organic rank barely matters. All of this site's current web-development
keywords are gated. Cluster C keywords are *not* — that is the whole point of
Cluster C.

**Cluster A / B / C:** The three topic clusters this project is organised
around. **A** = website development (existing, defend only, local-pack gated).
**B** = SEO services (rebuild `/services/seo-services`, the highest-impression
page on the site). **C** = AI automation, bots and management systems (new,
not local-pack gated, the strategic core).

**Pillar / spoke:** A pillar is the main page for a cluster; spokes are
narrower pages that link up to it. The linking rule lives in PHASES.md Task 3.4.

**Striking distance:** A query already ranking at position 5–20 — close enough
that small improvements move it onto page 1. For this site the genuine list is
short: only two queries totalling 49 impressions.

**Doorway page:** A thin page built to target one keyword variant that
duplicates an existing page's intent. This repo has two
(`/website-development-patiala`, `/web-developer-near-me-patiala`); both are
scheduled for deletion in Phase 3.

**GBP:** Google Business Profile — the Maps/local listing. Managed under a
different Google account from the Cloud project used by `/seo-report`.

**SAB (service-area business):** A GBP listing with no public street address.
This profile is currently an SAB, which suppresses local-pack placement.

**NAP:** Name, Address, Phone. Consistency of these across the site, GBP, and
third-party directories (Justdial, The Manifest, GoodFirms, Krowdbase) is a
local ranking signal. This project currently has four contradictions — see
PHASES.md Task 1.8.

**PAA / AlsoAsked:** People Also Ask — the expandable question box in Google
results. AlsoAsked maps the question tree for a seed keyword. The account has
**3 free searches**, so seed choice matters; see PHASES.md Task 6.1.

**Merchant listing errors:** GSC validation errors for `Product`/`Offer`
schema. The three flagged items came from the `/pricing` Product schema, now
deleted — a web development package is not a merchant product.

**Flight payload:** The serialised React Server Components stream Next.js
embeds in the HTML (`self.__next_f.push`). Content there is *not* in the DOM at
parse time. This is where all the JSON-LD was stranded before the fix.

**Striking the LCP:** Shorthand used in commit notes for the hero-image work —
Largest Contentful Paint, the Core Web Vital measuring when the biggest
above-fold element renders. Was 7.1s on mobile.
