# Google Business Profile Playbook — EaseBuilds

Operational companion to Phase 1 in `PHASES.md`. Everything here is copy you can
paste, plus the reasoning for when to use it.

**The four contradictions, resolved (2026-09-08):**

| Field | Single truth | Where it must appear |
|---|---|---|
| Starter price | ₹2,999 | GBP services, site pricing page, schema |
| Hours | Mon–Sat 09:00–18:00 | GBP, `lib/seo.js` schema — done |
| Founded | 2025-10-22 | schema — done. The Manifest already says 2025 |
| Email | `info@easebuilds.in` | after Cloudflare routing is live — see section 6 |

---

## 1. Reviews — the honest version

**What I will not write:** review text for friends and family who were not
customers. Google's fake-review detection is tuned for exactly the pattern you
described — a burst of first-time reviewer accounts, all 5 star, similar
phrasing, no photos, no local guide history. The penalty is not a ranking dip,
it is profile suspension, and a suspended GBP takes the entire Phase 1-6
strategy to zero. Punjab Computer Centre's 852 reviews took years. 50 fake ones
in 50 days is the fastest way to lose the listing.

**What works instead, and is not much slower:** 15 real reviews from real
clients outrank 50 generic ones. Google weights review *text length*, *specific
service mentions*, *attached photos*, and *reviewer account age*. One real
client writing three specific sentences beats five friends writing "good work".

### 1a. The ask (WhatsApp, send one at a time)

> Hi [Name] — hope the site's been working well for you.
>
> Quick favour: I'm trying to build up EaseBuilds' Google profile so more
> Patiala businesses can find us. Would you mind leaving a short review? Takes
> about a minute: [paste your "Ask for reviews" short link]
>
> If it helps, the things people find most useful to read are what kind of
> business you run, what I built for you, and how long it took. Whatever you
> write is completely up to you.
>
> Thanks a lot

That last paragraph is the whole trick. You are not telling them what to say —
you are telling them **which questions to answer**. A dental clinic owner
answering "what kind of business, what did he build" writes *"I run a dental
clinic in Patiala and EaseBuilds built our website with online appointment
booking"* on their own. That sentence contains your service, your city and your
category, and it is genuinely theirs.

### 1b. Follow-up if no reply after 5 days (send once, never twice)

> Hi [Name], just floating this up in case it got buried — no pressure at all if
> you'd rather not. [link]

### 1c. Pacing

One per day is fine **if they are real**. Send asks to 2-3 people per day and
expect roughly a third to convert — that lands near 1/day organically without a
suspicious spike. Never send a bulk broadcast: Google sees the burst, and
recipients see they were BCC'd.

### 1d. Stars

Do not coach anyone on star count. Asking specifically for 5 star is review
gating and violates Google policy. A profile that is 100% 5 star with zero 4
star also reads as bought — to Google and to humans. A handful of 4 star reviews
raises conversion, not lowers it.

### 1e. If you genuinely have fewer than 15 past clients

Then the review lever is smaller than the plan assumed, and Cluster C (Phase 4)
matters proportionally more, because those queries have no local pack and no
review gate. Tell me the real client count and I will re-weight the phases.

---

## 2. Owner replies — write these, they are indexed

Replies are your own words about your own business, so unlike review text these
are entirely legitimate to template. Google indexes them, and they are a free
place to put service and location terms the reviewer did not mention.

**Rules:** reply within 24 hours. Under 40 words. Never paste the same reply
twice in a row. Mention the service *or* the area, not both every time —
stuffing every reply with "web development Patiala" reads as spam to Google and
to customers.

### For a website build

1. Thanks [Name] — glad the new site is working for you. Shout if you want the booking form or SEO added later.
2. Appreciate this, [Name]. Building for a [business type] in Patiala was a genuinely interesting one. Enjoy the new site.
3. Thank you. Fast turnaround matters more than people expect for a small business site — glad it landed on time.
4. Really glad you're happy with it, [Name]. Happy to help with the hosting renewal whenever it comes up.
5. Thanks [Name] — mobile-first was the right call for your customers. Enjoy it.

### For e-commerce

6. Thanks [Name]. Getting the payment gateway clean was the fiddly part — glad orders are coming through.
7. Appreciate the review. Wishing the online store a strong first season — ping me when you want to add more products.
8. Thank you — glad the inventory side is saving you time. That was the whole point of building it that way.

### For SEO / Google Business work

9. Thanks [Name]. Local SEO is slow for the first two months then compounds — glad you're seeing enquiries now.
10. Appreciate this. Getting a Patiala business onto page one takes patience. Glad you stuck with it.
11. Thank you — the Google Business Profile work usually moves the needle before the website does. Good to hear.

### For automation / bots / management systems

12. Thanks [Name] — glad the WhatsApp bot is handling the enquiries. That's hours back every week.
13. Appreciate it. Replacing the register with a proper system is never glamorous but it pays for itself fast.
14. Thank you — glad the automation is holding up under real volume. Shout if you want reporting added.

### For price or value mentions

15. Thanks [Name]. Small businesses shouldn't have to choose between a real website and affording one — glad it worked out.
16. Appreciate this. Happy to keep the pricing straight with you as you grow.

### For a 4 star, or a review with a criticism

17. Thanks for the honest feedback, [Name] — the [specific issue] is fair. I've noted it and it'll be better on the next one.
18. Appreciate you saying so. [Issue] took longer than it should have. Genuinely useful to hear.

### For a short review with no detail

19. Thank you [Name] — good working with you.
20. Appreciate it, [Name]. Enjoy the site.

---

## 3. Address — yes, use the Balbir Colony office

**Balbir Colony, Near Balson Palace, Opp. Urban Estate, Patiala** · Plus code `8CQQ+QXF`

Sharing an address with EaseCab is fine. Google allows two businesses at one
address when they are distinct businesses in **distinct categories** — a taxi
service and a web design agency are about as distinct as it gets. This would
only be a problem if both listings shared the same primary category.

**Before you click:**

- Adding an address converts you from a service-area business to a storefront,
  which **triggers re-verification** (usually a video call or video upload —
  walk in from the street signage to your desk). Expect a few days of reduced
  visibility during it. Worth it: service-area businesses rank materially worse
  in the local pack.
- You must genuinely be reachable there Mon-Sat 09:00-18:00. If you are often
  out, keep the service area *and* the address — GBP supports both.
- Keep the service area list unchanged: Patiala, Rajpura, Sangrur, Nabha,
  Mohali, Chandigarh.

**Steps:** Edit profile → Location → Business location → add the street address
→ set the map pin using the plus code → Save → complete verification when
prompted.

---

## 4. Photos

**What Google actually does with them:** volume, recency and realness affect how
often the profile is surfaced. **EXIF geotags do not** — Google strips metadata
on upload, so do not waste time geotagging. Do not upload stock images or AI
renders either; they are detectable, and they read as fake to customers
comparing you against competitors posting real work.

**The first 15:**

| Count | What | Why |
|---|---|---|
| 3 | Delivered client sites open on a real phone, held in hand | The most persuasive photo type in this category |
| 2 | Same sites on a laptop screen at your desk | Shows desktop work |
| 2 | The Balbir Colony office — exterior with signage, interior workspace | Needed for storefront credibility |
| 2 | You actually working, screen visible, real code or a real design | Fills the "at work" / "team" slots |
| 2 | You at a client's premises, with their permission | Proves local, proves real clients |
| 2 | Before and after — old site next to new site | Highest engagement type |
| 2 | A bot or dashboard you built, mid-conversation in WhatsApp | Seeds Cluster C in customers' minds |

**Cadence:** all 15 in the first two weeks, then **2-3 per week, indefinitely**.
Set a recurring reminder. Your photos were 316 days stale — recency was the
signal you had lost, and it decays again the moment you stop.

**Slots to fill in GBP:** Logo, Cover, Interior, Exterior, At work, Team. An
empty Logo or Cover is a visible gap on your profile card.

---

## 5. Posts — 12 weeks, one per week

Be clear on what these do: GBP posts have **little direct ranking effect**. They
affect *conversion* — someone comparing three agencies picks the one that looks
alive. They also drop out of view after 6 months, so this is a treadmill, not a
project.

Use **"What's new"** for most. Use **"Offer"** only when there is a real offer
with real dates. Always attach a photo. Always set the button — "Learn more"
pointing at the relevant page, or "Message".

| Wk | Type | Draft |
|---|---|---|
| 1 | What's new | Just shipped a new website for a Patiala business — mobile-first, loads in under two seconds, built to be found on Google. Websites start at ₹2,999. → `/pricing` |
| 2 | What's new | Most small business websites in Punjab take 8 seconds to load on mobile. Customers leave at 3. We rebuild slow sites so they don't. → `/services/custom-website-design` |
| 3 | What's new | For local searches, your Google Business Profile matters more than your website. We fix both. → `/services/seo-services` |
| 4 | What's new | New: WhatsApp automation for Patiala businesses. Bots that answer enquiries, take bookings and follow up while you sleep. → `/contact` |
| 5 | What's new | Before and after: a Patiala retail store's site, rebuilt. Same business, same products, a site that actually loads. [before/after photo] |
| 6 | Offer | Free website audit this month for Patiala businesses — speed, mobile, and where you rank locally. No obligation. → Message |
| 7 | What's new | Running a dental clinic? Online appointment booking cuts the phone calls and the no-shows. → `/industries/dental-clinics` |
| 8 | What's new | E-commerce for Punjab businesses — real payment gateways, real inventory, not a template. → `/services/ecommerce-development` |
| 9 | What's new | Coaching institutes: admission enquiry forms that reach your phone instantly, not an inbox you check weekly. → `/industries/coaching-institutes` |
| 10 | What's new | We build custom management systems too — CRM, inventory, admin panels. If you're running the business on WhatsApp and a register, there's a better way. → `/contact` |
| 11 | What's new | Not showing up on Google Maps for Patiala searches? Usually it's the profile, not the site. Here's what we check. → the local-SEO blog post |
| 12 | What's new | Shipped this month: [n] sites and [n] automations for businesses across Patiala, Rajpura and Mohali. → `/portfolio` |

---

## 6. Email — `info@easebuilds.in` via Cloudflare (do this last)

Free, about 10 minutes, no mailbox needed — Cloudflare forwards to your Gmail.

1. Cloudflare dashboard → select `easebuilds.in` → **Email** → **Email Routing**
2. **Enable Email Routing** — it adds the MX and TXT records for you
3. **Destination addresses** → add `easebuilds.in@gmail.com` → confirm the
   verification mail
4. **Routing rules** → Create → custom address `info` → action *Send to* → your
   Gmail → Save
5. Test: mail `info@easebuilds.in` from your phone, confirm it arrives
6. To *send* as `info@`: Gmail → Settings → Accounts → "Send mail as" → add
   `info@easebuilds.in` → SMTP `smtp.gmail.com`, port 587, your Gmail address
   and an app password

**Tell me when step 5 passes** and I will switch `siteConfig.contact.email`, the
schema and the footer in one commit. Until then the site keeps the Gmail
address — a contact address that bounces is worse than an ugly one.

---

## 7. Order of operations

1. Delete "Web hosting company" category — **done 2026-09-08**
2. Unset "Not LGBTQ+ friendly" — **done 2026-09-08**
3. Set GBP hours to Mon-Sat 09:00-18:00 (schema side already done)
4. Correct GBP starter price ₹7,999 → ₹2,999
5. Add the Balbir Colony address, complete re-verification
6. Upload the first 15 photos
7. Paste the new description (section 8 — pending the real project count)
8. Start review asks, 2-3 per day, real clients only
9. Begin weekly posts at week 1
10. Cloudflare email routing, then tell me to switch the site over

---

## 8. Description — blocked, needs one number from you

The 750-character description has to quote a project count. The site currently
claims "50+ projects" and "50+ Google Reviews" in roughly 20 places, against a
real review count of 7 and a project count you have told me is not 50.

I am not writing a description around a number you have said is not real. Give
me the true count of delivered projects and I will write this section and fix
the site to match in the same pass.
