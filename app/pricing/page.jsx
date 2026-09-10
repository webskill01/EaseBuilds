'use client'

// /pricing - "how pricing works", not a package menu (Task 7.10, 2026-09-09).
//
// The URL is kept deliberately. It has drawn more impressions than any page on
// this site except the homepage and /services/seo-services, and it is one of the
// few that has ever earned a click - so deleting it to remove the tier tables
// would have thrown away the traffic along with the problem.
//
// What went: the three-tier comparison table, the PricingCard tier grid with its
// add-on calculator, and the countdown "FOMO" banner. The banner was a fake
// deadline, which fails the project's rule that every published number has to be
// checkable. Their components and the useFomoCountdown hook were deleted with
// them - nothing else imported any of it.
//
// Note the page used to render `faqs.slice(0, 6)` from faqData, i.e. the
// HOMEPAGE FAQs, while lib/pricingData exported an unused pricingFAQs. It now
// renders the pricing ones.

import { motion } from 'framer-motion'
import {
  FaStar, FaWhatsapp, FaCheck, FaRupeeSign,
  FaBoltLightning, FaLock, FaRobot,
} from 'react-icons/fa6'
import { FaCheckCircle, FaPhoneAlt } from 'react-icons/fa'
import Link from 'next/link'
import ScrollReveal from '../components/animations/ScrollReveal'
import GridBackground from '../components/animations/GridBackground'
import PricingFAQ from './components/PricingFAQ'
import {
  ENTRY_PRICE, MAINTENANCE_MONTHLY, EASEBOT_MONTHLY,
  PRICE_DRIVERS, ALWAYS_INCLUDED, QUOTE_STEPS, pricingFAQs,
} from '@/lib/pricingData'

const rupees = (n) => `₹${n.toLocaleString('en-IN')}`

const WA_HREF =
  'https://wa.me/916283380110?text=' +
  encodeURIComponent('Hi EaseBuilds, I would like a price for a website.')

export default function PricingPage() {
  return (
    <main className="pt-10">
      {/* ── What it costs ─────────────────────────────────── */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <ScrollReveal direction="up">
            <div className="max-w-3xl mx-auto text-center">
              {/* the 5.0 rating is fine to show; the review count is not */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md mb-6">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-sm" />
                  ))}
                </div>
                <span className="text-sm font-semibold text-gray-900">5.0 on Google</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-5">
                <span className="text-gray-900">What a website </span>
                <span className="gradient-text">actually costs</span>
              </h1>

              <p className="text-base sm:text-lg text-gray-600 mb-8">
                Builds start at{' '}
                <strong className="text-gray-900">{rupees(ENTRY_PRICE)}</strong>. There is no
                package ladder above that, because the real number depends on what you
                are building. Tell us what you need and you get one fixed figure for
                your actual scope &mdash; agreed before any work starts.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={WA_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto btn-whatsapp"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  Get a price on WhatsApp
                </a>
                <a href="tel:+916283380110" className="w-full sm:w-auto btn-secondary">
                  <FaPhoneAlt className="w-4 h-4" />
                  Call Us
                </a>
              </div>

              <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-xs sm:text-sm mt-8">
                {[
                  { icon: <FaRupeeSign />, text: 'One figure, agreed up front' },
                  { icon: <FaBoltLightning />, text: '2-3 week delivery' },
                  { icon: <FaLock />, text: 'You own the code' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-600">
                    <span className="text-base sm:text-lg text-blue-600">{item.icon}</span>
                    <span className="font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── What moves the number ─────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <ScrollReveal direction="up">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                What moves the number
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                Four things decide what a build costs. None of them is a tier you have to
                pick from.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {PRICE_DRIVERS.map((d, index) => (
              <ScrollReveal key={d.title} direction="up" delay={(index % 2) * 0.1}>
                <div className="card h-full">
                  <span className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white flex items-center justify-center font-bold text-lg mb-4">
                    {index + 1}
                  </span>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{d.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{d.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Included regardless ───────────────────────────── */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal direction="up">
              <div className="text-center mb-10">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                  In every build, at any price
                </h2>
                <p className="text-base sm:text-lg text-gray-600">
                  These are not upgrades. A cheap site that skips them is not cheaper, it
                  is unfinished.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
              {ALWAYS_INCLUDED.map((item, index) => (
                <ScrollReveal key={item} direction="up" delay={(index % 2) * 0.05}>
                  <div className="flex gap-3 items-start">
                    <span className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                      <FaCheck className="w-3 h-3" />
                    </span>
                    <span className="text-gray-700">{item}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── The two monthly prices ────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <ScrollReveal direction="up">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                The two things that do have a fixed price
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                Both are optional, and both are the same price for everyone.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <ScrollReveal direction="up">
              <div className="card h-full flex flex-col">
                <span className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                  <FaCheckCircle className="w-6 h-6" />
                </span>
                <h3 className="font-bold text-lg text-gray-900 mb-1">Website maintenance</h3>
                <p className="text-2xl font-extrabold text-blue-600 mb-3">
                  {rupees(MAINTENANCE_MONTHLY)}
                  <span className="text-base font-semibold text-gray-500">/month</span>
                </p>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed flex-1">
                  Content updates, security patches, backups and uptime monitoring. Plenty
                  of clients do not take it, and that is fine &mdash; you own the site
                  either way.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.1}>
              <div className="card h-full flex flex-col">
                <span className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                  <FaRobot className="w-6 h-6" />
                </span>
                <h3 className="font-bold text-lg text-gray-900 mb-1">EaseBot lead management</h3>
                <p className="text-2xl font-extrabold text-blue-600 mb-3">
                  from {rupees(EASEBOT_MONTHLY)}
                  <span className="text-base font-semibold text-gray-500">/month</span>
                </p>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed flex-1">
                  Records every enquiry, writes the follow-up and reminds you before a
                  renewal is due. For the whole team, not per person.
                </p>
                <Link href="/services/lead-management" className="btn-ghost mt-4 self-start">
                  See how it works
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── How a quote happens ───────────────────────────── */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <ScrollReveal direction="up">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                How you get a number
              </h2>
            </div>
          </ScrollReveal>

          <ol className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {QUOTE_STEPS.map((step, index) => (
              <ScrollReveal key={step.title} direction="up" delay={index * 0.1}>
                <li className="bg-white rounded-2xl border border-blue-100 p-6 h-full">
                  <span className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white flex items-center justify-center font-bold text-lg mb-4">
                    {index + 1}
                  </span>
                  <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.body}</p>
                </li>
              </ScrollReveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────── */}
      <PricingFAQ faqs={pricingFAQs} />

      {/* ── Closing CTA ───────────────────────────────────── */}
      <section className="section-padding bg-gradient-to-br from-blue-600 to-cyan-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <GridBackground
            dotColor="rgba(255, 255, 255, 0.5)"
            lineColor="rgba(255, 255, 255, 0.1)"
            gridSize={60}
            animated
          />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Tell us what you are building
            </h2>
            <p className="text-blue-100 mb-8 text-sm sm:text-base">
              Describe it in a message and you will get a real figure back, from the
              person who would build it.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <motion.a
                href={WA_HREF}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto btn-whatsapp"
              >
                <FaWhatsapp className="w-5 h-5" />
                Message on WhatsApp
              </motion.a>
              <Link href="/contact" className="w-full sm:w-auto btn border-2 border-white/70 text-white hover:bg-white/10">
                Use the contact form
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
