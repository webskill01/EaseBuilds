'use client'

// Dynamic Blog Post Page - Beautiful, Animated, SEO Optimized

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { 
  FaClock, FaCalendar, FaTag, FaArrowLeft, FaArrowRight,
  FaFacebookF, FaTwitter, FaLinkedinIn, FaWhatsapp,
  FaBookOpen, FaShare
} from 'react-icons/fa'
import { useParams } from 'next/navigation'
import { notFound } from 'next/navigation'
import Header from '@/app/components/layout/Header'
import Footer from '@/app/components/layout/Footer'
import { getPostBySlug, getRelatedPosts } from '@/lib/blogData'

export default function BlogPostPage() {
  const params = useParams()
  const slug = params.slug
  
  const post = getPostBySlug(slug)
  
  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(post.id, 3)
  const contentRef = useRef(null)
  const shareMenuRef = useRef(null) // Reference for share menu
  const [activeSection, setActiveSection] = useState('')
  const [showShareMenu, setShowShareMenu] = useState(false)

  const { scrollYProgress } = useScroll()
  const progressWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  // Track active section for table of contents
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 }
    )

    const sections = document.querySelectorAll('section[id]')
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  // Close share menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (shareMenuRef.current && !shareMenuRef.current.contains(event.target)) {
        setShowShareMenu(false)
      }
    }

    function handleEscapeKey(event) {
      if (event.key === 'Escape') {
        setShowShareMenu(false)
      }
    }

    if (showShareMenu) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('touchstart', handleClickOutside)
      document.addEventListener('keydown', handleEscapeKey)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
      document.removeEventListener('keydown', handleEscapeKey)
    }
  }, [showShareMenu])

  // Share functions
  const shareUrl = `https://easebuilds.in/blog/${slug}`
  const shareTitle = post.title

  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank')
    setShowShareMenu(false)
  }

  const shareOnTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`, '_blank')
    setShowShareMenu(false)
  }

  const shareOnLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, '_blank')
    setShowShareMenu(false)
  }

  const shareOnWhatsApp = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(shareTitle + ' ' + shareUrl)}`, '_blank')
    setShowShareMenu(false)
  }

  return (
    <>
      <Header />

      {/* Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Hero Section */}
      <article className="bg-white">
        <div className="container mx-auto px-4 py-12 sm:py-16">
          <div className="max-w-4xl mx-auto">

            {/* Breadcrumb */}
            <div className="bg-gray-50 py-4 border-b my-2 -mx-4 px-4">
              <div className="flex items-center gap-2 text-sm">
                <Link href="/" className="text-gray-600 hover:text-blue-600 transition">
                  Home
                </Link>
                <span className="text-gray-400">/</span>
                <Link href="/blog" className="text-gray-600 hover:text-blue-600 transition">
                  Blog
                </Link>
                <span className="text-gray-400">/</span>
                <span className="text-gray-900 font-semibold truncate">{post.title}</span>
              </div>
            </div>

            {/* Category Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 mt-6"
            >
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-bold">
                {post.category}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
            >
              {post.title}
            </motion.h1>

            {/* Meta Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b"
            >
              <div className="flex items-center gap-3">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <div className="font-semibold text-gray-900">{post.author.name}</div>
                  <div className="text-sm text-gray-600">{post.author.role}</div>
                </div>
              </div>

              <div className="flex items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <FaCalendar />
                  <span>
                    {new Date(post.publishedDate).toLocaleDateString('en-IN', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric'
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <FaClock />
                  <span>{post.readingTime} min read</span>
                </div>
              </div>

              {/* Share Button with Click Outside Detection */}
              <div className="ml-auto relative" ref={shareMenuRef}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowShareMenu(!showShareMenu)}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  <FaShare />
                  Share
                </motion.button>

                {/* Share Menu with Animation */}
                <AnimatePresence>
                  {showShareMenu && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 bg-white rounded-lg shadow-2xl border border-gray-200 p-2 z-50 min-w-[160px]"
                    >
                      <button
                        onClick={shareOnFacebook}
                        className="flex items-center gap-3 w-full px-4 py-2.5 text-left text-gray-700 hover:bg-blue-50 rounded-lg transition"
                      >
                        <FaFacebookF className="text-blue-600 text-lg" />
                        <span className="font-medium">Facebook</span>
                      </button>
                      <button
                        onClick={shareOnTwitter}
                        className="flex items-center gap-3 w-full px-4 py-2.5 text-left text-gray-700 hover:bg-blue-50 rounded-lg transition"
                      >
                        <FaTwitter className="text-sky-500 text-lg" />
                        <span className="font-medium">Twitter</span>
                      </button>
                      <button
                        onClick={shareOnLinkedIn}
                        className="flex items-center gap-3 w-full px-4 py-2.5 text-left text-gray-700 hover:bg-blue-50 rounded-lg transition"
                      >
                        <FaLinkedinIn className="text-blue-700 text-lg" />
                        <span className="font-medium">LinkedIn</span>
                      </button>
                      <button
                        onClick={shareOnWhatsApp}
                        className="flex items-center gap-3 w-full px-4 py-2.5 text-left text-gray-700 hover:bg-green-50 rounded-lg transition"
                      >
                        <FaWhatsapp className="text-green-500 text-lg" />
                        <span className="font-medium">WhatsApp</span>
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Featured Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="relative h-96 rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src={post.featuredImage}
                alt={post.imageAlt}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
            </motion.div>
          </div>
        </div>

        {/* Main Content with Sidebar */}
        <div className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_300px] gap-12">
              {/* Article Content */}
              <div>
                {/* Table of Contents (Mobile) */}
                <div className="lg:hidden bg-white rounded-2xl shadow-lg p-6 mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <FaBookOpen className="text-blue-600" />
                    <h3 className="font-bold text-gray-900">Table of Contents</h3>
                  </div>
                  <nav className="space-y-2">
                    {post.tableOfContents.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="block text-gray-700 hover:text-blue-600 transition text-sm"
                      >
                        {item.title}
                      </a>
                    ))}
                  </nav>
                </div>

                {/* Blog Content */}
                <div
                  ref={contentRef}
                  className="bg-white rounded-2xl shadow-lg p-8 md:p-12 prose prose-lg max-w-none
                    prose-headings:font-bold prose-headings:text-gray-900
                    prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                    prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                    prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
                    prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
                    prose-strong:text-gray-900 prose-strong:font-bold
                    prose-ul:my-6 prose-ol:my-6
                    prose-li:text-gray-700 prose-li:my-2
                    prose-img:rounded-xl prose-img:shadow-lg
                    prose-table:border-collapse prose-table:w-full
                    prose-th:bg-gray-100 prose-th:p-3 prose-th:text-left prose-th:font-bold
                    prose-td:p-3 prose-td:border prose-td:border-gray-200"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Tags */}
                <div className="bg-white rounded-2xl shadow-lg p-8 mt-8">
                  <h3 className="font-bold text-gray-900 mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-semibold hover:bg-gray-200 transition cursor-pointer"
                      >
                        <FaTag />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Author Bio */}
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl shadow-lg p-8 mt-8 border-2 border-blue-200">
                  <div className="flex items-start gap-6">
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      width={80}
                      height={80}
                      className="rounded-full"
                    />
                    <div>
                      <div className="font-bold text-xl text-gray-900 mb-1">
                        Written by {post.author.name}
                      </div>
                      <div className="text-blue-600 font-semibold mb-3">
                        {post.author.role}
                      </div>
                      <p className="text-gray-700">{post.author.bio}</p>
                    </div>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex justify-between items-center mt-12">
                  <Link href="/blog">
                    <motion.button
                      whileHover={{ x: -5 }}
                      className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-300 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition"
                    >
                      <FaArrowLeft />
                      Back to Blog
                    </motion.button>
                  </Link>
                </div>
              </div>

              {/* Sidebar - Desktop Only */}
              <aside className="hidden lg:block">
                <div className="sticky top-24 space-y-6">
                  {/* Table of Contents */}
                  <div className="bg-white rounded-2xl shadow-lg p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <FaBookOpen className="text-blue-600" />
                      <h3 className="font-bold text-gray-900">Table of Contents</h3>
                    </div>
                    <nav className="space-y-2">
                      {post.tableOfContents.map((item) => (
                        <a
                          key={item.id}
                          href={`#${item.id}`}
                          className={`block py-2 px-3 rounded-lg text-sm transition ${
                            activeSection === item.id
                              ? 'bg-blue-100 text-blue-700 font-semibold'
                              : 'text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          {item.title}
                        </a>
                      ))}
                    </nav>
                  </div>

                  {/* CTA Card */}
                  <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl shadow-lg p-6 text-white">
                    <h3 className="font-bold text-xl mb-3">Need Web Development?</h3>
                    <p className="text-white/90 text-sm mb-4">
                      Get a professional website for your Patiala business starting at ₹2,999.
                    </p>
                    <a
                      href="tel:+916283380110"
                      className="block text-center px-6 py-3 bg-white text-blue-600 rounded-lg font-bold hover:bg-gray-100 transition"
                    >
                      Call Now
                    </a>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="bg-white py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                  Related Articles
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {relatedPosts.map((relatedPost, index) => (
                    <motion.div
                      key={relatedPost.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link href={`/blog/${relatedPost.slug}`}>
                        <motion.article
                          whileHover={{ y: -8 }}
                          className="bg-white rounded-2xl shadow-lg overflow-hidden h-full border-2 border-gray-100 hover:border-blue-600 transition"
                        >
                          <div className="relative h-48">
                            <Image
                              src={relatedPost.featuredImage}
                              alt={relatedPost.imageAlt}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, 33vw"
                            />
                          </div>
                          <div className="p-6">
                            <span className="text-xs font-semibold text-blue-600 mb-2 block">
                              {relatedPost.category}
                            </span>
                            <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 transition">
                              {relatedPost.title}
                            </h3>
                            <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                              {relatedPost.excerpt}
                            </p>
                            <div className="flex items-center justify-between text-xs text-gray-600">
                              <span>{relatedPost.readingTime} min read</span>
                              <motion.span
                                whileHover={{ x: 5 }}
                                className="text-blue-600 font-semibold flex items-center gap-1"
                              >
                                Read <FaArrowRight />
                              </motion.span>
                            </div>
                          </div>
                        </motion.article>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </article>

      <Footer />
    </>
  )
}
