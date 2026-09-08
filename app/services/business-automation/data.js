// Content for /services/business-automation - the Cluster C pillar.
//
// Claims discipline (PHASES.md Phase 4): there are no paying automation
// clients. Permitted proof is first-person use of EaseBot, Pariksha (a real
// system with real users at a college), and informal deployments described as
// "built for and used by" - never as clients, never with invented numbers.

export const WHATSAPP = '916283380110'

export const QUOTE_INTRO =
  'Hi EaseBuilds, I would like a quote for automating something in my business.'

// Scoping questions. These are the answers needed to price custom work, which
// is why this page quotes rather than publishing a number.
export const STEPS = [
  {
    key: 'manual',
    label: 'Done by hand',
    q: 'What do you do by hand every week that you wish you did not?',
    ph: 'e.g. copying enquiries into a sheet, sending fee reminders',
    type: 'text',
  },
  {
    key: 'hours',
    label: 'Hours a week',
    q: 'Roughly how long does that take, across everyone?',
    type: 'choice',
    opts: ['Under 2 hours', '2-5 hours', '5-10 hours', '10-20 hours', 'More than 20 hours'],
  },
  {
    key: 'where',
    label: 'Data lives in',
    q: 'Where does that information live right now?',
    type: 'choice',
    opts: ['Google Sheets', 'Excel', 'A paper register', 'Tally or other software', 'Nowhere — WhatsApp and memory'],
  },
  {
    key: 'people',
    label: 'People involved',
    q: 'How many people touch it?',
    type: 'choice',
    opts: ['Just me', '2-5 people', '6-10 people', 'More than 10'],
  },
  {
    key: 'phone',
    label: 'My WhatsApp',
    q: 'Last one - your WhatsApp number?',
    ph: '10-digit mobile number',
    type: 'tel',
  },
]

// What actually gets built. Deliberately outcome-shaped, not technology-shaped.
export const BUILDS = [
  {
    title: 'Lead and follow-up systems',
    body: 'Every enquiry captured the moment it arrives, follow-ups that nobody has to remember, and a record of who actually signed up. This one is productised as EaseBot.',
    href: '/services/lead-management',
    linkText: 'See EaseBot',
  },
  {
    title: 'Sheet and data automation',
    body: 'The copying, the re-typing, the monthly report someone builds by hand. If it moves between a form, a sheet and a message, it can move without you.',
  },
  {
    title: 'Custom management systems',
    body: 'When a spreadsheet has outgrown itself — admissions, inventory, bookings, records — a small system with proper accounts, search and permissions.',
  },
  {
    title: 'Reminders and due dates',
    body: 'Renewals, fees, appointments, payments. The thing that costs you money when it is forgotten gets a reminder before it is forgotten.',
  },
  {
    title: 'Bots as the front door',
    body: 'Telegram, WhatsApp, or a web panel with your own address — whichever your staff will actually open. The bot is the interface; the system behind it is the product.',
  },
  {
    title: 'Joining up what you already pay for',
    body: 'Your website form, your sheet, your phone. Most businesses do not need new software so much as the things they own talking to each other.',
  },
]

export const PROCESS = [
  {
    title: 'We map what you do by hand',
    body: 'A conversation, not a form. What happens today, who does it, and where it breaks.',
  },
  {
    title: 'You get a fixed quote',
    body: 'A price for the build and a monthly figure to run it. Both agreed before anything starts.',
  },
  {
    title: 'We build it around your process',
    body: 'Not a template you bend to fit. Your buttons, your wording, your steps.',
  },
  {
    title: 'You own the data',
    body: 'It mirrors to a Google Sheet in your account. If you ever leave, you leave with everything.',
  },
]

// Honest proof only. Read the claims note at the top of this file before editing.
export const PROOF = [
  {
    title: 'We built it for ourselves first',
    body: 'EaseBot exists because we were losing our own enquiries in a spreadsheet. It runs our follow-ups and renewals every day. We are not selling you something we do not use.',
  },
  {
    title: 'Pariksha — a system with real users',
    body: 'Built as our own project and adopted by a college for its students. Exam papers had been circulating through scattered WhatsApp groups; it replaced that with accounts, uploads, categorisation and search.',
    href: '/portfolio',
    linkText: 'See the project',
  },
  {
    title: 'Bots running in the field',
    body: 'Taxi booking and dispatch bots we built for people we know, running on live infrastructure. Not paying clients — we would rather tell you that than invent a case study.',
  },
]

export const WHY = [
  {
    title: 'We are not reselling a messaging plan',
    body: 'Most "WhatsApp automation" companies resell the same Meta API and compete on price per message. We build the system underneath. The channel is a delivery choice, decided in your scoping call.',
  },
  {
    title: 'No per-person, no per-message',
    body: 'Software that charges per seat punishes you for growing. A team of five should not pay five times. You get a figure for the whole thing.',
  },
  {
    title: 'Your data is never hostage',
    body: 'Everything mirrors to a Google Sheet you own. No export request, no lock-in, no leverage over you at renewal time.',
  },
  {
    title: 'Built by the person you speak to',
    body: 'One person builds it and one person answers when it breaks. You are not handed to an account manager.',
  },
]

export const FAQS = [
  {
    question: 'What does automation actually cost?',
    answer:
      'It depends entirely on what is being replaced, which is why this page asks rather than publishes a number. Our productised lead-management system, EaseBot, starts at Rs 1,499 per month for the whole team. Custom builds are quoted once we understand the process — a fixed price for the build and a monthly figure to run it, both agreed before anything starts.',
  },
  {
    question: 'Is this AI?',
    answer:
      'Mostly no, and we would rather say so. Most of what saves you time is reliable rules — capture this, remind that, move it there. Rules do not misread a phone number. Where a language model genuinely helps we will use one and tell you it is there, but we do not label ordinary automation as AI to make it sound expensive.',
  },
  {
    question: 'Can you automate WhatsApp without a WhatsApp Business account?',
    answer:
      'Yes, and for most small businesses that is what we build. The official WhatsApp API means Meta verification, per-conversation charges and pre-approved message templates. Instead we build so the system composes the message and your staff sends it from your own number — no per-message cost, and your customer sees you rather than a broadcast. If your volume genuinely needs the official API, we will say so.',
  },
  {
    question: 'Will my staff have to learn new software?',
    answer:
      'That is the thing we design around, because it is the usual reason automation fails. Most of what we build runs inside Telegram or WhatsApp, which your team already opens all day. Where a proper screen is needed you get a web app at your own address that installs to the home screen.',
  },
  {
    question: 'We are small. Is it worth it?',
    answer:
      'The test is not how big you are, it is how many hours a week the manual work takes and what it costs when something is forgotten. A missed renewal or an enquiry nobody called back is usually worth more than the automation. If the answer is that it is not worth it, we will tell you.',
  },
  {
    question: 'What if we already use Tally or a CRM?',
    answer:
      'Then we usually build around it rather than replace it. Most businesses do not need more software — they need the things they already pay for to talk to each other, and the gaps between them closed.',
  },
  {
    question: 'How long does it take?',
    answer:
      'A lead and follow-up system can be running the same day, because it is already built. Custom work depends on scope; we give you a timeline with the quote, not after you have committed.',
  },
  {
    question: 'What happens if it breaks?',
    answer:
      'You message the person who built it. The monthly figure covers running it, fixing it and changing your wording or steps when how you work changes.',
  },
]
