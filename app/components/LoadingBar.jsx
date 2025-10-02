'use client'
import { useEffect, useState } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingBar() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    const timeout = setTimeout(() => setIsLoading(false), 500)
    return () => clearTimeout(timeout)
  }, [pathname, searchParams])

  return (
    <AnimatePresence>
      {isLoading && (
        <>
          {/* Top loading bar */}
          <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-600 via-blue-500 to-primary-600 z-[100] shadow-lg"
            initial={{ scaleX: 0, transformOrigin: 'left' }}
            animate={{ scaleX: 1, transformOrigin: 'left' }}
            exit={{ scaleX: 0, transformOrigin: 'right' }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          />
          
          {/* Optional: Full page overlay with spinner
          <motion.div
            className="fixed inset-0 bg-white/80 backdrop-blur-sm z-[99] flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin" />
              <p className="text-sm font-medium text-gray-600">Loading...</p>
            </div>
          </motion.div> */}
        </>
      )}
    </AnimatePresence>
  )
}
