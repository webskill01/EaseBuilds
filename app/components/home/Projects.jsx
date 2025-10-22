'use client'

// Ultra-Optimized Portfolio Projects Section
// EaseBuilds - Best Web Developer in Patiala Punjab India

import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaChevronLeft, FaChevronRight, FaRocket, FaPhone, FaWhatsapp, FaPhoneAlt } from 'react-icons/fa'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import ScrollReveal from '../animations/ScrollReveal'

const projects = [
  {
    title: 'Modgill Travels - Taxi Booking Platform',
    category: 'Travel & Tourism',
    description: 'Professional taxi rental website for Patiala businesses with real-time booking system, fleet management, and seamless customer experience. Increased online bookings by 60% within first month.',
    image: '/images/modgilltravels.jpg',
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
    image: '/images/tapeindia.jpg',
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
    image: '/images/pariksha.jpg',
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
  const [itemsPerView, setItemsPerView] = useState(3)
  const [hoveredIndex, setHoveredIndex] = useState(null)

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

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  return (
    <section 
      id="portfolio" 
      className="relative pb-6 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden"
      aria-labelledby="portfolio-heading"
    >
      {/* Simplified Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full opacity-10 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 rounded-full opacity-10 pointer-events-none" aria-hidden="true" />

      <div className="container-custom relative z-10">
        {/* SEO-Optimized Header */}
        <ScrollReveal direction="up" className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-block mb-4">
            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold shadow-sm">
              <FaRocket className="text-sm" aria-hidden="true" />
              Our Success Stories
            </span>
          </div>
          
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
        </ScrollReveal>

        {/* Carousel Container */}
        <div className="relative px-0 sm:px-12 lg:px-16">
          {/* Navigation Buttons */}
          {maxIndex > 0 && (
            <>
              <button
                onClick={prevSlide}
                disabled={currentIndex === 0}
                className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
                  currentIndex === 0 
                    ? 'opacity-30 cursor-not-allowed' 
                    : 'hover:scale-110 hover:shadow-xl opacity-60 hover:opacity-100'
                }`}
                aria-label="Previous project"
              >
                <div className={`w-full h-full rounded-full flex items-center justify-center ${currentIndex === 0 ? 'bg-gray-200' : 'bg-gradient-to-r from-blue-600 to-cyan-500'}`}>
                  <FaChevronLeft className="text-lg sm:text-xl text-white" />
                </div>
              </button>

              <button
                onClick={nextSlide}
                disabled={currentIndex === maxIndex}
                className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
                  currentIndex === maxIndex 
                    ? 'opacity-30 cursor-not-allowed' 
                    : 'hover:scale-110 hover:shadow-xl opacity-60 hover:opacity-100'
                }`}
                aria-label="Next project"
              >
                <div className={`w-full h-full rounded-full flex items-center justify-center ${currentIndex === maxIndex ? 'bg-gray-200' : 'bg-gradient-to-r from-blue-600 to-cyan-500'}`}>
                  <FaChevronRight className="text-lg sm:text-xl text-white" />
                </div>
              </button>
            </>
          )}

          {/* Carousel Track - Simplified & Smooth */}
          <div className="overflow-hidden rounded-2xl">
            <motion.div
              className="flex"
              animate={{
                x: `${-(currentIndex * (100 / itemsPerView))}%`
              }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 30
              }}
            >
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="px-2 sm:px-3"
                  style={{ 
                    minWidth: `${100 / itemsPerView}%`,
                    maxWidth: `${100 / itemsPerView}%`
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div
                    onClick={() => project.link && window.open(project.link, '_blank', 'noopener,noreferrer')}
                    className="group cursor-pointer h-full"
                  >
                    <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 h-full flex flex-col">
                      {/* Project Image */}
                      <div className="relative w-full aspect-[16/10] bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden flex-shrink-0">
                        {/* Gradient Overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`} aria-hidden="true" />
                        
                        {/* Image */}
                        <Image
                          src={project.image}
                          alt={`${project.title} - Professional website developed by EaseBuilds for ${project.location}. ${project.clientType} website with ${project.metrics}.`}
                          fill
                          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          priority={index === 0}
                        />

                        {/* Hover overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-center justify-center transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                          <div className="flex flex-col items-center gap-2 sm:gap-3">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center">
                              <FaExternalLinkAlt className="text-blue-600 text-xl sm:text-2xl" />
                            </div>
                            <span className="text-white text-sm sm:text-base font-bold bg-black/30 px-4 py-2 rounded-full">
                              Visit Live Website
                            </span>
                          </div>
                        </div>

                        {/* Featured & Metrics Badges */}
                        <div className="absolute top-3 right-3 flex flex-col gap-2 items-end">
                          {project.featured && (
                            <div className="bg-white/95 px-3 py-1.5 rounded-full shadow-lg border border-gray-200">
                              <span className="text-[10px] sm:text-xs font-bold text-blue-600">⭐ Featured</span>
                            </div>
                          )}
                          {project.metrics && (
                            <div className="bg-green-500/95 px-3 py-1.5 rounded-full shadow-lg">
                              <span className="text-[10px] sm:text-xs font-bold text-white">{project.metrics}</span>
                            </div>
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
                            <FaExternalLinkAlt className="text-xs opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
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
                            <span
                              key={tagIndex}
                              className="text-[10px] sm:text-xs text-gray-600 bg-gray-100 px-2.5 py-1 rounded-md font-medium hover:bg-blue-50 hover:text-blue-700 transition-colors"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Progress Indicators */}
          {maxIndex > 0 && (
            <div className="flex justify-center items-center gap-2 mt-6" role="tablist" aria-label="Project navigation">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    currentIndex === index
                      ? 'w-2.5 h-2.5 bg-gradient-to-r from-blue-600 to-cyan-500'
                      : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400'
                  }`}
                  role="tab"
                  aria-selected={currentIndex === index}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* CTA Section */}
        <ScrollReveal direction="up" delay={0.3} className="mt-10">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl sm:rounded-3xl p-6 shadow-2xl text-center max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
              Want Results Like These?
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Let's create something amazing for your business in <strong className="text-white">Patiala</strong>! 
              Get a professional website that drives real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a 
                href="tel:+916283380110" 
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-8 py-3  bg-white text-blue-600 font-bold rounded-xl shadow-lg hover:bg-blue-50 hover:scale-105 transition-all text-sm sm:text-base"
              >
                <FaPhoneAlt className="text-lg" />
                Call Now
              </a>
              <a 
                href="https://wa.me/916283380110?text=Hi%2C%20I%20want%20a%20website%20like%20your%20portfolio%20projects" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl shadow-lg hover:scale-105 transition-all text-sm sm:text-base"
              >
                <FaWhatsapp className="text-xl" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
