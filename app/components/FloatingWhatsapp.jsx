'use client'

// Floating WhatsApp Button - Mobile First
// Shows on smaller screens, auto-hides on scroll down

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaWhatsapp, FaTimes } from 'react-icons/fa'

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [showTooltip, setShowTooltip] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Show button when scrolling up or at top, hide when scrolling down
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  // Auto-show tooltip on mount (first time users see it)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true)
      setTimeout(() => setShowTooltip(false), 3000) // Hide after 3s
    }, 2000)
    
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          className="fixed bottom-6 right-6 z-50 lg:hidden"
        >
          {/* Tooltip */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="absolute bottom-full right-0 mb-3 px-4 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-xl shadow-xl whitespace-nowrap"
              >
                <div className="flex items-center gap-2">
                  <span>Need help? Chat with us!</span>
                  <button
                    onClick={() => setShowTooltip(false)}
                    className="text-gray-400 hover:text-white"
                  >
                    <FaTimes className="text-xs" />
                  </button>
                </div>
                {/* Arrow */}
                <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-gray-900 rotate-45" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* WhatsApp Button */}
          <motion.a
            href="https://wa.me/916283380110?text=Hi%20EaseBuilds!%20I%20need%20help%20with%20web%20development"
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-2xl hover:bg-green-600 transition-all group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Chat on WhatsApp"
          >
            
            {/* Icon */}
            <FaWhatsapp className="text-3xl relative z-10 group-hover:scale-110 transition-transform" />
            
            {/* Notification badge */}
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center border-2 border-white">
              1
            </span>
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
