// Pricing facts for EaseBuilds.
//
// Task 7.10, 2026-09-09. This file used to hold three build tiers
// (Rs2,999 / Rs7,999 / Rs14,999-ish), an add-on price list and a set of FAQ
// answers written around those tiers. All of it is gone, deliberately.
//
// WHY THE TIERS WENT
// A full tier table lets a visitor price themselves out and leave without ever
// saying what they need. One published floor sets the expectation, and the real
// number gets agreed against actual scope. It also removed a contradiction the
// site had been carrying: /pricing said "from Rs2,999" while
// /services/custom-website-design showed Rs4,999 for what read as the same work.
//
// THE ONE RULE FOR EDITING THIS FILE
// Every number here is published in more than one place. If you change one,
// change it everywhere - the entry price also appears in the services/[slug]
// pricing section and in that route's Offer schema, and EASEBOT_MONTHLY appears
// across both automation pages and their FAQs. Task 7.11 audits exactly this.

// The single published floor. Everything above it is quoted.
export const ENTRY_PRICE = 2999

// The two recurring prices that survive the cull, because a productised
// subscription is the one case where a published number is the selling point.
export const MAINTENANCE_MONTHLY = 999
export const EASEBOT_MONTHLY = 1199

// What actually changes the quote. This is the honest answer to "why can't you
// just tell me the price", and it is the reason there is no tier table.
export const PRICE_DRIVERS = [
  {
    title: 'How many pages, and how different they are',
    body: 'Five pages that share one layout is a much smaller job than five that each need their own. What matters is the number of distinct designs, not the page count.',
  },
  {
    title: 'Whether it has to talk to anything',
    body: 'A payment gateway, a booking system, a sheet you already keep, an existing CRM. Anything the site has to connect to is work that a brochure site does not have.',
  },
  {
    title: 'How much of the content exists',
    body: 'If the words and photos are ready, the build is faster. If they need writing or sourcing, that is real time and it belongs in the quote rather than as a surprise later.',
  },
  {
    title: 'How fast you need it',
    body: 'A normal build takes two to three weeks. Compressing that means reordering other work, so it costs more. It is never a hidden fee - you are told before anything starts.',
  },
]

// Included in every build, at any price. These are commitments, not upsells.
export const ALWAYS_INCLUDED = [
  'Mobile-first build, tested on real phones',
  'Your own domain and SSL set up',
  'Page titles, descriptions and schema done properly',
  'Speed work - images, fonts and Core Web Vitals',
  'Google Analytics and Search Console connected',
  'You own the code and the accounts, not us',
]

// How a quote actually happens.
export const QUOTE_STEPS = [
  {
    title: 'Tell us what you need',
    body: 'A WhatsApp message is enough to start. What the business does, and what the site has to achieve.',
  },
  {
    title: 'You get a fixed figure',
    body: 'One price for the build and, if you want it, a monthly figure to maintain it. Both agreed in writing before anything begins.',
  },
  {
    title: 'Half up front, half on delivery',
    body: 'No retainer, no lock-in, and no invoice you did not expect.',
  },
]

// FAQ answers for /pricing. These previously described Basic/Standard/Premium
// packages that no longer exist - and the page was not even rendering them, it
// was showing the first six homepage FAQs instead.
export const pricingFAQs = [
  {
    question: 'How much does a website cost in Patiala?',
    answer: `Builds start at Rs ${ENTRY_PRICE.toLocaleString('en-IN')}. There is no package ladder above that, because the honest answer depends on how many distinct page designs you need, whether the site has to connect to anything you already use, and how much of the content exists. Tell us what you are trying to do and you get one fixed figure for your actual scope.`,
  },
  {
    question: 'Why is there no full price list?',
    answer: 'Because a price list makes you guess which box you are in, and most people guess wrong in one direction or the other. A quote against your real requirements is more accurate than a tier, and it takes one conversation.',
  },
  {
    question: 'How long does a website take?',
    answer: 'Two to three weeks is normal, from the point the content is ready. Faster is possible and costs more, because it means reordering other work. You are told the timeline with the quote, not after.',
  },
  {
    question: 'What does maintenance cost?',
    answer: `Maintenance is Rs ${MAINTENANCE_MONTHLY.toLocaleString('en-IN')} a month and it is optional. It covers content updates, security patches, backups and uptime monitoring. Plenty of clients do not take it, and that is fine - you own the site either way.`,
  },
  {
    question: 'How do payments work?',
    answer: 'Half before the build starts, half when it goes live. UPI, bank transfer or card. No retainer and no lock-in.',
  },
  {
    question: 'Do I own the site?',
    answer: 'Yes. The code, the domain and every account are in your name. If you ever want to move to another developer, you leave with all of it and you do not need our permission.',
  },
]

const prices = { ENTRY_PRICE, MAINTENANCE_MONTHLY, EASEBOT_MONTHLY }
export default prices
