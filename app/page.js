import dynamic from 'next/dynamic'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Hero from './components/home/Hero'

// ✅ LAZY LOAD - Below-fold components (SSR enabled for SEO)
const Services = dynamic(() => import('./components/home/Services'), {
  loading: () => <div className="min-h-[400px] animate-pulse bg-gray-50" />
})

const HowItWorks = dynamic(() => import('./components/home/HowItWorks'), {
  loading: () => <div className="min-h-[500px] animate-pulse bg-gray-50" />
})

const WhyChooseUs = dynamic(() => import('./components/home/WhyChooseUs'), {
  loading: () => <div className="min-h-[400px] animate-pulse bg-gray-50" />
})

const Projects = dynamic(() => import('./components/home/Projects'), {
  loading: () => <div className="min-h-[600px] animate-pulse bg-gray-50" />
})

const Testimonials = dynamic(() => import('./components/home/Testimonials'), {
  loading: () => <div className="min-h-[500px] animate-pulse bg-gray-50" />
})

const CTA = dynamic(() => import('./components/home/CTA'))

const Contact = dynamic(() => import('./components/home/Contact'), {
  loading: () => <div className="min-h-[400px] animate-pulse bg-gray-50" />
})

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Above fold - loads immediately */}
        <Hero />
        
        {/* Below fold - lazy loads when scrolling */}
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
