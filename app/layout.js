import { Inter } from 'next/font/google'
import './globals.css'
import { generateMetadata as genMeta } from '@/lib/seo'
import { organizationSchema , aboutPageSchema } from '@/lib/seo'
import Script from 'next/script'
import LoadingBar from './components/LoadingBar'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap', // Better font loading performance
  variable: '--font-inter', // CSS variable for flexibility
})

export const metadata = genMeta({})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>

        <meta name="google-site-verification" content="7J3zS-P8IEeaQ6lk9E494FAaKNMb9VgeSZ0LOZE7aAQ" />
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema , aboutPageSchema) }}
        />
        
        {/* Favicon - Multiple sizes for better compatibility */}
        <link rel="icon" href="/favicon.png" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Theme Color for mobile browsers */}
        <meta name="theme-color" content="#6366f1" />
        <meta name="color-scheme" content="light" />
        
        {/* Preconnect to external domains for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {process.env.NEXT_PUBLIC_GA_ID && (
          <link rel="preconnect" href="https://www.googletagmanager.com" />
        )}
      </head>
      
      <body 
        className={`${inter.className} antialiased`}
        suppressHydrationWarning
      >
        {/* Loading indicator */}
        <LoadingBar />
        
        {/* Main content */}
        <div id="root">
          {children}
        </div>
        
        {/* Back to top button could go here */}
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
        
        {/* Optional: Cookie Consent (for GDPR compliance) */}
        {/* <CookieConsent /> */}
      </body>
    </html>
  )
}
