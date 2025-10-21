// Blog Layout - SEO Optimized with Schema Markup
// Handles metadata and structured data for blog section

import Script from 'next/script'

export const metadata = {
  title: 'Web Development Blog - Tips, Guides & Insights | EaseBuilds Patiala',
  description: 'Expert web development blog from Patiala. Learn about website design, SEO, e-commerce, maintenance, and choosing developers. Updated guides and tips for businesses.',
  keywords: 'web development blog, patiala blog, website tips, seo guide, web design articles, ecommerce guide, developer blog patiala',
  
  openGraph: {
    title: 'Web Development Blog - EaseBuilds Patiala',
    description: 'Expert guides on web development, SEO, and digital marketing for Patiala businesses.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://easebuilds.in/blog',
    siteName: 'EaseBuilds',
    images: [
      {
        url: 'https://easebuilds.in/images/blog-og.jpg',
        width: 1200,
        height: 630,
        alt: 'EaseBuilds Blog - Web Development Guides',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Web Development Blog - EaseBuilds Patiala',
    description: 'Expert guides on web development, SEO, and digital marketing.',
    images: ['https://easebuilds.in/images/blog-og.jpg'],
  },
  
  alternates: {
    canonical: 'https://easebuilds.in/blog',
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
}

export default function BlogLayout({ children }) {
  // Website Schema - Organization
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'EaseBuilds',
    url: 'https://easebuilds.in',
    logo: 'https://easebuilds.in/images/logo.png',
    description: 'Professional web development services in Patiala Punjab',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Patiala',
      addressRegion: 'Punjab',
      addressCountry: 'IN'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+916283380110',
      contactType: 'Customer Service',
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi', 'Punjabi']
    },
    sameAs: [
      'https://www.facebook.com/easebuilds',
      'https://www.instagram.com/easebuilds',
      'https://twitter.com/easebuilds',
      'https://www.linkedin.com/company/easebuilds'
    ]
  }

  // Blog Schema - CollectionPage
  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'EaseBuilds Web Development Blog',
    description: 'Expert articles and guides on web development, SEO, e-commerce, and digital marketing for businesses in Patiala Punjab.',
    url: 'https://easebuilds.in/blog',
    publisher: {
      '@type': 'Organization',
      name: 'EaseBuilds',
      logo: {
        '@type': 'ImageObject',
        url: 'https://easebuilds.in/images/logo.png'
      }
    },
    inLanguage: 'en-IN',
    mainEntity: {
      '@type': 'Blog',
      name: 'EaseBuilds Blog',
      description: 'Web development tips, guides and insights',
      url: 'https://easebuilds.in/blog'
    }
  }

  // Breadcrumb Schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://easebuilds.in'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: 'https://easebuilds.in/blog'
      }
    ]
  }

  return (
    <>
      {/* Organization Schema */}
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        strategy="beforeInteractive"
      />

      {/* Blog Collection Schema */}
      <Script
        id="blog-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
        strategy="beforeInteractive"
      />

      {/* Breadcrumb Schema */}
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        strategy="beforeInteractive"
      />

      {children}
    </>
  )
}
