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

// Enhanced metadata for SEO
export const metadata = {
  title: 'CodeNest - Professional Web Development Services | Fast, Beautiful Websites',
  description: 'Building beautiful, fast websites that turn visitors into customers. Get online in weeks, not months. 50+ satisfied clients. Custom websites, e-commerce, and more.',
  keywords: 'web development, website design, custom websites, e-commerce, business websites, responsive design, SEO optimization',
  authors: [{ name: 'CodeNest' }],
  creator: 'CodeNest',
  publisher: 'CodeNest',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'CodeNest - Professional Web Development Services',
    description: 'Transform your business with a stunning website. Fast delivery, 100% satisfaction guaranteed.',
    url: 'https://codenest-service.vercel.app',
    siteName: 'CodeNest',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'CodeNest Web Development Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CodeNest - Professional Web Development',
    description: 'Beautiful websites that grow your business',
    images: ['/og-image.jpg'],
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
    canonical: 'https://yourdomain.com',
  },
  verification: {
    google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
}

// Viewport configuration for responsive design
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#6366f1',
}

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative overflow-hidden" role="main" aria-label="Main content">
        {/* Hero Section - Above the fold */}
        <section id="home" aria-labelledby="hero-heading">
          <Hero />
        </section>
        
        {/* Services Section */}
        <section id="services" aria-labelledby="services-heading">
          <Services />
        </section>
        
        {/* How It Works Section */}
        <section id="how-it-works" aria-labelledby="process-heading">
          <HowItWorks />
        </section>
        
        {/* Why Choose Us Section */}
        <section id="why-choose-us" aria-labelledby="benefits-heading">
          <WhyChooseUs />
        </section>
        
        {/* Projects Section */}
        <section id="projects" aria-labelledby="portfolio-heading">
          <Projects />
        </section>
        
        {/* Testimonials Section */}
        <section id="testimonials" aria-labelledby="testimonials-heading">
          <Testimonials />
        </section>
        
        {/* Call to Action Section */}
        <section id="cta" aria-labelledby="cta-heading">
          <CTA />
        </section>
        
        {/* Contact Section */}
        <section id="contact" aria-labelledby="contact-heading">
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  )
}
