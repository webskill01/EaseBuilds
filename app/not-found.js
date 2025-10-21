// app/not-found.js
// Enhanced 404 page with stunning visuals and animations - EaseBuilds

import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: '404 - Page Not Found | EaseBuilds - Best Web Developer in Patiala',
  description: 'The page you are looking for does not exist. Explore EaseBuilds web development services in Patiala Punjab India.',
}

export default function NotFound() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Main Content */}
      <div className="relative min-h-screen flex items-center justify-center px-4 py-16 lg:py-10">
        <div className="max-w-6xl w-full">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            
            {/* Left: Illustration */}
            <div className="relative order-2 lg:order-1">
              <div className="relative w-full h-[400px] lg:h-[500px]">
                {/* 404 Illustration - Using Unsplash */}
                <Image
                  src="/images/404-illustration.svg"
                  alt="404 Error Illustration"
                  fill
                  className="object-contain drop-shadow-2xl animate-float"
                  priority
                />
              </div>
            </div>

            {/* Right: Content */}
            <div className="order-1 lg:order-2 text-center lg:text-left">
              {/* Animated 404 Text */}
              <div className="mb-6">
                <h1 className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 animate-gradient-x mb-4">
                  404
                </h1>
                <div className="h-2 w-32 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mx-auto lg:mx-0 animate-pulse"></div>
              </div>

              {/* Heading */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Oops! Page Not Found
              </h2>

              {/* Description */}
              <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                The page you&apos;re looking for seems to have wandered off into the digital wilderness. 
                But don&apos;t worry! Our professional web development team in{' '}
                <span className="font-bold text-blue-600">Patiala Punjab India</span> is here to help!
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-4">
                <Link 
                  href="/" 
                  className="group inline-flex items-center justify-center px-5 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Back to Home
                </Link>
                
                <Link 
                  href="/pricing" 
                  className="group inline-flex items-center justify-center px-5 py-3 bg-white text-blue-600 font-bold rounded-xl border-2 border-blue-600 hover:bg-blue-50 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  View Our Pricing
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>

              {/* Quick Links */}
              <div className="pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500 mb-4 font-semibold">Quick Links:</p>
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                  {[
                    { name: 'Portfolio', href: '/portfolio' },
                    { name: 'Services', href: '/services/custom-website-design' },
                    { name: 'Contact', href: '/contact' },
                    { name: 'Blog', href: '/blog' }
                  ].map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-blue-100 hover:text-blue-600 transition-all duration-200 text-sm font-medium"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom SEO Section */}
          <div className="mt-16 text-center">
            <div className="inline-block bg-white rounded-2xl shadow-xl p-6 max-w-2xl">
              <p className="text-gray-700 leading-relaxed">
                <span className="font-bold text-blue-600">Looking for the best web developer in Patiala?</span> 
                {' '}EaseBuilds creates stunning, fast, and SEO-optimized websites for businesses in 
                Punjab starting at just <span className="font-bold text-green-600">₹2,999</span>. 
                Let&apos;s build something amazing together!
              </p>
              <div className="mt-4 flex items-center justify-center gap-4">
                <a 
                  href="tel:+916283380110"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +91 6283380110
                </a>
                <a 
                  href="https://wa.me/916283380110"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
