'use client'

import Image from 'next/image'
// Compact Footer - Restructured with 2-col mobile grid
// Industries/Areas integrated into link sections
// EaseBuilds - Best Web Developer in Patiala Punjab India

import Link from 'next/link'
import { 
  FaFacebook, 
  FaLinkedin, 
  FaInstagram, 
  FaEnvelope, 
  FaPhone, 
  FaWhatsapp,
  FaMapMarkerAlt,
  FaArrowRight,
  FaStar,
  FaClock,
  FaPhoneAlt,
} from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerData = {
    company: [
      { name: 'Home', href: '/' },
      { name: 'About Us', href: '/about' },
      { name: 'Portfolio', href: '/portfolio' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'Blog', href: '/blog' },
      { name: 'Contact', href: '/contact' },
    ],
    services: [
      { name: 'Custom Website Design', href: '/services/custom-website-design' },
      { name: 'E-commerce Development', href: '/services/ecommerce-development' },
      { name: 'SEO Services', href: '/services/seo-services' },
      { name: 'Website Maintenance', href: '/services/website-maintenance' },
    ],
    industries: [
      { name: 'Dental Clinics', href: '/industries/dental-clinics' },
      { name: 'Architects', href: '/industries/architects' },
      { name: 'Coaching Institutes', href: '/industries/coaching-institutes' },
      { name: 'Retail Stores', href: '/industries/retail-stores' },
      { name: 'Manufacturers', href: '/industries/manufacturers' },
    ],
    socialLinks: [
      { 
        icon: FaFacebook, 
        href: 'https://www.facebook.com/profile.php?id=100014537138957', 
        label: 'Facebook',
        color: 'hover:bg-blue-600'
      },
      { 
        icon: FaXTwitter, 
        href: 'https://x.com/NitinKumar22655', 
        label: 'Twitter',
        color: 'hover:bg-gray-700'
      },
      { 
        icon: FaLinkedin, 
        href: 'https://www.linkedin.com/in/nitin-kumar-1110mn/', 
        label: 'LinkedIn',
        color: 'hover:bg-blue-700'
      },
      { 
        icon: FaInstagram, 
        href: 'https://www.instagram.com/nitin.kumar.01', 
        label: 'Instagram',
        color: 'hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600'
      },
    ]
  }

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300">
      
      {/* Main Footer - Compact 2-col mobile grid */}
      <div className="container-custom pt-12 sm:pt-14 lg:pt-16 pb-8">
        {/* Mobile: 2 cols, Tablet: 3 cols, Desktop: 5 cols */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6">
          
          {/* Column 1 - Brand (spans 2 cols on mobile) */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link 
  href="/" 
  className="inline-flex items-center gap-2.5 mb-4 group"
>
  {/* Custom JPG Logo */}
  <div className="relative w-10 h-10 rounded-lg overflow-hidden shadow-lg group-hover:scale-110 transition-transform duration-300">
    <Image
      src="/images/tlogo.png"  // Your logo path
      alt="EaseBuilds Logo"
      width={40}
      height={40}
      className="w-full h-full object-contain"
    />
  </div>

  <div>
    <div className="text-lg font-bold text-white">EaseBuilds</div>
    <div className="text-[10px] text-blue-400 font-medium">Web Developer Patiala</div>
  </div>
</Link>

            
            <p className="text-sm leading-relaxed mb-4 text-gray-400 max-w-xs">
              <strong className="text-white">Best web development</strong> in Patiala Punjab. 
              Fast, SEO-optimized websites.
            </p>

            {/* Rating */}
            <div className="inline-flex items-center gap-2 px-3 py-2 bg-white/5 rounded-lg border border-white/10 mb-4">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-xs" />
                ))}
              </div>
              <span className="text-xs font-bold text-white">5.0</span>
              <span className="text-xs text-gray-400">• 50+ Reviews</span>
            </div>

            {/* Social */}
            <div className="flex gap-2">
              {footerData.socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-9 h-9 flex items-center justify-center bg-white/5 ${social.color} rounded-lg transition-all duration-300 hover:scale-110 border border-white/10`}
                  aria-label={social.label}
                >
                  <social.icon className="text-base" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 - Company */}
          <div>
            <h3 className="text-base font-bold text-white mb-3 pb-2 border-b border-white/10">
              Company
            </h3>
            <ul className="space-y-2">
              {footerData.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-blue-400 transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <FaArrowRight className="text-[10px] opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div>
            <h3 className="text-base font-bold text-white mb-3 pb-2 border-b border-white/10">
              Services
            </h3>
            <ul className="space-y-2">
              {footerData.services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-sm text-gray-400 hover:text-blue-400 transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <FaArrowRight className="text-[10px] opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Industries */}
          <div>
            <h3 className="text-base font-bold text-white mb-3 pb-2 border-b border-white/10">
              Industries
            </h3>
            <ul className="space-y-2">
              {footerData.industries.map((industry) => (
                <li key={industry.name}>
                  <Link
                    href={industry.href}
                    className="text-sm text-gray-400 hover:text-blue-400 transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <FaArrowRight className="text-[10px] opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {industry.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5 - Contact */}
          <div>
            <h3 className="text-base font-bold text-white mb-3 pb-2 border-b border-white/10">
              Contact
            </h3>
            <ul className="space-y-2.5">
              <li className='text-sm'>
                <a
                  href="tel:+916283380110"
                  className="flex items-center gap-2 text-xs text-gray-400 hover:text-blue-400 transition-colors group"
                >
                  <FaPhoneAlt className="text-blue-400 text-xs group-hover:scale-110 transition-transform" />
                  <span>+91 6283380110</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/916283380110"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs text-gray-400 hover:text-green-400 transition-colors group"
                >
                  <FaWhatsapp className="text-green-400 text-xs group-hover:scale-110 transition-transform" />
                  <span>WhatsApp</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:easebuilds.in@gmail.com"
                  className="flex items-center gap-2 text-xs text-gray-400 hover:text-blue-400 transition-colors group"
                >
                  <FaEnvelope className="text-blue-400 text-xs group-hover:scale-110 transition-transform" />
                  <span>Email Us</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-xs text-gray-400">
                <FaMapMarkerAlt className="text-blue-400 text-xs mt-0.5" />
                <span>Patiala, Punjab 147001</span>
              </li>
            </ul>

            {/* Business Hours - Compact */}
            <div className="mt-4 p-3 bg-blue-600/10 rounded-lg border border-blue-500/20">
              <div className="flex items-center gap-1.5 mb-2">
                <FaClock className="text-blue-400 text-base" />
                <h4 className="text-base font-semibold text-white">Hours</h4>
              </div>
              <div className="space-y-0.5 text-[11px] text-gray-400">
                <p className='text-xs'>Mon-Fri: <span className="text-white">9AM-6PM</span></p>
                <p className='text-xs'>Sat: <span className="text-white">10AM-4PM</span></p>
                <p className='text-red-600 text-xs'>Sun: <span className="text-white">Closed</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-black/30">
        <div className="container-custom py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <div className="text-center sm:text-left text-gray-400">
              <p>© {currentYear} <strong className="text-white">EaseBuilds</strong>. All rights reserved.</p>
              <p className="mt-0.5 text-[11px]">Best Web Developer in Patiala Punjab</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 text-gray-400">
              <Link href="/privacy" className="hover:text-blue-400 transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-blue-400 transition-colors">
                Terms
              </Link>
              <Link href="/sitemap.xml" className="hover:text-blue-400 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
