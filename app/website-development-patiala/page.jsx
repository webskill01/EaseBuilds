'use client'

// OPTIMIZED SEO LANDING PAGE - Best Web Developer in Patiala Punjab India
// Lean, conversion-focused structure with unique content

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { 
  FaPhone, 
  FaWhatsapp, 
  FaStar, 
  FaCheck, 
  FaRocket,
  FaLaptopCode,
  FaShoppingCart,
  FaMobile,
  FaSearch,
  FaAward,
  FaClock,
  FaUsers,
  FaMapMarkerAlt,
  FaEnvelope,
  FaQuoteLeft,
  FaArrowRight,
  FaChevronDown,
  FaDollarSign,
  FaPhoneAlt
} from 'react-icons/fa'
import { useState } from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import ScrollReveal from '../components/animations/ScrollReveal'
import AnimatedCard from '../components/animations/AnimatedCard'
import CountUp from '../components/animations/CountUp'
import GridBackground from '../components/animations/GridBackground'
import HeroImage from '../components/HeroImage'

export default function WebsiteDevelopmentPatiala() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null)

  // Portfolio showcase data (reduced to 3 key projects)
  const portfolioShowcase = [
    {
      title: 'Modgill Travels Website',
      category: 'Taxi Service',
      image: '/images/modgilltravels.png',
      description: 'Online Booking, Dynamic Routes, 50+ monthly bookings'
    },
    {
      title: 'Tape India',
      category: 'Retail',
      image: '/images/tapeindia.jpg',
      description: 'Payment integration, 40% sales increase in 3 months'
    },
    {
      title: 'Pariksha',
      category: 'Educational',
      image: '/images/pariksha.png',
      description: 'Unlimited PYQs Download , Student Login/Signup'
    },
  ]

  // Patiala-specific FAQ (SEO critical)
  const faqs = [
    {
      question: 'Why is EaseBuilds the best web developer in Patiala Punjab India?',
      answer: 'EaseBuilds has delivered 50+ websites for Patiala businesses with 100% satisfaction. We use modern React technology (not outdated WordPress), deliver in 2-4 weeks (faster than industry average), and offer transparent pricing starting at ₹2,999 with free maintenance. We\'re locally based in Patiala and understand Punjab market needs.'
    },
    {
      question: 'How much does website development cost in Patiala?',
      answer: 'Our pricing is transparent and affordable: Basic Website (₹2,999 for 3 pages), Business Website (₹5,999 for 8 pages), E-commerce Store (₹9,999 with unlimited pages). All packages include responsive design, SEO optimization, and free maintenance for 1-3 months. No hidden costs.'
    },
    {
      question: 'How long does it take to build a website in Patiala?',
      answer: 'We deliver websites in 2-4 weeks - much faster than the industry average of 6-8 weeks. Basic websites take 2 weeks, business websites 3 weeks, and custom e-commerce sites 4 weeks. We also offer fast-track delivery in 1-2 weeks for urgent projects.'
    },
    {
      question: 'Do you serve businesses outside Patiala?',
      answer: 'Yes! While our office is in Patiala Punjab India, we serve clients across Rajpura, Sangrur, Nabha, Mohali, Chandigarh, and all of Punjab. We work remotely with seamless online communication, project tracking, and support.'
    },
    {
      question: 'What makes your websites better than WordPress sites?',
      answer: 'We build custom websites using React and Next.js - modern technologies that are 3x faster, more secure, and mobile-optimized compared to WordPress. Our sites load in under 2 seconds, rank higher on Google, and provide better user experience on mobile devices.'
    },
    {
      question: 'Do you provide SEO services for Patiala businesses?',
      answer: 'Yes! All our websites include built-in SEO optimization: meta tags, schema markup, mobile-first design, fast loading, and Google Search Console setup. We also offer dedicated SEO services starting at ₹4,999/month to rank your website higher on Google for Patiala-specific keywords.'
    },
  ]

  return (
    <>
      <Header />
      
      {/* Hero Section - With Background Image & Overlay */}
<section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 sm:pt-24 pb-12 sm:pb-16">
  {/* Background Image */}
  <div className="absolute inset-0 z-0">
    <HeroImage
      src="/images/webdev-hero.jpg"
      alt="Best Web Developer in Patiala Punjab India - EaseBuilds"
    />
    {/* Multi-layer Overlay for Better Readability */}
    <div className="absolute inset-0 bg-gradient-to-br from-gray-50/10 via-gray-50/60 to-gray-50/10" />
    
  </div>

  {/* Animated Grid Pattern (Optional - can keep or remove) */}
  <div className="absolute inset-0 z-[1] opacity-20">
    <GridBackground 
      dotColor="rgba(59, 130, 246, 0.3)" 
      lineColor="rgba(59, 130, 246, 0.05)"
      gridSize={40}
      animated={true}
    />
  </div>

  <div className="container-custom relative z-10">
    <div className="max-w-5xl mx-auto">
      
      {/* Centered Content */}
      <div className="text-center">
        
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full shadow-lg mb-4 sm:mb-6"
        >
          <FaAward className="text-lg sm:text-xl" />
          <span className="text-sm sm:text-base font-semibold">
            #1 Rated Web Developer in Patiala
          </span>
        </motion.div>

        {/* Main H1 - Critical for SEO */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight max-w-4xl mx-auto"
        >
          Best Web Developer in{' '}
          <span className="text-transparent bg-clip-text bg-blue-600">
            Patiala Punjab
          </span>
        </motion.h1>

        {/* Subheading with Keywords */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-950 mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto px-4"
        >
          Professional <strong className="text-blue-600">website development company in Patiala</strong> delivering 
          stunning, fast, SEO-optimized websites. Get your website in 2-4 weeks starting at just{' '}
          <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 block mt-2">₹2,999</span>
        </motion.p>

        {/* CTA Buttons */} 
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-10"
        >
          <motion.a
            href="tel:+916283380110"
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-xl shadow-2xl text-sm sm:text-base lg:text-lg"
          >
            <FaPhoneAlt className="text-lg sm:text-xl" />
            Call Now
          </motion.a>

          <motion.a
            href="https://wa.me/916283380110?text=Hi%2C%20I%20want%20to%20build%20a%20website%20in%20Patiala"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(34, 197, 94, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl shadow-2xl text-sm sm:text-base lg:text-lg"
          >
            <FaWhatsapp className="text-xl sm:text-2xl" />
            WhatsApp Us
          </motion.a>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4 sm:gap-8 text-sm sm:text-base"
        >
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <span className="text-gray-700 font-semibold">50+ Happy Clients</span>
          </div>

          <div className="flex items-center gap-1 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-yellow-400 text-base sm:text-lg" />
            ))}
            <span className="ml-2 text-gray-700 font-semibold">5.0 Rating</span>
          </div>

          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
            <FaMapMarkerAlt className="text-blue-600" />
            <span className="text-gray-700 font-semibold">Based in Patiala</span>
          </div>
        </motion.div>
      </div>

      {/* Floating Stats Cards - Optional Visual Enhancement */}
      <div className="hidden lg:block">
        <motion.div
          className="absolute top-1/3 right-8 bg-white rounded-2xl shadow-2xl p-3 max-w-xs"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
              <FaRocket className="text-white text-2xl" />
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">2-4 Weeks</div>
              <div className="text-sm text-gray-600">Fast Delivery</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-1/4 left-8 bg-white rounded-2xl shadow-2xl p-3 max-w-xs"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <FaCheck className="text-white text-2xl" />
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">100%</div>
              <div className="text-sm text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
        </motion.div>
      </div>

    </div>
  </div>
</section>

      {/* Stats Section */}
      <section className="py-8 sm:py-12 bg-white border-y border-gray-200">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
            {[
              { value: 50, suffix: '+', label: 'Websites Delivered', icon: FaLaptopCode },
              { value: 100, suffix: '%', label: 'Client Satisfaction', icon: FaUsers },
              { value: 5, suffix: '.0', label: 'Star Rating', icon: FaStar },
              { value: 4, suffix: ' Weeks', label: 'Avg Delivery', icon: FaClock },
            ].map((stat, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 0.1}>
                <motion.div
                  className="text-center p-4 sm:p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-100"
                  whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(59, 130, 246, 0.2)' }}
                >
                  <stat.icon className="text-3xl sm:text-4xl text-blue-600 mx-auto mb-2 sm:mb-3" />
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 mb-1">
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

      {/* Portfolio Showcase - Reduced to 3 projects */}
      <section className="py-12 bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <ScrollReveal direction="up">
            <div className="text-center mb-8 sm:mb-12 max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Recent Projects in Patiala Punjab India
              </h2>
              <p className="text-base sm:text-lg text-gray-600">
                Websites we've built for local businesses across Patiala
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
            {portfolioShowcase.map((project, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 0.1}>
                <motion.div
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                  whileHover={{ y: -10 }}
                >
                  <div className="relative w-full h-64 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={`${project.title} - Web Development in Patiala`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 bg-blue-600 text-white text-sm font-semibold rounded-full">
                      {project.category}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm">
                      {project.description}
                    </p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          {/* Link to full portfolio */}
          <div className="text-center">
            <Link href="/portfolio" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all text-lg">
              View All 50+ Projects
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content Section with Side Image */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
              <ScrollReveal direction="left">
                <div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    Why Choose EaseBuilds - The Best Web Developer in Patiala?
                  </h2>
                  
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                    Looking for the <strong>best web developer in Patiala Punjab India</strong>? EaseBuilds is your trusted 
                    partner for professional website development services. We specialize in creating stunning, fast, 
                    and SEO-optimized websites that help local businesses grow online.
                  </p>

                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                    With over 50+ successful projects across Patiala, Rajpura, and Punjab, we're the most reliable 
                    <strong> website development company in Patiala</strong>. Affordable pricing starts at just ₹2,999.
                  </p>

                  <div className="space-y-3">
                    {[
                      'Local Patiala-based team',
                      'Modern React & Next.js technology',
                      'Fast 2-4 week delivery',
                      'SEO-optimized for Google ranking',
                    ].map((benefit, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <FaCheck className="text-white text-xs" />
                        </div>
                        <span className="text-gray-700 font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right">
                <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/about-hero.jpg"
                    alt="EaseBuilds Web Development Office in Patiala Punjab India"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </ScrollReveal>
            </div>

            {/* Services Grid */}
            <ScrollReveal direction="up">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                  Our Web Development Services in Patiala
                </h2>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    {
                      icon: FaLaptopCode,
                      title: 'Custom Website Design',
                      description: 'Professional websites for businesses in Patiala. Responsive, fast, and SEO-optimized.',
                      gradient: 'from-blue-500 to-blue-600'
                    },
                    {
                      icon: FaShoppingCart,
                      title: 'E-commerce Development',
                      description: 'Powerful online stores with payment integration for Patiala businesses.',
                      gradient: 'from-green-500 to-emerald-600'
                    },
                    {
                      icon: FaMobile,
                      title: 'Mobile-Friendly Design',
                      description: '100% responsive websites that work perfectly on all devices.',
                      gradient: 'from-purple-500 to-violet-600'
                    },
                    {
                      icon: FaSearch,
                      title: 'SEO Services',
                      description: 'Rank higher on Google with expert SEO services in Patiala Punjab India.',
                      gradient: 'from-cyan-500 to-blue-600'
                    },
                  ].map((service, index) => (
                    <AnimatedCard key={index} gradient={service.gradient}>
                      <div className="p-6">
                        <div className={`w-14 h-14 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                          <service.icon className="text-2xl text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {service.title}
                        </h3>
                        <p className="text-gray-600">
                          {service.description}
                        </p>
                      </div>
                    </AnimatedCard>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Single Featured Testimonial - Patiala Specific */}
      <section className="py-10 bg-blue-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal direction="up">
              <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
                Why Patiala Businesses Choose EaseBuilds
              </h2>
            </ScrollReveal>
            
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 bg-white rounded-xl">
                <div className="text-3xl font-bold text-blue-600">50+</div>
                <div className="text-sm text-gray-600">Patiala Clients</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl">
                <div className="text-3xl font-bold text-blue-600">5.0</div>
                <div className="text-sm text-gray-600">Average Rating</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl">
                <div className="text-3xl font-bold text-blue-600">100%</div>
                <div className="text-sm text-gray-600">Satisfaction</div>
              </div>
            </div>
            
            <ScrollReveal direction="up" delay={0.2}>
              <div className="bg-white p-6 sm:p-8 rounded-xl border-2 border-blue-200 shadow-lg">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-lg" />
                  ))}
                </div>
                <FaQuoteLeft className="text-3xl text-blue-200 mb-4" />
                <p className="text-gray-700 mb-4 italic text-lg leading-relaxed">
                  "Best web developer in Patiala! EaseBuilds created our clinic website in just 2 weeks with online appointment booking. 
                  We now get 50+ monthly bookings. Professional, affordable, and fast delivery. 
                  Highly recommend for any business in Patiala Punjab India."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    DK
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Dr. Rajesh Kumar</div>
                    <div className="text-sm text-gray-600">Kumar Dental Clinic, Patiala</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            
            <div className="text-center mt-6">
              <Link href="/#clientreviews" className="text-blue-600 hover:underline font-semibold">
                Read all 50+ reviews from Patiala businesses →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview Section */}
      <section className="py-12 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="container-custom max-w-5xl mx-auto">
          <ScrollReveal direction="up">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Website Development Pricing in Patiala
              </h2>
              <p className="text-xl text-blue-100">
                Transparent Pricing • No Hidden Costs • Free Maintenance Included
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid sm:grid-cols-3 gap-6 mb-8">
            {[
              { price: '₹2,999', name: 'Basic Website', pages: '3 Pages', time: '1 Weeks', popular: false },
              { price: '₹5,999', name: 'Business Website', pages: '8 Pages', time: '2 Weeks', popular: true },
              { price: '₹9,999', name: 'E-commerce Store', pages: 'Unlimited', time: '4 Weeks', popular: false },
            ].map((plan, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 0.1}>
                <motion.div
                  className={`p-6 rounded-xl ${plan.popular ? 'bg-white/20 border-2 border-white scale-105' : 'bg-white/10'}`}
                  whileHover={{ scale: 1.05 }}
                >
                  {plan.popular && (
                    <div className="bg-yellow-400 text-blue-900 text-xs font-bold px-3 py-1 rounded-full inline-block mb-3">
                      MOST POPULAR
                    </div>
                  )}
                  <div className="text-3xl sm:text-4xl font-bold mb-2">{plan.price}</div>
                  <div className="text-lg font-semibold mb-3">{plan.name}</div>
                  <div className="text-sm opacity-90 mb-2">{plan.pages}</div>
                  <div className="text-sm opacity-90">{plan.time} Delivery</div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
          
          <div className="text-center">
            <Link 
              href="/pricing" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-bold rounded-xl shadow-2xl hover:bg-blue-50 transition-all"
            >
              View Detailed Pricing & Features
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section - Patiala Specific (CRITICAL FOR SEO) */}
      <section className="py-10 bg-white">
        <div className="container-custom max-w-4xl mx-auto">
          <ScrollReveal direction="up">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-center text-gray-600 mb-10">
              Everything you need to know about web development in Patiala Punjab India
            </p>
          </ScrollReveal>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 0.05}>
                <motion.div
                  className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200 hover:border-blue-300 transition-all"
                  whileHover={{ boxShadow: '0 4px 20px rgba(59, 130, 246, 0.1)' }}
                >
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-100 transition-colors"
                  >
                    <span className="font-bold text-gray-900 pr-4 text-base sm:text-lg">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: openFaqIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FaChevronDown className="text-blue-600 flex-shrink-0" />
                    </motion.div>
                  </button>
                  
                  {openFaqIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 pb-5 pt-2"
                    >
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal direction="up">
              <FaRocket className="text-5xl mx-auto mb-6" />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Ready to Build Your Website in Patiala?
              </h2>
              <p className="text-xl mb-10 text-blue-100">
                Get a professional, SEO-optimized website starting at ₹2,999. Fast delivery in 2-4 weeks!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <motion.a
                  href="tel:+916283380110"
                  whileHover={{ scale: 1.05 }}
                  className="px-5 py-3 bg-white text-blue-600 font-bold rounded-xl shadow-2xl text-lg inline-flex items-center justify-center gap-2"
                >
                  <FaPhoneAlt />
                  Call Now
                </motion.a>
                
                <motion.a
                  href="https://wa.me/916283380110"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="px-5 py-3 bg-green-500 text-white font-bold rounded-xl shadow-2xl text-lg inline-flex items-center justify-center gap-2"
                >
                  <FaWhatsapp className="text-2xl" />
                  WhatsApp Us
                </motion.a>
              </div>
              
              <a className="text-blue-100 flex items-center justify-center gap-2" href='mailto:easebuilds.in@gmail.com'>
                <FaEnvelope />
                Email Us
              </a>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
