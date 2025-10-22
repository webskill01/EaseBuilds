import { Inter } from 'next/font/google'
import './globals.css'
import { generateMetadata as genMeta } from '@/lib/seo'
import FloatingWhatsApp from '@/app/components/FloatingWhatsapp'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Breadcrumb from './components/ui/Breadcrumb'
import { 
  organizationSchema, 
  localBusinessSchema, 
  websiteSchema, 
  faqSchema 
} from '@/lib/seo'
import Script from 'next/script'
import GoogleTagManager from './components/GoogleTagManager'

const inter = Inter({ 
  subsets: ['latin'], 
  display: 'swap', 
  variable: '--font-inter',
})

// Generate metadata from seo.js configuration
export const metadata = genMeta({})

// Export viewport separately (Next.js 15 requirement)
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Google Analytics & Tag Manager */}
      <GoogleTagManager/>
      
        {/* Structured Data for SEO */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
          strategy="beforeInteractive"
        />
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
          strategy="beforeInteractive"
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
          strategy="beforeInteractive"
        />
        <Script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
          strategy="beforeInteractive"
        />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Preload Critical Images */}
        <link 
          rel="preload" 
          as="image" 
          href="/images/main-hero.jpg"
          fetchPriority="high"
        />
        
        {/* Favicon and App Icons */}
        <link rel="icon" href="/favicon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        
        {/* Theme Color */}
        <meta name="theme-color" content="#2563eb" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      
      <body className="antialiased min-h-screen bg-white text-gray-900">
        {/* Skip to main content for accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-blue-600 focus:text-white focus:rounded-md focus:m-2"
        >
          Skip to main content
        </a>
        
        {/* Header Navigation */}
        <Header />
        
        {/* Breadcrumb - Below Header, Above Main Content */}
        <Breadcrumb />
        
        {/* Main Content */}
        <main id="main-content">
          {children}
        </main>

        {/* Footer */}
        <Footer />
        
        {/* Floating WhatsApp Button */}
        <FloatingWhatsApp />

        {/* Global Scripts */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              // Add Google Tag Manager or Analytics here
              // window.dataLayer = window.dataLayer || [];
            `,
          }}
        />
      </body>
    </html>
  )
}
