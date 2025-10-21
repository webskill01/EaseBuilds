'use client'

// Contact Section - With Zod Validation
// EaseBuilds - Best Web Developer in Patiala Punjab India

import { useState } from 'react'
import { motion } from 'framer-motion'
import { z } from 'zod'
import {
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
  FaPaperPlane,
  FaClock,
  FaBolt,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaExclamationCircle,
  FaHeadset,
} from 'react-icons/fa'
import ScrollReveal from '../animations/ScrollReveal'

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



export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    honeypot: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [validationErrors, setValidationErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
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
  
  // Prepare data for validation (remove honeypot, handle empty phone)
  const dataToValidate = {
    name: formData.name,
    email: formData.email,
    phone: formData.phone || '',
    service: formData.service,
    message: formData.message,
  }
  
  // Client-side validation with Zod using safeParse
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
      const element = document.getElementById(firstErrorField)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    }
    return
  }
  
  setValidationErrors({})
  setIsSubmitting(true)
  setSubmitStatus(null)

  try {
    const submissionData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone || '',
      service: formData.service,
      message: formData.message,
      submittedAt: new Date().toISOString(),
      source: 'Contact Form - EaseBuilds Website - Patiala Punjab India',
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
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
        honeypot: '',
      })
      
      setTimeout(() => setSubmitStatus(null), 12000)
    } else {
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus(null), 8000)
    }
  } catch (error) {
    console.error('Submission error:', error)
    setSubmitStatus('error')
    setTimeout(() => setSubmitStatus(null), 8000)
  } finally {
    setIsSubmitting(false)
  }
}

  const contactMethods = [
    {
      icon: FaPhone,
      title: 'Call Us Anytime',
      value: '+91 6283380110',
      href: 'tel:+916283380110',
      gradient: 'from-blue-500 to-blue-600',
      description: 'Mon-Sat: 9 AM - 6 PM',
      ariaLabel: 'Call EaseBuilds at +91 6283380110',
    },
    {
      icon: FaWhatsapp,
      title: 'WhatsApp Chat',
      value: 'Instant Response',
      href: 'https://wa.me/916283380110?text=Hi%20EaseBuilds,%20I%20need%20a%20professional%20website%20for%20my%20business',
      gradient: 'from-green-500 to-green-600',
      description: '24/7 Quick Replies',
      ariaLabel: 'Chat with EaseBuilds on WhatsApp',
    },
    {
      icon: FaEnvelope,
      title: 'Email Us',
      value: 'easebuilds.in@gmail.com',
      href: 'mailto:easebuilds.in@gmail.com?subject=Website Development Inquiry',
      gradient: 'from-purple-500 to-purple-600',
      description: 'Detailed Inquiries',
      ariaLabel: 'Email EaseBuilds',
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Visit Us',
      value: 'Patiala, Punjab 147001',
      href: '#',
      gradient: 'from-orange-500 to-orange-600',
      description: 'Local Service in Patiala',
      isLocation: true,
      ariaLabel: 'EaseBuilds location in Patiala Punjab India',
    },
  ]

  return (
    <section
      id="contact"
      className="relative py-8 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden"
      aria-labelledby="contact-heading"
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" aria-hidden="true">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(59 130 246) 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '40px 40px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      {/* Decorative Shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-20 pointer-events-none" aria-hidden="true" />

      <div className="container-custom relative z-10">
        {/* SEO-Optimized Header */}
        <ScrollReveal direction="up" className="text-center mb-10 sm:mb-14 lg:mb-16">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold shadow-sm">
              <FaPaperPlane className="text-sm" aria-hidden="true" />
              Get Started Today
            </span>
          </motion.div>

          <h2 id="contact-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Contact the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Best Web Developer in Patiala
            </span>
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto px-4 mb-4">
            Ready to grow your business online? Contact <strong className="text-blue-600">EaseBuilds - Best Web Developer in Patiala</strong> for professional website development. 
            Fast response guaranteed within 2-4 hours!
          </p>

          {/* Response Time Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full">
            <FaHeadset className="text-green-600 text-sm" />
            <span className="text-xs sm:text-sm font-semibold text-green-700">
              Response Time: 2-4 Hours
            </span>
          </div>
        </ScrollReveal>

        {/* Quick Contact Methods Grid */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-10 sm:mb-12 lg:mb-16">
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.isLocation ? undefined : method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={method.ariaLabel}
                className={`group relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100 overflow-hidden ${method.isLocation ? 'cursor-default' : 'cursor-pointer'}`}
                whileHover={!method.isLocation ? { y: -5, scale: 1.02 } : {}}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${method.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  aria-hidden="true"
                />

                <div className="relative z-10">
                  <motion.div
                    className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${method.gradient} rounded-xl flex items-center justify-center mb-3 sm:mb-4 shadow-md`}
                    whileHover={!method.isLocation ? { rotate: 360, scale: 1.1 } : {}}
                    transition={{ duration: 0.6 }}
                  >
                    <method.icon className="text-xl sm:text-2xl text-white" />
                  </motion.div>

                  <h3 className="text-xs sm:text-sm font-bold text-gray-900 mb-1">
                    {method.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-blue-600 font-semibold mb-1 break-all">
                    {method.value}
                  </p>
                  <p className="text-[10px] sm:text-xs text-gray-500">
                    {method.description}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Left: Enhanced Contact Info */}
          <ScrollReveal direction="left" className="lg:col-span-2">
            <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 text-white h-full flex flex-col shadow-2xl relative overflow-hidden">
              {/* Animated pattern overlay */}
              <div className="absolute inset-0 opacity-10" aria-hidden="true">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'radial-gradient(circle at 20px 20px, white 2px, transparent 0)',
                  backgroundSize: '40px 40px'
                }} />
              </div>

              <div className="relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-6 sm:mb-8"
                >
                  <h3 className="text-2xl sm:text-3xl font-bold mb-3">
                    Why Choose EaseBuilds?
                  </h3>
                  <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
                    We're the <strong className="text-white">best web development company in Patiala</strong>, 
                    delivering professional websites that drive real business results for local companies.
                  </p>
                </motion.div>

                {/* Trust Indicators */}
                <div className="space-y-4 sm:space-y-5 mb-6 sm:mb-8">
                  {[
                    { icon: FaCheckCircle, text: '50+ Successful Projects' },
                    { icon: FaCheckCircle, text: 'Fast 2-4 Weeks Delivery' },
                    { icon: FaCheckCircle, text: '100% Client Satisfaction Rate' },
                    { icon: FaCheckCircle, text: 'Free Consultation & Ongoing Support' },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-3 group"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                      <item.icon className="text-lg text-green-300 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="text-sm sm:text-base">{item.text}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Business Address */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="mb-6 sm:mb-8 pb-6 sm:pb-8 border-b border-white/20"
                  itemScope
                  itemType="https://schema.org/LocalBusiness"
                >
                  <div className="flex items-start gap-3">
                    <FaMapMarkerAlt className="text-xl text-white mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                      <p className="text-sm sm:text-base leading-relaxed">
                        <span className="font-bold text-white block mb-2" itemProp="name">
                          EaseBuilds Web Development
                        </span>
                        <span className="text-blue-100">
                          <span itemProp="addressLocality">Patiala</span>, 
                          <span itemProp="addressRegion"> Punjab</span>{' '}
                          <span itemProp="postalCode">147001</span>
                          <br />
                          <span itemProp="addressCountry">India</span>
                        </span>
                      </p>
                      <p className="text-xs text-blue-200 mt-2">
                        Serving: Patiala, Rajpura, Sangrur, Nabha, Mohali, Chandigarh & All Over India
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Business Hours */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="pb-6 sm:pb-8 border-b border-white/20"
                >
                  <div className="flex items-start gap-3">
                    <FaClock className="text-xl text-white mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <p className="text-sm sm:text-base leading-relaxed">
                        <span className="font-bold text-white block mb-2">
                          Business Hours
                        </span>
                        <span className="text-blue-100 text-xs sm:text-sm">
                          <strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM
                          <br />
                          <strong>Saturday:</strong> 10:00 AM - 4:00 PM
                          <br />
                          <strong>Sunday:</strong> Closed
                          <br />
                          <span className="text-green-300 font-semibold mt-1 block">
                            ⚡ WhatsApp: 24/7 Available
                          </span>
                        </span>
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Special Offer Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, type: 'spring' }}
                  className="mt-6 sm:mt-8 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm rounded-xl p-4 border border-yellow-400/30"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <FaBolt className="text-yellow-300 text-lg animate-pulse" />
                    <span className="font-bold text-sm sm:text-base text-yellow-100">Limited Time Offer!</span>
                  </div>
                  <p className="text-xs sm:text-sm text-blue-100">
                    Get <strong className="text-white">FREE hosting for 1 month</strong> + 
                    <strong className="text-white"> FREE SSL certificate</strong> with any website package
                  </p>
                </motion.div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Enhanced Contact Form with Zod Validation */}
          <ScrollReveal direction="right" delay={0.2} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6" noValidate>
              {/* Honeypot field (hidden from users) */}
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

              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm sm:text-base font-semibold text-gray-700 mb-2">
                  Your Name <span className="text-red-500" aria-label="required">*</span>
                </label>
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 sm:py-4 rounded-xl border-2 ${
                    validationErrors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-100' : 'border-gray-200 focus:border-blue-500 focus:ring-blue-100'
                  } focus:ring-4 outline-none transition-all duration-300 text-sm sm:text-base`}
                  placeholder="e.g., Rajesh Kumar"
                  whileFocus={{ scale: 1.01 }}
                  aria-required="true"
                  aria-invalid={!!validationErrors.name}
                />
                {validationErrors.name && (
                  <motion.p 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-2 text-sm text-red-600 flex items-center gap-1"
                  >
                    <FaExclamationCircle className="flex-shrink-0" />
                    {validationErrors.name}
                  </motion.p>
                )}
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm sm:text-base font-semibold text-gray-700 mb-2">
                    Email Address <span className="text-red-500" aria-label="required">*</span>
                  </label>
                  <motion.input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 sm:py-4 rounded-xl border-2 ${
                      validationErrors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-100' : 'border-gray-200 focus:border-blue-500 focus:ring-blue-100'
                    } focus:ring-4 outline-none transition-all duration-300 text-sm sm:text-base`}
                    placeholder="your@email.com"
                    whileFocus={{ scale: 1.01 }}
                    aria-required="true"
                    aria-invalid={!!validationErrors.email}
                  />
                  {validationErrors.email && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-2 text-sm text-red-600 flex items-center gap-1"
                    >
                      <FaExclamationCircle className="flex-shrink-0" />
                      {validationErrors.email}
                    </motion.p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm sm:text-base font-semibold text-gray-700 mb-2">
                    WhatsApp Number
                  </label>
                  <motion.input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 sm:py-4 rounded-xl border-2 ${
                      validationErrors.phone ? 'border-red-500 focus:border-red-500 focus:ring-red-100' : 'border-gray-200 focus:border-blue-500 focus:ring-blue-100'
                    } focus:ring-4 outline-none transition-all duration-300 text-sm sm:text-base`}
                    placeholder="+91 98765-43210"
                    whileFocus={{ scale: 1.01 }}
                    aria-invalid={!!validationErrors.phone}
                  />
                  {validationErrors.phone && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-2 text-sm text-red-600 flex items-center gap-1"
                    >
                      <FaExclamationCircle className="flex-shrink-0" />
                      {validationErrors.phone}
                    </motion.p>
                  )}
                </div>
              </div>

              {/* Service */}
              <div>
                <label htmlFor="service" className="block text-sm sm:text-base font-semibold text-gray-700 mb-2">
                  Service Required <span className="text-red-500" aria-label="required">*</span>
                </label>
                <motion.select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 sm:py-4 rounded-xl border-2 ${
                    validationErrors.service ? 'border-red-500 focus:border-red-500 focus:ring-red-100' : 'border-gray-200 focus:border-blue-500 focus:ring-blue-100'
                  } focus:ring-4 outline-none transition-all duration-300 text-sm sm:text-base bg-white`}
                  whileFocus={{ scale: 1.01 }}
                  aria-required="true"
                  aria-invalid={!!validationErrors.service}
                >
                  <option value="">Select a service</option>
                  <option value="custom-website">Custom Website Development</option>
                  <option value="ecommerce">E-commerce Website</option>
                  <option value="redesign">Website Redesign & Modernization</option>
                  <option value="maintenance">Website Maintenance & Support</option>
                  <option value="seo">SEO & Digital Marketing</option>
                  <option value="logo-design">Logo & Branding Design</option>
                  <option value="other">Other Services</option>
                </motion.select>
                {validationErrors.service && (
                  <motion.p 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-2 text-sm text-red-600 flex items-center gap-1"
                  >
                    <FaExclamationCircle className="flex-shrink-0" />
                    {validationErrors.service}
                  </motion.p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm sm:text-base font-semibold text-gray-700 mb-2">
                  Project Details <span className="text-red-500" aria-label="required">*</span>
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className={`w-full px-4 py-3 sm:py-4 rounded-xl border-2 ${
                    validationErrors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-100' : 'border-gray-200 focus:border-blue-500 focus:ring-blue-100'
                  } focus:ring-4 outline-none transition-all duration-300 resize-none text-sm sm:text-base`}
                  placeholder="Tell us about your business and website requirements... (minimum 20 characters)"
                  whileFocus={{ scale: 1.01 }}
                  aria-required="true"
                  aria-invalid={!!validationErrors.message}
                />
                {validationErrors.message && (
                  <motion.p 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-2 text-sm text-red-600 flex items-center gap-1"
                  >
                    <FaExclamationCircle className="flex-shrink-0" />
                    {validationErrors.message}
                  </motion.p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-4 sm:py-5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 text-base sm:text-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                whileHover={!isSubmitting ? { scale: 1.02, y: -2 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                aria-label="Submit contact form"
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    />
                    Sending Message...
                  </>
                ) : (
                  <>
                    Send Message to EaseBuilds
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <FaPaperPlane />
                    </motion.div>
                  </>
                )}
              </motion.button>

              {/* Success Message */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-500 text-green-800 rounded-2xl p-5 sm:p-6 text-center shadow-lg"
                  role="alert"
                  aria-live="polite"
                >
                  <FaCheckCircle className="text-4xl sm:text-5xl text-green-600 mx-auto mb-3" />
                  <p className="font-bold text-lg sm:text-xl mb-2">
                    Thank You for Contacting EaseBuilds!
                  </p>
                  <p className="text-sm sm:text-base mb-2">
                    We've received your message! Our team will contact you{' '}
                    {formData.phone && <>on WhatsApp at <strong className="text-green-900">{formData.phone}</strong>{' '}</>}
                    within <strong>2-4 hours</strong> (during business hours).
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-green-700 bg-green-100 px-4 py-2 rounded-lg inline-block mt-2">
                    🎉 You're eligible for FREE hosting & SSL certificate with your website package!
                  </p>
                </motion.div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className="bg-red-50 border-2 border-red-500 text-red-800 rounded-2xl p-5 sm:p-6 text-center shadow-lg"
                  role="alert"
                  aria-live="assertive"
                >
                  <FaExclamationCircle className="text-4xl sm:text-5xl text-red-600 mx-auto mb-3" />
                  <p className="font-bold text-lg sm:text-xl mb-2">
                    Oops! Something went wrong
                  </p>
                  <p className="text-sm sm:text-base mb-3">
                    Please try again or contact us directly via:
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2 justify-center">
                    <a 
                      href="https://wa.me/916283380110" 
                      className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg transition-colors text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaWhatsapp /> WhatsApp
                    </a>
                    <a 
                      href="tel:+916283380110" 
                      className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg transition-colors text-sm"
                    >
                      <FaPhone /> Call Now
                    </a>
                  </div>
                </motion.div>
              )}
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
