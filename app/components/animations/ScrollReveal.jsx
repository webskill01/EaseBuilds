'use client'

// ScrollReveal Component - ReactBits Fade Animation Style
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function ScrollReveal({ 
  children, 
  direction = 'up', // 'up', 'down', 'left', 'right', 'fade'
  delay = 0,
  duration = 0.6,
  className = ''
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
    fade: { y: 0, x: 0 }
  }

  const initial = {
    opacity: 0,
    ...directions[direction]
  }

  const animate = {
    opacity: isInView ? 1 : 0,
    x: isInView ? 0 : directions[direction].x,
    y: isInView ? 0 : directions[direction].y,
  }

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={animate}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.4, 0.25, 1]
      }}
      /* ponytail: h-full by default. Nearly every card on this site sits in a
         ScrollReveal inside a grid, and the card already carries h-full - which
         did nothing, because it resolved against this auto-height wrapper. On a
         block child of an auto-height parent height:100% computes to auto, so
         this is inert everywhere except the grid items it is meant to fix. */
      className={`h-full ${className}`}
    >
      {children}
    </motion.div>
  )
}
