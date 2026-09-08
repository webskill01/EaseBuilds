'use client'

// Real client work - every card links to a live site.
//
// Replaced the old "Verified Google Reviews" carousel on 2026-09-08 (Task 3.7).
// That carousel carried 10 testimonials, 7 of them for businesses with no
// project anywhere in portfolioData, dressed in Google branding they had never
// come from. Proof here is now the live sites themselves: checkable, and it
// cannot drift, because it reads from portfolioData rather than a parallel file.
//
// The 5.0 from 7 reviews below IS real (GBP, verified) - keep it accurate or
// drop it, never round it up.

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { FaStar, FaArrowRight, FaExternalLinkAlt } from 'react-icons/fa'
import ScrollReveal from '../animations/ScrollReveal'
import { portfolioProjects } from '@/lib/portfolioData'
import Image from 'next/image'
import Link from 'next/link'

const GBP_REVIEW_URL = 'https://g.page/r/CRr3smEiFLXbEBM/review'

export default function ClientReviews() {
  const scrollContainerRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false)
  const startXRef = useRef(0)
  const scrollLeftRef = useRef(0)
  const movedRef = useRef(0)

  const projects = portfolioProjects

  // ponytail: preventDefault on mousedown is the whole bugfix - without it the
  // browser starts a native text/image selection and the drag highlights the
  // cards instead of scrolling them.
  const handleMouseDown = (e) => {
    e.preventDefault()
    setIsDragging(true)
    movedRef.current = 0
    startXRef.current = e.pageX - scrollContainerRef.current.offsetLeft
    scrollLeftRef.current = scrollContainerRef.current.scrollLeft
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX - scrollContainerRef.current.offsetLeft
    const walk = (x - startXRef.current) * 1.5
    movedRef.current = Math.abs(walk)
    scrollContainerRef.current.scrollLeft = scrollLeftRef.current - walk
  }

  const stopDragging = () => setIsDragging(false)

  // A drag that happens to end on a card must not open that card's link.
  const handleCardClick = (e) => {
    if (movedRef.current > 5) {
      e.preventDefault()
      e.stopPropagation()
    }
  }

  return (
    <section className="py-6 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="w-full max-w-[100vw]">

        <div className="container-custom">
          <ScrollReveal direction="up" className="text-center mb-8 sm:mb-12 lg:mb-16">
            <motion.a
              href={GBP_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-2xl shadow-lg border border-gray-200 mb-6"
            >
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
                from 7 Google reviews
              </span>
            </motion.a>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Real{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                Client
              </span>{' '}
              Work
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Every site below is live. Click through and see it for yourself.
            </p>
          </ScrollReveal>
        </div>

        <div className="relative">
          <div className="flex items-center justify-center gap-2 mb-4 text-sm text-gray-500 md:hidden px-4">
            <svg className="w-5 h-5 animate-bounce-horizontal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
            <span>Swipe to see more work</span>
          </div>

          <div className="overflow-hidden">
            <div
              ref={scrollContainerRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={stopDragging}
              onMouseLeave={stopDragging}
              className={`flex gap-6 overflow-x-auto hide-scrollbar pb-4 select-none ${
                isDragging ? 'cursor-grabbing' : 'cursor-grab'
              } px-4 sm:px-6 lg:px-8`}
              style={{
                scrollSnapType: 'x mandatory',
                WebkitOverflowScrolling: 'touch',
                scrollBehavior: isDragging ? 'auto' : 'smooth',
              }}
            >
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="flex-shrink-0 w-[85vw] sm:w-[400px] lg:w-[450px]"
                  style={{ scrollSnapAlign: 'center' }}
                >
                  <div className="h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100 flex flex-col overflow-hidden">

                    <div className="relative aspect-[16/10] bg-gray-100">
                      <Image
                        src={project.image}
                        alt={`${project.client} website built by EaseBuilds`}
                        fill
                        draggable={false}
                        sizes="(max-width: 640px) 85vw, 450px"
                        className="object-cover object-top pointer-events-none"
                      />
                    </div>

                    <div className="p-6 sm:p-7 flex flex-col flex-grow">
                      <span className="inline-flex self-start items-center px-3 py-1 mb-3 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold">
                        {project.industry}
                      </span>

                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
                        {project.client}
                      </h3>
                      <p className="text-sm text-gray-500 mb-3">{project.location}</p>

                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-5 flex-grow">
                        {project.description}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={handleCardClick}
                          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                        >
                          Visit the live site
                          <FaExternalLinkAlt className="text-xs" />
                        </a>
                        <Link
                          href="/portfolio"
                          onClick={handleCardClick}
                          className="text-sm text-gray-500 hover:text-gray-800 transition-colors"
                        >
                          Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block pointer-events-none">
            <div className="absolute left-0 top-0 bottom-4 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-4 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10" />
          </div>
        </div>

        <div className="container-custom">
          <ScrollReveal direction="up" delay={0.3}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mt-10 max-w-4xl mx-auto">
              {[
                { value: '5.0', label: 'Google rating', icon: '⭐' },
                { value: String(projects.length), label: 'Live projects', icon: '🌐' },
                { value: '3', label: 'Cities delivered', icon: '📍' },
                { value: '2-4 Weeks', label: 'Typical delivery', icon: '⚡' },
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

          <ScrollReveal direction="up" delay={0.2}>
            <div className="text-center mt-8 flex flex-col sm:flex-row gap-3 justify-center items-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-3 px-5 py-3 bg-white border-2 border-gray-300 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group"
                >
                  <span className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    See all our work
                  </span>
                  <FaArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>

              <motion.a
                href={GBP_REVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-5 py-3 bg-white border-2 border-gray-300 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <svg viewBox="0 0 48 48" className="w-6 h-6">
                  <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                  <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                  <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                  <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                </svg>
                <span className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  Write a Google review
                </span>
              </motion.a>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce-horizontal {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(10px); }
        }
        .animate-bounce-horizontal { animation: bounce-horizontal 2s infinite; }
      `}</style>
    </section>
  )
}
