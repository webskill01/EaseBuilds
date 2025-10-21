// Layout for Portfolio/Work Showcase Page
// SEO-optimized metadata and schema markup for portfolio

import Script from 'next/script'

// SEO Metadata - Optimized title and description lengths
export const metadata = {
  title: 'Portfolio - Web Development Projects Patiala | EaseBuilds Work', // 59 chars
  description: 'View our portfolio of 50+ websites built for Patiala businesses. Custom websites, e-commerce, SEO projects. See real results: dental clinics, architects, manufacturers, retail stores.', // 159 chars
  keywords: 'web developer portfolio patiala, website examples patiala punjab, web development work showcase, patiala web design portfolio, case studies',
  openGraph: {
    title: 'Web Development Portfolio - Patiala Punjab India',
    description: '50+ successful website projects for Patiala businesses. View our work, case studies, and client results.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://easebuilds.in/portfolio',
    images: [
      {
        url: 'https://easebuilds.in/images/portfolio-og.jpg',
        width: 1200,
        height: 630,
        alt: 'EaseBuilds Portfolio - Web Development Projects',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Development Portfolio Patiala',
    description: '50+ successful projects. Dental clinics, architects, e-commerce, manufacturers. View results.',
  },
  alternates: {
    canonical: 'https://easebuilds.in/portfolio',
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

export default function PortfolioLayout({ children }) {
  // ItemList Schema for Portfolio Projects
  const portfolioSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'EaseBuilds Web Development Portfolio',
    description: 'Portfolio of websites built by EaseBuilds for businesses in Patiala Punjab India',
    numberOfItems: 50,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@type': 'CreativeWork',
          name: 'Kumar Dental Clinic Website',
          description: 'Professional dental clinic website with online appointment booking in Patiala',
          creator: {
            '@type': 'Organization',
            name: 'EaseBuilds'
          }
        }
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: {
          '@type': 'CreativeWork',
          name: 'Kaur Architects Portfolio Website',
          description: 'Architecture portfolio website with 3D rendering integration in Patiala Punjab',
          creator: {
            '@type': 'Organization',
            name: 'EaseBuilds'
          }
        }
      },
      {
        '@type': 'ListItem',
        position: 3,
        item: {
          '@type': 'CreativeWork',
          name: 'Singh Manufacturing E-commerce',
          description: 'B2B e-commerce platform for valve manufacturing company in Patiala',
          creator: {
            '@type': 'Organization',
            name: 'EaseBuilds'
          }
        }
      },
    ]
  }

  // Service Schema for Portfolio Services
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Web Development Portfolio Showcase',
    provider: {
      '@type': 'Organization',
      name: 'EaseBuilds',
      url: 'https://easebuilds.in',
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
    },
    description: 'Professional web development portfolio showcasing custom websites, e-commerce platforms, and digital solutions for businesses in Patiala Punjab India',
  }

  return (
    <>
      {/* Portfolio ItemList Schema */}
      <Script
        id="portfolio-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }}
        strategy="beforeInteractive"
      />
      
      {/* Service Schema */}
      <Script
        id="portfolio-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        strategy="beforeInteractive"
      />
      
      {children}
    </>
  )
}
