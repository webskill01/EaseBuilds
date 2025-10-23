import dynamic from 'next/dynamic'
import Script from 'next/script'
import { faqSchema } from '@/lib/seo'
import Hero from './components/home/Hero'

// Dynamic imports for performance
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
      <Hero />
      <Services />
      <ClientReviews />
      <HowItWorks />
      <WhyChooseUs />
      <Projects />
      <FAQ />
      <Contact />
      
      {/* FAQ Schema - Homepage Only */}
      <Script
        id="homepage-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
        strategy="afterInteractive"
      />
    </>
  )
}
