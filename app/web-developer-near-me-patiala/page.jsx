'use client'

// FINAL: Web Developer Near Me Page - Clean & Interactive
// Removed: Distance calculator, Floating buttons
// Fixed: Card expansion animation

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useRef, useState, useEffect } from 'react'
import { 
  FaPhone, 
  FaWhatsapp, 
  FaStar, 
  FaMapMarkerAlt,
  FaDirections,
  FaClock,
  FaEnvelope,
  FaBuilding,
  FaRocket,
  FaCheck,
  FaUsers,
  FaAward,
  FaHandshake,
  FaMapPin,
  FaGlobe,
  FaChevronLeft,
  FaChevronRight,
  FaChevronDown,
  FaPhoneAlt
} from 'react-icons/fa'
import ScrollReveal from '@/app/components/animations/ScrollReveal'
import AnimatedCard from '@/app/components/animations/AnimatedCard'
import HeroImage from '../components/HeroImage'

export default function WebDeveloperNearMePage() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  
  // Interactive States
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [expandedBenefit, setExpandedBenefit] = useState(null)
  const [hoveredLandmark, setHoveredLandmark] = useState(null)

  // Service areas
  const serviceAreas = [
    { city: 'Patiala', distance: '0 km', time: 'Visit Office', priority: true },
    { city: 'Rajpura', distance: '32 km', time: '30 min drive', priority: true },
    { city: 'Sangrur', distance: '45 km', time: '45 min drive', priority: true },
    { city: 'Nabha', distance: '29 km', time: '35 min drive', priority: false },
    { city: 'Sirhind', distance: '40 km', time: '40 min drive', priority: false },
    { city: 'All India', distance: 'Remote', time: 'Online Services', priority: false },
  ]

  // Testimonials
  const quickTestimonials = [
    {
      quote: "Best web developer near me in Patiala! They visited our clinic and delivered perfectly.",
      author: "Dr. Rajesh Kumar",
      location: "Patiala",
      rating: 5
    },
    {
      quote: "Local service with global quality. Easy to meet in person for project discussions.",
      author: "Simran Kaur",
      location: "Patiala",
      rating: 5
    },
    {
      quote: "Even from Rajpura, they provided excellent local support. Highly recommended!",
      author: "Manpreet Singh",
      location: "Rajpura",
      rating: 5
    },
  ]

  // Landmarks
  const landmarks = [
    { name: 'Qila Mubarak', distance: '3 km', description: 'Historic Patiala Fort' },
    { name: 'Baradari Gardens', distance: '2.5 km', description: 'Beautiful heritage gardens' },
    { name: 'Sheesh Mahal', distance: '3 km', description: 'Palace of Mirrors' },
    { name: 'Thapar University', distance: '5 km', description: 'Engineering college' },
    { name: 'Bus Stand', distance: '1.5 km', description: 'Main bus terminal' },
    { name: 'Railway Station', distance: '2 km', description: 'Patiala Junction' },
  ]

  // Benefits with expandable content - FIXED STRUCTURE
  const benefits = [
    {
      icon: FaHandshake,
      title: 'Face-to-Face Meetings',
      shortDesc: 'Visit our Patiala office for in-person consultations. Build trust through direct interaction.',
      fullDesc: 'Schedule a meeting at our office, discuss your project over coffee, review designs on our screens, and build trust through direct interaction. We believe in personal relationships, not just business transactions. Meet our team, see our workspace, and feel confident about your project.',
    },
    {
      icon: FaRocket,
      title: 'Same-Day Response',
      shortDesc: 'Local proximity means faster communication and quicker project starts.',
      fullDesc: 'Call us in the morning, meet in the afternoon! No waiting days for emails from distant agencies. Urgent fixes? We can visit your location the same day. Need immediate changes? Drop by our office anytime during business hours. True local advantage with instant communication.',
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Local Market Knowledge',
      shortDesc: 'We understand Patiala business culture and what works for Punjab customers.',
      fullDesc: 'We know what works for Patiala customers, understand local competition landscape, recognize seasonal trends in Punjab, and know pricing sweet spots for local markets. Your website will be optimized for local conversions with content that resonates with your target audience.',
    },
  ]

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % quickTestimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % quickTestimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + quickTestimonials.length) % quickTestimonials.length)
  }

  return (
    <>

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-[85vh] sm:min-h-screen flex items-center justify-center overflow-hidden pt-5"
      >
        <motion.div 
          style={{ y }}
          className="absolute inset-0 z-0"
        >
          <HeroImage
            src="/images/patiala-hero.jpg"
            alt="Web Developer Office in Patiala Punjab"
          />
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800/60 via-gray-700/50 to-gray-900/60" />
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle, white 2px, transparent 2px)',
                backgroundSize: '50px 50px'
              }} />
          </div>
        </motion.div>

        <div className="container-custom relative z-30 py-12 sm:py-16">
          <div className="max-w-5xl mx-auto text-center">
            
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/30 backdrop-blur-md rounded-full mb-4 sm:mb-6 border border-white/40"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <FaMapMarkerAlt className="text-white text-lg sm:text-xl" />
              </motion.div>
              <span className="text-sm sm:text-base font-semibold text-white">
                Located in Patiala Punjab • Visit Our Office
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight drop-shadow-2xl"
            >
              Web Developer{' '}
              <span className="text-cyan-300">Near Me</span>
              <br />
              in Patiala Punjab India
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl sm:text-2xl md:text-3xl text-white mb-6 sm:mb-8 font-semibold drop-shadow-lg"
            >
              🎯 Local Office • Face-to-Face Meetings • Same-Day Response
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-base sm:text-lg md:text-xl text-white mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed px-4 drop-shadow-lg"
            >
              Looking for a <strong>web developer near you in Patiala</strong>? Visit our office for free consultation! 
              Local support for Patiala region + remote services across India.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12"
            >
              <motion.a
                href="tel:+916283380110"
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4  bg-white text-blue-600 font-bold rounded-xl shadow-2xl transition-all text-sm sm:text-base lg:text-lg group"
              >
                <motion.div
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                >
                  <FaPhoneAlt className="text-lg sm:text-xl" />
                </motion.div>
                <span className="group-hover:text-blue-700 transition-colors">Call Us</span>
              </motion.a>

              <motion.a
                href="https://wa.me/916283380110"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4  bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl shadow-2xl transition-all text-sm sm:text-base lg:text-lg"
              >
                <FaWhatsapp className="text-xl sm:text-2xl" />
                Whatsapp Us
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto"
            >
              {[
                { icon: FaClock, text: 'Mon-Fri: 9AM-6PM' },
                { icon: FaMapPin, text: 'Patiala, Punjab' },
                { icon: FaUsers, text: '50+ Local Clients' },
                { icon: FaAward, text: '5.0★ Rating' },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="flex flex-col items-center gap-2 p-3 bg-white/20 backdrop-blur-md rounded-xl border border-white/30 cursor-pointer"
                  whileHover={{ 
                    y: -5, 
                    backgroundColor: 'rgba(255,255,255,0.3)',
                    scale: 1.05
                  }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <item.icon className="text-2xl sm:text-3xl text-cyan-300" />
                  </motion.div>
                  <span className="text-xs sm:text-sm font-medium text-center text-white">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FIXED: Interactive Why Choose Local Section */}
      {/* FIXED: Interactive Benefits Section - Smooth Animation */}
<section className="py-12 sm:py-14 bg-white">
  <div className="container-custom">
    <ScrollReveal direction="up">
      <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Why Choose a Local Web Developer?
        </h2>
        <p className="text-base sm:text-lg text-gray-600">
          Click cards to learn more about local advantages
        </p>
      </div>
    </ScrollReveal>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
      {benefits.map((benefit, index) => {
        const isExpanded = expandedBenefit === index
        
        return (
          <ScrollReveal key={index} direction="up" delay={index * 0.1}>
            <motion.div
              className="bg-white rounded-2xl shadow-lg border border-gray-100 cursor-pointer overflow-hidden"
              initial={false}
              animate={{
                borderColor: isExpanded ? 'rgba(59, 130, 246, 0.3)' : 'rgba(229, 231, 235, 1)'
              }}
              whileHover={{ 
                y: -8, 
                boxShadow: '0 20px 40px rgba(59, 130, 246, 0.2)'
              }}
              transition={{ duration: 0.3 }}
              onClick={() => setExpandedBenefit(isExpanded ? null : index)}
            >
              {/* Fixed height header section */}
              <div className="p-6 sm:p-8">
                {/* Icon and Chevron Row */}
                <div className="flex items-center justify-between mb-4">
                  <motion.div 
                    className="w-14 h-14 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <benefit.icon className="text-white text-2xl" />
                  </motion.div>
                  
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="text-blue-600"
                  >
                    <FaChevronDown className="text-xl" />
                  </motion.div>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                
                {/* Always show short description */}
                <p className="text-gray-600 leading-relaxed">
                  {benefit.shortDesc}
                </p>
              </div>

              {/* Expandable Content - Smooth height animation */}
              <motion.div
                initial={false}
                animate={{
                  height: isExpanded ? 'auto' : 0,
                  opacity: isExpanded ? 1 : 0
                }}
                transition={{
                  height: {
                    duration: 0.3,
                    ease: 'easeInOut'
                  },
                  opacity: {
                    duration: 0.2,
                    delay: isExpanded ? 0.1 : 0
                  }
                }}
                className="overflow-hidden"
              >
                <div className="px-6 sm:px-8 pb-6 pt-0">
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.fullDesc}
                    </p>
                  </div>
                </div>
              </motion.div>
              
              {/* Click Indicator - Always at bottom */}
              <div className="px-6 sm:px-8 pb-6">
                <motion.div 
                  className="flex items-center gap-2 text-sm font-semibold text-blue-600 pt-4 border-t border-gray-100"
                  animate={{ 
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <FaChevronDown className={isExpanded ? 'rotate-180' : ''} />
                  <span>{isExpanded ? 'Click to minimize' : 'Click to read more'}</span>
                </motion.div>
              </div>
            </motion.div>
          </ScrollReveal>
        )
      })}
    </div>
  </div>
</section>


      {/* Office/Team Photo Section */}
      <section className="py-10 bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto items-center">
            
            <ScrollReveal direction="left">
              <motion.div 
                className="relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/images/team.jpg"
                  alt="EaseBuilds at Patiala"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  quality={90}
                />
              </motion.div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-4">
                  <FaBuilding className="text-blue-600" />
                  <span className="text-sm font-semibold text-blue-600">Our Patiala Office</span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Meet Our Team in Person
                </h2>
                <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
                  Visit our office in Patiala, meet the team who'll build your website, and discuss your project face-to-face. Coffee's on us!
                </p>
                <ul className="space-y-3">
                  {[
                    'Free initial consultation',
                    'See our workspace and ongoing projects',
                    'Meet designers and developers personally',
                    'Discuss timelines and requirements in detail',
                  ].map((item, idx) => (
                    <motion.li 
                      key={idx} 
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.3, rotate: 360 }}
                        transition={{ duration: 0.3 }}
                      >
                        <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                      </motion.div>
                      <span className="text-gray-700">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="py-10 bg-white">
        <div className="container-custom">
          <ScrollReveal direction="up">
            <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Find Us in Patiala
              </h2>
              <p className="text-base sm:text-lg text-gray-600">
                Easy to locate • Free parking • Walk-ins welcome
              </p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
            
            <ScrollReveal direction="left">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 h-[400px] sm:h-[535px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110451.99374386775!2d76.32429!3d30.33977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391028ab86ef0c07%3A0x3d64b5d3c474830f!2sPatiala%2C%20Punjab!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="EaseBuilds Office Location Patiala"
                  className="w-full h-full"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="bg-gradient-to-br from-blue-50 to-white p-6 sm:p-8 rounded-2xl border border-blue-100 shadow-lg">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Office Details</h3>
                
                <div className="space-y-4">
                  {[
                    { icon: FaMapMarkerAlt, label: 'Address', value: 'Patiala, Punjab 147001, India' },
                    { icon: FaClock, label: 'Hours', value: 'Mon-Fri: 9AM-6PM\nSat: 10AM-4PM' },
                    { icon: FaPhoneAlt, label: 'Phone', value: '+91 6283380110', link: 'tel:+916283380110' },
                  ].map((detail, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-start gap-4 p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
                      whileHover={{ x: 5 }}
                    >
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <detail.icon className="text-blue-600 text-2xl mt-1 flex-shrink-0" />
                      </motion.div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{detail.label}</h4>
                        {detail.link ? (
                          <a href={detail.link} className="text-blue-600 hover:text-blue-700 font-medium">
                            {detail.value}
                          </a>
                        ) : (
                          <p className="text-gray-600 whitespace-pre-line">{detail.value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-3 mt-6">
                  <motion.a
                    href="https://maps.google.com/?q=Patiala+Punjab"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 text-sm"
                  >
                    <FaDirections />
                    Directions
                  </motion.a>
                  <motion.a
                    href="https://wa.me/916283380110"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 text-sm"
                  >
                    <FaWhatsapp />
                    WhatsApp
                  </motion.a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-10 bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <ScrollReveal direction="up">
            <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Service Coverage
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-4">
                Primary service area: Patiala region with in-person visits
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full">
                <FaGlobe className="text-green-600" />
                <span className="text-sm font-semibold text-green-700">
                  Remote services available across India
                </span>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {serviceAreas.map((area, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 0.05}>
                <motion.div
                  className={`p-6 rounded-xl border transition-all ${
                    area.priority 
                      ? 'bg-gradient-to-br from-blue-50 to-white border-blue-200 shadow-md' 
                      : 'bg-white border-gray-200'
                  }`}
                  whileHover={{ y: -5, borderColor: '#3b82f6' }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{area.city}</h3>
                    <span className="text-sm font-semibold text-blue-600">{area.distance}</span>
                  </div>
                  <p className="text-sm text-gray-600">{area.time}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Landmarks with Tooltips */}
      <section className="pb-10 pt-5 bg-white">
        <div className="container-custom">
          <ScrollReveal direction="up">
            <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Nearby Landmarks
              </h2>
              <p className="text-base sm:text-lg text-gray-600">
                Hover to see details
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {landmarks.map((landmark, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 0.05}>
                <motion.div
                  className="relative text-center p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all cursor-pointer"
                  whileHover={{ y: -5, scale: 1.05 }}
                  onHoverStart={() => setHoveredLandmark(index)}
                  onHoverEnd={() => setHoveredLandmark(null)}
                >
                  <motion.div
                    animate={{ 
                      scale: hoveredLandmark === index ? 1.2 : 1,
                      rotate: hoveredLandmark === index ? 360 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaMapPin className="text-3xl text-blue-600 mx-auto mb-2" />
                  </motion.div>
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">{landmark.name}</h4>
                  <p className="text-xs text-gray-500">{landmark.distance}</p>
                  
                  <AnimatePresence>
                    {hoveredLandmark === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg whitespace-nowrap z-10"
                      >
                        {landmark.description}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-gray-900" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Auto-Rotating Testimonials */}
      <section className="py-10 bg-gradient-to-br from-blue-50 to-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal direction="up">
              <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                  What Local Clients Say
                </h2>
                <p className="text-sm text-gray-600">Auto-rotating every 5 seconds</p>
              </div>
            </ScrollReveal>

            <div className="relative bg-white rounded-2xl shadow-xl p-8 sm:p-12 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3 }}
                  className="text-center"
                >
                  <div className="flex justify-center gap-1 mb-4">
                    {[...Array(quickTestimonials[currentTestimonial].rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <FaStar className="text-yellow-400 text-2xl" />
                      </motion.div>
                    ))}
                  </div>
                  <p className="text-lg sm:text-xl italic text-gray-700 mb-6">
                    "{quickTestimonials[currentTestimonial].quote}"
                  </p>
                  <div>
                    <p className="font-bold text-gray-900">{quickTestimonials[currentTestimonial].author}</p>
                    <p className="text-sm text-blue-600">{quickTestimonials[currentTestimonial].location}</p>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="flex justify-center gap-4 mt-8">
                <motion.button
                  onClick={prevTestimonial}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors"
                >
                  <FaChevronLeft className="text-blue-600" />
                </motion.button>
                
                <div className="flex gap-2 items-center">
                  {quickTestimonials.map((_, idx) => (
                    <motion.button
                      key={idx}
                      onClick={() => setCurrentTestimonial(idx)}
                      whileHover={{ scale: 1.3 }}
                      className={`w-2 h-2 rounded-full transition-all ${
                        idx === currentTestimonial ? 'bg-blue-600 w-2' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>

                <motion.button
                  onClick={nextTestimonial}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors"
                >
                  <FaChevronRight className="text-blue-600" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <FaMapMarkerAlt className="text-5xl mx-auto mb-6" />
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Visit Our Office in Patiala Today!
          </h2>
          <p className="text-lg sm:text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Free consultation • Walk-ins welcome • Coffee on us
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="tel:+916283380110"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-3 bg-white text-blue-600 font-bold rounded-xl shadow-2xl hover:bg-blue-50 transition-all"
            >
              <FaPhoneAlt className="inline mr-2" />
              Call Us
            </motion.a>
            <motion.a
              href="https://maps.google.com/?q=Patiala+Punjab"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-3 bg-white/10 backdrop-blur text-white font-bold rounded-xl border-2 border-white hover:bg-white hover:text-blue-600 transition-all"
            >
              <FaDirections className="inline mr-2" />
              Get Directions
            </motion.a>
          </div>
        </div>
      </section>
    </>
  )
}
