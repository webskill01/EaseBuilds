'use client'
import { motion, useMotionValue, useAnimation } from 'framer-motion'
import { FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { useState, useEffect, useCallback, useRef } from 'react'
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
  const [isDragging, setIsDragging] = useState(false)
  const dragStartX = useRef(0)
  const controls = useAnimation()

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

  // Calculate transform percentage
  const getTransformPercentage = () => {
    return -(currentIndex * (100 / itemsPerView))
  }

  // Improved drag handlers
  const handleDragStart = () => {
    setIsDragging(true)
    dragStartX.current = 0
  }

  const handleDrag = (event, info) => {
    dragStartX.current = info.offset.x
  }

  const handleDragEnd = (event, info) => {
    const dragThreshold = 50
    const velocityThreshold = 300
    const offset = info.offset.x
    const velocity = info.velocity.x

    // Determine if drag was significant enough to change slides
    const shouldNavigate = 
      Math.abs(velocity) > velocityThreshold || Math.abs(offset) > dragThreshold

    if (shouldNavigate) {
      if (offset > 0 && currentIndex > 0) {
        // Dragged right - go to previous
        setCurrentIndex(prev => prev - 1)
        setIsAutoPlaying(false)
        setTimeout(() => setIsAutoPlaying(true), 10000)
      } else if (offset < 0 && currentIndex < maxIndex) {
        // Dragged left - go to next
        setCurrentIndex(prev => prev + 1)
        setIsAutoPlaying(false)
        setTimeout(() => setIsAutoPlaying(true), 10000)
      }
    }

    // Delay resetting isDragging to prevent accidental clicks
    setTimeout(() => setIsDragging(false), 150)
  }

  // Animate to current position
  useEffect(() => {
    controls.start({
      x: `${getTransformPercentage()}%`,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30
      }
    })
  }, [currentIndex, itemsPerView, controls])

  return (
    <section id="projects" className="relative pb-2 pt-6 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
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
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-3"
          >
            <span className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold">
              Portfolio
            </span>
          </motion.div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">
            Our Recent Work
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto mb-2">
            Explore our portfolio of successful projects across various industries
          </p>
          {/* Mobile hint text */}
          <p className="text-xs text-gray-500 lg:hidden flex items-center justify-center gap-1.5">
            <span>👆</span>
            <span className="font-medium">Swipe or click cards to visit</span>
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative px-0 sm:px-12 lg:px-16">
          {/* Navigation Buttons */}
          {maxIndex > 0 && (
            <>
              <button
                onClick={() => handleManualNavigation('prev')}
                disabled={currentIndex === 0}
                className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-white/50 backdrop-blur-sm rounded-full shadow-md flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 ${
                  currentIndex === 0 
                    ? 'opacity-20 cursor-not-allowed' 
                    : 'text-gray-600 hover:bg-primary-600 hover:text-white opacity-30 hover:opacity-100'
                }`}
                aria-label="Previous project"
              >
                <FaChevronLeft className="text-lg sm:text-xl" />
              </button>

              <button
                onClick={() => handleManualNavigation('next')}
                disabled={currentIndex === maxIndex}
                className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-white/50 backdrop-blur-sm rounded-full shadow-md flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 ${
                  currentIndex === maxIndex 
                    ? 'opacity-20 cursor-not-allowed' 
                    : 'text-gray-600 hover:bg-primary-600 hover:text-white opacity-30 hover:opacity-100'
                }`}
                aria-label="Next project"
              >
                <FaChevronRight className="text-lg sm:text-xl" />
              </button>
            </>
          )}

          {/* Carousel Track with Improved Drag */}
          <div className="overflow-hidden rounded-xl touch-pan-y">
            <motion.div
              className="flex"
              drag={maxIndex > 0 ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.1}
              dragMomentum={false}
              onDragStart={handleDragStart}
              onDrag={handleDrag}
              onDragEnd={handleDragEnd}
              animate={controls}
              style={{
                cursor: isDragging ? 'grabbing' : maxIndex > 0 ? 'grab' : 'default',
                touchAction: 'pan-y'
              }}
            >
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="px-2 sm:px-3"
                  style={{ 
                    minWidth: `${100 / itemsPerView}%`,
                    maxWidth: `${100 / itemsPerView}%`
                  }}
                >
                  <div
                    onClick={(e) => {
                      // Prevent navigation if dragging or if it was a drag gesture
                      if (isDragging || Math.abs(dragStartX.current) > 10) {
                        e.preventDefault()
                        return
                      }
                      // Otherwise open link
                      if (project.link) {
                        window.open(project.link, '_blank', 'noopener,noreferrer')
                      }
                    }}
                    className="group cursor-pointer h-full"
                    style={{ userSelect: 'none' }}
                  >
                    <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full flex flex-col hover:-translate-y-1">
                      {/* Project Image */}
                      <div className="relative w-full aspect-[16/10] bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden flex-shrink-0">
                        {/* Fallback gradient */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`} />
                        
                        {/* Image */}
                        <Image
                          src={project.image}
                          alt={`${project.title} - ${project.category}`}
                          fill
                          className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          priority={index === 0}
                          draggable={false}
                        />

                        {/* Hover overlay with external link icon */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center gap-2">
                            <FaExternalLinkAlt className="text-white text-2xl sm:text-3xl" />
                            <span className="text-white text-xs sm:text-sm font-semibold bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm">
                              Click to Visit
                            </span>
                          </div>
                        </div>

                        {/* Featured Badge */}
                        {project.featured && (
                          <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-full shadow-sm">
                            <span className="text-[10px] sm:text-xs font-bold text-primary-600">Featured</span>
                          </div>
                        )}
                      </div>

                      {/* Project Info */}
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
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Progress Indicators */}
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
            className="inline-block btn-secondary px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold rounded-lg border-2 border-gray-300 hover:border-primary-500 hover:bg-primary-50 transition-all duration-300"
          >
            Start Your Project
          </a>
        </motion.div>
      </div>
    </section>
  )
}
