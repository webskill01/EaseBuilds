// Portfolio data for EaseBuilds — single source of truth.
// Both /portfolio and the homepage Projects carousel read from here.
//
// Every entry is a real, live client site. Nothing invented: no fabricated
// testimonials, no made-up conversion percentages, no "example projects".
// `results` is deliberately absent until real numbers exist — the portfolio
// page guards on it, so absent means the block simply does not render.
// ponytail: real case-study numbers land here in Phase 5.3, per PHASES.md.

export const portfolioProjects = [
  {
    id: 1,
    slug: 'best-cleaning-and-painting-melbourne',
    title: 'Best Cleaning & Painting — Melbourne, Australia',
    client: 'Best Cleaning and Painting Services',
    businessName: 'Best Cleaning and Painting Services',
    industry: 'Home Services',
    category: 'Service Business Website',
    clientType: 'International',
    location: 'Melbourne, Australia',
    country: 'AU',
    url: 'https://bestcleaningandpainting.services',
    link: 'https://bestcleaningandpainting.services',
    image: '/images/bestcleaning.webp',
    thumbnail: '/images/bestcleaning.webp',
    gradient: 'from-emerald-500 to-teal-600',
    featured: true,
    completedDate: '2025-08-01',
    metrics: 'Melbourne, AU',

    description:
      'Service website for a Melbourne cleaning and painting company, covering multiple service lines with quote enquiry, mobile-first layout and analytics. Built and delivered remotely from Patiala.',

    challenge:
      'A local services business competing in a crowded Melbourne market needed a site that loaded fast on mobile and made requesting a quote effortless.',

    solution:
      'A Next.js site with per-service pages, an enquiry flow that reaches the owner immediately, motion used sparingly for polish, and Vercel Analytics for real traffic data.',

    features: [
      'Multi-service structure',
      'Quote enquiry flow',
      'Mobile-first layout',
      'Fast page loads',
      'Vercel Analytics',
      'SEO-ready metadata',
    ],

    tags: ['Next.js', 'React', 'Framer Motion', 'Vercel'],
    technologies: ['Next.js', 'React', 'Framer Motion', 'Lucide', 'Vercel Analytics'],
  },

  {
    id: 2,
    slug: 'modgill-travels-taxi-booking-patiala',
    title: 'Modgill Travels — Taxi Booking, Patiala',
    client: 'Modgill Travels',
    businessName: 'Modgill Travels',
    industry: 'Travel & Transport',
    category: 'Booking Website',
    clientType: 'Local Business',
    location: 'Patiala, Punjab, India',
    country: 'IN',
    url: 'https://modgilltravels.in',
    link: 'https://modgilltravels.in',
    image: '/images/modgilltravels.webp',
    thumbnail: '/images/modgilltravels.webp',
    gradient: 'from-blue-500 to-cyan-600',
    featured: true,
    completedDate: '2024-12-10',
    metrics: 'Booking + SMS alerts',

    description:
      'Taxi booking site for a Patiala operator competing against aggregator apps. Enquiry forms are validated client-side and reach the operator by email and SMS, so no booking is missed.',

    challenge:
      'An independent taxi operator was losing local customers to Ola and Uber while having no online presence of his own.',

    solution:
      'A booking site with validated enquiry forms, fuzzy route search, and instant notification to the operator over both email and SMS. Structured for local searches like "taxi in Patiala".',

    features: [
      'Booking enquiry forms',
      'Fuzzy route search',
      'Email notifications',
      'SMS alerts to the operator',
      'Mobile-responsive design',
      'Local SEO structure',
    ],

    tags: ['Next.js', 'Booking Forms', 'SMS Alerts', 'Local SEO'],
    technologies: ['Next.js', 'React', 'React Hook Form', 'Zod', 'Nodemailer', 'Twilio', 'Fuse.js'],
  },

  {
    id: 3,
    slug: 'c3-career-consultants',
    title: 'C3 Career Consultants — Consultancy Website',
    client: 'C3 Career Consultants',
    businessName: 'C3 Career Consultants',
    industry: 'Education & Careers',
    category: 'Consultancy Website',
    clientType: 'Professional Services',
    location: 'India',
    country: 'IN',
    url: 'https://www.c3consultants.in',
    link: 'https://www.c3consultants.in',
    image: '/images/c3consultants.webp',
    thumbnail: '/images/c3consultants.webp',
    gradient: 'from-indigo-500 to-purple-600',
    featured: true,
    completedDate: '2025-06-01',
    metrics: 'Enquiry routing',

    description:
      'Website for a career consultancy, built around turning visitors into consultation enquiries. Validated forms deliver straight to the consultant through a transactional email service.',

    challenge:
      'A consultancy relying on word of mouth needed a credible online presence and a reliable way to capture enquiries.',

    solution:
      'A Next.js site with clear service breakdown, animated statistics, and a Zod-validated enquiry form wired to Resend so nothing lands in a spam folder.',

    features: [
      'Service breakdown pages',
      'Validated enquiry form',
      'Transactional email delivery',
      'Animated statistics',
      'Scroll-triggered sections',
      'Mobile-responsive design',
    ],

    tags: ['Next.js', 'Resend', 'Framer Motion', 'Zod'],
    technologies: ['Next.js', 'React', 'Framer Motion', 'Resend', 'Zod', 'React Icons'],
  },

  {
    id: 4,
    slug: 'tape-india-ecommerce',
    title: 'Tape India — Adhesive Products Store',
    client: 'Tape India',
    businessName: 'Tape India',
    industry: 'Manufacturing & E-commerce',
    category: 'E-commerce',
    clientType: 'Manufacturing',
    location: 'Chennai, India',
    country: 'IN',
    url: 'https://tapeindia.shop',
    link: 'https://tapeindia.shop',
    image: '/images/tapeindia.webp',
    thumbnail: '/images/tapeindia.webp',
    gradient: 'from-orange-500 to-red-600',
    featured: true,
    completedDate: '2024-11-15',
    metrics: 'Built with a partner',

    description:
      'Online store for an adhesive tape retailer in Chennai — product catalogue, search and filtering, and checkout. Built in collaboration with a development partner in Chennai.',

    challenge:
      'A tape retailer selling offline needed a catalogue customers could browse and order from directly.',

    solution:
      'An e-commerce store with a structured product catalogue, search and filters, payment integration and order handling, delivered as a two-developer collaboration.',

    features: [
      'Product catalogue',
      'Search and filters',
      'Payment integration',
      'Order handling',
      'Mobile shopping experience',
      'Product-level SEO',
    ],

    tags: ['E-commerce', 'Payment Integration', 'Catalogue', 'Collaboration'],
    technologies: ['Next.js', 'React', 'Razorpay', 'Node.js', 'MongoDB', 'Tailwind CSS'],
  },

  {
    id: 5,
    slug: 'pariksha-exam-paper-platform',
    title: 'Pariksha — Exam Paper Platform',
    client: 'Own project, adopted by the college',
    businessName: 'Pariksha',
    industry: 'Education Technology',
    category: 'Web Application',
    clientType: 'Education',
    location: 'Punjab, India',
    country: 'IN',
    url: 'https://pariksha-serverless.vercel.app',
    link: 'https://pariksha-serverless.vercel.app',
    image: '/images/pariksha.webp',
    thumbnail: '/images/pariksha.webp',
    gradient: 'from-purple-500 to-pink-600',
    featured: true,
    completedDate: '2025-03-01',
    metrics: 'Adopted by the college',

    description:
      'A platform for sharing previous-year exam papers, built as a personal project and since adopted by the college for its own students. Full-stack application with authentication, file upload to object storage, and search.',

    challenge:
      'Past exam papers circulated through scattered WhatsApp groups, with no reliable place to find them by subject or year.',

    solution:
      'A full-stack application with JWT authentication, PDF upload to S3-compatible object storage, categorisation by subject and year, and search — built to run cheaply and stay up.',

    features: [
      'Authentication and user accounts',
      'PDF upload to object storage',
      'Categorisation by subject and year',
      'Search and filters',
      'Admin dashboard',
      'Mobile-responsive interface',
    ],

    tags: ['React', 'Express', 'MongoDB', 'AWS S3'],
    technologies: ['React', 'Material UI', 'Express', 'MongoDB', 'Mongoose', 'AWS S3', 'JWT'],
  },

  {
    id: 6,
    slug: 'easebot-lead-management',
    // No image file exists for this one; the card falls back to the OG image.
    title: 'EaseBot — Lead Management',
    client: 'Built for ourselves, now sold as a product',
    businessName: 'EaseBot',
    industry: 'Sales Automation',
    category: 'Internal Tool, Productised',
    clientType: 'Small Business',
    location: 'Patiala, Punjab',
    country: 'IN',
    gradient: 'from-emerald-500 to-teal-600',
    featured: true,
    completedDate: '2025-08-01',
    metrics: 'We run it on our own enquiries every day',

    description:
      'A lead-management system that runs inside Telegram and hands finished WhatsApp messages to a human to send. Built to stop us losing our own enquiries, then productised from ₹1,199 a month for a whole team.',

    challenge:
      'Our own enquiries were sitting in a spreadsheet. Nothing chased them, nobody remembered which ones had been followed up, and the ones that went quiet were simply lost.',

    solution:
      'A bot in Telegram, because that is where the team already was — no new app, no logins to hand out. It records each enquiry as it arrives, schedules the follow-ups, and when one is due it writes the WhatsApp message and opens it for a person to read and send. The message goes from your own number, so the customer sees you rather than a broadcast, and there is no Meta API approval to wait for.',

    features: [
      'Enquiries captured in Telegram as they arrive',
      'Follow-ups and renewals scheduled automatically',
      'WhatsApp message written, a human taps send',
      'Sends from your own number, not a broadcast API',
      'One price for the whole team, not per user',
      'Web dashboard at your own address, if you want one',
    ],

    tags: ['Node.js', 'Telegram Bot API', 'MongoDB'],
    technologies: ['Node.js', 'Telegram Bot API', 'MongoDB', 'Next.js'],
  },
]

export function getFeaturedProjects() {
  return portfolioProjects.filter((project) => project.featured)
}

export function getProjectsByIndustry(industry) {
  return portfolioProjects.filter((project) => project.industry === industry)
}

export function getProjectBySlug(slug) {
  return portfolioProjects.find((project) => project.slug === slug)
}

export function getAllIndustries() {
  return [...new Set(portfolioProjects.map((project) => project.industry))]
}

// Every project here is live; kept so existing imports keep working.
export function getRealProjects() {
  return portfolioProjects.filter((project) => project.url !== null)
}

// Generate schema for an individual project
export function generateProjectSchema(project) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.description,
    creator: {
      '@type': 'Organization',
      name: 'EaseBuilds',
      url: 'https://easebuilds.in',
      telephone: '+91-6283380110',
    },
    datePublished: project.completedDate,
    about: {
      '@type': 'Organization',
      name: project.businessName,
      // the client's own location, not ours — Melbourne and Chennai are not Patiala
      address: {
        '@type': 'PostalAddress',
        addressLocality: project.location,
        addressCountry: project.country || 'IN',
      },
    },
  }

  if (project.url) {
    schema.url = project.url
    schema.workExample = {
      '@type': 'WebSite',
      url: project.url,
    }
  }

  return schema
}

export default portfolioProjects
