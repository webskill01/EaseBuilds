import { faqSchema } from '@/lib/seo'
import Hero from './components/home/Hero'
import JsonLd from './components/JsonLd'

import Services from './components/home/Services'
import ClientReviews from './components/home/ClientReviews'
import HowItWorks from './components/home/HowItWorks'
import WhyChooseUs from './components/home/WhyChooseUs'
import Projects from './components/home/Projects'
import FAQ from './components/home/FAQ'
import HomeCta from './components/home/HomeCta'

// Task 7.6 - funnel order: problem -> proof -> what -> how -> why ->
// objections -> CTA.
//
// The two proof blocks used to sit at positions 3 and 6 with HowItWorks and
// WhyChooseUs wedged between them, so the page made its case, stopped to
// explain itself, then made its case again. ClientReviews (the rating and the
// four checkable figures) and Projects (the live work) are now adjacent, and
// the CTA carries its own proof rather than arriving cold.
//
// Section backgrounds are sequenced to this order - each starts on the colour
// the previous one ends on. Reordering these lines without re-checking the
// gradients will put a visible seam between two sections.
export default function Home() {
  return (
    <>
      <Hero />
      <ClientReviews />
      <Projects />
      <Services />
      <HowItWorks />
      <WhyChooseUs />
      <FAQ />
      <HomeCta />
      
      {/* FAQ Schema - Homepage Only */}
      <JsonLd id="homepage-faq-schema" data={faqSchema} />
    </>
  )
}
