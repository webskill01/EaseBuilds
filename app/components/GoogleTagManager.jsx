'use client'

// Google Analytics & GTM Integration
// EaseBuilds - Complete Analytics Setup

import { useEffect } from 'react'
import Script from 'next/script'

export default function GoogleTagManager() {
  const GTM_ID = 'GTM-NWRSKZBL'
  const GA_ID = 'G-LHQTTB0B0Q'

  useEffect(() => {
    // Initialize dataLayer
    window.dataLayer = window.dataLayer || []
    
    // GA4 gtag function
    function gtag() {
      window.dataLayer.push(arguments)
    }
    
    // Set gtag globally
    window.gtag = gtag
    
    // Initialize GA4
    gtag('js', new Date())
    gtag('config', GA_ID)
  }, [])

  return (
    <>
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
    </>
  )
}

// GTM Noscript Component
export function GoogleTagManagerNoScript() {
  return (
    <noscript>
      <iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-NWRSKZBL"
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
        title="Google Tag Manager"
      />
    </noscript>
  )
}
