'use client'

// Dynamic Breadcrumb Component with Schema Markup
// EaseBuilds - Best Web Developer in Patiala Punjab India

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { FaHome, FaChevronRight } from 'react-icons/fa'

export default function Breadcrumb() {
  const pathname = usePathname()

  // Don't show breadcrumb on homepage
  if (pathname === '/') {
    return null
  }

  // Routes that don't have pages (only children) - make them non-clickable
  const nonClickableRoutes = [
    '/services',
    '/industries',
  ]

  // Split pathname into segments and filter empty strings
  const pathSegments = pathname.split('/').filter(segment => segment)

  // Custom labels for routes
  const labelMap = {
    'services': 'Services',
    'industries': 'Industries',
    'custom-website-design': 'Custom Website Design',
    'ecommerce-development': 'E-commerce Development',
    'seo-services': 'SEO Services',
    'website-maintenance': 'Website Maintenance',
    'pricing': 'Pricing',
    'about': 'About Us',
    'contact': 'Contact',
    'portfolio': 'Portfolio',
    'blog': 'Blog',
  }

  // Function to format segment text
  const formatLabel = (segment) => {
    if (labelMap[segment]) {
      return labelMap[segment]
    }
    return segment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  }

  // Build breadcrumb items
  const breadcrumbItems = [
    {
      label: 'Home',
      href: '/',
      isHome: true,
      isClickable: true,
    },
    ...pathSegments.map((segment, index) => {
      const href = '/' + pathSegments.slice(0, index + 1).join('/')
      return {
        label: formatLabel(segment),
        href: href,
        isHome: false,
        isClickable: !nonClickableRoutes.includes(href), // Check if route is clickable
      }
    }),
  ]

  // Generate JSON-LD Schema for SEO (only include clickable routes)
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': breadcrumbItems
      .filter(item => item.isClickable) // Only include clickable items in schema
      .map((item, index) => ({
        '@type': 'ListItem',
        'position': index + 1,
        'name': item.label,
        'item': `https://easebuilds.in${item.href}`,
      })),
  }

  const isLastItem = (index) => index === breadcrumbItems.length - 1

  return (
    <>
      {/* JSON-LD Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Breadcrumb Navigation with High Z-Index */}
      <nav 
        aria-label="Breadcrumb" 
        className="top-14 sm:top-20 z-40 bg-gradient-to-r from-gray-50 to-blue-50/30 border-b border-gray-200 shadow-sm"
      >
        <div className="container-custom py-2 sm:py-3">
          <ol className="flex flex-wrap items-center gap-2 text-sm">
            {breadcrumbItems.map((item, index) => (
              <li key={item.href} className="flex items-center gap-2">
                {/* Breadcrumb Link/Text */}
                {isLastItem(index) ? (
                  // Current page - not clickable (always)
                  <span 
                    className="flex items-center gap-1.5 text-blue-600 font-semibold"
                    aria-current="page"
                  >
                    {item.isHome && <FaHome className="text-base" aria-hidden="true" />}
                    {item.label}
                  </span>
                ) : item.isClickable ? (
                  // Previous pages with actual pages - clickable
                  <Link
                    href={item.href}
                    className="flex items-center gap-1.5 text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    {item.isHome && <FaHome className="text-base" aria-hidden="true" />}
                    {item.label}
                  </Link>
                ) : (
                  // Parent routes without pages - not clickable (styled as text)
                  <span 
                    className="flex items-center gap-1.5 text-gray-500 cursor-default"
                    title="This section only contains sub-pages"
                  >
                    {item.isHome && <FaHome className="text-base" aria-hidden="true" />}
                    {item.label}
                  </span>
                )}

                {/* Separator */}
                {!isLastItem(index) && (
                  <FaChevronRight 
                    className="text-gray-400 text-xs" 
                    aria-hidden="true" 
                  />
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  )
}
