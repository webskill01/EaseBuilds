// Dynamic Layout for All Service Pages - FULL SEO OPTIMIZED
// Handles SEO metadata + ALL Schema types dynamically

import { services, generateServiceSchema } from '@/lib/servicesData'
import { notFound } from 'next/navigation'
import JsonLd from '../../components/JsonLd'

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
  // One published floor sitewide (Task 7.10). Keep this in step with the figure
  // on /pricing and in the services/[slug] pricing section - three places said
  // three different numbers before that task.
  const ENTRY_PRICE = 2999

  const serviceSchema = generateServiceSchema(service)
  
  // 2. Offer Schema
  const offerSchema = {
    '@context': 'https://schema.org',
    '@type': 'Offer',
    name: `${service.name} in Patiala Punjab`,
    description: service.hero.description,
    priceSpecification: {
      '@type': 'PriceSpecification',
      minPrice: ENTRY_PRICE,
      priceCurrency: 'INR',
      valueAddedTaxIncluded: true,
    },
    price: ENTRY_PRICE,
    priceCurrency: 'INR',
    availability: 'https://schema.org/InStock',
    url: service.seo.canonical,
    // rolls forward on every build; the hardcoded date had been expired for 9 months
    priceValidUntil: new Date(Date.now() + 365 * 864e5).toISOString().slice(0, 10),
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

  // 3.  FAQ Schema for Rich Snippets
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

  // 4. Breadcrumb Schema
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

  return (
    <>
      {/* Service Schema */}
      <JsonLd data={serviceSchema} />
      
      {/* Offer Schema */}
      <JsonLd data={offerSchema} />
      
      {/* FAQ Schema */}
      <JsonLd data={faqSchema} />
      
      {/* Breadcrumb Schema */}
      <JsonLd data={breadcrumbSchema} />
      
      {children}
    </>
  )
}
