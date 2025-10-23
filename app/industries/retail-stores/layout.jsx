// Layout for Retail Stores Industry Page
// SEO-optimized metadata and schema markup

import IndustrySchemas from '@/app/components/schemas/IndustrySchema'
import { industries } from '@/lib/industriesData'
import Script from 'next/script'

const industryData = industries.retailStores

// SEO Metadata - Perfect lengths (Title: 60 chars, Description: 155 chars)
export const metadata = {
  title: industryData.seo.title,
  description: industryData.seo.description,
  keywords: industryData.seo.keywords,
  openGraph: {
    title: 'E-commerce Website for Retail Stores Patiala | EaseBuilds',
    description: 'Start selling online with professional e-commerce website. Payment gateway, inventory, delivery. Get 30% more revenue.',
    type: 'website',
    locale: 'en_IN',
    url: industryData.seo.canonical,
    images: [
      {
        url: 'https://easebuilds.in/images/industries/retail-stores-og.jpg',
        width: 1200,
        height: 630,
        alt: 'E-commerce Website for Retail Stores in Patiala',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'E-commerce Website Patiala',
    description: 'Complete online store solution. Start selling online and grow revenue by 30%. Payment, inventory, delivery.',
  },
  alternates: {
    canonical: industryData.seo.canonical,
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

export default function RetailStoresLayout({ children }) {
  return (
    <>
      <IndustrySchemas 
        industryData={industryData} 
        industrySlug="retail-stores" 
      />
      {children}
    </>
  )
}