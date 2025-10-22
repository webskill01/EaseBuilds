'use client'

// Dental Clinics Landing Page - FIXED VERSION

import { motion, useScroll, useTransform , AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { 
  FaPhone, 
  FaWhatsapp, 
  FaStar, 
  FaCheck, 
  FaStethoscope,
  FaCalendarAlt,
  FaUserMd,
  FaImages,
  FaChartLine,
  FaMobileAlt,
  FaMapMarkerAlt,
  FaQuoteLeft,
  FaArrowRight,
  FaLaptop,
  FaTabletAlt,
  FaPhoneAlt
} from 'react-icons/fa'
import { useRef } from 'react'
import Link from 'next/link'
import Header from '@/app/components/layout/Header'
import Footer from '@/app/components/layout/Footer'
import ScrollReveal from '@/app/components/animations/ScrollReveal'
import AnimatedCard from '@/app/components/animations/AnimatedCard'
import CountUp from '@/app/components/animations/CountUp'
import { industries } from '@/lib/industriesData'
import { useState } from 'react'
import { FaChevronDown, FaPlus, FaMinus } from 'react-icons/fa'
import HeroImage from '@/app/components/HeroImage'

const industryData = industries.dentalClinics


export default function DentalClinicsPage() {
  const [openFaq, setOpenFaq] = useState(null)
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  return (
    <>
      <Header />

      {/* Hero Section - FIXED with Next.js Image */}
      <section 
        ref={heroRef}
        className="relative min-h-[85vh] sm:min-h-screen flex items-center justify-center overflow-hidden pt-8"
      >
        {/* Background Image - Using Next.js Image Component */}
        <motion.div 
          style={{ y }}
          className="absolute inset-0 z-0"
        >
          <HeroImage
            src="/images/industries/dental/dental-hero.jpg"
            alt="Modern dental clinic - Professional website development in Patiala"
          />
          
           <div className="absolute inset-0 bg-gradient-to-br from-gray-800/60 via-gray-700/50 to-gray-900/60" />
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle, white 2px, transparent 2px)',
                backgroundSize: '50px 50px'
              }} />
          </div>
        </motion.div>

        {/* Hero Content */}
        <div className="container-custom relative z-30 py-10">
          <div className="max-w-4xl mx-auto text-center">
            
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full mb-4 sm:mb-6 border border-white/30"
            >
              <FaStethoscope className="text-white text-lg sm:text-xl" />
              <span className="text-sm sm:text-base font-semibold text-white">
                Trusted by 10+ Dental Clinics in Punjab
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight drop-shadow-lg"
            >
              {industryData.hero.headline}
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl sm:text-2xl md:text-3xl text-blue-100 mb-6 font-semibold"
            >
              {industryData.hero.subheadline}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-base sm:text-lg md:text-xl text-white/90 mb-6 max-w-3xl mx-auto leading-relaxed px-4"
            >
              {industryData.hero.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6 sm:mb-12"
            >
              <motion.a
                href="tel:+916283380110"
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-blue-600 font-bold rounded-xl shadow-2xl transition-all text-sm sm:text-base lg:text-lg"
              >
                <FaPhoneAlt className="text-lg sm:text-xl" />
                Call Now
              </motion.a>

              <motion.a
                href="https://wa.me/916283380110?text=Hi%2C%20I%20want%20a%20website%20for%20my%20dental%20clinic%20in%20Patiala"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl shadow-2xl transition-all text-sm sm:text-base lg:text-lg"
              >
                <FaWhatsapp className="text-xl sm:text-2xl" />
                WhatsApp Us
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap justify-center gap-6 sm:gap-8 text-sm sm:text-base text-white"
            >
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-300 text-base sm:text-lg" />
                  ))}
                </div>
                <span className="font-medium">5.0 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <FaUserMd className="text-xl" />
                <span className="font-medium">10+ Dental Clinics</span>
              </div>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-xl" />
                <span className="font-medium">Patiala, Punjab</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Website Mockup Showcase - FIXED with Next.js Images */}
      <section className="py-8 bg-gradient-to-b from-gray-900 to-gray-800 text-white overflow-hidden">
        <div className="container-custom">
          <ScrollReveal direction="up">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                See Your Dental Clinic Website in Action
              </h2>
              <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
                Professional website design that attracts patients and builds trust
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto items-center">
            {/* Desktop Mockup */}
            <ScrollReveal direction="left">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur-2xl opacity-30" />
                <div className="relative bg-gray-700 rounded-2xl p-4 shadow-2xl">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <div className="flex-1 bg-gray-600 rounded px-3 py-1.5 text-xs text-gray-300">
                      <FaLaptop className="inline mr-2" />
                      yourdentalclinic.in
                    </div>
                  </div>
                  <div className="bg-white rounded-lg overflow-hidden aspect-[16/10] relative">
                    <Image
                      src="/images/industries/dental/dental-desktop.jpg"
                      alt="Dental clinic website desktop view"
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 50vw, 50vw"
                    />
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats Section - Same */}
      <section className="py-8 sm:py-12 bg-white border-b border-gray-200">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {[
              { value: 50, suffix: '+', label: 'Monthly Appointments', icon: FaCalendarAlt },
              { value: 200, suffix: '%', label: 'Traffic Increase', icon: FaChartLine },
              { value: 95, suffix: '%', label: 'Patient Satisfaction', icon: FaStar },
              { value: 3, suffix: ' Hours', label: 'Time Saved Daily', icon: FaMobileAlt },
            ].map((stat, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 0.1}>
                <motion.div
                  className="text-center p-4 sm:p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-100"
                  whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(59, 130, 246, 0.2)' }}
                >
                  <stat.icon className="text-3xl sm:text-4xl text-blue-600 mx-auto mb-2 sm:mb-3" />
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 mb-1 sm:mb-2">
                    <CountUp value={stat.value} suffix={stat.suffix} duration={2} />
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Features Showcase - FIXED with Next.js Images & Blue Theme */}
      <section className="py-10 bg-gradient-to-b from-white to-blue-50">
        <div className="container-custom">
          <ScrollReveal direction="up">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Everything Your Dental Clinic Needs
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
                Powerful features designed specifically for dental clinics in Patiala
              </p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {/* Feature 1: Online Booking */}
            <ScrollReveal direction="left">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-cyan-100 relative">
                  <Image
                    src="/images/industries/dental/online-booking.jpg"
                    alt="Online appointment booking system for dental clinics"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Lighter overlay - 40% instead of 80% */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white z-10">
                    <FaCalendarAlt className="text-4xl mb-2 drop-shadow-lg" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                    Online Appointment Booking
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Let patients book appointments 24/7. Automatic confirmations and reminders reduce no-shows by 60%.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Feature 2: Patient Portal - BLUE THEME */}
            <ScrollReveal direction="right">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-cyan-100 relative">
                  <Image
                    src="/images/industries/dental/patient-portal.jpg"
                    alt="Secure patient portal for dental records"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white z-10">
                    <FaUserMd className="text-4xl mb-2 drop-shadow-lg" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                    Secure Patient Portal
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Patients access records, prescriptions, and treatment history online. Save 3+ hours daily on inquiries.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Feature 3: Treatment Gallery - BLUE THEME */}
            <ScrollReveal direction="left">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-cyan-100 relative">
                  <Image
                    src="/images/industries/dental/gallery.jpg"
                    alt="Before and after dental treatment gallery"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white z-10">
                    <FaImages className="text-4xl mb-2 drop-shadow-lg" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                    Before/After Treatment Gallery
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Showcase your dental work with stunning galleries. Build trust with visual proof of expertise.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Feature 4: SEO - BLUE THEME */}
            <ScrollReveal direction="right">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-cyan-100 relative">
                  <Image
                    src="/images/industries/dental/seo.jpg"
                    alt="SEO optimization for dental clinic websites"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white z-10">
                    <FaChartLine className="text-4xl mb-2 drop-shadow-lg" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                    SEO for "Dentist in Patiala"
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Rank on Page 1 of Google for local searches. Get 200+ monthly organic visitors from Patiala.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Pain Points Section - Keep existing */}
      <section className="py-10 bg-gradient-to-b from-blue-50 to-white">
        <div className="container-custom">
          <ScrollReveal direction="up">
            <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Are You Facing These Challenges?
              </h2>
              <p className="text-base sm:text-lg text-gray-600">
                Common problems dental clinics in Patiala face without a professional website
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {industryData.painPoints.map((pain, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 0.1}>
                <motion.div
                  className="p-6 bg-white rounded-xl border-2 border-red-100 hover:border-red-300 transition-all h-full"
                  whileHover={{ x: 5, boxShadow: '0 10px 30px rgba(239, 68, 68, 0.1)' }}
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-1">
                      <div className="w-2 h-2 rounded-full bg-red-500" />
                    </div>
                    <p className="text-sm sm:text-base text-gray-700">
                      {pain}
                    </p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Features List - Keep existing */}
      <section className="py-10 bg-white">
        <div className="container-custom">
          <ScrollReveal direction="up">
            <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Complete Features for Dental Clinics in Patiala
              </h2>
              <p className="text-base sm:text-lg text-gray-600">
                Everything you need to attract patients and grow your dental practice online
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {industryData.features.map((feature, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 0.1}>
                <AnimatedCard gradient="from-blue-500 to-cyan-600">
                  <div className="p-6 sm:p-8">
                    <div className="flex items-start gap-4 mb-4 h-full">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center">
                        <FaCheck className="text-white text-xl" />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                          {feature.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4 leading-relaxed h-[75px]">
                      {feature.description}
                    </p>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 rounded-lg border border-green-200">
                      <FaChartLine className="text-green-600" />
                      <span className="text-sm font-semibold text-green-700">
                        {feature.benefit}
                      </span>
                    </div>
                  </div>
                </AnimatedCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-10 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal direction="up">
              <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden">
                <div className="p-6 sm:p-8 lg:p-12">
                  <div className="text-center mb-8 sm:mb-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-4">
                      <FaStar className="text-blue-600" />
                      <span className="text-sm font-semibold text-blue-600">Success Story</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                      {industryData.caseStudy.client}
                    </h2>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-3">Challenge</h4>
                      <p className="text-gray-600">{industryData.caseStudy.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-3">Solution</h4>
                      <p className="text-gray-600">{industryData.caseStudy.solution}</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-3">Results</h4>
                      <ul className="space-y-2">
                        {industryData.caseStudy.results.map((result, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 sm:p-8 rounded-xl">
                    <FaQuoteLeft className="text-3xl text-blue-300 mb-4" />
                    <p className="text-lg italic text-gray-700 mb-4">
                      "{industryData.caseStudy.testimonial}"
                    </p>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400 text-xl" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
{/* FAQs Section - Full Width Accordion */}

<section className="py-10 sm:py-12 bg-gradient-to-b from-white to-gray-50">
  <div className="container-custom">
    <ScrollReveal direction="up">
      <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-base sm:text-lg text-gray-600">
          Common questions about dental clinic websites in Patiala
        </p>
      </div>
    </ScrollReveal>

    <div className="max-w-4xl mx-auto space-y-3">
      {industryData.faqs.map((faq, index) => {
        const isOpen = openFaq === index
        
        return (
          <ScrollReveal key={index} direction="up" delay={index * 0.05}>
            <motion.div
              initial={false}
              animate={{
                backgroundColor: isOpen ? '#EFF6FF' : '#FFFFFF'
              }}
              className="rounded-xl border-2 transition-all duration-300 overflow-hidden"
              style={{
                borderColor: isOpen ? '#3B82F6' : '#E5E7EB'
              }}
            >
              {/* Question Button */}
              <button
                onClick={() => setOpenFaq(isOpen ? null : index)}
                className="w-full px-5 sm:px-6 py-4 sm:py-5 flex items-start sm:items-center justify-between gap-4 text-left hover:bg-blue-50/50 transition-colors group focus:outline-none"
              >
                {/* Number Badge */}
                <div className={`flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-sm sm:text-base transition-all ${
                  isOpen 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-600 group-hover:bg-blue-100 group-hover:text-blue-600'
                }`}>
                  {String(index + 1).padStart(2, '0')}
                </div>

                {/* Question Text */}
                <h3 className="flex-1 text-base sm:text-lg font-bold text-gray-900">
                  {faq.question}
                </h3>

                {/* Toggle Icon */}
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="flex-shrink-0"
                >
                  <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all ${
                    isOpen 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-100 text-gray-600 group-hover:bg-blue-100 group-hover:text-blue-600'
                  }`}>
                    <FaChevronDown className="text-sm sm:text-base" />
                  </div>
                </motion.div>
              </button>

              {/* Answer (Expandable) */}
              <motion.div
                initial={false}
                animate={{
                  height: isOpen ? 'auto' : 0,
                  opacity: isOpen ? 1 : 0
                }}
                transition={{
                  height: { duration: 0.3, ease: 'easeInOut' },
                  opacity: { duration: 0.2, delay: isOpen ? 0.1 : 0 }
                }}
                className="overflow-hidden"
              >
                <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent mb-4" />
                  
                  {/* Answer Content */}
                  <div className="pl-0 sm:pl-14">
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </ScrollReveal>
        )
      })}
    </div>

    {/* Still have questions CTA */}
    <ScrollReveal direction="up" delay={0.3}>
      <div className="mt-8 text-center">
        <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-4 px-6 py-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl border border-blue-100">
          <p className="text-sm sm:text-base font-semibold text-gray-900">
            Still have questions?
          </p>
          <a
            href="tel:+916283380110"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all text-sm"
          >
            <span>Call Us Now</span>
            <FaChevronDown className="rotate-[-90deg]" />
          </a>
        </div>
      </div>
    </ScrollReveal>
  </div>
</section>


      {/* CTA Section */}
      <section className="py-8 bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal direction="up">
              <FaStethoscope className="text-5xl sm:text-6xl mx-auto mb-6" />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                Ready to Get More Patients?
              </h2>
              <p className="text-lg sm:text-xl mb-8 sm:mb-10 text-blue-100">
                Professional dental clinic website starting at ₹{industryData.pricing.starting}. 
                Get 50+ monthly appointments with our proven solution!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="tel:+916283380110"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-blue-600 font-bold rounded-xl shadow-2xl text-lg"
                >
                  <FaPhoneAlt />
                  Call Now
                </motion.a>
                
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl border-2 border-white hover:bg-white hover:text-blue-600 transition-all text-lg"
                >
                  View Pricing Plans
                  <FaArrowRight />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
