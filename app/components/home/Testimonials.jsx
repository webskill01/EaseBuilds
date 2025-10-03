'use client'
import { motion, useMotionValue } from 'framer-motion'
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { useState, useEffect, useCallback, useRef } from 'react'
import { useInView } from 'framer-motion'
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

// Testimonial Card Component with scroll animation
function TestimonialCard({ testimonial, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const [isActive, setIsActive] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    if (isInView && isMobile) {
      const timer = setTimeout(() => setIsActive(true), index * 150)
      return () => clearTimeout(timer)
    }
  }, [isInView, isMobile, index])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onMouseEnter={() => !isMobile && setIsActive(true)}
      onMouseLeave={() => !isMobile && setIsActive(false)}
      className="h-full"
    >
      <motion.div 
        className="bg-white rounded-2xl p-6 sm:p-7 lg:p-8 shadow-lg border-2 border-gray-100 relative h-full flex flex-col transition-all duration-500"
        animate={{
          boxShadow: isActive 
            ? '0 25px 50px -12px rgba(0, 0, 0, 0.25)' 
            : '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
          borderColor: isActive ? 'rgb(219 234 254)' : 'rgb(243 244 246)',
          y: isActive ? -8 : 0
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Quote Icon with rotation */}
        <motion.div 
          className={`absolute -top-4 left-8 w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${testimonial.gradient} rounded-2xl flex items-center justify-center shadow-xl`}
          animate={{ 
            rotate: isActive ? 6 : 3,
            scale: isActive ? 1.05 : 1
          }}
          transition={{ duration: 0.3 }}
        >
          <FaQuoteLeft className="text-white text-lg sm:text-xl" />
        </motion.div>

        {/* Animated Stars */}
        <div className="flex gap-1 mb-5 sm:mb-6 mt-6 sm:mt-7">
          {[...Array(testimonial.rating)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { 
                opacity: 1, 
                scale: 1,
                rotate: isActive ? [0, -10, 10, 0] : 0
              } : { opacity: 0, scale: 0 }}
              transition={{ 
                delay: 0.3 + (i * 0.1),
                duration: 0.4,
                rotate: { duration: 0.5 }
              }}
            >
              <FaStar className="text-yellow-400 text-lg sm:text-xl drop-shadow-sm" />
            </motion.div>
          ))}
        </div>

        {/* Testimonial Text */}
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6 sm:mb-7 flex-grow font-medium">
          "{testimonial.text}"
        </p>

        {/* Author Section with border animation */}
        <motion.div 
          className="flex items-center gap-4 pt-5 border-t-2 mt-auto transition-colors duration-300"
          animate={{
            borderColor: isActive ? 'rgb(59 130 246)' : 'rgb(243 244 246)'
          }}
        >
          {/* Avatar with scale only (no pulse) */}
<motion.div 
  className="relative w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0"
  animate={{
    scale: isActive ? 1.05 : 1
  }}
  transition={{ duration: 0.3 }}
>
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
</motion.div>


          <div className="min-w-0 flex-1">
            <motion.div 
              className="font-bold text-base sm:text-lg text-gray-900 mb-0.5"
              animate={{
                color: isActive ? 'rgb(37 99 235)' : 'rgb(17 24 39)'
              }}
              transition={{ duration: 0.3 }}
            >
              {testimonial.name}
            </motion.div>
            <div className="text-xs sm:text-sm text-gray-600 mb-1">
              {testimonial.role}
            </div>
            <div className={`inline-block text-[11px] sm:text-xs font-bold bg-gradient-to-r ${testimonial.gradient} bg-clip-text text-transparent`}>
              ✓ {testimonial.project}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [itemsPerView, setItemsPerView] = useState(3)
  const [isDragging, setIsDragging] = useState(false)
  const dragX = useMotionValue(0)

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

  const maxIndex = Math.max(0, testimonials.length - itemsPerView)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }, [maxIndex])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }, [maxIndex])

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

  const handleDragEnd = (event, info) => {
    setIsDragging(false)
    const offset = info.offset.x
    const velocity = info.velocity.x
    
    if (Math.abs(velocity) > 500 || Math.abs(offset) > 100) {
      if (offset > 0 && currentIndex > 0) {
        prevSlide()
      } else if (offset < 0 && currentIndex < maxIndex) {
        nextSlide()
      }
    }
    
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const getTransformValue = () => {
    if (itemsPerView === 1) return `-${currentIndex * 100}%`
    else if (itemsPerView === 2) return `-${currentIndex * 50}%`
    else return `-${currentIndex * 33.333}%`
  }

  return (
    <section className="relative py-5 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* Decorative Background */}
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
          {/* Navigation Buttons */}
          {maxIndex > 0 && (
            <>
              <button
                onClick={() => handleManualNavigation('prev')}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-white/50 backdrop-blur-sm rounded-full shadow-md flex items-center justify-center text-gray-600 hover:bg-primary-600 hover:text-white transition-all duration-300 hover:scale-110 active:scale-95 opacity-30 hover:opacity-100"
                aria-label="Previous testimonial"
              >
                <FaChevronLeft className="text-lg sm:text-xl" />
              </button>

              <button
                onClick={() => handleManualNavigation('next')}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-white/50 backdrop-blur-sm rounded-full shadow-md flex items-center justify-center text-gray-600 hover:bg-primary-600 hover:text-white transition-all duration-300 hover:scale-110 active:scale-95 opacity-30 hover:opacity-100"
                aria-label="Next testimonial"
              >
                <FaChevronRight className="text-lg sm:text-xl" />
              </button>
            </>
          )}

          {/* Carousel Track with Drag */}
          <div className="overflow-hidden rounded-2xl pt-6">
            <motion.div
              className="flex cursor-grab active:cursor-grabbing"
              drag={maxIndex > 0 ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragStart={() => setIsDragging(true)}
              onDragEnd={handleDragEnd}
              animate={{ x: getTransformValue() }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{ x: dragX }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="px-3 sm:px-4"
                  style={{ 
                    minWidth: itemsPerView === 1 ? '100%' : itemsPerView === 2 ? '50%' : '33.333%'
                  }}
                >
                  <TestimonialCard testimonial={testimonial} index={index} />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Progress Indicators */}
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

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10"
        >
          <div className="bg-gradient-to-r from-white via-primary-50 to-white rounded-xl shadow-md border border-gray-200 p-4 sm:p-6">
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 lg:gap-10">
              <motion.div 
                className="flex items-center gap-2.5"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center shadow-sm">
                  <FaStar className="text-white text-lg" />
                </div>
                <div>
                  <div className="font-extrabold text-lg sm:text-xl text-gray-900">5.0</div>
                  <div className="text-[10px] sm:text-xs text-gray-600 font-medium">Rating</div>
                </div>
              </motion.div>
              
              <div className="hidden sm:block w-px h-10 bg-gray-300" />
              
              <motion.div 
                className="flex items-center gap-2.5"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center shadow-sm">
                  <span className="text-white text-xl font-bold">✓</span>
                </div>
                <div>
                  <div className="font-extrabold text-lg sm:text-xl text-gray-900">100%</div>
                  <div className="text-[10px] sm:text-xs text-gray-600 font-medium">Satisfied</div>
                </div>
              </motion.div>
              
              <div className="hidden sm:block w-px h-10 bg-gray-300" />
              
              <motion.div 
                className="flex items-center gap-2.5"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center shadow-sm">
                  <span className="text-white text-xl">🏆</span>
                </div>
                <div>
                  <div className="font-extrabold text-lg sm:text-xl text-gray-900">50+</div>
                  <div className="text-[10px] sm:text-xs text-gray-600 font-medium">Projects</div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
