'use client'

// Why Choose Us Section - SEO Optimized with Advanced Animations
// EaseBuilds - Best Web Developer in Patiala Punjab India

import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaCheckCircle, FaClock, FaUsers, FaHeadset, FaStar, FaAward, FaShieldAlt, FaRocket, FaPhone, FaWhatsapp } from 'react-icons/fa'
import ScrollReveal from '../animations/ScrollReveal'
import CountUp from '../animations/CountUp'

const benefits = [
  {
    icon: FaCheckCircle,
    title: 'Proven Track Record',
    description: '50+ successful websites delivered for businesses across Patiala Punjab India with measurable results, increased online sales, and improved customer engagement.',
    gradient: 'from-green-400 to-emerald-500',
    lightBg: 'bg-green-50',
    iconColor: 'text-green-600'
  },
  {
    icon: FaClock,
    title: 'Lightning Fast Delivery',
    description: 'Professional websites launched in just 2-4 weeks. 60% faster than industry average (6-8 weeks) while maintaining top quality standards.',
    gradient: 'from-blue-400 to-blue-500',
    lightBg: 'bg-blue-50',
    iconColor: 'text-blue-600'
  },
  {
    icon: FaUsers,
    title: 'Dedicated Local Team in Patiala',
    description: 'Based in Patiala Punjab India. Personal service, quick responses within 2-4 hours, and ongoing support in your timezone and language (Hindi, Punjabi, English).',
    gradient: 'from-purple-400 to-purple-500',
    lightBg: 'bg-purple-50',
    iconColor: 'text-purple-600'
  },
  {
    icon: FaHeadset,
    title: 'Transparent & Affordable Pricing',
    description: 'Crystal-clear pricing starting at ₹2,999 with zero hidden fees. Know exactly what you pay before we start. Free maintenance included for 1-3 months.',
    gradient: 'from-orange-400 to-orange-500',
    lightBg: 'bg-orange-50',
    iconColor: 'text-orange-600'
  },
]

const stats = [
  { 
    value: 50, 
    suffix: '+',
    label: 'Happy Clients in Patiala', 
    gradient: 'from-blue-500 to-blue-700',
    icon: FaUsers
  },
  { 
    value: 100, 
    suffix: '%',
    label: 'Client Satisfaction', 
    gradient: 'from-green-500 to-green-700', 
    delay: true,
    icon: FaStar
  },
  { 
    value: 4, 
    prefix: '2-',
    suffix: ' Weeks',
    label: 'Fast Delivery Time', 
    gradient: 'from-purple-500 to-purple-700',
    icon: FaRocket
  },
  { 
    value: 24, 
    suffix: '/7',
    label: 'WhatsApp Support', 
    gradient: 'from-orange-500 to-orange-700', 
    delay: true,
    icon: FaHeadset
  },
]

const achievements = [
  { icon: FaAward, text: 'Award-Winning Design Quality' },
  { icon: FaShieldAlt, text: 'Secure & SSL Certified' },
  { icon: FaStar, text: '5.0 Google Rating' },
]

// Benefit Card Component with enhanced animations
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
      const timer = setTimeout(() => setIsActive(true), index * 150)
      return () => clearTimeout(timer)
    }
  }, [isInView, isMobile, index])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
      onMouseEnter={() => !isMobile && setIsActive(true)}
      onMouseLeave={() => !isMobile && setIsActive(false)}
      className="group relative flex gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl bg-white/50 hover:bg-white hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100"
    >
      {/* Light gradient background on hover */}
      <motion.div 
        className={`absolute inset-0 ${benefit.lightBg} opacity-0 transition-opacity duration-500`}
        animate={{ opacity: isActive ? 0.5 : 0 }}
      />

      {/* Animated border on active */}
      <motion.div
        className={`absolute inset-0 rounded-xl`}
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: isActive ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <div className={`absolute inset-0 bg-gradient-to-r ${benefit.gradient} opacity-10 rounded-xl`} />
        <div className={`absolute inset-0 border-2 border-transparent bg-gradient-to-r ${benefit.gradient} bg-clip-border rounded-xl opacity-20`} />
      </motion.div>

      {/* Icon with smooth animation */}
      <motion.div 
        className={`relative flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${benefit.gradient} rounded-xl flex items-center justify-center shadow-md transition-all duration-500`}
        animate={{ 
          scale: isActive ? 1.1 : 1,
          rotate: isActive ? [0, -8, 8, 0] : 0,
          boxShadow: isActive 
            ? '0 20px 40px rgba(0,0,0,0.15)' 
            : '0 4px 6px rgba(0,0,0,0.1)'
        }}
        transition={{ 
          scale: { duration: 0.3 },
          rotate: { duration: 0.6, ease: "easeInOut" },
          boxShadow: { duration: 0.3 }
        }}
      >
        {/* Glow effect */}
        <motion.div 
          className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} rounded-xl blur-lg`}
          animate={{ opacity: isActive ? 0.6 : 0 }}
          transition={{ duration: 0.3 }}
        />
        
        <benefit.icon className="relative z-10 text-xl sm:text-2xl text-white" />
      </motion.div>
      
      <div className="relative flex-1 min-w-0">
        <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1.5">
          {benefit.title}
        </h3>
        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
          {benefit.description}
        </p>
      </div>

      {/* Corner accent */}
      <motion.div
        className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${benefit.gradient} opacity-0 blur-2xl`}
        animate={{ opacity: isActive ? 0.2 : 0 }}
        transition={{ duration: 0.5 }}
      />
    </motion.div>
  )
}

// Enhanced Stat Card Component
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
      const timer = setTimeout(() => setIsActive(true), index * 120)
      return () => clearTimeout(timer)
    }
  }, [isInView, isMobile, index])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 20 }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
      whileHover={{ scale: 1.05, y: -8 }}
      onMouseEnter={() => !isMobile && setIsActive(true)}
      onMouseLeave={() => !isMobile && setIsActive(false)}
      className={`relative bg-gradient-to-br ${stat.gradient} rounded-2xl p-6 sm:p-7 lg:p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-default ${stat.delay ? 'mt-4 sm:mt-6 lg:mt-8' : ''}`}
    >
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '20px 20px'
        }} />
      </div>

      {/* Animated shine effect */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/40 to-white/0"
        animate={{ 
          x: isActive ? ['-100%', '200%'] : '-100%',
        }}
        transition={{ 
          duration: 1,
          ease: "easeInOut"
        }}
      />
      
      <div className="relative z-10">
        {/* Icon */}
        <motion.div
          className="mb-3"
          animate={{ 
            rotate: isActive ? [0, 10, -10, 0] : 0,
          }}
          transition={{ duration: 0.6 }}
        >
          <stat.icon className="text-3xl sm:text-4xl opacity-80" />
        </motion.div>

        {/* Value with CountUp */}
        <motion.div 
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2"
          animate={{ 
            scale: isActive ? 1.05 : 1
          }}
          transition={{ duration: 0.3 }}
        >
          {isInView && (
            <>
              {stat.prefix}
              <CountUp value={stat.value} suffix={stat.suffix || ''} duration={2} />
            </>
          )}
        </motion.div>
        <div className="text-xs sm:text-sm lg:text-base opacity-90 font-medium">
          {stat.label}
        </div>
      </div>

      {/* Pulse effect on mobile active */}
      {isMobile && isActive && (
        <motion.div 
          className="absolute inset-0 border-2 border-white/50 rounded-2xl"
          animate={{ 
            opacity: [0.5, 0, 0.5],
            scale: [0.98, 1.02, 0.98]
          }}
          transition={{ 
            duration: 2,
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
    <section 
      id="why-choose-us"
      className="relative py-12 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden"
      aria-labelledby="why-choose-heading"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-20 pointer-events-none" aria-hidden="true" />

      {/* Animated dots pattern */}
      <motion.div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(59 130 246) 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }}
        animate={{
          backgroundPosition: ['0px 0px', '32px 32px'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear'
        }}
        aria-hidden="true"
      />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Left: Content */}
          <ScrollReveal direction="left">
            {/* Header */}
            <div className="mb-6 sm:mb-8 lg:mb-10">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-block mb-4"
              >
                <span className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold shadow-sm">
                  <FaStar className="text-sm" aria-hidden="true" />
                  Why Choose EaseBuilds
                </span>
              </motion.div>
              <h2 id="why-choose-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
                Best Web Developer in{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                  Patiala
                </span>
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                Your trusted partner for professional website development. Here's what makes EaseBuilds the{' '}
                <strong className="text-blue-600">#1 choice for local businesses in Patiala</strong>:
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {benefits.map((benefit, index) => (
                <BenefitCard key={index} benefit={benefit} index={index} />
              ))}
            </div>

            {/* Achievements Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-wrap gap-3 sm:gap-4"
            >
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-100"
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <achievement.icon className="text-yellow-500 text-sm sm:text-base" aria-hidden="true" />
                  <span className="text-xs sm:text-sm font-medium text-gray-700">{achievement.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </ScrollReveal>

          {/* Right: Stats Grid */}
          <ScrollReveal direction="right" delay={0.2}>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
                {stats.map((stat, index) => (
                  <StatCard key={index} stat={stat} index={index} />
                ))}
              </div>

              {/* Floating badge with enhanced animation */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, type: "spring", stiffness: 200, damping: 15 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full p-4 sm:p-5 shadow-2xl border-4 border-white cursor-default"
              >
                <div className="text-center">
                  <motion.div 
                    className="text-2xl sm:text-3xl"
                    animate={{ 
                      rotate: [0, -15, 15, -15, 0],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      repeatDelay: 2
                    }}
                  >
                    ⭐️
                  </motion.div>
                  <div className="text-[10px] sm:text-xs font-bold text-white mt-1.5">
                    Top Rated
                  </div>
                  <div className="text-[8px] sm:text-[10px] text-white/80">
                    in Patiala
                  </div>
                </div>
              </motion.div>

              {/* Additional floating element */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  y: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
                className="absolute -bottom-6 -left-6 hidden lg:block bg-white rounded-2xl p-4 shadow-xl border border-gray-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                    <FaCheckCircle className="text-2xl text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">Trusted By</div>
                    <div className="text-xs text-gray-600">50+ Local Businesses</div>
                  </div>
                </div>
              </motion.div>
            </div>
            {/* CTA Buttons - NEW */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8"
            >
              <motion.a
                href="tel:+916283380110"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all text-sm sm:text-base"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaPhone className="text-lg" />
                Call Now: +91 6283380110
              </motion.a>
              <motion.a
                href="https://wa.me/916283380110?text=Hi%20EaseBuilds,%20I%20want%20a%20website%20for%20my%20Patiala%20business"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl shadow-lg transition-all text-sm sm:text-base"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaWhatsapp className="text-xl" />
                WhatsApp Us
              </motion.a>
            </motion.div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  )
}
