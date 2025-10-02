'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaRocket, FaCheckCircle, FaHeadset } from 'react-icons/fa'

export default function CTA() {
  return (
    <section className="relative py-12 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      {/* Dot Pattern */}
      <div className="absolute inset-0 opacity-[0.07]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(255 255 255) 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }} />
      </div>

      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-block mb-5 sm:mb-6"
          >
            <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-xs sm:text-sm font-bold border border-white/30">
              🚀 Limited Time Offer
            </span>
          </motion.div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 sm:mb-5 leading-tight">
            Ready to Grow Your<br className="hidden sm:block" /> Business Online?
          </h2>
          
          {/* Description */}
          <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
            Join 50+ successful businesses that trusted us with their online presence
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-10 sm:mb-12">
            <Link
              href="#contact"
              className="group bg-white text-primary-700 hover:bg-primary-50 font-bold py-3 px-7 sm:py-3.5 sm:px-9 rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 text-sm sm:text-base w-full sm:w-auto"
            >
              Get Your Free Quote
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <Link
              href="#projects"
              className="group bg-transparent border-2 border-white/80 text-white hover:bg-white hover:text-primary-700 font-bold py-3 px-7 sm:py-3.5 sm:px-9 rounded-xl transition-all duration-300 text-sm sm:text-base backdrop-blur-sm w-full sm:w-auto"
            >
              View Our Work
            </Link>
          </div>

          {/* Trust Indicators - Compact Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 lg:gap-10"
          >
            <div className="flex items-center gap-2.5 text-white">
              <div className="w-10 h-10 sm:w-11 sm:h-11 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                <FaRocket className="text-lg sm:text-xl text-white" />
              </div>
              <div className="text-left">
                <div className="text-xl sm:text-2xl font-extrabold leading-tight">2-4 Weeks</div>
                <div className="text-[10px] sm:text-xs text-white/80 font-medium">Fast Delivery</div>
              </div>
            </div>

            <div className="hidden sm:block w-px h-10 bg-white/30" />

            <div className="flex items-center gap-2.5 text-white">
              <div className="w-10 h-10 sm:w-11 sm:h-11 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                <FaCheckCircle className="text-lg sm:text-xl text-white" />
              </div>
              <div className="text-left">
                <div className="text-xl sm:text-2xl font-extrabold leading-tight">100%</div>
                <div className="text-[10px] sm:text-xs text-white/80 font-medium">Satisfaction</div>
              </div>
            </div>

            <div className="hidden sm:block w-px h-10 bg-white/30" />

            <div className="flex items-center gap-2.5 text-white">
              <div className="w-10 h-10 sm:w-11 sm:h-11 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                <FaHeadset className="text-lg sm:text-xl text-white" />
              </div>
              <div className="text-left">
                <div className="text-xl sm:text-2xl font-extrabold leading-tight">24/7</div>
                <div className="text-[10px] sm:text-xs text-white/80 font-medium">Support</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
