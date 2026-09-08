// Metadata + structured data for /services/business-automation.
// Static route segment, so it takes precedence over /services/[slug] and needs
// no entry in servicesData.js.

import JsonLd from '../../components/JsonLd'
import { FAQS } from './data'

const URL = 'https://easebuilds.in/services/business-automation'

const TITLE = 'Business Automation for Small Businesses in India | EaseBuilds'
const DESCRIPTION =
  'Custom automation for small businesses: lead capture and follow-ups, Google Sheets and data automation, management systems, and reminders — delivered over WhatsApp, Telegram or your own web panel. Fixed quote, never per user.'

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'business automation india',
    'business process automation small business',
    'google sheets automation',
    'whatsapp automation for business',
    'telegram bot for business india',
    'custom management system',
  ],
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: 'website',
    locale: 'en_IN',
    url: URL,
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION },
  alternates: { canonical: URL },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
}

// ponytail: Service, not Product/Offer. There is no fixed price to declare -
// the page quotes - and an Offer with an invented price is the sort of claim
// Phase 2 had to strip out of the schema.
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Business Automation',
  serviceType: 'Business process automation',
  url: URL,
  description: DESCRIPTION,
  areaServed: [
    { '@type': 'City', name: 'Patiala' },
    { '@type': 'State', name: 'Punjab' },
    { '@type': 'Country', name: 'India' },
  ],
  provider: {
    '@type': 'Organization',
    name: 'EaseBuilds',
    url: 'https://easebuilds.in',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Patiala',
      addressRegion: 'Punjab',
      addressCountry: 'IN',
    },
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Automation services',
    itemListElement: [
      'Lead capture and follow-up systems',
      'Google Sheets and data automation',
      'Custom management systems',
      'Renewal and due-date reminders',
      'Telegram and WhatsApp bots',
      'Connecting existing tools',
    ].map((name) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name },
    })),
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
}

export default function BusinessAutomationLayout({ children }) {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      {children}
    </>
  )
}
