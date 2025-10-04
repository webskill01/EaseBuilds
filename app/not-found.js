// app/not-found.js
import Link from 'next/link'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

export const metadata = {
  title: '404 - Page Not Found | CodeNest - Web Developer in Patiala',
  description: 'The page you are looking for does not exist. Return to CodeNest homepage or explore our web development services in Patiala.',
  robots: {
    index: false,
    follow: true,
  },
}

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex items-center justify-center px-4 py-16">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-9xl font-bold text-indigo-600 mb-4">404</h1>
          <h2 className="text-3xl font-bold mb-6">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            Oops! The page you&apos;re looking for doesn&apos;t exist. 
            Perhaps you&apos;d like to explore our web development services in Patiala?
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/" 
              className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
            >
              Back to Home
            </Link>
            <Link 
              href="/pricing" 
              className="px-8 py-3 border-2 border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
