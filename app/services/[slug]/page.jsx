'use client'

// ✅ SEO-OPTIMIZED Dynamic Service Page - Works for ALL 4 Services
// Proper H1/H2/H3 hierarchy, Semantic HTML, Better alt text, Breadcrumbs, More keywords

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useRef, useState } from 'react'
import { 
  FaPhone, FaWhatsapp, FaCheck, FaRocket, FaArrowRight, FaCrown, 
  FaBolt, FaTimes, FaShieldAlt, FaStar, FaHome, FaChevronRight,
  FaMapMarkerAlt, FaQuoteLeft
} from 'react-icons/fa'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import Header from '@/app/components/layout/Header'
import Footer from '@/app/components/layout/Footer'
import ScrollReveal from '@/app/components/animations/ScrollReveal'
import { services } from '@/lib/servicesData'
import { notFound } from 'next/navigation'
import HorizontalStepper from '@/app/components/HorizontallStepper'
import HeroImage from '@/app/components/HeroImage'

// ✅ SEO: FAQ Component with proper H3 tags
const FAQItem = ({ faq, index }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <ScrollReveal direction="up" delay={index * 0.05}>
      <motion.article
        initial={false}
        animate={{ backgroundColor: isOpen ? '#EFF6FF' : '#FFFFFF' }}
        className="rounded-2xl border-2 overflow-hidden"
        style={{ borderColor: isOpen ? '#3B82F6' : '#E5E7EB' }}
        itemScope
        itemProp="mainEntity"
        itemType="https://schema.org/Question"
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full text-left p-6 flex justify-between items-center gap-4"
          aria-expanded={isOpen}
        >
          

          {/* ✅ SEO: H3 for FAQ questions */}
          <h3 
            className={`flex-1 text-lg font-bold pr-4 ${isOpen ? 'text-blue-600' : 'text-gray-900'}`}
            itemProp="name"
          >
            {faq.question}
          </h3>
          <motion.div
            animate={{
              backgroundColor: isOpen ? '#3B82F6' : '#F3F4F6',
              scale: isOpen ? 1.1 : 1,
            }}
            className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
          >
            <motion.div animate={{ rotate: isOpen ? 45 : 0 }}>
              <svg className={`w-5 h-5 ${isOpen ? 'text-white' : 'text-gray-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </motion.div>
          </motion.div>
        </button>

        <motion.div
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
          className="overflow-hidden"
          itemScope
          itemProp="acceptedAnswer"
          itemType="https://schema.org/Answer"
        >
          <div className="px-6 pb-6">
            <div className="w-full h-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mb-4"/>
            <p className="text-gray-700 leading-relaxed" itemProp="text">
              {faq.answer}
            </p>
          </div>
        </motion.div>
      </motion.article>
    </ScrollReveal>
  )
}

export default function DynamicServicePage() {
  const params = useParams()
  const { slug } = params
  
  const serviceData = Object.values(services).find(s => s.slug === slug)
  
  if (!serviceData) {
    notFound()
  }

  const heroRef = useRef(null)
  const [selectedComparison, setSelectedComparison] = useState(
    serviceData.comparison?.options.findIndex(opt => opt.recommended) || 0
  )
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  const getImagePath = (index) => {
    // Check if valueProps has image property
    if (serviceData.valueProps[index]?.image) {
      return serviceData.valueProps[index].image
    }
    // Fallback to placeholder or hero image
    return serviceData.hero.image || '/images/main-hero.jpg'
  }

  return (
    <>
      <Header />

      {/* ✅ SEO: Main article wrapper with semantic HTML */}
      <article itemScope itemType="https://schema.org/Service">

        {/* ✅ SEO: Hero as header with proper H1 */}
        <header 
          ref={heroRef}
          className="relative min-h-screen flex items-center justify-center overflow-hidden pt-5"
          style={{ overflow: 'hidden', maxWidth: '100%' }} 
        >
          <motion.div style={{ y }} className="absolute inset-0 z-0">
            <HeroImage
              src={serviceData.hero.image}
              alt={`${serviceData.name} Services in Patiala Punjab India - Professional ${serviceData.name} Company`}
            />
             <div className="absolute inset-0 bg-gradient-to-br from-gray-800/60 via-gray-700/50 to-gray-900/60" />
            <div className="absolute inset-0 opacity-5" style={{ maxWidth: '100%' }}>
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle, white 2px, transparent 2px)',
                backgroundSize: '50px 50px'
              }} />
          </div>
          </motion.div>

          <div className="container-custom relative z-10 py-16"style={{ maxWidth: '100%' }}>
            <div className="max-w-4xl mx-auto text-center">
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-5 py-3 bg-white backdrop-blur-md rounded-full mb-6 border border-white/50 shadow-lg"
              >
                <serviceData.icon className="text-blue-600 text-xl" />
                <span className="text-sm font-semibold text-gray-900">
                  {serviceData.name} in Patiala
                </span>
              </motion.div>

              {/* ✅ SEO: PROPER H1 TAG - Most Important! */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl"
                itemProp="name"
              >
                {serviceData.hero.headline}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-lg sm:text-xl md:text-2xl text-white mb-6 leading-relaxed max-w-3xl mx-auto drop-shadow-lg"
                itemProp="description"
              >
                {serviceData.hero.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6"
              >
                <motion.a
                  href="tel:+916283380110"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 w-72 bg-white text-blue-600 font-bold rounded-xl shadow-2xl text-lg"
                  aria-label="Call EaseBuilds for service inquiry"
                >
                  <FaPhone />
                  Call Now
                </motion.a>

                <motion.a
                  href={`https://wa.me/916283380110?text=I want ${serviceData.name.toLowerCase()} in Patiala`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-green-500 text-white font-bold rounded-xl shadow-2xl text-lg"
                  aria-label="WhatsApp EaseBuilds"
                >
                  <FaWhatsapp className="text-2xl" />
                  {serviceData.hero.cta}
                </motion.a>
              </motion.div>

              {/* ✅ SEO: Local keywords - Patiala mentioned */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="flex flex-wrap justify-center gap-6 text-white"
              >
                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg">
                  <FaMapMarkerAlt className="text-cyan-400" />
                  <span className="text-sm font-medium">Serving Patiala Punjab</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg">
                  <FaStar className="text-yellow-400" />
                  <span className="text-sm font-medium">5.0 Rating</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg">
                  <FaRocket className="text-cyan-400" />
                  <span className="text-sm font-medium">Fast Delivery</span>
                </div>
              </motion.div>
            </div>
          </div>
        </header>

        {/* ✅ SEO: Section with proper H2 */}
        <section className="pt-12 pb-5 bg-white" aria-labelledby="benefits-heading" style={{ maxWidth: '100%' }}>
          <div className="container-custom" style={{ maxWidth: '100%' }}>
            <ScrollReveal direction="up">
              <div className="text-center mb-12">
                {/* ✅ SEO: H2 for major section */}
                <h2 id="benefits-heading" className="text-4xl font-bold text-gray-900 mb-4">
                  Why Choose {serviceData.name} in Patiala Punjab?
                </h2>
                <p className="text-xl text-gray-600">
                  Top benefits of professional {serviceData.name.toLowerCase()} for Patiala businesses
                </p>
              </div>
            </ScrollReveal>

            {serviceData.valueProps.map((prop, index) => {
              const isEven = index % 2 === 0
              
              return (
                <div 
                  key={index}
                  className="grid lg:grid-cols-2 gap-12 items-center mb-20"
                >
                  {isEven ? (
                    <>
                      <ScrollReveal direction="left">
                        <div>
                          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-4">
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center">
                              <FaCheck className="text-white text-sm" />
                            </div>
                            <span className="text-sm font-semibold text-blue-600">
                              Benefit #{index + 1}
                            </span>
                          </div>

                          {/* ✅ SEO: H3 for sub-sections */}
                          <h3 className="text-3xl font-bold text-gray-900 mb-4">
                            {prop.title}
                          </h3>
                          <p className="text-lg text-gray-600 mb-6">
                            {prop.description}
                          </p>
                          
                          <div className="inline-flex items-center gap-3 px-6 py-3 bg-green-50 rounded-xl border-2 border-green-200">
                            <FaRocket className="text-green-600 text-2xl" />
                            <span className="font-bold text-green-700">{prop.benefit}</span>
                          </div>
                        </div>
                      </ScrollReveal>

                      <ScrollReveal direction="right" delay={0.2}>
                        <div>
                          <motion.div
                            whileHover={{ scale: 1.03 }}
                            className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl"
                          >
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/10 to-gray-600/10 z-10" />
                            {/* ✅ SEO: Better alt text with location */}
                            <Image
                               src={getImagePath(index)}
                              alt={`${prop.title} - ${serviceData.name} in Patiala Punjab - Benefit ${index + 1}`}
                              fill
                              className="object-cover"
                              sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                          </motion.div>
                        </div>
                      </ScrollReveal>
                    </>
                  ) : (
                    <>
                      <ScrollReveal direction="left" delay={0.2}>
                        <div>
                          <motion.div
                            whileHover={{ scale: 1.03 }}
                            className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl"
                          >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 z-10" />
                            <Image
                             src={getImagePath(index)}
                              alt={`${prop.title} - ${serviceData.name} in Patiala Punjab - Benefit ${index + 1}`}
                              fill
                              className="object-cover"
                              sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                          </motion.div>
                        </div>
                      </ScrollReveal>

                      <ScrollReveal direction="right">
                        <div>
                          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-4">
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center">
                              <FaCheck className="text-white text-sm" />
                            </div>
                            <span className="text-sm font-semibold text-blue-600">
                              Benefit #{index + 1}
                            </span>
                          </div>

                          <h3 className="text-3xl font-bold text-gray-900 mb-4">
                            {prop.title}
                          </h3>
                          <p className="text-lg text-gray-600 mb-6">
                            {prop.description}
                          </p>
                          
                          <div className="inline-flex items-center gap-3 px-6 py-3 bg-green-50 rounded-xl border-2 border-green-200">
                            <FaRocket className="text-green-600 text-2xl" />
                            <span className="font-bold text-green-700">{prop.benefit}</span>
                          </div>
                        </div>
                      </ScrollReveal>
                    </>
                  )}
                </div>
              )
            })}
          </div>
        </section>
        {/* ✅ SEO: Features section with H2 + ENHANCED ANIMATIONS */}
<section className="py-10 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden" aria-labelledby="features-heading">
  {/* Animated Background Elements */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-pulse-slow" />
    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
  </div>

  <div className="container-custom relative z-10">
    <ScrollReveal direction="up">
      <div className="text-center mb-16">
        {/* Premium Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-4 border border-blue-200">
          <FaStar className="text-blue-600" />
          <span className="text-sm font-semibold text-blue-600">Premium Features</span>
        </div>
        
        <h2 id="features-heading" className="text-4xl font-bold text-gray-900 mb-4">
          Complete {serviceData.name} Package in Patiala
        </h2>
        <p className="text-xl text-gray-600">
          Everything included for businesses in Patiala Punjab India
        </p>
      </div>
    </ScrollReveal>

    {/* ENHANCED BENTO GRID with Colors & Animations */}
    <div className="bento-grid max-w-7xl mx-auto">
      {serviceData.features.map((feature, index) => {
        const isLarge = index === 0
        const isTall = index === 3
        
        // Define unique gradient for each card
        const gradients = [
          'from-blue-500/10 to-cyan-500/10',      // Card 1
          'from-purple-500/10 to-pink-500/10',    // Card 2
          'from-green-500/10 to-emerald-500/10',  // Card 3
          'from-orange-500/10 to-red-500/10',     // Card 4
          'from-indigo-500/10 to-blue-500/10',    // Card 5
          'from-teal-500/10 to-cyan-500/10',      // Card 6
        ]

        const iconGradients = [
          'from-blue-600 to-cyan-500',
          'from-purple-600 to-pink-500',
          'from-green-600 to-emerald-500',
          'from-orange-600 to-red-500',
          'from-indigo-600 to-blue-500',
          'from-teal-600 to-cyan-500',
        ]

        const borderColors = [
          'hover:border-blue-400',
          'hover:border-purple-400',
          'hover:border-green-400',
          'hover:border-orange-400',
          'hover:border-indigo-400',
          'hover:border-teal-400',
        ]

        return (
          <ScrollReveal key={index} direction="up" delay={index * 0.05}>
            <motion.div
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className={`
                relative group
                bg-white rounded-3xl border-2 border-gray-200 overflow-hidden
                hover:shadow-2xl transition-all duration-500
                ${isLarge ? 'p-8' : 'p-6'}
                h-full flex flex-col
                ${borderColors[index]}
              `}
            >
              {/* Animated Gradient Background on Hover */}
              <div className={`
                absolute inset-0 bg-gradient-to-br ${gradients[index]}
                opacity-0 group-hover:opacity-100 transition-opacity duration-500
              `} />

              {/* Shimmer Effect on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>

              {/* Content - Relative to stay above backgrounds */}
              <div className="relative z-10">
                {/* Animated Icon */}
                <motion.div 
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`
                    ${isLarge ? 'w-20 h-20' : 'w-16 h-16'}
                    rounded-2xl flex items-center justify-center mb-4 shadow-lg
                    bg-gradient-to-br ${iconGradients[index]}
                    group-hover:shadow-xl transition-shadow duration-300
                  `}
                >
                  <feature.icon 
                    className={`text-white ${isLarge ? 'text-4xl' : 'text-3xl'}`} 
                  />
                </motion.div>

                {/* Title with Gradient on Hover */}
                <h3 className={`
                  font-bold mb-3 transition-colors duration-300
                  ${isLarge ? 'text-2xl' : 'text-xl'}
                  text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${iconGradients[index]}
                `}>
                  {feature.title}
                </h3>

                {/* Description */}
                <p className={`text-gray-600 mb-4 flex-grow ${isLarge ? 'text-base' : 'text-sm'}`}>
                  {feature.description}
                </p>

                {/* Features List with Stagger Animation */}
                <div className="space-y-2 mt-auto">
                  {feature.included
                    .slice(0, isLarge ? 6 : isTall ? 5 : 3)
                    .map((item, idx) => (
                      <motion.div 
                        key={idx} 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start gap-2 text-xs text-gray-700"
                      >
                        <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-green-200 transition-colors">
                          <FaCheck className="text-green-600 text-[8px]" />
                        </div>
                        <span className="leading-relaxed">{item}</span>
                      </motion.div>
                    ))
                  }
                </div>

                {/* Featured Badge with Animation - Only on Large Card */}
                {isLarge && (
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, type: "spring" }}
                    className="mt-4 inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-full self-start border border-blue-200"
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    >
                      <FaStar className="text-blue-600 text-sm" />
                    </motion.div>
                    <span className="text-xs font-semibold text-blue-600">
                      Most Important
                    </span>
                  </motion.div>
                )}

                {/* Floating Number Badge */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-xs font-bold text-gray-600 group-hover:scale-110 transition-transform">
                  {index + 1}
                </div>
              </div>
            </motion.div>
          </ScrollReveal>
        )
      })}
    </div>
  </div>
</section>


        {/* Process Section */}
        <section className="py-10 bg-white" aria-labelledby="process-heading">
          <div className="container-custom">
            <ScrollReveal direction="up">
              <div className="text-center mb-8">
                <h2 id="process-heading" className="text-4xl font-bold text-gray-900 mb-4">
                  Our {serviceData.name} Process in Patiala
                </h2>
                <p className="text-xl text-gray-600">
                  Step-by-step journey from start to finish
                </p>
              </div>
            </ScrollReveal>

            <HorizontalStepper steps={serviceData.process} />
          </div>
        </section>

        {/* ✅ NEW: Testimonial Section (adds content + social proof) */}
        {serviceData.caseStudy && (
          <aside className="py-10 bg-gradient-to-r from-blue-50 to-cyan-50" aria-labelledby="testimonial-heading">
            <div className="container-custom">
              <ScrollReveal direction="up">
                <div className="max-w-4xl mx-auto">
                  <div className="text-center mb-12">
                    <h2 id="testimonial-heading" className="text-4xl font-bold text-gray-900 mb-4">
                      Success Story from Patiala
                    </h2>
                    <p className="text-xl text-gray-600">
                      Real results for local businesses
                    </p>
                  </div>

                  <div className="bg-white rounded-3xl p-8 shadow-2xl">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div>
                        <FaQuoteLeft className="text-4xl text-blue-600 mb-4" />
                        <blockquote className="text-lg text-gray-700 mb-6 italic leading-relaxed">
                          "{serviceData.caseStudy.testimonial}"
                        </blockquote>
                        <div>
                          <p className="font-bold text-gray-900">{serviceData.caseStudy.client}</p>
                          <p className="text-gray-600">{serviceData.caseStudy.location}</p>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                          Results Achieved:
                        </h3>
                        <ul className="space-y-3">
                          {serviceData.caseStudy.results.map((result, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                <FaCheck className="text-green-600 text-xs" />
                              </div>
                              <span className="text-gray-700">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </aside>
        )}

        {/* Pricing */}
        <section className="py-10 bg-white" aria-labelledby="pricing-heading">
          <div className="container-custom">
            <ScrollReveal direction="up">
              <div className="text-center mb-16">
                <h2 id="pricing-heading" className="text-4xl font-bold text-gray-900 mb-4">
                  {serviceData.name} Pricing in Patiala Punjab
                </h2>
                <p className="text-xl text-gray-600">
                  Affordable packages for Patiala businesses
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {serviceData.pricing.map((plan, index) => (
                <ScrollReveal key={index} direction="up" delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -10 }}
                    className={`relative bg-white p-8 rounded-3xl ${
                      plan.popular 
                        ? 'border-4 border-blue-600 shadow-2xl' 
                        : 'border-2 border-gray-200 shadow-lg'
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full text-sm font-bold">
                        Most Popular
                      </div>
                    )}

                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-6">{plan.description}</p>

                    <div className="mb-6">
                      <span className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                        ₹{plan.price.toLocaleString()}
                      </span>
                      {plan.billingCycle && (
                        <span className="text-gray-500">{plan.billingCycle}</span>
                      )}
                    </div>

                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <motion.a
                      href="tel:+916283380110"
                      whileHover={{ scale: 1.05 }}
                      className={`block text-center px-6 py-4 rounded-xl font-bold ${
                        plan.popular
                          ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white'
                          : 'bg-gray-100 text-gray-900'
                      }`}
                    >
                      Get Started
                    </motion.a>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ✅ NEW: Related Services (Internal Linking) */}
        <section className="py-10 bg-gray-50" aria-labelledby="related-heading">
          <div className="container-custom">
            <ScrollReveal direction="up">
              <div className="text-center mb-12">
                <h2 id="related-heading" className="text-4xl font-bold text-gray-900 mb-4">
                  Other Services in Patiala
                </h2>
                <p className="text-xl text-gray-600">
                  Explore our complete service range
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {Object.values(services)
                .filter(s => s.slug !== slug)
                .slice(0, 3)
                .map((relatedService, index) => (
                  <ScrollReveal key={index} direction="up" delay={index * 0.1}>
                    <Link href={`/services/${relatedService.slug}`}>
                      <motion.div
                        whileHover={{ y: -5, scale: 1.02 }}
                        className="bg-white p-6 rounded-2xl border-2 border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all"
                      >
                        <relatedService.icon className="text-4xl text-blue-600 mb-4" />
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {relatedService.name}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                          {relatedService.hero.description}
                        </p>
                        <span className="text-blue-600 font-semibold flex items-center gap-2">
                          Learn More <FaArrowRight />
                        </span>
                      </motion.div>
                    </Link>
                  </ScrollReveal>
                ))
              }
            </div>
          </div>
        </section>

        {/* FAQ with proper schema */}
        <section className="py-10 bg-white" aria-labelledby="faq-heading" itemScope itemType="https://schema.org/FAQPage">
          <div className="container-custom">
            <ScrollReveal direction="up">
              <div className="text-center mb-12 w-full">
                <h2 id="faq-heading" className="text-4xl font-bold text-gray-900 mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-xl text-gray-600">
                  Common questions about {serviceData.name.toLowerCase()} in Patiala
                </p>
              </div>
            </ScrollReveal>

            <div className="max-w-4xl mx-auto space-y-4">
              {serviceData.faqs.map((faq, index) => (
                <FAQItem key={index} faq={faq} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-10 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <ScrollReveal direction="up">
                <serviceData.icon className="text-5xl mx-auto mb-6" />
                <h2 className="text-5xl font-bold mb-6">
                  Ready for {serviceData.name} in Patiala?
                </h2>
                <p className="text-xl mb-10">
                  Contact EaseBuilds today - Best {serviceData.name.toLowerCase()} company in Patiala Punjab!
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.a
                    href="tel:+916283380110"
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-blue-600 font-bold rounded-xl shadow-2xl text-lg"
                    >
                    <FaPhone />
                    Call Us
                  </motion.a>
                  
                  <motion.a
                    href="/portfolio"
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl border-2 border-white text-lg"
                  >
                    View Portfolio
                    <FaArrowRight />
                  </motion.a>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

      </article>

      <Footer />
    </>
  )
}
