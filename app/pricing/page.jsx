// app/pricing/page.jsx
'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import FomoBanner from './components/FomoBanner'
import PricingCard from './components/PricingCard'
import PricingFAQ from './components/PricingFAQ'
import { pricingPlans, faqs } from '@/lib/pricingData'
import { useFomoCountdown } from '@/hooks/useFomoCountdown'

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
    
    if (selectedAddons[plan.id]) {
      plan.addons.forEach(addon => {
        if (selectedAddons[plan.id][addon.id]) {
          total += addon.price
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

  return (
    <>
      <Header />
      <main className="pt-16 sm:pt-20">
        {/* Hero Section */}
        <section className="relative pt-10 pb-4 bg-gradient-to-br from-primary-50 via-white to-blue-50 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(0 0 0) 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }} />
          </div>

          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8 sm:mb-10"
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
                Choose Your Perfect
                <span className="block bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent">
                  Website Package
                </span>
              </h1>
              
              <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
                Professional web development packages with <strong className="text-primary-600">FREE maintenance & support</strong>. No hidden fees.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4 sm:gap-6"
            >
              {[
                { icon: '💎', text: 'Transparent Pricing' },
                { icon: '🔒', text: 'Secure payment' },
                { icon: '⚡', text: 'Fast delivery' },
                { icon: '🎁', text: 'Free support' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                  <span className="text-base">{item.icon}</span>
                  <span className="font-medium">{item.text}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* FOMO Banner */}
        <AnimatePresence>
          {showFomo && (
            <FomoBanner hours={hours} minutes={minutes} seconds={seconds} />
          )}
        </AnimatePresence>

        {/* Pricing Cards */}
        <section className="py-10 bg-white">
          <div className="container mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
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

        {/* FAQ */}
        <PricingFAQ faqs={faqs} />

        {/* CTA */}
        <section className="py-10 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
          <div className="container mx-auto max-w-4xl px-4 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">
              Need a Custom Solution?
            </h2>
            <p className="text-primary-100 mb-6 text-sm">
              Have unique requirements? Let's discuss a custom package tailored to your needs.
            </p>
            <motion.a
              href="/#contact"
              className="inline-block bg-white text-primary-600 px-6 py-3 rounded-lg font-bold text-sm hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us for Custom Quote
            </motion.a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
