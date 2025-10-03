// app/pricing/components/FomoBanner.jsx
'use client'
import { motion } from 'framer-motion'
import { FaBolt, FaClock } from 'react-icons/fa'

export default function FomoBanner({ hours, minutes, seconds }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto max-w-5xl px-4 mb-8"
    >
      <div className="relative overflow-hidden bg-gradient-to-r from-green-500 via-green-600 to-emerald-600 rounded-2xl shadow-2xl">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] animate-pulse"></div>
        </div>

        <div className="relative px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Left side - Icon and text */}
          <div className="flex items-center gap-3">
            <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
              <FaBolt className="text-white text-2xl animate-pulse" />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg sm:text-xl">
                🎁 Limited Time Offer!
              </h3>
              <p className="text-white/90 text-sm">
                Get <strong className="font-bold">1 Month FREE Hosting</strong> if you order now!
              </p>
            </div>
          </div>

          {/* Right side - Countdown */}
          <div className="flex items-center gap-3 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl">
            <FaClock className="text-white text-xl" />
            <div className="flex items-center gap-2">
              <div className="text-center">
                <div className="bg-white text-red-600 font-mono font-bold text-2xl px-3 py-1 rounded">
                  {hours}
                </div>
                <div className="text-white text-xs mt-1">Hours</div>
              </div>
              <div className="text-white text-2xl font-bold">:</div>
              <div className="text-center">
                <div className="bg-white text-red-600 font-mono font-bold text-2xl px-3 py-1 rounded">
                  {minutes}
                </div>
                <div className="text-white text-xs mt-1">Mins</div>
              </div>
              <div className="text-white text-2xl font-bold">:</div>
              <div className="text-center">
                <div className="bg-white text-red-600 font-mono font-bold text-2xl px-3 py-1 rounded">
                  {seconds}
                </div>
                <div className="text-white text-xs mt-1">Secs</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
