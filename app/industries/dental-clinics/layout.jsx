// Layout for Dental Clinics Industry Page
// SEO-optimized metadata and schema markup

import { industries } from '@/lib/industriesData'
import Script from 'next/script'

const industryData = industries.dentalClinics

// SEO Metadata - Optimized lengths
export const metadata = {
  title: industryData.seo.title, // 59 chars
  description: industryData.seo.description, // 158 chars
  keywords: industryData.seo.keywords,
  openGraph: {
    title: 'Dental Clinic Website Design Patiala | EaseBuilds',
    description: 'Professional dental website with online booking. Get 50+ monthly appointments. Trusted by 10+ clinics in Punjab.',
    type: 'website',
    locale: 'en_IN',
    url: industryData.seo.canonical,
    images: [
      {
        url: 'https://easebuilds.in/images/industries/dental-clinic-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Dental Clinic Website Design in Patiala',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dental Clinic Website Design Patiala',
    description: 'Get 50+ monthly appointments with professional dental website. Online booking, patient portal, SEO.',
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

export default function DentalClinicsLayout({ children }) {
  // Schema markup for dental clinic services
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Dental Clinic Website Development',
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
    description: 'Professional dental clinic website development services in Patiala with online appointment booking, patient portal, and SEO optimization.',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      price: '4999',
      availability: 'https://schema.org/InStock',
      url: 'https://easebuilds.in/industries/dental-clinics',
    },
  }

  return (
    <>
      {/* Service Schema */}
      <Script
        id="dental-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        strategy="beforeInteractive"
      />
      
      {children}
    </>
  )
}
