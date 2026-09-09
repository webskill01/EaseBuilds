'use client'

// The one accordion (Task 7.3, 2026-09-09).
//
// Replaces five bespoke FAQ renderers: home/FAQ.jsx, pricing/PricingFAQ.jsx,
// and a hand-rolled item component in each of business-automation,
// lead-management and services/[slug].
//
// Two things here are load-bearing, not style choices:
//
// 1. ANSWERS STAY MOUNTED. They animate to height 0 rather than unmounting.
//    services/[slug] carries FAQPage microdata (itemProp="text") on the answer
//    and Google can only read it if it is in the HTML. The old homepage
//    accordion used AnimatePresence and unmounted closed answers - building
//    the shared component that way would have silently stripped that schema
//    off the service pages. Do not "optimise" this back to conditional render.
//
// 2. THE QUESTION IS AN <h3>. Three of the five originals already used one;
//    the homepage used a <span>. h3 is the better outline and matches what the
//    microdata expects to label.
//
// Schema itself is NOT emitted here. Every consumer already emits its own -
// JSON-LD from a layout.jsx, or the inline microdata below. This component
// only carries the microdata attributes through when asked.

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaChevronDown } from 'react-icons/fa'
import ScrollReveal from '../animations/ScrollReveal'

export default function Accordion({ items = [], microdata = false, className = '' }) {
  const [openIndex, setOpenIndex] = useState(null)

  if (!items.length) return null

  // Only set when the caller asked for it, so pages that emit JSON-LD from
  // their layout do not end up declaring FAQPage twice.
  const questionProps = microdata
    ? { itemScope: true, itemProp: 'mainEntity', itemType: 'https://schema.org/Question' }
    : {}
  const answerProps = microdata
    ? { itemScope: true, itemProp: 'acceptedAnswer', itemType: 'https://schema.org/Answer' }
    : {}

  return (
    <div className={`space-y-3 sm:space-y-4 ${className}`}>
      {items.map((faq, index) => {
        const isOpen = openIndex === index
        return (
          <ScrollReveal key={faq.id ?? index} direction="up" delay={index * 0.03}>
            <article
              className={`rounded-2xl border-2 overflow-hidden transition-colors duration-200 ${
                isOpen ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white'
              }`}
              {...questionProps}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
                className="w-full text-left p-5 sm:p-6 flex justify-between items-center gap-4 hover:bg-blue-50/50 transition-colors duration-200"
              >
                <h3
                  className={`flex-1 text-base sm:text-lg font-semibold leading-relaxed ${
                    isOpen ? 'text-blue-600' : 'text-gray-900'
                  }`}
                  itemProp={microdata ? 'name' : undefined}
                >
                  {faq.question}
                </h3>
                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-200 ${
                    isOpen ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-600'
                  }`}
                >
                  <FaChevronDown className="text-sm sm:text-base" />
                </motion.span>
              </button>

              {/* mounted at all times - see note 1 at the top of this file */}
              <motion.div
                id={`faq-answer-${index}`}
                initial={false}
                animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                transition={{
                  height: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
                  opacity: { duration: 0.25 },
                }}
                className="overflow-hidden"
                {...answerProps}
              >
                <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                  <div className="pt-1 border-t border-gray-100" />
                  <p
                    className="pt-3 sm:pt-4 text-sm sm:text-base text-gray-600 leading-relaxed"
                    itemProp={microdata ? 'text' : undefined}
                  >
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            </article>
          </ScrollReveal>
        )
      })}
    </div>
  )
}
