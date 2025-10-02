import Link from 'next/link'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content - Fixed Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          
          {/* Brand Section - Spans 2 columns on mobile */}
          <div className="col-span-2">
            <Link href="/" className="inline-block mb-4">
              <h3 className="text-2xl sm:text-3xl font-extrabold">
                <span className="text-primary-400">Code</span>
                <span className="text-white">Nest</span>
              </h3>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Building beautiful, fast websites that turn visitors into customers. Your success is our mission.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a 
                href="https://www.facebook.com/profile.php?id=100014537138957" 
                className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <FaFacebook className="text-lg" />
              </a>
              <a 
                href="https://x.com/NitinKumar22655" 
                className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <FaTwitter className="text-lg" />
              </a>
              <a 
                href="https://www.linkedin.com/in/nitin-kumar-1110mn/" 
                className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-lg" />
              </a>
              <a 
                href="https://www.instagram.com/nitin.kumar.01" 
                className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <FaInstagram className="text-lg" />
              </a>
            </div>
          </div>
          
          {/* Quick Links - 1 column on mobile */}
          <div className="col-span-1">
            <h4 className="text-base font-bold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/" className="text-gray-400 hover:text-primary-400 transition-colors text-sm inline-block hover:translate-x-1 duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-primary-400 transition-colors text-sm inline-block hover:translate-x-1 duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-400 hover:text-primary-400 transition-colors text-sm inline-block hover:translate-x-1 duration-300">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-gray-400 hover:text-primary-400 transition-colors text-sm inline-block hover:translate-x-1 duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#projects" className="text-gray-400 hover:text-primary-400 transition-colors text-sm inline-block hover:translate-x-1 duration-300">
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-gray-400 hover:text-primary-400 transition-colors text-sm inline-block hover:translate-x-1 duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services - 1 column on mobile */}
          <div className="col-span-1">
            <h4 className="text-base font-bold mb-4 text-white">Services</h4>
            <ul className="space-y-2.5 text-gray-400 text-sm">
              <li className="hover:text-primary-400 transition-colors cursor-default">Custom Websites</li>
              <li className="hover:text-primary-400 transition-colors cursor-default">Online Stores</li>
              <li className="hover:text-primary-400 transition-colors cursor-default">Mobile Design</li>
              <li className="hover:text-primary-400 transition-colors cursor-default">SEO Optimization</li>
              <li className="hover:text-primary-400 transition-colors cursor-default">Maintenance</li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-6 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-xs sm:text-sm text-center ">
              &copy; {new Date().getFullYear()} CodeNest. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
