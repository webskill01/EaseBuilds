'use client'
import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaCheckCircle, FaClock, FaUsers, FaHeadset } from 'react-icons/fa'

const benefits = [
  {
    icon: FaCheckCircle,
    title: 'Proven Results',
    description: '50+ businesses grew their online presence and increased sales.',
    gradient: 'from-green-500 to-emerald-600'
  },
  {
    icon: FaClock,
    title: 'Quick Delivery',
    description: 'Your website launched in 1-2 weeks, not months.',
    gradient: 'from-blue-500 to-primary-600'
  },
  {
    icon: FaUsers,
    title: 'Dedicated Support',
    description: 'Fast responses and ongoing support after launch.',
    gradient: 'from-purple-500 to-violet-600'
  },
  {
    icon: FaHeadset,
    title: 'Fair Pricing',
    description: 'Transparent pricing with no hidden fees.',
    gradient: 'from-orange-500 to-red-600'
  },
]

const stats = [
  { value: '50+', label: 'Happy Clients', gradient: 'from-primary-500 to-primary-700' },
  { value: '100%', label: 'Satisfaction', gradient: 'from-accent-400 to-accent-600', delay: true },
  { value: '1-2', label: 'Weeks Delivery', gradient: 'from-green-500 to-green-700' },
  { value: '24/7', label: 'Support', gradient: 'from-purple-500 to-purple-700', delay: true },
]

// Benefit Card Component with scroll animation
function BenefitCard({ benefit, index }) {
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
      const timer = setTimeout(() => setIsActive(true), index * 120)
      return () => clearTimeout(timer)
    }
  }, [isInView, isMobile, index])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onMouseEnter={() => !isMobile && setIsActive(true)}
      onMouseLeave={() => !isMobile && setIsActive(false)}
      className="group flex gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 relative overflow-hidden"
    >
      {/* Subtle gradient background on active */}
      <motion.div 
        className={`absolute inset-0 bg-gradient-to-r ${benefit.gradient} opacity-0 transition-opacity duration-300`}
        animate={{ opacity: isActive ? 0.05 : 0 }}
      />

      {/* Icon with animation */}
      <motion.div 
        className={`relative flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${benefit.gradient} rounded-lg flex items-center justify-center shadow-sm transition-all duration-300`}
        animate={{ 
          scale: isActive ? 1.1 : 1,
          rotate: isActive ? [0, -5, 5, 0] : 0
        }}
        transition={{ 
          scale: { duration: 0.3 },
          rotate: { duration: 0.5, ease: "easeInOut" }
        }}
      >
        {/* Glow effect on active */}
        <motion.div 
          className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} rounded-lg blur-md`}
          animate={{ opacity: isActive ? 0.5 : 0 }}
          transition={{ duration: 0.3 }}
        />
        
        <motion.div
          animate={{ 
            scale: isActive ? 1.15 : 1,
            rotate: isActive ? 360 : 0
          }}
          transition={{ 
            duration: 0.5,
            ease: "easeOut"
          }}
        >
          <benefit.icon className="relative z-10 text-base sm:text-lg text-white" />
        </motion.div>
      </motion.div>
      
      <div className="relative flex-1 min-w-0">
        <motion.h3 
          className="text-base sm:text-lg font-bold mb-1 transition-all duration-300"
          animate={{ 
            color: isActive ? 'rgb(37 99 235)' : 'rgb(17 24 39)'
          }}
        >
          {benefit.title}
        </motion.h3>
        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
          {benefit.description}
        </p>
      </div>
    </motion.div>
  )
}

// Stat Card Component with scroll animation
function StatCard({ stat, index }) {
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
      const timer = setTimeout(() => setIsActive(true), index * 100)
      return () => clearTimeout(timer)
    }
  }, [isInView, isMobile, index])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ scale: 1.05, y: -5 }}
      onMouseEnter={() => !isMobile && setIsActive(true)}
      onMouseLeave={() => !isMobile && setIsActive(false)}
      className={`relative bg-gradient-to-br ${stat.gradient} rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 text-white shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${stat.delay ? 'mt-4 sm:mt-6 lg:mt-8' : ''}`}
    >
      {/* Animated shine effect */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/30 to-white/0"
        animate={{ 
          x: isActive ? ['0%', '100%'] : '0%',
          opacity: isActive ? [0, 1, 0] : 0
        }}
        transition={{ 
          duration: 0.8,
          ease: "easeInOut"
        }}
      />
      
      <div className="relative z-10">
        <motion.div 
          className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2"
          animate={{ 
            scale: isActive ? 1.05 : 1
          }}
          transition={{ duration: 0.3 }}
        >
          {stat.value}
        </motion.div>
        <div className="text-xs sm:text-sm lg:text-base opacity-90 font-medium">
          {stat.label}
        </div>
      </div>

      {/* Subtle pulse border on mobile active */}
      {isMobile && isActive && (
        <motion.div 
          className="absolute inset-0 border-2 border-white rounded-xl sm:rounded-2xl"
          animate={{ 
            opacity: [0.5, 0, 0.5],
            scale: [1, 1.02, 1]
          }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      )}
    </motion.div>
  )
}

export default function WhyChooseUs() {
  return (
    <section className="relative py-10 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-100 rounded-full blur-3xl opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-100 rounded-full blur-3xl opacity-20 pointer-events-none" />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            {/* Header */}
            <div className="mb-6 sm:mb-8">
              <motion.div
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-block mb-3"
              >
                <span className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold">
                  Why Us
                </span>
              </motion.div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">
                Why Choose CodeNest?
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600">
                Your partners in success. Here's what makes us different:
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-3 sm:space-y-4">
              {benefits.map((benefit, index) => (
                <BenefitCard key={index} benefit={benefit} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Right: Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-5">
              {stats.map((stat, index) => (
                <StatCard key={index} stat={stat} index={index} />
              ))}
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -20 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-white rounded-full p-3 sm:p-4 shadow-xl border-4 border-primary-100 cursor-default"
            >
              <div className="text-center">
                <motion.div 
                  className="text-lg sm:text-xl"
                  animate={{ 
                    rotate: [0, -10, 10, -10, 0],
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3
                  }}
                >
                  ⭐️
                </motion.div>
                <div className="text-[10px] sm:text-xs font-semibold text-gray-700 mt-1">Top Rated</div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
