// Metadata + structured data for /services/lead-management.
// This route is a static segment, so it takes precedence over /services/[slug]
// and does not need an entry in servicesData.js.

import JsonLd from '../../components/JsonLd'
import { FAQS, PRICE } from './data'

const URL = 'https://easebuilds.in/services/lead-management'

const TITLE = 'WhatsApp Lead Management & CRM for Small Business | EaseBuilds'
const DESCRIPTION =
  'Record every enquiry, send a ready-written WhatsApp from your own number, never miss a follow-up. No WhatsApp Business API or Meta verification needed. Rs 1,499/month for the whole team, not per user.'

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'lead management software india',
    'lead management software for small business',
    'whatsapp lead management',
    'whatsapp automation without business account',
    'whatsapp crm',
    'low cost crm for small business india',
    'small business crm india',
    'telegram bot for business',
    'follow up reminder software',
  ],
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: 'website',
    locale: 'en_IN',
    url: URL,
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
  alternates: { canonical: URL },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
}

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'EaseBot',
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'CRM',
  operatingSystem: 'Telegram, Android, iOS, Web',
  url: URL,
  description:
    'Lead management for small businesses that runs inside Telegram. Records every enquiry, writes a ready-to-send WhatsApp message from your own number, and reminds you to follow up.',
  inLanguage: 'en-IN',
  offers: {
    '@type': 'Offer',
    price: String(PRICE.monthly),
    priceCurrency: 'INR',
    availability: 'https://schema.org/InStock',
    url: URL,
    priceSpecification: {
      '@type': 'UnitPriceSpecification',
      price: String(PRICE.monthly),
      priceCurrency: 'INR',
      referenceQuantity: { '@type': 'QuantitativeValue', value: '1', unitCode: 'MON' },
      description: PRICE.note,
    },
  },
  featureList: [
    'Record every enquiry in seconds',
    'Duplicate detection across Indian phone number formats',
    'Ready-written personalised WhatsApp messages',
    'Follow-up reminders',
    'Renewal and due-date reminders',
    'Google review requests with cooldown',
    'Conversion reporting',
    'Live Google Sheet mirror',
  ],
  publisher: {
    '@type': 'Organization',
    name: 'EaseBuilds',
    url: 'https://easebuilds.in',
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

// ponytail: no BreadcrumbList here. app/components/ui/Breadcrumb.jsx is in the
// root layout and already emits one for every path. (The other service and
// page layouts still double it up - pre-existing, not touched here.)

export default function LeadManagementLayout({ children }) {
  return (
    <>
      <JsonLd data={softwareSchema} />
      <JsonLd data={faqSchema} />
      {children}
    </>
  )
}
