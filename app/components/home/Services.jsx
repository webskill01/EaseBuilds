'use client'
import { motion } from 'framer-motion'
import { FaLaptopCode, FaShoppingCart, FaMobile, FaRocket, FaPaintBrush, FaSearch } from 'react-icons/fa'

const services = [
  {
    icon: FaLaptopCode,
    title: 'Custom Websites',
    description: 'Beautiful, professional websites tailored to your business needs.',
    gradient: 'from-blue-500 to-primary-600'
  },
  {
    icon: FaShoppingCart,
    title: 'Online Stores',
    description: 'Start selling online with powerful e-commerce solutions.',
    gradient: 'from-green-500 to-emerald-600'
  },
  {
    icon: FaMobile,
    title: 'Mobile-Friendly',
    description: 'Perfect experience on all devices - phones, tablets, and computers.',
    gradient: 'from-purple-500 to-violet-600'
  },
  {
    icon: FaRocket,
    title: 'Fast Loading',
    description: 'Lightning-fast websites that rank higher and convert better.',
    gradient: 'from-orange-500 to-red-600'
  },
  {
    icon: FaPaintBrush,
    title: 'Modern Design',
    description: 'Eye-catching designs with smooth animations that impress.',
    gradient: 'from-pink-500 to-rose-600'
  },
  {
    icon: FaSearch,
    title: 'SEO Optimized',
    description: 'Get found on Google with built-in search optimization.',
    gradient: 'from-cyan-500 to-blue-600'
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-12 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(0 0 0) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header - Ultra-compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-10 lg:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">
            What We Offer
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to succeed online, all in one place
          </p>
        </motion.div>

        {/* Services Grid - Optimized layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              className="group relative bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-7 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-transparent hover:-translate-y-1"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 rounded-xl sm:rounded-2xl transition-opacity duration-300`} />
              
              <div className="relative flex flex-col items-center text-center">
                {/* Icon Container - Compact with gradient */}
                <div className={`relative w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl bg-gradient-to-br ${service.gradient} p-[2px] mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="w-full h-full bg-white rounded-xl flex items-center justify-center group-hover:bg-transparent transition-colors duration-300">
                    <service.icon className={`text-xl sm:text-2xl lg:text-3xl bg-gradient-to-br ${service.gradient} bg-clip-text text-transparent group-hover:text-white transition-all duration-300`} />
                  </div>
                </div>

                {/* Title - Optimized sizing */}
                <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-2 text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description - Compact */}
                <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                {/* Hover indicator */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-primary-600 to-transparent group-hover:w-3/4 transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Optional CTA - Very compact */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-8 sm:mt-10 lg:mt-12"
        >
          <p className="text-xs sm:text-sm text-gray-500">
            Need something specific?{' '}
            <a href="#contact" className="text-primary-600 hover:text-primary-700 font-semibold underline underline-offset-2 transition-colors">
              Let's talk
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
