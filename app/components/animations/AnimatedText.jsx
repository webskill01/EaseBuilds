'use client'

// Animated Text Component inspired by ReactBits SplitText
// Manual implementation using Framer Motion

import { motion } from 'framer-motion'

export default function AnimatedText({ 
  text, 
  className = '',
  delay = 0,
  duration = 0.5,
  stagger = 0.03,
  type = 'words' // 'words' or 'chars'
}) {
  const elements = type === 'words' ? text.split(' ') : text.split('')
  const space = type === 'words' ? ' ' : ''

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  }

  const child = {
    hidden: { 
      opacity: 0, 
      y: 20,
      filter: 'blur(4px)'
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: duration,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  }

  return (
    <motion.span
      className={className}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {elements.map((element, index) => (
        <motion.span
          key={`${element}-${index}`}
          variants={child}
          className="inline-block"
        >
          {element}
          {index < elements.length - 1 && space}
        </motion.span>
      ))}
    </motion.span>
  )
}
