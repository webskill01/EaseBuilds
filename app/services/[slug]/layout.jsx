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
      // Next replaces openGraph across segments, it does not deep-merge, so a
      // child that sets a partial object drops the root layout's og:site_name
      // and the SERP card shows the bare domain instead of the brand.
      siteName: 'EaseBuilds',
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

  // 2. Price floor, nested under the Service. A top-level Offer with price +
  // availability reads to Google as a product for sale: Search Console flagged
  // 3 invalid Merchant listings (no image, shipping, returns) on 2026-09-29.
  const serviceSchema = {
    ...generateServiceSchema(service),
    offers: {
      '@type': 'Offer',
      url: service.seo.canonical,
      priceCurrency: 'INR',
      priceSpecification: {
        '@type': 'PriceSpecification',
        minPrice: ENTRY_PRICE,
        priceCurrency: 'INR',
        valueAddedTaxIncluded: true,
      },
    },
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

  // ponytail: no BreadcrumbList here. app/components/ui/Breadcrumb.jsx is in
  // the root layout and already emits one for every path, from the same data
  // that renders the visible trail. Two copies with one DOM id is worse than
  // none - Google picks one and you cannot tell which.

  return (
    <>
      {/* Service Schema */}
      <JsonLd data={serviceSchema} />
      
      {/* FAQ Schema */}
      <JsonLd data={faqSchema} />
      
      {/* Breadcrumb Schema */}
      
      {children}
    </>
  )
}
