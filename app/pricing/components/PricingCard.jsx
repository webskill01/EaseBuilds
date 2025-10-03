// app/pricing/components/PricingCard.jsx
'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { FaCheck, FaTimes, FaInfoCircle } from 'react-icons/fa'

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
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
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

      <div className={`relative bg-gradient-to-br ${plan.popular ? 'from-white to-purple-50' : 'from-white to-gray-50'} rounded-xl p-5 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${plan.popular ? 'border-purple-200' : 'border-gray-200'} hover:border-primary-300 h-full flex flex-col`}>
        {/* Header */}
        <div className="mb-4">
          <div className={`w-12 h-12 bg-gradient-to-br ${plan.gradient} rounded-lg flex items-center justify-center mb-3 shadow-md`}>
            <plan.icon className="text-white text-xl" />
          </div>
          <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
          <p className="text-xs text-gray-600">{plan.tagline}</p>
        </div>

        {/* Price with Discount */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              {plan.currency}{calculateTotal(plan).toLocaleString('en-IN')}
            </span>
            {plan.originalPrice > plan.price && (
              <span className="text-lg line-through text-gray-400 font-semibold">
                {plan.currency}{plan.originalPrice.toLocaleString('en-IN')}
              </span>
            )}
          </div>
          <p className="text-xs text-gray-500">≈ ${plan.priceUSD} USD</p>
          <p className="text-xs text-gray-600 mt-2">{plan.description}</p>
        </div>

        {/* Example Sites Reference */}
          <div className="mt-3 p-2 bg-blue-50 border border-blue-100 rounded-lg">
            <p className="text-[10px] text-blue-700 font-medium mb-1">
              💡 See what you can expect:
            </p>
            {plan.exampleSite ? (
              <a 
                href={plan.exampleSite.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs text-blue-600 hover:text-blue-800 hover:underline font-semibold flex items-center gap-1 group"
              >
                <span>Example: {plan.exampleSite.name}</span>
                <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            ) : plan.exampleSites ? (
              <div className="space-y-1">
                {plan.exampleSites.map((site, idx) => (
                  <a 
                    key={idx}
                    href={site.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs text-blue-600 hover:text-blue-800 hover:underline font-semibold flex items-center gap-1 group"
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

        {/* Delivery Time */}
        <div className="mb-4 p-3 bg-white rounded-lg border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-gray-700">Standard Delivery</span>
            <span className="text-sm font-bold text-gray-900">{plan.deliveryDays} days</span>
          </div>
          <div className="pt-2 border-t border-gray-100">
            <label className="flex items-start gap-2 cursor-pointer group">
              <input
                type="checkbox"
                checked={fastDelivery[plan.id] || false}
                onChange={() => setFastDelivery(prev => ({ ...prev, [plan.id]: !prev[plan.id] }))}
                className="w-4 h-4 text-primary-600 rounded mt-0.5 flex-shrink-0"
              />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-gray-700 group-hover:text-primary-600 transition-colors">
                    ⚡ Fast Delivery
                  </span>
                  <span className="text-xs font-bold text-primary-600">
                    +₹{plan.fastDeliveryCost}
                  </span>
                </div>
                <span className="text-[10px] text-gray-500">
                  Get it in {plan.fastDeliveryDays} days instead
                </span>
              </div>
            </label>
          </div>
        </div>

        {/* Features */}
        <div className="flex-grow mb-4">
          <h4 className="font-semibold text-gray-900 mb-2 text-xs">What's included:</h4>
          <ul className="space-y-1.5">
            {plan.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2 text-xs">
                {feature.included !== false ? (
                  <FaCheck className={`${feature.highlight ? 'text-green-600' : 'text-green-500'} mt-0.5 flex-shrink-0 text-[10px]`} />
                ) : (
                  <FaTimes className="text-gray-300 mt-0.5 flex-shrink-0 text-[10px]" />
                )}
                <span className={`${feature.included !== false ? 'text-gray-700' : 'text-gray-400'} ${feature.bold ? 'font-semibold text-gray-900' : ''} ${feature.highlight ? 'font-semibold text-green-600' : ''}`}>
                  {feature.name}
                  {feature.value && <strong className="ml-1 text-gray-900">({feature.value})</strong>}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Add-ons */}
        {plan.addons.length > 0 && (
          <div className="mb-4 p-3 bg-gradient-to-br from-primary-50 to-blue-50 rounded-lg border border-primary-200">
            <h4 className="font-semibold text-gray-900 mb-2 text-xs flex items-center gap-1">
              Optional Add-ons:
              <FaInfoCircle className="text-primary-600 text-[10px]" />
            </h4>
            <div className="space-y-2">
              {plan.addons.map((addon) => (
                <label key={addon.id} className="block">
                  <div className="flex items-start gap-2 cursor-pointer group p-2 rounded hover:bg-white/50 transition-colors">
                    <input
                      type="checkbox"
                      checked={selectedAddons[plan.id]?.[addon.id] || false}
                      onChange={() => toggleAddon(plan.id, addon.id)}
                      className="w-4 h-4 text-primary-600 rounded mt-0.5 flex-shrink-0"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-0.5">
                        <span className="text-xs font-medium text-gray-700 group-hover:text-primary-600 transition-colors">
                          {addon.name}
                        </span>
                        <span className="text-[11px] font-bold text-primary-600 w-[48px]">
                          +₹{addon.price}
                        </span>
                      </div>
                      <p className="text-[10px] text-gray-600">{addon.description}</p>
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
              className="mb-4 overflow-hidden"
            >
              <div className="p-3 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border-2 border-green-200">
                <div className="flex items-start gap-2 mb-2">
                  <FaInfoCircle className="text-green-600 mt-0.5 flex-shrink-0" />
                  <div className="flex-1">
                    <h5 className="text-xs font-semibold text-green-800 mb-1">
                      Ongoing Maintenance Available
                    </h5>
                    <p className="text-[10px] text-green-700 mb-2">
                      Your starting months are FREE! (Depending Upon your Plan). Continue with professional maintenance after that.
                    </p>
                  </div>
                </div>
                <label className="flex items-start gap-2 cursor-pointer group p-2 bg-white rounded hover:bg-green-50 transition-colors">
                  <input
                    type="checkbox"
                    checked={maintenance[plan.id] || false}
                    onChange={() => setMaintenance(prev => ({ ...prev, [plan.id]: !prev[plan.id] }))}
                    className="w-4 h-4 text-green-600 rounded mt-0.5 flex-shrink-0"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="text-xs font-medium text-gray-700">
                        Annual Maintenance Plan
                      </span>
                      <div className="text-right">
                        <div className="text-xs font-bold text-green-600">
                          ₹{(plan.maintenancePerMonth * 12).toLocaleString('en-IN')}/year
                        </div>
                        <div className="text-[10px] text-gray-500">
                          (₹{plan.maintenancePerMonth}/month)
                        </div>
                      </div>
                    </div>
                    <p className="text-[10px] text-gray-600">
                      Includes updates, security, backups & support
                    </p>
                  </div>
                </label>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA Button */}
        <motion.a
          href="/#contact"
          className={`block w-full text-center py-3 rounded-lg font-bold text-sm transition-all duration-300 ${
            plan.popular
              ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg hover:shadow-xl'
              : 'bg-gray-900 text-white hover:bg-gray-800'
          }`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Get Started
        </motion.a>
      </div>
    </motion.div>
  )
}
