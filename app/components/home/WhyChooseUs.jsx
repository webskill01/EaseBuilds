'use client'
import { motion } from 'framer-motion'
import { FaCheckCircle, FaClock, FaUsers, FaHeadset } from 'react-icons/fa'

const benefits = [
  {
    icon: FaCheckCircle,
    title: 'Proven Results',
    description: '50+ businesses grew their online presence and increased sales.',
    gradient: 'from-green-500 to-emerald-600'
  },
  {
    icon: FaClock,
    title: 'Quick Delivery',
    description: 'Your website launched in 2-4 weeks, not months.',
    gradient: 'from-blue-500 to-primary-600'
  },
  {
    icon: FaUsers,
    title: 'Dedicated Support',
    description: 'Fast responses and ongoing support after launch.',
    gradient: 'from-purple-500 to-violet-600'
  },
  {
    icon: FaHeadset,
    title: 'Fair Pricing',
    description: 'Transparent pricing with no hidden fees.',
    gradient: 'from-orange-500 to-red-600'
  },
]

const stats = [
  { value: '50+', label: 'Happy Clients', gradient: 'from-primary-500 to-primary-700' },
  { value: '100%', label: 'Satisfaction', gradient: 'from-accent-400 to-accent-600', delay: true },
  { value: '2-4', label: 'Weeks Delivery', gradient: 'from-green-500 to-green-700' },
  { value: '24/7', label: 'Support', gradient: 'from-purple-500 to-purple-700', delay: true },
]

export default function WhyChooseUs() {
  return (
    <section className="relative py-12 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-100 rounded-full blur-3xl opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-100 rounded-full blur-3xl opacity-20 pointer-events-none" />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            {/* Header - Compact */}
            <div className="mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">
                Why Choose CodeNest?
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600">
                Your partners in success. Here's what makes us different:
              </p>
            </div>

            {/* Benefits List - Optimized spacing */}
            <div className="space-y-4 sm:space-y-5">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.08, duration: 0.4 }}
                  className="group flex gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300"
                >
                  {/* Icon with gradient border */}
                  <div className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${benefit.gradient} rounded-lg flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:shadow-lg transition-all duration-300`}>
                    <benefit.icon className="text-base sm:text-lg text-white" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 group-hover:text-primary-600 transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Stats Grid - Optimized layout */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-5">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`bg-gradient-to-br ${stat.gradient} rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 text-white shadow-lg hover:shadow-2xl transition-all duration-300 ${stat.delay ? 'mt-4 sm:mt-6 lg:mt-8' : ''}`}
                >
                  <div className="relative">
                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm lg:text-base opacity-90 font-medium">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-white rounded-full p-3 sm:p-4 shadow-xl border-4 border-primary-100"
            >
              <div className="text-center">
                <div className="text-lg sm:text-xl font-bold text-primary-600">⭐️</div>
                <div className="text-[10px] sm:text-xs font-semibold text-gray-700 mt-1">Top Rated</div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
