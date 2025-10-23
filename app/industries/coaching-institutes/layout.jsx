// Layout for Coaching Institutes Industry Page
// SEO-optimized metadata and schema markup

import IndustrySchemas from '@/app/components/schemas/IndustrySchema'
import { industries } from '@/lib/industriesData'
import Script from 'next/script'

const industryData = industries.coachingInstitutes

// SEO Metadata - Perfect lengths (Title: 59 chars, Description: 157 chars)
export const metadata = {
  title: industryData.seo.title,
  description: industryData.seo.description,
  keywords: industryData.seo.keywords,
  openGraph: {
    title: 'Coaching Institute Website Patiala | EaseBuilds',
    description: 'Modern education website with online admission & fee payment. Get 2x enrollments. Trusted by 5+ institutes.',
    type: 'website',
    locale: 'en_IN',
    url: industryData.seo.canonical,
    images: [
      {
        url: 'https://easebuilds.in/images/industries/coaching-institute-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Coaching Institute Website Design in Patiala',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Coaching Institute Website Patiala',
    description: 'Complete education platform with admission forms, fee payment, student portal. Double your enrollments.',
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

export default function CoachingInstitutesLayout({ children }) {
  return (
    <>
      <IndustrySchemas 
        industryData={industryData} 
        industrySlug="coaching-institutes" 
      />
      {children}
    </>
  )
}