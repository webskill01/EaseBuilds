'use client'

// Trust band - Google rating and the facts behind the work.
//
// History worth keeping (2026-09-08, Tasks 3.7 + 3.8):
// This was a "Verified Google Reviews" carousel of 10 testimonials, 7 of them
// for businesses with no project anywhere in portfolioData, wearing Google
// branding they had never come from. It was rebuilt as real project cards - but
// Projects.jsx already renders all 5 real projects on this same page, so the
// cards were a duplicate and are gone. What is left is the part Projects does
// not cover: the rating, and the claims behind it.
//
// Every figure here must be checkable. The 5.0 is the real GBP rating - keep it
// accurate or drop it, never round it up. The review COUNT is deliberately not
// shown anywhere on the site: it is currently low enough to work against us.
// Do not reintroduce it, or project/client counts, here.

import { motion } from 'framer-motion'
import { FaStar, FaArrowRight } from 'react-icons/fa'
import ScrollReveal from '../animations/ScrollReveal'
import Link from 'next/link'

const GBP_REVIEW_URL = 'https://g.page/r/CRr3smEiFLXbEBM/review'

const GoogleG = ({ className }) => (
  <svg viewBox="0 0 48 48" className={className}>
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
  </svg>
)

// ponytail: "15" is 5 client websites + 10 automation systems in production -
// the same figure lib/faqData.js and lib/seo.js already state. If that number
// changes, change it in all three or the schema starts contradicting the page.
const STATS = [
  { value: '5.0', label: 'Rated on Google', icon: '⭐' },
  { value: '15', label: 'Projects shipped', icon: '🚀' },
  { value: '2-3 Weeks', label: 'Typical delivery', icon: '⚡' },
  { value: '100%', label: 'Custom-coded, never templates', icon: '🛠️' },
]

export default function ClientReviews() {
  return (
    <section className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">

        <ScrollReveal direction="up" className="text-center mb-8 sm:mb-10">
          <motion.a
            href={GBP_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-2xl shadow-lg border border-gray-200 mb-6 hover:shadow-xl transition-shadow"
          >
            <GoogleG className="w-8 h-8" />
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-lg" />
                ))}
              </div>
              <span className="text-xl font-bold text-gray-900">5.0</span>
            </div>
            <span className="text-sm text-gray-600 font-medium">
              Rated on Google
            </span>
          </motion.a>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Built to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Order
            </span>
            , Not to Template
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Every site is written in React and Next.js from scratch — no page
            builders, no themes. Scroll down and click through to any of them.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {STATS.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="h-full flex justify-center items-center flex-col text-center p-4 sm:p-6 bg-white rounded-xl sm:rounded-2xl shadow-lg border-2 border-gray-100 hover:border-blue-200 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl mb-2">{stat.icon}</div>
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 mb-1 sm:mb-2 leading-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.3}>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center items-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-3 px-5 py-3 bg-white border-2 border-gray-300 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <span className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  See all our work
                </span>
                <FaArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.a
              href={GBP_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-5 py-3 bg-white border-2 border-gray-300 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <GoogleG className="w-6 h-6" />
              <span className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                Write a Google review
              </span>
            </motion.a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
