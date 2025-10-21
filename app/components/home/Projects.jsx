'use client'

// Portfolio Projects Section - SEO Optimized with Advanced Animations
// EaseBuilds - Best Web Developer in Patiala Punjab India - Website Development Portfolio

import { motion, useAnimation } from 'framer-motion'
import { FaExternalLinkAlt, FaChevronLeft, FaChevronRight, FaRocket, FaEye, FaPhone, FaWhatsapp } from 'react-icons/fa'
import { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'
import ScrollReveal from '../animations/ScrollReveal'

const projects = [
  {
    title: 'Modgill Travels - Taxi Booking Platform',
    category: 'Travel & Tourism',
    description: 'Professional taxi rental website for Patiala businesses with real-time booking system, fleet management, and seamless customer experience. Increased online bookings by 60% within first month.',
    image: '/images/modgilltravels.png',
    gradient: 'from-blue-500 to-cyan-600',
    tags: ['Next.js', 'Real-time Booking', 'Mobile App PWA', 'Payment Integration'],
    link: 'https://modgilltravels.in',
    location: 'Patiala Punjab India',
    featured: true,
    metrics: '60% Booking Increase',
    clientType: 'Local Business'
  },
  {
    title: 'Tape India - E-commerce Store',
    category: 'E-Commerce Development',
    description: 'Modern online store for adhesive tape products serving Chennai with advanced product catalog, secure payment gateway (Razorpay, PayPal), automated inventory management, and lightning-fast checkout. Sales tripled in 3 months.',
    image: '/images/tapeindia.png',
    gradient: 'from-orange-500 to-red-600',
    tags: ['E-commerce', 'Payment Integration', 'Inventory System', 'Fast Checkout'],
    link: 'https://tapeindia.shop',
    location: 'Chennai',
    featured: true,
    metrics: '3x Sales Growth',
    clientType: 'Manufacturing'
  },
  {
    title: 'Pariksha - Education Platform',
    category: 'Education Technology',
    description: 'Serverless question paper bank providing students across Punjab India with organized access to 10,000+ previous year exam papers. Features advanced search, filtering by subject/year, bookmark system, and fully responsive mobile design for on-the-go learning.',
    image: '/images/pariksha.png',
    gradient: 'from-purple-500 to-pink-600',
    tags: ['Serverless Architecture', 'Search Engine', 'Cloud Hosting', 'Mobile Learning'],
    link: 'https://pariksha-serverless.vercel.app',
    location: 'Punjab India',
    featured: true,
    metrics: 'Easy Access',
    clientType: 'Education'
  },
]

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [itemsPerView, setItemsPerView] = useState(3)
  const [isDragging, setIsDragging] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const dragStartX = useRef(0)
  const controls = useAnimation()

  // Responsive items per view
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

  // Auto-play with pause on hover
  useEffect(() => {
    if (!isAutoPlaying || maxIndex === 0 || hoveredIndex !== null) return
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, nextSlide, maxIndex, hoveredIndex])

  const handleManualNavigation = (direction) => {
    setIsAutoPlaying(false)
    direction === 'next' ? nextSlide() : prevSlide()
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const getTransformPercentage = () => {
    return -(currentIndex * (100 / itemsPerView))
  }

  // Enhanced drag handlers
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

    const shouldNavigate = 
      Math.abs(velocity) > velocityThreshold || Math.abs(offset) > dragThreshold

    if (shouldNavigate) {
      if (offset > 0 && currentIndex > 0) {
        setCurrentIndex(prev => prev - 1)
        setIsAutoPlaying(false)
        setTimeout(() => setIsAutoPlaying(true), 10000)
      } else if (offset < 0 && currentIndex < maxIndex) {
        setCurrentIndex(prev => prev + 1)
        setIsAutoPlaying(false)
        setTimeout(() => setIsAutoPlaying(true), 10000)
      }
    }

    setTimeout(() => setIsDragging(false), 150)
  }

  // Animate carousel
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
    <section 
      id="portfolio" 
      className="relative pb-6 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden"
      aria-labelledby="portfolio-heading"
    >
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-20 pointer-events-none" aria-hidden="true" />

      {/* Animated dots pattern */}
      <motion.div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(59 130 246) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}
        animate={{
          backgroundPosition: ['0px 0px', '40px 40px'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear'
        }}
        aria-hidden="true"
      />

      <div className="container-custom relative z-10">
        {/* SEO-Optimized Header */}
        <ScrollReveal direction="up" className="text-center mb-8 sm:mb-12 lg:mb-16">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold shadow-sm">
              <FaRocket className="text-sm" aria-hidden="true" />
              Our Success Stories
            </span>
          </motion.div>
          
          <h2 id="portfolio-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Website Portfolio by{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Best Web Developer Patiala
            </span>
          </h2>
          
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto px-4 mb-2">
            Explore professional websites built by <strong className="text-blue-600">EaseBuilds - Best Web Developer in Patiala</strong>. 
            From e-commerce to education platforms, we deliver measurable results for local businesses.
          </p>
          
          {/* Success Metrics Badge */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-4 sm:mt-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-100 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-xs sm:text-sm font-semibold text-green-700">50+ Live Projects</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-100 rounded-full">
              <span className="text-xs sm:text-sm font-semibold text-blue-700">100% Client Satisfaction</span>
            </div>
          </div>
          
          {/* Mobile hint */}
          <motion.p 
            className="text-xs text-gray-500 lg:hidden flex items-center justify-center gap-1.5 mt-4"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            <FaEye className="text-blue-600" aria-hidden="true" />
            <span className="font-medium">Swipe to explore • Tap to visit website</span>
          </motion.p>
        </ScrollReveal>

        {/* Carousel Container */}
        <div className="relative px-0 sm:px-12 lg:px-16">
          {/* Navigation Buttons */}
          {maxIndex > 0 && (
            <>
              <motion.button
                onClick={() => handleManualNavigation('prev')}
                disabled={currentIndex === 0}
                className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
                  currentIndex === 0 
                    ? 'opacity-30 cursor-not-allowed' 
                    : 'hover:scale-110 hover:shadow-xl active:scale-95 opacity-40 hover:opacity-100'
                }`}
                whileHover={currentIndex !== 0 ? { scale: 1.1 } : {}}
                whileTap={currentIndex !== 0 ? { scale: 0.9 } : {}}
                aria-label="Previous project"
              >
                <div className={`w-full h-full rounded-full flex items-center justify-center ${currentIndex === 0 ? 'bg-gray-200' : 'bg-gradient-to-r from-blue-600 to-cyan-500'}`}>
                  <FaChevronLeft className="text-lg sm:text-xl text-white" />
                </div>
              </motion.button>

              <motion.button
                onClick={() => handleManualNavigation('next')}
                disabled={currentIndex === maxIndex}
                className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
                  currentIndex === maxIndex 
                    ? 'opacity-30 cursor-not-allowed' 
                    : 'hover:scale-110 hover:shadow-xl active:scale-95 opacity-40 hover:opacity-100'
                }`}
                whileHover={currentIndex !== maxIndex ? { scale: 1.1 } : {}}
                whileTap={currentIndex !== maxIndex ? { scale: 0.9 } : {}}
                aria-label="Next project"
              >
                <div className={`w-full h-full rounded-full flex items-center justify-center ${currentIndex === maxIndex ? 'bg-gray-200' : 'bg-gradient-to-r from-blue-600 to-cyan-500'}`}>
                  <FaChevronRight className="text-lg sm:text-xl text-white" />
                </div>
              </motion.button>
            </>
          )}

          {/* Carousel Track */}
          <div className="overflow-hidden rounded-2xl touch-pan-y">
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
                <motion.article
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="px-2 sm:px-3"
                  style={{ 
                    minWidth: `${100 / itemsPerView}%`,
                    maxWidth: `${100 / itemsPerView}%`
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div
                    onClick={(e) => {
                      if (isDragging || Math.abs(dragStartX.current) > 10) {
                        e.preventDefault()
                        return
                      }
                      if (project.link) {
                        window.open(project.link, '_blank', 'noopener,noreferrer')
                      }
                    }}
                    className="group cursor-pointer h-full"
                    style={{ userSelect: 'none' }}
                  >
                    <motion.div 
                      className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 h-full flex flex-col"
                      whileHover={{ y: -8 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Project Image */}
                      <div className="relative w-full aspect-[16/10] bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden flex-shrink-0">
                        {/* Gradient Overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`} aria-hidden="true" />
                        
                        {/* Image */}
                        <Image
                          src={project.image}
                          alt={`${project.title} - Professional website developed by EaseBuilds for ${project.location}. ${project.clientType} website with ${project.metrics}.`}
                          fill
                          className="object-cover object-top transition-transform duration-700"
                          style={{
                            transform: hoveredIndex === index ? 'scale(1.08)' : 'scale(1)'
                          }}
                          sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          priority={index === 0}
                          draggable={false}
                        />

                        {/* Hover overlay */}
                        <motion.div 
                          className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-center justify-center"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={hoveredIndex === index ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="flex flex-col items-center gap-2 sm:gap-3"
                          >
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center">
                              <FaExternalLinkAlt className="text-blue-600 text-xl sm:text-2xl" />
                            </div>
                            <span className="text-white text-sm sm:text-base font-bold bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm">
                              Visit Live Website
                            </span>
                          </motion.div>
                        </motion.div>

                        {/* Featured & Metrics Badges */}
                        <div className="absolute top-3 right-3 flex flex-col gap-2 items-end">
                          {project.featured && (
                            <motion.div 
                              className="bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg border border-gray-200"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: 0.3, type: 'spring' }}
                            >
                              <span className="text-[10px] sm:text-xs font-bold text-blue-600">⭐ Featured</span>
                            </motion.div>
                          )}
                          {project.metrics && (
                            <motion.div 
                              className="bg-green-500/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: 0.4, type: 'spring' }}
                            >
                              <span className="text-[10px] sm:text-xs font-bold text-white">{project.metrics}</span>
                            </motion.div>
                          )}
                        </div>
                      </div>

                      {/* Project Info */}
                      <div className="p-4 sm:p-5 lg:p-6 flex flex-col flex-grow">
                        <div className="flex-grow">
                          <div className="flex items-center justify-between mb-3">
                            <span className="inline-block text-[10px] sm:text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                              {project.category}
                            </span>
                            <span className="text-[10px] sm:text-xs text-gray-500">{project.clientType}</span>
                          </div>
                          
                          <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors flex items-center gap-2">
                            {project.title}
                            <motion.div
                              animate={hoveredIndex === index ? { x: [0, 4, 0] } : { x: 0 }}
                              transition={{ duration: 0.6, repeat: hoveredIndex === index ? Infinity : 0 }}
                            >
                              <FaExternalLinkAlt className="text-xs opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                            </motion.div>
                          </h3>
                          
                          <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 leading-relaxed line-clamp-3">
                            {project.description}
                          </p>

                          {/* Location Badge */}
                          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-gradient-to-r from-gray-100 to-gray-50 rounded-full mb-3 border border-gray-200">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                            <span className="text-[10px] sm:text-xs font-semibold text-gray-700">📍 {project.location}</span>
                          </div>
                        </div>
                        
                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-auto">
                          {project.tags.map((tag, tagIndex) => (
                            <motion.span
                              key={tagIndex}
                              className="text-[10px] sm:text-xs text-gray-600 bg-gray-100 px-2.5 py-1 rounded-md font-medium"
                              whileHover={{ scale: 1.05, backgroundColor: 'rgb(239 246 255)', color: 'rgb(37 99 235)' }}
                            >
                              {tag}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>

          {/* Progress Indicators */}
          {maxIndex > 0 && (
            <div className="flex justify-center items-center gap-2 mt-6 sm:mt-8" role="tablist" aria-label="Project navigation">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index)
                    setIsAutoPlaying(false)
                    setTimeout(() => setIsAutoPlaying(true), 10000)
                  }}
                  className={`transition-all duration-300 rounded-full ${
                    currentIndex === index
                      ? 'w-2.5 h-2.5 bg-gradient-to-r from-blue-600 to-cyan-500'
                      : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  role="tab"
                  aria-selected={currentIndex === index}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Enhanced CTA with Multiple Actions */}
        <ScrollReveal direction="up" delay={0.3} className="mt-10 sm:mt-12 lg:mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl text-center max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
              Want Results Like These?
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Let's create something amazing for your business in <strong className="text-white">Patiala</strong>! 
              Get a professional website that drives real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <motion.a 
                href="tel:+916283380110" 
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-600 font-bold rounded-xl shadow-lg hover:bg-blue-50 transition-all text-sm sm:text-base"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaPhone className="text-lg" />
                Call Now
              </motion.a>
              <motion.a 
                href="https://wa.me/916283380110?text=Hi%2C%20I%20want%20a%20website%20like%20your%20portfolio%20projects" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl shadow-lg transition-all text-sm sm:text-base"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaWhatsapp className="text-xl" />
                WhatsApp Us
              </motion.a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
