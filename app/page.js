import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Hero from './components/home/Hero'
import Services from './components/home/Services'
import HowItWorks from './components/home/HowItWorks'
import WhyChooseUs from './components/home/WhyChooseUs'
import Projects from './components/home/Projects'
import Testimonials from './components/home/Testimonials'
import CTA from './components/home/CTA'
import Contact from './components/home/Contact'

// Enhanced metadata for LOCAL SEO - Optimized for Patiala
export const metadata = {
  title: 'CodeNest - Web Developer in Patiala | Website Design',
  description: 'Expert web developer in Patiala, Punjab. Custom website design, e-commerce & SEO services. Transform your business with professional websites. Call now!',
  keywords: 'web developer in patiala, web developer near me, website development company in patiala, website development patiala, web development services patiala punjab, best web developer patiala, custom website development patiala, responsive website design patiala, e-commerce development patiala, SEO services patiala',
  authors: [{ name: 'CodeNest' }],
  creator: 'CodeNest',
  publisher: 'CodeNest',
  formatDetection: {
    email: false,
    address: false,
    telephone: true, // Enable click-to-call
  },
  openGraph: {
    title: 'CodeNest - Web Developer in Patiala | Website Development Company',
    description: 'Leading web development company in Patiala, Punjab. Expert web developer near you. Transform your business with professional websites. Fast delivery, 100% satisfaction guaranteed.',
    url: 'https://codenest-service.vercel.app',
    siteName: 'CodeNest',
    locale: 'en_IN', // Changed for India
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CodeNest - Web Developer in Patiala | Website Development',
    description: 'Leading web development company in Patiala, Punjab. Beautiful websites that grow your business.',
    creator: '@codenest',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://codenest-service.vercel.app', // FIXED
  },
  verification: {
    google: 'C3Vd1zR24YyWt984buHbYkmHPnROQREj6SwwOpErj5U',
  },
}

// Viewport configuration
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
    themeColor: [
      { media: '(prefers-color-scheme: light)', color: '#6366f1' },
      { media: '(prefers-color-scheme: dark)', color: '#4f46e5' },
    ],
    
}

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative overflow-hidden" role="main" aria-label="Main content">
        <section id="home" aria-labelledby="hero-heading">
          <Hero />
        </section>
        
        <section id="services" aria-labelledby="services-heading">
          <Services />
        </section>
        
        <section id="how-it-works" aria-labelledby="process-heading">
          <HowItWorks />
        </section>
        
        <section id="why-choose-us" aria-labelledby="benefits-heading">
          <WhyChooseUs />
        </section>
        
        <section id="projects" aria-labelledby="portfolio-heading">
          <Projects />
        </section>
        
        <section id="testimonials" aria-labelledby="testimonials-heading">
          <Testimonials />
        </section>
        
        <section id="cta" aria-labelledby="cta-heading">
          <CTA />
        </section>
        
        <section id="contact" aria-labelledby="contact-heading">
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  )
}
