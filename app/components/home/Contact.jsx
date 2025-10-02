'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaPhone, FaEnvelope, FaWhatsapp, FaPaperPlane, FaClock } from 'react-icons/fa'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', phone: '', service: '', message: '' })
        setTimeout(() => setSubmitStatus(null), 5000)
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="relative py-8 sm:py10 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(0 0 0) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3">
            Get In Touch
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to grow your business? Let's discuss your project
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left: Contact Info - 2 columns */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-6 sm:p-8 text-white h-full flex flex-col shadow-xl">
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">Let's Start Something Great</h3>
                <p className="text-primary-100 text-sm">
                  Reach us directly through any channel below
                </p>
              </div>

              <div className="space-y-5 flex-grow">
                {/* Phone */}
                <a 
                  href="tel:+916283380110"
                  className="flex items-center gap-3 group hover:translate-x-1 transition-transform"
                >
                  <FaPhone className="text-2xl text-white group-hover:scale-110 transition-transform flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-sm">Call Us</div>
                    <div className="text-primary-100 group-hover:text-white transition-colors text-sm">
                      +91 62833-80110
                    </div>
                  </div>
                </a>

                {/* Email */}
                <a 
                  href="mailto:nitinemailss@gmail.com"
                  className="flex items-center gap-3 group hover:translate-x-1 transition-transform"
                >
                  <FaEnvelope className="text-2xl text-white group-hover:scale-110 transition-transform flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-sm">Email Us</div>
                    <div className="text-primary-100 group-hover:text-white transition-colors text-sm break-all">
                      nitinemailss@gmail.com
                    </div>
                  </div>
                </a>

                {/* WhatsApp */}
                <a 
                  href="https://wa.me/916283380110?text=Hi%20CodeNest,%20I'm%20interested%20in%20your%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group hover:translate-x-1 transition-transform"
                >
                  <FaWhatsapp className="text-2xl text-white group-hover:scale-110 transition-transform flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-sm">WhatsApp</div>
                    <div className="text-primary-100 group-hover:text-white transition-colors text-sm">
                      Chat with us instantly
                    </div>
                  </div>
                </a>
              </div>

              {/* Business Hours */}
              <div className="mt-6 pt-5 border-t border-white/20">
                <div className="flex items-start gap-2">
                  <FaClock className="text-lg text-white mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-primary-100 leading-relaxed">
                      <span className="font-semibold text-white block mb-1">Business Hours</span>
                      Mon-Fri: 9 AM - 6 PM<br />
                      Sat: 10 AM - 4 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form - 3 columns */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label htmlFor="name" className="label-field">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="input-field"
                  placeholder="John Doe"
                />
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="label-field">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="label-field">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="+1 (234) 567-890"
                  />
                </div>
              </div>

              {/* Service */}
              <div>
                <label htmlFor="service" className="label-field">
                  Service Needed *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="input-field"
                >
                  <option value="">Select a service</option>
                  <option value="custom-website">Custom Website</option>
                  <option value="online-store">Online Store</option>
                  <option value="redesign">Website Redesign</option>
                  <option value="maintenance">Maintenance</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="label-field">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="textarea-field"
                  placeholder="Tell us about your project goals and timeline..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full text-base sm:text-lg group shadow-lg hover:shadow-xl transition-all"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : (
                  <>
                    Send Message
                    <FaPaperPlane className="ml-2 inline-block group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>

              {/* Success Message */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-50 border-2 border-green-500 text-green-800 rounded-xl p-4 text-center font-medium"
                >
                  <span className="text-2xl mb-2 block">✓</span>
                  Thank you! We'll respond within 24 hours.
                </motion.div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-50 border-2 border-red-500 text-red-800 rounded-xl p-4 text-center font-medium"
                >
                  <span className="text-2xl mb-2 block">✕</span>
                  Oops! Please try again or email us directly.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
