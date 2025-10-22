'use client'

// Blog Listing Page - Fixed Hydration, Beautiful, SEO Optimized
// Features: Category filters, search, pagination, BG image hero

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useMemo } from 'react'
import { 
  FaSearch, FaClock, FaCalendar, FaTag, FaArrowRight, 
  FaBookOpen, FaFire, FaLightbulb
} from 'react-icons/fa'
import { getAllPosts, categories } from '@/lib/blogData'
import HeroImage from '../components/HeroImage'

export default function BlogPage() {
  const allPosts = getAllPosts()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 6

  // Filter posts based on search and category
  const filteredPosts = useMemo(() => {
    return allPosts.filter(post => {
      const matchesSearch = 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      
      const matchesCategory = 
        selectedCategory === 'All' || post.category === selectedCategory
      
      return matchesSearch && matchesCategory
    })
  }, [allPosts, searchQuery, selectedCategory])

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)
  const startIndex = (currentPage - 1) * postsPerPage
  const currentPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage)

  // Featured post (first/latest)
  const featuredPost = allPosts[0]

  return (
    <>

      {/* Hero Section with Background Image */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-7">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <HeroImage
          src="/images/blog-hero.jpg" 
          alt="EaseBuilds Blog - Web Development Insights"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-600/40 via-gray-500/30 to-gray-700/40" />
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle, white 2px, transparent 2px)',
                backgroundSize: '50px 50px'
              }} />
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto text-white"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-md rounded-full mb-6 border border-white/30"
            >
              <FaBookOpen className="text-2xl" />
              <span className="font-semibold text-lg">Web Development Blog</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Expert Insights for
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Patiala Businesses
              </span>
            </h1>

            <p className="text-xl mb-8 text-white">
              Learn web development, SEO, e-commerce, and digital marketing. 
              Practical guides to grow your online presence.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20"
              >
                <div className="text-3xl font-bold mb-1">{allPosts.length}</div>
                <div className="text-sm opacity-90">Articles</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20"
              >
                <div className="text-3xl font-bold mb-1">{categories.length}</div>
                <div className="text-sm opacity-90">Categories</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20"
              >
                <div className="text-3xl font-bold mb-1">100%</div>
                <div className="text-sm opacity-90">Free</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <FaFire className="text-orange-500 text-3xl" />
              <h2 className="text-3xl font-bold text-gray-900">Featured Article</h2>
            </motion.div>

            <Link href={`/blog/${featuredPost.slug}`}>
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2 gap-0"
              >
                <div className="relative h-80 md:h-auto">
                  <Image
                    src={featuredPost.featuredImage}
                    alt={featuredPost.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full text-sm font-bold shadow-lg">
                      🔥 Featured
                    </span>
                  </div>
                </div>

                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-semibold">
                      {featuredPost.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <FaClock />
                      <span>{featuredPost.readingTime} min read</span>
                    </div>
                  </div>

                  <h3 className="text-3xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition">
                    {featuredPost.title}
                  </h3>

                  <p className="text-gray-600 mb-6 line-clamp-3">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-3">
                      <Image
                        src={featuredPost.author.avatar}
                        alt={featuredPost.author.name}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <div>
                        <div className="font-semibold text-gray-900">{featuredPost.author.name}</div>
                        <div className="text-sm text-gray-600">{featuredPost.author.role}</div>
                      </div>
                    </div>
                    <div className="ml-auto">
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="inline-flex items-center gap-2 text-blue-600 font-semibold"
                      >
                        Read Article <FaArrowRight />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          </div>
        </section>
      )}

      {/* Search & Filters */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md w-full">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value)
                  setCurrentPage(1)
                }}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 justify-center">
              <button
                onClick={() => {
                  setSelectedCategory('All')
                  setCurrentPage(1)
                }}
                className={`px-4 py-2 rounded-lg font-semibold transition ${
                  selectedCategory === 'All'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All Articles
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category)
                    setCurrentPage(1)
                  }}
                  className={`px-4 py-2 rounded-lg font-semibold transition ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-center text-gray-600">
            Showing <strong>{currentPosts.length}</strong> of <strong>{filteredPosts.length}</strong> articles
            {searchQuery && ` for "${searchQuery}"`}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            {currentPosts.length > 0 ? (
              <motion.div
                key={`${selectedCategory}-${searchQuery}-${currentPage}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {currentPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link href={`/blog/${post.slug}`}>
                      <motion.article
                        whileHover={{ y: -8 }}
                        className="bg-white rounded-2xl shadow-lg overflow-hidden h-full flex flex-col"
                      >
                        {/* Image */}
                        <div className="relative h-52 overflow-hidden">
                          <Image
                            src={post.featuredImage}
                            alt={post.imageAlt}
                            fill
                            className="object-cover transition-transform duration-500 hover:scale-110"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                          <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-blue-700 rounded-full text-xs font-bold">
                              {post.category}
                            </span>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 flex-1 flex flex-col">
                          <div className="flex items-center gap-3 mb-3 text-sm text-gray-600">
                            <div className="flex items-center gap-1">
                              <FaCalendar />
                              <span>{new Date(post.publishedDate).toLocaleDateString('en-IN', { 
                                day: 'numeric',
                                month: 'short', 
                                year: 'numeric' 
                              })}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <FaClock />
                              <span>{post.readingTime} min</span>
                            </div>
                          </div>

                          <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-blue-600 transition">
                            {post.title}
                          </h3>

                          <p className="text-gray-600 mb-4 line-clamp-3 flex-1">
                            {post.excerpt}
                          </p>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {post.tags.slice(0, 3).map((tag, i) => (
                              <span
                                key={i}
                                className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                              >
                                <FaTag className="text-xs" />
                                {tag}
                              </span>
                            ))}
                          </div>

                          {/* Author & CTA */}
                          <div className="flex items-center justify-between pt-4 border-t">
                            <div className="flex items-center gap-2">
                              <Image
                                src={post.author.avatar}
                                alt={post.author.name}
                                width={32}
                                height={32}
                                className="rounded-full"
                              />
                              <span className="text-sm font-semibold text-gray-700">
                                {post.author.name}
                              </span>
                            </div>
                            <motion.div
                              whileHover={{ x: 5 }}
                              className="text-blue-600 font-semibold text-sm flex items-center gap-1"
                            >
                              Read <FaArrowRight />
                            </motion.div>
                          </div>
                        </div>
                      </motion.article>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20"
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">No articles found</h3>
                <p className="text-gray-600 mb-6">Try adjusting your search or filters</p>
                <button
                  onClick={() => {
                    setSearchQuery('')
                    setSelectedCategory('All')
                  }}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  Clear Filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-12 flex-wrap">
              <button
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded-lg border-2 border-gray-300 font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 transition"
              >
                Previous
              </button>

              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-4 py-2 rounded-lg font-semibold transition ${
                    currentPage === i + 1
                      ? 'bg-blue-600 text-white'
                      : 'bg-white border-2 border-gray-300 hover:bg-gray-100'
                  }`}
                >
                  {i + 1}
                </button>
              ))}

              <button
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 rounded-lg border-2 border-gray-300 font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 transition"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
