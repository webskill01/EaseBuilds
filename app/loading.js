// app/loading.js
// Beautiful loading animation - EaseBuilds

import Image from 'next/image'

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50 flex items-center justify-center z-50">
      <div className="text-center">
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
