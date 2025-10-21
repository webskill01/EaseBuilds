'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaExclamationTriangle, FaHome, FaPhone, FaWhatsapp, FaRedo } from 'react-icons/fa'

export default function Error({ error, reset }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 flex items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-64 h-64 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      {/* Error Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl w-full relative z-10"
      >
        {/* Error Card */}
        <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 sm:p-12 border border-gray-100">
          
          {/* Error Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="flex justify-center mb-8"
          >
            <div className="relative">
              <motion.div
                animate={{
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center shadow-xl"
              >
                <FaExclamationTriangle className="text-white text-4xl sm:text-5xl" />
              </motion.div>
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-gradient-to-br from-red-500 to-orange-500 rounded-full blur-xl opacity-50"
              />
            </div>
          </motion.div>

          {/* Error Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-center mb-8"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Oops! Something Went Wrong
            </h1>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl mx-auto mb-4">
              We apologize for the inconvenience. Don&apos;t worry, our team at EaseBuilds is on it!
            </p>
            
            {/* Error details (only in development) */}
            {process.env.NODE_ENV === 'development' && error?.message && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ delay: 0.6 }}
                className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl text-left"
              >
                <p className="text-sm text-red-700 font-mono break-all">
                  <strong>Error:</strong> {error.message}
                </p>
              </motion.div>
            )}
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
          >
            {/* Try Again Button */}
            <motion.button
              onClick={() => reset()}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all text-base w-full sm:w-auto"
            >
              <FaRedo className="text-lg" />
              Try Again
            </motion.button>

            {/* Go Home Button */}
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-all text-base w-full sm:w-auto"
              >
                <FaHome className="text-lg" />
                Go Home
              </motion.button>
            </Link>
          </motion.div>

          {/* Contact Options */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center pt-8 border-t border-gray-200"
          >
            <p className="text-sm text-gray-600 mb-4">
              Need immediate assistance? Contact us:
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+916283380110"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-100 text-blue-700 font-semibold rounded-lg hover:bg-blue-200 transition-colors text-sm"
              >
                <FaPhone className="text-base" />
                Call Us
              </a>
              <a
                href="https://wa.me/916283380110"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-100 text-green-700 font-semibold rounded-lg hover:bg-green-200 transition-colors text-sm"
              >
                <FaWhatsapp className="text-base" />
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>

        {/* Footer Message */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center text-sm text-gray-500 mt-6"
        >
          EaseBuilds - Best Web Developer in Patiala Punjab | Professional Support 24/7
        </motion.p>
      </motion.div>
    </div>
  )
}
