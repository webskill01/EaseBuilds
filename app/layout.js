import { Inter } from 'next/font/google'
import './globals.css'
import { generateMetadata as genMeta } from '@/lib/seo'
import FloatingWhatsApp from '@/app/components/FloatingWhatsapp'
import { 
  organizationSchema, 
  localBusinessSchema, 
  websiteSchema, 
  faqSchema 
} from '@/lib/seo'
import Script from 'next/script'

const inter = Inter({ 
  subsets: ['latin'], 
  display: 'swap', 
  variable: '--font-inter',
})

// Generate metadata from seo.js configuration (without viewport)
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
        {/* Structured Data for SEO - Multiple Schemas for Local Business */}
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

        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Preload Critical Hero Images for Instant Loading */}
        <link 
          rel="preload" 
          as="image" 
          href="/images/main-hero.jpg"
          fetchPriority="high"
        />
        <link 
          rel="preload" 
          as="image" 
          href="/images/about-hero.jpg"
        />
        <link 
          rel="preload" 
          as="image" 
          href="/images/contact-hero.jpg"
        />
        <link 
          rel="preload" 
          as="image" 
          href="/images/blog-hero.jpg"
        />
        <link 
          rel="preload" 
          as="image" 
          href="/images/portfolio-hero.jpg"
        />
        
        {/* Favicon and App Icons */}
        <link rel="icon" href="/favicon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        
        {/* Theme Color for Mobile Browsers */}
        <meta name="theme-color" content="#2563eb" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
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
        
        {/* Main Content */}
        <main id="main-content">
          <FloatingWhatsApp /> 
          {children}
        </main>

        {/* Global Scripts - Load after content */}
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
