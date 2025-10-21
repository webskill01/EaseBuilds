// Pricing Page Layout - SEO Optimized with Schema Markup
// EaseBuilds - Best Web Developer in Patiala Punjab India

import Script from 'next/script'

// OPTIMIZED Metadata (Title: 59 chars, Description: 155 chars)
export const metadata = {
  title: 'Website Pricing Patiala | ₹2,999+ | EaseBuilds Packages',
  description: 'Affordable website development pricing in Patiala. Basic ₹2,999, Business ₹5,999, E-commerce ₹9,999. Free maintenance, fast delivery. Call +91 6283380110!',
  keywords: 'website pricing patiala, web development cost patiala punjab india, affordable website packages patiala, web design pricing patiala, website development rates patiala, best value web developer patiala',
  
  openGraph: {
    title: 'Website Development Pricing in Patiala | Starting ₹2,999',
    description: 'Transparent pricing for professional websites in Patiala. 3 packages, no hidden costs, free maintenance included.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://easebuilds.in/pricing',
    siteName: 'EaseBuilds',
    images: [{
      url: 'https://easebuilds.in/images/pricing-packages-patiala.jpg',
      width: 1200,
      height: 630,
      alt: 'EaseBuilds Pricing Packages - Web Development in Patiala'
    }]
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Website Pricing Patiala | Starting ₹2,999 - EaseBuilds',
    description: 'Professional web development packages. Basic ₹2,999, Business ₹5,999, E-commerce ₹9,999. Patiala.',
    images: ['https://easebuilds.in/images/pricing-packages-patiala.jpg'],
  },
  
  alternates: {
    canonical: 'https://easebuilds.in/pricing',
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

export default function PricingLayout({ children }) {
  // Product Schema for Pricing Packages (CRITICAL for Rich Snippets)
  const productsSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@type': 'Product',
          name: 'Basic Website Package - Patiala',
          description: '3-page professional website with SEO optimization and responsive design for businesses in Patiala Punjab India',
          brand: {
            '@type': 'Brand',
            name: 'EaseBuilds'
          },
          offers: {
            '@type': 'Offer',
            url: 'https://easebuilds.in/pricing',
            priceCurrency: 'INR',
            price: '2999',
            priceValidUntil: '2025-12-31',
            itemCondition: 'https://schema.org/NewCondition',
            availability: 'https://schema.org/InStock',
            seller: {
              '@type': 'Organization',
              name: 'EaseBuilds'
            }
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '5.0',
            reviewCount: '50'
          }
        }
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: {
          '@type': 'Product',
          name: 'Business Website Package - Patiala',
          description: '8-page website with blog, advanced SEO, and premium features for Patiala businesses',
          brand: {
            '@type': 'Brand',
            name: 'EaseBuilds'
          },
          offers: {
            '@type': 'Offer',
            url: 'https://easebuilds.in/pricing',
            priceCurrency: 'INR',
            price: '5999',
            priceValidUntil: '2025-12-31',
            itemCondition: 'https://schema.org/NewCondition',
            availability: 'https://schema.org/InStock',
            seller: {
              '@type': 'Organization',
              name: 'EaseBuilds'
            }
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '5.0',
            reviewCount: '50'
          }
        }
      },
      {
        '@type': 'ListItem',
        position: 3,
        item: {
          '@type': 'Product',
          name: 'E-commerce Website Package - Patiala',
          description: 'Full-featured online store with unlimited pages, payment gateway, and product catalog for Patiala businesses',
          brand: {
            '@type': 'Brand',
            name: 'EaseBuilds'
          },
          offers: {
            '@type': 'Offer',
            url: 'https://easebuilds.in/pricing',
            priceCurrency: 'INR',
            price: '9999',
            priceValidUntil: '2025-12-31',
            itemCondition: 'https://schema.org/NewCondition',
            availability: 'https://schema.org/InStock',
            seller: {
              '@type': 'Organization',
              name: 'EaseBuilds'
            }
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '5.0',
            reviewCount: '50'
          }
        }
      }
    ]
  }

  // AggregateOffer Schema (Shows price range in search results)
  const aggregateOfferSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Website Development Services Patiala',
    description: 'Professional website development services in Patiala Punjab India with transparent pricing and guaranteed satisfaction',
    provider: {
      '@type': 'Organization',
      name: 'EaseBuilds',
      url: 'https://easebuilds.in'
    },
    areaServed: {
      '@type': 'City',
      name: 'Patiala',
      containedInPlace: {
        '@type': 'State',
        name: 'Punjab',
        containedInPlace: {
          '@type': 'Country',
          name: 'India'
        }
      }
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'INR',
      lowPrice: '2999',
      highPrice: '9999',
      offerCount: '3'
    }
  }

  // FAQ Schema for Pricing Questions
  const pricingFaqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much does website development cost in Patiala?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Website development in Patiala starts at ₹2,999 for a basic 3-page website. Our Business package costs ₹5,999 for 8 pages with blog, and Premium E-commerce package is ₹9,999 with unlimited pages. All packages include responsive design, SEO optimization, and free maintenance for 1-3 months.'
        }
      },
      {
        '@type': 'Question',
        name: 'What is included in the website development pricing?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'All packages include: responsive mobile-friendly design, SEO optimization, content upload, social media integration, speed optimization, free SSL certificate, and free maintenance (1-3 months depending on package). Business and Premium packages also include free hosting for 1-2 years.'
        }
      },
      {
        '@type': 'Question',
        name: 'Are there any hidden costs in website development?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No hidden costs! EaseBuilds offers 100% transparent pricing. The package price is what you pay. Optional add-ons like logo design (₹1,999), extra pages (₹799 each), or premium hosting (₹3,999/year) are clearly listed separately and completely optional.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can I upgrade my website package later?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! You can upgrade from Basic to Business or Premium at any time. We will credit your initial payment towards the upgrade cost. Many Patiala clients start with Basic and upgrade as their business grows.'
        }
      },
      {
        '@type': 'Question',
        name: 'What payment methods do you accept in Patiala?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We accept all payment methods: UPI, bank transfer, credit/debit cards, and online payment gateways. Payment is split into 50% advance to start the project and 50% upon completion and delivery.'
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
        name: 'Pricing',
        item: 'https://easebuilds.in/pricing'
      }
    ]
  }

  return (
    <>
      {/* Product Schema for Pricing Packages */}
      <Script
        id="products-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productsSchema) }}
        strategy="beforeInteractive"
      />

      {/* AggregateOffer Schema */}
      <Script
        id="aggregate-offer-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateOfferSchema) }}
        strategy="beforeInteractive"
      />

      {/* FAQ Schema */}
      <Script
        id="pricing-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingFaqSchema) }}
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
