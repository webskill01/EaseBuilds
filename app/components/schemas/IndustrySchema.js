import Script from 'next/script'

export default function IndustrySchemas({ industryData, industrySlug }) {
  // Service Schema
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: `${industryData.name} Website Development`,
    provider: {
      '@type': 'Organization',
      name: 'EaseBuilds',
      url: 'https://easebuilds.in',
      telephone: '+916283380110',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Patiala',
        addressRegion: 'Punjab',
        addressCountry: 'IN',
      },
    },
    areaServed: {
      '@type': 'State',
      name: 'Punjab',
      containsPlace: {
        '@type': 'City',
        name: 'Patiala',
      },
    },
    description: industryData.hero.description,
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      price: industryData.pricing.starting.toString(),
      availability: 'https://schema.org/InStock',
      url: industryData.seo.canonical,
    },
  }

  // FAQ Schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: industryData.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
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
        name: 'Industries',
        item: 'https://easebuilds.in/industries',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: industryData.name,
        item: industryData.seo.canonical,
      },
    ],
  }

  return (
    <>
      {/* Service Schema */}
      <Script
        id={`${industrySlug}-service-schema`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        strategy="beforeInteractive"
      />

      {/* FAQ Schema */}
      <Script
        id={`${industrySlug}-faq-schema`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        strategy="beforeInteractive"
      />

      {/* Breadcrumb Schema */}
      <Script
        id={`${industrySlug}-breadcrumb-schema`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        strategy="beforeInteractive"
      />
    </>
  )
}
