'use client'

// Animated Card with ReactBits-style hover effects
import { motion } from 'framer-motion'

export default function AnimatedCard({ 
  children, 
  gradient = 'from-blue-500 to-cyan-600',
  hoverScale = 1.05,
  className = ''
}) {
  return (
    <motion.div
      className={`relative group ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{ 
        scale: hoverScale,
        transition: { duration: 0.3, ease: 'easeOut' }
      }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated gradient border on hover */}
      <div className={`absolute -inset-0.5 bg-gradient-to-r ${gradient} rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500`} />
      
      {/* Card content */}
      <div className="relative bg-white rounded-2xl">
        {children}
      </div>
    </motion.div>
  )
}
