/** @type {import('next-sitemap').IConfig} */

const config = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://codenest-service.vercel.app',
  generateRobotsTxt: true,
  generateIndexSitemap: false, // Your site is small, no need
  exclude: ['/api/*', '/_not-found', '/404', '/500'],
  
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_not-found'],
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
    ],
  },
  
  // Custom priority and changefreq based on your actual pages
  transform: async (config, path) => {
    let priority = 0.7
    let changefreq = 'monthly'

    // Homepage - highest priority
    if (path === '/') {
      priority = 1.0
      changefreq = 'daily'
    } 
    // Main pages - high priority
    else if (path === '/pricing' || path === '/about') {
      priority = 0.9
      changefreq = 'weekly'
    }
    // Future pages (if you add them)
    else if (path.startsWith('/blog')) {
      priority = 0.8
      changefreq = 'weekly'
    }

    return {
      loc: path,
      changefreq: changefreq,
      priority: priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    }
  },
}

module.exports = config
