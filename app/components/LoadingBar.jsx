'use client'
import { useEffect, useState, Suspense } from 'react'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

function LoadingBarContent() {
  const pathname = usePathname()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    const timeout = setTimeout(() => setIsLoading(false), 400)
    return () => clearTimeout(timeout)
  }, [pathname])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-600 via-blue-500 to-primary-600 z-[100] shadow-lg"
          initial={{ scaleX: 0, transformOrigin: 'left' }}
          animate={{ scaleX: 1, transformOrigin: 'left' }}
          exit={{ scaleX: 0, transformOrigin: 'right' }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        />
      )}
    </AnimatePresence>
  )
}

export default function LoadingBar() {
  return (
    <Suspense fallback={null}>
      <LoadingBarContent />
    </Suspense>
  )
}
