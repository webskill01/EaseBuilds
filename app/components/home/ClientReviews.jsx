'use client'

// Optimized Google-Style Reviews Component - No Autoplay, No Duplicates
// EaseBuilds - Best Web Developer in Patiala Punjab India

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { FaStar } from 'react-icons/fa'
import ScrollReveal from '../animations/ScrollReveal'
import clientReviews from '@/lib/testimonialsData'
import Image from 'next/image'

export default function ClientReviews() {
  const scrollContainerRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  // Filter featured reviews (NO duplicates)
  const featuredReviews = clientReviews.filter(r => r.featured)
  const reviews = featuredReviews.length > 0 ? featuredReviews : clientReviews.slice(0, 8)

  // Mouse drag handlers for desktop
  const handleMouseDown = (e) => {
    setIsDragging(true)
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft)
    setScrollLeft(scrollContainerRef.current.scrollLeft)
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX - scrollContainerRef.current.offsetLeft
    const walk = (x - startX) * 2
    scrollContainerRef.current.scrollLeft = scrollLeft - walk
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseLeave = () => {
    setIsDragging(false)
  }

  return (
    <section className="py-6 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="w-full max-w-[100vw]">
        
        {/* Section Header with Google Branding */}
        <div className="container-custom">
          <ScrollReveal direction="up" className="text-center mb-8 sm:mb-12 lg:mb-16">
            {/* Google Rating Badge */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-2xl shadow-lg border border-gray-200 mb-6"
            >
              {/* Google Icon */}
              <div className="relative w-8 h-8">
                <svg viewBox="0 0 48 48" className="w-full h-full">
                  <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                  <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                  <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                  <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                </svg>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-lg" />
                  ))}
                </div>
                <span className="text-xl font-bold text-gray-900">5.0</span>
              </div>
              
              <span className="text-sm text-gray-600 font-medium">
                50+ Google Reviews
              </span>
            </motion.div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              What Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                Clients
              </span>{' '}
              Say
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Real reviews from real businesses in{' '}
              <span className="font-semibold text-blue-600">
                Patiala
              </span>
            </p>
          </ScrollReveal>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="relative">
          {/* Scroll Instruction - Mobile */}
          <div className="flex items-center justify-center gap-2 mb-4 text-sm text-gray-500 md:hidden px-4">
            <svg className="w-5 h-5 animate-bounce-horizontal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
            <span>Swipe to see more reviews</span>
          </div>

          {/* Reviews Scroll Container */}
          <div className="overflow-hidden">
            <div
              ref={scrollContainerRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
              className={`flex gap-6 overflow-x-auto hide-scrollbar pb-4 ${
                isDragging ? 'cursor-grabbing' : 'cursor-grab'
              } px-4 sm:px-6 lg:px-8`}
              style={{
                scrollSnapType: 'x mandatory',
                WebkitOverflowScrolling: 'touch',
                scrollBehavior: isDragging ? 'auto' : 'smooth'
              }}
            >
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="review-card flex-shrink-0 w-[85vw] sm:w-[400px] lg:w-[450px]"
                  style={{ scrollSnapAlign: 'center' }}
                >
                  {/* Google-Style Review Card */}
                  <div className="h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 sm:p-8 border border-gray-100 flex flex-col">
                    
                    {/* Header with Profile */}
                    <div className="flex items-start gap-4 mb-4">
                      {/* Profile Picture */}
                      <div className="relative flex-shrink-0">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden ring-4 ring-blue-100 shadow-md">
                          {review.avatar ? (
                            <Image
                              src={review.avatar}
                              alt={review.name}
                              width={64}
                              height={64}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-xl font-bold">
                              {review.name.charAt(0)}
                            </div>
                          )}
                        </div>
                        
                        {/* Google Badge */}
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md">
                          <svg viewBox="0 0 48 48" className="w-4 h-4">
                            <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                            <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                            <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                            <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.30-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                          </svg>
                        </div>
                      </div>

                      {/* Name and Info */}
                      <div className="flex-1 min-w-0">
                        <h4 className="text-base sm:text-lg font-bold text-gray-900 truncate">
                          {review.name}
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-600 truncate">
                          {review.role}
                        </p>
                        <p className="text-xs sm:text-sm font-semibold text-blue-600 truncate">
                          {review.business}
                        </p>
                      </div>

                      {/* Google Icon */}
                      <div className="flex-shrink-0">
                        <svg viewBox="0 0 48 48" className="w-6 h-6">
                          <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                          <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                          <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                          <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.30-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                        </svg>
                      </div>
                    </div>

                    {/* Rating Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400 text-base" />
                      ))}
                    </div>

                    {/* Review Text */}
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 flex-grow line-clamp-6">
                      {review.review}
                    </p>

                    {/* Date & Location */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 text-xs text-gray-500">
                      <span>{new Date(review.date).toLocaleDateString('en-IN', { month: 'short', year: 'numeric' })}</span>
                      <span className="flex items-center gap-1">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        {review.location}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Gradient Fade Edges - Desktop Only */}
          <div className="hidden lg:block pointer-events-none">
            <div className="absolute left-0 top-0 bottom-4 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-4 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10" />
          </div>
        </div>

        {/* Stats Grid */}
        <div className="container-custom">
          <ScrollReveal direction="up" delay={0.3}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mt-10 max-w-4xl mx-auto">
              {[
                { value: '50+', label: 'Google Reviews', icon: '⭐' },
                { value: '100%', label: 'Verified', icon: '✓' },
                { value: '5.0', label: 'Average Rating', icon: '🏆' },
                { value: '2-4 Weeks', label: 'Delivery Time', icon: '⚡' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="relative group" 
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="relative h-full flex justify-center items-center flex-col text-center p-4 sm:p-6 bg-white rounded-xl sm:rounded-2xl shadow-lg border-2 border-gray-100 hover:border-blue-200 transition-all duration-300">
                    <div className="text-3xl sm:text-4xl mb-2">{stat.icon}</div>
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 mb-1 sm:mb-2">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm lg:text-base text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>

          {/* Google CTA */}
          <ScrollReveal direction="up" delay={0.2}>
            <div className="text-center mt-8">
              <motion.a
                href="https://g.page/r/YOUR_GOOGLE_BUSINESS_PROFILE_LINK/review"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-5 py-3 bg-white border-2 border-gray-300 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg viewBox="0 0 48 48" className="w-6 h-6">
                  <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                  <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                  <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                  <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.30-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                </svg>
                <span className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  Write a Google Review
                </span>
                <svg className="w-5 h-5 text-gray-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.a>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        @keyframes bounce-horizontal {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(10px);
          }
        }

        .animate-bounce-horizontal {
          animation: bounce-horizontal 2s infinite;
        }

        .line-clamp-6 {
          display: -webkit-box;
          -webkit-line-clamp: 6;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  )
}
