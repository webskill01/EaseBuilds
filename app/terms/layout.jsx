// Terms of Service Layout - SEO Optimized
// Metadata and Schema Markup for Terms of Service Page

import Script from 'next/script'

// SEO Metadata - Optimized lengths
export const metadata = {
  title: 'Terms of Service - EaseBuilds Web Development Patiala', // 56 chars
  description: 'Terms of Service for EaseBuilds web development services in Patiala Punjab. Service agreements, refund policy, intellectual property rights. Contact +91 6283380110', // 159 chars
  keywords: 'terms of service, easebuilds terms, web developer patiala terms, service agreement, refund policy, website terms and conditions',
  openGraph: {
    title: 'Terms of Service - EaseBuilds',
    description: 'Terms and conditions for using EaseBuilds web development services in Patiala Punjab.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://easebuilds.in/terms',
    images: [
      {
        url: 'https://easebuilds.in/images/terms-og.jpg',
        width: 1200,
        height: 630,
        alt: 'EaseBuilds Terms of Service',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Terms of Service - EaseBuilds',
    description: 'Terms and conditions for our web development services.',
  },
  alternates: {
    canonical: 'https://easebuilds.in/terms',
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

export default function TermsLayout({ children }) {
  // WebPage Schema for Terms of Service
  const termsSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Terms of Service',
    description: 'Terms of Service and service agreement for EaseBuilds web development services',
    url: 'https://easebuilds.in/terms',
    lastReviewed: '2025-01-01',
    dateModified: '2025-01-01',
    datePublished: '2024-01-01',
    isPartOf: {
      '@type': 'WebSite',
      name: 'EaseBuilds',
      url: 'https://easebuilds.in'
    },
    about: {
      '@type': 'Organization',
      name: 'EaseBuilds',
      url: 'https://easebuilds.in',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+91-6283380110',
        contactType: 'Customer Service',
        email: 'info@easebuilds.in',
        areaServed: 'IN',
        availableLanguage: ['English', 'Hindi', 'Punjabi']
      }
    },
    mainContentOfPage: {
      '@type': 'WebPageElement',
      name: 'Terms of Service Content'
    }
  }

  // Organization Schema with Terms Focus
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'EaseBuilds',
    url: 'https://easebuilds.in',
    logo: 'https://easebuilds.in/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-6283380110',
      email: 'info@easebuilds.in',
      contactType: 'Customer Service',
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi', 'Punjabi']
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Patiala',
      addressRegion: 'Punjab',
      postalCode: '147001',
      addressCountry: 'IN'
    },
    termsOfService: 'https://easebuilds.in/terms',
    privacyPolicy: 'https://easebuilds.in/privacy'
  }

  // Service Agreement Schema
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Web Development Services',
    provider: {
      '@type': 'Organization',
      name: 'EaseBuilds',
      url: 'https://easebuilds.in'
    },
    areaServed: {
      '@type': 'State',
      name: 'Punjab',
      containsPlace: {
        '@type': 'City',
        name: 'Patiala'
      }
    },
    termsOfService: 'https://easebuilds.in/terms',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Web Development Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Custom Website Design'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'E-commerce Development'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'SEO Services'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Website Maintenance'
          }
        }
      ]
    }
  }

  return (
    <>
      {/* Terms Schema */}
      <Script
        id="terms-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(termsSchema) }}
        strategy="beforeInteractive"
      />
      
      {/* Organization Schema */}
      <Script
        id="organization-terms-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        strategy="beforeInteractive"
      />

      {/* Service Schema */}
      <Script
        id="service-terms-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        strategy="beforeInteractive"
      />
      
      {children}
    </>
  )
}
