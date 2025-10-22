'use client'

// Pricing FAQ Component - SEO Optimized
// EaseBuilds - Best Web Developer in Patiala Punjab India

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronDown, FaPhone, FaPhoneAlt, FaQuestionCircle, FaWhatsapp } from 'react-icons/fa'
import ScrollReveal from '@/app/components/animations/ScrollReveal'

export default function PricingFAQ({ faqs }) {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <section className="py-10 sm:py-12 lg:py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal direction="up" className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-4 sm:mb-6">
            <FaQuestionCircle className="text-blue-600 text-lg sm:text-xl" />
            <span className="text-sm sm:text-base font-semibold text-blue-600">
              Pricing FAQs
            </span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Website Development Pricing{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Questions Answered
            </span>
          </h2>
          
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Common questions about our website development pricing in{' '}
            <strong className="text-gray-900">Patiala Punjab India</strong>
          </p>
        </ScrollReveal>

        {/* FAQ Accordion */}
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, i) => (
            <ScrollReveal
              key={i}
              direction="up"
              delay={i * 0.05}
            >
              <motion.div
                className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 lg:p-6 text-left hover:bg-blue-50/50 transition-colors duration-200 group"
                  aria-expanded={openFaq === i}
                  aria-controls={`faq-answer-${i}`}
                >
                  <span className="font-semibold text-gray-900 text-sm sm:text-base lg:text-lg pr-4 group-hover:text-blue-600 transition-colors">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openFaq === i ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="flex-shrink-0"
                  >
                    <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-colors duration-200 ${
                      openFaq === i 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-blue-100 text-blue-600 group-hover:bg-blue-200'
                    }`}>
                      <FaChevronDown className="text-sm sm:text-base" />
                    </div>
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      id={`faq-answer-${i}`}
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
                      <div className="px-4 sm:px-5 lg:px-6 pb-4 sm:pb-5 lg:pb-6 pt-0">
                        <div className="pt-3 sm:pt-4 border-t border-gray-100">
                          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
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

        {/* Bottom CTA */}
        <ScrollReveal direction="up" delay={0.3} className="text-center mt-8 sm:mt-12">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-6 sm:p-8 shadow-xl">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">
              Still Have Questions?
            </h3>
            <p className="text-sm sm:text-base text-blue-100 mb-4 sm:mb-6 max-w-xl mx-auto">
              Talk to our team about website development pricing in Patiala Punjab India
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
             <motion.a
                                   href="tel:+916283380110"
                                   className="inline-flex items-center justify-center gap-3 px-5 py-3 bg-white text-slate-900 font-bold rounded-xl shadow-2xl hover:shadow-white/50 transition-all text-sm"
                                   whileHover={{ scale: 1.05, y: -3 }}
                                   whileTap={{ scale: 0.95 }}
                                 >
                                   <FaPhoneAlt className="text-xl" />
                                   <span>Call: +91 6283380110</span>
                                 </motion.a>
                                 <motion.a
                                   href="https://wa.me/916283380110?text=Hi%20EaseBuilds,%20I'd%20like%20to%20discuss%20my%20project"
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   className="inline-flex items-center justify-center gap-3 px-5 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl shadow-2xl transition-all text-sm"
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
