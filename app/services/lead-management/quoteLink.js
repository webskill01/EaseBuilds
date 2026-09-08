// Pure helpers for the EaseBot quote qualifier. Kept out of the component so
// they can be checked without a browser - see scripts/check-quote-link.mjs.

// Indian mobile: 10 digits starting 6-9. Accepts the shapes people actually
// type - spaces, dashes, +91, 0 prefix - and rejects anything else.
export function normalisePhone(raw) {
  const digits = String(raw || '').replace(/\D/g, '')
  const local = digits.replace(/^(?:91|0)/, '')
  return /^[6-9]\d{9}$/.test(local) ? local : null
}

export function buildQuoteMessage(answers) {
  return [
    'Hi EaseBuilds, I would like a price for EaseBot.',
    '',
    `Business: ${answers.biz}`,
    `What we do: ${answers.does}`,
    `People handling enquiries: ${answers.team}`,
    `Most want to track: ${answers.track}`,
    `My WhatsApp: ${answers.phone}`,
  ].join('\n')
}

export function buildQuoteLink(whatsappNumber, answers) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(buildQuoteMessage(answers))}`
}
