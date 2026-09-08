# EaseBuilds — SEO state

Last updated: 2026-09-07. Regenerate the numbers with `/seo-report`.

Business: web development agency, Patiala, Punjab. Site: <https://easebuilds.in>
Stack: Next.js 15 App Router, 27 live URLs, dynamic `app/sitemap.js` +
`app/robots.js`, JSON-LD across 18 pages, `lib/seo.js`.

**Technical SEO is not the problem.** Crawlable, indexed, schema present,
Googlebot gets 200. The gap is local prominence and click-through.

---

## Search Console baseline — 90 days to 2026-09-06

Property: `sc-domain:easebuilds.in` (a `https://www.easebuilds.in/` URL-prefix
property also exists; prefer the domain one).

778 query impressions, **0 clicks** at query level (~11 at page level — Google
withholds anonymized queries, so query sums always read low).

### Striking distance (position 5-20 — work these first)

| Query | Impressions | Position |
| --- | ---: | ---: |
| web hosting | 137 | 6.6 |
| website development company in patiala | 27 | 8.4 |
| website designing company in patiala | 22 | 11.0 |

### Ranking but never clicked

| Query | Impressions | Position |
| --- | ---: | ---: |
| web hosting | 137 | 6.6 |
| web design in patiala | 78 | 37.0 |
| seo company in patiala | 75 | 26.0 |
| web designing in patiala | 56 | 36.4 |
| seo services in punjab | 52 | 33.5 |

### Top pages

| Page | Clicks | Impressions | Position |
| --- | ---: | ---: | ---: |
| `/` | 3 | 658 | 11.5 |
| `/blog/local-seo-patiala-businesses-complete-guide` | 2 | 63 | **7.7 (3.2% CTR)** |
| `/pricing` | 2 | 159 | 31.9 |
| `/services/ecommerce-development` | 2 | 220 | 13.3 |
| `/industries/architects` | 1 | 38 | 28.8 |

Note: the domain property also picks up `bots.easebuilds.in`.

---

## Google Business Profile

Verified and live. Managed under a separate Google account from the Cloud
project — see the workspace-level notes.

| | |
| --- | --- |
| Rating | 5.0 from **7 reviews** |
| Category | Website designer |
| Interactions | 7 |
| Photos last added | 316 days ago (as of 2026-09-07) |
| Profile strength | "Complete info" |
| CID | `15831582202991408922` |
| Maps | <https://www.google.com/maps?cid=15831582202991408922> |
| Review link | <https://g.page/r/CRr3smEiFLXbEBM/review> |

⚠️ The Places API cannot find this listing under any name variant, even though
a competitor with the same 7 reviews does appear. Low prominence, not absence.
**Never read an empty `places` result as "the listing is missing."**

---

## The competitive picture

"website designer Patiala", ranked by review count — the local-pack signal:

| Business | Rating | Reviews |
| --- | ---: | ---: |
| Punjab Computer Centre | 4.9 | 852 |
| PIIM | 4.9 | 274 |
| EasyWebPlans | 4.8 | 259 |
| Gemini Geeks Tech | 4.9 | 226 |
| DotOit Web Builders | 5.0 | 88 |
| Webstar Technologies | 4.8 | 47 |
| **EaseBuilds** | **5.0** | **7** |

**This is the whole diagnosis.** The local pack sits above every organic
result. 778 impressions producing 0 clicks is not a title-tag problem — it is
a business with 7 reviews competing against businesses with 226-852.

---

## Priorities

1. **Reviews.** 7 → 50+. There are 50+ completed projects to ask. The "Ask for
   reviews" link is in the GBP dashboard. Nothing in this repo competes with
   this for impact.
2. **Fresh photos.** 316 days stale.
3. **Build an SEO service page.** "seo company in patiala" pulls 75 impressions
   at position 26 and there is no page targeting it. Demand is proven, supply
   is missing.
4. **Titles/meta for the striking-distance cluster** — the three queries above
   are at positions 6.6-11.0 with zero clicks.
5. **Industry × city matrix.** `lib/industriesData.js` has 5 industries and
   there are 2 location pages, unlinked. "Website development Patiala" has thin
   volume; "dental clinic website design" + a city has buyers.

The blog post at position 7.7 with 3.2% CTR outperforms everything else on the
site by ~6×. That is the format that works here — make more of it.

---

## Running the numbers again

```bash
/seo-report
```

Or directly, from this directory:

```bash
python "C:/Users/ACER/OneDrive/Desktop/Claude Skills/seo.py" gsc sc-domain:easebuilds.in --days 90
python "C:/Users/ACER/OneDrive/Desktop/Claude Skills/seo.py" places "website designer Patiala" --limit 20
```

Credentials live next to that script (`sa.json`, `.env`) and load
automatically. Full setup and troubleshooting:
`C:/Users/ACER/OneDrive/Desktop/Claude Skills/SEO_SETUP.md`.

Google Business Profile API access was applied for on 2026-09-07 (support case
`3-8270000041163`, reply due 16-21 Sep 2026). Until it is approved there is no
programmatic GBP data — export CSVs from the dashboard by hand.
