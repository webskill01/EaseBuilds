'use client'

// Business Automation - the Cluster C pillar.
// Same visual language as /services/lead-management and the industry pages.

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaPlus,
  FaMinus,
  FaArrowRight,
  FaTable,
  FaBell,
  FaSitemap,
  FaUserCheck,
  FaClipboardList,
} from 'react-icons/fa'
import ScrollReveal from '@/app/components/animations/ScrollReveal'
import Accordion from '@/app/components/ui/Accordion'
import Tabs from '@/app/components/ui/Tabs'
import QuoteForm from '@/app/components/QuoteForm'
import { BUILDS, PROCESS, PROOF, WHY, FAQS, STEPS, QUOTE_INTRO, WHATSAPP } from './data'

const WA_HREF = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(QUOTE_INTRO)}`

// ponytail: the four things this page can say without inventing a client.
const FACTS = [
  { icon: FaClipboardList, value: 'Quoted', label: 'Fixed price, agreed upfront' },
  { icon: FaUserCheck, value: 'Flat', label: 'Never per person or message' },
  { icon: FaTable, value: 'Yours', label: 'Data mirrors to your own sheet' },
  { icon: FaBell, value: 'Daily', label: 'We run EaseBot on ourselves' },
]


export default function BusinessAutomationPage() {

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative hero-viewport flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-600" />
        <div className="absolute inset-0 z-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(circle, white 2px, transparent 2px)',
              backgroundSize: '50px 50px',
            }}
          />
        </div>

        <div className="container-custom relative z-30 py-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full mb-4 sm:mb-6 border border-white/30"
            >
              <FaSitemap className="text-white text-lg sm:text-xl" />
              <span className="text-sm sm:text-base font-semibold text-white">
                Custom automation &middot; Patiala, Punjab
              </span>
            </motion.div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight drop-shadow-lg">
              Business Automation for Small Businesses
            </h1>

            <h2 className="text-xl sm:text-2xl md:text-3xl text-blue-100 mb-6 font-semibold">
              Stop doing by hand what your business could do by itself.
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed px-4">
              The copying between sheets, the follow-ups nobody remembers, the reminder that only
              goes out when someone thinks of it. We build the system that does it — reached through
              WhatsApp, Telegram, or your own web panel.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8">
              <motion.a
                href="#quote"
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-blue-600 font-bold rounded-xl shadow-2xl transition-all text-sm sm:text-base lg:text-lg"
              >
                <FaArrowRight className="text-base sm:text-lg" />
                Get a Quote
              </motion.a>

              <motion.a
                href="tel:+916283380110"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 bg-white/15 backdrop-blur-md border-2 border-white/40 text-white font-bold rounded-xl transition-all text-sm sm:text-base lg:text-lg"
              >
                <FaPhoneAlt className="text-base sm:text-lg" />
                Call Now
              </motion.a>
            </div>

            <p className="text-sm text-white/80">
              Five questions. We quote on what you actually do, not a package.
            </p>
          </div>
        </div>
      </section>

      {/* ── Facts strip ──────────────────────────────────── */}
      <section className="section-padding tone-ink">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 max-w-5xl mx-auto">
            {FACTS.map((fact, index) => (
              <ScrollReveal key={fact.label} direction="up" delay={index * 0.06}>
                <div className="h-full px-5 py-6 sm:px-7 sm:py-8 border-l border-white/10 first:border-l-0 md:border-l">
                  <fact.icon className="text-xl text-sky-400/90 mb-4" aria-hidden="true" />
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold tabular-nums tracking-tight text-white">
                    {fact.value}
                  </div>
                  <div className="mt-2 text-sm leading-snug tone-muted">{fact.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Problem ──────────────────────────────────────── */}
      <section className="section-padding tone-sand">
        <div className="container-custom">
          <ScrollReveal direction="up">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                The work nobody scheduled, that somebody still does
              </h2>
              <p className="text-base sm:text-lg text-gray-600">
                Nobody planned to spend six hours a week copying names into a sheet, chasing who paid,
                and rebuilding the same report. It accumulated. It does not show up as a cost because
                it never gets invoiced &mdash;{' '}
                <strong className="text-gray-900">
                  it shows up as the enquiry nobody called back.
                </strong>
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── What we build ────────────────────────────────── */}
      <section className="section-padding tone-paper">
        <div className="container-custom">
          <ScrollReveal direction="up">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Six things that usually pay for themselves
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
                Most jobs are a mix of these, shaped to how you already work.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {BUILDS.map((b, index) => (
              <ScrollReveal key={b.title} direction="up" delay={(index % 3) * 0.1}>
                <div className="relative group h-full">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300" />
                  <div className="relative bg-white rounded-2xl shadow-xl p-6 h-full flex flex-col">
                    <span className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white flex items-center justify-center mb-4">
                      <b.icon className="w-6 h-6" />
                    </span>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">{b.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed flex-1">
                      {b.body}
                    </p>
                    {b.href && (
                      <Link
                        href={b.href}
                        className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700"
                      >
                        {b.linkText} <FaArrowRight className="w-3 h-3" />
                      </Link>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ──────────────────────────────────────── */}
      <section className="section-padding tone-sand">
        <div className="container-custom">
          <ScrollReveal direction="up">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Four steps, and you know the price at step two
              </h2>
            </div>
          </ScrollReveal>

          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {PROCESS.map((step, index) => (
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

      {/* ── Proof ────────────────────────────────────────── */}
      <section className="section-padding tone-ink">
        <div className="container-custom">
          <ScrollReveal direction="up">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Running systems, not a slide deck
              </h2>
              <p className="text-base sm:text-lg tone-muted max-w-3xl mx-auto">
                We are early in selling this, so here is exactly what exists and who uses it.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {PROOF.map((p, index) => (
              <ScrollReveal key={p.title} direction="up" delay={index * 0.1}>
                <div className="tone-card rounded-2xl border p-6 h-full flex flex-col shadow-[0_12px_32px_-12px_rgba(0,0,0,0.6)]">
                  <span className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-400/25 text-sky-300 flex items-center justify-center mb-4">
                    <p.icon className="w-6 h-6" />
                  </span>
                  <h3 className="font-bold text-lg text-white mb-2">{p.title}</h3>
                  <p className="text-sm sm:text-base tone-muted leading-relaxed flex-1">
                    {p.body}
                  </p>
                  {p.href && (
                    <Link
                      href={p.href}
                      className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-sky-300 hover:text-sky-200"
                    >
                      {p.linkText} <FaArrowRight className="w-3 h-3" />
                    </Link>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why us ───────────────────────────────────────── */}
      <section className="section-padding tone-sand">
        <div className="container-custom">
          <ScrollReveal direction="up">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What makes this different from a subscription
              </h2>
            </div>
          </ScrollReveal>

          <Tabs idPrefix="whyus" items={WHY} />
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <section className="section-padding tone-paper">
        <div className="container-custom">
          <ScrollReveal direction="up">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Things people ask
              </h2>
            </div>
          </ScrollReveal>

          {/* the one accordion, Task 7.3 */}
          <Accordion items={FAQS} className="max-w-3xl mx-auto" />
        </div>
      </section>

      {/* ── Quote ────────────────────────────────────────── */}
      <section id="quote" className="section-padding tone-sand">
        <div className="container-custom">
          <ScrollReveal direction="up">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Five questions and we can price it
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
                Tell us what you do by hand. WhatsApp opens with your answers filled in &mdash; you
                just hit send.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <QuoteForm
              steps={STEPS}
              intro={QUOTE_INTRO}
              whatsapp={WHATSAPP}
              title="EaseBuilds"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* ── Closing CTA ──────────────────────────────────── */}
      <section className="section-padding bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(circle, white 2px, transparent 2px)',
              backgroundSize: '50px 50px',
            }}
          />
        </div>
        <div className="container-custom relative z-10 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Already know what you want automated?
          </h2>
          <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto mb-8">
            Send us one line about it. If it is not worth automating, we will tell you that too.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <motion.a
              href={WA_HREF}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto btn-whatsapp"
            >
              <FaWhatsapp className="text-lg sm:text-xl" />
              WhatsApp Us
            </motion.a>
            <Link
              href="/services/lead-management"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/15 backdrop-blur-md border-2 border-white/40 text-white font-bold rounded-xl text-sm sm:text-base"
            >
              See EaseBot &mdash; from &#8377;1,199/mo
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
