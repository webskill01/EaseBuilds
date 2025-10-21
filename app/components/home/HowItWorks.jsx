'use client'

// Optimized How It Works Section - Fast & Smooth
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
    duration: '1-2 Days',
    features: ['Domain & Hosting Setup', 'Training Included', '1-3 Months Free Support', 'Analytics Setup']
  },
]

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0)
  const [hoveredStep, setHoveredStep] = useState(null)
  const [isMobile, setIsMobile] = useState(false)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Auto-advance carousel on mobile only
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
      className="relative py-10 bg-gradient-to-br from-gray-50 via-blue-50/30 to-white overflow-hidden"
      aria-labelledby="how-it-works-heading"
    >
      {/* Simple Static Background Pattern - No Animation */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        aria-hidden="true"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(59 130 246) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}
      />

      {/* Static Decorative Shapes - No Animation */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <ScrollReveal direction="up" className="text-center mb-10 sm:mb-12 lg:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md mb-4 sm:mb-6">
            <FaRocket className="text-blue-600 text-base" aria-hidden="true" />
            <span className="text-sm font-semibold text-gray-700">
              Simple & Transparent Process
            </span>
          </div>

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

          {/* Timeline Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full shadow-lg text-sm font-semibold">
            <FaClock className="text-base" />
            Total Duration: 11-16 Days (2-4 Weeks)
          </div>
        </ScrollReveal>

        {/* Mobile Carousel View - Optimized */}
        <div className="md:hidden">
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeStep * 100}%)` }}
              >
                {steps.map((step, index) => (
                  <article key={index} className="w-full flex-shrink-0 px-4">
                    <div className={`${step.bg} rounded-2xl p-6 shadow-lg border-2 border-white relative`}>
                      {/* Step Number Badge - Static on Mobile */}
                      <div 
                        className={`absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br ${step.gradient} text-white rounded-full flex items-center justify-center font-bold text-base shadow-lg z-10`}
                        aria-label={`Step ${step.number}`}
                      >
                        {step.number}
                      </div>

                      {/* Icon - Static */}
                      <div 
                        className={`w-16 h-16 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center mb-4 shadow-md`}
                        aria-hidden="true"
                      >
                        <step.icon className="text-3xl text-white" />
                      </div>

                      {/* Duration */}
                      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-full shadow-sm mb-3">
                        <FaClock className="text-blue-600 text-xs" aria-hidden="true" />
                        <span className="text-xs font-semibold text-gray-700">{step.duration}</span>
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed mb-4">
                        {step.description}
                      </p>

                      {/* Features */}
                      <ul className="space-y-2" role="list">
                        {step.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <FaCheckCircle className="text-sm text-green-500 flex-shrink-0" aria-hidden="true" />
                            <span className="text-xs text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Carousel Dots */}
            <div className="flex justify-center items-center gap-2 mt-6" role="tablist" aria-label="Website development steps">
              {steps.map((step, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`transition-all duration-300 rounded-full ${
                    activeStep === index 
                      ? `w-2 h-2 bg-gradient-to-r ${step.gradient}` 
                      : 'w-2 h-2 bg-gray-300'
                  }`}
                  role="tab"
                  aria-selected={activeStep === index}
                  aria-label={`View step ${index + 1}: ${step.title}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Grid View - Optimized */}
        <div className="hidden md:block">
          {/* Timeline Connector - Simple Animation */}
          <div className="relative mb-8">
            <div className="absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-purple-200 via-green-200 to-orange-200 rounded-full hidden lg:block" aria-hidden="true">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-600 via-purple-600 via-green-600 to-orange-600 rounded-full"
                initial={{ width: '0%' }}
                animate={isInView ? { width: '100%' } : { width: '0%' }}
                transition={{ duration: 1.5, ease: 'easeOut', delay: 0.3 }}
              />
            </div>

            {/* Steps Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="relative group"
                  onMouseEnter={() => setHoveredStep(index)}
                  onMouseLeave={() => setHoveredStep(null)}
                >
                  {/* Arrow Between Steps */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:flex absolute top-16 left-full w-full items-center justify-center z-0" aria-hidden="true">
                      <FaArrowRight className={`text-xl text-gray-300 transition-colors duration-300 ${hoveredStep === index ? 'text-blue-500' : ''}`} />
                    </div>
                  )}

                  {/* Card */}
                  <div
                    className={`${step.bg} rounded-2xl p-6 shadow-lg transition-all duration-300 relative border-2 border-white h-full ${
                      hoveredStep === index ? 'shadow-2xl -translate-y-2' : ''
                    }`}
                  >
                    {/* Step Number - Simple Scale on Hover */}
                    <div 
                      className={`absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br ${step.gradient} text-white rounded-full flex items-center justify-center font-bold text-base shadow-lg z-10 transition-transform duration-300 ${
                        hoveredStep === index ? 'scale-110' : 'scale-100'
                      }`}
                      aria-label={`Step ${step.number}`}
                    >
                      {step.number}
                    </div>

                    {/* Icon - Static with hover effect */}
                    <div 
                      className={`w-16 h-16 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center mb-4 shadow-md transition-transform duration-300 ${
                        hoveredStep === index ? 'scale-110' : 'scale-100'
                      }`}
                      aria-hidden="true"
                    >
                      <step.icon className="text-3xl text-white" />
                    </div>

                    {/* Duration */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-full shadow-sm mb-3">
                      <FaClock className={`text-xs bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent`} aria-hidden="true" />
                      <time className="text-xs font-bold text-gray-700">{step.duration}</time>
                    </div>

                    {/* Content */}
                    <h3 className={`text-lg font-bold text-gray-900 mb-2 transition-colors duration-300 ${
                      hoveredStep === index ? 'text-blue-600' : ''
                    }`}>
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                      {step.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2" role="list">
                      {step.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <FaCheckCircle className="text-sm text-green-500 flex-shrink-0" aria-hidden="true" />
                          <span className="text-xs text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <ScrollReveal direction="up" delay={0.3} className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-6 sm:p-8 shadow-xl max-w-3xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Ready to Start Your Website Project?
            </h3>
            <p className="text-sm sm:text-base text-blue-100 mb-6">
              Join 50+ successful businesses in Patiala. Get your professional website in 2-4 weeks!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+916283380110"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-blue-600 font-bold rounded-xl shadow-lg hover:bg-blue-50 transition-colors duration-300 text-sm"
              >
                <FaPhone />
                Call Now
              </a>
              <a
                href="https://wa.me/916283380110?text=Hi%2C%20I%20want%20to%20start%20my%20website%20project%20in%20Patiala"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl shadow-lg transition-colors duration-300 text-sm"
              >
                <FaWhatsapp />
                WhatsApp Us
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
