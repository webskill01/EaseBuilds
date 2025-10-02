/** @type {import('next-sitemap').IConfig} */

export const config = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://codenest-service.vercel.app',
  generateRobotsTxt: true,
  generateIndexSitemap: false, // Set to true if you have 50k+ pages
  exclude: ['/api/*', '/admin/*', '/private/*', '/thank-you'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/private/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      // Add additional sitemaps if needed
      // `${process.env.NEXT_PUBLIC_SITE_URL}/server-sitemap.xml`,
    ],
  },
  // Add custom transform for additional metadata
  transform: async (config, path) => {
    // Custom priority and changefreq based on path
    let priority = 0.7
    let changefreq = 'monthly'

    if (path === '/') {
      priority = 1.0
      changefreq = 'daily'
    } else if (path.startsWith('/services') || path.startsWith('/projects')) {
      priority = 0.9
      changefreq = 'weekly'
    } else if (path.startsWith('/blog')) {
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
