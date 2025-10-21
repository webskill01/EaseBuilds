'use client'

// Enhanced CTA Section - Mobile-First with Advanced Animations
// EaseBuilds - Best Web Developer in Patiala Punjab India

import { motion, useScroll, useTransform } from 'framer-motion'
import { FaPhone, FaWhatsapp, FaEnvelope, FaRocket, FaStar, FaCheckCircle } from 'react-icons/fa'
import Link from 'next/link'
import ScrollReveal from '../animations/ScrollReveal'
import { useRef } from 'react'

export default function CTA() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  return (
    <section 
      ref={sectionRef}
      className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        {/* Floating shapes with parallax */}
        <motion.div 
          style={{ y }}
          className="absolute top-10 left-10 w-32 h-32 sm:w-48 sm:h-48 bg-white/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
          className="absolute bottom-10 right-10 w-40 h-40 sm:w-64 sm:h-64 bg-cyan-300/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1
          }}
        />
        
        {/* Grid pattern overlay */}
        <motion.div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle at 20px 20px, white 2px, transparent 0)',
            backgroundSize: '40px 40px'
          }}
          animate={{
            backgroundPosition: ['0px 0px', '40px 40px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
      </div>

      <motion.div 
        className="container-custom relative z-10"
        style={{ opacity }}
      >
        <div className="max-w-5xl mx-auto">
          
          {/* Badge with Animation */}
          <ScrollReveal direction="up">
            <motion.div
              className="flex justify-center mb-4 sm:mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-white/20 backdrop-blur-md rounded-full border border-white/30 shadow-lg">
                <motion.div
                  animate={{ 
                    rotate: [0, 15, -15, 0],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                >
                  <FaRocket className="text-white text-lg sm:text-xl" />
                </motion.div>
                <span className="text-sm sm:text-base font-bold text-white">
                  Limited Time Offer - Start Today!
                </span>
              </div>
            </motion.div>
          </ScrollReveal>

          {/* Main Heading with Stagger Animation */}
          <ScrollReveal direction="up" delay={0.1}>
            <h2 id="cta-heading" className="text-center mb-4 sm:mb-6">
              <motion.span 
                className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Ready to Transform Your
              </motion.span>
              <motion.span 
                className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="text-white">Business in </span>
                <span className="inline-block bg-white text-blue-600 px-3 sm:px-4 rounded-xl">
                  Patiala?
                </span>
              </motion.span>
            </h2>
          </ScrollReveal>

          {/* Subheading */}
          <ScrollReveal direction="up" delay={0.2}>
            <p className="text-center text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 mb-6 sm:mb-8 max-w-3xl mx-auto px-4 leading-relaxed">
              Professional website development starting at just{' '}
              <motion.span 
                className="inline-block text-2xl sm:text-3xl md:text-4xl font-bold text-white bg-white/10 px-3 sm:px-4 py-1 rounded-lg"
                whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
              >
                ₹2,999
              </motion.span>
            </p>
          </ScrollReveal>

          {/* Enhanced Feature Cards */}
          <ScrollReveal direction="up" delay={0.3}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-10 lg:mb-12 max-w-4xl mx-auto px-4">
              {[
                { icon: '⚡', text: 'Fast 2-4 Week Delivery', gradient: 'from-yellow-400 to-orange-500' },
                { icon: '✅', text: '100% Satisfaction Guaranteed', gradient: 'from-green-400 to-emerald-500' },
                { icon: '🎁', text: 'Free Hosting & Support', gradient: 'from-purple-400 to-pink-500' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="relative bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-white/20 shadow-lg overflow-hidden">
                    {/* Gradient overlay on hover */}
                    <motion.div 
                      className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                      aria-hidden="true"
                    />
                    
                    <div className="relative flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-center sm:text-left">
                      <motion.span 
                        className="text-3xl sm:text-4xl"
                        animate={{
                          rotate: [0, 10, -10, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'easeInOut',
                          delay: index * 0.3
                        }}
                      >
                        {item.icon}
                      </motion.span>
                      <span className="text-sm sm:text-base font-bold text-white leading-tight">
                        {item.text}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>

          {/* Enhanced CTA Buttons */}
          <ScrollReveal direction="up" delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch mb-6 sm:mb-8 px-4 max-w-3xl mx-auto">
              <motion.a
                href="tel:+916283380110"
                className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 lg:px-10 py-4 sm:py-5 bg-white text-blue-600 font-bold rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden text-sm sm:text-base lg:text-lg"
                whileHover={{ scale: 1.05, y: -3, boxShadow: '0 25px 50px rgba(0,0,0,0.3)' }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-50 to-cyan-50"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <FaPhone className="relative z-10 text-lg sm:text-xl group-hover:rotate-12 transition-transform" />
                <span className="relative z-10">Call +91 6283380110</span>
              </motion.a>

              <motion.a
                href="https://wa.me/916283380110?text=Hi%20EaseBuilds%2C%20I%20want%20to%20build%20a%20professional%20website%20for%20my%20business%20in%20Patiala"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 lg:px-10 py-4 sm:py-5 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden text-sm sm:text-base lg:text-lg"
                whileHover={{ scale: 1.05, y: -3, boxShadow: '0 25px 50px rgba(0,0,0,0.3)' }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                >
                  <FaWhatsapp className="text-xl sm:text-2xl" />
                </motion.div>
                <span>WhatsApp Now</span>
              </motion.a>
            </div>
          </ScrollReveal>

          {/* Secondary Actions */}
          <ScrollReveal direction="up" delay={0.5}>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center items-center text-sm sm:text-base mb-8 sm:mb-10 px-4">
              <motion.a
                href="mailto:info@easebuilds.in"
                className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors group"
                whileHover={{ scale: 1.05 }}
              >
                <FaEnvelope className="text-base sm:text-lg group-hover:rotate-12 transition-transform" />
                <span className="font-medium">info@easebuilds.in</span>
              </motion.a>
              
              <span className="hidden sm:inline text-blue-200/50">•</span>
              
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors font-semibold group"
              >
                <span>View Pricing Plans</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </Link>
            </div>
          </ScrollReveal>

          {/* Enhanced Trust Section */}
          <ScrollReveal direction="up" delay={0.6}>
            <div className="pt-6 sm:pt-8 lg:pt-10 border-t border-white/20">
              {/* Social Proof */}
              <motion.div 
                className="flex flex-col items-center gap-3 sm:gap-4 mb-4 sm:mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <motion.div
                        key={i}
                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 border-2 border-white flex items-center justify-center text-white text-xs sm:text-sm font-bold shadow-lg"
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8 + i * 0.1, type: 'spring' }}
                      >
                        {String.fromCharCode(64 + i)}
                      </motion.div>
                    ))}
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1.3 + i * 0.05, type: 'spring' }}
                      >
                        <FaStar className="text-yellow-300 text-sm sm:text-base" />
                      </motion.div>
                    ))}
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-blue-100 font-medium text-center">
                  Trusted by <strong className="text-white">50+ businesses</strong> in Patiala
                </p>
              </motion.div>

              {/* Industry Tags */}
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                {['Dental Clinics', 'Architects', 'Coaching', 'E-commerce', 'Manufacturing'].map((industry, idx) => (
                  <motion.span
                    key={idx}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur-sm rounded-full text-xs sm:text-sm text-white/90 font-medium border border-white/20 hover:bg-white/20 transition-all cursor-default"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.5 + idx * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    {industry}
                  </motion.span>
                ))}
              </div>
            </div>
          </ScrollReveal>

        </div>
      </motion.div>
    </section>
  )
}
