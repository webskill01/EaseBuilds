'use client'

// SEO-Optimized How It Works Section - Website Development Process
// EaseBuilds - Best Web Developer in Patiala Punjab India

import { motion, useInView } from 'framer-motion'
import { FaComments, FaPencilRuler, FaCode, FaRocket, FaArrowRight, FaCheckCircle, FaClock, FaPhone, FaWhatsapp } from 'react-icons/fa'
import { useState, useEffect, useRef } from 'react'
import ScrollReveal from '../animations/ScrollReveal'

const steps = [
  {
    icon: FaComments,
    number: '01',
    title: 'Consultation & Planning',
    description: 'Free consultation to understand your business goals. We discuss requirements, target audience, and create a customized website development plan tailored for local businesses.',
    gradient: 'from-blue-500 to-blue-600',
    bg: 'bg-blue-50',
    hoverBg: 'hover:bg-blue-50/80',
    lightGlow: 'bg-blue-400/10',
    duration: '1 Day',
    features: ['Free Consultation', 'Requirement Analysis', 'Strategy Planning', 'Budget Discussion']
  },
  {
    icon: FaPencilRuler,
    number: '02',
    title: 'Design & Mockup Approval',
    description: 'Professional designers create stunning, custom website mockups for your Patiala business. Review designs, provide feedback, and approve the final layout before development begins.',
    gradient: 'from-purple-500 to-purple-600',
    bg: 'bg-purple-50',
    hoverBg: 'hover:bg-purple-50/80',
    lightGlow: 'bg-purple-400/10',
    duration: '2-3 Days',
    features: ['Custom Mockups', 'Unlimited Revisions', 'Mobile Preview', 'Client Approval']
  },
  {
    icon: FaCode,
    number: '03',
    title: 'Website Development',
    description: 'Expert web developers build your website with clean code, advanced SEO optimization, mobile responsiveness, and lightning-fast loading speed for better Google rankings.',
    gradient: 'from-green-500 to-green-600',
    bg: 'bg-green-50',
    hoverBg: 'hover:bg-green-50/80',
    lightGlow: 'bg-green-400/10',
    duration: '7-10 Days',
    features: ['Modern Technology', 'SEO Optimized', 'Mobile Responsive', 'Speed Optimized']
  },
  {
    icon: FaRocket,
    number: '04',
    title: 'Launch & Support',
    description: 'Seamless website launch with complete domain setup, hosting configuration, and comprehensive training. Ongoing support to help your business succeed online.',
    gradient: 'from-orange-500 to-orange-600',
    bg: 'bg-orange-50',
    hoverBg: 'hover:bg-orange-50/80',
    lightGlow: 'bg-orange-400/10',
    duration: '1-2 Days',
    features: ['Domain & Hosting Setup', 'Training Included', '1-3 Months Free Support', 'Analytics Setup']
  },
]

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0)
  const [hoveredStep, setHoveredStep] = useState(null)
  const [isMobile, setIsMobile] = useState(false)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Auto-advance carousel on mobile
  useEffect(() => {
    if (!isMobile) return
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [isMobile])

  return (
    <section 
      ref={sectionRef}
      id="how-it-works"
      className="relative py-6 bg-gradient-to-br from-gray-50 via-blue-50/30 to-white overflow-hidden"
      aria-labelledby="how-it-works-heading"
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" aria-hidden="true">
        <motion.div 
          className="absolute inset-0" 
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
        />
      </div>

      {/* Decorative Shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <motion.div
          className="absolute -top-20 -left-20 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        <motion.div
          className="absolute -bottom-20 -right-20 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        {/* SEO-Optimized Header */}
        <ScrollReveal direction="up" className="text-center mb-8 sm:mb-12 lg:mb-16">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md mb-4 sm:mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <FaRocket className="text-blue-600 text-lg" aria-hidden="true" />
            <span className="text-sm sm:text-base font-semibold text-gray-700">
              Simple & Transparent Process
            </span>
          </motion.div>

          <h2 id="how-it-works-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Our Website Development{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Process
            </span>
          </h2>
          
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto px-4 mb-4">
            From initial consultation to website launch in just <strong className="text-blue-600">2-4 weeks</strong>. 
            Professional web development services by the{' '}
            <strong className="text-gray-900">best web developer in Patiala</strong>{' '}
            with complete transparency and dedicated support.
          </p>

          {/* Total Timeline Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full shadow-lg text-sm sm:text-base font-semibold">
            <FaClock className="text-lg" />
            Total Duration: 11-16 Days (2-4 Weeks)
          </div>
        </ScrollReveal>

        {/* Mobile Carousel View - Mobile First */}
        <div className="md:hidden">
          <div className="relative">
            <div className="overflow-visible">
              <div 
                className="flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${activeStep * 100}%)` }}
              >
                {steps.map((step, index) => (
                  <article key={index} className="w-full flex-shrink-0 px-4">
                    <motion.div 
                      className={`${step.bg} rounded-2xl p-6 shadow-xl border-2 border-white relative overflow-visible`}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      {/* Animated Step Number Badge - Mobile */}
                      <motion.div 
                        className={`absolute -top-5 -right-5 w-14 h-14 bg-gradient-to-br ${step.gradient} text-white rounded-full flex items-center justify-center font-bold text-lg shadow-2xl z-10`}
                        animate={activeStep === index ? {
                          scale: [1, 1.15, 1],
                          rotate: [0, 5, -5, 0],
                        } : {}}
                        transition={{
                          duration: 2,
                          repeat: activeStep === index ? Infinity : 0,
                          ease: 'easeInOut'
                        }}
                        aria-label={`Step ${step.number}`}
                      >
                        {step.number}
                      </motion.div>

                      {/* Static Icon - Mobile */}
                      <div 
                        className={`w-16 h-16 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}
                        aria-hidden="true"
                      >
                        <step.icon className="text-3xl text-white" />
                      </div>

                      {/* Duration Badge */}
                      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-full shadow-sm mb-3">
                        <FaClock className="text-blue-600 text-sm" aria-hidden="true" />
                        <span className="text-xs font-semibold text-gray-700">{step.duration}</span>
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed mb-4">
                        {step.description}
                      </p>

                      {/* Features List */}
                      <ul className="space-y-2" role="list">
                        {step.features.map((feature, idx) => (
                          <motion.li
                            key={idx}
                            className="flex items-center gap-2"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                          >
                            <FaCheckCircle className="text-sm text-green-500 flex-shrink-0" aria-hidden="true" />
                            <span className="text-xs text-gray-600">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </article>
                ))}
              </div>
            </div>

            {/* Carousel Dots */}
            <div className="flex justify-center items-center gap-2 mt-8" role="tablist" aria-label="Website development steps">
              {steps.map((step, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`transition-all duration-300 rounded-full ${
                    activeStep === index 
                      ? `w-2.5 h-2.5 bg-gradient-to-r ${step.gradient}` 
                      : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400'
                  }`}
                  role="tab"
                  aria-selected={activeStep === index}
                  aria-label={`View step ${index + 1}: ${step.title}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Interactive Grid View */}
        <div className="hidden md:block">
          {/* Timeline Connector */}
          <div className="relative">
            <div className="absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-purple-200 via-green-200 to-orange-200 rounded-full hidden lg:block" aria-hidden="true">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-600 via-purple-600 via-green-600 to-orange-600 rounded-full"
                initial={{ width: '0%' }}
                animate={isInView ? { width: '100%' } : { width: '0%' }}
                transition={{ duration: 2, ease: 'easeOut' }}
              />
            </div>

            {/* Steps Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative">
              {steps.map((step, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  className="relative group"
                  onMouseEnter={() => setHoveredStep(index)}
                  onMouseLeave={() => setHoveredStep(null)}
                >
                  {/* Connecting Arrow */}
                  {index < steps.length - 1 && (
                    <motion.div 
                      className="hidden lg:flex absolute top-20 left-full w-full items-center justify-center z-0"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: index * 0.15 + 0.5, duration: 0.5 }}
                      aria-hidden="true"
                    >
                      <motion.div
                        animate={hoveredStep === index ? {
                          x: [0, 10, 0],
                          scale: [1, 1.2, 1]
                        } : {}}
                        transition={{ duration: 0.8, repeat: hoveredStep === index ? Infinity : 0 }}
                      >
                        <FaArrowRight className={`text-2xl bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent`} />
                      </motion.div>
                    </motion.div>
                  )}

                  {/* Card */}
                  <motion.div
                    className={`${step.bg} ${step.hoverBg} rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 relative border-2 border-white overflow-visible cursor-pointer h-full`}
                    whileHover={{ 
                      y: -10,
                      scale: 1.02,
                      transition: { duration: 0.3 }
                    }}
                  >
                    {/* Lighter Glow Effect on Hover */}
                    <motion.div
                      className={`absolute inset-0 ${step.lightGlow} rounded-2xl opacity-0 blur-xl`}
                      animate={hoveredStep === index ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      aria-hidden="true"
                    />

                    {/* Animated Step Number Badge - Desktop */}
                    <motion.div 
                      className={`absolute -top-5 -right-5 w-14 h-14 bg-gradient-to-br ${step.gradient} text-white rounded-full flex items-center justify-center font-bold text-lg shadow-2xl z-10`}
                      animate={hoveredStep === index ? {
                        scale: [1, 1.2, 1],
                        rotate: [0, 360],
                      } : {}}
                      transition={{ 
                        scale: { duration: 0.6, repeat: hoveredStep === index ? Infinity : 0 },
                        rotate: { duration: 0.8 }
                      }}
                      aria-label={`Step ${step.number}`}
                    >
                      {step.number}
                    </motion.div>

                    {/* Static Icon - Desktop */}
                    <div 
                      className={`w-16 h-16 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center mb-4 shadow-xl relative overflow-hidden`}
                      aria-hidden="true"
                    >
                      <step.icon className="text-3xl text-white relative z-10" />
                      
                      {/* Shimmer Effect on Hover Only */}
                      {hoveredStep === index && (
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                          initial={{ x: -100 }}
                          animate={{ x: 200 }}
                          transition={{
                            duration: 0.8,
                            ease: 'easeInOut'
                          }}
                        />
                      )}
                    </div>

                    {/* Duration Badge */}
                    <motion.div 
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-full shadow-md mb-3"
                      whileHover={{ scale: 1.05 }}
                    >
                      <FaClock className={`text-sm bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent`} aria-hidden="true" />
                      <time className="text-xs font-bold text-gray-700">{step.duration}</time>
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4 min-h-[100px]">
                      {step.description}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-2" role="list">
                      {step.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          className="flex items-center gap-2"
                          initial={{ opacity: 0, x: -10 }}
                          animate={hoveredStep === index ? { opacity: 1, x: 0 } : { opacity: 0.7, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          <FaCheckCircle className="text-sm text-green-500 flex-shrink-0" aria-hidden="true" />
                          <span className="text-xs text-gray-600">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced CTA Section with Phone Number */}
        <ScrollReveal direction="up" delay={0.6} className="text-center mt-10 sm:mt-12 lg:mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-5 sm:p-8 shadow-2xl max-w-3xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Ready to Start Your Website Project?
            </h3>
            <p className="text-sm sm:text-base text-blue-100 mb-6">
              Join 50+ successful businesses in Patiala. Get your professional website in 2-4 weeks!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <motion.a
                href="tel:+916283380110"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-600 font-bold rounded-xl shadow-lg hover:bg-blue-50 transition-all duration-300 text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaPhone className="text-lg" />
                Call Now
              </motion.a>
              <motion.a
                href="https://wa.me/916283380110?text=Hi%2C%20I%20want%20to%20start%20my%20website%20project%20in%20Patiala"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl shadow-lg transition-all duration-300 text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaWhatsapp className="text-lg" />
                 WhatsApp Us
              </motion.a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
