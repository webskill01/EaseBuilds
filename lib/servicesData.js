// Services Data for EaseBuilds - Best Web Developer in Patiala Punjab India
// Complete service-specific content for landing pages with SEO optimization

import { 
  FaLaptopCode, 
  FaShoppingCart, 
  FaSearch, 
  FaTools,
  FaMobileAlt,
  FaRocket,
  FaPalette,
  FaCode
} from 'react-icons/fa'

export const services = {
  customWebsiteDesign: {
    id: 'custom-website-design',
    slug: 'custom-website-design',
    name: 'Custom Website Design',
    icon: FaPalette,
    color: 'from-blue-500 to-cyan-600',
    
    // SEO Metadata - Optimized lengths
    seo: {
      title: 'Custom Website Design Patiala Punjab | EaseBuilds', // 54 chars
      description: 'Professional custom website design in Patiala Punjab India. Tailored, modern, mobile-responsive websites. No templates! Starting ₹2,999. Free consultation. Call +91 6283380110', // 159 chars
      keywords: 'custom website design patiala punjab india, bespoke web design patiala, tailor made website patiala, professional web designer patiala',
      canonical: 'https://easebuilds.in/services/custom-website-design',
    },
    
    // Hero Section
    hero: {
      headline: 'Custom Website Design in Patiala Punjab ',
      subheadline: 'Unique, Professional Websites Tailored to Your Business',
      description: 'Get a fully custom-designed website built specifically for your Patiala business. No cookie-cutter templates! Every element crafted to match your brand identity, target audience, and business goals. Fast, mobile-responsive, and SEO-optimized.',
      cta: 'Get Custom Design Quote',
      image: '/images/services/custom-hero.jpg'
    },
    
    // Key Value Propositions
    valueProps: [
      {
        title: '100% Custom Design',
        description: 'No WordPress templates or pre-made themes. Every pixel designed specifically for your brand and business needs.',
        benefit: 'Stand out from competitors',
        image: '/images/services/custom1.jpg'
      },
      {
        title: 'Your Brand Identity',
        description: 'Colors, fonts, imagery, and layout that perfectly match your existing branding or help create new brand identity.',
        benefit: 'Consistent professional image',
        image: '/images/services/custom3.jpg'
      },
      {
        title: 'User-Focused Layout',
        description: 'Design based on your target audience behavior, not generic templates. Optimized user journey for conversions.',
        benefit: '3x better conversion rates',
        image: '/images/services/custom2.jpg'
      },
      {
        title: 'Modern Technologies',
        description: 'Built with Next.js and React for lightning-fast performance. Not outdated PHP or slow WordPress.',
        benefit: '95+ PageSpeed score guaranteed',
        image: '/images/services/custom4.jpg'
      },
    ],
    
    // Detailed Features
    features: [
      {
        title: 'Mobile-First Responsive Design',
        description: 'Designed primarily for mobile devices, then adapted for desktop. 60% of visitors use phones, so mobile comes first.',
        icon: FaMobileAlt,
        included: ['Touch-optimized navigation', 'Fast mobile loading', 'Thumb-friendly buttons', 'Mobile-specific layouts']
      },
      {
        title: 'Brand-Matched Color Scheme',
        description: 'Custom color palette created from your logo and brand guidelines. Professional color psychology applied.',
        icon: FaPalette,
        included: ['Primary & secondary colors', 'Gradient options', 'Dark mode (optional)', 'Accessibility compliant']
      },
      {
        title: 'Custom Typography',
        description: 'Unique font combinations that reflect your brand personality. Readable, modern, and optimized for web.',
        icon: FaCode,
        included: ['Google Fonts integration', 'Font size hierarchy', 'Line height optimization', 'Cross-browser compatibility']
      },
      {
        title: 'Unique Page Layouts',
        description: 'Every page designed with purpose. No template restrictions - create exactly what you need.',
        icon: FaLaptopCode,
        included: ['Custom homepage hero', 'Unique about page', 'Service pages', 'Contact forms', 'Any custom pages']
      },
      {
        title: 'Interactive Animations',
        description: 'Smooth, professional animations that enhance user experience without slowing down the site.',
        icon: FaRocket,
        included: ['Scroll animations', 'Hover effects', 'Loading transitions', 'Micro-interactions']
      },
      {
        title: 'SEO-Optimized Structure',
        description: 'Built with SEO best practices from day one. Clean code, semantic HTML, optimized images.',
        icon: FaSearch,
        included: ['Meta tags optimization', 'Schema markup', 'Fast loading', 'Mobile-friendly', 'Image optimization']
      },
    ],
    
    // Process/Timeline
    process: [
      {
        step: 1,
        title: 'Discovery & Research',
        duration: '2-3 days',
        description: 'We study your business, competitors, target audience, and brand identity to create a design strategy.',
        deliverables: ['Brand questionnaire', 'Competitor analysis', 'User persona research', 'Sitemap planning']
      },
      {
        step: 2,
        title: 'Design Concepts',
        duration: '3-5 days',
        description: 'Create 2-3 homepage design mockups with different styles for you to choose from.',
        deliverables: ['Homepage mockups', 'Color scheme options', 'Typography choices', 'Revision rounds']
      },
      {
        step: 3,
        title: 'Full Design',
        duration: '5-7 days',
        description: 'Design all pages based on approved concept. Mobile and desktop versions.',
        deliverables: ['All page designs', 'Mobile layouts', 'Interactive prototype', 'Design system']
      },
      {
        step: 4,
        title: 'Development',
        duration: '7-10 days',
        description: 'Convert designs into a fully functional website with Next.js and React.',
        deliverables: ['Coded website', 'CMS integration', 'Forms & features', 'Testing & optimization']
      },
      {
        step: 5,
        title: 'Launch & Support',
        duration: '1-2 days',
        description: 'Deploy website, set up hosting, and provide training.',
        deliverables: ['Live website', 'Training session', '1-3 months free support', 'Documentation']
      },
    ],
    
    // Pricing Tiers
    pricing: [
      {
        name: 'Starter Custom',
        price: 4999,
        popular: false,
        description: 'Perfect for small businesses and startups in Patiala',
        features: [
          'Up to 5 custom pages',
          'Mobile-responsive design',
          'Custom color scheme',
          'Contact form',
          'Google Maps integration',
          'SEO basics',
          '1 month free support',
          '2 revision rounds'
        ],
        deliveryTime: '2 weeks'
      },
      {
        name: 'Business Custom',
        price: 7999,
        popular: true,
        description: 'Most popular for established businesses',
        features: [
          'Up to 10 custom pages',
          'Advanced animations',
          'Custom illustrations',
          'Blog/News section',
          'Advanced SEO',
          'WhatsApp integration',
          '2 months free support',
          'Unlimited revisions',
          'Speed optimization'
        ],
        deliveryTime: '3 weeks'
      },
      {
        name: 'Enterprise Custom',
        price: 14999,
        popular: false,
        description: 'For large businesses and complex projects',
        features: [
          'Unlimited custom pages',
          'Advanced features',
          'Multi-language support',
          'Custom CMS',
          'Advanced integrations',
          'Priority support',
          '3 months free support',
          'Dedicated project manager',
          'Training sessions'
        ],
        deliveryTime: '4-5 weeks'
      },
    ],
    
    // FAQs
    faqs: [
      {
        question: 'What is custom website design and why is it better than templates?',
        answer: 'Custom website design means building your website from scratch without using pre-made templates. It\'s better because: 1) Unique design that matches your exact brand, 2) No template limitations, 3) Faster loading (no template bloat), 4) Better SEO (clean code), 5) Stands out from competitors using same templates.'
      },
      {
        question: 'How long does custom website design take in Patiala?',
        answer: 'Typical timeline is 2-4 weeks depending on complexity. Small business sites (5 pages) take 2 weeks. Medium sites (10 pages) take 3 weeks. Large custom projects take 4-5 weeks. We provide weekly progress updates and involve you in every decision.'
      },
      {
        question: 'Can you match my existing brand identity in the custom design?',
        answer: 'Absolutely! We start by analyzing your logo, brand colors, fonts, and overall style. Then create a website that perfectly extends your brand identity online. If you don\'t have branding yet, we can create a complete brand identity as part of the project.'
      },
      {
        question: 'Will my custom website work on all devices?',
        answer: 'Yes, guaranteed! We design mobile-first, meaning it\'s built for phones first, then adapted for tablets and desktops. Your website will look perfect on all screen sizes with no horizontal scrolling or broken layouts.'
      },
      {
        question: 'What makes your custom designs different from WordPress templates?',
        answer: 'WordPress templates: Limited by theme structure, slow loading (lots of unused code), looks similar to thousands of sites, hard to customize. Our custom designs: Built specifically for you, super fast (only code you need), 100% unique, fully flexible, modern tech stack (Next.js/React).'
      },
      {
        question: 'How much does custom website design cost in Patiala?',
        answer: 'Custom designs start from ₹4,999 for small business sites (5 pages). Medium business sites cost ₹7,999 (10 pages). Enterprise projects start at ₹14,999. All include free hosting setup, SEO optimization, and 1-3 months free support. No hidden costs!'
      },
    ],
    
    // Case Study
    caseStudy: {
      client: 'Kaur Architects',
      location: 'Patiala, Punjab',
      project: 'Custom Architecture Portfolio Website',
      challenge: 'Needed a unique portfolio website that showcased their projects beautifully and stood out from generic architect templates.',
      solution: 'Created a fully custom design with advanced project gallery, 3D rendering integration, and interactive portfolio browsing.',
      results: [
        '10x increase in project inquiries',
        '95 PageSpeed score (extremely fast)',
        'Featured in local architecture community',
        'Won 2 new corporate clients from website',
      ],
      testimonial: 'EaseBuilds created exactly what we envisioned - a stunning custom website that perfectly represents our architecture firm. Worth every rupee!',
      image: '/images/image4.jpg'
    },
    
    // Comparison with alternatives
    comparison: {
      title: 'Custom Design vs Templates vs Agencies',
      options: [
        {
          name: 'WordPress Template',
          price: '₹2,000 - 5,000',
          pros: ['Cheap', 'Quick setup'],
          cons: ['Looks generic', 'Slow loading', 'Limited customization', 'Looks like thousands of sites', 'Bloated code']
        },
        {
          name: 'Big Agency',
          price: '₹50,000 - 2,00,000',
          pros: ['Experienced team', 'High quality'],
          cons: ['Very expensive', 'Long timelines (months)', 'Not personal service', 'Overhead costs']
        },
        {
          name: 'EaseBuilds Custom Design',
          price: '₹4,999 - 14,999',
          pros: ['100% unique', 'Fast & modern', 'Affordable', 'Personal service', 'Local support in Patiala', 'Quick turnaround'],
          cons: ['Takes 2-4 weeks (not instant)'],
          recommended: true
        },
      ]
    },
  },

  ecommerceDevelopment: {
    id: 'ecommerce-development',
    slug: 'ecommerce-development',
    name: 'E-commerce Development',
    icon: FaShoppingCart,
    color: 'from-green-500 to-emerald-600',
    
    seo: {
      title: 'E-commerce Development Patiala Punjab | Online Store', // 57 chars
      description: 'E-commerce website development in Patiala Punjab India. Complete online store with payment gateway, inventory, orders. Start selling online. ₹5,999. Call +91 6283380110', // 159 chars
      keywords: 'ecommerce development patiala, online store patiala punjab, shopping website patiala, ecommerce website developer patiala india',
      canonical: 'https://easebuilds.in/services/ecommerce-development',
    },
    
    hero: {
      headline: 'E-commerce Development in Patiala Punjab India',
      subheadline: 'Start Selling Online with Your Own Store',
      description: 'Complete e-commerce solution for businesses in Patiala. Sell products online with secure payment gateway, inventory management, order tracking, and customer accounts. Compete with big players like Amazon and Flipkart with your own branded store.',
      cta: 'Launch Your Online Store',
      image: '/images/services/ecommerce-hero.jpg'
    },
    
    valueProps: [
      {
        title: 'Complete Online Store',
        description: 'Everything you need to sell online: product catalog, shopping cart, checkout, payments, order management.',
        benefit: 'Start selling in 2 weeks',
        image: '/images/services/ecommerce1.jpg'
      },
      {
        title: 'Multiple Payment Options',
        description: 'Accept UPI, credit/debit cards, net banking, wallets, and Cash on Delivery for Patiala local orders.',
        benefit: 'No customer turns away',
        image: '/images/services/ecommerce2.jpg'
      },
      {
        title: 'Real-Time Inventory',
        description: 'Automatic stock tracking, low stock alerts, never oversell products. Manage from mobile.',
        benefit: 'Zero inventory confusion',
        image: '/images/services/ecommerce3.jpg'
      },
      {
        title: 'WhatsApp Integration',
        description: 'Customers get order updates on WhatsApp. You can manage orders via WhatsApp. Instant communication.',
        benefit: '90% faster customer service',
        image: '/images/services/ecommerce4.jpg'
      },
    ],
    
    features: [
      {
        title: 'Product Catalog Management',
        description: 'Easy admin panel to add unlimited products with images, descriptions, variants (size, color), and pricing.',
        icon: FaShoppingCart,
        included: ['Unlimited products', 'Multiple images per product', 'Product variants', 'Categories & subcategories', 'Product search', 'Bulk upload']
      },
      {
        title: 'Shopping Cart & Checkout',
        description: 'Smooth shopping experience with persistent cart, wishlist, coupon codes, and one-page checkout.',
        icon: FaLaptopCode,
        included: ['Persistent cart', 'Wishlist feature', 'Discount coupons', 'One-page checkout', 'Guest checkout', 'Saved addresses']
      },
      {
        title: 'Payment Gateway Integration',
        description: 'Razorpay/PayU integration for secure online payments. Support for all payment methods including COD.',
        icon: FaCode,
        included: ['UPI payments', 'Credit/debit cards', 'Net banking', 'Wallets (Paytm, PhonePe)', 'Cash on Delivery', 'EMI options']
      },
      {
        title: 'Order Management System',
        description: 'Complete order tracking from placement to delivery. Update customers automatically via email and WhatsApp.',
        icon: FaTools,
        included: ['Order dashboard', 'Status updates', 'Invoice generation', 'Delivery tracking', 'Return management', 'WhatsApp notifications']
      },
      {
        title: 'Inventory Management',
        description: 'Real-time stock tracking, automatic "Out of Stock" status, low stock alerts, and inventory reports.',
        icon: FaRocket,
        included: ['Real-time tracking', 'Low stock alerts', 'Stock reports', 'Multi-location inventory', 'Auto stock update', 'CSV import/export']
      },
      {
        title: 'Customer Accounts',
        description: 'Customers create accounts to save addresses, view order history, track shipments, and reorder easily.',
        icon: FaMobileAlt,
        included: ['User registration', 'Order history', 'Address book', 'Wishlist', 'Reorder option', 'Profile management']
      },
    ],
    
    process: [
      {
        step: 1,
        title: 'Product Planning',
        duration: '2-3 days',
        description: 'Plan your product catalog, categories, payment methods, and shipping zones.',
        deliverables: ['Product structure', 'Category planning', 'Payment setup', 'Shipping zones']
      },
      {
        step: 2,
        title: 'Design & Branding',
        duration: '3-5 days',
        description: 'Design your store with brand colors, logo, and product-focused layout.',
        deliverables: ['Store design', 'Product page layout', 'Cart design', 'Mobile layout']
      },
      {
        step: 3,
        title: 'Development & Integration',
        duration: '7-10 days',
        description: 'Build store, integrate payment gateway, set up admin panel, and add features.',
        deliverables: ['Working store', 'Payment integration', 'Admin panel', 'All features']
      },
      {
        step: 4,
        title: 'Product Upload',
        duration: '2-3 days',
        description: 'We help upload your products with images, descriptions, and pricing.',
        deliverables: ['All products uploaded', 'Categories organized', 'Images optimized', 'Pricing set']
      },
      {
        step: 5,
        title: 'Testing & Launch',
        duration: '2-3 days',
        description: 'Test all features, payment flow, and launch your store.',
        deliverables: ['Live store', 'Training', 'Documentation', '2 months support']
      },
    ],
    
    pricing: [
      {
        name: 'Basic Store',
        price: 5999,
        popular: false,
        description: 'For small businesses starting online',
        features: [
          'Up to 50 products',
          'Payment gateway integration',
          'Basic inventory management',
          'Customer accounts',
          'Order management',
          'Mobile responsive',
          'Basic SEO',
          '1 month free support'
        ],
        deliveryTime: '2 weeks'
      },
      {
        name: 'Professional Store',
        price: 9999,
        popular: true,
        description: 'Most popular for growing businesses',
        features: [
          'Unlimited products',
          'Advanced inventory',
          'Coupon system',
          'Product reviews',
          'WhatsApp integration',
          'Email marketing',
          'Analytics dashboard',
          'Advanced SEO',
          '2 months free support'
        ],
        deliveryTime: '3 weeks'
      },
      {
        name: 'Enterprise Store',
        price: 19999,
        popular: false,
        description: 'For large catalogs and high volume',
        features: [
          'Everything in Professional',
          'Multi-vendor marketplace',
          'Subscription products',
          'Wholesale pricing',
          'Multi-language',
          'Advanced shipping rules',
          'Priority support',
          'Custom features',
          '3 months free support'
        ],
        deliveryTime: '4-5 weeks'
      },
    ],
    
    faqs: [
      {
        question: 'How much does it cost to build an e-commerce website in Patiala?',
        answer: 'E-commerce websites start from ₹5,999 for basic stores (up to 50 products). Professional stores with unlimited products cost ₹9,999. Enterprise solutions start at ₹19,999. All include payment gateway integration, mobile design, and free support. No monthly platform fees!'
      },
      {
        question: 'Which payment gateways do you integrate?',
        answer: 'We integrate Razorpay and PayU payment gateways. Both support UPI, all credit/debit cards, net banking, wallets (Paytm, PhonePe, Google Pay), and EMI options. We also set up Cash on Delivery for local Patiala orders. Transaction fees: 2% by payment gateway (not us).'
      },
      {
        question: 'Can customers track their orders?',
        answer: 'Yes! Customers get a tracking link after order confirmation. They see real-time status: Order Placed → Processing → Shipped → Out for Delivery → Delivered. Automatic WhatsApp and email notifications at each stage.'
      },
      {
        question: 'Do you help upload products to the store?',
        answer: 'Yes, we help upload your first batch of products with images, descriptions, and pricing. For large catalogs (100+ products), we provide a CSV template for bulk upload. We also train you to add/edit products yourself.'
      },
      {
        question: 'Will my online store work on mobile phones?',
        answer: 'Absolutely! Our e-commerce stores are mobile-first designed. 70% of online shopping happens on phones, so we prioritize mobile experience. Easy mobile checkout, touch-friendly buttons, and fast loading.'
      },
      {
        question: 'How do I manage inventory and stock?',
        answer: 'Simple admin panel (accessible from phone/computer) shows real-time stock. When product sells, stock reduces automatically. Get alerts when stock is low. Products automatically show "Out of Stock" when inventory reaches zero. You can also manage from mobile app.'
      },
    ],
    
    caseStudy: {
      client: 'Verma Retail Store',
      location: 'Patiala, Punjab',
      project: 'Online Shopping Store',
      challenge: 'Local retail store wanted to expand online but feared complexity and high costs of e-commerce.',
      solution: 'Built affordable, easy-to-use online store with COD, WhatsApp integration, and local delivery tracking.',
      results: [
        '30% of total revenue from online within 3 months',
        '20+ daily online orders',
        '1000+ registered customers',
        '60% repeat purchase rate'
      ],
      testimonial: 'EaseBuilds made selling online so simple! We get orders daily, payment is smooth, and customers love the WhatsApp updates.',
      image: '/images/image4.jpg'
    },
    
    comparison: {
      title: 'Custom E-commerce vs Shopify vs WooCommerce',
      options: [
        {
          name: 'Shopify',
          price: '₹1,700/month + fees',
          pros: ['Easy to use', 'Hosted platform'],
          cons: ['Monthly fees forever', 'Transaction fees', 'Limited customization', 'Dollar pricing', 'Adds up to lakhs/year']
        },
        {
          name: 'WooCommerce',
          price: '₹5,000 - 15,000',
          pros: ['WordPress based', 'Many plugins'],
          cons: ['Slow performance', 'Complex setup', 'Expensive plugins', 'Security issues', 'Requires maintenance']
        },
        {
          name: 'EaseBuilds Custom',
          price: '₹5,999 - 19,999 one-time',
          pros: ['No monthly fees', 'Fast performance', 'Fully customizable', 'Local support', 'Built for India', 'WhatsApp integration'],
          cons: ['One-time higher cost (but saves lakhs long-term)'],
          recommended: true
        },
      ]
    },
  },

  seoServices: {
    id: 'seo-services',
    slug: 'seo-services',
    name: 'SEO Services',
    icon: FaSearch,
    color: 'from-orange-500 to-red-600',
    
    seo: {
      title: 'SEO Services Patiala Punjab | Rank #1 on Google', // 55 chars
      description: 'Professional SEO services in Patiala Punjab India. Get #1 ranking on Google. Local SEO for Patiala businesses. Proven results. Free SEO audit. Call +91 6283380110 today!', // 159 chars
      keywords: 'seo services patiala punjab india, local seo patiala, google ranking patiala, seo company patiala, search engine optimization patiala',
      canonical: 'https://easebuilds.in/services/seo-services',
    },
    
    hero: {
      headline: 'SEO Services in Patiala Punjab India',
      subheadline: 'Rank #1 on Google and Get More Customers',
      description: 'Professional Search Engine Optimization services for businesses in Patiala. Increase your Google rankings, get more website traffic, and convert visitors into customers. We specialize in local SEO to dominate Patiala searches.',
      cta: 'Get Free SEO Audit',
      image: '/images/services/seo-hero.jpg'
    },
    
    valueProps: [
      {
        title: 'Local SEO Domination',
        description: 'Rank #1 for "[your business] in Patiala" searches. Get customers actively searching for your services.',
        benefit: '200% more website traffic',
      image: '/images/services/seo.jpg'
      },
      {
        title: 'Proven Results',
        description: 'We\'ve ranked 50+ Patiala businesses on page 1. Real case studies with actual ranking improvements.',
        benefit: 'Page 1 in 3-6 months',
      image: '/images/services/seo4.jpg'
      },
      {
        title: 'Transparent Reporting',
        description: 'Monthly reports showing keyword rankings, traffic growth, and conversion improvements. No black-box tactics.',
        benefit: 'See exact progress',
      image: '/images/services/seo2.jpg'
      },
      {
        title: 'White-Hat Only',
        description: 'We follow Google guidelines strictly. No spammy tactics that get you penalized. Sustainable long-term growth.',
        benefit: 'Safe, permanent rankings',
      image: '/images/services/seo1.jpg'
      },
    ],
    
    features: [
      {
        title: 'Local SEO Optimization',
        description: 'Optimize for "near me" and local searches. Dominate Patiala, Rajpura, Sangrur searches.',
        icon: FaSearch,
        included: ['Google Business Profile optimization', 'Local citations', 'NAP consistency', 'Local keyword targeting', 'Map pack ranking', 'Location pages']
      },
      {
        title: 'On-Page SEO',
        description: 'Optimize every page of your website for target keywords and user experience.',
        icon: FaCode,
        included: ['Meta tags optimization', 'Heading structure', 'Content optimization', 'Image alt tags', 'Internal linking', 'Schema markup']
      },
      {
        title: 'Technical SEO',
        description: 'Fix technical issues that prevent Google from crawling and ranking your site.',
        icon: FaTools,
        included: ['Site speed optimization', 'Mobile-friendliness', 'XML sitemap', 'Robots.txt', 'SSL certificate', 'Core Web Vitals']
      },
      {
        title: 'Content Strategy',
        description: 'Create SEO-optimized content that ranks and converts visitors into customers.',
        icon: FaLaptopCode,
        included: ['Keyword research', 'Content calendar', 'Blog post writing', 'Service page optimization', 'FAQ content', 'Local content']
      },
      {
        title: 'Link Building',
        description: 'Earn high-quality backlinks from relevant websites to boost domain authority.',
        icon: FaRocket,
        included: ['Local directory listings', 'Business citations', 'Guest posting', 'Industry backlinks', 'Competitor analysis', 'Link monitoring']
      },
      {
        title: 'Competitor Analysis',
        description: 'Analyze what top-ranking competitors are doing and create strategy to outrank them.',
        icon: FaMobileAlt,
        included: ['Competitor keyword research', 'Backlink analysis', 'Content gap analysis', 'Ranking comparison', 'Strategy recommendations']
      },
    ],
    
    process: [
      {
        step: 1,
        title: 'SEO Audit',
        duration: '3-5 days',
        description: 'Complete analysis of your website\'s current SEO status and ranking potential.',
        deliverables: ['Technical audit report', 'Keyword research', 'Competitor analysis', 'SEO strategy document']
      },
      {
        step: 2,
        title: 'On-Page Optimization',
        duration: '1-2 weeks',
        description: 'Optimize all pages, meta tags, content, and structure for target keywords.',
        deliverables: ['Optimized meta tags', 'Content updates', 'Schema markup', 'Internal linking']
      },
      {
        step: 3,
        title: 'Technical Fixes',
        duration: '1 week',
        description: 'Fix all technical SEO issues: speed, mobile-friendliness, crawlability.',
        deliverables: ['Speed optimization', 'Mobile optimization', 'Technical fixes', 'Sitemap submission']
      },
      {
        step: 4,
        title: 'Content & Link Building',
        duration: 'Ongoing',
        description: 'Create fresh content and build quality backlinks every month.',
        deliverables: ['Monthly blog posts', 'New backlinks', 'Local citations', 'Content updates']
      },
      {
        step: 5,
        title: 'Monitoring & Reporting',
        duration: 'Monthly',
        description: 'Track rankings, traffic, and conversions. Adjust strategy as needed.',
        deliverables: ['Monthly SEO report', 'Ranking updates', 'Traffic analytics', 'Strategy adjustments']
      },
    ],
    
    pricing: [
      {
        name: 'Local SEO',
        price: 4999,
        billingCycle: '/month',
        popular: false,
        description: 'For small local businesses in Patiala',
        features: [
          'Google Business optimization',
          '10 target keywords',
          'On-page SEO',
          'Technical SEO',
          'Monthly reporting',
          '1 blog post/month',
          'Local citations',
          'Email support'
        ],
        contract: '3 months minimum'
      },
      {
        name: 'Business SEO',
        price: 7999,
        billingCycle: '/month',
        popular: true,
        description: 'Most popular for competitive markets',
        features: [
          'Everything in Local SEO',
          '20 target keywords',
          'Competitor analysis',
          '2 blog posts/month',
          'Link building',
          'Content strategy',
          'Priority support',
          'Bi-weekly updates'
        ],
        contract: '6 months minimum'
      },
      {
        name: 'Enterprise SEO',
        price: 14999,
        billingCycle: '/month',
        popular: false,
        description: 'For aggressive growth and expansion',
        features: [
          'Everything in Business SEO',
          '50+ target keywords',
          '4 blog posts/month',
          'Advanced link building',
          'Multi-location SEO',
          'Conversion optimization',
          'Dedicated SEO manager',
          'Weekly updates'
        ],
        contract: '12 months for best results'
      },
    ],
    
    faqs: [
      {
        question: 'How long does SEO take to show results in Patiala?',
        answer: 'Typical timeline: 1-2 months for initial improvements, 3-4 months for page 1 rankings, 6+ months for top 3 positions. Local SEO (Patiala-specific searches) shows faster results (2-3 months) than national keywords. SEO is long-term but delivers lasting results.'
      },
      {
        question: 'What is local SEO and why do I need it?',
        answer: 'Local SEO optimizes your website for location-based searches like "dentist in Patiala" or "web developer near me Patiala". Critical because: 46% of Google searches are local, 76% of people visit a business within 24 hours of local search. Local SEO gets you customers in Patiala actively looking for your services.'
      },
      {
        question: 'Can you guarantee #1 ranking on Google?',
        answer: 'No ethical SEO company can guarantee #1 ranking (Google forbids this). However, we guarantee: Measurable improvement in rankings, Increased organic traffic, Better keyword positions, Follow-up reporting. 90% of our clients reach page 1 within 6 months for target keywords.'
      },
      {
        question: 'How much do SEO services cost in Patiala?',
        answer: 'Our SEO packages start at ₹4,999/month for local SEO (10 keywords). Business SEO costs ₹7,999/month (20 keywords). Enterprise SEO is ₹14,999/month (50+ keywords). All include monthly reports, content creation, and technical optimization. Minimum 3-6 month contract for results.'
      },
      {
        question: 'What\'s included in your monthly SEO reports?',
        answer: 'Monthly reports include: Keyword ranking changes (position tracking), Organic traffic growth (Google Analytics), New backlinks earned, Content published, Technical issues fixed, Competitor comparison, Next month strategy. Reports sent via email with video explanation.'
      },
      {
        question: 'Do you use black-hat SEO tactics?',
        answer: 'Never! We strictly follow Google\'s Webmaster Guidelines. All our tactics are white-hat: quality content, genuine backlinks, technical optimization, user experience improvements. Black-hat tactics (keyword stuffing, link farms, spam) get you penalized. We build sustainable, long-term rankings.'
      },
    ],
    
    caseStudy: {
      client: 'Kumar Dental Clinic',
      location: 'Patiala, Punjab',
      project: 'Local SEO Campaign',
      challenge: 'Not ranking for "dentist in Patiala" - appearing on page 3. Losing patients to competitors.',
      solution: 'Implemented local SEO: optimized Google Business Profile, created location-specific content, built local citations.',
      results: [
        '#1 ranking for "dentist in Patiala"',
        'Top 3 for "dental clinic near me patiala"',
        '200% increase in website traffic',
        '50+ monthly appointments from Google'
      ],
      testimonial: 'We went from invisible to #1 on Google in 4 months! Now we get 50+ appointments monthly from our website.',
      image: '/images/image4.jpg'
    },
  },

  websiteMaintenance: {
    id: 'website-maintenance',
    slug: 'website-maintenance',
    name: 'Website Maintenance',
    icon: FaTools,
    color: 'from-purple-500 to-pink-600',
    
    seo: {
      title: 'Website Maintenance Services Patiala | Support', // 52 chars
      description: 'Website maintenance services in Patiala Punjab India. Updates, security, backups, support. Keep your site fast & secure. From ₹999/month. Call +91 6283380110', // 156 chars
      keywords: 'website maintenance patiala, website support services patiala punjab, web maintenance patiala india, website updates patiala',
      canonical: 'https://easebuilds.in/services/website-maintenance',
    },
    
    hero: {
      headline: 'Website Maintenance Services in Patiala Punjab India',
      subheadline: 'Keep Your Website Fast, Secure, and Up-to-Date',
      description: 'Professional website maintenance and support for businesses in Patiala. Regular updates, security monitoring, backups, performance optimization, and technical support. Focus on your business while we handle your website.',
      cta: 'Get Maintenance Quote',
      image: '/images/services/maintain-hero.jpg'
    },
    
    valueProps: [
      {
        title: 'Peace of Mind',
        description: 'No more worrying about website crashes, hacks, or slowdowns. We monitor and fix issues proactively.',
        benefit: '99.9% uptime guaranteed',
      image: '/images/services/maintain1.jpg'
      },
      {
        title: 'Fast Support',
        description: 'Need urgent changes? We respond within 2 hours (business hours) and fix critical issues same day.',
        benefit: 'Same-day emergency fixes',
      image: '/images/services/maintain2.jpg'
      },
      {
        title: 'Save Money',
        description: 'Cheaper than hiring a full-time developer. Fixed monthly cost with no surprise bills.',
        benefit: 'Save ₹30,000/month vs hiring',
      image: '/images/services/maintain3.jpg'
      },
      {
        title: 'Stay Current',
        description: 'Regular updates keep your website secure, fast, and compatible with new browsers and devices.',
        benefit: 'Always up-to-date',
      image: '/images/services/maintain4.jpg'
      },
    ],
    
    features: [
      {
        title: 'Security Monitoring',
        description: '24/7 monitoring for malware, hacks, and security vulnerabilities. Immediate action on threats.',
        icon: FaTools,
        included: ['Malware scanning', 'Hack prevention', 'SSL certificate management', 'Security patches', 'Firewall monitoring', 'Threat alerts']
      },
      {
        title: 'Regular Backups',
        description: 'Daily automatic backups stored securely off-site. Quick restore if anything goes wrong.',
        icon: FaCode,
        included: ['Daily backups', 'Off-site storage', 'One-click restore', '30-day backup history', 'Database backups', 'File backups']
      },
      {
        title: 'Performance Optimization',
        description: 'Monthly speed audits and optimization to keep your website loading fast.',
        icon: FaRocket,
        included: ['Speed testing', 'Image optimization', 'Cache management', 'Code optimization', 'Database cleanup', 'CDN setup']
      },
      {
        title: 'Content Updates',
        description: 'We update your website content: text changes, new images, blog posts, price updates.',
        icon: FaLaptopCode,
        included: ['Text updates', 'Image uploads', 'Blog posts', 'Product updates', 'Price changes', 'Page edits']
      },
      {
        title: 'Technical Support',
        description: 'Email and WhatsApp support for any website issues or questions. Expert help when you need it.',
        icon: FaMobileAlt,
        included: ['Email support', 'WhatsApp support', 'Phone support (Premium)', 'Bug fixes', 'Technical advice', 'Training']
      },
      {
        title: 'Monthly Reports',
        description: 'Detailed reports showing uptime, security status, performance metrics, and work completed.',
        icon: FaSearch,
        included: ['Uptime reports', 'Security scans', 'Performance metrics', 'Backup status', 'Work summary', 'Recommendations']
      },
    ],
    
    process: [
      {
        step: 1,
        title: 'Onboarding',
        duration: '1-2 days',
        description: 'We audit your current website and set up monitoring tools.',
        deliverables: ['Website audit', 'Monitoring setup', 'Backup configuration', 'Access setup']
      },
      {
        step: 2,
        title: 'Initial Optimization',
        duration: '3-5 days',
        description: 'Fix any existing issues, optimize performance, and enhance security.',
        deliverables: ['Security hardening', 'Speed optimization', 'Bug fixes', 'Updates applied']
      },
      {
        step: 3,
        title: 'Ongoing Maintenance',
        duration: 'Monthly',
        description: 'Regular monitoring, updates, backups, and support throughout the month.',
        deliverables: ['Daily backups', 'Security monitoring', 'Performance checks', 'Content updates']
      },
      {
        step: 4,
        title: 'Monthly Review',
        duration: 'End of month',
        description: 'Comprehensive review and report of all maintenance activities.',
        deliverables: ['Monthly report', 'Improvement recommendations', 'Next month planning']
      },
    ],
    
    pricing: [
      {
        name: 'Basic Care',
        price: 999,
        billingCycle: '/month',
        popular: false,
        description: 'For small websites and blogs',
        features: [
          'Weekly backups',
          'Security monitoring',
          'Uptime monitoring',
          '2 content updates/month',
          'Email support (48hr)',
          'Monthly report',
          'Basic performance checks'
        ],
        contract: 'No contract'
      },
      {
        name: 'Business Care',
        price: 1999,
        billingCycle: '/month',
        popular: true,
        description: 'Most popular for business websites',
        features: [
          'Daily backups',
          'Advanced security',
          'Performance optimization',
          '5 content updates/month',
          'WhatsApp support (4hr)',
          'Emergency fixes',
          'Plugin/theme updates',
          'SEO monitoring'
        ],
        contract: 'No contract'
      },
      {
        name: 'Premium Care',
        price: 3999,
        billingCycle: '/month',
        popular: false,
        description: 'For e-commerce and critical websites',
        features: [
          'Real-time backups',
          'Premium security',
          'Priority support (2hr)',
          'Unlimited content updates',
          'Phone support',
          'Same-day emergency fixes',
          'Monthly strategy calls',
          'Dedicated manager'
        ],
        contract: 'No contract'
      },
    ],
    
    faqs: [
      {
        question: 'What is website maintenance and why do I need it?',
        answer: 'Website maintenance includes regular updates, security monitoring, backups, performance optimization, and support. You need it because: Websites get hacked without security updates, Old websites become slow, Backups prevent data loss, Regular updates keep site compatible, Technical issues need quick fixes. Maintenance prevents expensive problems.'
      },
      {
        question: 'How much does website maintenance cost in Patiala?',
        answer: 'Basic maintenance starts at ₹999/month (weekly backups, security monitoring, 2 updates). Business maintenance costs ₹1,999/month (daily backups, priority support, 5 updates). Premium care is ₹3,999/month (unlimited updates, phone support). All plans include security and backups. No contracts - cancel anytime.'
      },
      {
        question: 'What if my website gets hacked?',
        answer: 'If your website gets hacked while under our maintenance: We detect it immediately (24/7 monitoring), Clean the malware and remove hacker access, Restore from clean backup if needed, Fix security vulnerabilities, Strengthen security to prevent re-infection. Usually resolved within 4-24 hours. All included in maintenance plan.'
      },
      {
        question: 'How fast do you respond to support requests?',
        answer: 'Response times: Basic plan: 48 hours email support, Business plan: 4 hours WhatsApp support, Premium plan: 2 hours priority support. Emergency issues (site down, hacked) get immediate attention on all plans. Critical fixes done same day. Regular updates done within 2-3 business days.'
      },
      {
        question: 'Can I cancel the maintenance plan anytime?',
        answer: 'Yes! All our plans are month-to-month with no long-term contracts. Cancel anytime with 30 days notice. No cancellation fees. We recommend minimum 3 months to see full benefits, but no obligation. If you cancel, you keep all work done during maintenance period.'
      },
      {
        question: 'Do you maintain websites built by other developers?',
        answer: 'Absolutely! We maintain websites built by anyone - WordPress, custom PHP, HTML sites, or even old outdated websites. We start with a complete audit, fix existing issues, then provide ongoing maintenance. Works for all types of websites regardless of who built them.'
      },
    ],
    
    caseStudy: {
      client: 'Patel Medical Center',
      location: 'Patiala, Punjab',
      project: 'Website Maintenance & Support',
      challenge: 'Website kept crashing, slow loading, security concerns. Previous developer stopped responding.',
      solution: 'Comprehensive maintenance plan: fixed existing bugs, optimized performance, implemented security measures, regular monitoring.',
      results: [
        '99.9% uptime (was 85% before)',
        '3x faster loading speed',
        'Zero security incidents',
        'Same-day support for all issues'
      ],
      testimonial: 'Finally found reliable support! Our website runs smoothly, and EaseBuilds team responds to any issue within hours.',
      image: '/images/image4.jpg'
    },
  },
}

// Helper functions
export function getServiceBySlug(slug) {
  return Object.values(services).find(service => service.slug === slug)
}

export function getAllServices() {
  return Object.values(services)
}

export function getServiceNames() {
  return Object.values(services).map(service => service.name)
}

// Generate service schema for SEO
export function generateServiceSchema(service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.name,
    provider: {
      '@type': 'Organization',
      name: 'EaseBuilds',
      url: 'https://easebuilds.in',
      telephone: '+916283380110',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Patiala',
        addressRegion: 'Punjab',
        addressCountry: 'IN'
      }
    },
    areaServed: {
      '@type': 'State',
      name: 'Punjab',
      containsPlace: {
        '@type': 'City',
        name: 'Patiala'
      }
    },
    description: service.hero.description,
    url: service.seo.canonical,
  }
}

export default services
