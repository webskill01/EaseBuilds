import dynamic from 'next/dynamic'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Hero from './components/home/Hero'

// Lazy load below-fold components
const Services = dynamic(() => import('./components/home/Services'))
const HowItWorks = dynamic(() => import('./components/home/HowItWorks'))
const WhyChooseUs = dynamic(() => import('./components/home/WhyChooseUs'))
const Projects = dynamic(() => import('./components/home/Projects'))
const Testimonials = dynamic(() => import('./components/home/Testimonials'))
const CTA = dynamic(() => import('./components/home/CTA'))
const Contact = dynamic(() => import('./components/home/Contact'))

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />  {/* Above fold - loads immediately */}
        
        {/* Below fold - lazy loads */}
        <Services />
        <HowItWorks />
        <WhyChooseUs />
        <Projects />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
