'use client'

// Dynamic Breadcrumb Component with Schema Markup

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { FaHome, FaChevronRight } from 'react-icons/fa'
import JsonLd from '../../components/JsonLd'

export default function Breadcrumb() {
  const pathname = usePathname()

  // Don't show breadcrumb on homepage
  if (pathname === '/') {
    return null
  }

  // Routes that don't have pages (only children) - make them non-clickable
  const nonClickableRoutes = [
    '/services',
  ]

  // Split pathname into segments and filter empty strings
  const pathSegments = pathname.split('/').filter(segment => segment)

  // Custom labels for routes
  const labelMap = {
    'services': 'Services',
    'custom-website-design': 'Custom Website Design',
    'seo-services': 'SEO Services',
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
        isClickable: !nonClickableRoutes.includes(href),
      }
    }),
  ]

  // Generate JSON-LD Schema for SEO
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': breadcrumbItems
      .filter(item => item.isClickable)
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
      <JsonLd id="breadcrumb-schema" data={breadcrumbSchema} />

      {/*
        ponytail: this bar is IN FLOW. It used to be `absolute top-14 z-30`,
        positioned against <body> (which globals.css makes `position: relative`),
        so it floated over whatever hero the page happened to start with. Every
        hero here is a full-bleed image with its own stacking context, so the
        links ended up unreachable on most pages and the white-on-anything text
        was a contrast lottery. A normal block after the fixed header cannot be
        covered by page content at all, which is the actual fix.

        mt-14/sm:mt-16 clears the fixed header (h-14 mobile, h-16 from sm).
      */}
      <nav
        aria-label="Breadcrumb"
        className="mt-14 sm:mt-16 bg-gray-50 border-b border-gray-200"
      >
        <div className="container-custom py-2.5 sm:py-3">
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm">
            {breadcrumbItems.map((item, index) => (
              <li key={item.href} className="flex items-center gap-2">
                {/* Breadcrumb Link/Text */}
                {isLastItem(index) ? (
                  <span
                    className="flex items-center gap-1.5 font-semibold text-gray-900"
                    aria-current="page"
                  >
                    {item.isHome && <FaHome className="text-sm sm:text-base" aria-hidden="true" />}
                    {item.label}
                  </span>
                ) : item.isClickable ? (
                  <Link
                    href={item.href}
                    className="flex items-center gap-1.5 py-1 text-gray-600 hover:text-blue-600 hover:underline transition-colors duration-200"
                  >
                    {item.isHome && <FaHome className="text-sm sm:text-base" aria-hidden="true" />}
                    {item.label}
                  </Link>
                ) : (
                  <span
                    className="flex items-center gap-1.5 text-gray-500 cursor-default"
                    title="This section only contains sub-pages"
                  >
                    {item.isHome && <FaHome className="text-sm sm:text-base" aria-hidden="true" />}
                    {item.label}
                  </span>
                )}

                {/* Separator */}
                {!isLastItem(index) && (
                  <FaChevronRight
                    className="text-gray-400 text-[10px] sm:text-xs"
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
