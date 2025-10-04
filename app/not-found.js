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
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div>
              <h3 className="font-bold mb-2">Our Services</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li><Link href="/#services" className="hover:text-indigo-600">Web Development</Link></li>
                <li><Link href="/#services" className="hover:text-indigo-600">E-Commerce</Link></li>
                <li><Link href="/#services" className="hover:text-indigo-600">Website Redesign</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">About Us</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li><Link href="/about" className="hover:text-indigo-600">Our Story</Link></li>
                <li><Link href="/#testimonials" className="hover:text-indigo-600">Testimonials</Link></li>
                <li><Link href="/#projects" className="hover:text-indigo-600">Portfolio</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">Contact</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li><Link href="/#contact" className="hover:text-indigo-600">Get in Touch</Link></li>
                <li>Patiala, Punjab</li>
                <li>+91 62833 80110</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
