import { Inter } from 'next/font/google'
import './globals.css'
import { generateMetadata as genMeta } from '@/lib/seo'
import { 
  organizationSchema, 
  localBusinessSchema, 
  websiteSchema,
  faqSchema 
} from '@/lib/seo'
import Script from 'next/script'
import LoadingBar from './components/LoadingBar'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

// Generate metadata from seo.js configuration
export const metadata = genMeta({})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body 
        className={`${inter.className} antialiased`}
        suppressHydrationWarning
      >
        {/* Structured Data for SEO - Multiple Schemas for Local Business */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema)
          }}
        />
        
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema)
          }}
        />
        
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema)
          }}
        />
        
        <Script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema)
          }}
        />
        
        {/* Loading indicator */}
        <LoadingBar />
        
        {/* Main content */}
        <div id="root">
          {children}
        </div>
        
        {/* NoScript fallback */}
        <noscript>
          <div style={{ padding: '20px', textAlign: 'center', background: '#fef3c7' }}>
            Please enable JavaScript for the best experience.
          </div>
        </noscript>
        
        {/* Google Analytics - Optimized */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                  page_path: window.location.pathname,
                  send_page_view: true
                });
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  )
}
