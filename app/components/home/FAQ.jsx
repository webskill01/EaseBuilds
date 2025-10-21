'use client'

// FAQ Component with Schema Markup - Mobile-First Design
// ReactBits-style animations optimized for mobile scroll

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronDown, FaPhone, FaQuestionCircle, FaWhatsapp } from 'react-icons/fa'
import ScrollReveal from '../animations/ScrollReveal'
import faqs from '@/lib/faqData'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-8 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
      <div className="container-custom">
        {/* Section Header - Mobile First */}
        <ScrollReveal direction="up" className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-4 sm:mb-6">
            <FaQuestionCircle className="text-blue-600 text-lg sm:text-xl" />
            <span className="text-sm sm:text-base font-semibold text-blue-600">
              Got Questions?
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Frequently Asked{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Questions
            </span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Everything you need to know about the{' '}
            <span className="font-semibold text-blue-600">
              best web developer in Patiala 
            </span>
          </p>
        </ScrollReveal>

        {/* FAQ Grid - Mobile Optimized */}
        <div className=" w-full mx-auto space-y-3 sm:space-y-4 px-2 sm:px-4">
          {faqs.slice(0, 10).map((faq, index) => (
            <ScrollReveal
              key={faq.id}
              direction="up"
              delay={index * 0.05}
              className="w-full"
            >
              <motion.div
                className="bg-white rounded-xl sm:rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                {/* Question Button - Mobile Touch Optimized */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 flex items-start sm:items-center justify-between gap-3 sm:gap-4 text-left hover:bg-blue-50/50 transition-colors duration-200"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 leading-relaxed flex-1 pr-2">
                    {faq.question}
                  </span>
                  
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="flex-shrink-0 mt-1 sm:mt-0"
                  >
                    <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-colors duration-200 ${
                      openIndex === index 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-blue-100 text-blue-600'
                    }`}>
                      <FaChevronDown className="text-sm sm:text-base" />
                    </div>
                  </motion.div>
                </button>

                {/* Answer - Animated Expand/Collapse */}
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ 
                        height: 'auto', 
                        opacity: 1,
                        transition: {
                          height: { duration: 0.3, ease: 'easeOut' },
                          opacity: { duration: 0.2, delay: 0.1 }
                        }
                      }}
                      exit={{ 
                        height: 0, 
                        opacity: 0,
                        transition: {
                          height: { duration: 0.3, ease: 'easeIn' },
                          opacity: { duration: 0.15 }
                        }
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 sm:px-6 lg:px-8 pb-4 sm:pb-5 lg:pb-6 pt-0">
                        <div className="pt-3 sm:pt-4 border-t border-gray-100">
                          <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA Section - Mobile Optimized */}
        <ScrollReveal direction="up" delay={0.5} className="text-center mt-8 sm:mt-12 lg:mt-16 px-4">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">
              Still Have Questions?
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-blue-100 mb-4 sm:mb-6 max-w-2xl mx-auto">
              Get in touch with the best web development company in Patiala
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <motion.a
                      href="tel:+916283380110"
                      className="inline-flex items-center justify-center gap-3 px-5 py-3 bg-white text-blue-600 font-bold rounded-xl shadow-2xl hover:shadow-white/50 transition-all text-lg w-full sm:w-auto"
                      whileHover={{ scale: 1.05, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaPhone className="text-xl" />
                      <span>Call Now</span>
                    </motion.a>
                    <motion.a
                      href="https://wa.me/916283380110?text=Hi%20EaseBuilds,%20I'd%20like%20to%20discuss%20my%20project"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-3 px-5 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl shadow-2xl transition-all text-lg w-full sm:w-auto"
                      whileHover={{ scale: 1.05, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaWhatsapp className="text-2xl" />
                      <span>WhatsApp Us</span>
                    </motion.a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
