// Self-check for the EaseBot quote qualifier helpers.
// Run: node scripts/check-quote-link.mjs
import assert from 'node:assert/strict'
import { normalisePhone, buildQuoteMessage, buildQuoteLink } from '../app/services/lead-management/quoteLink.js'

// --- normalisePhone: the shapes people actually type ---
assert.equal(normalisePhone('9876543210'), '9876543210')
assert.equal(normalisePhone('98765 43210'), '9876543210')
assert.equal(normalisePhone('+91 98765-43210'), '9876543210')
assert.equal(normalisePhone('09876543210'), '9876543210')
assert.equal(normalisePhone('919876543210'), '9876543210')

// --- and what it must reject ---
assert.equal(normalisePhone('1234567890'), null, 'must not start 0-5')
assert.equal(normalisePhone('98765'), null, 'too short')
assert.equal(normalisePhone('98765432101'), null, 'too long')
assert.equal(normalisePhone(''), null)
assert.equal(normalisePhone(null), null)
assert.equal(normalisePhone('not a phone'), null)

// --- message + link ---
const answers = {
  biz: 'FitZone Gym',
  does: 'gym',
  team: '2-5 people',
  track: 'renewals',
  phone: '9876543210',
}
const msg = buildQuoteMessage(answers)
for (const v of Object.values(answers)) {
  assert.ok(msg.includes(v), `message is missing "${v}"`)
}

const link = buildQuoteLink('916283380110', answers)
assert.ok(link.startsWith('https://wa.me/916283380110?text='))
assert.ok(!/[ \n]/.test(link), 'link must be fully encoded - no raw spaces or newlines')
assert.equal(decodeURIComponent(link.split('?text=')[1]), msg)

console.log('check-quote-link: all assertions passed')
