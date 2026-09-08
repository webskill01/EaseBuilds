# EaseBuilds

Marketing site for a web development agency in Patiala, Punjab.
<https://easebuilds.in> — Next.js 15 App Router, Tailwind, JS (not TS).

`npm run dev` · `npm run build` · `npm run lint`

## SEO

**Read `SEO.md` before any SEO, content, metadata, or schema work.** It holds
the Search Console baseline, Google Business Profile state, the competitor
picture, and the ranked priority list.

Two facts that are easy to get wrong:

- Technical SEO here is already sound — sitemap, robots, JSON-LD and per-page
  metadata all exist. The gap is local prominence (7 GBP reviews against
  competitors with 226-852), not markup.
- The `places` command in the `/seo-report` skill **cannot find this
  business's own listing** despite it being verified and live. An empty result
  is a prominence quirk, never evidence the profile is missing.

Run `/seo-report` from this directory for fresh Search Console numbers.
