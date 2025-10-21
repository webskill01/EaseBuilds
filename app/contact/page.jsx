'use client'

// Contact Page - EaseBuilds (COMPLETE & FIXED)

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useRef, useState } from 'react'
import { z } from 'zod'
import { 
  FaPhone, 
  FaWhatsapp, 
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaCheckCircle,
  FaArrowRight,
  FaUser,
  FaComment,
  FaPaperPlane,
  FaCalendarAlt,
  FaExclamationCircle
} from 'react-icons/fa'
import Header from '@/app/components/layout/Header'
import Footer from '@/app/components/layout/Footer'
import ScrollReveal from '@/app/components/animations/ScrollReveal'
import HeroImage from '../components/HeroImage'

// Zod validation schema
const contactSchema = z.object({
  name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name is too long'),
  email: z.string()
    .email('Please enter a valid email address'),
  phone: z.string()
    .refine(
      (val) => val === '' || (val.length >= 10 && val.length <= 15),
      'Phone number must be 10-15 digits if provided'
    ),
  service: z.string()
    .min(1, 'Please select a service'),
  message: z.string()
    .min(20, 'Message must be at least 20 characters')
    .max(1000, 'Message is too long'),
})

export default function ContactPage() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  // Form state with Zod validation
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    honeypot: ''
  })

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  })

  const [validationErrors, setValidationErrors] = useState({})
  const [openFaq, setOpenFaq] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear validation error for this field
    if (validationErrors[name]) {
      setValidationErrors(prev => ({
        ...prev,
        [name]: null
      }))
    }
  }

const handleSubmit = async (e) => {
  e.preventDefault()
  
  // Honeypot spam check
  if (formData.honeypot && formData.honeypot.trim() !== '') {
    return
  }
  
  // Prepare data for validation
  const dataToValidate = {
    name: formData.name,
    email: formData.email,
    phone: formData.phone || '',
    service: formData.service,
    message: formData.message,
  }
  
  // Client-side validation with Zod
  const validation = contactSchema.safeParse(dataToValidate)
  
  if (!validation.success) {
    const errors = {}
    validation.error.issues.forEach(issue => {
      if (issue.path.length > 0) {
        errors[issue.path[0]] = issue.message
      }
    })
    setValidationErrors(errors)
    
    // Scroll to first error
    const firstErrorField = Object.keys(errors)[0]
    if (firstErrorField) {
      document.getElementById(firstErrorField)?.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center' 
      })
    }
    return
  }

  setValidationErrors({})
  setFormStatus({ submitting: true, submitted: false, error: null })

  try {
    const submissionData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone || '',
      service: formData.service,
      message: formData.message,
      submittedAt: new Date().toISOString(),
      source: 'Contact Page - EaseBuilds Website',
      location: 'Patiala Punjab India',
      withinFomoOffer: false,
    }

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(submissionData),
    })

    const data = await response.json()

    if (response.ok && data.success) {
      setFormStatus({ submitting: false, submitted: true, error: null })
      setFormData({ 
        name: '', 
        email: '', 
        phone: '', 
        service: '', 
        message: '',
        honeypot: ''
      })
      
      setTimeout(() => {
        setFormStatus({ submitting: false, submitted: false, error: null })
      }, 15000)
    } else {
      throw new Error(data.error || 'Failed to submit')
    }
  } catch (error) {
    console.error('Submission error:', error)
    setFormStatus({ 
      submitting: false, 
      submitted: false, 
      error: error.message || 'Failed to send message. Please call us directly.' 
    })
    
    setTimeout(() => {
      setFormStatus({ submitting: false, submitted: false, error: null })
    }, 10000)
  }
}


  return (
    <>
      <Header />

      {/* Hero Section - Light Overlay */}
      <section 
        ref={heroRef}
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
      >
        {/* Background Image with Light Overlay */}
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <HeroImage
            src="/images/contact-hero.jpg"
            alt="Contact Us - EaseBuilds Patiala"
          />
          {/* LIGHT Gradient Overlay - 40% opacity */}
           <div className="absolute inset-0 bg-gradient-to-br from-gray-800/60 via-gray-700/50 to-gray-900/60" />
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle, white 2px, transparent 2px)',
                backgroundSize: '50px 50px'
              }} />
          </div>
        </motion.div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 sm:py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/90 backdrop-blur-md rounded-full mb-6 border border-blue-100 shadow-lg"
            >
              <FaPhone className="text-blue-600 text-lg" />
              <span className="text-sm font-semibold text-gray-800">
                We're Here to Help!
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg"
            >
              Contact Web Developer in Patiala Punjab
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg sm:text-xl text-white mb-6 max-w-2xl mx-auto leading-relaxed drop-shadow-md"
            >
              Get in touch with EaseBuilds for website development, SEO services, 
              and digital solutions. We respond within 2 hours!
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.a
                href="tel:+916283380110"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-blue-600 font-bold rounded-xl shadow-2xl text-base sm:text-lg hover:shadow-xl transition-all"
              >
                <FaPhone className="text-lg" />
                <span> Call +91 6283380110</span>
              </motion.a>

              <motion.a
                href="https://wa.me/916283380110"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-green-500 text-white font-bold rounded-xl shadow-2xl text-base sm:text-lg hover:bg-green-600 transition-all"
              >
                <FaWhatsapp className="text-xl" />
                <span>WhatsApp Us</span>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Methods Grid */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <ScrollReveal direction="up">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Multiple Ways to Reach Us
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
                Choose your preferred method of communication
              </p>
            </div>
          </ScrollReveal>

          {/* Contact Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: FaPhone,
                title: 'Call Us',
                value: '+91 6283380110',
                link: 'tel:+916283380110',
                color: 'from-blue-600 to-cyan-500',
                description: 'Mon-Sat: 9AM-6PM'
              },
              {
                icon: FaWhatsapp,
                title: 'WhatsApp',
                value: 'Chat Instantly',
                link: 'https://wa.me/916283380110',
                color: 'from-green-500 to-emerald-600',
                description: '24/7 Available'
              },
              {
                icon: FaEnvelope,
                title: 'Email',
                value: 'info@easebuilds.in',
                link: 'mailto:info@easebuilds.in',
                color: 'from-purple-600 to-pink-600',
                description: 'Response in 2 hours'
              },
              {
                icon: FaMapMarkerAlt,
                title: 'Visit Office',
                value: 'Patiala, Punjab',
                link: 'https://maps.google.com/?q=Patiala+Punjab',
                color: 'from-orange-500 to-red-600',
                description: 'Free consultation'
              }
            ].map((method, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 0.1}>
                <motion.a
                  href={method.link}
                  target={method.link.startsWith('http') ? '_blank' : '_self'}
                  rel={method.link.startsWith('http') ? 'noopener noreferrer' : ''}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="block p-6 sm:p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border-2 border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all"
                >
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center mb-5 mx-auto`}>
                    <method.icon className="text-white text-2xl sm:text-3xl" />
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 text-center">
                    {method.title}
                  </h3>
                  
                  <p className="text-blue-600 font-semibold mb-2 text-center text-sm sm:text-base">
                    {method.value}
                  </p>
                  
                  <p className="text-xs sm:text-sm text-gray-500 text-center">
                    {method.description}
                  </p>
                </motion.a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 max-w-7xl mx-auto">
            
            {/* Contact Form */}
            <ScrollReveal direction="left">
              <div className="bg-white p-8 sm:p-10 lg:p-12 rounded-3xl shadow-2xl border-2 border-gray-100">
                
                {/* Form Header */}
                <div className="mb-8">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                    Send Us a Message
                  </h3>
                  <p className="text-base text-gray-600">
                    Fill out the form and we'll get back to you within 2 hours
                  </p>
                </div>

                {formStatus.submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10"
                  >
                    <FaCheckCircle className="text-green-500 text-6xl mx-auto mb-6" />
                    <h4 className="text-2xl font-bold text-gray-900 mb-3">
                      Message Sent Successfully!
                    </h4>
                    <p className="text-gray-600 mb-8 text-lg">
                      We'll contact you within 2 hours.
                    </p>
                    <button
                      onClick={() => setFormStatus({ submitting: false, submitted: false, error: null })}
                      className="px-8 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-9 " noValidate>
                    
                    {/* Honeypot */}
                    <input
                      type="text"
                      name="honeypot"
                      value={formData.honeypot}
                      onChange={handleChange}
                      className="hidden"
                      tabIndex="-1"
                      autoComplete="off"
                      aria-hidden="true"
                    />

                    {/* Name Field */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Your Name *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <FaUser className="text-gray-400 text-sm" />
                        </div>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className={`w-full pl-12 pr-4 py-3.5 border-2 ${
                            validationErrors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-100' : 'border-gray-200 focus:border-blue-500 focus:ring-blue-100'
                          } rounded-xl focus:ring-4 transition-all text-gray-900`}
                          placeholder="Enter your name"
                        />
                      </div>
                      {validationErrors.name && (
                        <motion.p 
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-2 text-sm text-red-600 flex items-center gap-1"
                        >
                          <FaExclamationCircle />
                          {validationErrors.name}
                        </motion.p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <FaEnvelope className="text-gray-400 text-sm" />
                        </div>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className={`w-full pl-12 pr-4 py-3.5 border-2 ${
                            validationErrors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-100' : 'border-gray-200 focus:border-blue-500 focus:ring-blue-100'
                          } rounded-xl focus:ring-4 transition-all text-gray-900`}
                          placeholder="your@email.com"
                        />
                      </div>
                      {validationErrors.email && (
                        <motion.p 
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-2 text-sm text-red-600 flex items-center gap-1"
                        >
                          <FaExclamationCircle />
                          {validationErrors.email}
                        </motion.p>
                      )}
                    </div>

                    {/* Phone Field */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Whatsapp Number*
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <FaPhone className="text-gray-400 text-sm" />
                        </div>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className={`w-full pl-12 pr-4 py-3.5 border-2 ${
                            validationErrors.phone ? 'border-red-500 focus:border-red-500 focus:ring-red-100' : 'border-gray-200 focus:border-blue-500 focus:ring-blue-100'
                          } rounded-xl focus:ring-4 transition-all text-gray-900`}
                          placeholder="+91 98765 43210"
                        />
                      </div>
                      {validationErrors.phone && (
                        <motion.p 
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-2 text-sm text-red-600 flex items-center gap-1"
                        >
                          <FaExclamationCircle />
                          {validationErrors.phone}
                        </motion.p>
                      )}
                    </div>

                    {/* Service Dropdown */}
                    <div>
                      <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                        Service Interested In *
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-3.5 border-2 ${
                          validationErrors.service ? 'border-red-500 focus:border-red-500 focus:ring-red-100' : 'border-gray-200 focus:border-blue-500 focus:ring-blue-100'
                        } rounded-xl focus:ring-4 transition-all text-gray-900`}
                      >
                        <option value="">Select a service</option>
                        <option value="custom-website">Custom Website Design</option>
                        <option value="ecommerce">E-commerce Development</option>
                        <option value="seo">SEO Services</option>
                        <option value="maintenance">Website Maintenance</option>
                        <option value="other">Other</option>
                      </select>
                      {validationErrors.service && (
                        <motion.p 
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-2 text-sm text-red-600 flex items-center gap-1"
                        >
                          <FaExclamationCircle />
                          {validationErrors.service}
                        </motion.p>
                      )}
                    </div>

                    {/* Message Textarea */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                        Your Message *
                      </label>
                      <div className="relative">
                        <div className="absolute top-3.5 left-0 pl-4 pointer-events-none">
                          <FaComment className="text-gray-400 text-sm" />
                        </div>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className={`w-full pl-12 pr-4 py-3.5 border-2 ${
                            validationErrors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-100' : 'border-gray-200 focus:border-blue-500 focus:ring-blue-100'
                          } rounded-xl focus:ring-4 transition-all resize-none text-gray-900`}
                          placeholder="Tell us about your project..."
                        />
                      </div>
                      {validationErrors.message && (
                        <motion.p 
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-2 text-sm text-red-600 flex items-center gap-1"
                        >
                          <FaExclamationCircle />
                          {validationErrors.message}
                        </motion.p>
                      )}
                    </div>

                    {/* Error Message */}
                    {formStatus.error && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 bg-red-50 border-2 border-red-200 rounded-xl text-red-700 text-sm"
                      >
                        {formStatus.error}
                      </motion.div>
                    )}

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={formStatus.submitting}
                      whileHover={{ scale: formStatus.submitting ? 1 : 1.02 }}
                      whileTap={{ scale: formStatus.submitting ? 1 : 0.98 }}
                      className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 text-base"
                    >
                      {formStatus.submitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <FaPaperPlane />
                          <span>Send Message</span>
                        </>
                      )}
                    </motion.button>

                    <p className="text-sm text-gray-500 text-center mt-4">
                      We respect your privacy and will never share your information.
                    </p>
                  </form>
                )}
              </div>
            </ScrollReveal>

            {/* Office Info & Map */}
            <ScrollReveal direction="right">
              <div className="space-y-8">
                
                {/* Office Details Card */}
                <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-xl border-2 border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-8">
                    Office Information
                  </h3>

                  <div className="space-y-6">
                    {/* Address */}
                    <div className="flex items-start gap-5">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <FaMapMarkerAlt className="text-white text-xl" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 text-lg">Address</h4>
                        <p className="text-gray-600 leading-relaxed">
                          Patiala, Punjab 147001, India
                        </p>
                      </div>
                    </div>

                    {/* Business Hours */}
                    <div className="flex items-start gap-5">
                      <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <FaClock className="text-white text-xl" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 text-lg">Business Hours</h4>
                        <p className="text-gray-600 leading-relaxed">
                          Monday - Friday: 9:00 AM - 6:00 PM<br />
                          Saturday: 10:00 AM - 4:00 PM<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>

                    {/* Response Time */}
                    <div className="flex items-start gap-5">
                      <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <FaCalendarAlt className="text-white text-xl" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 text-lg">Response Time</h4>
                        <p className="text-gray-600 leading-relaxed">
                          We respond to all inquiries within 2 hours during business hours
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Google Map - FIXED */}
                <div className="bg-white p-4 rounded-3xl shadow-xl border-2 border-gray-100">
                  <div className="h-[400px] rounded-2xl overflow-hidden mb-4">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110452!2d76.38553!3d30.33977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391028ab86ef0c07%3A0x3d64b5d3c474830f!2sPatiala%2C%20Punjab!5e0!3m2!1sen!2sin!4v1698765432100!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="EaseBuilds Office Location Patiala"
                    />
                  </div>
                  <motion.a
                    href="https://maps.google.com/?q=Patiala+Punjab+147001+India"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    className="block px-6 py-3.5 bg-blue-600 text-white font-semibold rounded-xl text-center hover:bg-blue-700 transition-colors"
                  >
                    Get Directions
                  </motion.a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ Section - FIXED with Smooth Animations */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <ScrollReveal direction="up">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
                Common questions about contacting us
              </p>
            </div>
          </ScrollReveal>

          {/* FAQ Items - FIXED Accordion Animation */}
          <div className="max-w-4xl mx-auto space-y-4">
            {[
              {
                question: 'How quickly will you respond to my inquiry?',
                answer: 'We respond to all inquiries within 2 hours during business hours (Mon-Fri 9AM-6PM). For urgent matters, call or WhatsApp us directly for immediate assistance.'
              },
              {
                question: 'Do you offer free consultations?',
                answer: 'Yes! We offer free 30-minute consultations for all new projects. You can visit our office in Patiala or schedule a video call at your convenience.'
              },
              {
                question: 'What information should I include in my message?',
                answer: 'Please include: 1) Type of website you need, 2) Your budget range, 3) Timeline expectations, 4) Any specific features you want. The more details, the better we can help!'
              },
              {
                question: 'Can I visit your office without an appointment?',
                answer: 'Yes, walk-ins are welcome during business hours! However, we recommend calling ahead to ensure someone is available to give you full attention.'
              },
              {
                question: 'Do you work on weekends?',
                answer: 'Our office is open Saturdays 10AM-4PM. For urgent support, you can reach us via WhatsApp 24/7. We prioritize client emergencies even outside business hours.'
              }
            ].map((faq, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 0.05}>
                <div className="bg-gray-50 rounded-2xl border-2 border-gray-200 hover:border-blue-300 transition-all overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex justify-between items-center cursor-pointer p-6 sm:p-8 text-left"
                    aria-expanded={openFaq === index}
                  >
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: openFaq === index ? 90 : 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <FaArrowRight className="text-blue-600 flex-shrink-0" />
                    </motion.div>
                  </button>
                  
                  <AnimatePresence initial={false}>
                    {openFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ 
                          height: 'auto', 
                          opacity: 1,
                          transition: {
                            height: { duration: 0.4, ease: 'easeInOut' },
                            opacity: { duration: 0.3, delay: 0.1 }
                          }
                        }}
                        exit={{ 
                          height: 0, 
                          opacity: 0,
                          transition: {
                            height: { duration: 0.3, ease: 'easeInOut' },
                            opacity: { duration: 0.2 }
                          }
                        }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 sm:px-8 py-6">
                          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
