'use client'

import { useState, useEffect } from 'react'

export function useFomoCountdown() {
  const [showFomo, setShowFomo] = useState(false)
  const [timeRemaining, setTimeRemaining] = useState(0)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    // Mark that we're now on the client side
    setIsClient(true)
  }, [])

  useEffect(() => {
    // Only run localStorage logic on client side
    if (!isClient) return

    const STORAGE_KEY = 'easebuilds_fomo_offer'
    const DURATION = 30 * 24 * 60 * 60 * 1000 // 30 days in milliseconds

    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      const now = Date.now()

      if (!stored) {
        // First visit - set expiry to 24 hours from now
        const expiryTime = now + (24 * 60 * 60 * 1000)
        localStorage.setItem(STORAGE_KEY, JSON.stringify({
          firstSeen: now,
          expiryTime: expiryTime,
          nextShowTime: now + DURATION
        }))
        setShowFomo(true)
        setTimeRemaining(24 * 60 * 60 * 1000)
      } else {
        const data = JSON.parse(stored)
        
        // Check if 30 days have passed since first seen
        if (now >= data.nextShowTime) {
          // Reset the offer - show again for 24 hours
          const expiryTime = now + (24 * 60 * 60 * 1000)
          localStorage.setItem(STORAGE_KEY, JSON.stringify({
            firstSeen: now,
            expiryTime: expiryTime,
            nextShowTime: now + DURATION
          }))
          setShowFomo(true)
          setTimeRemaining(24 * 60 * 60 * 1000)
        } else if (now < data.expiryTime) {
          // Still within the 24-hour offer window
          setShowFomo(true)
          setTimeRemaining(data.expiryTime - now)
        } else {
          // Offer expired, waiting for next month
          setShowFomo(false)
          setTimeRemaining(0)
        }
      }
    } catch (error) {
      console.error('Error with FOMO countdown:', error)
      // Fallback: show countdown for safety
      setShowFomo(false)
    }
  }, [isClient])

  useEffect(() => {
    // Only start countdown if we should show FOMO and we're on client
    if (!isClient || !showFomo || timeRemaining <= 0) return

    // Update countdown every second
    const interval = setInterval(() => {
      setTimeRemaining(prev => {
        const newTime = prev - 1000
        if (newTime <= 0) {
          setShowFomo(false)
          
          // Update localStorage to mark offer as expired
          try {
            const STORAGE_KEY = 'easebuilds_fomo_offer'
            const stored = localStorage.getItem(STORAGE_KEY)
            if (stored) {
              const data = JSON.parse(stored)
              localStorage.setItem(STORAGE_KEY, JSON.stringify({
                ...data,
                expired: true
              }))
            }
          } catch (error) {
            console.error('Error updating localStorage:', error)
          }
          
          return 0
        }
        return newTime
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [isClient, showFomo, timeRemaining])

  const hours = Math.floor(timeRemaining / (1000 * 60 * 60))
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000)

  return { 
    showFomo, 
    hours: hours.toString().padStart(2, '0'),
    minutes: minutes.toString().padStart(2, '0'),
    seconds: seconds.toString().padStart(2, '0')
  }
}
