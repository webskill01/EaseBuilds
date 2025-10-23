// Layout for Architects Industry Page
// SEO-optimized metadata and schema markup

import IndustrySchemas from '@/app/components/schemas/IndustrySchema'
import { industries } from '@/lib/industriesData'
import Script from 'next/script'

const industryData = industries.architects

// SEO Metadata - Perfect lengths (Title: 58 chars, Description: 155 chars)
export const metadata = {
  title: industryData.seo.title,
  description: industryData.seo.description,
  keywords: industryData.seo.keywords,
  openGraph: {
    title: 'Architecture Portfolio Website Patiala | EaseBuilds',
    description: 'Stunning portfolio website for architects. Showcase projects, 3D renderings. Get 10x more clients in Punjab.',
    type: 'website',
    locale: 'en_IN',
    url: industryData.seo.canonical,
    images: [
      {
        url: 'https://easebuilds.in/images/industries/architects-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Architecture Portfolio Website Design in Patiala',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Architecture Portfolio Website Patiala',
    description: 'Professional portfolio website for architects. Showcase projects and attract high-value clients.',
  },
  alternates: {
    canonical: industryData.seo.canonical,
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

export default function ArchitectsLayout({ children }) {
  return (
    <>
      <IndustrySchemas
        industryData={industryData} 
        industrySlug="architects" 
      />
      {children}
    </>
  )
}
