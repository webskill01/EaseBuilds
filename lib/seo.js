// Complete SEO Configuration - Optimized for Local Search in Patiala

export const siteConfig = {
  name: 'CodeNest',
title: 'CodeNest - Web Developer in Patiala | Website Design',
  description: 'Expert web developer in Patiala, Punjab. Custom website design, e-commerce & SEO services. Transform your business with professional websites. Call now!',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://codenest-service.vercel.app',
  ogImage: '/og-image.jpg',
  keywords: [
    'web developer in patiala',
    'web developer near me',
    'website development company in patiala',
    'website development patiala',
    'web development services patiala punjab',
    'best web developer patiala',
    'custom website development patiala',
    'responsive website design patiala',
    'e-commerce development patiala',
    'SEO services patiala',
    'web design company patiala',
    'website developer near me patiala',
    'professional web developer patiala punjab',
    'local web developer patiala',
    'affordable website development patiala',
  ],
  social: {
    twitter: '@codenest',
    facebook: 'https://www.facebook.com/profile.php?id=100014537138957',
    linkedin: 'https://www.linkedin.com/in/nitin-kumar-1110mn/',
    instagram: 'https://www.instagram.com/nitin.kumar.01',
  },
  contact: {
    email: 'nitinemailss@gmail.com',
    phone: '+916283380110',
    whatsapp: '+916283380110',
    address: {
      street: 'Ekta Nagar A',
      city: 'Patiala',
      state: 'Punjab',
      postal: '147001',
      country: 'India',
    },
  },
}

/**
 * Generate metadata for Next.js pages
 */
export function generateMetadata({
  title,
  description,
  url,
  image,
  noIndex = false,
  type = 'website'
} = {}) {
  const fullTitle = title
    ? `${title} | ${siteConfig.name}`
    : siteConfig.title

  const fullUrl = url || siteConfig.url
  const ogImage = image || `${siteConfig.url}${siteConfig.ogImage}`

  return {
    title: fullTitle,
    description: description || siteConfig.description,
    keywords: siteConfig.keywords.join(', '),
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    metadataBase: new URL(siteConfig.url),
    
    // Favicon and Icons Configuration
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: 'any' },
        { url: '/icon.svg', type: 'image/svg+xml' },
        { url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
        { url: '/icon-512.png', type: 'image/png', sizes: '512x512' },
      ],
      apple: [
        { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
      ],
      shortcut: ['/favicon.ico'],
    },
    
    // Apple-specific meta tags
    appleWebApp: {
      capable: true,
      title: siteConfig.name,
      statusBarStyle: 'default',
    },
    // Canonical URL
    alternates: {
      canonical: fullUrl,
    },
    
    // Open Graph metadata for social sharing
    openGraph: {
      type: type,
      locale: 'en_IN',
      url: fullUrl,
      title: fullTitle,
      description: description || siteConfig.description,
      siteName: siteConfig.name,
    },
    
    // Twitter Card metadata
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: description || siteConfig.description,
      creator: siteConfig.social.twitter,
    },
    
    // Robots directives
    robots: {
      index: !noIndex,
      follow: !noIndex,
      nocache: false,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    
    // Verification codes
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || '7J3zS-P8IEeaQ6lk9E494FAaKNMb9VgeSZ0LOZE7aAQ',
      // Add other verification codes as needed
      // yandex: 'your-yandex-code',
      // bing: 'your-bing-code',
    },
    
    // Additional metadata
    other: {
      'mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-capable': 'yes',
    },
  }
}


// Organization Schema
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  logo: `${siteConfig.url}/logo.png`,
  image: `${siteConfig.url}${siteConfig.ogImage}`,
  telephone: siteConfig.contact.phone,
  email: siteConfig.contact.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Ekta Nagar A',
    addressLocality: 'Patiala',
    addressRegion: 'Punjab',
    postalCode: '147001',
    addressCountry: 'IN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: siteConfig.contact.phone,
    contactType: 'customer service',
    email: siteConfig.contact.email,
    availableLanguage: ['English', 'Hindi', 'Punjabi'],
  },
  sameAs: [
    siteConfig.social.facebook,
    siteConfig.social.linkedin,
    siteConfig.social.instagram,
  ],
  foundingDate: '2020',
  slogan: 'Building Beautiful Websites That Grow Your Business',
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
  },
  inLanguage: 'en-IN',
}

// Local Business Schema - CRITICAL FOR LOCAL SEO
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'CodeNest - Web Development Company Patiala',
  alternateName: 'CodeNest Web Developer',
  description: 'Professional website development and full-stack development service in Patiala, Punjab. We specialize in creating custom websites, web applications, and e-commerce solutions for local businesses and startups.',
  image: `${siteConfig.url}${siteConfig.ogImage}`,
  '@id': siteConfig.url,
  url: siteConfig.url,
  telephone: siteConfig.contact.phone,
  email: siteConfig.contact.email,
  priceRange: '₹₹',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Ekta Nagar A',
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
  areaServed: [
    {
      '@type': 'City',
      name: 'Patiala',
    },
    {
      '@type': 'State',
      name: 'Punjab',
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
    {
      '@type': 'City',
      name: 'Mohali',
    },
    {
      '@type': 'City',
      name: 'Chandigarh',
    },
  ],
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '00:00',
    closes: '23:59',
  },
  sameAs: [
    siteConfig.social.facebook,
    siteConfig.social.linkedin,
    siteConfig.social.instagram,
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Web Development Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Custom Website Development',
          description: 'Professional custom website design and development in Patiala for businesses of all sizes',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'E-Commerce Development',
          description: 'Online store development with secure payment integration for Patiala businesses',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Website Redesign',
          description: 'Modern redesign and optimization of existing websites',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Full-Stack Web Development',
          description: 'Complete web application development using modern technologies',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Website Maintenance',
          description: 'Ongoing website maintenance, updates, and technical support',
        },
      },
    ],
  },
}

// Service Schema
export const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Web Development',
  provider: {
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
  },
  areaServed: [
    {
      '@type': 'City',
      name: 'Patiala',
      '@id': 'https://en.wikipedia.org/wiki/Patiala',
    },
    {
      '@type': 'State',
      name: 'Punjab',
    },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Web Development Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Custom Website Development in Patiala',
          description: 'Professional custom website design and development for businesses in Patiala and Punjab',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'E-Commerce Development Patiala',
          description: 'Online store development with payment integration for Patiala businesses',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Website Redesign Services',
          description: 'Modern redesign of existing websites in Patiala',
        },
      },
    ],
  },
}

// FAQ Schema - Optimized for Local Search Queries
export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Who is the best web developer in Patiala?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CodeNest is a top-rated web development company in Patiala, Punjab with professional experience creating modern, responsive websites for local businesses. We specialize in custom website design, e-commerce development, and full-stack web solutions tailored to meet your unique needs.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does website development cost in Patiala?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Website development costs in Patiala typically range from ₹15,000 to ₹2,00,000 depending on complexity, features, and specific requirements. CodeNest offers competitive pricing with transparent quotes. Contact us at +91 62833 80110 for a free customized estimate for your project.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to build a website in Patiala?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most websites are completed in 2-4 weeks, depending on complexity and your specific requirements. Simple business websites can be ready in 1-2 weeks, while complex e-commerce sites may take 4-6 weeks. CodeNest follows an efficient development process to deliver quality websites on time.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you provide website maintenance services in Patiala?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, CodeNest offers comprehensive website maintenance and support packages for businesses in Patiala. Our maintenance services include regular updates, security monitoring, backups, performance optimization, and technical support to keep your website secure and running smoothly.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where is CodeNest located in Patiala?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CodeNest is located in Ekta Nagar A, Patiala, Punjab 147001. We serve businesses throughout Patiala and surrounding areas including Rajpura, Sangrur, Nabha, Mohali, and Chandigarh with professional web development services.',
      },
    },
    {
      '@type': 'Question',
      name: 'What technologies do you use for web development?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CodeNest uses modern web technologies including React, Next.js, Node.js, and other cutting-edge frameworks to build fast, secure, and scalable websites. We create responsive, mobile-friendly websites optimized for performance and SEO.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer e-commerce website development in Patiala?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, CodeNest specializes in e-commerce website development for Patiala businesses. We create custom online stores with secure payment integration, inventory management, and mobile-responsive design to help you sell products online effectively.',
      },
    },
  ],
}

// About Page Schema
export const aboutPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About CodeNest',
  description: 'Learn about CodeNest - Professional web development company in Patiala helping businesses succeed online with custom websites',
  url: `${siteConfig.url}/about`,
  mainEntity: {
    '@type': 'Organization',
    name: siteConfig.name,
    description: 'We build beautiful, fast websites that turn visitors into customers for businesses in Patiala, Punjab, and beyond',
    foundingDate: '2020',
    founders: [
      {
        '@type': 'Person',
        name: 'Nitin Kumar',
      },
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Ekta Nagar A',
      addressLocality: 'Patiala',
      addressRegion: 'Punjab',
      postalCode: '147001',
      addressCountry: 'IN',
    },
    slogan: 'Building Beautiful Websites That Grow Your Business',
  },
}

// Breadcrumb Schema Generator
export const generateBreadcrumbSchema = (items) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.url}`,
    })),
  }
}

// Review Schema Generator
export const generateReviewSchema = (reviews) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: reviews.length,
    },
    review: reviews.map((review) => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: review.author,
      },
      datePublished: review.date,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: review.rating,
        bestRating: '5',
      },
      reviewBody: review.text,
    })),
  }
}
