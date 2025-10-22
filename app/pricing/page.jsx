'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaStar, FaPhone, FaWhatsapp, FaCheckCircle, FaTimes, FaLock, FaGift, FaCheck, FaMoneyBill, FaRupeeSign, FaHospital, FaBuilding, FaBook, FaStore, FaPhoneAlt } from 'react-icons/fa'
import FomoBanner from './components/FomoBanner'
import PricingCard from './components/PricingCard'
import PricingFAQ from './components/PricingFAQ'
import ScrollReveal from '../components/animations/ScrollReveal'
import GridBackground from '../components/animations/GridBackground'
import { pricingPlans } from '@/lib/pricingData'
import { faqs } from '@/lib/faqData'
import { useFomoCountdown } from '@/hooks/useFomoCountdown'
import Image from 'next/image'
import Link from 'next/link'
import { FaBoltLightning } from 'react-icons/fa6'
import HeroImage from '../components/HeroImage'

export default function PricingPage() {
  const [selectedAddons, setSelectedAddons] = useState({})
  const [fastDelivery, setFastDelivery] = useState({})
  const [maintenance, setMaintenance] = useState({})
  const { showFomo, hours, minutes, seconds } = useFomoCountdown()

  const toggleAddon = (planId, addonId) => {
    setSelectedAddons(prev => ({
      ...prev,
      [planId]: {
        ...(prev[planId] || {}),
        [addonId]: !prev[planId]?.[addonId]
      }
    }))
  }

  const hasHostingSelected = (planId) => {
    return selectedAddons[planId]?.['hosting-package']
  }

  const calculateTotal = (plan) => {
    let total = plan.price
    
    if (fastDelivery[plan.id]) {
      total += plan.fastDeliveryCost
    }
    
    if (selectedAddons[plan.id] && plan.addons) {
      Object.keys(selectedAddons[plan.id]).forEach(addonId => {
        if (selectedAddons[plan.id][addonId]) {
          const addon = plan.addons.find(a => a.id === addonId)
          if (addon) total += addon.price
        }
      })
    }

    if (maintenance[plan.id]) {
      total += (plan.maintenancePerMonth * 12)
    }
    
    return total
  }

  const getDiscountPercent = (plan) => {
    if (plan.originalPrice && plan.price && plan.originalPrice > plan.price) {
      return Math.round(((plan.originalPrice - plan.price) / plan.originalPrice) * 100)
    }
    return 0
  }

  // Comparison features for table
  const comparisonFeatures = [
    { label: 'Starting Price', key: 'price' },
    { label: 'Number of Pages', basic: '3-4', standard: '8-10', premium: 'Custom' },
    { label: 'Mobile Responsive', basic: true, standard: true, premium: true },
    { label: 'SEO Optimized', basic: true, standard: true, premium: true },
    { label: 'Free Maintenance', basic: '1 Month', standard: '2 Months', premium: '3 Months' },
    { label: 'Free Support', basic: '1 Month', standard: '2 Months', premium: '3 Months' },
    { label: 'Blog Section', basic: false, standard: true, premium: true },
    { label: 'E-commerce Features', basic: false, standard: false, premium: true },
    { label: 'Custom Animations', basic: false, standard: true, premium: true },
    { label: 'Delivery Time', basic: '1 Week', standard: '2-3 Weeks', premium: '3-4 Weeks' },
    { label: 'Social Media Integration', basic: true, standard: true, premium: true },
    { label: 'Contact Form', basic: true, standard: true, premium: true },
    { label: 'Google Maps', basic: true, standard: true, premium: true },
    { label: 'Analytics Setup', basic: false, standard: true, premium: true },
  ]

  return (
    <>
      <main className="pt-10">
        
       <section className="relative pt-10 sm:pt-12 lg:pt-16 pb-6 sm:pb-8  overflow-hidden">
  
  {/* Custom Image Background Layer */}
  <div className="absolute inset-0 opacity-50">
    <HeroImage
      src="/images/blog2.jpg"
      alt="Website development pricing background - EaseBuilds office in Patiala Punjab India"
    />
  </div>


  {/* Gradient Overlay for Better Text Readability */}
  <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/60 to-white pointer-events-none" />

          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <ScrollReveal direction="up" className="text-center mb-6">
              
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md mb-4 sm:mb-6">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-sm" />
                  ))}
                </div>
                <span className="text-sm font-semibold text-gray-900">
                  5.0 • 50+ Happy Clients
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6">
  <span className="text-gray-900">Affordable Website </span>
  <span className="bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent">
    Development Pricing
  </span>
</h1>

              
              <p className="text-sm sm:text-base lg:text-lg text-gray-900 max-w-3xl mx-auto mb-4 sm:mb-6 px-4">
                Transparent, affordable website packages from the{' '}
                <strong className="text-blue-700">best web developer in Patiala</strong>. 
                Choose your plan and get started today with <strong className="text-green-600">FREE maintenance & support</strong>!
              </p>

              {/* Contact CTAs - Mobile Optimized */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6 sm:mb-8">
                <motion.a
                  href="tel:+916283380110"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaPhoneAlt className="text-lg" />
                  <span>Call Us</span>
                </motion.a>
                <motion.a
                  href="https://wa.me/916283380110?text=Hi%2C%20I%20want%20to%20know%20about%20website%20pricing%20in%20Patiala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl shadow-lg transition-all duration-300 text-sm sm:text-base"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaWhatsapp className="text-xl" />
                  <span>WhatsApp Us</span>
                </motion.a>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-xs sm:text-sm">
                {[
                  { icon: <FaRupeeSign/>, text: 'Transparent Pricing' },
                  { icon: <FaBoltLightning/>, text: '2-4 Week Delivery' },
                  { icon: <FaGift/>, text: 'Free Support' },
                  { icon: <FaLock/>, text: 'Secure Payment' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-600">
                    <span className="text-base sm:text-lg">{item.icon}</span>
                    <span className="font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* FOMO Banner */}
        <AnimatePresence>
          {showFomo && (
            <FomoBanner hours={hours} minutes={minutes} seconds={seconds} />
          )}
        </AnimatePresence>

        {/* Comparison Table Section */}
        <section className="py-8 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6">
            <ScrollReveal direction="up" className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                Package Comparison Table
              </h2>
              <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
                Compare all features and choose the perfect plan for your business
              </p>
            </ScrollReveal>

            {/* Mobile: Horizontal Scroll with Sticky Column */}
            <div className="relative">
              <div className="overflow-x-auto rounded-xl sm:rounded-2xl shadow-xl border border-gray-200">
                <table className="w-full bg-white">
                  <thead>
                    <tr className="bg-gradient-to-r from-blue-600 to-cyan-500">
                      <th className="sticky left-0 z-20 bg-gradient-to-r from-blue-600 to-cyan-500 px-4 sm:px-6 py-4 text-left text-xs sm:text-sm font-bold text-white uppercase tracking-wider min-w-[140px] sm:min-w-[180px]">
                        Features
                      </th>
                      {pricingPlans.map((plan) => (
                        <th key={plan.id} className="px-4 sm:px-6 py-4 text-center min-w-[120px] sm:min-w-[180px]">
                          <div className="text-white">
                            {plan.popular && (
                              <div className="mb-2">
                                <span className="inline-block bg-yellow-400 text-gray-900 px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-bold">
                                  ⭐ POPULAR
                                </span>
                              </div>
                            )}
                            <div className="text-base sm:text-lg font-bold mb-1">{plan.name}</div>
                            <div className="flex flex-col items-center gap-1">
                              <div className="flex items-baseline gap-1">
                                <span className="text-xl sm:text-2xl font-extrabold">₹{plan.price.toLocaleString('en-IN')}</span>
                              </div>
                              {plan.originalPrice > plan.price && (
                                <span className="text-xs line-through text-blue-200">₹{plan.originalPrice.toLocaleString('en-IN')}</span>
                              )}
                            </div>
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {comparisonFeatures.map((feature, idx) => (
                      <tr key={idx} className={`${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-blue-50 transition-colors`}>
                        <td className="sticky left-0 z-10 px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-semibold text-gray-900 bg-inherit">
                          {feature.label}
                        </td>
                        {feature.key === 'price' ? (
                          pricingPlans.map((plan) => (
                            <td key={plan.id} className="px-4 sm:px-6 py-3 sm:py-4 text-center">
                              <div className="flex flex-col items-center">
                                <span className="text-lg sm:text-xl font-bold text-blue-600">
                                  ₹{plan.price.toLocaleString('en-IN')}
                                </span>
                                {getDiscountPercent(plan) > 0 && (
                                  <span className="text-[10px] sm:text-xs text-green-600 font-semibold">
                                    Save {getDiscountPercent(plan)}%
                                  </span>
                                )}
                              </div>
                            </td>
                          ))
                        ) : (
                          ['basic', 'standard', 'premium'].map((planType) => (
                            <td key={planType} className="px-4 sm:px-6 py-3 sm:py-4 text-center">
                              {typeof feature[planType] === 'boolean' ? (
                                feature[planType] ? (
                                  <FaCheckCircle className="inline text-green-500 text-lg sm:text-xl" />
                                ) : (
                                  <FaTimes className="inline text-gray-300 text-lg sm:text-xl" />
                                )
                              ) : (
                                <span className="text-xs sm:text-sm text-gray-700 font-medium">
                                  {feature[planType]}
                                </span>
                              )}
                            </td>
                          ))
                        )}
                      </tr>
                    ))}
                    
                    {/* CTA Row */}
                    <tr className="bg-gray-100">
                      <td className="sticky left-0 z-10 px-4 sm:px-6 py-4 text-sm font-semibold text-gray-900 bg-gray-100">
                        Choose Plan
                      </td>
                      {pricingPlans.map((plan) => (
                        <td key={plan.id} className="px-4 sm:px-6 py-4 text-center">
                          <a
                            href="tel:+916283380110"
                            className={`inline-block px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-bold text-xs sm:text-sm transition-all duration-300 ${
                              plan.popular
                                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg hover:shadow-xl'
                                : 'bg-blue-600 text-white hover:bg-blue-700'
                            }`}
                          >
                            Get Started
                          </a>
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
              
              {/* Mobile Scroll Hint */}
              <div className="lg:hidden mt-4 text-center">
                <p className="text-xs text-gray-500">
                  👉 Scroll horizontally to see all features
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Cards (Full Details) */}
        <section className="py-10 bg-white">
          <div className="container mx-auto max-w-7xl px-4 lg:px-8">
            <ScrollReveal direction="up" className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                Detailed Package Information & Price Calculator
              </h2>
              <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
                All packages include free maintenance, training, and support for businesses 
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
              {pricingPlans.map((plan, index) => (
                <PricingCard
                  key={plan.id}
                  plan={plan}
                  index={index}
                  selectedAddons={selectedAddons}
                  fastDelivery={fastDelivery}
                  maintenance={maintenance}
                  toggleAddon={toggleAddon}
                  setFastDelivery={setFastDelivery}
                  setMaintenance={setMaintenance}
                  calculateTotal={calculateTotal}
                  hasHostingSelected={hasHostingSelected}
                  getDiscountPercent={getDiscountPercent}
                />
              ))}
            </div>
          </div>
        </section>
        <p className="text-sm sm:text-base text-gray-600 max-w-5xl mx-auto mb-4 sm:mb-6 px-4">
  Transparent, affordable website packages from the{' '}
  <Link href="/website-development-patiala" className="text-blue-600 hover:text-blue-700 font-semibold underline">
    best web developer in Patiala
  </Link>. 
  Choose from{' '}
  <Link href="/services/custom-website-design" className="text-blue-600 hover:underline">
    custom design
  </Link>,{' '}
  <Link href="/services/ecommerce-development" className="text-blue-600 hover:underline">
    e-commerce
  </Link>, or business packages with{' '}
  <strong className="text-green-600">FREE maintenance & support</strong>!
</p>

        {/* FAQ */}
        <PricingFAQ faqs={faqs.slice(0, 6)} />


        {/* Trust Section - Social Proof */}
        <ScrollReveal direction="up">
          <section className="py-10 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-20">
              <GridBackground 
                dotColor="rgba(59, 130, 246, 0.3)" 
                lineColor="rgba(59, 130, 246, 0.06)"
                gridSize={50}
                animated={false}
              />
            </div>

            <div className="container mx-auto max-w-6xl px-4 text-center relative z-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Trusted by 50+ Businesses in Patiala Punjab India
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                {[
                  { icon: <FaHospital/>, title: 'Healthcare', count: '12+' },
                  { icon: <FaBuilding/>, title: 'Architecture', count: '8+' },
                  { icon: <FaBook/>, title: 'Education', count: '15+' },
                  { icon: <FaStore/>, title: 'Retail', count: '18+' },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-shadow flex items-center flex-col">
                    <div className="text-4xl mb-2 text-blue-600 ">{item.icon}</div>
                    <div className="text-2xl font-bold text-black">{item.count}</div>
                    <div className="text-sm text-gray-600">{item.title}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Custom Solution CTA */}
        <section className="py-10 bg-gradient-to-br from-blue-600 to-cyan-600 text-white relative overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 opacity-10">
            <GridBackground 
              dotColor="rgba(255, 255, 255, 0.5)" 
              lineColor="rgba(255, 255, 255, 0.1)"
              gridSize={60}
              animated={true}
            />
          </div>

          <div className="container mx-auto max-w-4xl px-4 text-center relative z-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-blue-100 mb-6 sm:mb-8 text-sm sm:text-base max-w-2xl mx-auto">
              Have unique requirements for your Patiala business? Let's discuss a custom package tailored to your specific needs and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <motion.a
                href="tel:+916283380110"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-600 font-bold rounded-xl shadow-lg hover:bg-blue-50 transition-all duration-300 text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaPhoneAlt />
                Call for Custom Quote
              </motion.a>
              <motion.a
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300 text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
