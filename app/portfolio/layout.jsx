import JsonLd from '../components/JsonLd'
import { portfolioProjects } from '@/lib/portfolioData'
// Layout for Portfolio/Work Showcase Page
// SEO-optimized metadata and schema markup for portfolio


// SEO Metadata - Optimized title and description lengths
export const metadata = {
  title: 'Portfolio - Web Development Projects Patiala | EaseBuilds Work', // 59 chars
  description: 'Live client websites built by EaseBuilds — taxi booking in Patiala, e-commerce in Chennai, home services in Melbourne. Click through to every one of them.',
  openGraph: {
    title: 'Web Development Portfolio - Patiala Punjab India',
    description: 'Live client websites from Patiala to Melbourne. Click through to every one of them.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://easebuilds.in/portfolio',
    images: [
      {
        url: 'https://easebuilds.in/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'EaseBuilds Portfolio - Web Development Projects',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Development Portfolio Patiala',
    description: '5 live client websites and 10 automation systems in production. View the work.',
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
    numberOfItems: portfolioProjects.length,
    itemListElement: portfolioProjects.map((project, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      item: {
        '@type': 'CreativeWork',
        name: project.title,
        description: project.description,
        creator: { '@type': 'Organization', name: 'EaseBuilds' },
      },
    })),
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
      <JsonLd id="portfolio-schema" data={portfolioSchema} />
      
      {/* Service Schema */}
      <JsonLd id="portfolio-service-schema" data={serviceSchema} />
      
      {children}
    </>
  )
}
