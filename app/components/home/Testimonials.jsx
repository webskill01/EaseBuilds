'use client'
import { motion } from 'framer-motion'
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'

const testimonials = [
  {
    name: 'Tanishq Modgill',
    role: 'Owner, Modgill Travels',
    avatar: '/images/clients/modgill-owner.jpg',
    rating: 5,
    text: 'CodeNest transformed our taxi rental business with a modern booking platform. The real-time availability and seamless payment integration increased our bookings by 60%. Exceptional work!',
    project: 'Modgill Travels',
    gradient: 'from-blue-500 to-cyan-600'
  },
  {
    name: 'Manish Panwar',
    role: 'Managing Director, Tape India',
    avatar: '/images/clients/tapeindia-owner.jpg',
    rating: 5,
    text: 'Our e-commerce platform for adhesive tapes exceeded expectations. The product catalog is intuitive, checkout is smooth, and sales have tripled since launch. Highly recommend!',
    project: 'Tape India Shop',
    gradient: 'from-orange-500 to-red-600'
  },
  {
    name: 'Jaskaran Singh',
    role: 'Education Coordinator',
    avatar: '/images/clients/pariksha-owner.jpg',
    rating: 5,
    text: 'Pariksha has been a game-changer for our students. The serverless architecture is blazing fast, and the organized question bank helps thousands of students prepare effectively. Outstanding solution!',
    project: 'Pariksha Platform',
    gradient: 'from-purple-500 to-pink-600'
  },
  {
    name: 'Manveer Chauhan',
    role: 'Business Owner',
    avatar: '/images/clients/general-client.jpg',
    rating: 5,
    text: 'Working with CodeNest was a breeze. They delivered on time, communicated clearly, and the final product was exactly what we envisioned. Professional and reliable!',
    project: 'General Client',
    gradient: 'from-green-500 to-emerald-600'
  },
]

export default function Testimonials() {
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
        setItemsPerView(3) // Changed from 3 to show max 3, allowing 4th to be accessible
      }
    }
    
    updateItemsPerView()
    window.addEventListener('resize', updateItemsPerView)
    return () => window.removeEventListener('resize', updateItemsPerView)
  }, [])

  const maxIndex = Math.max(0, testimonials.length - itemsPerView)

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
    <section className="relative pt-10 pb-4 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* Enhanced Decorative Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(0 0 0) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>
      <div className="absolute top-20 right-10 w-96 h-96 bg-primary-200 rounded-full blur-3xl opacity-15 pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent-200 rounded-full blur-3xl opacity-15 pointer-events-none" />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-12 lg:mb-14"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-3 sm:mb-4"
          >
            <span className="bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 px-4 py-2 rounded-full text-xs sm:text-sm font-bold">
              ⭐ Client Testimonials
            </span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 sm:mb-4">
            What Our Clients Say
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Real testimonials from businesses we've helped grow and succeed online
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative px-0 sm:px-14 lg:px-20">
          {/* Navigation Buttons - Show on large screens since we have 4 testimonials */}
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
          <div className="overflow-hidden rounded-2xl pt-5">
            <motion.div
              className="flex"
              animate={{ 
                x: itemsPerView === 1 
                  ? `-${currentIndex * 100}%`
                  : itemsPerView === 2
                    ? `-${currentIndex * 50}%`
                    : `-${currentIndex * 33.333}%` // Fixed for 3-column layout with 4 items
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="px-3 sm:px-4"
                  style={{ 
                    minWidth: itemsPerView === 1 ? '100%' : itemsPerView === 2 ? '50%' : '33.333%'
                  }}
                >
                  <div className="bg-white rounded-2xl p-6 sm:p-7 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-primary-200 relative h-full flex flex-col group hover:-translate-y-2">
                    {/* Quote Icon */}
                    <div className={`absolute -top-4 left-8 w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${testimonial.gradient} rounded-2xl flex items-center justify-center shadow-xl rotate-3 group-hover:rotate-6 transition-transform duration-300`}>
                      <FaQuoteLeft className="text-white text-lg sm:text-xl" />
                    </div>

                    {/* Stars */}
                    <div className="flex gap-1 mb-5 sm:mb-6 mt-6 sm:mt-7">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400 text-lg sm:text-xl drop-shadow-sm" />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6 sm:mb-7 flex-grow font-medium">
                      "{testimonial.text}"
                    </p>

                    {/* Author Section */}
                    <div className="flex items-center gap-4 pt-5 border-t-2 border-gray-100 mt-auto">
                      <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0">
                        <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} rounded-full p-[3px] shadow-md`}>
                          <div className="w-full h-full bg-white rounded-full p-[2px]">
                            <div className="relative w-full h-full rounded-full overflow-hidden">
                              <Image
                                src={testimonial.avatar}
                                alt={testimonial.name}
                                fill
                                className="object-cover"
                                sizes="64px"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="font-bold text-base sm:text-lg text-gray-900 mb-0.5">
                          {testimonial.name}
                        </div>
                        <div className="text-xs sm:text-sm text-gray-600 mb-1">
                          {testimonial.role}
                        </div>
                        <div className={`inline-block text-[11px] sm:text-xs font-bold bg-gradient-to-r ${testimonial.gradient} bg-clip-text text-transparent`}>
                          ✓ {testimonial.project}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Improved Progress Indicators */}
          {maxIndex > 0 && (
            <div className="flex justify-center items-center gap-2 mt-7">
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
                      ? 'w-2 h-2 bg-primary-600 shadow-md'
                      : 'w-2 h-2 bg-gray-300 hover:bg-primary-400 hover:scale-125'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Compact Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-6"
        >
          <div className="bg-gradient-to-r from-white via-primary-50 to-white rounded-xl shadow-md border border-gray-200 p-4 sm:p-6">
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 lg:gap-10">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 sm:w-11 sm:h-11 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center shadow-sm">
                  <FaStar className="text-white text-lg" />
                </div>
                <div>
                  <div className="font-extrabold text-lg sm:text-xl text-gray-900">5.0</div>
                  <div className="text-[10px] sm:text-xs text-gray-600 font-medium">Rating</div>
                </div>
              </div>
              
              <div className="hidden sm:block w-px h-10 bg-gray-300" />
              
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 sm:w-11 sm:h-11 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center shadow-sm">
                  <span className="text-white text-xl font-bold">✓</span>
                </div>
                <div>
                  <div className="font-extrabold text-lg sm:text-xl text-gray-900">100%</div>
                  <div className="text-[10px] sm:text-xs text-gray-600 font-medium">Satisfied</div>
                </div>
              </div>
              
              <div className="hidden sm:block w-px h-10 bg-gray-300" />
              
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 sm:w-11 sm:h-11 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center shadow-sm">
                  <span className="text-white text-xl">🏆</span>
                </div>
                <div>
                  <div className="font-extrabold text-lg sm:text-xl text-gray-900">50+</div>
                  <div className="text-[10px] sm:text-xs text-gray-600 font-medium">Projects</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
