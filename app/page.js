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

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <ClientReviews />
      <HowItWorks />
      <WhyChooseUs />
      <Projects />
      <FAQ />
      <HomeCta />
      
      {/* FAQ Schema - Homepage Only */}
      <JsonLd id="homepage-faq-schema" data={faqSchema} />
    </>
  )
}
