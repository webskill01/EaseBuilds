'use client'

// Animated Grid Background inspired by ReactBits
// Manual implementation using Framer Motion (no GSAP needed)

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function GridBackground({ 
  dotColor = 'rgba(59, 130, 246, 0.3)', // Blue
  lineColor = 'rgba(59, 130, 246, 0.1)', 
  gridSize = 50,
  dotSize = 2,
  animated = true 
}) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  const cols = Math.ceil(dimensions.width / gridSize)
  const rows = Math.ceil(dimensions.height / gridSize)

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Grid lines */}
      <svg 
        className="absolute inset-0 w-full h-full" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern 
            id="grid" 
            width={gridSize} 
            height={gridSize} 
            patternUnits="userSpaceOnUse"
          >
            <path 
              d={`M ${gridSize} 0 L 0 0 0 ${gridSize}`} 
              fill="none" 
              stroke={lineColor} 
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Animated dots at intersections */}
      {animated && (
        <div className="absolute inset-0">
          {Array.from({ length: rows }).map((_, rowIndex) =>
            Array.from({ length: cols }).map((_, colIndex) => {
              // Only render some dots for performance (every 2nd intersection)
              if ((rowIndex + colIndex) % 2 !== 0) return null
              
              return (
                <motion.div
                  key={`${rowIndex}-${colIndex}`}
                  className="absolute rounded-full"
                  style={{
                    left: colIndex * gridSize,
                    top: rowIndex * gridSize,
                    width: dotSize,
                    height: dotSize,
                    backgroundColor: dotColor,
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: [0.2, 0.8, 0.2],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                    ease: "easeInOut"
                  }}
                />
              )
            })
          )}
        </div>
      )}

      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-white/50 via-transparent to-white/50 pointer-events-none" />
    </div>
  )
}
