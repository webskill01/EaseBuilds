'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FaRupeeSign, FaTag } from 'react-icons/fa'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-blue-50 pt-4">
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
      <div className="container mx-auto relative z-10 max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          
          {/* Text Content - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center lg:text-left order-1"
          >
            <div className="space-y-4 sm:space-y-5">
              {/* Top Badge */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <motion.span 
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-100 to-blue-100 text-primary-700 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold shadow-sm"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.span 
                    animate={{ rotate: [0, 10, -10, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  >
                    ✨
                  </motion.span>
                  Professional Website Development
                </motion.span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.15] tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <span className="block text-gray-900 mb-2">
                  Grow Your Business with
                </span>
                <span className="block bg-gradient-to-r from-primary-600 via-primary-500 to-blue-600 bg-clip-text text-transparent">
                  Stunning Websites
                </span>
              </motion.h1>

              {/* Eye-Catching Price Banner */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <div className="relative inline-block">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl sm:rounded-2xl blur-lg opacity-40 animate-pulse"></div>
                  
                  <div className="relative bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2.5 sm:px-6 sm:py-3 rounded-xl sm:rounded-2xl shadow-xl">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <motion.div
                        animate={{ rotate: [0, 15, -15, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                      >
                        <FaTag className="text-xl sm:text-2xl" />
                      </motion.div>
                      <div className="text-left">
                        <p className="text-[10px] sm:text-xs font-medium opacity-90 leading-tight">Starting at just</p>
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-2xl sm:text-3xl md:text-4xl font-black">₹2,999</span>
                          <span className="text-sm sm:text-base line-through opacity-75">₹5,999</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Description */}
              <motion.p 
                className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                Expert website developer crafting beautiful, fast websites that turn visitors into customers. 
                Get online in weeks, not months.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start pt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <Link 
                  href="#projects" 
                  className="group btn-primary px-6 py-3 sm:px-7 sm:py-3.5 text-sm sm:text-base font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                >
                  <span className="flex items-center justify-center gap-2">
                    View Our Work
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </Link>
                
                <Link 
                  href="/pricing" 
                  className="group relative btn-secondary px-6 py-3 sm:px-7 sm:py-3.5 text-sm sm:text-base font-semibold rounded-xl border-2 border-gray-300 hover:border-primary-500 hover:bg-primary-50 transition-all duration-300"
                >
                  {/* Discount Badge */}
                  <motion.div
                    initial={{ scale: 0, rotate: -45 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                    className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-orange-500 text-white px-2 py-1 rounded-full shadow-lg"
                  >
                    <span className="text-[9px] sm:text-xs font-bold flex items-center gap-0.5">
                      <FaTag className="text-[8px]" />
                      50% OFF
                    </span>
                  </motion.div>
                  
                  <span className="flex items-center justify-center gap-2">
                    View Pricing
                    <FaRupeeSign className="text-sm group-hover:scale-110 transition-transform" />
                  </span>
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="pt-6 border-t border-gray-200"
              >
                <div className="grid grid-cols-3 gap-2 max-w-md mx-auto lg:mx-0">
                  {[
                    { value: '50+', label: 'Projects', delay: 0.8 },
                    { value: '100%', label: 'Satisfaction', delay: 0.85 },
                    { value: '2-4 Weeks', label: 'Delivery', delay: 0.9 }
                  ].map((stat, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: stat.delay, duration: 0.4 }}
                      className="text-center"
                    >
                      <div className="text-lg sm:text-2xl lg:text-[27px] font-bold bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent mb-1">
                        {stat.value}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-600 font-medium">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Image - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="order-2"
          >
            <div className="relative">
              {/* Decorative elements around image */}
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-6 -right-6 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-primary-400/20 to-blue-400/20 rounded-full blur-2xl"
              />
              <motion.div
                animate={{ 
                  rotate: [360, 0],
                  scale: [1, 1.15, 1]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-6 -left-6 w-28 h-28 sm:w-36 sm:h-36 bg-gradient-to-br from-blue-400/20 to-primary-400/20 rounded-full blur-2xl"
              />

              {/* Main image container */}
              <div className="relative aspect-[4/3] sm:aspect-square rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-900/10 group">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/10 via-transparent to-blue-500/10 z-10 group-hover:from-primary-600/15 transition-all duration-500" />
                
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/30 to-transparent rounded-bl-[100px] z-10" />
                
                <Image
                  src="/images/image4.jpg"
                  alt="Professional website development services showcase"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                  priority
                />

                {/* Floating badge on image */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.6 }}
                  className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-white/95 backdrop-blur-md rounded-xl p-3 sm:p-4 shadow-xl z-20"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs sm:text-sm font-bold text-gray-900 truncate">Website Development</p>
                      <p className="text-[10px] sm:text-xs text-gray-600">Fast, Modern & SEO-Ready</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
