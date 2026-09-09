'use client'

// OPTIMIZED Hero - High Performance
// EaseBuilds - Best Web Developer in Patiala Punjab India

import { motion, useInView } from 'framer-motion'
import { FaRocket, FaPhone, FaWhatsapp, FaStar, FaUsers, FaAward, FaClock, FaRupeeSign, FaPhoneAlt } from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'
import { blurData } from '@/lib/blurData'
import { useRef } from 'react'

export default function Hero() {
  const statsRef = useRef(null)
  const isInView = useInView(statsRef, { once: true, margin: "-50px" })


  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
      {/* Background Image - Optimized */}
      <div className="absolute inset-0 z-0">
        {/* ponytail: was a CSS background-image, which the preload scanner cannot
            see — it only surfaces after CSS parses, and it skips next/image's
            AVIF/WebP + srcset entirely. That was the 7.1s mobile LCP. */}
        <Image
          src="/images/main-hero.webp"
          alt=""
          fill
          priority
          quality={80}
          sizes="100vw"
          className="object-cover object-center"
          placeholder="blur"
          blurDataURL={blurData['/images/main-hero.webp']}
        />
        {/* Lighter Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/10 via-white/65 to-cyan-50/10" />
      </div>

      {/* Simplified Gradient Orbs - Removed blur for performance */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-400/5 rounded-full pointer-events-none z-[1]" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-400/5 rounded-full pointer-events-none z-[1]" />

      {/* Main Content */}
      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto">
          
          {/* Centered Content */}
          <div className="text-center space-y-5 sm:space-y-6">
            
            {/* Top Badges */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 flex-wrap"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full shadow-lg">
                <FaRocket className="text-base" />
                <span className="text-xs sm:text-sm font-bold">
                  #1 Web Developer in Patiala Punjab
                </span>
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-white rounded-full shadow-lg border-2 border-gray-100">
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
                <span className="text-xs text-gray-500 hidden sm:inline">• on Google</span>
              </div>
            </motion.div>

            {/* Headline */}
            <div className="space-y-2 sm:space-y-3">
              {/* no entrance animation: this is the LCP element. Wrapped in
                  motion with initial opacity 0 it stayed invisible until
                  framer-motion downloaded and hydrated, then waited a further
                  0.15s delay + 0.6s fade - which was most of a 5.8s LCP. */}
              <h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight px-4"
              >
                <span className="block text-gray-900 mb-2">
                  Website Design
                </span>
                
                {/* static, deliberately: RotatingText here cycled 5 strings of
                    different widths inside the H1 - a layout shift every 2.5s,
                    an LCP that waited on client JS, and an H1 that Google saw
                    differently on every crawl */}
                <span className="block mb-2 font-extrabold bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
                  Development &amp; Automation
                </span>

                <span className="block text-gray-900 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                  for Businesses in{' '}
                  <span className="text-blue-600 font-extrabold">Patiala</span>
                </span>
              </h1>
            </div>

            {/* Description */}
            {/* also a LCP candidate on narrow screens - render it immediately */}
            <p
              className="text-sm sm:text-base lg:text-lg text-gray-950 leading-relaxed max-w-3xl mx-auto px-4"
            >
              <strong className="text-blue-600">Web design, development and automation in Patiala.</strong> Client sites
              live from Patiala to Melbourne. Get yours starting at{' '}
              <span className="inline-flex items-baseline gap-2 flex-wrap justify-center">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-blue-600">₹2,999</span>
                <span className="text-base sm:text-lg line-through text-gray-950">₹4,999</span>
              </span>
            </p>

            {/* CTA Buttons - Simplified animations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-2 px-4 flex-wrap"
            >
              <a
                href="tel:+916283380110"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 text-sm sm:text-base"
              >
                <FaPhoneAlt className="text-lg" />
                <span>Call Us</span>
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

            {/* Simplified Stats Cards - NO PARALLAX */}
            <div ref={statsRef} className="pt-6 sm:pt-8 px-4">
              <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-3xl mx-auto">
                {[
                  { icon: FaUsers, value: 15, suffix: '', label: 'Projects', gradient: 'from-blue-50 to-cyan-50', iconGradient: 'from-blue-600 to-cyan-500', textColor: 'text-blue-600', borderColor: 'border-blue-100', delay: 0 },
                  { icon: FaAward, value: 10, suffix: '', label: 'Systems Live', gradient: 'from-green-50 to-emerald-50', iconGradient: 'from-green-600 to-emerald-500', textColor: 'text-green-600', borderColor: 'border-green-100', delay: 0.1 },
                  { icon: FaClock, text: '2-4', label: 'Weeks', gradient: 'from-orange-50 to-red-50', iconGradient: 'from-orange-600 to-red-500', textColor: 'text-orange-600', borderColor: 'border-orange-100', delay: 0.2 }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: stat.delay }}
                    className="relative group"
                  >
                    <div className={`relative bg-gradient-to-br ${stat.gradient} rounded-xl p-3 sm:p-4 border ${stat.borderColor} shadow-md hover:shadow-xl transition-shadow`}>
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${stat.iconGradient} rounded-lg flex items-center justify-center mb-2 shadow-md mx-auto`}>
                        <stat.icon className="text-white text-lg sm:text-xl" />
                      </div>
                      
                      {/* plain number, not CountUp: the animated span renders
                          empty until hydration, which collapsed the slot and
                          shifted layout. Counting 0->15 was not worth that. */}
                      <div className={`text-2xl sm:text-3xl font-extrabold tabular-nums ${stat.textColor} mb-1`}>
                        {stat.text ? stat.text : `${stat.value}${stat.suffix}`}
                      </div>
                      
                      <div className="text-xs sm:text-sm font-semibold text-gray-600">
                        {stat.label}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
