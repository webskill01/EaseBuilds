'use client'

// FINAL Hero - Background Actually Visible + Compact Parallax Stats
// EaseBuilds - Best Web Developer in Patiala Punjab India

import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { FaRocket, FaPhone, FaWhatsapp, FaStar, FaUsers, FaAward, FaClock, FaRupeeSign } from 'react-icons/fa'
import Link from 'next/link'
import { useRef } from 'react'
import RotatingText from '../animations/RotatingText'
import CountUp from '../animations/CountUp'

export default function Hero() {
  const statsRef = useRef(null)
  const isInView = useInView(statsRef, { once: true, margin: "-50px" })
  
  // Individual card refs for parallax
  const card1Ref = useRef(null)
  const card2Ref = useRef(null)
  const card3Ref = useRef(null)
  
  // Scroll progress for each card
  const { scrollYProgress: scroll1 } = useScroll({ target: card1Ref, offset: ["start end", "end start"] })
  const { scrollYProgress: scroll2 } = useScroll({ target: card2Ref, offset: ["start end", "end start"] })
  const { scrollYProgress: scroll3 } = useScroll({ target: card3Ref, offset: ["start end", "end start"] })
  
  // Parallax transforms
  const y1 = useTransform(scroll1, [0, 1], [50, -50])
  const y2 = useTransform(scroll2, [0, 1], [70, -70])
  const y3 = useTransform(scroll3, [0, 1], [90, -90])

  const rotatingTexts = [
    'Stunning Websites',
    'E-commerce Stores', 
    'Mobile Apps',
    'SEO Services',
    'Digital Solutions'
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20 pb-8">
      
      {/* FIXED: Background Image Now Visible */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(/images/main-hero.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 1,
          zIndex: 0
        }}
      />
      
      {/* REDUCED Gradient Overlay so image shows through */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/10 via-white/65 to-cyan-50/10" style={{ zIndex: 1 }} />

      {/* Gradient Orbs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl" style={{ zIndex: 3 }} />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl" style={{ zIndex: 3 }} />

      {/* Main Content */}
      <div className="container-custom relative" style={{ zIndex: 10 }}>
        <div className="max-w-5xl mx-auto">
          
          {/* Centered Content */}
          <div className="text-center space-y-5 sm:space-y-6">
            
            {/* Top Badges */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full shadow-lg hover:scale-105 transition-transform">
                <FaRocket className="text-base" />
                <span className="text-xs sm:text-sm font-bold">
                  #1 Web Developer in Patiala Punjab
                </span>
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-white rounded-full shadow-lg border-2 border-gray-100 hover:scale-105 transition-transform">
                <svg className="w-4 h-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-xs" />
                  ))}
                </div>
                <span className="text-xs sm:text-sm font-bold text-gray-900">5.0</span>
                <span className="text-xs text-gray-500 hidden sm:inline">• 50+</span>
              </div>
            </motion.div>

            {/* Headline */}
            <div className="space-y-2 sm:space-y-3">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.6 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight px-4"
              >
                <span className="block text-gray-900 mb-2">
                  Professional
                </span>
                
                <div className="mb-2 flex justify-center" style={{ minHeight: '1.5em' }}>
                  <RotatingText
                    texts={rotatingTexts}
                    mainClassName="inline-block font-extrabold"
                    elementLevelClassName="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent"
                    splitBy="words"
                    staggerDuration={0.05}
                    rotationInterval={2500}
                  />
                </div>

                <span className="block text-gray-900 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                  for Businesses in{' '}
                  <span className="text-blue-600 font-extrabold">Patiala</span>
                </span>
              </motion.h1>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-sm sm:text-base lg:text-lg text-gray-950 leading-relaxed max-w-3xl mx-auto px-4"
            >
              The <strong className="text-blue-600">best web development company in Patiala</strong> trusted 
              by 50+ local businesses. Get a stunning website starting at{' '}
              <span className="inline-flex items-baseline gap-2 flex-wrap justify-center">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-blue-600">₹2,999</span>
                <span className="text-base sm:text-lg line-through text-gray-950">₹5,999</span>
              </span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-2 px-4"
            >
              <a
                href="tel:+916283380110"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 text-sm sm:text-base relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <FaPhone className="text-lg relative z-10" />
                <span className="relative z-10">Call Us</span>
              </a>

              <a
                href="https://wa.me/916283380110?text=Hi%2C%20I%27m%20interested%20in%20building%20a%20website"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 text-sm sm:text-base"
              >
                <FaWhatsapp className="text-xl" />
                <span>WhatsApp Us</span>
              </a>

              <Link
                href="/pricing"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 bg-white hover:bg-gray-50 text-blue-600 font-bold rounded-xl shadow-md border-2 border-blue-600 hover:shadow-lg hover:scale-105 transition-all duration-300 text-sm sm:text-base"
              >
                <FaRupeeSign className="text-xl" />
                View Pricing →
              </Link>
            </motion.div>

            {/* COMPACT Stats Cards with Parallax Scroll */}
            <div ref={statsRef} className="pt-6 sm:pt-8 px-4">
              <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-3xl mx-auto">
                {[
                  { ref: card1Ref, y: y1, icon: FaUsers, value: 50, suffix: '+', label: 'Clients', gradient: 'from-blue-50 to-cyan-50', iconGradient: 'from-blue-600 to-cyan-500', textColor: 'text-blue-600', borderColor: 'border-blue-100', delay: 0 },
                  { ref: card2Ref, y: y2, icon: FaAward, value: 100, suffix: '%', label: 'Satisfied', gradient: 'from-green-50 to-emerald-50', iconGradient: 'from-green-600 to-emerald-500', textColor: 'text-green-600', borderColor: 'border-green-100', delay: 0.1 },
                  { ref: card3Ref, y: y3, icon: FaClock, text: '2-4', label: 'Weeks', gradient: 'from-orange-50 to-red-50', iconGradient: 'from-orange-600 to-red-500', textColor: 'text-orange-600', borderColor: 'border-orange-100', delay: 0.2 }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    ref={stat.ref}
                    style={{ y: stat.y }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: stat.delay }}
                    className="relative group"
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className={`relative bg-gradient-to-br ${stat.gradient} rounded-xl p-3 sm:p-4 border ${stat.borderColor} shadow-md hover:shadow-xl transition-all`}>
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${stat.iconGradient} rounded-lg flex items-center justify-center mb-2 shadow-md group-hover:scale-110 transition-transform mx-auto`}>
                        <stat.icon className="text-white text-lg sm:text-xl" />
                      </div>
                      
                      <div className={`text-2xl sm:text-3xl font-extrabold ${stat.textColor} mb-1`}>
                        {stat.text ? stat.text : isInView && <CountUp value={stat.value} suffix={stat.suffix} duration={2} />}
                      </div>
                      
                      <div className="text-xs sm:text-sm font-semibold text-gray-600">
                        {stat.label}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Trust Indicators - Compact */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="pt-4 px-4"
            >
              <p className="text-xs sm:text-sm text-gray-600 mb-2">
                Trusted by businesses in Patiala:
              </p>
              <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
                {['Dental', 'Architects', 'Coaching', 'Retail', 'Manufacturing'].map((industry, idx) => (
                  <span
                    key={idx}
                    className="px-2 sm:px-3 py-1 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full text-xs text-gray-700 font-medium hover:border-blue-300 hover:bg-blue-50 transition-all"
                  >
                    {industry}
                  </span>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}
