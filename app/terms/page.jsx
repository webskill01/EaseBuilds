'use client'

// Terms of Service Page - EaseBuilds
// Comprehensive, Legally Sound, Light Overlay, Well-Structured

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { 
  FaFileContract,
  FaHandshake,
  FaMoneyBillWave,
  FaShieldAlt,
  FaCopyright,
  FaBan,
  FaExclamationTriangle,
  FaPhone,
  FaEnvelope,
  FaCalendarAlt,
  FaCheck,
  FaBalanceScale,
  FaLock,
  FaBuilding,
  FaCreditCard,
  FaAndroid,
  FaPhoneSquare,
  FaMobile,
  FaPhoneAlt
} from 'react-icons/fa'
import ScrollReveal from '@/app/components/animations/ScrollReveal'
import HeroImage from '../components/HeroImage'

export default function TermsPage() {
  const lastUpdated = 'January 1, 2025'
  const effectiveDate = 'January 1, 2024'

  return (
    <>

      {/* Hero Section - Light Overlay */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-10">
        <div className="absolute inset-0 z-0">
          <HeroImage
            src="/images/terms-hero.jpg"
            alt="Terms of Service"
          />
        </div>
          {/* Light Brand Overlay */}
           <div className="absolute inset-0 bg-gradient-to-br from-gray-800/60 via-gray-700/50 to-gray-900/60" />
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle, white 2px, transparent 2px)',
                backgroundSize: '50px 50px'
              }} />
          </div>

        <div className="container-custom relative z-10 py-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full mb-6 border border-white/30"
            >
              <FaFileContract className="text-white text-lg" />
              <span className="text-sm font-semibold text-white">
                Legal Agreement
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight"
            >
              Terms of Service
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-white/95 mb-6 max-w-2xl mx-auto"
            >
              Please read these terms carefully before using our web development services
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 justify-center text-sm"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/20 backdrop-blur-sm rounded-xl border border-white/30">
                <FaCalendarAlt className="text-white" />
                <span className="text-white font-medium">
                  Effective: {effectiveDate}
                </span>
              </div>
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/20 backdrop-blur-sm rounded-xl border border-white/30">
                <FaCalendarAlt className="text-white" />
                <span className="text-white font-medium">
                  Updated: {lastUpdated}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Table of Contents - Sticky */}
      <section className="sticky top-14 sm:top-16 z-40 py-3 bg-white border-b-2 border-gray-200 shadow-sm">
        <div className="container-custom">
          <ScrollReveal direction="up">
            <nav className="flex flex-wrap gap-3 justify-center">
              {[
                { title: 'Overview', href: '#overview' },
                { title: 'Services', href: '#services' },
                { title: 'Payment', href: '#payment' },
                { title: 'Refunds', href: '#refunds' },
                { title: 'IP Rights', href: '#intellectual-property' },
                { title: 'Warranties', href: '#warranties' },
                { title: 'Liability', href: '#liability' },
                { title: 'Contact', href: '#contact' }
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 text-sm font-semibold text-gray-700 bg-gray-100 rounded-lg hover:bg-blue-100 hover:text-blue-700 transition-all"
                >
                  {item.title}
                </motion.a>
              ))}
            </nav>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Content */}
      <div className="bg-gradient-to-b from-white via-gray-50 to-white">
        
        {/* Overview */}
        <section id="overview" className="py-10">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              
              {/* Key Principles */}
              <ScrollReveal direction="up">
                <div className="grid sm:grid-cols-3 gap-6 mb-12">
                  {[
                    {
                      icon: FaHandshake,
                      title: 'Fair Agreement',
                      description: 'Transparent terms protecting both parties',
                      gradient: 'from-blue-500 to-cyan-500'
                    },
                    {
                      icon: FaBalanceScale,
                      title: 'Legal Protection',
                      description: 'Compliant with Indian business laws',
                      gradient: 'from-green-500 to-emerald-500'
                    },
                    {
                      icon: FaLock,
                      title: 'Your Rights',
                      description: 'Clear rights and responsibilities',
                      gradient: 'from-purple-500 to-pink-500'
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ y: -5 }}
                      className="bg-white p-6 rounded-2xl border-2 border-gray-200 shadow-sm"
                    >
                      <div className={`w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                        <item.icon className="text-white text-2xl" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">{item.title}</h3>
                      <p className="text-gray-600 text-sm text-center">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              </ScrollReveal>

              {/* Introduction */}
              <ScrollReveal direction="up">
                <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Agreement to Terms</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    These Terms of Service ("Terms") constitute a legally binding agreement between you 
                    ("Client," "you," or "your") and EaseBuilds ("we," "our," or "us") regarding your 
                    use of our web development services available at <strong>easebuilds.in</strong>.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    By engaging our services, you acknowledge that you have read, understood, and agree 
                    to be bound by these Terms. If you do not agree with these Terms, please do not use 
                    our services.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Services Provided */}
        <section id="services" className="py-5 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <ScrollReveal direction="up">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                    <FaHandshake className="text-white text-xl" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">1. Services Provided</h2>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up">
                <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 shadow-sm space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">1.1 Service Offerings</h3>
                    <p className="text-gray-700 mb-4">EaseBuilds provides the following web development services:</p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {[
                        'Custom website design and development',
                        'E-commerce website development',
                        'Search Engine Optimization (SEO)',
                        'Website maintenance and support',
                        'Website hosting setup assistance',
                        'Domain registration guidance'
                      ].map((service, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <FaCheck className="text-green-500 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">1.2 Service Scope</h3>
                    <p className="text-gray-700">
                      The specific scope of work will be detailed in a separate project proposal or 
                      service agreement. We will deliver services according to mutually agreed specifications, 
                      timelines, and deliverables.
                    </p>
                  </div>

                  <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
                    <p className="text-sm text-blue-800">
                      <strong>Note:</strong> Any services not explicitly mentioned in your service agreement 
                      are not covered and may require additional fees.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Payment Terms */}
        <section id="payment" className="py-5">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <ScrollReveal direction="up">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
                    <FaMoneyBillWave className="text-white text-xl" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">2. Payment Terms</h2>
                </div>
              </ScrollReveal>

              <div className="space-y-6">
                <ScrollReveal direction="up">
                  <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 shadow-sm">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">2.1 Pricing & Payment Schedule</h3>
                    <ul className="space-y-3">
                      {[
                        'All prices are quoted in Indian Rupees (₹) unless otherwise specified',
                        'Payment schedule: 50% advance, 50% upon project completion',
                        'For monthly services: Payment due at the beginning of each billing cycle',
                        'Prices are subject to change with 30 days notice for ongoing services'
                      ].map((term, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{term}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>

                <ScrollReveal direction="up">
                  <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 shadow-sm">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">2.2 Payment Methods</h3>
                    <p className="text-gray-700 mb-4">We accept the following payment methods:</p>
                    <div className="grid sm:grid-cols-3 gap-4">
                      {[
                        { method: 'Bank Transfer', icon: <FaBuilding/> },
                        { method: 'UPI/PhonePe', icon: <FaMobile/> },
                        { method: 'Online Payment', icon: <FaCreditCard/> }
                      ].map((payment, index) => (
                        <div key={index} className="p-4 bg-gray-50 rounded-xl border flex flex-col items-center border-gray-200 text-center">
                          <div className="text-3xl mb-2">{payment.icon}</div>
                          <p className="font-semibold text-gray-900">{payment.method}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal direction="up">
                  <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 shadow-sm">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">2.3 Late Payments</h3>
                    <p className="text-gray-700">
                      Invoices not paid within 7 days of the due date may incur a late fee of 2% per month. 
                      We reserve the right to suspend services until payment is received. Projects will not 
                      be delivered until full payment is made.
                    </p>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* Refund Policy */}
        <section id="refunds" className="py-5 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <ScrollReveal direction="up">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-red-500 rounded-xl flex items-center justify-center shadow-lg">
                    <FaMoneyBillWave className="text-white text-xl" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">3. Refund & Cancellation Policy</h2>
                </div>
              </ScrollReveal>

              <div className="space-y-6">
                <ScrollReveal direction="up">
                  <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 shadow-sm">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">3.1 Refund Eligibility</h3>
                    <p className="text-gray-700 mb-4">Refunds may be provided in the following circumstances:</p>
                    <ul className="space-y-3">
                      {[
                        'Project cancellation before work begins: 100% refund minus processing fees',
                        'Service failure due to our fault: Partial or full refund based on work completed',
                        'Dissatisfaction after initial review: Revisions provided, refund not guaranteed'
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <FaCheck className="text-blue-600 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>

                <ScrollReveal direction="up">
                  <div className="bg-red-50 p-6 rounded-2xl border-2 border-red-200">
                    <div className="flex items-start gap-3">
                      <FaExclamationTriangle className="text-red-600 text-2xl flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-bold text-red-900 mb-3">3.2 No Refund Scenarios</h3>
                        <p className="text-red-800 mb-3">Refunds will NOT be provided for:</p>
                        <ul className="space-y-2">
                          {[
                            'Change of mind after work has started',
                            'Completed projects that meet agreed specifications',
                            'Third-party services (hosting, domains, plugins)',
                            'Delayed projects due to client non-responsiveness'
                          ].map((item, index) => (
                            <li key={index} className="flex items-start gap-2 text-red-800">
                              <FaBan className="mt-1 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* Intellectual Property */}
        <section id="intellectual-property" className="py-5">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <ScrollReveal direction="up">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                    <FaCopyright className="text-white text-xl" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">4. Intellectual Property Rights</h2>
                </div>
              </ScrollReveal>

              <div className="space-y-6">
                <ScrollReveal direction="up">
                  <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 shadow-sm">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">4.1 Client Ownership</h3>
                    <p className="text-gray-700">
                      Upon full payment, you will own all rights to the final deliverables including 
                      custom designs, code, and content created specifically for your project. This 
                      includes source files, graphics, and website code.
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal direction="up">
                  <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 shadow-sm">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">4.2 Third-Party Components</h3>
                    <p className="text-gray-700 mb-4">
                      Your website may include third-party components such as:
                    </p>
                    <ul className="space-y-2">
                      {[
                        'Open-source frameworks and libraries (React, Next.js, etc.)',
                        'Stock photos and icons (if used)',
                        'Third-party plugins and integrations'
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <FaCheck className="text-blue-600 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-gray-700 mt-4">
                      These components retain their original licenses and are not owned by you or us.
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal direction="up">
                  <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 shadow-sm">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">4.3 Portfolio Rights</h3>
                    <p className="text-gray-700">
                      We reserve the right to display your completed website in our portfolio, case studies, 
                      and marketing materials unless you explicitly request otherwise. We will credit your 
                      business appropriately.
                    </p>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* Warranties & Disclaimers */}
        <section id="warranties" className="py-5 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <ScrollReveal direction="up">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                    <FaShieldAlt className="text-white text-xl" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">5. Warranties & Support</h2>
                </div>
              </ScrollReveal>

              <div className="space-y-6">
                <ScrollReveal direction="up">
                  <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 shadow-sm">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">5.1 Warranty Period</h3>
                    <p className="text-gray-700 mb-4">
                      We provide a <strong>30-day warranty</strong> period from project delivery for:
                    </p>
                    <ul className="space-y-2">
                      {[
                        'Bug fixes and technical issues',
                        'Browser compatibility problems',
                        'Mobile responsiveness issues',
                        'Performance optimization'
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>

                <ScrollReveal direction="up">
                  <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 shadow-sm">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">5.2 What's NOT Covered</h3>
                    <ul className="space-y-2">
                      {[
                        'Content changes or additions',
                        'New features or functionality',
                        'Third-party service failures (hosting, domains)',
                        'Issues caused by client modifications',
                        'Hacking or security breaches (unless due to our code)'
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <FaBan className="text-red-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* Limitation of Liability */}
        <section id="liability" className="py-5">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <ScrollReveal direction="up">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                    <FaBalanceScale className="text-white text-xl" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">6. Limitation of Liability</h2>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up">
                <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 shadow-sm">
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    To the maximum extent permitted by law, EaseBuilds shall not be liable for any indirect, 
                    incidental, special, consequential, or punitive damages, including but not limited to 
                    loss of profits, data, or business opportunities arising from:
                  </p>
                  <ul className="space-y-3">
                    {[
                      'Website downtime or technical failures',
                      'Loss of business or revenue',
                      'Data loss or corruption',
                      'Third-party service failures',
                      'SEO ranking changes',
                      'Security breaches not caused by our negligence'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <FaExclamationTriangle className="text-orange-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 p-4 bg-orange-50 rounded-xl border border-orange-200">
                    <p className="text-sm text-orange-800">
                      <strong>Maximum Liability:</strong> Our total liability shall not exceed the amount 
                      paid by you for the specific service giving rise to the claim.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-5 bg-gradient-to-br from-blue-600 to-cyan-600">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <ScrollReveal direction="up">
                <FaFileContract className="text-white text-6xl mx-auto mb-6" />
                <h2 className="text-4xl font-bold text-white mb-4">
                  Questions About These Terms?
                </h2>
                <p className="text-xl text-white/90 mb-8">
                  Contact us for clarification or concerns
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="mailto:easebuilds.in@gmail.com"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-100 transition-colors"
                  >
                    <FaEnvelope />
                  Click to Email Us
                  </Link>
                  <Link
                    href="tel:+916283380110"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-bold rounded-xl border-2 border-white hover:bg-white hover:text-blue-600 transition-all"
                  >
                    <FaPhoneAlt />
                    +91 6283380110
                  </Link>
                </div>

                <div className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/30">
                  <p className="text-white/90 text-sm">
                    These Terms of Service are governed by the laws of India. Any disputes shall be 
                    subject to the exclusive jurisdiction of courts in Patiala, Punjab, India.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
