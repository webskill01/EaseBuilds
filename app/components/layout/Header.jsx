'use client'

// Simplified Header - Mobile Menu Fixed Overlay
// EaseBuilds - Best Web Developer in Patiala Punjab India

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FaPhone, 
  FaBars, 
  FaTimes, 
  FaChevronDown,
  FaCode,
  FaShoppingCart,
  FaSearch,
  FaTools,
  FaTooth,
  FaBuilding,
  FaGraduationCap,
  FaStore,
  FaIndustry,
  FaWhatsapp,
  FaPhoneAlt
} from 'react-icons/fa'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  // Navigation structure with mega menu
  const navigation = {
    main: [
      { name: 'Home', href: '/' },
      { 
        name: 'Services', 
        href: '#',
        hasDropdown: true,
        items: [
          { 
            name: 'Custom Website Design', 
            href: '/services/custom-website-design',
            icon: FaCode,
            description: 'Bespoke websites tailored to your brand'
          },
          { 
            name: 'E-commerce Development', 
            href: '/services/ecommerce-development',
            icon: FaShoppingCart,
            description: 'Online stores that drive sales'
          },
          { 
            name: 'SEO Services', 
            href: '/services/seo-services',
            icon: FaSearch,
            description: 'Rank higher on Google searches'
          },
          { 
            name: 'Website Maintenance', 
            href: '/services/website-maintenance',
            icon: FaTools,
            description: 'Keep your site secure & updated'
          },
        ]
      },
      { 
        name: 'Industries', 
        href: '#',
        hasDropdown: true,
        items: [
          { 
            name: 'Dental Clinics', 
            href: '/industries/dental-clinics',
            icon: FaTooth,
            description: 'Websites for dental practices'
          },
          { 
            name: 'Architects', 
            href: '/industries/architects',
            icon: FaBuilding,
            description: 'Portfolio sites for architects'
          },
          { 
            name: 'Coaching Institutes', 
            href: '/industries/coaching-institutes',
            icon: FaGraduationCap,
            description: 'Educational institute websites'
          },
          { 
            name: 'Retail Stores', 
            href: '/industries/retail-stores',
            icon: FaStore,
            description: 'E-commerce for retail businesses'
          },
          { 
            name: 'Manufacturers', 
            href: '/industries/manufacturers',
            icon: FaIndustry,
            description: 'Industrial business websites'
          },
        ]
      },
      { name: 'Portfolio', href: '/portfolio' },
      { name: 'Blog', href: '/blog' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'About', href: '/about' },
      { name: 'Contact', href: '/contact' },
    ]
  }

  return (
    <>
      {/* Fixed White Header - Only header bar, no menu panel inside */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <nav className="container-custom">
          <div className="flex items-center justify-between h-14 sm:h-16">
            
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center gap-2 sm:gap-3 group"
              onClick={() => {
                setIsMobileMenuOpen(false)
                setOpenDropdown(null)
              }}
            >
              {/* Custom Logo */}
              <motion.div
                className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-lg overflow-hidden shadow-md"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/images/logo.png"
                  alt="EaseBuilds Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                  priority
                />
              </motion.div>

              <div className="flex flex-col">
                <span className="text-base sm:text-lg lg:text-xl font-bold text-gray-900">
                  EaseBuilds
                </span>
                <span className="text-[9px] sm:text-[10px] font-semibold -mt-0.5 hidden sm:block text-blue-600">
                  Web Developer Patiala
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-7">
              {navigation.main.map((item, index) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.hasDropdown && setOpenDropdown(item.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="text-sm font-semibold text-gray-900 hover:text-blue-600 transition-all duration-200 hover:scale-105 relative group flex items-center gap-1"
                  >
                    <span>{item.name}</span>
                    {item.hasDropdown && (
                      <FaChevronDown className={`text-xs transition-transform ${
                        openDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    )}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full" />
                  </Link>

                  {/* Dropdown Mega Menu */}
                  <AnimatePresence>
                    {item.hasDropdown && openDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-50"
                      >
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="flex items-start gap-3 px-4 py-3 hover:bg-blue-50 transition-colors group"
                            onClick={() => setOpenDropdown(null)}
                          >
                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 transition-colors">
                              <subItem.icon className="text-blue-600 text-lg" />
                            </div>
                            <div className="flex-1">
                              <div className="font-semibold text-gray-900 text-sm mb-0.5 group-hover:text-blue-600 transition-colors">
                                {subItem.name}
                              </div>
                              <div className="text-xs text-gray-600">
                                {subItem.description}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center">
              <motion.a
                href="tel:+916283380110"
                className="inline-flex items-center gap-2 px-5 py-2.5 font-semibold rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg hover:shadow-xl transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaPhoneAlt className="text-sm" />
                <span className="text-sm font-bold">Call Now</span>
              </motion.a>
            </div>

            {/* Mobile Menu Buttons */}
            <div className="flex items-center gap-2 lg:hidden">
              {/* Mobile Call Button */}
              <motion.a
                href="tel:+916283380110"
                className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg focus:outline-none"
                whileTap={{ scale: 0.9 }}
              >
                <FaPhoneAlt className="text-sm" />
              </motion.a>

              {/* Hamburger Menu */}
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg bg-gray-100 text-gray-900 shadow-md hover:bg-gray-200 transition-colors focus:outline-none"
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <FaTimes className="text-lg sm:text-xl" />
                ) : (
                  <FaBars className="text-lg sm:text-xl" />
                )}
              </motion.button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay - OUTSIDE header, positioned fixed */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel - Fixed positioned, floats above content */}
            <motion.div
              className="fixed top-0 right-0 bottom-0 w-full sm:w-80 bg-white z-[70] shadow-2xl lg:hidden overflow-y-auto"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            >
              <div className="p-5 sm:p-6">
                {/* Close Button */}
                <div className="flex justify-end mb-6">
                  <motion.button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-lg text-gray-900 hover:bg-gray-200 transition-colors focus:outline-none"
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaTimes className="text-xl" />
                  </motion.button>
                </div>

                {/* Logo in Menu */}
                <div className="flex items-center gap-3 mb-6 pb-5 border-b border-gray-200">
                  <div className="relative w-10 h-10 rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="/images/logo.png"
                      alt="EaseBuilds Logo"
                      width={40}
                      height={40}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900">EaseBuilds</div>
                    <div className="text-[10px] text-blue-600 font-medium">
                      Best Web Developer in Patiala
                    </div>
                  </div>
                </div>

                {/* Navigation Links */}
                <nav className="space-y-1 mb-6">
                  {navigation.main.map((item, index) => (
                    <div key={item.name}>
                      {item.hasDropdown ? (
                        <div>
                          <button
                            onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                            className="flex items-center justify-between w-full px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-blue-50 rounded-lg transition-all"
                          >
                            <span>{item.name}</span>
                            <FaChevronDown className={`text-xs transition-transform duration-200 ${
                              openDropdown === item.name ? 'rotate-180' : ''
                            }`} />
                          </button>

                          <AnimatePresence>
                            {openDropdown === item.name && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden pl-2 mt-1 space-y-1"
                              >
                                {item.items.map((subItem) => (
                                  <Link
                                    key={subItem.name}
                                    href={subItem.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="flex items-center gap-3 px-3 py-2.5 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all"
                                  >
                                    <subItem.icon className="text-blue-600" />
                                    <span>{subItem.name}</span>
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all"
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </nav>

                {/* Mobile CTA Buttons */}
                <div className="space-y-3 pt-5 border-t border-gray-200">
                  <a
                    href="tel:+916283380110"
                    className="flex items-center justify-center gap-2 w-full px-5 py-3.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-lg shadow-lg text-sm focus:outline-none"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <FaPhoneAlt />
                    Call +91 6283380110
                  </a>
                  <a
                    href="https://wa.me/916283380110"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-5 py-3.5 bg-green-500 text-white font-semibold rounded-lg shadow-lg text-sm focus:outline-none"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <FaWhatsapp />
                    WhatsApp Us
                  </a>
                </div>

                {/* Contact Info */}
                <div className="mt-6 pt-5 border-t border-gray-200 text-xs text-gray-600">
                  <p className="font-semibold text-gray-900 mb-2">EaseBuilds</p>
                  <p>Patiala, Punjab 147001</p>
                  <p className="mt-2">
                    <a href="mailto:easebuilds.in@gmail.com" className="text-blue-600 hover:underline">
                      easebuilds.in@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
