'use client'

// Architects Landing Page - FIXED VERSION\

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { 
  FaPhone, 
  FaWhatsapp, 
  FaStar, 
  FaCheck, 
  FaRuler,
  FaImages,
  FaCube,
  FaUsers,
  FaChartLine,
  FaDownload,
  FaMapMarkerAlt,
  FaQuoteLeft,
  FaArrowRight,
  FaBuilding,
  FaHome,
  FaPaintBrush
} from 'react-icons/fa'
import { useRef, useState } from 'react'
import Link from 'next/link'
import Header from '@/app/components/layout/Header'
import Footer from '@/app/components/layout/Footer'
import ScrollReveal from '@/app/components/animations/ScrollReveal'
import AnimatedCard from '@/app/components/animations/AnimatedCard'
import CountUp from '@/app/components/animations/CountUp'
import { industries } from '@/lib/industriesData'
import { FaChevronDown, FaPlus, FaMinus } from 'react-icons/fa'
import HeroImage from '@/app/components/HeroImage'

const industryData = industries.architects

export default function ArchitectsPage() {
  const [openFaq, setOpenFaq] = useState(null)
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const [activeCategory, setActiveCategory] = useState('all')

  // Portfolio samples with local image paths
  const portfolioSamples = [
    { id: 1, title: 'Modern Villa Design', category: 'residential', image: '/images/industries/architect/villa.jpg' },
    { id: 2, title: 'Commercial Complex', category: 'commercial', image: '/images/industries/architect/complex.jpg' },
    { id: 3, title: 'Contemporary Home', category: 'residential', image: '/images/industries/architect/home.jpg' },
    { id: 4, title: 'Office Building', category: 'commercial', image: '/images/industries/architect/office.jpg' },
    { id: 5, title: 'Interior Design', category: 'interior', image: '/images/industries/architect/interior.jpg' },
    { id: 6, title: 'Luxury Apartment', category: 'residential', image: '/images/industries/architect/luxury.jpg' },
  ]

  const filteredProjects = activeCategory === 'all' 
    ? portfolioSamples 
    : portfolioSamples.filter(p => p.category === activeCategory)

  return (
    <>
      <Header />

      {/* Hero Section - FIXED with Next.js Image & Blue Theme */}
      <section 
        ref={heroRef}
        className="relative min-h-[85vh] sm:min-h-screen flex items-center justify-center overflow-hidden pt-10"
      >
        {/* Background Image - Using Next.js Image */}
        <motion.div 
          style={{ y }}
          className="absolute inset-0 z-0"
        >
          <HeroImage
            src="/images/industries/architect/hero.jpg"
            alt="Modern architecture design - Professional website development in Patiala"
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
              <FaRuler className="text-white text-lg sm:text-xl" />
              <span className="text-sm sm:text-base font-semibold text-white">
                Trusted by 5+ Architecture Firms in Punjab
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4  leading-tight drop-shadow-lg"
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
              className="text-base sm:text-lg md:text-xl text-white mb-6 max-w-3xl mx-auto leading-relaxed px-4"
            >
              {industryData.hero.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8"
            >
              <motion.a
                href="tel:+916283380110"
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-blue-600 font-bold rounded-xl shadow-2xl transition-all text-sm sm:text-base lg:text-lg"
              >
                <FaPhone className="text-lg sm:text-xl" />
                Call Now
              </motion.a>

              <motion.a
                href="https://wa.me/916283380110?text=Hi%2C%20I%20want%20a%20portfolio%20website%20for%20my%20architecture%20firm"
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
              className="flex flex-wrap justify-center gap-6 text-sm sm:text-base text-white"
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
                <FaBuilding className="text-xl" />
                <span className="font-medium">5+ Architect Firms</span>
              </div>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-xl" />
                <span className="font-medium">Patiala, Punjab</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery Showcase - FIXED with Next.js Images */}
      <section className="py-10 bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <ScrollReveal direction="up">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Stunning Portfolio Website for Your Projects
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
                Showcase your architectural masterpieces with advanced gallery features
              </p>
            </div>
          </ScrollReveal>

          {/* Filter Buttons - Blue Theme */}
          <ScrollReveal direction="up" delay={0.2}>
            <div className="flex flex-wrap justify-center gap-3 mb-8 sm:mb-12">
              {['all', 'residential', 'commercial', 'interior'].map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                    activeCategory === category
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </motion.button>
              ))}
            </div>
          </ScrollReveal>

          {/* Portfolio Grid - Using Next.js Images */}
          <motion.div 
            layout
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          >
            {filteredProjects.map((project, index) => (
              <ScrollReveal key={project.id} direction="up" delay={index * 0.1}>
                <motion.div
                  layout
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                  whileHover={{ y: -8 }}
                >
                  <Image
                    src={project.image}
                    alt={`Architecture project - ${project.title}`}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  
                  {/* Blue Theme Overlay - 40% opacity */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 via-gray-900/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform z-10">
                    <h3 className="text-lg sm:text-xl font-bold mb-2 drop-shadow-lg">
                      {project.title}
                    </h3>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section - Blue Theme */}
      <section className="py-8 bg-white border-y border-gray-200">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {[
              { value: 10, suffix: 'x', label: 'More Client Inquiries', icon: FaUsers },
              { value: 5000, suffix: '+', label: 'Monthly Portfolio Views', icon: FaImages },
              { value: 15, suffix: '+', label: 'New Clients in 6M', icon: FaBuilding },
              { value: 3, suffix: '', label: 'Top Google Ranking', icon: FaChartLine },
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
                Advanced Features for Architects
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
                Everything you need to showcase your architectural excellence
              </p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {/* Feature 1 - All Blue Theme */}
            <ScrollReveal direction="left">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-cyan-100 relative">
                  <Image
                    src="/images/industries/architect/gallery.jpg"
                    alt="Advanced project gallery for architects"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white z-10">
                    <FaImages className="text-4xl mb-2 drop-shadow-lg" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                    Advanced Project Gallery
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Stunning galleries with categories, lightbox view, zoom features. Perfect presentation for your projects.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Feature 2 - Blue Theme */}
            <ScrollReveal direction="right">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-cyan-100 relative">
                  <Image
                    src="/images/industries/architect/3d.jpg"
                    alt="3D rendering integration for architecture websites"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white z-10">
                    <FaCube className="text-4xl mb-2 drop-shadow-lg" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                    3D Rendering Integration
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Upload and display 3D renderings, virtual tours. Impress clients with interactive presentations.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Feature 3 - Blue Theme */}
            <ScrollReveal direction="left">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-cyan-100 relative">
                  <Image
                    src="/images/industries/architect/case-study.jpg"
                    alt="Detailed architecture case studies"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white z-10">
                    <FaRuler className="text-4xl mb-2 drop-shadow-lg" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                    Detailed Case Studies
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Create in-depth project case studies with challenges, solutions, floor plans, and testimonials.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Feature 4 - Blue Theme */}
            <ScrollReveal direction="right">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-cyan-100 relative">
                  <Image
                    src="/images/industries/architect/pdf.jpg"
                    alt="Download portfolio PDF feature"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white z-10">
                    <FaDownload className="text-4xl mb-2 drop-shadow-lg" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                    Download Portfolio PDF
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Let clients download professional PDF portfolio. Perfect for proposals and presentations.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
            {/* Pain Points Section - NEW */}
      <section className="py-10 bg-gradient-to-b from-blue-50 to-white">
        <div className="container-custom">
          <ScrollReveal direction="up">
            <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Are You Facing These Challenges?
              </h2>
              <p className="text-base sm:text-lg text-gray-600 h-full">
                Common problems architecture firms face without a professional portfolio website
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {industryData.painPoints.map((pain, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 0.1}>
                <motion.div
                  className="p-6 bg-white rounded-xl border-2 border-red-100 hover:border-red-300 transition-all  h-full"
                  whileHover={{ x: 5, boxShadow: '0 10px 30px rgba(239, 68, 68, 0.1)' }}
                >
                  <div className="flex items-start gap-3 ">
                    <div className="flex-shrink-0 w-6 h-6  rounded-full bg-red-100 flex items-center justify-center mt-1">
                      <div className="w-2 h-2 rounded-full bg-red-500 " />
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

      {/* Features List - NEW */}
      <section className="py-10 bg-white">
        <div className="container-custom">
          <ScrollReveal direction="up">
            <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Complete Features for Architecture Firms
              </h2>
              <p className="text-base sm:text-lg text-gray-600">
                Everything you need to showcase your projects and attract premium clients
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {industryData.features.map((feature, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 0.1}>
                <AnimatedCard gradient="from-blue-500 to-cyan-600">
                  <div className="p-6 sm:p-8">
                    <div className="flex items-start gap-4 mb-4">
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

      {/* Case Study Section - NEW */}
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

      <section className="py-10 bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <ScrollReveal direction="up">
            <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-base sm:text-lg text-gray-600">
                Common questions about architect portfolio websites in Patiala
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

      {/* CTA Section - Blue Theme */}
      <section className="py-10 bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal direction="up">
              <FaRuler className="text-5xl sm:text-6xl mx-auto mb-6" />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                Ready to Showcase Your Architecture?
              </h2>
              <p className="text-lg sm:text-xl mb-8 sm:mb-10 text-blue-100">
                Professional architecture portfolio website starting at ₹{industryData.pricing.starting}. 
                Get 10x more client inquiries with our proven solution!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="tel:+916283380110"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-blue-600 font-bold rounded-xl shadow-2xl text-lg"
                >
                  <FaPhone />
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
