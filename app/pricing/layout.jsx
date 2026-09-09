import JsonLd from '../components/JsonLd'
import { ENTRY_PRICE, MAINTENANCE_MONTHLY, pricingFAQs } from '@/lib/pricingData'

// /pricing metadata and schema.
//
// Task 7.10, 2026-09-09. Everything here used to describe three packages -
// "Basic Rs2,999, Business Rs5,999, E-commerce Rs9,999" - in the meta
// description, the OG and Twitter cards, an AggregateOffer of three offers, and
// a hand-written FAQPage. That was a FOURTH price ladder: it matched neither
// lib/pricingData nor the servicesData tiers nor the blog. The packages no
// longer exist, so all of it is rewritten against the real numbers.
//
// The FAQ schema is now GENERATED FROM pricingFAQs, the same array the page
// renders, so the two cannot drift apart. Google requires FAQ markup to match
// visible content, and hand-maintaining a second copy is precisely how this
// project ended up with a homepage declaring 14 FAQs while showing 11.
//
// Title targets cost intent per Task 7.7: /pricing owns "cost" and "charges",
// while the homepage keeps the "web design in patiala" family. Do not retarget
// this at "web design in patiala" - all three of those pages were competing for
// it and /pricing lost at position 52.8.

const price = ENTRY_PRICE.toLocaleString('en-IN')

export const metadata = {
  title: 'Website Cost in Patiala | Web Design Charges | EaseBuilds',
  description: `What a website actually costs in Patiala. Builds start at ₹${price}, quoted against your real scope rather than a package tier. Maintenance ₹${MAINTENANCE_MONTHLY}/month. Talk to the developer who builds it.`,

  openGraph: {
    title: `Website Cost in Patiala | From ₹${price}`,
    description: 'What a website costs, what moves the number, and how a quote actually happens. One published floor, no package ladder.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://easebuilds.in/pricing',
    siteName: 'EaseBuilds',
    images: [{
      url: 'https://easebuilds.in/opengraph-image.png',
      width: 1200,
      height: 630,
      alt: 'EaseBuilds — website pricing in Patiala',
    }],
  },

  twitter: {
    card: 'summary_large_image',
    title: `Website Cost in Patiala | From ₹${price}`,
    description: 'What a website costs and what moves the number. Quoted against your scope, not a tier.',
    images: ['https://easebuilds.in/opengraph-image.png'],
  },

  alternates: {
    canonical: 'https://easebuilds.in/pricing',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function PricingLayout({ children }) {
  // One published floor and no ceiling, because everything above the entry
  // price is quoted. This replaced an AggregateOffer claiming three offers
  // between Rs2,999 and Rs9,999 - offers that no longer exist.
  const offerSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Website design and development in Patiala',
    description: 'Website design and development for businesses in Patiala and Punjab, quoted against scope rather than sold as fixed packages.',
    provider: {
      '@type': 'Organization',
      name: 'EaseBuilds',
      url: 'https://easebuilds.in',
    },
    areaServed: {
      '@type': 'City',
      name: 'Patiala',
      containedInPlace: {
        '@type': 'State',
        name: 'Punjab',
        containedInPlace: { '@type': 'Country', name: 'India' },
      },
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      priceSpecification: {
        '@type': 'PriceSpecification',
        minPrice: ENTRY_PRICE,
        priceCurrency: 'INR',
      },
      url: 'https://easebuilds.in/pricing',
    },
  }

  // Generated from the same array the page renders - see the note at the top.
  const pricingFaqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: pricingFAQs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://easebuilds.in' },
      { '@type': 'ListItem', position: 2, name: 'Pricing', item: 'https://easebuilds.in/pricing' },
    ],
  }

  return (
    <>
      <JsonLd id="pricing-offer-schema" data={offerSchema} />
      <JsonLd id="pricing-faq-schema" data={pricingFaqSchema} />
      <JsonLd id="breadcrumb-schema" data={breadcrumbSchema} />
      {children}
    </>
  )
}
