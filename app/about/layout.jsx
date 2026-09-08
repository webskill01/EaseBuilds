import JsonLd from '../components/JsonLd'
// About Page Layout - SEO Optimized
// EaseBuilds - Best Web Developer in Patiala Punjab India


// OPTIMIZED Metadata (Title: 58 chars, Description: 155 chars)
export const metadata = {
  title: 'About EaseBuilds | Best Web Developer Patiala - Our Story',
  description: 'Meet the team behind EaseBuilds, Patiala\'s top web development company. 50+ happy clients, 100% satisfaction. Expert website design since 2023.',
  
  openGraph: {
    title: 'About EaseBuilds - Best Web Developer in Patiala Punjab India',
    description: 'Learn about EaseBuilds, the top-rated web development company in Patiala. Meet our expert team and discover our mission.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://easebuilds.in/about',
    siteName: 'EaseBuilds',
    images: [{
      url: 'https://easebuilds.in/opengraph-image.png',
      width: 1200,
      height: 630,
      alt: 'EaseBuilds Team - Best Web Developer in Patiala'
    }]
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'About EaseBuilds - Best Web Developer Patiala',
    description: 'Meet the team behind Patiala\'s top web development company. 50+ clients, 5.0 rating.',
    images: ['https://easebuilds.in/opengraph-image.png'],
  },
  
  alternates: {
    canonical: 'https://easebuilds.in/about',
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

export default function AboutLayout({ children }) {
  // Organization Schema - About Page Specific
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'EaseBuilds',
    alternateName: 'EaseBuilds Web Development',
    url: 'https://easebuilds.in',
    logo: 'https://easebuilds.in/images/logo.png',
    description: 'Best web development company in Patiala Punjab India, specializing in custom website design, e-commerce solutions, and SEO services for local businesses.',
    
    foundingDate: '2025-10-22',
    foundingLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Patiala',
        addressRegion: 'Punjab',
        addressCountry: 'IN'
      }
    },
    
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Patiala',
      addressRegion: 'Punjab',
      postalCode: '147001',
      addressCountry: 'IN',
    },
    
    contactPoint: [{
      '@type': 'ContactPoint',
      telephone: '+916283380110',
      contactType: 'customer service',
      email: 'info@easebuilds.in',
      areaServed: ['Patiala', 'Rajpura', 'Sangrur', 'Punjab'],
      availableLanguage: ['English', 'Hindi', 'Punjabi'],
    }],
    
    
    sameAs: [
      'https://facebook.com/easebuilds',
      'https://twitter.com/easebuilds',
      'https://linkedin.com/company/easebuilds',
      'https://instagram.com/easebuilds',
    ],
    
    knowsAbout: [
      'Web Development',
      'Website Design',
      'E-commerce Development',
      'SEO Services',
      'Mobile App Development',
      'Digital Marketing',
    ],
    
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 30.3398,
        longitude: 76.3869,
      },
      geoRadius: '50000', // 50km radius
    },
  }

  // AboutPage Schema
  const aboutPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About EaseBuilds - Best Web Developer in Patiala Punjab India',
    description: 'Learn about EaseBuilds, the leading web development company in Patiala. Meet our expert team, discover our mission to help local businesses succeed online, and see why 50+ Patiala clients trust us.',
    url: 'https://easebuilds.in/about',
    mainEntity: {
      '@type': 'Organization',
      name: 'EaseBuilds',
      url: 'https://easebuilds.in',
    },
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
        item: 'https://easebuilds.in',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'About Us',
        item: 'https://easebuilds.in/about',
      },
    ],
  }

  // Team/Person Schema (if you have team members to showcase)
  const teamSchema = {
    '@context': 'https://schema.org',
    '@type': 'EmployeeRole',
    roleName: 'Founder & Lead Developer',
    member: {
      '@type': 'Person',
      name: 'EaseBuilds Team', // Replace with actual founder name
      jobTitle: 'Web Developer',
      worksFor: {
        '@type': 'Organization',
        name: 'EaseBuilds',
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Patiala',
        addressRegion: 'Punjab',
        addressCountry: 'IN',
      },
    },
  }

  return (
    <>
      {/* Organization Schema */}
      <JsonLd id="organization-schema" data={organizationSchema} />

      {/* AboutPage Schema */}
      <JsonLd id="about-page-schema" data={aboutPageSchema} />

      {/* Breadcrumb Schema */}
      <JsonLd id="breadcrumb-schema" data={breadcrumbSchema} />

      {/* Team Schema (Optional - add if you have team info) */}
      <JsonLd id="team-schema" data={teamSchema} />

      {children}
    </>
  )
}
