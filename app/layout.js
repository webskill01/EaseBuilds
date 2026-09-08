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
import JsonLd from './components/JsonLd'

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
  const GTM_ID = 'GTM-NWRSKZBL'
  const GA_ID = 'G-LHQTTB0B0Q'

  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* ponytail: no font preconnects — next/font self-hosts Inter, so
            fonts.googleapis.com and fonts.gstatic.com are never contacted. */}
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
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

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

        {/* Footer - ONLY IN LAYOUT */}
        <Footer />
        
        {/* Floating WhatsApp Button */}
        <FloatingWhatsApp />

        {/* Structured Data for SEO */}
        <JsonLd id="organization-schema" data={organizationSchema} />
        <JsonLd id="local-business-schema" data={localBusinessSchema} />
        <JsonLd id="website-schema" data={websiteSchema} />

        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `,
          }}
        />

        {/* Google Analytics 4 */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        />
        
        <Script
          id="ga-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `,
          }}
        />
      </body>
    </html>
  )
}
