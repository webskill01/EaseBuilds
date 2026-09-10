// Services Data for EaseBuilds.
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
    // Task 7.7: national. Drives the locale wording in services/[slug]/page.jsx.
    // This page must NOT say "in Patiala" in its headings - the homepage owns
    // the local "web design in patiala" family and this page ranked 65.8
    // against the homepage's 12.6 while both bid for it.
    scope: 'national',
    // How the name reads mid-sentence ("What ... costs").
    inlineName: 'custom website design',
    icon: FaPalette,
    color: 'from-blue-500 to-cyan-600',
    
    // SEO Metadata - Optimized lengths
    seo: {
      // Retargeted NATIONAL in Task 7.5. This page sat at position 65.8 on
      // "web design in patiala" while the homepage held 12.6 on the same query
      // - three URLs bidding against each other. "custom website design" has
      // real national demand (autocomplete: cost, company, near me, vs
      // template) and none of it is Patiala, so the local terms are dropped.
      title: 'Custom Website Design | Built From Scratch, Not a Template', // 57 chars
      description: 'Custom website design in India from ₹2,999. Built from scratch on Next.js, not a theme you rent. See what it costs and how it differs from a template.', // 150 chars
      keywords: 'custom website design, custom website design cost, custom website design company, custom website vs template, bespoke website design india',
      canonical: 'https://easebuilds.in/services/custom-website-design',
    },
    
    // Hero Section
    hero: {
      headline: 'Custom Website Design',
      subheadline: 'Built from scratch, so it is yours to change later',
      description: 'A template is fast and cheap right up to the first thing it will not do. A custom site is designed around what your business actually needs, written in code you own, on a stack that stays fast as you add to it. From ₹2,999, with the final figure agreed before any work starts.',
      cta: 'Get a Fixed Quote',
      image: '/images/services/custom-hero.webp'
    },
    
    // Key Value Propositions
    valueProps: [
      {
        title: 'Nothing Is Rented',
        description: 'No theme licence, no page-builder subscription, no plugin that stops working when its author moves on. The code is written for you and it is yours.',
        benefit: 'You own what you paid for',
        image: '/images/services/custom1.webp'
      },
      {
        title: 'Designed Around Your Brand',
        description: 'Colours, type and layout are built from your logo and existing material. If there is no branding yet, that gets settled first rather than guessed at.',
        benefit: 'It looks like you, not like a theme',
        image: '/images/services/custom3.webp'
      },
      {
        title: 'Laid Out For One Job',
        description: 'Every page is built to do a specific thing - get the call, take the booking, answer the question that stops people buying. Not to fill a template slot.',
        benefit: 'Each page has a purpose',
        image: '/images/services/custom2.webp'
      },
      {
        title: 'Fast On A Cheap Phone',
        description: 'Built on Next.js and React and shipped as static pages where possible, so it loads on a mid-range Android on patchy mobile data - which is what most of your visitors have.',
        benefit: 'Open our portfolio and time it',
        image: '/images/services/custom4.webp'
      },
    ],
    
    // Detailed Features
    features: [
      {
        title: 'Mobile-First Responsive Design',
        description: 'Designed for a phone screen first and adapted upward, because that is where most people will see it. Desktop is the adaptation, not the other way round.',
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
        duration: '1-2 days',
        description: 'We study your business, competitors, target audience, and brand identity to create a design strategy.',
        deliverables: ['Brand questionnaire', 'Competitor analysis', 'User persona research', 'Sitemap planning']
      },
      {
        step: 2,
        title: 'Design Concepts',
        duration: '2-3 days',
        description: 'Create 2-3 homepage design mockups with different styles for you to choose from.',
        deliverables: ['Homepage mockups', 'Color scheme options', 'Typography choices', 'Revision rounds']
      },
      {
        step: 3,
        title: 'Full Design',
        duration: '4-5 days',
        description: 'Design all pages based on approved concept. Mobile and desktop versions.',
        deliverables: ['All page designs', 'Mobile layouts', 'Interactive prototype', 'Design system']
      },
      {
        step: 4,
        title: 'Development',
        duration: '6-8 days',
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
    
    // FAQs
    faqs: [
      {
        question: 'What is custom website design and why is it better than templates?',
        answer: 'Custom website design means building your website from scratch without using pre-made templates. It\'s better because: 1) Unique design that matches your exact brand, 2) No template limitations, 3) Faster loading (no template bloat), 4) Better SEO (clean code), 5) Stands out from competitors using same templates.'
      },
      {
        question: 'How long does custom website design take?',
        answer: 'Two to three weeks for most builds. Around five pages takes about a week, ten pages about two, and a larger project three. The thing that actually moves the date is how quickly content and feedback come back to us, so you get a date agreed up front rather than an estimate. You see progress each week, not only at the end.'
      },
      {
        question: 'Can you match my existing brand identity in the custom design?',
        answer: 'Yes. We start from your logo, colours, fonts and whatever printed or social material you already use, so the site reads as the same business. If you have no branding yet, we settle that first as part of the project rather than picking something and hoping.'
      },
      {
        question: 'Will my custom website work on all devices?',
        answer: 'Yes. It is designed for a phone first and adapted up to tablet and desktop, and it is checked on real screen sizes before launch - no sideways scrolling, no layout that breaks between two common widths.'
      },
      {
        question: 'What makes your custom designs different from WordPress templates?',
        answer: 'WordPress templates: Limited by theme structure, slow loading (lots of unused code), looks similar to thousands of sites, hard to customize. Our custom designs: Built specifically for you, super fast (only code you need), 100% unique, fully flexible, modern tech stack (Next.js/React).'
      },
      {
        question: 'How much does custom website design cost?',
        answer: 'Websites start at ₹2,999. What moves the number is how many pages you need, whether anything has to connect to a system you already use, and how much of the content already exists. There is no package ladder - tell me what you are trying to do and you get a figure for your actual scope, agreed before any work starts.'
      },
    ],
    
  },

  seoServices: {
    id: 'seo-services',
    slug: 'seo-services',
    name: 'SEO Services',
    // Task 7.7: local, and deliberately so - "seo company in patiala" is this
    // page's biggest query at 74 impressions. Keep the Patiala framing.
    scope: 'local',
    inlineName: 'SEO',
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
        answer: 'SEO here is a monthly retainer, quoted against how many keywords you want to compete for and how much content the work needs. Minimum terms run 3 to 6 months, because anything shorter ends before the results arrive. One honest caveat: for local searches, Google puts a map pack of three businesses above every organic result, and getting into that block depends on your Google reviews rather than on your website. If that is your real gap, say so and I will tell you to spend the money there instead.'
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
