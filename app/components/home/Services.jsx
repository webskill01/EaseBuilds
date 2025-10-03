'use client'
import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
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

// Individual Service Card Component
function ServiceCard({ service, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const [isActive, setIsActive] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Auto-activate on mobile when in view with stagger
  useEffect(() => {
    if (isInView && isMobile) {
      const timer = setTimeout(() => {
        setIsActive(true)
      }, index * 100)
      
      return () => clearTimeout(timer)
    }
  }, [isInView, isMobile, index])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ 
        delay: index * 0.1, 
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1] 
      }}
      onMouseEnter={() => !isMobile && setIsActive(true)}
      onMouseLeave={() => !isMobile && setIsActive(false)}
      className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-transparent overflow-hidden"
    >
      {/* Gradient Background - subtle always, prominent on active */}
      <motion.div 
        className={`absolute inset-0 bg-gradient-to-br ${service.gradient} transition-opacity duration-500`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isActive ? 0.08 : 0.02 }}
      />
      
      {/* Animated gradient border on hover/active */}
      <motion.div 
        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 transition-opacity duration-500`}
        animate={{ opacity: isActive ? 0.15 : 0 }}
        style={{ 
          mask: 'linear-gradient(white 0 0) content-box, linear-gradient(white 0 0)',
          maskComposite: 'exclude',
          padding: '2px'
        }}
      />
      
      <div className="relative flex flex-col items-center text-center">
        {/* Icon Container with smooth morph animation */}
        <motion.div 
          className="relative mb-4"
          animate={{ 
            scale: isActive ? 1.05 : 1,
            rotate: isActive ? [0, -5, 5, 0] : 0
          }}
          transition={{ 
            scale: { duration: 0.3 },
            rotate: { duration: 0.6, ease: "easeInOut" }
          }}
        > 
          {/* Main icon container */}
          <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center overflow-hidden">
            {/* Background that morphs */}
            <motion.div 
              className={`absolute inset-0 bg-gradient-to-br ${service.gradient}`}
              animate={{ 
                opacity: isActive ? 1 : 0.1,
                scale: isActive ? 1 : 0.8
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
            
            {/* Icon */}
            <motion.div
              animate={{ 
                scale: isActive ? 1.1 : 1,
                rotate: isActive ? 360 : 0
              }}
              transition={{ 
                scale: { duration: 0.3 },
                rotate: { duration: 0.6, ease: "easeInOut" }
              }}
            >
              <service.icon 
                className={`relative z-10 text-2xl sm:text-3xl transition-all duration-400`}
                style={{ 
                  color: isActive ? 'white' : 'rgb(59 130 246)',
                  filter: isActive ? 'drop-shadow(0 0 8px rgba(255,255,255,0.5))' : 'none'
                }}
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Title with gradient on active */}
        <motion.h3 
          className="text-lg sm:text-xl font-bold mb-1 transition-all duration-300"
          animate={{
            scale: isActive ? 1.02 : 1
          }}
        >
          <span 
            className={`transition-all duration-300 ${
              isActive ? `bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent` : 'text-gray-900'
            }`}
          >
            {service.title}
          </span>
        </motion.h3>

        {/* Description */}
        <p className="text-sm text-gray-600 leading-relaxed mb-2">
          {service.description}
        </p>

        {/* Animated underline on active */}
        <motion.div 
          className={`absolute bottom-0 left-1/2 h-1 bg-gradient-to-r ${service.gradient} rounded-full`}
          initial={{ width: 0, x: '-50%' }}
          animate={{ 
            width: isActive ? '60%' : '0%',
            opacity: isActive ? 1 : 0
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  )
}

export default function Services() {
  return (
    <section id="services" className="relative py-10 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(0 0 0) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-3"
          >
            <span className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold">
              Our Services
            </span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
            What We Offer
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to succeed online, all in one place
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12 sm:mt-16"
        >
          <p className="text-sm text-gray-600">
            Need something specific?{' '}
            <a 
              href="#contact" 
              className="text-primary-600 hover:text-primary-700 font-semibold relative inline-block group"
            >
              Let's talk
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
