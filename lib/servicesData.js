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
      image: '/images/services/custom-hero.webp'
    },
    
    // Key Value Propositions
    valueProps: [
      {
        title: '100% Custom Design',
        description: 'No WordPress templates or pre-made themes. Every pixel designed specifically for your brand and business needs.',
        benefit: 'Stand out from competitors',
        image: '/images/services/custom1.webp'
      },
      {
        title: 'Your Brand Identity',
        description: 'Colors, fonts, imagery, and layout that perfectly match your existing branding or help create new brand identity.',
        benefit: 'Consistent professional image',
        image: '/images/services/custom3.webp'
      },
      {
        title: 'User-Focused Layout',
        description: 'Design based on your target audience behavior, not generic templates. Optimized user journey for conversions.',
        benefit: '3x better conversion rates',
        image: '/images/services/custom2.webp'
      },
      {
        title: 'Modern Technologies',
        description: 'Built with Next.js and React for lightning-fast performance. Not outdated PHP or slow WordPress.',
        benefit: '95+ PageSpeed score guaranteed',
        image: '/images/services/custom4.webp'
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
        deliveryTime: '3 weeks'
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
        answer: 'Typical timeline is 2-3 weeks depending on complexity. Small business sites (5 pages) take about a week. Medium sites (10 pages) take 2 weeks. Large custom projects take 3 weeks. We provide weekly progress updates and involve you in every decision.'
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
      image: '/images/services/ecommerce-hero.webp'
    },
    
    valueProps: [
      {
        title: 'Complete Online Store',
        description: 'Everything you need to sell online: product catalog, shopping cart, checkout, payments, order management.',
        benefit: 'Start selling in 2 weeks',
        image: '/images/services/ecommerce1.webp'
      },
      {
        title: 'Multiple Payment Options',
        description: 'Accept UPI, credit/debit cards, net banking, wallets, and Cash on Delivery for Patiala local orders.',
        benefit: 'No customer turns away',
        image: '/images/services/ecommerce2.webp'
      },
      {
        title: 'Real-Time Inventory',
        description: 'Automatic stock tracking, low stock alerts, never oversell products. Manage from mobile.',
        benefit: 'Zero inventory confusion',
        image: '/images/services/ecommerce3.webp'
      },
      {
        title: 'WhatsApp Integration',
        description: 'Customers get order updates on WhatsApp. You can manage orders via WhatsApp. Instant communication.',
        benefit: '90% faster customer service',
        image: '/images/services/ecommerce4.webp'
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
        price: 9999,
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
        price: 14999,
        popular: true,
        description: 'Most popular for growing businesses',
        features: [
          'Custome no. of products',
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
        deliveryTime: '3 weeks'
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
      // Targets the queries this page actually earns impressions for (GSC 90d):
      // "seo company in patiala" 75, "seo services in punjab" 52, "seo punjab" 23.
      // "company" outdraws "services" 75:4 for Patiala, so it leads the title.
      title: 'SEO Company in Patiala | SEO Services Punjab', // 44 chars
      description: 'Local SEO for businesses in Patiala and across Punjab. We tell you what actually decides local ranking before you spend a rupee. Free audit: +91 6283380110.', // 155 chars
      keywords: 'seo company in patiala, seo services in punjab, seo punjab, local seo patiala, search engine optimization patiala',
      canonical: 'https://easebuilds.in/services/seo-services',
    },

    hero: {
      headline: 'SEO Company in Patiala, Punjab',
      subheadline: 'Most local searches are decided above the organic results',
      description: 'For searches like "web designer in Patiala" or "dentist near me", Google puts a map pack of three businesses above every organic result. Winning that block is a different job from ranking a page. We work on both, and we tell you which one your money should go to first.',
      cta: 'Get a Free SEO Audit',
      image: '/images/services/seo-hero.webp'
    },

    valueProps: [
      {
        title: 'The Map Pack Comes First',
        description: 'For local searches, the three businesses in the map block take the clicks before an organic result is even seen. We audit your Google Business Profile before touching your website.',
        benefit: 'Fix the block that matters',
        image: '/images/services/seo.webp'
      },
      {
        title: 'Your Data, Not Our Screenshots',
        description: 'Reporting comes from your own Search Console and Analytics, and you keep the logins. Nothing we show you is a number you cannot pull yourself.',
        benefit: 'Every figure checkable',
        image: '/images/services/seo4.webp'
      },
      {
        title: 'Built and Optimised in One Place',
        description: 'We build the sites too, so technical fixes do not wait on a third-party developer. Speed, schema and crawl problems get fixed in the codebase, not worked around.',
        benefit: 'No handoff delays',
        image: '/images/services/seo2.webp'
      },
      {
        title: 'White-Hat Only',
        description: 'We follow Google guidelines strictly. No bought links, no doorway pages, no keyword stuffing. Tactics that risk a penalty are not on the menu at any price.',
        benefit: 'No penalty risk',
        image: '/images/services/seo3.webp'
      },
    ],

    features: [
      {
        title: 'Local SEO & Google Business Profile',
        description: 'The work that decides whether you appear in the Patiala map pack, which is where most local clicks go.',
        icon: FaSearch,
        included: ['Google Business Profile audit and fixes', 'Review generation strategy', 'Category and attribute correction', 'Local citations', 'NAP consistency', 'Service-area targeting']
      },
      {
        title: 'On-Page SEO',
        description: 'Optimise every page for the queries your customers actually type, taken from Search Console rather than guessed.',
        icon: FaCode,
        included: ['Query research from your own GSC data', 'Title and meta rewrites', 'Heading structure', 'Content depth', 'Internal linking', 'Schema markup']
      },
      {
        title: 'Technical SEO',
        description: 'Fix what stops Google crawling, indexing and ranking the site.',
        icon: FaTools,
        included: ['Index coverage repair', 'Core Web Vitals', 'Site speed', 'Mobile rendering', 'XML sitemap and robots.txt', 'Canonical and redirect audit']
      },
      {
        title: 'Content Strategy',
        description: 'Pages and posts aimed at queries with real demand. If the research says a topic has no searchers, we say so instead of writing it.',
        icon: FaLaptopCode,
        included: ['Keyword and intent research', 'Content calendar', 'Blog writing', 'Service page rewrites', 'FAQ content', 'Local content']
      },
      {
        title: 'Link Building',
        description: 'Earn relevant links and citations. Directories and real mentions, never bought link packages.',
        icon: FaRocket,
        included: ['Local directory listings', 'Business citations', 'Industry mentions', 'Competitor backlink analysis', 'Link monitoring']
      },
      {
        title: 'Competitor Analysis',
        description: 'Work out what is actually separating you from whoever sits above you, including the signals that live outside your website.',
        icon: FaMobileAlt,
        included: ['Review-count benchmarking', 'Competitor keyword research', 'Backlink comparison', 'Content gap analysis', 'Strategy recommendations']
      },
    ],

    process: [
      {
        step: 1,
        title: 'SEO Audit',
        duration: '3-5 days',
        description: 'Full analysis of the website, the Google Business Profile, and the search results you are competing in.',
        deliverables: ['Technical audit report', 'Query research from Search Console', 'Competitor and review-count benchmark', 'Written strategy with priorities']
      },
      {
        step: 2,
        title: 'Google Business Profile',
        duration: '1 week',
        description: 'Correct the profile and start the review process, because for local searches this outranks website work.',
        deliverables: ['Category and attribute fixes', 'Photos and description', 'Review request system', 'Post schedule']
      },
      {
        step: 3,
        title: 'On-Page Optimisation',
        duration: '1-2 weeks',
        description: 'Rewrite pages, titles and structure against the queries the data shows you can actually win.',
        deliverables: ['Optimised titles and meta', 'Content updates', 'Schema markup', 'Internal linking']
      },
      {
        step: 4,
        title: 'Technical Fixes',
        duration: '1 week',
        description: 'Speed, indexing, mobile rendering and crawl issues, fixed in the code.',
        deliverables: ['Core Web Vitals work', 'Index coverage repair', 'Redirect and canonical audit', 'Sitemap submission']
      },
      {
        step: 5,
        title: 'Content & Links',
        duration: 'Ongoing',
        description: 'Publish against researched queries and build citations month on month.',
        deliverables: ['Monthly posts', 'New citations', 'Content refreshes', 'Link monitoring']
      },
      {
        step: 6,
        title: 'Monitoring & Reporting',
        duration: 'Monthly',
        description: 'Track positions, impressions and enquiries from your own accounts, and change the plan when the data says to.',
        deliverables: ['Monthly report', 'Position and impression changes', 'Traffic analytics', 'Next-month priorities']
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
          'Google Business Profile management',
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
          'Conversion optimisation',
          'Dedicated SEO manager',
          'Weekly updates'
        ],
        contract: '12 months for best results'
      },
    ],

    faqs: [
      {
        question: 'Why does a competitor with a worse website outrank me in Patiala?',
        answer: 'Usually because the search never reaches the organic results. Queries like "web designer in Patiala" or "SEO company in Patiala" show a map pack of three businesses above everything else, and entry to that block is weighted heavily on review count and profile completeness rather than page quality. In Patiala the established firms in most service categories sit somewhere between roughly 200 and 850 Google reviews. A business with single-digit reviews can have the better website, rank first organically, and still be scrolled straight past. This is the most common reason local SEO feels like it is not working, and it is why we look at your Google Business Profile before your website.'
      },
      {
        question: 'Should I fix my Google Business Profile or my website first?',
        answer: 'The profile, for almost every local business in Patiala. It is cheaper, it moves faster, and it is what the map pack is scored on. Website work compounds and is worth doing, but if you are under about 30 reviews, a first month spent on reviews, categories, photos and posts will produce more enquiries than a month of on-page optimisation. If your situation is one of the exceptions, we will say so in the audit.'
      },
      {
        question: 'How long does SEO take to show results in Patiala?',
        answer: 'Google Business Profile work can move the map pack within weeks. Website ranking is slower: expect 1-2 months before positions shift measurably, and 4-6 months before a competitive local keyword settles. Anyone promising page one in 30 days is either targeting keywords nobody searches or is about to do something that gets the site penalised.'
      },
      {
        question: 'Can you guarantee a #1 ranking on Google?',
        answer: 'No, and neither can anyone else. Google explicitly warns against SEO companies that guarantee rankings, because no agency controls the algorithm. What we commit to is specific and checkable instead: research before anything is written, work visible in your own Search Console, monthly reporting on real positions and impressions, and a stated reason for every change. If a keyword turns out to be unwinnable or worthless, we tell you and move the budget somewhere it earns.'
      },
      {
        question: 'What is local SEO and do I actually need it?',
        answer: 'Local SEO is the work that makes you appear for searches tied to a place: "dentist in Patiala", "web developer near me", "SEO services in Punjab". It covers your Google Business Profile, reviews, local citations, consistent name-address-phone details, and location-relevant content on the site. If your customers are physically in or near Patiala, it is the part of SEO that actually produces enquiries. If you sell nationally, general SEO matters more, because national queries carry no map pack and are decided on content depth instead.'
      },
      {
        question: 'How much do SEO services cost in Patiala?',
        answer: 'Our packages are ₹4,999/month for local SEO covering 10 keywords, ₹7,999/month for business SEO covering 20 keywords with link building and competitor analysis, and ₹14,999/month for 50+ keywords with multi-location work and a dedicated manager. All include monthly reporting and content. Minimum terms run 3 to 6 months, because anything shorter ends before the results arrive. If your real gap is reviews rather than website work, tell us and we will scope something smaller.'
      },
      {
        question: 'What is in the monthly report?',
        answer: 'Position and impression changes pulled from your Search Console, organic traffic from your Analytics, citations and links added, content published, technical issues fixed, a comparison against the competitors we track, and the priorities for the coming month. You keep access to both accounts, so every figure in the report is one you can verify yourself.'
      },
      {
        question: 'Do you use black-hat tactics?',
        answer: 'No. No purchased links, no private blog networks, no keyword stuffing, no doorway pages built to catch a single phrase. They work briefly and then cost you the rankings you paid for. Everything we do is the slower version: fix the technical layer, publish content aimed at queries with real demand, earn citations, and build the review base.'
      },
      {
        question: 'Do you work outside Patiala?',
        answer: 'Yes. We work across Punjab, including Rajpura, Sangrur, Mohali, Ludhiana and Chandigarh, and remotely for clients further afield. Statewide searches such as "SEO services in Punjab" behave differently from city searches: the map pack is weaker, so website content carries more weight and the review gap matters less. If you are targeting the whole state rather than one city, that changes the plan and the audit will say so.'
      },
    ],

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
      image: '/images/services/maintain-hero.webp'
    },
    
    valueProps: [
      {
        title: 'Peace of Mind',
        description: 'No more worrying about website crashes, hacks, or slowdowns. We monitor and fix issues proactively.',
        benefit: '99.9% uptime guaranteed',
      image: '/images/services/maintain1.webp'
      },
      {
        title: 'Fast Support',
        description: 'Need urgent changes? We respond within 2 hours (business hours) and fix critical issues same day.',
        benefit: 'Same-day emergency fixes',
      image: '/images/services/maintain2.webp'
      },
      {
        title: 'Save Money',
        description: 'Cheaper than hiring a full-time developer. Fixed monthly cost with no surprise bills.',
        benefit: 'Save ₹30,000/month vs hiring',
      image: '/images/services/maintain3.webp'
      },
      {
        title: 'Stay Current',
        description: 'Regular updates keep your website secure, fast, and compatible with new browsers and devices.',
        benefit: 'Always up-to-date',
      image: '/images/services/maintain4.webp'
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
