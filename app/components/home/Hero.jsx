'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FaRupeeSign } from 'react-icons/fa'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] sm:min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-blue-50">
      {/* Optimized Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-primary-200 rounded-full opacity-15 blur-3xl"
        />
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            scale: [1, 1.15, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-10 w-40 h-40 sm:w-56 sm:h-56 lg:w-72 lg:h-72 bg-blue-200 rounded-full opacity-15 blur-3xl"
        />
        
        {/* Additional subtle pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(0 0 0) 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }} />
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="container mx-auto relative z-10 max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 lg:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center">
          
          {/* Text Content - 7 columns */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7 text-center lg:text-left"
          >
            <div className="space-y-5 sm:space-y-6 lg:space-y-7">
              {/* Badge with pulse animation */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-block"
              >
                <motion.span 
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-100 to-blue-100 text-primary-700 px-5 py-2.5 rounded-full text-sm font-semibold shadow-sm hover:shadow-md transition-all duration-300 cursor-default"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.span 
                    className="text-base"
                    animate={{ rotate: [0, 10, -10, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  >
                    ✨
                  </motion.span>
                  Your Success is Our Mission
                </motion.span>
              </motion.div>

              {/* Heading with staggered animation */}
              <div className="space-y-2">
                <motion.h1 
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.1] tracking-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  <span className="block text-gray-900 mb-1">Grow Your Business</span>
                  <span className="block bg-gradient-to-r from-primary-600 via-primary-500 to-blue-600 bg-clip-text text-transparent animate-gradient">
                    With a Stunning Website
                  </span>
                </motion.h1>
              </div>

              {/* Description */}
              <motion.p 
                className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                We build beautiful, fast websites that turn visitors into customers. 
                Get online in weeks, not months.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start pt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <Link 
                  href="#contact" 
                  className="group btn-primary px-7 py-3.5 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 active:translate-y-0"
                >
                  <span className="flex items-center justify-center gap-2">
                    View Our Work
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </span>
                </Link>
                <Link 
                  href="/pricing" 
                  className="group btn-secondary px-7 py-3.5 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold rounded-xl border-2 border-gray-300 hover:border-primary-500 hover:bg-primary-50 transition-all duration-300"
                >
                  <span className="flex items-center justify-center gap-2">
                    Check Plans
                    <FaRupeeSign/>
                  </span>
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="pt-6 sm:pt-7 mt-6 sm:mt-7 border-t border-gray-200"
              >
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 sm:gap-8 lg:gap-10">
                  {[
                    { value: '50+', label: 'Happy Clients', delay: 0.7 },
                    { value: '100%', label: 'Satisfaction', delay: 0.8 },
                    { value: 'Fast', label: 'Delivery', delay: 0.9 }
                  ].map((stat, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: stat.delay, duration: 0.4, type: "spring" }}
                      whileHover={{ scale: 1.05 }}
                      className="text-center lg:text-left"
                    >
                      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent mb-1">
                        {stat.value}
                      </div>
                      <div className="text-xs sm:text-sm lg:text-base text-gray-500 font-medium">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Image - 5 columns */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <div className="relative w-full aspect-[4/3] lg:aspect-square rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl ring-1 ring-gray-900/5 hover:shadow-primary-200/50 transition-shadow duration-500 group">
              {/* Enhanced gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/10 via-transparent to-blue-500/10 z-10 pointer-events-none group-hover:from-primary-600/15 transition-colors duration-500" />
              
              {/* Decorative corner accent */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-white/40 to-transparent rounded-full blur-2xl z-10" />
              
              <Image
                src="/images/image4.jpg"
                alt="Professional web development showcase"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 42vw"
                priority
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
