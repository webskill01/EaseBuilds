'use client'

// Lead Management (EaseBot) - service landing page
// Built in the same visual language as the industry pages: full-bleed hero,
// blue-600 -> cyan-500 gradient accent, glow cards, ScrollReveal sections.

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  FaWhatsapp,
  FaTelegramPlane,
  FaCheck,
  FaPhoneAlt,
  FaArrowRight,
  FaPlus,
  FaMinus,
  FaRegClock,
  FaRupeeSign,
  FaTable,
  FaUsers,
  FaBell,
  FaMobileAlt,
} from 'react-icons/fa'
import ScrollReveal from '@/app/components/animations/ScrollReveal'
import Accordion from '@/app/components/ui/Accordion'
import EaseBotDemo from './EaseBotDemo'
import QuoteForm from '@/app/components/QuoteForm'
import { FEATURES, VERTICALS, FAQS, PRICE, WHATSAPP, STEPS, QUOTE_INTRO } from './data'

const WA_HREF = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
  'Hi EaseBuilds, I would like a price for EaseBot.'
)}`

const HOW = [
  {
    icon: FaWhatsapp,
    title: 'Someone enquires',
    description:
      'Your staff types their name and number into your team group — Rahul 9876543210. That is it.',
  },
  {
    icon: FaTelegramPlane,
    title: 'EaseBot saves it',
    description:
      'Checks if they have enquired before, saves them to your list, and shows your buttons.',
  },
  {
    icon: FaArrowRight,
    title: 'Tap one button',
    description:
      'WhatsApp opens with the message already written and addressed to them. Your staff just hits send.',
  },
]

// ponytail: product facts, not invented metrics. This page ships with no
// client numbers because there are no bot clients yet - see PHASES.md Phase 4.
const FACTS = [
  { icon: FaRupeeSign, value: '1,199', label: 'Per month, whole team' },
  { icon: FaRegClock, value: '30 min', label: 'From signup to running' },
  { icon: FaUsers, value: 'Flat', label: 'Never charged per person' },
  { icon: FaTable, value: 'Yours', label: 'Live Google Sheet you own' },
]


export default function LeadManagementPage() {

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative min-h-[80vh] sm:min-h-[85vh] flex items-center justify-center overflow-hidden pt-8">
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
              <FaTelegramPlane className="text-white text-lg sm:text-xl" />
              <span className="text-sm sm:text-base font-semibold text-white">
                EaseBot &middot; Runs inside Telegram &amp; WhatsApp
              </span>
            </motion.div>

            {/* ponytail: H1 is plain text, not wrapped in motion with an opacity
                start - that is what made the hero H1 the CLS/LCP problem in Phase 2. */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight drop-shadow-lg">
              WhatsApp Lead Management for Small Business
            </h1>

            <h2 className="text-xl sm:text-2xl md:text-3xl text-blue-100 mb-6 font-semibold">
              Every enquiry recorded. Every follow-up remembered.
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed px-4">
              Your staff types a name and number into Telegram — EaseBot saves it, writes the
              WhatsApp message, and reminds you to follow up. Messages go from your own number, so
              your customers see you, not a broadcast. No WhatsApp Business API, no Meta
              verification, no per-message charges.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8">
              <motion.a
                href={WA_HREF}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto btn-whatsapp"
              >
                <FaWhatsapp className="text-lg sm:text-xl" />
                Get My Price
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
              Takes 30 seconds. No call unless you want one.
            </p>
          </div>
        </div>
      </section>

      {/* ── Facts strip ──────────────────────────────────── */}
      <section className="section-padding bg-white border-y border-gray-200">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {FACTS.map((fact, index) => (
              <ScrollReveal key={fact.label} direction="up" delay={index * 0.1}>
                <motion.div
                  className="text-center p-4 sm:p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-100"
                  whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(59, 130, 246, 0.2)' }}
                >
                  <fact.icon className="text-3xl sm:text-4xl text-blue-600 mx-auto mb-2 sm:mb-3" />
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 mb-1 sm:mb-2">
                    {fact.value}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 font-medium">{fact.label}</div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Problem ──────────────────────────────────────── */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <ScrollReveal direction="up">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block text-xs font-bold uppercase tracking-[0.12em] text-blue-600 mb-3">
                The problem
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Your staff writes it on a pad. Then everyone forgets.
              </h2>
              <p className="text-base sm:text-lg text-gray-600">
                Enquiries arrive all day — a walk-in, a phone call, a DM. They get scribbled
                somewhere, and by evening nobody remembers who still needs calling back.{' '}
                <strong className="text-gray-900">You already paid to get those enquiries.</strong>
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Demo ─────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <ScrollReveal direction="up">
            <div className="text-center mb-8 sm:mb-12">
              <span className="inline-block text-xs font-bold uppercase tracking-[0.12em] text-blue-600 mb-3">
                See it working
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Try it yourself
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
                Pick your kind of business, then tap any button. This is exactly what your staff
                sees.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <EaseBotDemo />
          </ScrollReveal>
        </div>
      </section>

      {/* ── How it works ─────────────────────────────────── */}
      <section className="section-padding bg-gradient-to-b from-white to-blue-50">
        <div className="container-custom">
          <ScrollReveal direction="up">
            <div className="text-center mb-8 sm:mb-12">
              <span className="inline-block text-xs font-bold uppercase tracking-[0.12em] text-blue-600 mb-3">
                How it works
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Here&rsquo;s exactly what happens
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
                Three steps. Your staff learns it in one try.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {HOW.map((step, index) => (
              <ScrollReveal key={step.title} direction="up" delay={index * 0.1}>
                <div className="relative group h-full">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300" />
                  <div className="relative bg-white rounded-2xl shadow-xl p-6 sm:p-8 h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                        {index + 1}
                      </span>
                      <step.icon className="text-2xl text-blue-600" />
                    </div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why it works ─────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <ScrollReveal direction="up">
            <div className="text-center mb-8 sm:mb-12">
              <span className="inline-block text-xs font-bold uppercase tracking-[0.12em] text-blue-600 mb-3">
                Why it works
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Your staff will actually use it
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: FaTelegramPlane,
                title: 'Nothing to install',
                body: 'Most business software fails because nobody opens it. EaseBot runs inside Telegram, a free app your team probably already has. No training.',
              },
              {
                icon: FaUsers,
                title: 'Access is the group',
                body: 'Add someone to the team group and they can use it. Remove them and access is gone. That is the whole permission system.',
              },
              {
                icon: FaWhatsapp,
                title: 'Sent from your number',
                body: 'Messages go from your own WhatsApp, tapped by your own staff. Your customers see you, not a broadcast from some platform.',
              },
            ].map((item, index) => (
              <ScrollReveal key={item.title} direction="up" delay={index * 0.1}>
                <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100 p-6 h-full">
                  <item.icon className="text-3xl text-blue-600 mb-4" />
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{item.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── The app ──────────────────────────────────────── */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <ScrollReveal direction="up">
            <div className="text-center mb-8 sm:mb-12">
              <span className="inline-block text-xs font-bold uppercase tracking-[0.12em] text-blue-600 mb-3">
                Same customers, two ways in
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                And a proper app, at your own web address
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
                Some people live in the group chat. Others want to see the whole list. You get both,
                and they are the same thing — a customer added in the group is on the app the same
                second.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: FaMobileAlt,
                title: 'yourname.easebuilds.in',
                body: 'Your name, your colours, your logo. Open it once in Chrome, tap add to home screen, and it sits on the phone like any other app. Add a customer, search the list, work through who is still waiting, open a ready WhatsApp message, read your numbers.',
              },
              {
                icon: FaBell,
                title: 'It taps you on the shoulder',
                body: 'A membership coming up for renewal, a package about to run out — the phone buzzes that morning, even with the app closed. And there is a Today screen listing everything due, so a missed notification is never a missed renewal.',
              },
            ].map((card, index) => (
              <ScrollReveal key={card.title} direction={index === 0 ? 'left' : 'right'}>
                <div className="relative group h-full">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300" />
                  <div className="relative bg-white rounded-2xl shadow-xl p-6 sm:p-8 h-full">
                    <card.icon className="text-3xl text-blue-600 mb-4" />
                    <h3 className="font-bold text-lg text-gray-900 mb-3">{card.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{card.body}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <p className="text-center text-sm text-gray-500 max-w-2xl mx-auto mt-8">
            One price covers all of it. The app is not a bigger plan — it is the same product, on a
            different screen.
          </p>
        </div>
      </section>

      {/* ── Features ─────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <ScrollReveal direction="up">
            <div className="text-center mb-8 sm:mb-12">
              <span className="inline-block text-xs font-bold uppercase tracking-[0.12em] text-blue-600 mb-3">
                What you get
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Everything it does
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-5 max-w-5xl mx-auto">
            {FEATURES.map(([title, body], index) => (
              <ScrollReveal key={title} direction="up" delay={(index % 4) * 0.05}>
                <div className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FaCheck className="w-3 h-3" />
                  </span>
                  <div>
                    <b className="block text-gray-900">{title}</b>
                    <span className="text-sm text-gray-600">{body}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Verticals ────────────────────────────────────── */}
      <section className="section-padding bg-gradient-to-b from-white to-blue-50">
        <div className="container-custom">
          <ScrollReveal direction="up">
            <div className="text-center mb-8 sm:mb-12">
              <span className="inline-block text-xs font-bold uppercase tracking-[0.12em] text-blue-600 mb-3">
                Who it&rsquo;s for
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Works for businesses like yours
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
                Set up around how you actually work — your buttons, your messages, your follow-ups.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {VERTICALS.map(([name, what, Icon], index) => (
              <ScrollReveal key={name} direction="up" delay={(index % 4) * 0.1}>
                <motion.div
                  whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(59, 130, 246, 0.2)' }}
                  className="bg-white rounded-xl border border-blue-100 p-4 sm:p-5 h-full"
                >
                  <span className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 text-white flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5" />
                  </span>
                  <b className="block text-sm sm:text-base text-gray-900 mb-1">{name}</b>
                  <span className="text-xs sm:text-sm text-gray-600">{what}</span>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing ──────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <ScrollReveal direction="up">
            <div className="text-center mb-8 sm:mb-12">
              <span className="inline-block text-xs font-bold uppercase tracking-[0.12em] text-blue-600 mb-3">
                Pricing
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                One price for your whole team
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
                Most systems charge you for every single person who uses them. A team of five ends up
                paying five times over, every month. We don&rsquo;t work like that.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.1}>
            <div className="relative group max-w-md mx-auto">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-300" />
              <div className="relative bg-white rounded-2xl shadow-xl p-8 text-center">
                <div className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 mb-1">
                  &#8377;{PRICE.monthly.toLocaleString('en-IN')}
                </div>
                <p className="text-sm text-gray-500 mb-6">per month &middot; whole team</p>

                <ul className="space-y-3 text-left mb-6">
                  {[
                    'Everyone included. Never per person, however big your team gets.',
                    `Setup ₹${PRICE.setup.toLocaleString('en-IN')} one time — free if you pay yearly.`,
                    'Running in 30 minutes. We write your messages and set up your team.',
                    'No contract. If it isn’t saving you time, stop.',
                  ].map((line) => (
                    <li key={line} className="flex gap-3 text-sm text-gray-700">
                      <span className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                        <FaCheck className="w-2.5 h-2.5" />
                      </span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={WA_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full btn-whatsapp"
                >
                  <FaWhatsapp className="text-lg" />
                  Get My Price
                </a>
                <p className="text-xs text-gray-500 mt-4">{PRICE.note}</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
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
      <section className="section-padding bg-white">
        <div className="container-custom">
          <ScrollReveal direction="up">
            <div className="text-center mb-8 sm:mb-12">
              <span className="inline-block text-xs font-bold uppercase tracking-[0.12em] text-blue-600 mb-3">
                Get your quote
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Five quick questions
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
                Answer these and we&rsquo;ll open WhatsApp with everything filled in. You just hit
                send.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <QuoteForm steps={STEPS} intro={QUOTE_INTRO} whatsapp={WHATSAPP} title="EaseBot" />
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
            Stop losing enquiries to a notepad
          </h2>
          <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto mb-8">
            Tell us how you work and we&rsquo;ll set it up around that. Running the same day.
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
            <motion.a
              href="tel:+916283380110"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/15 backdrop-blur-md border-2 border-white/40 text-white font-bold rounded-xl text-sm sm:text-base"
            >
              <FaPhoneAlt className="text-base sm:text-lg" />
              Call Now
            </motion.a>
            <Link
              href="/services/business-automation"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/15 backdrop-blur-md border-2 border-white/40 text-white font-bold rounded-xl text-sm sm:text-base"
            >
              Need something custom?
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
