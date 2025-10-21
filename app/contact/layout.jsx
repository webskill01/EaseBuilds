// Contact Page Layout - SEO Optimized
// Metadata and Schema Markup for Contact Page

import Script from 'next/script'

// SEO Metadata - Optimized lengths
export const metadata = {
  title: 'Contact Us - Web Developer Patiala Punjab | EaseBuilds', // 57 chars
  description: 'Contact EaseBuilds for website development in Patiala Punjab. Call +91 6283380110, WhatsApp, Email. Free consultation. Visit our office in Patiala. Fast response!', // 159 chars
  keywords: 'contact web developer patiala, website developer contact patiala punjab, easebuilds contact, web design patiala contact number',
  openGraph: {
    title: 'Contact Web Developer in Patiala Punjab India',
    description: 'Get in touch with EaseBuilds for website development. Call, WhatsApp, or visit our Patiala office.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://easebuilds.in/contact',
    images: [
      {
        url: 'https://easebuilds.in/images/contact-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact EaseBuilds - Web Developer Patiala',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Web Developer Patiala',
    description: 'Free consultation. Call +91 6283380110 or visit our Patiala office.',
  },
  alternates: {
    canonical: 'https://easebuilds.in/contact',
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

export default function ContactLayout({ children }) {
  // Organization Contact Point Schema
  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact EaseBuilds',
    description: 'Contact information for EaseBuilds web development services in Patiala Punjab India',
    url: 'https://easebuilds.in/contact',
    mainEntity: {
      '@type': 'Organization',
      name: 'EaseBuilds',
      url: 'https://easebuilds.in',
      logo: 'https://easebuilds.in/logo.png',
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+91-6283380110',
          contactType: 'Customer Service',
          areaServed: 'IN',
          availableLanguage: ['English', 'Hindi', 'Punjabi'],
          contactOption: 'TollFree',
          availableChannel: [
            {
              '@type': 'ServiceChannel',
              name: 'WhatsApp',
              url: 'https://wa.me/916283380110'
            }
          ]
        },
        {
          '@type': 'ContactPoint',
          telephone: '+91-6283380110',
          contactType: 'Sales',
          areaServed: 'IN',
          availableLanguage: ['English', 'Hindi', 'Punjabi']
        },
        {
          '@type': 'ContactPoint',
          telephone: '+91-6283380110',
          contactType: 'Technical Support',
          areaServed: 'IN',
          availableLanguage: ['English', 'Hindi', 'Punjabi']
        }
      ],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Patiala',
        addressRegion: 'Punjab',
        postalCode: '147001',
        addressCountry: 'IN'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 30.3398,
        longitude: 76.3869
      },
      email: 'info@easebuilds.in',
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '18:00'
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: 'Saturday',
          opens: '10:00',
          closes: '16:00'
        }
      ]
    }
  }

  return (
    <>
      {/* Contact Schema */}
      <Script
        id="contact-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
        strategy="beforeInteractive"
      />
      
      {children}
    </>
  )
}
