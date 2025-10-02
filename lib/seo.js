// lib/seo.js

export const siteConfig = {
  name: 'CodeNest',
  title: 'CodeNest - Professional Web Development Services',
  description: 'Transform your business with custom websites that attract customers and drive results. Expert web development services for businesses ready to grow online.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://codenest-service.vercel.app',
  ogImage: '/og-image.jpg', // Relative path, will be combined with url
  keywords: [
    'web development services',
    'custom website development',
    'business website design',
    'website for small business',
    'responsive website design',
    'e-commerce development',
    'SEO optimization',
    'mobile-friendly websites',
  ],
  social: {
    twitter: '@codenest',
    facebook: 'https://www.facebook.com/profile.php?id=100014537138957',
    linkedin: 'https://www.linkedin.com/in/nitin-kumar-1110mn/',
    instagram: 'https://www.instagram.com/nitin.kumar.01',
  },
  contact: {
    email: 'nitinemailss@gmail.com',
    phone: '+91 62833-80110',
  },
}

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
    alternates: {
      canonical: fullUrl,
    },
    openGraph: {
      type: type,
      locale: 'en_US',
      url: fullUrl,
      title: fullTitle,
      description: description || siteConfig.description,
      siteName: siteConfig.name,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: description || siteConfig.description,
      images: [ogImage],
      creator: siteConfig.social.twitter,
    },
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
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
      // yandex: 'your-yandex-code',
      // bing: 'your-bing-code',
    },
  }
}

// Organization Schema for structured data
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
    addressCountry: 'India',
    addressLocality: 'Patiala',
    addressRegion: 'Punjab',
    postalCode: '147003',
    // streetAddress: 'Your Street Address',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: siteConfig.contact.phone,
    contactType: 'customer service',
    email: siteConfig.contact.email,
    availableLanguage: ['English'],
  },
  sameAs: [
    siteConfig.social.facebook,
    siteConfig.social.twitter,
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
  potentialAction: {
    '@type': 'SearchAction',
    target: `${siteConfig.url}/search?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
}

// Local Business Schema (if you have a physical location)
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: siteConfig.name,
  image: `${siteConfig.url}${siteConfig.ogImage}`,
  '@id': siteConfig.url,
  url: siteConfig.url,
  telephone: siteConfig.contact.phone,
  email: siteConfig.contact.email,
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IN',
  },
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
  sameAs: Object.values(siteConfig.social),
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
  areaServed: {
    '@type': 'Country',
    name: 'India',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Web Development Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Custom Website Development',
          description: 'Professional custom website design and development',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'E-Commerce Development',
          description: 'Online store development with payment integration',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Website Redesign',
          description: 'Modern redesign of existing websites',
        },
      },
    ],
  },
}

// FAQ Schema (add to relevant pages)
export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How long does it take to build a website?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most websites are completed in 2-4 weeks, depending on complexity and your specific requirements.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the cost of a website?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pricing varies based on your needs. Contact us for a free quote tailored to your project.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you provide website maintenance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we offer ongoing maintenance and support packages to keep your website secure and up-to-date.',
      },
    },
  ],
}
// About Page Schema
export const aboutPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About CodeNest',
  description: 'Learn about CodeNest - Professional web development services helping businesses succeed online',
  url: `${siteConfig.url}/about`,
  mainEntity: {
    '@type': 'Organization',
    name: siteConfig.name,
    description: 'We build beautiful, fast websites that turn visitors into customers',
    foundingDate: '2020',
    founders: [
      {
        '@type': 'Person',
        name: 'Nitin Kumar', // Add actual founder names
      },
    ],
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      value: 5, // Adjust as needed
    },
    slogan: 'Building Beautiful Websites That Grow Your Business',
  },
}
