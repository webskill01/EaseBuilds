// Pricing packages for EaseBuilds - Best Web Developer in Patiala Punjab India

import { FaRocket, FaStar, FaCrown } from 'react-icons/fa'
export const pricingPlans = [
  {
    id: 'basic',
    name: 'Basic',
    tagline: 'Perfect Landing Pages for startups & small businesses',
    icon: FaRocket,
    originalPrice: 4999,
    price: 2999,
    priceUSD: 36,
    currency: '₹',
    gradient: 'from-blue-500 to-cyan-600',
    popular: false,
    description: '3-4 pages professional website with essential features for businesses',
    exampleSite: {
      name: 'EaseBuilds Portfolio',
      url: '/portfolio',
    },
    deliveryDays: 7,
    fastDeliveryDays: 3, 
    fastDeliveryCost: 800,
    maintenancePerMonth: 250,
    features: [
      { name: 'Up to 3-4 pages', included: true },
      { name: 'Functional website', included: true },
      { name: 'Mobile responsive design', included: true },
      { name: 'SEO optimization', included: true },
      { name: 'Speed optimization', included: true },
      { name: 'Content upload', included: true },
      { name: 'Social media icons', included: true },
      { name: 'Contact form', included: true },
      { name: 'Google Maps integration', included: true },
      { name: 'SSL certificate included', included: true },
      { name: '1 Month FREE Maintenance', included: true, highlight: true },
      { name: '1 Month FREE Support', included: true, highlight: true },
      { name: 'Blog section', included: false },
      { name: 'Google Analytics setup', included: false },
      { name: 'E-commerce functionality', included: false },
      { name: 'Advanced animations', included: false },
    ],
    bestFor: ['Small Businesses', 'Startups', 'Personal Brands', 'Service Providers in Patiala'],
    addons: [
      { 
        id: 'hosting-package', 
        name: 'Hosting Setup + SSL Certificate', 
        price: 1500,
        description: 'Complete hosting setup with SSL security for 1 year',
        isHosting: true 
      },
      { 
        id: 'custom-domain', 
        name: 'Custom Domain (.com/.in)', 
        price: 500,
        description: 'Your own professional domain name registration' 
      },
      { 
        id: 'extra-page', 
        name: 'Extra Page', 
        price: 699,
        description: 'Add one additional custom page to your website' 
      },
    ]
  },
  {
    id: 'standard',
    name: 'Standard',
    tagline: 'Most popular choice for growing businesses',
    icon: FaStar,
    originalPrice: 9999,
    price: 5999,
    priceUSD: 72,
    currency: '₹',
    gradient: 'from-purple-500 to-pink-600',
    popular: true,
    description: '8-10 pages website with blog and advanced features for businesses',
    exampleSite: {
      name: 'EaseBuilds Website',
      url: '/portfolio',
    },
    deliveryDays: 14, // 3 weeks
    fastDeliveryDays: 7, // 2 weeks
    fastDeliveryCost: 1200,
    maintenancePerMonth: 350,
    features: [
      { name: 'Everything in Basic', included: true, bold: true },
      { name: 'Up to 8-10 pages', included: true },
      { name: 'Blog section with modern blogs', included: true },
      { name: 'Contact form integration', included: true },
      { name: 'Google Maps integration', included: true },
      { name: 'Advanced SEO optimization', included: true },
      { name: 'Social media integration', included: true },
      { name: 'Advanced analytics setup', included: true },
      { name: 'Custom animations', included: true },
      { name: '2 Months FREE Maintenance', included: true, highlight: true },
      { name: '2 Months FREE Support', included: true, highlight: true },
      { name: 'E-commerce functionality', included: false },
      { name: 'Payment gateway', included: false },
    ],
    bestFor: ['Growing Businesses', 'Professional Services', 'Coaching Institutes', 'Healthcare'],
    addons: [
      { 
        id: 'hosting-package', 
        name: 'Premium Hosting + SSL Certificate', 
        price: 2000,
        description: 'Premium hosting with enhanced security for 1 year',
        isHosting: true 
      },
      { 
        id: 'custom-domain', 
        name: 'Custom Domain (.com/.in)', 
        price: 500,
        description: 'Your own professional domain name registration' 
      },
      { 
        id: 'PWA', 
        name: 'Progressive Web App (PWA)', 
        price: 999,
        description: 'Installable app-like experience for your site' 
      },
      { 
        id: 'extra-page', 
        name: 'Extra Pages (Pack of 3)', 
        price: 1499,
        description: 'Add 3 additional custom pages to your website' 
      },
    ]
  },
  {
    id: 'premium',
    name: 'Premium',
    tagline: 'Full-featured enterprise solution',
    icon: FaCrown,
    originalPrice: 14999,
    price: 9999,
    priceUSD: 120,
    currency: '₹',
    gradient: 'from-orange-500 to-red-600',
    popular: false,
    description: 'Custom no. of pages with e-commerce and premium features for Enterprises',
    exampleSite: {
      name: 'EaseBuilds E-commerce',
      url: '/portfolio',
    },
    deliveryDays: 28, // 4 weeks
    fastDeliveryDays: 21, // 3 weeks
    fastDeliveryCost: 1500,
    maintenancePerMonth: 500,
    features: [
      { name: 'Everything in Standard', included: true, bold: true },
      { name: 'Custom no. of pages', included: true },
      { name: 'E-commerce functionality', included: true, highlight: true },
      { name: 'Payment gateway integration', included: true },
      { name: 'Product catalog management', included: true },
      { name: 'Shopping cart & checkout', included: true },
      { name: 'Order management system', included: true },
      { name: 'Advanced animations & effects', included: true },
      { name: 'Custom illustrations', included: true },
      { name: 'Priority 24/7 support', included: true },
      { name: 'Admin dashboard', included: true },
      { name: '3 Months FREE Maintenance', included: true, highlight: true },
      { name: '3 Months FREE Support', included: true, highlight: true },
      { name: 'Advanced security features', included: true },
    ],
    bestFor: ['E-commerce Stores', 'Large Businesses', 'Manufacturers', 'Multi-location Businesses'],
    addons: [
      { 
        id: 'hosting-package', 
        name: 'Enterprise Hosting + SSL', 
        price: 3500,
        description: 'Enterprise-grade hosting with dedicated resources for 1 year',
        isHosting: true
      },
      { 
        id: 'custom-domain', 
        name: 'Premium Domain (.com/.in)', 
        price: 1000,
        description: 'Premium domain registration with privacy protection' 
      },
      { 
        id: 'seo-package', 
        name: 'Advanced SEO Package', 
        price: 4999,
        description: 'Complete SEO services to rank in Patiala' 
      },
      { 
        id: 'PWA', 
        name: 'Progressive Web App (PWA)', 
        price: 1499,
        description: 'Installable app-like experience for your site' 
      },
    ]
  },
]

// Standalone add-on services
export const addOns = [
  {
    id: 'logo-design',
    name: 'Logo Design',
    price: 1999,
    description: 'Professional logo design with 3 concepts and unlimited revisions',
  },
  {
    id: 'content-writing',
    name: 'Content Writing',
    price: 499,
    priceUnit: 'per page',
    description: 'SEO-optimized content written by professionals',
  },
  {
    id: 'extra-page',
    name: 'Extra Page',
    price: 799,
    priceUnit: 'per page',
    description: 'Additional custom page beyond package limit',
  },
  {
    id: 'premium-hosting',
    name: 'Premium Hosting',
    price: 3999,
    priceUnit: 'per year',
    description: 'High-performance hosting with dedicated resources',
  },
  {
    id: 'seo-package',
    name: 'Monthly SEO Services',
    price: 4999,
    priceUnit: 'per month',
    description: 'Complete SEO services to rank higher on Google',
  },
]

// FAQ data for pricing page
export const pricingFAQs = [
  {
    question: 'What is included in website maintenance?',
    answer: 'Website maintenance includes content updates, security patches, performance optimization, backup services, uptime monitoring, and technical support. All packages include free maintenance for 1-3 months depending on the plan.',
  },
  {
    question: 'How long does it take to build a website in Patiala?',
    answer: 'Standard delivery is 2-4 weeks depending on the package. Basic websites take 2 weeks, Standard takes 3 weeks, and Premium takes 4 weeks. We also offer fast-track delivery in 1-3 weeks for an additional fee. EaseBuilds delivers faster than most web developers in Patiala.',
  },
  {
    question: 'Do you provide hosting services?',
    answer: 'Yes! Standard and Premium packages include free hosting for 1-2 years. We use fast SSD servers with 99.9% uptime guarantee, free SSL certificate, and 24/7 technical support. For Basic package, hosting can be added as an addon.',
  },
  {
    question: 'Can I upgrade my package later?',
    answer: 'Absolutely! You can upgrade from Basic to Standard or Premium at any time. We will credit your initial payment towards the upgrade cost.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept UPI, bank transfer, credit/debit cards, and online payment gateways. Payment is split into 50% advance and 50% upon project completion for transparency and trust.',
  },
  {
    question: 'Do you create e-commerce websites in Patiala?',
    answer: 'Yes! Our Premium package includes full e-commerce functionality with product catalog, shopping cart, payment gateway integration (Razorpay, PayPal, UPI), order management, and inventory tracking for businesses.',
  },
]

export default pricingPlans
