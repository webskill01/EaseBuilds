'use client'

// Privacy Policy Page - EaseBuilds (REVISED - Light Overlay)
// Clean, Professional, Well-Structured, Easy to Read

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { 
  FaShieldAlt, 
  FaLock,
  FaUserShield,
  FaDatabase,
  FaCookieBite,
  FaEnvelope,
  FaPhone,
  FaCalendarAlt,
  FaCheck,
  FaExclamationTriangle,
  FaArrowRight,
  FaBullseye,
  FaServicestack
} from 'react-icons/fa'
import Header from '@/app/components/layout/Header'
import Footer from '@/app/components/layout/Footer'
import ScrollReveal from '@/app/components/animations/ScrollReveal'
import { FaGear } from 'react-icons/fa6'
import HeroImage from '../components/HeroImage'

export default function PrivacyPage() {
  const lastUpdated = 'January 1, 2025'

  return (
    <>
      <Header />

      {/* Hero Section - Light Overlay */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-10">
        <div className="absolute inset-0 z-0">
          <HeroImage
            src="/images/privacy-hero.jpg"
            alt="Privacy and Security"
          />
        </div>
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
              <FaShieldAlt className="text-white text-lg" />
              <span className="text-sm font-semibold text-white">
                Your Privacy is Protected
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight"
            >
              Privacy Policy
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-white/95 mb-6 max-w-2xl mx-auto"
            >
              We respect your privacy and are committed to protecting your personal data
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/20 backdrop-blur-sm rounded-xl border border-white/30"
            >
              <FaCalendarAlt className="text-white" />
              <span className="text-white font-medium text-sm">
                Last Updated: {lastUpdated}
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Table of Contents - Sticky Navigation */}
      <section className="sticky top-14 sm:top-16 z-40 py-4 bg-white border-b-2 border-gray-200 shadow-sm">
        <div className="container-custom">
          <ScrollReveal direction="up">
            <nav className="flex flex-wrap gap-3 justify-center">
              {[
                { title: 'Overview', href: '#overview' },
                { title: 'Information', href: '#information' },
                { title: 'Usage', href: '#usage' },
                { title: 'Cookies', href: '#cookies' },
                { title: 'Sharing', href: '#sharing' },
                { title: 'Your Rights', href: '#rights' },
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

      {/* Main Content Container - Better Structure */}
      <div className="bg-gradient-to-b from-white via-gray-50 to-white">
        
        {/* Overview Section */}
        <section id="overview" className="py-5">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              
              {/* Three Core Principles */}
              <ScrollReveal direction="up">
                <div className="grid sm:grid-cols-3 gap-6 mb-12">
                  {[
                    {
                      icon: FaUserShield,
                      title: 'Data Protection',
                      description: 'Industry-standard security measures protect your information',
                      gradient: 'from-blue-500 to-cyan-500'
                    },
                    {
                      icon: FaLock,
                      title: 'Secure Storage',
                      description: 'Encrypted storage compliant with Indian data laws',
                      gradient: 'from-green-500 to-emerald-500'
                    },
                    {
                      icon: FaShieldAlt,
                      title: 'Your Control',
                      description: 'Full rights to access, modify, or delete your data',
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
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment to Your Privacy</h2>
                  <p className="text-gray-700 leading-relaxed">
                    EaseBuilds ("we," "our," or "us") respects your privacy and is committed to protecting 
                    your personal data. This privacy policy explains how we collect, use, and protect your 
                    information when you use our web development services or visit our website at <strong>easebuilds.in</strong>. 
                    We comply with Indian data protection laws and follow GDPR principles for international users.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Information Collection */}
        <section id="information" className="py-5">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <ScrollReveal direction="up">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                    <FaDatabase className="text-white text-xl" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">1. Information We Collect</h2>
                </div>
              </ScrollReveal>

              <div className="space-y-6">
                {/* Personal Information */}
                <ScrollReveal direction="up">
                  <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 shadow-sm">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                        <FaUserShield className="text-blue-600" />
                      </div>
                      Personal Information You Provide
                    </h3>
                    <p className="text-gray-600 mb-4">
                      We collect information you voluntarily provide when you:
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {[
                        'Fill out contact forms',
                        'Request quotes or consultations',
                        'Sign up for services',
                        'Subscribe to newsletter',
                        'Contact via phone/WhatsApp',
                        'Participate in surveys'
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <FaCheck className="text-green-500 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-100">
                      <p className="text-sm text-blue-800">
                        <strong>Data types:</strong> Name, email, phone number, business information, 
                        project requirements, payment details, and any information you choose to share.
                      </p>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Automatic Information */}
                <ScrollReveal direction="up">
                  <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 shadow-sm">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                        <FaDatabase className="text-green-600" />
                      </div>
                      Automatically Collected Information
                    </h3>
                    <p className="text-gray-600 mb-4">
                      When you visit our website, we automatically collect:
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {[
                        'IP address & location (approximate)',
                        'Browser type and version',
                        'Device information',
                        'Pages visited & time spent',
                        'Referring website',
                        'Date and time of visits'
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <FaCheck className="text-green-500 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6 p-4 bg-green-50 rounded-xl border border-green-100">
                      <p className="text-sm text-green-800">
                        <strong>Purpose:</strong> This helps us improve website performance, understand 
                        user behavior, and provide better services.
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* How We Use Data */}
        <section id="usage" className="py-5 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <ScrollReveal direction="up">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
                    <FaArrowRight className="text-white text-xl" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">2. How We Use Your Information</h2>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up">
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    {
                      title: 'Service Delivery',
                      icon: <FaBullseye/>,
                      color: 'blue',
                      items: [
                        'Respond to inquiries',
                        'Provide quotes',
                        'Deliver web services',
                        'Communicate updates',
                        'Provide support'
                      ]
                    },
                    {
                      title: 'Business Operations',
                      icon: <FaGear/>,
                      color: 'green',
                      items: [
                        'Improve services',
                        'Analyze usage',
                        'Prevent fraud',
                        'Legal compliance',
                        'Marketing (with consent)'
                      ]
                    }
                  ].map((section, index) => (
                    <div key={index} className={`bg-white p-6 rounded-2xl border-2 border-${section.color}-100 shadow-sm`}>
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <span className="text-3xl">{section.icon}</span>
                        {section.title}
                      </h3>
                      <ul className="space-y-2">
                        {section.items.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm">
                            <FaCheck className="text-green-500 flex-shrink-0" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Cookies */}
        <section id="cookies" className="py-5">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <ScrollReveal direction="up">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-red-500 rounded-xl flex items-center justify-center shadow-lg">
                    <FaCookieBite className="text-white text-xl" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">3. Cookies & Tracking</h2>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up">
                <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 shadow-sm">
                  <p className="text-gray-700 mb-6">
                    We use cookies to enhance your experience, analyze traffic, and serve relevant content. 
                    You can control cookies through your browser settings.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4">
                    {[
                      {
                        type: 'Essential',
                        description: 'Required for functionality',
                        color: 'red',
                        required: true
                      },
                      {
                        type: 'Analytics',
                        description: 'Understand usage patterns',
                        color: 'blue',
                        required: false
                      },
                      {
                        type: 'Marketing',
                        description: 'Advertising & remarketing',
                        color: 'green',
                        required: false
                      }
                    ].map((cookie, index) => (
                      <div key={index} className={`p-4 rounded-xl border-2 bg-${cookie.color}-50 border-${cookie.color}-200`}>
                        <h4 className="font-bold text-gray-900 mb-2">{cookie.type}</h4>
                        <p className="text-sm text-gray-700 mb-3">{cookie.description}</p>
                        <span className={`text-xs font-bold px-3 py-1 bg-white rounded-full ${cookie.required ? 'text-red-700' : 'text-gray-700'}`}>
                          {cookie.required ? 'Required' : 'Optional'}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Data Sharing */}
        <section id="sharing" className="py-5 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <ScrollReveal direction="up">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                    <FaShieldAlt className="text-white text-xl" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">4. Data Sharing & Security</h2>
                </div>
              </ScrollReveal>

              <div className="space-y-6">
                {/* We Don't Sell */}
                <ScrollReveal direction="up">
                  <div className="bg-white p-6 rounded-2xl border-2 border-red-200 shadow-sm">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <FaExclamationTriangle className="text-red-600 text-xl" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          We Do NOT Sell Your Data
                        </h3>
                        <p className="text-gray-700">
                          We never sell, rent, or trade your personal information. Your data is confidential 
                          and used only for providing our services.
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Limited Sharing */}
                <ScrollReveal direction="up">
                  <div className="bg-white p-6 rounded-2xl border-2 border-blue-200 shadow-sm">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Limited Sharing</h3>
                    <p className="text-gray-700 mb-4">We may share data with trusted partners only when necessary:</p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {[
                        'Hosting providers',
                        'Email services',
                        'Payment processors',
                        'Legal authorities (if required)'
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <FaCheck className="text-blue-600 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* Your Rights */}
        <section id="rights" className="py-5">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <ScrollReveal direction="up">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
                    <FaUserShield className="text-white text-xl" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">5. Your Privacy Rights</h2>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { title: 'Access', description: 'Request a copy of your data' },
                    { title: 'Correction', description: 'Fix inaccurate information' },
                    { title: 'Deletion', description: 'Request data removal' },
                    { title: 'Portability', description: 'Receive data in readable format' },
                    { title: 'Restriction', description: 'Limit data usage' },
                    { title: 'Objection', description: 'Object to marketing' }
                  ].map((right, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ y: -5 }}
                      className="bg-white p-5 rounded-xl border-2 border-gray-200 shadow-sm"
                    >
                      <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                        <FaCheck className="text-green-500" />
                        {right.title}
                      </h3>
                      <p className="text-gray-600 text-sm">{right.description}</p>
                    </motion.div>
                  ))}
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
                <FaShieldAlt className="text-white text-6xl mx-auto mb-6" />
                <h2 className="text-4xl font-bold text-white mb-4">
                  Questions About Your Privacy?
                </h2>
                <p className="text-xl text-white/90 mb-8">
                  Contact our privacy team for any concerns
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="mailto:easebuilds.in@gmail.com"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-100 transition-colors"
                  >
                    <FaEnvelope />
                    easebuilds.in@gmail.com
                  </Link>
                  <Link
                    href="tel:+916283380110"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-bold rounded-xl border-2 border-white hover:bg-white hover:text-blue-600 transition-all"
                  >
                    <FaPhone />
                    +91 6283380110
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}
