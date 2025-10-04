// lib/pricingData.js
import { FaRocket, FaStar, FaCrown } from 'react-icons/fa'

export const pricingPlans = [
  {
    id: 'basic',
    name: 'Basic',
    tagline: 'Perfect for startups',
    icon: FaRocket,
    originalPrice: 4999,
    price: 2999,
    priceUSD: 36,
    currency: '₹',
    gradient: 'from-blue-500 to-cyan-600',
    popular: false,
    description: '3-page static website with essential features',
    exampleSite: {
      name: 'CodeNest',
      url: '/',
    },
    deliveryDays: 3,
    fastDeliveryDays: 1,
    fastDeliveryCost: 800,
    maintenancePerMonth: 250,
    features: [
      { name: 'Functional website', included: true },
      { name: 'Content upload', included: true },
      { name: 'Speed optimization', included: true },
      { name: 'Social media icons', included: true },
      { name: 'SEO optimization', included: true },
      { name: 'Responsive design', included: true },
      { name: 'Custom design', included: true },
      { name: '1 Month FREE Maintenance', included: true, highlight: true },
      { name: '1 Month FREE Support', included: true, highlight: true },
      { name: 'Number of pages', value: '3' },
      { name: 'Plugins/extensions', value: '5' },
      { name: 'Corrections', value: '1' },
      { name: 'Contact form', included: true },
      { name: 'E-commerce functionality', included: false },
      { name: 'Payment integration', included: false },
    ],
    addons: [
      { 
        id: 'hosting-package', 
        name: 'Hosting Setup + SSL Certificate', 
        price: 1500,
        description: 'Complete hosting setup with SSL security',
        isHosting: true 
      },
      { 
        id: 'custom-domain', 
        name: 'Custom Domain (.com/.in)', 
        price: 500,
        description: 'Your own professional domain name' 
      },
      { 
        id: 'pwa', 
        name: 'Progressive Web App (PWA)', 
        price: 1000,
        description: 'Installable app-like experience for your site' 
      },
    ]
  },
  {
    id: 'standard',
    name: 'Standard',
    tagline: 'Most popular choice',
    icon: FaStar,
    originalPrice: 10999,
    price: 6999,
    priceUSD: 84,
    currency: '₹',
    gradient: 'from-purple-500 to-pink-600',
    popular: true,
    description: '6-7-page dynamic website with API integration & SEO',
    exampleSite: {
      name: 'Modgill Travels',
      url: 'https://modgilltravels.in',
    },
    deliveryDays: 5,
    fastDeliveryDays: 3,
    fastDeliveryCost: 1500,
    maintenancePerMonth: 350,
    features: [
      { name: 'Everything in Basic, plus:', included: true, bold: true },
      { name: 'Basic API integration', included: true },
      { name: '2 Month FREE Maintenance', included: true, highlight: true },
      { name: '1 Month FREE Support', included: true, highlight: true },
      { name: 'Number of pages', value: '6-7' },
      { name: 'Plugins/extensions', value: '8' },
      { name: 'Products (if e-commerce)', value: '10' },
      { name: 'Corrections', value: '2' },
      { name: 'E-commerce functionality', included: false },
      { name: 'Payment integration', included: false },
    ],
    addons: [
      { 
        id: 'hosting-package', 
        name: 'Hosting Setup + SSL Certificate', 
        price: 1500,
        description: 'Premium hosting with enhanced security',
        isHosting: true 
      },
      { 
        id: 'custom-domain', 
        name: 'Custom Domain (.com/.in)', 
        price: 500,
        description: 'Your own professional domain name' 
      },
      { 
        id: 'ecommerce', 
        name: 'E-commerce Add-on', 
        price: 1500,
        description: 'Full shopping cart & payment gateway' 
      },
      { 
        id: 'pwa', 
        name: 'Progressive Web App (PWA)', 
        price: 1000,
        description: 'Installable app-like experience for your site' 
      },
    ]
  },
  {
    id: 'premium',
    name: 'Premium',
    tagline: 'Enterprise solution',
    icon: FaCrown,
    originalPrice: 24999,
    price: 14999,
    priceUSD: 180,
    currency: '₹',
    gradient: 'from-orange-500 to-red-600',
    popular: false,
    description: '8-10 page scalable website with full features',
    exampleSites: [
      {
        name: 'Tape India',
        url: 'https://tapeindia.shop',
      },
      {
        name: 'Pariksha',
        url: 'https://pariksha-serverless.vercel.app',
      }
    ],
    deliveryDays: 7,
    fastDeliveryDays: 5,
    fastDeliveryCost: 3000,
    maintenancePerMonth: 500,
    features: [
      { name: 'Everything in Standard, plus:', included: true, bold: true },
      { name: 'E-commerce functionality', included: true },
      { name: 'Payment integration', included: true },
      { name: 'Full API integration', included: true },
      { name: 'Admin panel', included: true },
      { name: 'Scalable architecture', included: true },
      { name: '3 Month FREE Maintenance', included: true, highlight: true },
      { name: '1 Month FREE Support', included: true, highlight: true },
      { name: 'Number of pages', value: '8-10' },
      { name: 'Plugins/extensions', value: '10' },
      { name: 'Products (if e-commerce)', value: '15' },
      { name: 'Corrections', value: 'Unlimited' },
    ],
    addons: [
      { 
        id: 'hosting-package', 
        name: 'Premium Hosting + SSL Certificate', 
        price: 2500,
        description: 'Enterprise-grade hosting with advanced security',
        isHosting: true 
      },
      { 
        id: 'custom-domain', 
        name: 'Custom Domain (.com/.in)', 
        price: 1000,
        description: 'Your own professional domain name' 
      },
      { 
        id: 'analytics', 
        name: 'Advanced Analytics Dashboard', 
        price: 2000,
        description: 'Track your website performance in real-time' 
      },
      { 
        id: 'pwa', 
        name: 'Progressive Web App (PWA)', 
        price: 1500,
        description: 'Installable app-like experience for your site' 
      },
    ]
  },
]

export const faqs = [
  {
    question: 'Will my website be mobile-friendly?',
    answer: 'Yes! All websites I build are fully responsive and optimized for mobiles, tablets, and desktops.'
  },
  {
    question: 'What is included in the 1-month free maintenance?',
    answer: 'Free maintenance includes bug fixes, minor content updates, security monitoring, and basic support. After the free month, you can opt for continued maintenance at the monthly rate.'
  },
  {
    question: 'What is Full stack Development, and why is it necessary for my website redesign?',
    answer: 'Full stack development entails working on both the front and back ends of a website to improve its design and operation.'
  },
  {
    question: 'How can Full stack Development help me improve my website\'s design?',
    answer: 'Full-stack developers use cutting-edge technologies to create visually appealing, responsive designs that enhance the user experience.'
  },
  {
    question: 'Which technologies do you employ for website redesign?',
    answer: 'I use HTML, CSS, and JavaScript, ReactJs on the front end, and Node.js, Express, and MongoDB on the back end to ensure a complete overhaul. Also complete projects using NextJs.'
  },
  {
    question: 'What technologies do you specialize in for website development?',
    answer: 'I specialize in MERN stack (React.js, Next.js, Node.js, Express.js), HTML, CSS, and Tailwind CSS. Also Firebase and JWT and sessions for authentication, and MongoDB and SQL for databases.'
  },
  {
    question: 'Can you help me with an existing website that needs customization?',
    answer: 'Yes, I can help customize and revamp your existing website to enhance its functionality and design.'
  },
  {
    question: 'Do you provide SEO services for websites?',
    answer: 'Yes, I ensure your website is SEO-friendly with a proper structure and optimization to rank well on search engines.'
  },
  {
    question: 'Can you develop e-commerce websites?',
    answer: 'Absolutely, I can integrate robust e-commerce functionality to facilitate online sales.'
  },
  {
    question: 'What is your development process?',
    answer: 'My process includes: 1) Understanding your requirements, 2) Creating designs and prototypes, 3) Development and testing, 4) Client review and revisions, 5) Final deployment and support.'
  },
  {
    question: 'What happens after the 1-month free maintenance period?',
    answer: 'You can choose to continue with our maintenance services at a monthly rate based on your plan, or manage the website yourself. We\'ll provide all necessary documentation and support for a smooth transition.'
  },
]
