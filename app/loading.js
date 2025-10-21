// app/loading.js
// Beautiful loading animation - EaseBuilds

import Image from 'next/image'

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50 flex items-center justify-center z-50">
      <div className="text-center">
        {/* Animated Logo Container */}
        <div className="relative mb-8">
          {/* Spinning Ring */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full border-4 border-transparent border-t-blue-600 border-r-cyan-500 animate-spin"></div>
          </div>
          
          {/* Logo - Use your actual logo */}
          <div className="relative w-24 h-24 flex items-center justify-center">
            {/* Option A: Use your logo image */}
            <Image
              src="/images/logo.svg"
              alt="EaseBuilds"
              width={60}
              height={60}
              className="animate-pulse"
            />
            
            {/* Option B: Text logo with gradient */}
            {/* <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg animate-pulse">
              <span className="text-white font-bold text-2xl">EB</span>
            </div> */}
          </div>
        </div>

        {/* Loading Text */}
        <div className="space-y-3">
          <h2 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            EaseBuilds
          </h2>
          <div className="flex items-center justify-center gap-1">
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
          <p className="text-sm text-gray-600">Loading...</p>
        </div>
      </div>
    </div>
  )
}
