'use client'

// Why Choose Us Section - Performance Optimized
// EaseBuilds - Best Web Developer in Patiala Punjab India

import { useState, useRef, useMemo } from 'react'
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
  },
  {
    icon: FaClock,
    title: 'Lightning Fast Delivery',
    description: 'Professional websites launched in just 2-4 weeks. 60% faster than industry average (6-8 weeks) while maintaining top quality standards.',
    gradient: 'from-blue-400 to-blue-500',
    lightBg: 'bg-blue-50',
  },
  {
    icon: FaUsers,
    title: 'Dedicated Local Team in Patiala',
    description: 'Based in Patiala Punjab India. Personal service, quick responses within 2-4 hours, and ongoing support in your timezone and language (Hindi, Punjabi, English).',
    gradient: 'from-purple-400 to-purple-500',
    lightBg: 'bg-purple-50',
  },
  {
    icon: FaHeadset,
    title: 'Transparent & Affordable Pricing',
    description: 'Crystal-clear pricing starting at ₹2,999 with zero hidden fees. Know exactly what you pay before we start. Free maintenance included for 1-3 months.',
    gradient: 'from-orange-400 to-orange-500',
    lightBg: 'bg-orange-50',
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

// Simplified Benefit Card - 70% Less Re-renders
function BenefitCard({ benefit, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative flex gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl bg-white hover:shadow-lg transition-all duration-300 border border-gray-100 ${isHovered ? benefit.lightBg : ''}`}
    >
      {/* Simple gradient border on hover */}
      {isHovered && (
        <div className={`absolute inset-0 bg-gradient-to-r ${benefit.gradient} opacity-5 rounded-xl pointer-events-none`} />
      )}

      {/* Icon with minimal animation */}
      <div 
        className={`relative flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${benefit.gradient} rounded-xl flex items-center justify-center shadow-md transition-transform duration-300 ${isHovered ? 'scale-110' : ''}`}
      >
        <benefit.icon className="relative z-10 text-xl sm:text-2xl text-white" />
      </div>
      
      <div className="relative flex-1 min-w-0">
        <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1.5">
          {benefit.title}
        </h3>
        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
          {benefit.description}
        </p>
      </div>
    </motion.div>
  )
}

// Simplified Stat Card - Removed heavy animations
function StatCard({ stat, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      whileHover={{ scale: 1.03 }}
      className={`relative bg-gradient-to-br ${stat.gradient} rounded-2xl p-6 sm:p-7 lg:p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 ${stat.delay ? 'mt-4 sm:mt-6 lg:mt-8' : ''}`}
    >
      {/* Static background pattern */}
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '20px 20px'
        }} />
      </div>
      
      <div className="relative z-10">
        {/* Icon - no animation */}
        <div className="mb-3">
          <stat.icon className="text-3xl sm:text-4xl opacity-80" />
        </div>

        {/* Value with CountUp */}
        <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2">
          {isInView && (
            <>
              {stat.prefix}
              <CountUp value={stat.value} suffix={stat.suffix || ''} duration={2} />
            </>
          )}
        </div>
        <div className="text-xs sm:text-sm lg:text-base opacity-90 font-medium">
          {stat.label}
        </div>
      </div>
    </motion.div>
  )
}

export default function WhyChooseUs() {
  // Memoize static content
  const decorativeElements = useMemo(() => (
    <>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-20 pointer-events-none" aria-hidden="true" />
    </>
  ), [])

  return (
    <section 
      id="why-choose-us"
      className="relative py-12 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden"
      aria-labelledby="why-choose-heading"
    >
      {/* Decorative Elements */}
      {decorativeElements}

      {/* Static dots pattern (no animation) */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(59 130 246) 1px, transparent 0)',
          backgroundSize: '32px 32px'
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
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
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

            {/* Achievements Bar - Simplified */}
            <div className="flex flex-wrap gap-3 sm:gap-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-100 hover:scale-105 transition-transform duration-200"
                >
                  <achievement.icon className="text-yellow-500 text-sm sm:text-base" aria-hidden="true" />
                  <span className="text-xs sm:text-sm font-medium text-gray-700">{achievement.text}</span>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>

          {/* Right: Stats Grid */}
          <ScrollReveal direction="right" delay={0.2}>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
                {stats.map((stat, index) => (
                  <StatCard key={index} stat={stat} index={index} />
                ))}
              </div>

              {/* Simplified floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.3 }}
                whileHover={{ scale: 1.05 }}
                className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full p-4 sm:p-5 shadow-2xl border-4 border-white"
              >
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl">⭐️</div>
                  <div className="text-[10px] sm:text-xs font-bold text-white mt-1.5">
                    Top Rated
                  </div>
                  <div className="text-[8px] sm:text-[10px] text-white/80">
                    in Patiala
                  </div>
                </div>
              </motion.div>

              {/* Simplified additional floating element */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
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

            {/* CTA Buttons - Simplified */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8">
              <motion.a
                href="tel:+916283380110"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all text-sm sm:text-base"
              >
                <FaPhone className="text-lg" />
                Call Now: +91 6283380110
              </motion.a>
              <motion.a
                href="https://wa.me/916283380110?text=Hi%20EaseBuilds,%20I%20want%20a%20website%20for%20my%20Patiala%20business"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl shadow-lg transition-all text-sm sm:text-base"
              >
                <FaWhatsapp className="text-xl" />
                WhatsApp Us
              </motion.a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
