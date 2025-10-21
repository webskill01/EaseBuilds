// Layout for Website Development Patiala Page
// Contains SEO metadata with optimized character counts

import Script from 'next/script'

// SEO-Optimized Metadata (Title: 58 chars, Description: 157 chars)
export const metadata = {
  title: 'Best Web Developer Patiala | EaseBuilds - From ₹2,999',
  description: 'Top web developer in Patiala Punjab. Custom websites, e-commerce & SEO. 50+ happy clients. Get your website in 2-4 weeks. Call +91 6283380110!',
  keywords: 'best web developer in patiala, web developer patiala punjab india, website development company patiala, web developer near me patiala',
  openGraph: {
    title: 'Best Web Developer Patiala | EaseBuilds',
    description: 'Professional website development in Patiala. Starting at ₹2,999. Fast delivery in 2-4 weeks.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://easebuilds.in/website-development-patiala',
  },
  alternates: {
    canonical: 'https://easebuilds.in/website-development-patiala',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function WebsiteDevelopmentPatialaLayout({ children }) {
  // Schema markup for local business and service
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'EaseBuilds - Best Web Developer in Patiala Punjab India',
    description: 'Leading website development company in Patiala offering custom website design, e-commerce solutions, and SEO services for local businesses.',
    url: 'https://easebuilds.in/website-development-patiala',
    telephone: '+916283380110',
    email: 'info@easebuilds.in',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Patiala',
      addressRegion: 'Punjab',
      postalCode: '147001',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 30.3398,
      longitude: 76.3869,
    },
    areaServed: ['Patiala', 'Rajpura', 'Sangrur', 'Nabha', 'Mohali', 'Chandigarh', 'Punjab'],
    priceRange: '₹₹',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '50',
      bestRating: '5',
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      price: '2999',
      description: 'Website development services starting at ₹2,999',
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://easebuilds.in',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Website Development Patiala',
        item: 'https://easebuilds.in/website-development-patiala',
      },
    ],
  }
const reviewSchema = {
  '@context': 'https://schema.org',
  '@type': 'Review',
  itemReviewed: {
    '@type': 'LocalBusiness',
    name: 'EaseBuilds',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Patiala',
      addressRegion: 'Punjab',
      addressCountry: 'IN'
    }
  },
  author: {
    '@type': 'Person',
    name: 'Dr. Rajesh Kumar'
  },
  reviewRating: {
    '@type': 'Rating',
    ratingValue: '5',
    bestRating: '5'
  },
  reviewBody: 'Best web developer in Patiala! EaseBuilds created our clinic website in just 2 weeks with online appointment booking. We now get 50+ monthly bookings.'
}
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why is EaseBuilds the best web developer in Patiala Punjab India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'EaseBuilds has delivered 50+ websites for Patiala businesses with 100% satisfaction. We use modern React technology, deliver in 2-4 weeks, and offer transparent pricing starting at ₹2,999 with free maintenance.'
      }
    },
    {
      '@type': 'Question',
      name: 'How much does website development cost in Patiala?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our pricing is transparent: Basic Website ₹2,999, Business Website ₹5,999, E-commerce ₹9,999. All packages include responsive design, SEO optimization, and free maintenance.'
      }
    },
    {
      '@type': 'Question',
      name: 'How long does it take to build a website in Patiala?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We deliver websites in 2-4 weeks - faster than the industry average of 6-8 weeks. Basic sites take 2 weeks, business sites 3 weeks, e-commerce 4 weeks.'
      }
    }
  ]
}


  return (
    <>
      {/* Schema Markup Scripts */}
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        strategy="beforeInteractive"
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        strategy="beforeInteractive"
      />
{/* // Add this script in the return statement: */}
<Script
  id="faq-schema"
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
  strategy="beforeInteractive"
/>
      {children}
    </>
  )
}
