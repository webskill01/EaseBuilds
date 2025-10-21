// app/robots.js
// SEO robots configuration for EaseBuilds - Production Ready

export default function robots() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://easebuilds.in'
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',           // API routes
          '/admin/',         // Admin panel
          '/_not-found',     // 404 page
          '/private/',       // Private content
          '/*.json$',        // JSON files
          '/*/thank-you',    // Thank you pages (if any)
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        crawlDelay: 0,
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        crawlDelay: 0,
      },
      // Block bad bots
      {
        userAgent: [
          'AhrefsBot',
          'SemrushBot',
          'DotBot',
          'MJ12bot'
        ],
        disallow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
