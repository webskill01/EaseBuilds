'use client'

// Pricing FAQ Component - SEO Optimized
// EaseBuilds - Best Web Developer in Patiala Punjab India

import { FaQuestionCircle } from 'react-icons/fa'
import ScrollReveal from '@/app/components/animations/ScrollReveal'
import Accordion from '@/app/components/ui/Accordion'

export default function PricingFAQ({ faqs }) {
  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
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

        {/* FAQ Accordion - the one accordion, Task 7.3 */}
        <Accordion items={faqs} />
      </div>
    </section>
  )
}
