// Complete SEO Configuration - Optimized for Best Web Developer in Patiala Punjab India
// EaseBuilds - Professional Website Development Company

// Complete SEO Configuration - Optimized for Best Web Developer in Patiala Punjab India
// EaseBuilds - Professional Website Development Company

export const siteConfig = {
  name: 'EaseBuilds',
  title: 'Best Web Developer in Patiala Punjab India | EaseBuilds',
  description: 'Top web developer in Patiala Punjab India. 50+ projects completed. Professional website design, e-commerce & SEO. Starting at ₹2,999. Fast delivery in 2-4 weeks.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://easebuilds.in',
  ogImage: '/og-image.jpg',
  keywords: [
    // Primary Keywords
    'best web developer in patiala',
    'best web developer patiala punjab india',
    'web developer in patiala',
    'website development company in patiala',
    'website development company patiala punjab india',
    
    // Secondary Keywords
    'web developer near me patiala',
    'top web developer patiala',
    'leading web development company patiala',
    'professional website developers in patiala punjab india',
    'web development company near me patiala',
    
    // Service-Specific Keywords
    'custom website development patiala',
    'responsive website design patiala',
    'e-commerce development patiala punjab india',
    'website design company patiala',
    'web design services patiala',
    
    // Local Long-tail Keywords
    'affordable website development patiala',
    'best website design company in patiala punjab',
    'professional web developer patiala punjab',
    'local web developer patiala',
    'ecommerce website patiala',
    
    // Industry-Specific Keywords
    'website for dental clinic patiala',
    'website for architects patiala',
    'website for coaching institute patiala punjab india',
    'website for retail stores patiala',
    'website for manufacturers patiala punjab',
    
    // Technology Keywords
    'react developer patiala',
    'nextjs developer patiala punjab india',
    'modern website development patiala',
    
    // Comparison Keywords
    'best website agency patiala',
    'top website development services patiala punjab india',
    
    // Action Keywords
    'hire web developer patiala',
    'website developer for small business patiala',
  ],
  
  author: 'EaseBuilds Team',
  
  social: {
    twitter: '@easebuilds',
    facebook: 'https://facebook.com/easebuilds',
    linkedin: 'https://linkedin.com/company/easebuilds',
    instagram: 'https://instagram.com/easebuilds',
  },
  
  contact: {
    email: '[email protected]',
    phone: '+91 6283380110',
    whatsapp: '+91 6283380110',
    address: 'Patiala, Punjab 147001, India'
  },
  
  business: {
    name: 'EaseBuilds',
    legalName: 'EaseBuilds Web Development Services',
    foundingDate: '2023',
    areaServed: ['Patiala', 'Rajpura', 'Sangrur', 'Nabha', 'Mohali', 'Chandigarh', 'Punjab', 'India'],
    priceRange: '₹₹',
    hoursAvailable: 'Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 4:00 PM',
  }
}

// Enhanced Metadata Generation Function
export function generateMetadata({ 
  title, 
  description, 
  keywords, 
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
    keywords: keywords || siteConfig.keywords.join(', '),
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
    
    verification: {
      google: 'your-google-verification-code',
      // Add after registering with Google Search Console
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
  logo: `${siteConfig.url}/logo.png`,
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
  
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '50',
    bestRating: '5',
    worstRating: '1',
  },
  
  award: [
    'Best Web Development Company Patiala 2024',
    'Top Rated Website Designer Punjab',
  ],
}

// Enhanced Local Business Schema with Geo Coordinates
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['ProfessionalService', 'LocalBusiness'],
  name: 'EaseBuilds - Best Web Development Company in Patiala Punjab India',
  alternateName: 'EaseBuilds Web Developer',
  description: 'Top-rated web development company in Patiala Punjab India specializing in custom website design, e-commerce solutions, SEO services, and web applications for local businesses across Patiala, Rajpura, Sangrur, Mohali, and Chandigarh. We create stunning, fast, mobile-friendly websites that convert visitors into customers.',
  
  image: `${siteConfig.url}/og-image.jpg`,
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
  
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '50',
    bestRating: '5',
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
      url: `${siteConfig.url}/logo.png`,
    },
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: `${siteConfig.url}/search?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
}

// Comprehensive FAQ Schema - Critical for Rich Snippets
export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Who is the best web developer in Patiala Punjab India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'EaseBuilds is the best web development company in Patiala Punjab India with 50+ successful projects completed. We specialize in custom website design, e-commerce solutions, and SEO services for local businesses including dental clinics, architects, manufacturers, coaching institutes, and retail stores. Our expert team delivers professional, mobile-friendly, fast-loading websites in 2-4 weeks with affordable pricing starting at ₹2,999.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best website development company in Patiala?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'EaseBuilds is recognized as the leading website development company in Patiala Punjab India. We serve businesses across healthcare, education, retail, manufacturing, and e-commerce sectors with modern, custom web solutions built using the latest technologies like React and Next.js. We have a 100% client satisfaction rate and 5.0-star rating.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does website development cost in Patiala Punjab India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Website development costs in Patiala Punjab India start from ₹2,999 for a basic 3-page website at EaseBuilds. Our packages include: Basic Plan (₹2,999 - 3 pages), Standard Plan (₹5,999 - 8 pages with blog), and Premium Plan (₹9,999 - unlimited pages with e-commerce). All packages include responsive design, SEO optimization, free maintenance, and fast delivery in 2-4 weeks.',
      },
    },
    {
      '@type': 'Question',
      name: 'What services does EaseBuilds offer in Patiala?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'EaseBuilds offers comprehensive web development services in Patiala Punjab India including: Custom Website Design, E-commerce Development, Mobile App Development, SEO Services, Website Maintenance, Logo Design, Digital Marketing, and Web Hosting. We specialize in creating stunning, fast, mobile-friendly websites that help local businesses grow online.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to build a website in Patiala?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'EaseBuilds typically delivers websites in 2-4 weeks in Patiala Punjab India. Basic websites (3 pages) take 2-3 weeks, standard websites (8 pages with blog) take 3-4 weeks, and premium custom websites take 3-4 weeks. We also offer fast-track delivery in 1-2 weeks for urgent projects. Our timeline is faster than the industry average of 6-8 weeks.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why choose EaseBuilds over other web developers in Patiala?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Choose EaseBuilds because we are: (1) Local experts based in Patiala Punjab India, (2) Use modern technologies (React, Next.js) vs outdated WordPress, (3) Deliver faster (2-4 weeks vs 6-8 weeks), (4) Offer transparent pricing with no hidden costs, (5) Provide free maintenance (1-3 months), (6) Have 100% client satisfaction and 50+ completed projects, (7) Create SEO-optimized, mobile-friendly, fast-loading websites that actually convert visitors into customers.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you provide website maintenance services in Patiala?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, EaseBuilds provides comprehensive website maintenance services in Patiala Punjab India. All our packages include free maintenance: Basic Plan (1 month free), Standard Plan (2 months free), and Premium Plan (3 months free). After the free period, maintenance costs only ₹250-500/month and includes content updates, security patches, backup services, performance optimization, and technical support.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you create e-commerce websites for businesses in Patiala?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely! EaseBuilds specializes in e-commerce website development in Patiala Punjab India. We create fully functional online stores with product catalogs, shopping carts, secure payment gateways (Razorpay, PayPal, UPI), inventory management, and order tracking. Our e-commerce websites are mobile-friendly, SEO-optimized, and designed to maximize sales for Patiala businesses.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you create websites for specific industries in Patiala?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, EaseBuilds creates industry-specific websites in Patiala Punjab India for: Dental Clinics (with appointment booking), Architects (with portfolio galleries), Coaching Institutes (with admission forms and course details), Retail Stores (with e-commerce), Manufacturers (with product catalogs), Restaurants (with online ordering), Real Estate (with property listings), and more. Each website is customized to meet specific industry needs.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is my website mobile-friendly?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! All websites created by EaseBuilds in Patiala Punjab India are 100% mobile-friendly and responsive. Your website will work perfectly on all devices including smartphones, tablets, laptops, and desktops. We use mobile-first design principles to ensure excellent user experience on mobile devices, which is critical since 60%+ of users browse on mobile phones.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you provide SEO services with website development in Patiala?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, all EaseBuilds websites in Patiala Punjab India include built-in SEO optimization. We implement: On-page SEO (meta tags, keywords, headers), Technical SEO (fast loading, mobile-friendly, schema markup), Local SEO (Google Business Profile integration), Content optimization, and Search Console setup. This helps your website rank higher on Google and get found by local customers in Patiala.',
      },
    },
    {
      '@type': 'Question',
      name: 'What areas do you serve besides Patiala?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'EaseBuilds primarily serves Patiala Punjab India but also provides web development services to businesses in: Rajpura, Sangrur, Nabha, Mohali, Chandigarh, Ludhiana, Jalandhar, Amritsar, and across Punjab. We work with clients throughout India and offer remote services with seamless online communication and project management.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I see examples of websites you have built in Patiala?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! Visit our portfolio section to see websites we have built for Patiala businesses including: Modgill Travels (taxi booking platform), Tape India (e-commerce store), Pariksha (education platform), and websites for dental clinics, architects, manufacturers, coaching institutes, and retail stores. Each project showcases modern design, fast performance, and excellent user experience.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I get started with EaseBuilds?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Getting started with EaseBuilds in Patiala Punjab India is easy: (1) Call or WhatsApp us at +91 6283380110, (2) Fill out our contact form with your requirements, (3) Schedule a free consultation to discuss your project, (4) Receive a detailed proposal and timeline, (5) Approve the design mockup, (6) We build your website, (7) Launch your website in 2-4 weeks. Contact us today for a free quote!',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer web hosting services in Patiala?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, EaseBuilds provides reliable web hosting services in Patiala Punjab India. Our hosting includes: Fast SSD servers, 99.9% uptime guarantee, Free SSL certificate (HTTPS security), Regular backups, Email accounts, 24/7 technical support, and WordPress/custom hosting options. Hosting is available as an add-on service or included in our premium packages.',
      },
    },
  ],
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
