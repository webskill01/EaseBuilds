'use client'

import { motion, useInView } from 'framer-motion'
import { 
  FaLaptopCode, 
  FaShoppingCart, 
  FaMobile, 
  FaRocket, 
  FaPaintBrush, 
  FaSearch,
  FaArrowRight,
  FaStar,
  FaCheckCircle,
  FaEye,
  FaTimes
} from 'react-icons/fa'
import { useState, useRef, useMemo } from 'react'
import ScrollReveal from '../animations/ScrollReveal'
import Link from 'next/link'

const services = [
  {
    id: 'custom-web',
    icon: FaLaptopCode,
    title: 'Custom Website Development',
    description: 'Professional, tailor-made websites designed specifically for your business.',
    fullDescription: 'We create stunning custom websites tailored to your brand identity. Every pixel is crafted with care, from responsive layouts to seamless user experiences. Perfect for businesses looking to establish a strong online presence.',
    gradient: 'from-blue-400 to-blue-600',
    bgGradient: 'from-blue-50 to-blue-100',
    iconColor: 'text-blue-600',
    features: ['Responsive Design', 'Fast Loading', 'SEO Ready', 'Custom Features'],
    link: '/services/custom-website-design',
    rating: 5,
    clients: '20+',
    deliveryTime: '2-3 weeks'
  },
  {
    id: 'ecommerce',
    icon: FaShoppingCart,
    title: 'E-commerce Development',
    description: 'Powerful online stores with secure payment integration for businesses.',
    fullDescription: 'Launch your online store with our complete e-commerce solutions. From product catalogs to secure checkout, we handle everything. Perfect for retail businesses ready to sell online.',
    gradient: 'from-green-400 to-emerald-600',
    bgGradient: 'from-green-50 to-emerald-100',
    iconColor: 'text-green-600',
    features: ['Payment Gateway', 'Inventory', 'Analytics', 'Mobile Shopping'],
    link: '/services/ecommerce-development',
    rating: 5,
    clients: '15+',
    deliveryTime: '3-4 weeks'
  },
  {
    id: 'mobile-design',
    icon: FaMobile,
    title: 'Mobile-First Design',
    description: 'Perfect user experience on all devices - phones, tablets, and computers.',
    fullDescription: 'With 60%+ mobile traffic, we design mobile-first. Your website will look stunning and perform flawlessly on every device. Optimized for users on 4G networks.',
    gradient: 'from-purple-400 to-violet-600',
    bgGradient: 'from-purple-50 to-violet-100',
    iconColor: 'text-purple-600',
    features: ['Mobile First', 'Touch Optimized', 'Fast on 4G', 'PWA Ready'],
    link: '/services/custom-website-design',
    rating: 5,
    clients: '50+',
    deliveryTime: '2 weeks'
  },
  {
    id: 'performance',
    icon: FaRocket,
    title: 'Speed Optimization',
    description: 'Lightning-fast websites that rank higher on Google and convert better.',
    fullDescription: 'Speed matters! We optimize every aspect - images, code, server response. Your website will load in under 2 seconds, improving rankings and user satisfaction.',
    gradient: 'from-orange-400 to-red-600',
    bgGradient: 'from-orange-50 to-red-100',
    iconColor: 'text-orange-600',
    features: ['Core Web Vitals', 'Image Optimization', 'Code Splitting', 'CDN Setup'],
    link: '/services/website-maintenance',
    rating: 5,
    clients: '30+',
    deliveryTime: '1 week'
  },
  {
    id: 'design',
    icon: FaPaintBrush,
    title: 'Modern UI/UX Design',
    description: 'Beautiful, user-friendly designs that engage visitors and drive conversions.',
    fullDescription: 'Great design sells! We create interfaces that users love. From wireframes to final designs, every element is purposefully crafted for maximum engagement and conversions.',
    gradient: 'from-pink-400 to-rose-600',
    bgGradient: 'from-pink-50 to-rose-100',
    iconColor: 'text-pink-600',
    features: ['Brand Identity', 'User Research', 'Wireframing', 'Prototyping'],
    link: '/services/custom-website-design',
    rating: 5,
    clients: '40+',
    deliveryTime: '2-3 weeks'
  },
  {
    id: 'seo',
    icon: FaSearch,
    title: 'SEO Services',
    description: 'Rank higher on Google with expert SEO services.',
    fullDescription: 'Get found by local customers! Our SEO services help you rank #1 for keywords like "best [your business] in Patiala". More visibility = more customers.',
    gradient: 'from-cyan-400 to-blue-600',
    bgGradient: 'from-cyan-50 to-blue-100',
    iconColor: 'text-cyan-600',
    features: ['Local SEO', 'Keyword Research', 'On-Page SEO', 'Link Building'],
    link: '/services/seo-services',
    rating: 5,
    clients: '25+',
    deliveryTime: 'Ongoing'
  },
]

// OPTIMIZED Service Card
function ServiceCard({ service, index }) {
  const [isFlipped, setIsFlipped] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, margin: '-100px' })

  const handleFlip = () => setIsFlipped(!isFlipped)

  return (
    <>
      <motion.div
        ref={cardRef}
        className="group relative"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        style={{ perspective: '1500px' }}
      >
        <motion.div
          className="relative h-full min-h-[380px]"
          style={{ transformStyle: 'preserve-3d' }}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 120, damping: 20 }}
        >
          {/* FRONT SIDE */}
          <div
            className="absolute inset-0 bg-white rounded-3xl p-5 sm:p-6 shadow-xl border border-gray-200 overflow-hidden cursor-pointer hover:shadow-2xl transition-shadow"
            style={{
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
            }}
            onClick={handleFlip}
          >
            <div className="relative h-full flex flex-col">
              <div className="flex-grow space-y-3">
                <div
                  className={`relative inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${service.gradient} rounded-2xl shadow-lg`}
                >
                  <service.icon className="text-2xl sm:text-3xl text-white" />
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-0.5">
                    {[...Array(service.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 text-xs" />
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-blue-600">{service.clients} Projects</span>
                </div>

                <div className="space-y-1.5">
                  {service.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-1.5"
                    >
                      <FaCheckCircle className={`${service.iconColor} text-xs`} />
                      <span className="text-xs text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-2 mt-4">
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setShowModal(true)
                  }}
                  className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-gradient-to-r ${service.gradient} text-white rounded-xl text-xs font-semibold shadow-lg hover:shadow-xl transition-shadow`}
                >
                  <FaEye className="text-xs" />
                  <span>Details</span>
                </button>
                
                <Link
                  href={service.link}
                  onClick={(e) => e.stopPropagation()}
                  className="w-9 h-9 flex items-center justify-center bg-gray-100 hover:bg-blue-50 rounded-xl transition-colors flex-shrink-0"
                >
                  <FaArrowRight className={`${service.iconColor} text-sm`} />
                </Link>
              </div>
            </div>

            <div className={`absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br ${service.gradient} opacity-10 rounded-full pointer-events-none`} />
          </div>

          {/* BACK SIDE */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-3xl p-5 sm:p-6 shadow-xl overflow-hidden cursor-pointer`}
            style={{
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
            }}
            onClick={handleFlip}
          >
            <div className="relative h-full flex flex-col text-white">
              <h3 className="text-lg sm:text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-xs sm:text-sm text-white/90 leading-relaxed mb-3">
                {service.fullDescription}
              </p>
              
              <div className="space-y-2 mb-3">
                <div className="flex justify-between items-center p-2 bg-white/20 rounded-lg">
                  <span className="text-xs">Delivery Time</span>
                  <span className="text-sm font-bold">{service.deliveryTime}</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-white/20 rounded-lg">
                  <span className="text-xs">Completed Projects</span>
                  <span className="text-sm font-bold">{service.clients}</span>
                </div>
              </div>

              <div className="mt-auto space-y-2">
                <Link
                  href={service.link}
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-white text-gray-900 rounded-xl text-xs font-bold hover:bg-gray-100 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  Learn More
                  <FaArrowRight />
                </Link>
                
                <div className="text-center text-xs text-white/80">
                  Click anywhere to flip back
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {!isFlipped && (
          <div className="absolute -top-2 -right-2 px-2 py-1 bg-blue-600 text-white text-[10px] font-bold rounded-full shadow-lg pointer-events-none z-10">
            Click to Flip
          </div>
        )}
      </motion.div>

      {/* MODAL */}
      {showModal && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowModal(false)}
        >
          <motion.div
            className="relative max-w-2xl w-full bg-white rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full transition-colors z-10"
            >
              <FaTimes />
            </button>

            <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl mb-6`}>
              <service.icon className="text-3xl text-white" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{service.title}</h3>
            <p className="text-gray-600 leading-relaxed mb-6">{service.fullDescription}</p>

            <div className="grid grid-cols-2 gap-3 mb-6">
              {service.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2.5 bg-gray-50 rounded-lg">
                  <FaCheckCircle className={service.iconColor} />
                  <span className="text-xs sm:text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <Link
              href={service.link}
              className={`flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-r ${service.gradient} text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all`}
            >
              Get Started
              <FaArrowRight />
            </Link>
          </motion.div>
        </motion.div>
      )}
    </>
  )
}

export default function Services() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section 
      id="services" 
      ref={sectionRef}
      className="relative py-12 bg-gradient-to-b from-white via-blue-50/30 to-white overflow-hidden"
    >

      <div className="absolute top-20 left-0 w-96 h-96 bg-blue-200/20 rounded-full -translate-x-1/2" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-purple-200/20 rounded-full translate-x-1/2" />

      <div className="container-custom relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <ScrollReveal direction="up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-lg border border-blue-100 mb-6">
              <FaLaptopCode className="text-blue-600 text-xl" />
              <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Our Services
              </span>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
              Web Development Services in
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600">
                Patiala
              </span>
            </h2>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.2}>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Complete solutions from the{' '}
              <span className="font-bold text-blue-600">best web developer in Patiala</span>
              . Click cards to explore!
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {services.map((service, index) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
