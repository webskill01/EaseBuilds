'use client'

// Optimized FAQ Component

import { FaQuestionCircle } from 'react-icons/fa'
import ScrollReveal from '../animations/ScrollReveal'
import Accordion from '../ui/Accordion'
import faqs from '@/lib/faqData'

export default function FAQ() {
  return (
    <section className="section-padding bg-gradient-to-b from-white to-blue-50 overflow-hidden">
      <div className="container-custom">
        {/* Section Header */}
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
            What it costs, how long it takes, and what you get — answered
            before you have to ask.
          </p>
        </ScrollReveal>

        {/* FAQ Grid - the one accordion, Task 7.3 */}
        <Accordion items={faqs} className="px-2 sm:px-4" />

      </div>
    </section>
  )
}
