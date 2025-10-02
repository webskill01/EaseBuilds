'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import { FaCheck, FaTimes, FaRocket, FaStar, FaCrown, FaChevronDown, FaInfoCircle } from 'react-icons/fa'

const pricingPlans = [
  {
    id: 'basic',
    name: 'Basic',
    tagline: 'Perfect for startups',
    icon: FaRocket,
    price: 2999,
    priceUSD: 89,
    currency: '₹',
    gradient: 'from-blue-500 to-cyan-600',
    popular: false,
    description: '2-page static website with essential features',
    deliveryDays: 3,
    fastDeliveryDays: 1,
    fastDeliveryCost: 800,
    maintenancePerMonth: 250, // Monthly maintenance cost
    features: [
      { name: 'Functional website', included: true },
      { name: 'Content upload', included: true },
      { name: 'Speed optimization', included: true },
      { name: 'Social media icons', included: true },
      { name: 'SEO optimization', included: true },
      { name: 'Responsive design', included: true },
      { name: 'Custom design', included: true },
      { name: '1 Month FREE Maintenance', included: true, highlight: true },
      { name: 'Number of pages', value: '2' },
      { name: 'Plugins/extensions', value: '5' },
      { name: 'Corrections', value: '1' },
      { name: 'Opt-in form', included: true },
      { name: 'E-commerce functionality', included: false },
      { name: 'Payment integration', included: false },
    ],
    addons: [
      { 
        id: 'hosting-package', 
        name: 'Hosting Setup + SSL Certificate', 
        price: 1500,
        description: 'Complete hosting setup with SSL security',
        isHosting: true 
      },
      { 
        id: 'custom-domain', 
        name: 'Custom Domain (.com/.in)', 
        price: 500,
        description: 'Your own professional domain name' 
      },
    ]
  },
  {
    id: 'standard',
    name: 'Standard',
    tagline: 'Most popular choice',
    icon: FaStar,
    price: 6999,
    priceUSD: 134,
    currency: '₹',
    gradient: 'from-purple-500 to-pink-600',
    popular: true,
    description: '5-page website with API integration & SEO',
    deliveryDays: 5,
    fastDeliveryDays: 3,
    fastDeliveryCost: 1500,
    maintenancePerMonth: 350,
    features: [
      { name: 'Everything in Basic, plus:', included: true, bold: true },
      { name: 'Basic API integration', included: true },
      { name: '3 Month FREE Maintenance', included: true, highlight: true },
      { name: 'Number of pages', value: '5' },
      { name: 'Plugins/extensions', value: '8' },
      { name: 'Products (if e-commerce)', value: '10' },
      { name: 'Corrections', value: '2' },
      { name: 'E-commerce functionality', included: false },
      { name: 'Payment integration', included: false },
    ],
    addons: [
      { 
        id: 'hosting-package', 
        name: 'Hosting Setup + SSL Certificate', 
        price: 1500,
        description: 'Premium hosting with enhanced security',
        isHosting: true 
      },
      { 
        id: 'custom-domain', 
        name: 'Custom Domain (.com/.in)', 
        price: 500,
        description: 'Your own professional domain name' 
      },
      { 
        id: 'ecommerce', 
        name: 'E-commerce Add-on', 
        price: 1500,
        description: 'Full shopping cart & payment gateway' 
      },
    ]
  },
  {
    id: 'premium',
    name: 'Premium',
    tagline: 'Enterprise solution',
    icon: FaCrown,
    price: 14999,
    priceUSD: 201,
    currency: '₹',
    gradient: 'from-orange-500 to-red-600',
    popular: false,
    description: '6-8 page scalable website with full features',
    deliveryDays: 7,
    fastDeliveryDays: 5,
    fastDeliveryCost: 3000,
    maintenancePerMonth: 500,
    features: [
      { name: 'Everything in Standard, plus:', included: true, bold: true },
      { name: 'E-commerce functionality', included: true },
      { name: 'Payment integration', included: true },
      { name: 'Full API integration', included: true },
      { name: 'Admin panel', included: true },
      { name: 'Scalable architecture', included: true },
      { name: '6 Month FREE Maintenance', included: true, highlight: true },
      { name: 'Number of pages', value: '6-8' },
      { name: 'Plugins/extensions', value: '10' },
      { name: 'Products (if e-commerce)', value: '15' },
      { name: 'Corrections', value: 'Unlimited' },
    ],
    addons: [
      { 
        id: 'hosting-package', 
        name: 'Premium Hosting + SSL Certificate', 
        price: 2500,
        description: 'Enterprise-grade hosting with advanced security',
        isHosting: true 
      },
      { 
        id: 'custom-domain', 
        name: 'Custom Domain (.com/.in)', 
        price: 1000,
        description: 'Your own professional domain name' 
      },
      { 
        id: 'analytics', 
        name: 'Advanced Analytics Dashboard', 
        price: 2000,
        description: 'Track your website performance in real-time' 
      },
    ]
  },
]

const faqs = [
  {
    question: 'Will my website be mobile-friendly?',
    answer: 'Yes! All websites I build are fully responsive and optimized for mobiles, tablets, and desktops.'
  },
  {
    question: 'What is included in the 1-month free maintenance?',
    answer: 'Free maintenance includes bug fixes, minor content updates, security monitoring, and basic support. After the free month, you can opt for continued maintenance at the monthly rate.'
  },
  {
    question: 'What is Full stack Development, and why is it necessary for my website redesign?',
    answer: 'Full stack development entails working on both the front and back ends of a website to improve its design and operation.'
  },
  {
    question: 'How can Full stack Development help me improve my website\'s design?',
    answer: 'Full-stack developers use cutting-edge technologies to create visually appealing, responsive designs that enhance the user experience.'
  },
  {
    question: 'Which technologies do you employ for website redesign?',
    answer: 'I use HTML, CSS, and JavaScript, ReactJs on the front end, and Node.js, Express, and MongoDB on the back end to ensure a complete overhaul. Also complete projects using NextJs.'
  },
  {
    question: 'What technologies do you specialize in for website development?',
    answer: 'I specialize in MERN stack (React.js, Next.js, Node.js, Express.js), HTML, CSS, and Tailwind CSS. Also Firebase and JWT and sessions for authentication, and MongoDB and SQL for databases.'
  },
  {
    question: 'Can you help me with an existing website that needs customization?',
    answer: 'Yes, I can help customize and revamp your existing website to enhance its functionality and design.'
  },
  {
    question: 'Do you provide SEO services for websites?',
    answer: 'Yes, I ensure your website is SEO-friendly with a proper structure and optimization to rank well on search engines.'
  },
  {
    question: 'Can you develop e-commerce websites?',
    answer: 'Absolutely, I can integrate robust e-commerce functionality to facilitate online sales.'
  },
  {
    question: 'What is your development process?',
    answer: 'My process includes: 1) Understanding your requirements, 2) Creating designs and prototypes, 3) Development and testing, 4) Client review and revisions, 5) Final deployment and support.'
  },
  {
    question: 'What happens after the 1-month free maintenance period?',
    answer: 'You can choose to continue with our maintenance services at a monthly rate based on your plan, or manage the website yourself. We\'ll provide all necessary documentation and support for a smooth transition.'
  },
]

export default function PricingPage() {
  const [selectedAddons, setSelectedAddons] = useState({})
  const [fastDelivery, setFastDelivery] = useState({})
  const [maintenance, setMaintenance] = useState({})
  const [openFaq, setOpenFaq] = useState(null)

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

    // Add annual maintenance if selected
    if (maintenance[plan.id]) {
      total += (plan.maintenancePerMonth * 12)
    }
    
    return total
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
                Professional web development packages with <strong className="text-primary-600">1 month FREE maintenance</strong>. No hidden fees.
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
                { icon: '🎁', text: '1 month free support' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                  <span className="text-base">{item.icon}</span>
                  <span className="font-medium">{item.text}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-10 bg-white">
          <div className="container mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                        ⭐ MOST POPULAR
                      </span>
                    </div>
                  )}

                  <div className={`relative bg-gradient-to-br ${plan.popular ? 'from-white to-purple-50' : 'from-white to-gray-50'} rounded-xl p-5 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${plan.popular ? 'border-purple-200' : 'border-gray-200'} hover:border-primary-300 h-full flex flex-col`}>
                    {/* Header */}
                    <div className="mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${plan.gradient} rounded-lg flex items-center justify-center mb-3 shadow-md`}>
                        <plan.icon className="text-white text-xl" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                      <p className="text-xs text-gray-600">{plan.tagline}</p>
                    </div>

                    {/* Price */}
                    <div className="mb-4">
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl sm:text-4xl font-extrabold text-gray-900">
                          {plan.currency}{calculateTotal(plan).toLocaleString('en-IN')}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">≈ ${Math.round(calculateTotal(plan) / 83)} USD</p>
                      <p className="text-xs text-gray-600 mt-2">{plan.description}</p>
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

                    {/* Add-ons Section */}
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
                                    <span className="text-xs font-bold text-primary-600">
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

                    {/* Maintenance Section - Shows only if hosting is selected */}
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
                                  Your first month is FREE! Continue with professional maintenance after that.
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
                                      +₹{(plan.maintenancePerMonth * 12).toLocaleString('en-IN')}/year
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
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section - Collapsible */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-900 text-sm pr-4">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: openFaq === i ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FaChevronDown className="text-primary-600 flex-shrink-0" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

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
