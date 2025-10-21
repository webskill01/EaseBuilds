// Layout for Architects Industry Page
// SEO-optimized metadata and schema markup

import { industries } from '@/lib/industriesData'
import Script from 'next/script'

const industryData = industries.architects

// SEO Metadata - Perfect lengths (Title: 58 chars, Description: 155 chars)
export const metadata = {
  title: industryData.seo.title,
  description: industryData.seo.description,
  keywords: industryData.seo.keywords,
  openGraph: {
    title: 'Architecture Portfolio Website Patiala | EaseBuilds',
    description: 'Stunning portfolio website for architects. Showcase projects, 3D renderings. Get 10x more clients in Punjab.',
    type: 'website',
    locale: 'en_IN',
    url: industryData.seo.canonical,
    images: [
      {
        url: 'https://easebuilds.in/images/industries/architects-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Architecture Portfolio Website Design in Patiala',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Architecture Portfolio Website Patiala',
    description: 'Professional portfolio website for architects. Showcase projects and attract high-value clients.',
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

export default function ArchitectsLayout({ children }) {
  // Schema markup for architecture services
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Architecture Portfolio Website Development',
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
    description: 'Professional architecture portfolio website development in Patiala with advanced galleries, 3D rendering integration, and SEO optimization for architects.',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      price: '4999',
      availability: 'https://schema.org/InStock',
      url: 'https://easebuilds.in/industries/architects',
    },
  }

  return (
    <>
      {/* Service Schema */}
      <Script
        id="architecture-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        strategy="beforeInteractive"
      />
      
      {children}
    </>
  )
}
