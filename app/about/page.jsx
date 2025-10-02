'use client'
import { motion } from 'framer-motion'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-10">
        {/* Hero Section */}
        <section className="relative py-16 bg-gradient-to-br from-primary-50 via-white to-blue-50 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(0 0 0) 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }} />
          </div>
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 right-10 w-72 h-72 bg-primary-200 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.25, 0.2] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-10 left-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl"
          />

          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Header with staggered animations */}
            <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-block mb-4"
              >
                <motion.span 
                  className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-bold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  About CodeNest
                </motion.span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4"
              >
                Building Digital
                <span className="block bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent">
                  Success Stories
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg sm:text-xl text-gray-600 leading-relaxed"
              >
                We're passionate about helping businesses grow through beautiful, effective websites that deliver real results.
              </motion.p>
            </div>

            {/* Story Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-500">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4"
                >
                  At CodeNest, we believe every business deserves a professional online presence. 
                  We started with a simple mission: <strong className="text-gray-900">make web development accessible and affordable for everyone</strong>.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4"
                >
                  Our team has helped over <strong className="text-primary-600">50 businesses</strong> launch successful websites. From small local shops 
                  to growing e-commerce stores, we've seen firsthand how a great website can transform a business.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                  className="text-base sm:text-lg text-gray-600 leading-relaxed"
                >
                  We don't just build websites - we build <strong className="text-gray-900">partnerships</strong>. When you work with us, you get a 
                  dedicated team that truly cares about your success.
                </motion.p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Our Core Values
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  emoji: '💡',
                  title: 'Simplicity',
                  description: 'Clear communication, no tech jargon. We make the complex simple.',
                  gradient: 'from-yellow-500 to-orange-600'
                },
                {
                  emoji: '⚡',
                  title: 'Speed',
                  description: 'Fast delivery, lightning-fast websites. Your time matters to us.',
                  gradient: 'from-blue-500 to-primary-600'
                },
                {
                  emoji: '🤝',
                  title: 'Partnership',
                  description: 'Your success is our success. We grow together.',
                  gradient: 'from-purple-500 to-pink-600'
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary-200"
                >
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center mb-5 shadow-lg`}
                  >
                    <span className="text-3xl sm:text-4xl">{value.emoji}</span>
                  </motion.div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="relative py-12 bg-gradient-to-br from-primary-600 to-primary-800 text-white overflow-hidden">
          {/* Animated background elements */}
          <motion.div
            animate={{ x: [-20, 20, -20], y: [-20, 20, -20] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ x: [20, -20, 20], y: [20, -20, 20] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"
          />

          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {[
                { value: '50+', label: 'Happy Clients', delay: 0 },
                { value: '100%', label: 'Satisfaction Rate', delay: 0.1 },
                { value: '2-4', label: 'Weeks Delivery', delay: 0.2 },
                { value: '24/7', label: 'Support Available', delay: 0.3 }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: stat.delay, type: "spring" }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="text-center"
                >
                  <div className="text-4xl sm:text-5xl font-extrabold mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm sm:text-base text-primary-100 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5 sm:mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-10 max-w-2xl mx-auto">
                Let's work together to create something amazing for your business
              </p>
              <motion.a
                href="/#contact"
                className="inline-block btn-primary px-8 py-4 text-base sm:text-lg font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started Today
              </motion.a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
