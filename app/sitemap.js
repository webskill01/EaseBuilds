// app/sitemap.js
import { blogPosts } from '@/lib/blogData'

export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://easebuilds.in'
  const currentDate = new Date().toISOString()
  
  // Dates for different content types (more realistic)
  const yesterday = new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString()
  const oneWeekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString()
  const twoWeeksAgo = new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString()
  const oneMonthAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString()

  // Service slugs (from your dynamic routes)
  const services = [
    'custom-website-design',
    'ecommerce-development',
    'seo-services',
    'website-maintenance'
  ]

  // Industry slugs (from your industry pages)
  const industries = [
    'dental-clinics',
    'architects',
    'coaching-institutes',
    'retail-stores',
    'manufacturers'
  ]

  // Extract blog slugs dynamically from blogData
  const blogSlugs = blogPosts.map(post => post.slug)

  return [
    // ===== TIER 1: HOMEPAGE (Highest Priority) =====
    {
      url: baseUrl,
      lastModified: yesterday, // Updated more frequently
      changeFrequency: 'daily',
      priority: 1.0,
    },

    // ===== TIER 2: PRIMARY LANDING PAGES (Critical for SEO) =====
    {
      url: `${baseUrl}/website-development-patiala`,
      lastModified: oneWeekAgo,
      changeFrequency: 'weekly',
      priority: 0.95, // Slightly adjusted
    },
    {
      url: `${baseUrl}/web-developer-near-me-patiala`,
      lastModified: oneWeekAgo,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: oneWeekAgo,
      changeFrequency: 'weekly',
      priority: 0.94,
    },

    // ===== TIER 3: MAIN PAGES (Important) =====
    {
      url: `${baseUrl}/about`,
      lastModified: oneMonthAgo,
      changeFrequency: 'monthly',
      priority: 0.88,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: twoWeeksAgo,
      changeFrequency: 'weekly',
      priority: 0.90,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: oneMonthAgo, // Contact doesn't change daily
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: twoWeeksAgo, // Updated when new blog added
      changeFrequency: 'weekly',
      priority: 0.87,
    },

    // ===== TIER 4: SERVICE PAGES (Dynamic) =====
    ...services.map((service) => ({
      url: `${baseUrl}/services/${service}`,
      lastModified: oneWeekAgo,
      changeFrequency: 'weekly',
      priority: 0.88,
    })),

    // ===== TIER 5: INDUSTRY PAGES (Niche Targeting) =====
    ...industries.map((industry) => ({
      url: `${baseUrl}/industries/${industry}`,
      lastModified: twoWeeksAgo,
      changeFrequency: 'monthly',
      priority: 0.83,
    })),

    // ===== TIER 6: BLOG POSTS (Dynamic - Auto-generated from blogData) =====
    ...blogSlugs.map((slug) => ({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: oneMonthAgo,
      changeFrequency: 'monthly',
      priority: 0.75, // Slightly lower for individual posts
    })),

    // ===== TIER 7: LEGAL PAGES (Required) =====
    {
      url: `${baseUrl}/privacy`,
      lastModified: oneMonthAgo,
      changeFrequency: 'yearly',
      priority: 0.30, // Lower priority
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: oneMonthAgo,
      changeFrequency: 'yearly',
      priority: 0.30,
    },
  ]
}
