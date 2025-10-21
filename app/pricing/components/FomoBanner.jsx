'use client'

// FOMO Banner Component - Creates Urgency
// EaseBuilds - Best Web Developer in Patiala Punjab India

import { motion } from 'framer-motion'
import { FaBolt, FaClock, FaGift } from 'react-icons/fa'

export default function FomoBanner({ hours, minutes, seconds }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto max-w-6xl px-4 mb-6 sm:mb-8 lg:mb-10"
    >
      <div className="relative overflow-hidden bg-gradient-to-r from-green-500 via-green-600 to-emerald-600 rounded-xl sm:rounded-2xl shadow-2xl">
        
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-20" aria-hidden="true">
          <motion.div 
            className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] "
            animate={{
              backgroundPosition: ['0px 0px', '60px 60px'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear'
            }}
          />
        </div>

        <div className="relative px-4 sm:px-6 py-4 sm:py-5 lg:py-6 flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6">
          
          {/* Left side - Icon and text */}
          <div className="flex items-center gap-3 sm:gap-4 text-center lg:text-left">
            <motion.div 
              className="bg-white/20 backdrop-blur-sm p-3 sm:p-4 rounded-full flex-shrink-0"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            >
              <FaGift className="text-white text-2xl sm:text-3xl" />
            </motion.div>
            <div>
              <h3 className="text-white font-bold text-lg sm:text-xl lg:text-2xl flex items-center gap-2 justify-center lg:justify-start">
                <FaBolt className="text-yellow-300 animate-pulse" />
                Limited Time Offer!
              </h3>
              <p className="text-white/95 text-sm sm:text-base mt-1">
                Get <strong className="font-bold text-yellow-300">40% OFF</strong> + <strong className="font-bold">1 Month FREE Maintenance</strong> for Patiala businesses!
              </p>
            </div>
          </div>

          {/* Right side - Countdown */}
          <div className="flex items-center gap-3 sm:gap-4 bg-white/20 backdrop-blur-sm px-4 sm:px-6 py-3 sm:py-4 rounded-xl border-2 border-white/30">
            <div className="flex items-center gap-2 text-white">
              <FaClock className="text-xl sm:text-2xl animate-pulse" />
              <span className="text-xs sm:text-sm font-semibold hidden sm:inline">Offer ends in:</span>
            </div>
            <div className="flex items-center gap-2">
              {/* Hours */}
              <div className="text-center">
                <motion.div 
                  className="bg-white text-red-600 font-mono font-bold text-xl sm:text-2xl lg:text-3xl px-2 sm:px-3 py-1 sm:py-2 rounded-lg shadow-lg min-w-[40px] sm:min-w-[50px]"
                  key={hours}
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {String(hours).padStart(2, '0')}
                </motion.div>
                <div className="text-white text-[10px] sm:text-xs mt-1 font-semibold">Hours</div>
              </div>
              
              <div className="text-white text-xl sm:text-2xl font-bold">:</div>
              
              {/* Minutes */}
              <div className="text-center">
                <motion.div 
                  className="bg-white text-red-600 font-mono font-bold text-xl sm:text-2xl lg:text-3xl px-2 sm:px-3 py-1 sm:py-2 rounded-lg shadow-lg min-w-[40px] sm:min-w-[50px]"
                  key={minutes}
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {String(minutes).padStart(2, '0')}
                </motion.div>
                <div className="text-white text-[10px] sm:text-xs mt-1 font-semibold">Mins</div>
              </div>
              
              <div className="text-white text-xl sm:text-2xl font-bold">:</div>
              
              {/* Seconds */}
              <div className="text-center">
                <motion.div 
                  className="bg-white text-red-600 font-mono font-bold text-xl sm:text-2xl lg:text-3xl px-2 sm:px-3 py-1 sm:py-2 rounded-lg shadow-lg min-w-[40px] sm:min-w-[50px]"
                  key={seconds}
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {String(seconds).padStart(2, '0')}
                </motion.div>
                <div className="text-white text-[10px] sm:text-xs mt-1 font-semibold">Secs</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Info */}
        <div className="relative px-4 sm:px-6 pb-3 sm:pb-4">
          <p className="text-center text-white/90 text-xs sm:text-sm">
            ⭐ Available for new clients only
          </p>
        </div>
      </div>
    </motion.div>
  )
}
