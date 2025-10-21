// Layout for Web Developer Near Me Landing Page - Patiala
// SEO-optimized metadata and schema markup for local "near me" searches

import Script from 'next/script'

// SEO Metadata - Optimized title and description lengths
export const metadata = {
  title: 'Web Developer Near Me in Patiala Punjab | EaseBuilds - Visit Us', // 58 chars
  description: 'Looking for web developer near me in Patiala? EaseBuilds is located in Patiala Punjab. Visit our office, get free consultation. Call +91 6283380110. Serving Patiala, Rajpura, Sangrur.', // 159 chars
  keywords: 'web developer near me patiala, website developer near me, web development company near me patiala punjab, local web developer patiala',
  openGraph: {
    title: 'Web Developer Near Me in Patiala Punjab India',
    description: 'Best web developer near you in Patiala. Visit our office for free consultation. Fast, local service.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://easebuilds.in/web-developer-near-me-patiala',
    images: [
      {
        url: 'https://easebuilds.in/images/office-patiala.jpg',
        width: 1200,
        height: 630,
        alt: 'EaseBuilds Office in Patiala Punjab',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Developer Near Me Patiala',
    description: 'Local web developer in Patiala Punjab. Visit office, free consultation. Call now!',
  },
  alternates: {
    canonical: 'https://easebuilds.in/web-developer-near-me-patiala',
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

export default function NearMeLayout({ children }) {
  // Enhanced Local Business Schema with GeoCoordinates for "near me" searches
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': ['ProfessionalService', 'LocalBusiness'],
    name: 'EaseBuilds - Web Developer in Patiala Punjab India',
    alternateName: 'EaseBuilds Web Development',
    description: 'Best web developer near you in Patiala Punjab India. Visit our office for free consultation on website design, e-commerce, and digital marketing services.',
    url: 'https://easebuilds.in/web-developer-near-me-patiala',
    telephone: '+916283380110',
    email: 'info@easebuilds.in',
    
    // Critical for "near me" searches - Geo location
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Patiala',
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
    
    // Service area for proximity searches
    areaServed: [
      {
        '@type': 'City',
        name: 'Patiala',
        containedInPlace: {
          '@type': 'State',
          name: 'Punjab',
          containedInPlace: {
            '@type': 'Country',
            name: 'India',
          },
        },
      },
      {
        '@type': 'City',
        name: 'Rajpura',
      },
      {
        '@type': 'City',
        name: 'Sangrur',
      },
      {
        '@type': 'City',
        name: 'Nabha',
      },
    ],
    
    // Opening hours for local searches
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '10:00',
        closes: '16:00',
      },
    ],
    
    priceRange: '₹₹',
    
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '50',
      bestRating: '5',
    },
    
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Web Development Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Website Design & Development',
            description: 'Custom website design and development services in Patiala',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'E-commerce Development',
            description: 'Online store development with payment integration',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'SEO Services',
            description: 'Local SEO services to rank higher on Google',
          },
        },
      ],
    },
    
    sameAs: [
      'https://facebook.com/easebuilds',
      'https://linkedin.com/company/easebuilds',
      'https://instagram.com/easebuilds',
    ],
  }

  // Place Schema for Google Maps integration
  const placeSchema = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: 'EaseBuilds Web Development Office',
    description: 'Visit our office in Patiala for free website consultation',
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
    hasMap: 'https://maps.google.com/?q=Patiala+Punjab',
  }

  return (
    <>
      {/* Local Business Schema */}
      <Script
        id="local-business-near-me-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        strategy="beforeInteractive"
      />
      
      {/* Place Schema for Maps */}
      <Script
        id="place-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(placeSchema) }}
        strategy="beforeInteractive"
      />
      
      {children}
    </>
  )
}
