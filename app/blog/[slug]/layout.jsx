// Dynamic Blog Post Layout - SEO Optimized per Article
// Generates unique metadata for each blog post

import Script from 'next/script'
import { getPostBySlug, getAllPosts } from '@/lib/blogData'
import { notFound } from 'next/navigation'

// Generate static params for all blog posts (for static generation)
export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

// Generate dynamic metadata per blog post
export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  
  if (!post) {
    return {
      title: 'Article Not Found',
      description: 'The requested blog article could not be found.'
    }
  }

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords,
    
    authors: [{ name: post.author.name }],
    
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: 'article',
      publishedTime: post.publishedDate,
      modifiedTime: post.updatedDate,
      authors: [post.author.name],
      locale: 'en_IN',
      url: `https://easebuilds.in/blog/${slug}`,
      siteName: 'EaseBuilds',
      images: [
        {
          url: `https://easebuilds.in${post.featuredImage}`,
          width: 1200,
          height: 630,
          alt: post.imageAlt,
        },
      ],
      tags: post.tags,
    },
    
    twitter: {
      card: 'summary_large_image',
      title: post.metaTitle,
      description: post.metaDescription,
      images: [`https://easebuilds.in${post.featuredImage}`],
    },
    
    alternates: {
      canonical: `https://easebuilds.in/blog/${slug}`,
    },
    
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
  }
}

export default async function BlogPostLayout({ children, params }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  
  if (!post) {
    notFound()
  }

  // Article Schema
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: `https://easebuilds.in${post.featuredImage}`,
    datePublished: post.publishedDate,
    dateModified: post.updatedDate,
    author: {
      '@type': 'Person',
      name: post.author.name,
      jobTitle: post.author.role,
      description: post.author.bio,
    },
    publisher: {
      '@type': 'Organization',
      name: 'EaseBuilds',
      logo: {
        '@type': 'ImageObject',
        url: 'https://easebuilds.in/images/logo.png'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://easebuilds.in/blog/${slug}`
    },
    articleSection: post.category,
    keywords: post.tags.join(', '),
    wordCount: post.content.split(' ').length,
    inLanguage: 'en-IN',
  }

  // Breadcrumb Schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://easebuilds.in'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: 'https://easebuilds.in/blog'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `https://easebuilds.in/blog/${slug}`
      }
    ]
  }

  // FAQ Schema (if post has FAQs)
  const faqSchema = post.faqSchema ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faqSchema.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  } : null

  return (
    <>
      {/* Article Schema */}
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        strategy="beforeInteractive"
      />

      {/* Breadcrumb Schema */}
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        strategy="beforeInteractive"
      />

      {/* FAQ Schema (if exists) */}
      {faqSchema && (
        <Script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          strategy="beforeInteractive"
        />
      )}

      {children}
    </>
  )
}
