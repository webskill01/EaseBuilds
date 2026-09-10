// Site-wide SEO configuration.
// EaseBuilds - a one-developer web studio in Patiala, Punjab.

import faqs from './faqData'

export const siteConfig = {
  name: 'EaseBuilds',
  // GSC 90d to 2026-09-08, homepage-filtered. Two passes on this title now:
  //   Task 5.x  "design" family 202 impr vs "development" 68 - added Design.
  //   Task 7.8  "company" appears in 11 queries worth 77 impr and was missing.
  // The company queries hold the best servable positions on the whole site:
  // website development company in patiala 25 @ 7.8, website designing company
  // in patiala 21 @ 10.0, web design company 11 @ 6.5. That is 26% of homepage
  // traffic once web hosting's unservable 133 impressions are discounted.
  // 60 chars - at the limit, do not add to it without removing something.
  title: 'Website Design & Development Company in Patiala | EaseBuilds',
  description: 'Web design and development company in Patiala, Punjab. 15 projects shipped: 5 client sites and 10 automation systems live. From ₹2,999, live in 2-3 weeks.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://easebuilds.in',
  ogImage: '/opengraph-image.png',
  
  // Task 7.5: a one-person studio has a person's byline, not a team's.
  author: 'Nitin',
  
  social: {
    twitter: '@easebuilds',
    facebook: 'https://facebook.com/easebuilds',
    linkedin: 'https://linkedin.com/company/easebuilds',
    instagram: 'https://instagram.com/easebuilds',
  },
  
  contact: {
    email: 'easebuilds.in@gmail.com',
    phone: '+91 6283380110',
    whatsapp: '+91 6283380110',
    address: 'Patiala, Punjab 147001, India'
  },
  
  business: {
    name: 'EaseBuilds',
    legalName: 'EaseBuilds Web Development Services',
    foundingDate: '2025-10-22',
    areaServed: ['Patiala', 'Rajpura', 'Sangrur', 'Nabha', 'Mohali', 'Chandigarh', 'Punjab', 'India'],
    priceRange: '₹₹',
    hoursAvailable: 'Mon-Sat: 9:00 AM - 6:00 PM',
  }
}

// Enhanced Metadata Generation Function
export function generateMetadata({ 
  title, 
  description, 
  ogImage, 
  path = '',
  type = 'website' 
}) {
  const defaultTitle = siteConfig.title
  const defaultDescription = siteConfig.description
  const url = `${siteConfig.url}${path}`
  
  return {
    title: title || defaultTitle,
    description: description || defaultDescription,
    authors: [{ name: siteConfig.author }],
    
    metadataBase: new URL(siteConfig.url),
    
    alternates: {
      canonical: url,
    },
    
    openGraph: {
      type,
      locale: 'en_IN',
      url,
      title: title || defaultTitle,
      description: description || defaultDescription,
      siteName: siteConfig.name,
      images: [
        {
          url: ogImage || siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: title || defaultTitle,
        },
      ],
    },
    
    twitter: {
      card: 'summary_large_image',
      title: title || defaultTitle,
      description: description || defaultDescription,
      images: [ogImage || siteConfig.ogImage],
      creator: siteConfig.social.twitter,
    },
    
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    
  }
}

// Enhanced Organization Schema with Awards and Ratings
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteConfig.business.name,
  legalName: siteConfig.business.legalName,
  url: siteConfig.url,
  logo: `${siteConfig.url}/images/logo.png`,
  foundingDate: siteConfig.business.foundingDate,
  description: 'Leading web development company in Patiala Punjab India, specializing in custom website design, e-commerce solutions, and digital marketing services for local businesses.',
  
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Patiala',
    addressRegion: 'Punjab',
    postalCode: '147001',
    addressCountry: 'IN',
  },
  
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: siteConfig.contact.phone,
      contactType: 'customer service',
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi', 'Punjabi'],
    },
  ],
  
  sameAs: [
    siteConfig.social.facebook,
    siteConfig.social.twitter,
    siteConfig.social.linkedin,
    siteConfig.social.instagram,
  ],
  
  
}

// Enhanced Local Business Schema with Geo Coordinates
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['ProfessionalService', 'LocalBusiness'],
  // Schema name should match the Google Business Profile name exactly.
  name: 'EaseBuilds',
  alternateName: 'EaseBuilds Web Developer',
  description: 'A one-developer web studio in Patiala, Punjab, building custom websites, online stores, SEO and WhatsApp automation for businesses across Patiala, Rajpura, Sangrur, Mohali and Chandigarh. Sites are built on Next.js and React, from Rs 2,999, live in 2-3 weeks.',
  
  image: `${siteConfig.url}/opengraph-image.png`,
  url: siteConfig.url,
  telephone: siteConfig.contact.phone,
  email: siteConfig.contact.email,
  
  priceRange: siteConfig.business.priceRange,
  
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
  
  // must stay identical to the hours on the Google Business Profile —
  // Google cross-references the two
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
  
  areaServed: siteConfig.business.areaServed.map(area => ({
    '@type': 'City',
    name: area,
  })),
  
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Web Development Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Custom Website Development',
          description: 'Professional custom website design and development services in Patiala Punjab India',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'E-commerce Development',
          description: 'Complete online store development with payment integration for Patiala businesses',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'SEO Services',
          description: 'Search engine optimization to rank higher on Google in Patiala Punjab India',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Website Maintenance',
          description: 'Regular website updates and maintenance services for Patiala businesses',
        },
      },
    ],
  },
  
  
  sameAs: [
    siteConfig.social.facebook,
    siteConfig.social.linkedin,
    siteConfig.social.instagram,
  ],
}

// Website Schema
export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  publisher: {
    '@type': 'Organization',
    name: siteConfig.name,
    logo: {
      '@type': 'ImageObject',
      url: `${siteConfig.url}/images/logo.png`,
    },
  },
}

// FAQPage schema for the homepage.
//
// Task 7.11: this used to be FOURTEEN hardcoded questions while lib/faqData.js
// rendered ELEVEN on the page, and only 3 matched. Google requires FAQ markup
// to describe content the user can actually see, so the two lists disagreeing
// was a correctness bug, not untidiness.
//
// It is now DERIVED from faqData.js. Visible and declared cannot drift apart
// again. Add or remove a homepage FAQ in lib/faqData.js and this follows.
//
// Deleted along with the hardcoded list, and worth not reintroducing:
//   - "Do you offer web hosting services in Patiala?" - a service that does not
//     exist. `web hosting` is the homepage's biggest query (133 impressions,
//     position 6.5, 0 clicks) and this entry was the likely cause.
//   - a services list naming Website Maintenance, Logo Design, Digital
//     Marketing and Web Hosting - two deleted pages, two never offered.
//   - "60%+ of users browse on mobile", unsourced.
export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
}

// BreadcrumbList Schema
export function generateBreadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  }
}

// Service Schema Generator
export function generateServiceSchema(service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.name,
    provider: {
      '@type': 'LocalBusiness',
      name: siteConfig.business.name,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Patiala',
        addressRegion: 'Punjab',
        addressCountry: 'IN',
      },
    },
    areaServed: {
      '@type': 'City',
      name: 'Patiala',
      containedInPlace: {
        '@type': 'State',
        name: 'Punjab',
      },
    },
    description: service.description,
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'INR',
      price: service.price,
    },
  }
}

export default siteConfig
