// Layout for Manufacturers Industry Page
// SEO-optimized metadata and schema markup

import { industries } from '@/lib/industriesData'
import Script from 'next/script'

const industryData = industries.manufacturers

// SEO Metadata - Perfect lengths (Title: 59 chars, Description: 156 chars)
export const metadata = {
  title: industryData.seo.title,
  description: industryData.seo.description,
  keywords: industryData.seo.keywords,
  openGraph: {
    title: 'Manufacturing Website Development Patiala | EaseBuilds',
    description: 'B2B website for manufacturers with product catalog, distributor portal. Expand business pan-India.',
    type: 'website',
    locale: 'en_IN',
    url: industryData.seo.canonical,
    images: [
      {
        url: 'https://easebuilds.in/images/industries/manufacturers-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Manufacturing Company Website Design in Patiala',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manufacturing Website Patiala',
    description: 'Professional B2B website for manufacturers. Product catalog, distributor portal, bulk ordering.',
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

export default function ManufacturersLayout({ children }) {
  // Schema markup for manufacturing services
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Manufacturing Company Website Development',
    provider: {
      '@type': 'Organization',
      name: 'EaseBuilds',
      url: 'https://easebuilds.in',
      telephone: '+916283380110',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Patiala',
        addressRegion: 'Punjab',
        addressCountry: 'IN',
      },
    },
    areaServed: {
      '@type': 'State',
      name: 'Punjab',
      containsPlace: {
        '@type': 'City',
        name: 'Patiala',
      },
    },
    description: 'Professional B2B website development for manufacturers in Patiala with product catalog, distributor portal, bulk ordering, and inventory management.',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      price: '5999',
      availability: 'https://schema.org/InStock',
      url: 'https://easebuilds.in/industries/manufacturers',
    },
  }

  return (
    <>
      {/* Service Schema */}
      <Script
        id="manufacturing-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        strategy="beforeInteractive"
      />
      
      {children}
    </>
  )
}
