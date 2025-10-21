import dynamic from 'next/dynamic'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Hero from './components/home/Hero'

// Dynamic imports for below-the-fold components (performance optimization)
const Services = dynamic(() => import('./components/home/Services'), { 
  loading: () => <div className="min-h-[400px] bg-gray-50 animate-pulse" />
})

const ClientReviews = dynamic(() => import('./components/home/ClientReviews'), { 
  loading: () => <div className="min-h-[400px] bg-white animate-pulse" />
})

const HowItWorks = dynamic(() => import('./components/home/HowItWorks'), { 
  loading: () => <div className="min-h-[400px] bg-gray-50 animate-pulse" />
})

const WhyChooseUs = dynamic(() => import('./components/home/WhyChooseUs'), { 
  loading: () => <div className="min-h-[400px] bg-white animate-pulse" />
})

const Projects = dynamic(() => import('./components/home/Projects'), { 
  loading: () => <div className="min-h-[400px] bg-gray-50 animate-pulse" />
})

const FAQ = dynamic(() => import('./components/home/FAQ'), { 
  loading: () => <div className="min-h-[400px] bg-white animate-pulse" />
})


const Contact = dynamic(() => import('./components/home/Contact'), { 
  loading: () => <div className="min-h-[500px] bg-gray-50 animate-pulse" />
})

export default function Home() {
  return (
    <>
      <Header />
      
      {/* Hero Section - Above the fold, loaded immediately */}
      <Hero />
      
      {/* Services Section */}
      <Services />
      
      {/* Client Reviews Section - NEW - Critical for Local SEO */}
      <ClientReviews />
      
      {/* How It Works Section */}
      <HowItWorks />
      
      {/* Why Choose Us Section */}
      <WhyChooseUs />
      
      {/* Projects Portfolio Section */}
      <Projects />
      
      {/* FAQ Section - NEW - Critical for Rich Snippets */}
      <FAQ />
            
      {/* Contact Section */}
      <Contact />
      
      <Footer />
    </>
  )
}
