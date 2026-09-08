import { faqSchema } from '@/lib/seo'
import Hero from './components/home/Hero'
import JsonLd from './components/JsonLd'

import Services from './components/home/Services'
import ClientReviews from './components/home/ClientReviews'
import HowItWorks from './components/home/HowItWorks'
import WhyChooseUs from './components/home/WhyChooseUs'
import Projects from './components/home/Projects'
import FAQ from './components/home/FAQ'
import Contact from './components/home/Contact'

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
      <Contact />
      
      {/* FAQ Schema - Homepage Only */}
      <JsonLd id="homepage-faq-schema" data={faqSchema} />
    </>
  )
}
