'use client'
import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'

const projects = [
  {
    title: 'Modgill Travels',
    category: 'Travel & Tourism',
    description: 'Comprehensive taxi rental platform with real-time booking, fleet management, and route planning for seamless travel experiences.',
    image: '/images/modgilltravels.png',
    gradient: 'from-blue-500 to-cyan-600',
    tags: ['Next.js', 'Booking System', 'Responsive Design'],
    link: 'https://modgilltravels.in',
    featured: true
  },
  {
    title: 'Tape India Shop',
    category: 'E-Commerce',
    description: 'Modern e-commerce platform for adhesive tape products with advanced product catalog, secure checkout, and inventory management.',
    image: '/images/tapeindia.png',
    gradient: 'from-orange-500 to-red-600',
    tags: ['Online Store', 'Payment Gateway', 'Product Catalog'],
    link: 'https://tapeindia.shop',
    featured: true
  },
  {
    title: 'Pariksha',
    category: 'Education',
    description: 'Serverless question paper bank providing students with organized access to previous year exam papers with advanced search and filtering.',
    image: '/images/pariksha.png',
    gradient: 'from-purple-500 to-pink-600',
    tags: ['Serverless', 'Education', 'Search Filters'],
    link: 'https://pariksha-serverless.vercel.app',
    featured: true
  },
]

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [itemsPerView, setItemsPerView] = useState(3)

  // Determine items per view based on screen size
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1)
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2)
      } else {
        setItemsPerView(3)
      }
    }
    
    updateItemsPerView()
    window.addEventListener('resize', updateItemsPerView)
    return () => window.removeEventListener('resize', updateItemsPerView)
  }, [])

  const maxIndex = Math.max(0, projects.length - itemsPerView)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }, [maxIndex])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }, [maxIndex])

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || maxIndex === 0) return
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, nextSlide, maxIndex])

  const handleManualNavigation = (direction) => {
    setIsAutoPlaying(false)
    direction === 'next' ? nextSlide() : prevSlide()
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <section id="projects" className="relative pt-10 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary-100 rounded-full blur-3xl opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-20 pointer-events-none" />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-10 lg:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">
            Our Recent Work
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of successful projects across various industries
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative px-0 sm:px-12 lg:px-16">
          {/* Navigation Buttons - Only show if navigation is needed */}
          {maxIndex > 0 && (
            <>
              <button
                onClick={() => handleManualNavigation('prev')}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-white/70 backdrop-blur-sm rounded-full shadow-md flex items-center justify-center text-gray-600 hover:bg-primary-600 hover:text-white transition-all duration-300 hover:scale-110 hover:bg-opacity-100 active:scale-95 opacity-60 hover:opacity-100"
                aria-label="Previous project"
              >
                <FaChevronLeft className="text-lg sm:text-xl" />
              </button>

              <button
                onClick={() => handleManualNavigation('next')}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-white/70 backdrop-blur-sm rounded-full shadow-md flex items-center justify-center text-gray-600 hover:bg-primary-600 hover:text-white transition-all duration-300 hover:scale-110 hover:bg-opacity-100 active:scale-95 opacity-60 hover:opacity-100"
                aria-label="Next project"
              >
                <FaChevronRight className="text-lg sm:text-xl" />
              </button>
            </>
          )}

          {/* Carousel Track */}
          <div className="overflow-hidden rounded-xl">
            <motion.div
              className="flex"
              animate={{ 
                x: itemsPerView === 1 
                  ? `-${currentIndex * 100}%`
                  : itemsPerView === 2
                    ? `-${currentIndex * 50}%`
                    : '0%'
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="px-2 sm:px-3"
                  style={{ 
                    minWidth: itemsPerView === 1 ? '100%' : itemsPerView === 2 ? '50%' : '33.333%'
                  }}
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block cursor-pointer h-full"
                  >
                    <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full flex flex-col hover:-translate-y-1">
                      {/* Project Image - Fixed aspect ratio */}
                      <div className="relative w-full aspect-[16/10] bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden flex-shrink-0">
                        {/* Fallback gradient while image loads */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`} />
                        
                        {/* Image with proper sizing */}
                        <Image
                          src={project.image}
                          alt={`${project.title} - ${project.category}`}
                          fill
                          className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, (max-width: 1536px) 400px, 450px"
                          priority={index === 0}
                        />

                        {/* Simple hover overlay with icon only */}
                        {/* <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                          <FaExternalLinkAlt className="text-white text-2xl sm:text-3xl opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300" />
                        </div> */}

                        {/* Featured Badge */}
                        {project.featured && (
                          <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-full shadow-sm">
                            <span className="text-[10px] sm:text-xs font-bold text-primary-600">Featured</span>
                          </div>
                        )}
                      </div>

                      {/* Project Info - Flex grow to fill remaining space */}
                      <div className="p-4 sm:p-5 lg:p-6 flex flex-col flex-grow">
                        <div className="flex-grow">
                          <span className="inline-block text-[10px] sm:text-xs font-semibold text-primary-600 bg-primary-50 px-2.5 py-1 rounded-full">
                            {project.category}
                          </span>
                          <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mt-2 sm:mt-3 mb-1.5 sm:mb-2 group-hover:text-primary-600 transition-colors flex items-center gap-2">
                            {project.title}
                            <FaExternalLinkAlt className="text-xs opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                          </h3>
                          <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                            {project.description}
                          </p>
                        </div>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-auto">
                          {project.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="text-[10px] sm:text-xs text-gray-600 bg-gray-100 px-2 py-0.5 sm:py-1 rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Progress Indicators - Only show if navigation is needed */}
          {maxIndex > 0 && (
            <div className="flex justify-center items-center gap-2 mt-6 sm:mt-8">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index)
                    setIsAutoPlaying(false)
                    setTimeout(() => setIsAutoPlaying(true), 10000)
                  }}
                  className={`transition-all duration-300 rounded-full ${
                    currentIndex === index
                      ? 'w-2 h-2 bg-primary-600'
                      : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-8 sm:mt-10 lg:mt-12"
        >
          <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
            Like what you see? Let's create something amazing together!
          </p>
          <a 
            href="#contact" 
            className="inline-block btn-secondary px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold rounded-lg border-2 border-gray-300 hover:border-primary-500 transition-all duration-300"
          >
            Start Your Project
          </a>
        </motion.div>
      </div>
    </section>
  )
}
