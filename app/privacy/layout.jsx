import JsonLd from '../components/JsonLd'
// Privacy Policy Layout - SEO Optimized
// Metadata and Schema Markup for Privacy Policy Page


// SEO Metadata - Optimized lengths
export const metadata = {
  title: 'Privacy Policy - EaseBuilds Web Development Patiala', // 53 chars
  description: 'Privacy Policy for EaseBuilds web development services. Learn how we collect, use, and protect your personal information. GDPR compliant. Contact +91 6283380110', // 159 chars
  openGraph: {
    title: 'Privacy Policy - EaseBuilds Web Development',
    description: 'Learn about our data protection and privacy practices for web development services.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://easebuilds.in/privacy',
    images: [
      {
        url: 'https://easebuilds.in/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'EaseBuilds Privacy Policy',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Privacy Policy - EaseBuilds',
    description: 'Our commitment to protecting your personal information and privacy.',
  },
  alternates: {
    canonical: 'https://easebuilds.in/privacy',
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

export default function PrivacyLayout({ children }) {
  // WebPage Schema for Privacy Policy
  const privacySchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Privacy Policy',
    description: 'Privacy Policy and data protection information for EaseBuilds web development services',
    url: 'https://easebuilds.in/privacy',
    lastReviewed: '2025-01-01',
    dateModified: '2025-01-01',
    datePublished: '2024-01-01',
    isPartOf: {
      '@type': 'WebSite',
      name: 'EaseBuilds',
      url: 'https://easebuilds.in'
    },
    about: {
      '@type': 'Organization',
      name: 'EaseBuilds',
      url: 'https://easebuilds.in',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+91-6283380110',
        contactType: 'Customer Service',
        email: 'privacy@easebuilds.in',
        areaServed: 'IN',
        availableLanguage: ['English', 'Hindi']
      }
    },
    mainContentOfPage: {
      '@type': 'WebPageElement',
      name: 'Privacy Policy Content'
    }
  }

  // Organization Schema with Privacy Focus
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'EaseBuilds',
    url: 'https://easebuilds.in',
    logo: 'https://easebuilds.in/images/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-6283380110',
      email: 'privacy@easebuilds.in',
      contactType: 'Privacy Officer',
      areaServed: 'IN'
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Patiala',
      addressRegion: 'Punjab',
      addressCountry: 'IN'
    },
    privacyPolicy: 'https://easebuilds.in/privacy',
    termsOfService: 'https://easebuilds.in/terms'
  }

  return (
    <>
      {/* Privacy Policy Schema */}
      <JsonLd id="privacy-schema" data={privacySchema} />
      
      {/* Organization Schema */}
      <JsonLd id="organization-privacy-schema" data={organizationSchema} />
      
      {children}
    </>
  )
}
