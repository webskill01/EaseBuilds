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
const contactFaqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How quickly will you respond to my inquiry?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We respond to all inquiries within 2 hours during business hours (Mon-Fri 9AM-6PM). For urgent matters, call or WhatsApp us directly for immediate assistance.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do you offer free consultations?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! We offer free 30-minute consultations for all new projects. You can visit our office in Patiala or schedule a video call at your convenience.'
        }
      },
      {
        '@type': 'Question',
        name: 'What information should I include in my message?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Please include: 1) Type of website you need, 2) Your budget range, 3) Timeline expectations, 4) Any specific features you want. The more details, the better we can help!'
        }
      },
      {
        '@type': 'Question',
        name: 'Can I visit your office without an appointment?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, walk-ins are welcome during business hours! However, we recommend calling ahead to ensure someone is available to give you full attention.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do you work on weekends?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our office is open Saturdays 10AM-4PM. For urgent support, you can reach us via WhatsApp 24/7. We prioritize client emergencies even outside business hours.'
        }
      }
    ]
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
        name: 'Contact',
        item: 'https://easebuilds.in/contact'
      }
    ]
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
      {/* FAQ Schema */}
       <Script
        id="contact-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactFaqSchema) }}
        strategy="beforeInteractive"
      />

      {/*  Breadcrumb Schema */}
      <Script
        id="contact-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        strategy="beforeInteractive"
      />
      {children}
    </>
  )
}
