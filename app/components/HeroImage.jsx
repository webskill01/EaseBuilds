'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function HeroImage({ src, alt, overlay = true }) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <>
      {/* Loading skeleton */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-cyan-50 to-blue-100 animate-pulse" />
      )}
      
      {/* Hero Image */}
      <Image
        src={src}
        alt={alt}
        fill
        priority
        fetchPriority="high"
        quality={90}
        sizes="100vw"
        className={`object-cover transition-opacity duration-700 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={() => setIsLoaded(true)}
      />
    </>
  )
}
