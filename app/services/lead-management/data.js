// Content for /services/lead-management (EaseBot).
// Ported from bots.easebuilds.in on 2026-09-08 when that subdomain was merged
// into the main domain. Copy is unchanged except where it referenced the
// subdomain as a separate site.

// ponytail: one constant. The bots subdomain used 916284992669; the rest of the
// site uses 916283380110. Kept the site-wide number so the merged page does not
// reintroduce the contradiction Task 1.8 fixed. Flip this line if EaseBot leads
// are meant to land on the other handset.
export const WHATSAPP = '916283380110'

export const PRICE = {
  monthly: 1499,
  setup: 3000,
  note: 'Per month for your whole team, not per person. The exact price depends on how many people handle your enquiries. Setup is free if you pay yearly.',
}

// Interactive demo - every button carries its own message.
export const BIZ = [
  {
    id: 'gym', label: 'Gym', biz: 'FitZone', who: 'Rahul', num: '98765 43210',
    keys: [
      { k: 'Membership Plans', m: "Hi Rahul! Great meeting you at FitZone today.\n\nHere are our membership plans: fitzone.in/plans\n\nWhich one suits you? Reply and I'll get you started." },
      { k: 'Free Trial', m: "Hi Rahul! Your free trial session at FitZone is ready whenever you are.\n\nWe're open 6am-10pm, no booking needed - just walk in and ask for me.\n\nWhich day works best for you?" },
      { k: 'Location', m: "Hi Rahul! Here's how to reach FitZone: maps.app.goo.gl/fitzone\n\nWe're on the second floor, above the HDFC bank. Parking is free at the back.\n\nSee you soon!" },
      { k: 'Ask for Review', m: "Hi Rahul! Hope you're enjoying your workouts at FitZone.\n\nIf you have 30 seconds, a quick Google review would mean a lot to us: g.page/r/fitzone/review\n\nThank you!" },
    ],
  },
  {
    id: 'salon', label: 'Salon', biz: 'Glow Studio', who: 'Priya', num: '99887 76655',
    keys: [
      { k: 'Price List', m: "Hi Priya! Lovely meeting you at Glow Studio.\n\nHere's our full price list: glowstudio.in/rates\n\nAnything you'd like me to explain? Just reply." },
      { k: 'Book a Slot', m: "Hi Priya! Ready to book you in at Glow Studio.\n\nWe have slots open this week - mornings are quietest.\n\nWhich day and time suits you? I'll hold it for you." },
      { k: 'Location', m: "Hi Priya! Here's our location: maps.app.goo.gl/glowstudio\n\nWe're the corner shop opposite the park, just past the chemist.\n\nSee you soon!" },
      { k: 'Ask for Review', m: "Hi Priya! Hope you loved your visit to Glow Studio.\n\nIf you have a moment, a Google review really helps us: g.page/r/glowstudio/review\n\nThank you so much!" },
    ],
  },
  {
    id: 'agency', label: 'Agency', biz: 'EaseBuilds', who: 'Amit', num: '98140 11223',
    keys: [
      { k: 'Portfolio', m: "Hi Amit! Great speaking with you - this is Nitin from EaseBuilds.\n\nHere's some of our recent work: easebuilds.in/portfolio\n\nWhat kind of business is the website for? A word or two is enough." },
      { k: 'Pricing', m: "Hi Amit! As promised, our full pricing: easebuilds.in/pricing\n\nWebsites start at Rs 2,999 and most go live in 2-4 weeks, with no hidden costs.\n\nWhich package looks closest to what you need?" },
      { k: 'Get Started', m: "Hi Amit! Happy to get started whenever you are.\n\nAll I need to begin: your business name, a logo if you have one, and a rough idea of the pages you want.\n\nShall I send over the details?" },
      { k: 'Ask for Review', m: "Hi Amit! Hope the new site is working well for you.\n\nIf you're happy with it, a quick Google review would genuinely help us: g.page/r/easebuilds/review\n\nThanks a lot!" },
    ],
  },
  {
    id: 'coaching', label: 'Coaching', biz: 'Apex Classes', who: 'Sneha', num: '97654 32109',
    keys: [
      { k: 'Course Fees', m: "Hi Sneha! Thanks for enquiring at Apex Classes.\n\nHere are our course fees and batch timings: apexclasses.in/fees\n\nWhich subject and class are you looking for?" },
      { k: 'Free Demo Class', m: "Hi Sneha! You're welcome to sit in on a free demo class at Apex Classes.\n\nDemos run every Saturday at 10am, no charge and no commitment.\n\nShall I add your name for this Saturday?" },
      { k: 'Location', m: "Hi Sneha! Here's how to find Apex Classes: maps.app.goo.gl/apexclasses\n\nWe're above the stationery shop near the bus stand, first floor.\n\nSee you soon!" },
      { k: 'Ask for Review', m: "Hi Sneha! Hope the classes are going well.\n\nIf you have a minute, a Google review helps other parents find us: g.page/r/apexclasses/review\n\nThank you!" },
    ],
  },
  {
    id: 'clinic', label: 'Clinic', biz: 'CareWell Clinic', who: 'Vikram', num: '96543 21098',
    keys: [
      { k: 'Doctor Timings', m: "Hi Vikram! Thanks for calling CareWell Clinic.\n\nOur doctor's timings are here: carewell.in/timings\n\nMornings 9-1 and evenings 5-8, closed Sundays. Which suits you better?" },
      { k: 'Book Appointment', m: "Hi Vikram! Happy to book you an appointment at CareWell Clinic.\n\nWe have slots free this week.\n\nWhich day works for you? Please also share the patient's name and age." },
      { k: 'Location', m: "Hi Vikram! Here's our location: maps.app.goo.gl/carewell\n\nGround floor, next to the medical store on Mall Road. Parking is available in front.\n\nSee you soon." },
      { k: 'Ask for Review', m: "Hi Vikram! Hope you're feeling better.\n\nIf you have a moment, a Google review helps other patients find us: g.page/r/carewell/review\n\nWishing you good health!" },
    ],
  },
  {
    id: 'property', label: 'Real Estate', biz: 'Sharma Properties', who: 'Karan', num: '95432 10987',
    keys: [
      { k: 'Listings', m: "Hi Karan! Good speaking with you - this is from Sharma Properties.\n\nHere are properties in your budget: sharmaproperties.in/listings\n\nAny of these worth a closer look?" },
      { k: 'Book Site Visit', m: "Hi Karan! Happy to arrange a site visit whenever suits you.\n\nWeekends are easiest for viewings, and I can show you two or three in one trip.\n\nAre you free this Saturday or Sunday?" },
      { k: 'Location', m: "Hi Karan! Here's our office: maps.app.goo.gl/sharmaproperties\n\nWe're on the main road, first floor above the SBI branch.\n\nDrop in any time between 10am and 7pm." },
      { k: 'Ask for Review', m: "Hi Karan! Congratulations again on the new place.\n\nIf you were happy with how it went, a Google review would help us a lot: g.page/r/sharmaproperties/review\n\nThank you!" },
    ],
  },
]

export const FEATURES = [
  ['Records every enquiry in seconds', 'Name and number, typed once. Nothing else to fill in.'],
  ['Spots repeat customers', "Recognises a number you've already saved, in any format."],
  ['Writes the message for you', 'Personalised by name, and it rotates between versions so it never looks copy-pasted.'],
  ['Reminds you to follow up', 'The bot nudges your group so nobody slips through.'],
  ['Tracks renewals', 'Memberships, packages, retainers, fees - reminded before they are due.'],
  ['Asks for Google reviews', 'At the right moment, and never the same customer twice.'],
  ['Shares your Instagram', 'One tap to push your social pages to a new customer.'],
  ['Shows who signed up', 'See your conversion rate any time, without asking anyone.'],
  ['Live Google Sheet', 'Your whole list, readable on your phone whenever you want it.'],
  ['Works from anywhere', 'Shop, home, or on the road. No computer needed, ever.'],
  ['Keeps your number safe', 'Daily limits, business hours, and cooldowns are built in.'],
  ['You edit your own messages', 'Change your wording any time. Live in under a minute.'],
  ['Your own app, your own address', 'yourname.easebuilds.in - your name, your colours, installs to the home screen.'],
  ["Buzzes when something's due", 'A renewal coming up sends a notification, even with the app closed.'],
  ['One screen for today', 'Everything due today in one list, so nothing rests on a notification arriving.'],
  ['You control who gets in', 'Add and remove your team yourself. Only you see settings, messages and links.'],
]

export const VERTICALS = [
  ['Gyms & fitness', 'Track membership renewals'],
  ['Salons & spas', 'Track package expiry'],
  ['Agencies', 'Track retainers and proposals'],
  ['Coaching centres', 'Track fee due dates'],
  ['Clinics', 'Track follow-up visits'],
  ['Real estate', 'Track site visits and callbacks'],
  ['Insurance agents', 'Track policy renewals'],
  ['Anyone who gets enquiries', 'Track whatever matters to you'],
]

export const FAQS = [
  {
    question: 'Do my staff need to install anything?',
    answer: 'No. EaseBot runs inside Telegram, which is free and which most teams already have. Add someone to your team group and they can use it immediately - no username, no password, nothing to download. If they would rather have a proper app, you also get one at your own web address, and that is their choice to make, not a requirement.',
  },
  {
    question: 'Is it only a Telegram thing?',
    answer: 'No. You also get your own app at yourname.easebuilds.in - your name, your colours, and it installs to the home screen. Add customers, search your list, work through who is still waiting, open a ready WhatsApp message, read your numbers. It is the same customers and the same second as the group, because it is the same system. Use either, or both.',
  },
  {
    question: 'Will I be reminded about renewals?',
    answer: 'Yes, two ways. The bot posts into your team group the morning a renewal is coming up, and the app sends a notification to your phone even when it is closed. There is also a Today screen listing everything due, so a notification you missed is never a renewal you missed.',
  },
  {
    question: 'Does it send WhatsApp messages automatically?',
    answer: 'No, and that is deliberate. EaseBot writes the message and opens WhatsApp with it ready - your staff reads it and taps send themselves. Messages go from your own number with your own branding, so your customers see you rather than a broadcast.',
  },
  {
    question: 'Do I need a WhatsApp Business account or the WhatsApp API?',
    answer: 'No. There is no Meta verification to pass, no API access to apply for and no message templates to get approved. EaseBot writes the message and opens WhatsApp with the text ready - your staff taps send, from whichever WhatsApp they already use, personal or Business. That means no per-conversation charges, no waiting on template approval, and no automated sender for WhatsApp to flag. If your volume ever genuinely needs the official API, we will tell you rather than sell you one.',
  },
  {
    question: "What if my business isn't a gym or a salon?",
    answer: 'It works for anyone who gets enquiries and needs to follow up - agencies, coaching centres, clinics, real estate, insurance and service businesses. Your buttons, messages and the things you track are set up around how you work.',
  },
  {
    question: 'How long does setup take?',
    answer: 'About 30 minutes. We write your message templates, create your team group and add your staff. You can be using it the same day.',
  },
  {
    question: 'How much does EaseBot cost?',
    answer: 'Plans start at Rs 1,499 per month for your whole team, not per person. The exact price depends on how many people handle your enquiries. Setup is Rs 3,000 one time, free if you pay yearly.',
  },
  {
    question: 'How is this cheaper than a CRM?',
    answer: 'Most CRM software charges per user per month, so the bill grows every time someone joins the team. EaseBot is Rs 1,499 a month for the whole team - five people or fifteen, the price does not change. There is also no migration project and no training budget: the work happens in Telegram and WhatsApp, which the people handling your enquiries already know how to use.',
  },
  {
    question: 'Can I get my data out?',
    answer: 'Yes. Everything is mirrored to a Google Sheet that you own and can open any time. Your customer list is never locked inside our system.',
  },
]

export const STEPS = [
  { key: 'biz', label: 'Business', q: "What's your business called?", ph: 'e.g. FitZone Gym', type: 'text' },
  { key: 'does', label: 'What we do', q: 'And what do you do?', ph: 'e.g. gym, salon, coaching centre', type: 'text' },
  { key: 'team', label: 'People handling enquiries', q: 'How many people handle your enquiries?', type: 'choice', opts: ['Just me', '2-5 people', '6-10 people', '11-20 people', '20+ people'] },
  { key: 'track', label: 'Most want to track', q: 'What would you most like to keep track of?', ph: 'e.g. renewals, follow-ups, who signed up', type: 'text' },
  { key: 'phone', label: 'My WhatsApp', q: 'Last one - your WhatsApp number?', ph: '10-digit mobile number', type: 'tel' },
]

export const QUOTE_INTRO = 'Hi EaseBuilds, I would like a price for EaseBot.'
