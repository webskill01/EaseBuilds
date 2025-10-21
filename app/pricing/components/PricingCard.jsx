'use client'

// Pricing Card Component - SEO Optimized with Addons
// EaseBuilds - Best Web Developer in Patiala Punjab India

import { motion, AnimatePresence } from 'framer-motion'
import { FaCheck, FaTimes, FaInfoCircle, FaRocket } from 'react-icons/fa'

export default function PricingCard({ 
  plan, 
  index, 
  selectedAddons, 
  fastDelivery, 
  maintenance,
  toggleAddon,
  setFastDelivery,
  setMaintenance,
  calculateTotal,
  hasHostingSelected,
  getDiscountPercent
}) {
  const discount = getDiscountPercent(plan)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="relative"
    >
      {/* Popular Badge */}
      {plan.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg animate-pulse">
            ⭐ MOST POPULAR
          </span>
        </div>
      )}

      {/* Discount Badge */}
      {discount > 0 && (
        <div className="absolute -top-3 -right-3 z-10">
          <motion.div
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", delay: 0.2 + index * 0.1 }}
            className="bg-red-500 text-white px-3 py-1.5 rounded-full shadow-lg"
          >
            <span className="text-xs font-bold">{discount}% OFF</span>
          </motion.div>
        </div>
      )}

      <div className={`relative bg-gradient-to-br ${plan.popular ? 'from-white to-purple-50 border-purple-300' : 'from-white to-gray-50 border-gray-200'} rounded-2xl p-5 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 hover:border-blue-400 h-full flex flex-col`}>
        
        {/* Header */}
        <div className="mb-4 sm:mb-6">
          <div className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${plan.gradient} rounded-xl flex items-center justify-center mb-3 sm:mb-4 shadow-lg`}>
            <plan.icon className="text-white text-2xl sm:text-3xl" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{plan.name} Package</h3>
          <p className="text-xs sm:text-sm text-gray-600 mt-1">{plan.tagline}</p>
        </div>

        {/* Price with Discount */}
        <div className="mb-4 sm:mb-6">
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-4xl sm:text-5xl font-extrabold text-gray-900">
              {plan.currency}{calculateTotal(plan).toLocaleString('en-IN')}
            </span>
            {plan.originalPrice > plan.price && (
              <span className="text-lg sm:text-xl line-through text-gray-400 font-semibold">
                {plan.currency}{plan.originalPrice.toLocaleString('en-IN')}
              </span>
            )}
          </div>
          <p className="text-xs text-gray-500 mb-2">≈ ${plan.priceUSD} USD</p>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{plan.description}</p>
        </div>

        {/* Best For Section */}
        {plan.bestFor && plan.bestFor.length > 0 && (
          <div className="mb-4 p-3 bg-blue-50 border border-blue-100 rounded-lg">
            <p className="text-[10px] sm:text-xs text-blue-700 font-semibold mb-2">
              🎯 Perfect For:
            </p>
            <div className="flex flex-wrap gap-1.5">
              {plan.bestFor.map((item, idx) => (
                <span key={idx} className="text-[10px] sm:text-xs px-2 py-1 bg-white text-blue-600 rounded-full font-medium">
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Example Sites Reference */}
        {(plan.exampleSite || plan.exampleSites) && (
          <div className="mb-4 p-3 bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-lg">
            <p className="text-[10px] sm:text-xs text-green-700 font-semibold mb-2 flex items-center gap-1">
              <FaRocket className="text-xs" />
              See What You Can Expect:
            </p>
            {plan.exampleSite ? (
              <a 
                href={plan.exampleSite.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs sm:text-sm text-green-600 hover:text-green-800 hover:underline font-semibold flex items-center gap-1.5 group"
              >
                <span>Example: {plan.exampleSite.name}</span>
                <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            ) : plan.exampleSites ? (
              <div className="space-y-1.5">
                {plan.exampleSites.map((site, idx) => (
                  <a 
                    key={idx}
                    href={site.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm text-green-600 hover:text-green-800 hover:underline font-semibold flex items-center gap-1.5 group"
                  >
                    <span>Example {idx + 1}: {site.name}</span>
                    <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ))}
              </div>
            ) : null}
          </div>
        )}

        {/* Delivery Time */}
        <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-white rounded-xl border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs sm:text-sm font-semibold text-gray-700">Standard Delivery</span>
            <span className="text-sm sm:text-base font-bold text-blue-600">{plan.deliveryDays} days</span>
          </div>
          <div className="pt-3 border-t border-gray-100">
            <label className="flex items-start gap-2 sm:gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={fastDelivery[plan.id] || false}
                onChange={() => setFastDelivery(prev => ({ ...prev, [plan.id]: !prev[plan.id] }))}
                className="w-4 h-4 text-blue-600 rounded mt-0.5 flex-shrink-0 cursor-pointer"
              />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
                    ⚡ Fast Track Delivery
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-blue-600">
                    +₹{plan.fastDeliveryCost}
                  </span>
                </div>
                <span className="text-[10px] sm:text-xs text-gray-500">
                  Get it in just {plan.fastDeliveryDays} days!
                </span>
              </div>
            </label>
          </div>
        </div>

        {/* Features */}
        <div className="flex-grow mb-4 sm:mb-6">
          <h4 className="font-bold text-gray-900 mb-3 text-xs sm:text-sm flex items-center gap-1">
            <FaCheck className="text-green-500" />
            What's Included:
          </h4>
          <ul className="space-y-2">
            {plan.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2 text-xs sm:text-sm">
                {feature.included !== false ? (
                  <FaCheck className={`${feature.highlight ? 'text-green-600' : 'text-green-500'} mt-0.5 flex-shrink-0 text-xs`} />
                ) : (
                  <FaTimes className="text-gray-300 mt-0.5 flex-shrink-0 text-xs" />
                )}
                <span className={`${feature.included !== false ? 'text-gray-700' : 'text-gray-400'} ${feature.bold ? 'font-semibold text-gray-900' : ''} ${feature.highlight ? 'font-semibold text-green-600' : ''}`}>
                  {feature.name}
                  {feature.value && <strong className="ml-1 text-gray-900">({feature.value})</strong>}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Add-ons - FIXED with proper check */}
        {plan.addons && plan.addons.length > 0 && (
          <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl border border-orange-200">
            <h4 className="font-bold text-gray-900 mb-3 text-xs sm:text-sm flex items-center gap-1.5">
              <FaInfoCircle className="text-orange-600" />
              Optional Add-ons:
            </h4>
            <div className="space-y-2">
              {plan.addons.map((addon) => (
                <label key={addon.id} className="block">
                  <div className="flex items-start gap-2 sm:gap-3 cursor-pointer group p-2 rounded-lg hover:bg-white/60 transition-colors">
                    <input
                      type="checkbox"
                      checked={selectedAddons[plan.id]?.[addon.id] || false}
                      onChange={() => toggleAddon(plan.id, addon.id)}
                      className="w-4 h-4 text-orange-600 rounded mt-0.5 flex-shrink-0 cursor-pointer"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs sm:text-sm font-medium text-gray-700 group-hover:text-orange-600 transition-colors">
                          {addon.name}
                        </span>
                        <span className="text-[11px] sm:text-xs font-bold text-orange-600">
                          +₹{addon.price}
                        </span>
                      </div>
                      <p className="text-[10px] sm:text-xs text-gray-600 leading-relaxed">{addon.description}</p>
                    </div>
                  </div>
                </label>
              ))}
            </div>
          </div>
        )}

        {/* Maintenance Section */}
        <AnimatePresence>
          {hasHostingSelected(plan.id) && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-4 sm:mb-6 overflow-hidden"
            >
              <div className="p-3 sm:p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border-2 border-green-300 shadow-sm">
                <div className="flex items-start gap-2 mb-3">
                  <FaInfoCircle className="text-green-600 mt-0.5 flex-shrink-0" />
                  <div className="flex-1">
                    <h5 className="text-xs sm:text-sm font-bold text-green-800 mb-1">
                      Ongoing Maintenance Available
                    </h5>
                    <p className="text-[10px] sm:text-xs text-green-700 mb-2">
                      Your starting months are FREE! Continue with professional maintenance after that.
                    </p>
                  </div>
                </div>
                <label className="flex items-start gap-2 sm:gap-3 cursor-pointer group p-2 sm:p-3 bg-white rounded-lg hover:bg-green-50 transition-colors border border-green-200">
                  <input
                    type="checkbox"
                    checked={maintenance[plan.id] || false}
                    onChange={() => setMaintenance(prev => ({ ...prev, [plan.id]: !prev[plan.id] }))}
                    className="w-4 h-4 text-green-600 rounded mt-0.5 flex-shrink-0 cursor-pointer"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs sm:text-sm font-semibold text-gray-700">
                        Annual Maintenance Plan
                      </span>
                      <div className="text-right">
                        <div className="text-xs sm:text-sm font-bold text-green-600">
                          ₹{(plan.maintenancePerMonth * 12).toLocaleString('en-IN')}/year
                        </div>
                        <div className="text-[10px] text-gray-500">
                          (₹{plan.maintenancePerMonth}/month)
                        </div>
                      </div>
                    </div>
                    <p className="text-[10px] sm:text-xs text-gray-600">
                      Includes updates, security, backups & 24/7 support
                    </p>
                  </div>
                </label>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA Button */}
        <motion.a
          href="tel:+916283380110"
          className={`block w-full text-center py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 shadow-lg hover:shadow-xl ${
            plan.popular
              ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
              : 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:from-blue-700 hover:to-cyan-600'
          }`}
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          Get Started - Call Now
        </motion.a>

        {/* Trust Badge */}
        <p className="text-center text-[10px] sm:text-xs text-gray-500 mt-3">
          ✅ Trusted by Patiala businesses
        </p>
      </div>
    </motion.div>
  )
}
