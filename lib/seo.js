// Complete SEO Configuration - Optimized for Best Web Developer in Patiala Punjab India
// EaseBuilds - Professional Website Development Company

// Complete SEO Configuration - Optimized for Best Web Developer in Patiala Punjab India
// EaseBuilds - Professional Website Development Company

export const siteConfig = {
  name: 'EaseBuilds',
  // GSC 90d, homepage-filtered: the "design/designing" family draws 151
  // impressions (web designing in patiala 36, web design in patiala 35,
  // website designing company in patiala 22, +4 more) against 35 for the
  // "development" family. The old title said Development and never Design.
  title: 'Website Design & Development in Patiala | EaseBuilds',
  description: 'Web design and development in Patiala, Punjab. 15 projects shipped — 5 client sites and 10 automation systems in production. From ₹2,999, live in 2-3 weeks.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://easebuilds.in',
  ogImage: '/opengraph-image.png',
  
  author: 'EaseBuilds Team',
  
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
  name: 'EaseBuilds - Best Web Development Company in Patiala Punjab India',
  alternateName: 'EaseBuilds Web Developer',
  description: 'Top-rated web development company in Patiala Punjab India specializing in custom website design, e-commerce solutions, SEO services, and web applications for local businesses across Patiala, Rajpura, Sangrur, Mohali, and Chandigarh. We create stunning, fast, mobile-friendly websites that convert visitors into customers.',
  
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
        text: 'EaseBuilds is a web development studio in Patiala, Punjab, run by developer Nitin. 15 projects shipped so far — 5 client websites, including one for a business in Melbourne, Australia, and 10 automation systems running in production. Specialising in custom website design, e-commerce, SEO, and WhatsApp and AI automation for local businesses. You work directly with the developer who builds your site. Delivery in 2-3 weeks, from ₹2,999.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best website development company in Patiala?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'EaseBuilds builds websites and automation for businesses across healthcare, education, retail, manufacturing and e-commerce, using React and Next.js rather than page builders. Client work spans Patiala, Chennai and Melbourne, Australia, and it is rated 5.0 on Google.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does website development cost in Patiala Punjab India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Website development in Patiala Punjab India starts from ₹2,999. There is no package ladder above that — the number depends on how many distinct page designs you need, whether the site has to connect to anything you already use, and how much of the content already exists. You get one fixed figure for your actual scope, agreed before any work starts. A normal build takes two to three weeks.',
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
        text: 'EaseBuilds typically delivers websites in 2-3 weeks in Patiala Punjab India. Basic websites (3 pages) take about a week, standard websites (8 pages with blog) take 2 weeks, and premium custom websites take 3 weeks. We also offer fast-track delivery in about a week for urgent projects. Our timeline is faster than the industry average of 6-8 weeks.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why choose EaseBuilds over other web developers in Patiala?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Choose EaseBuilds because: (1) You work directly with the developer who builds your site — no account manager, no handoff. (2) Modern stack (React, Next.js) rather than a WordPress template. (3) Delivery in 2-3 weeks. (4) Transparent pricing with no hidden costs. (5) Free maintenance for 1-3 months. (6) A live portfolio you can click through, including a client site in Melbourne, Australia, plus 10 automation systems running in production. (7) SEO-optimised, mobile-first, fast-loading sites.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you provide website maintenance services in Patiala?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, EaseBuilds provides website maintenance in Patiala Punjab India. It is ₹999 a month and optional — content updates, security patches, backups, uptime monitoring and technical support. You own the site, the domain and every account whether or not you take it.',
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
        text: 'Yes. Every project in our portfolio is a live site you can click through to: Modgill Travels (taxi booking, Patiala), Tape India (adhesive products e-commerce, Chennai), Pariksha (exam paper platform), C3 Career Consultants, and Best Cleaning & Painting (Melbourne, Australia).',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I get started with EaseBuilds?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Getting started with EaseBuilds in Patiala Punjab India is easy: (1) Call or WhatsApp us at +91 6283380110, (2) Fill out our contact form with your requirements, (3) Schedule a free consultation to discuss your project, (4) Receive a detailed proposal and timeline, (5) Approve the design mockup, (6) We build your website, (7) Launch your website in 2-3 weeks. Contact us today for a free quote!',
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
