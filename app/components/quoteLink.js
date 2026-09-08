// Pure helpers for the WhatsApp quote qualifiers. Kept out of the component so
// they can be checked without a browser - see scripts/check-quote-link.mjs.
//
// Shared by /services/lead-management and /services/business-automation; each
// passes its own `steps`, so the message labels come from the step list rather
// than being hardcoded per page.

// Indian mobile: 10 digits starting 6-9. Accepts the shapes people actually
// type - spaces, dashes, +91, 0 prefix - and rejects anything else.
export function normalisePhone(raw) {
  const digits = String(raw || '').replace(/\D/g, '')
  const local = digits.replace(/^(?:91|0)/, '')
  return /^[6-9]\d{9}$/.test(local) ? local : null
}

export function buildQuoteMessage(intro, steps, answers) {
  return [intro, '', ...steps.map((s) => `${s.label}: ${answers[s.key] ?? ''}`)].join('\n')
}

export function buildQuoteLink(whatsappNumber, intro, steps, answers) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    buildQuoteMessage(intro, steps, answers)
  )}`
}
