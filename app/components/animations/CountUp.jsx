'use client'

// Animated number counter - ReactBits style
import { motion, useSpring, useTransform, useInView } from 'framer-motion'
import { useRef, useEffect } from 'react'

export default function CountUp({ 
  value, 
  duration = 2,
  suffix = '',
  prefix = '',
  className = ''
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  
  const spring = useSpring(0, { 
    duration: duration * 1000,
    bounce: 0
  })
  
  const display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString()
  )

  useEffect(() => {
    if (isInView) {
      spring.set(value)
    }
  }, [isInView, spring, value])

  return (
    <span ref={ref} className={className}>
      {prefix}
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  )
}
