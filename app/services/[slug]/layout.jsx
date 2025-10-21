// Dynamic Layout for All Service Pages - FULL SEO OPTIMIZED
// Handles SEO metadata + ALL Schema types dynamically

import Script from 'next/script'
import { services, generateServiceSchema } from '@/lib/servicesData'
import { notFound } from 'next/navigation'

// Generate static params for all services
export async function generateStaticParams() {
  return Object.values(services).map((service) => ({
    slug: service.slug,
  }))
}

// Generate dynamic metadata per service
export async function generateMetadata({ params }) {
  const { slug } = await params
  const service = Object.values(services).find(s => s.slug === slug)
  
  if (!service) {
    return {
      title: 'Service Not Found',
      description: 'The requested service page could not be found.'
    }
  }

  return {
    title: service.seo.title,
    description: service.seo.description,
    keywords: service.seo.keywords,
    openGraph: {
      title: service.seo.title,
      description: service.seo.description,
      type: 'website',
      locale: 'en_IN',
      url: service.seo.canonical,
      images: [
        {
          url: `https://easebuilds.in/images/services/${slug}-og.jpg`,
          width: 1200,
          height: 630,
          alt: `${service.name} in Patiala Punjab - EaseBuilds`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: service.seo.title,
      description: service.seo.description,
    },
    alternates: {
      canonical: service.seo.canonical,
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
}

export default async function ServiceLayout({ children, params }) {
  const { slug } = await params
  const service = Object.values(services).find(s => s.slug === slug)
  
  if (!service) {
    notFound()
  }

  // 1. Service Schema
  const serviceSchema = generateServiceSchema(service)
  
  // 2. Offer Schema
  const offerSchema = {
    '@context': 'https://schema.org',
    '@type': 'Offer',
    name: `${service.name} in Patiala Punjab`,
    description: service.hero.description,
    price: service.pricing[0]?.price || 'Varies',
    priceCurrency: 'INR',
    availability: 'https://schema.org/InStock',
    url: service.seo.canonical,
    priceValidUntil: '2025-12-31',
    seller: {
      '@type': 'Organization',
      name: 'EaseBuilds',
      telephone: '+916283380110',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Patiala',
        addressRegion: 'Punjab',
        addressCountry: 'IN'
      }
    },
    areaServed: {
      '@type': 'State',
      name: 'Punjab',
      containsPlace: {
        '@type': 'City',
        name: 'Patiala'
      }
    }
  }

  // 3. ✅ NEW: FAQ Schema for Rich Snippets
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  }

  // 4. ✅ NEW: Breadcrumb Schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://easebuilds.in'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Services',
        item: 'https://easebuilds.in/services'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: service.name,
        item: service.seo.canonical
      }
    ]
  }

  // 5. ✅ NEW: Organization Schema with LocalBusiness
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'EaseBuilds',
    image: 'https://easebuilds.in/images/logo.png',
    '@id': 'https://easebuilds.in',
    url: 'https://easebuilds.in',
    telephone: '+916283380110',
    priceRange: '₹₹',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Patiala',
      addressLocality: 'Patiala',
      addressRegion: 'Punjab',
      postalCode: '147001',
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 30.3398,
      longitude: 76.3869
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00'
      }
    ],
    sameAs: [
      'https://facebook.com/easebuilds',
      'https://linkedin.com/company/easebuilds',
      'https://instagram.com/easebuilds'
    ]
  }

  return (
    <>
      {/* Service Schema */}
      <Script
        id={`service-schema-${slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        strategy="beforeInteractive"
      />
      
      {/* Offer Schema */}
      <Script
        id={`offer-schema-${slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerSchema) }}
        strategy="beforeInteractive"
      />
      
      {/* ✅ NEW: FAQ Schema */}
      <Script
        id={`faq-schema-${slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        strategy="beforeInteractive"
      />
      
      {/* ✅ NEW: Breadcrumb Schema */}
      <Script
        id={`breadcrumb-schema-${slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        strategy="beforeInteractive"
      />
      
      {/* ✅ NEW: Organization Schema */}
      <Script
        id={`organization-schema-${slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        strategy="beforeInteractive"
      />
      
      {children}
    </>
  )
}
