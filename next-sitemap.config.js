/** @type {import('next-sitemap').IConfig} */

const config = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://codenest-service.vercel.app',
  generateRobotsTxt: true,
  generateIndexSitemap: false, // Your site is small, no need for sitemap index
  exclude: ['/api/*', '/_not-found', '/404', '/500', '/admin/*', '/dashboard/*'],
  
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_not-found', '/admin/', '/dashboard/'],
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
    // IMPORTANT: Explicitly specify sitemap location
    additionalSitemaps: [
      'https://codenest-service.vercel.app/sitemap.xml',
    ],
  },
  
  // Custom priority and changefreq based on page importance
  transform: async (config, path) => {
    let priority = 0.7
    let changefreq = 'monthly'

    // Homepage - HIGHEST priority for local SEO
    if (path === '/') {
      priority = 1.0
      changefreq = 'weekly' // More realistic than daily
    } 
    // Main service pages - HIGH priority
    else if (path === '/pricing') {
      priority = 0.9
      changefreq = 'monthly'
    }
    else if (path === '/about') {
      priority = 0.8
      changefreq = 'monthly'
    }
    // Contact page - CRITICAL for local SEO
    else if (path === '/contact') {
      priority = 0.8
      changefreq = 'monthly'
    }
    // Blog pages - medium-high priority
    else if (path.startsWith('/blog')) {
      priority = 0.7
      changefreq = 'weekly'
    }
    // Service-specific pages
    else if (path.startsWith('/services')) {
      priority = 0.8
      changefreq: 'monthly'
    }
    // Portfolio/Projects pages
    else if (path.startsWith('/projects') || path.startsWith('/portfolio')) {
      priority = 0.7
      changefreq = 'monthly'
    }

    return {
      loc: path,
      changefreq: changefreq,
      priority: priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    }
  },
  
  // Additional paths to ensure critical pages are included
  additionalPaths: async (config) => {
    const result = []
    const criticalPaths = ['/pricing', '/about']
    
    for (const path of criticalPaths) {
      result.push(
        await config.transform(config, path)
      )
    }
    
    return result
  },
}

module.exports = config
