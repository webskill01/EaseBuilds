// Self-check for the shared WhatsApp quote-qualifier helpers.
// Run: node scripts/check-quote-link.mjs
import assert from 'node:assert/strict'
import { normalisePhone, buildQuoteMessage, buildQuoteLink } from '../app/components/quoteLink.js'
import { STEPS as LEAD_STEPS, QUOTE_INTRO as LEAD_INTRO } from '../app/services/lead-management/data.js'
import { STEPS as AUTO_STEPS, QUOTE_INTRO as AUTO_INTRO } from '../app/services/business-automation/data.js'

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

// --- every step on both pages must carry the fields the form and message need ---
for (const [name, steps] of [['lead-management', LEAD_STEPS], ['business-automation', AUTO_STEPS]]) {
  assert.ok(steps.length > 0, `${name}: no steps`)
  for (const s of steps) {
    assert.ok(s.key, `${name}: step missing key`)
    assert.ok(s.label, `${name}: step ${s.key} missing label`)
    assert.ok(s.q, `${name}: step ${s.key} missing question`)
    if (s.type === 'choice') assert.ok(s.opts?.length, `${name}: ${s.key} is choice with no opts`)
    else assert.ok(s.ph, `${name}: ${s.key} missing placeholder`)
  }
  assert.equal(steps.at(-1).type, 'tel', `${name}: last step should collect the phone number`)
  assert.equal(new Set(steps.map((s) => s.key)).size, steps.length, `${name}: duplicate step keys`)
}

// --- message + link, driven by whichever step list is passed ---
const answers = Object.fromEntries(LEAD_STEPS.map((s) => [s.key, `answer-${s.key}`]))
const msg = buildQuoteMessage(LEAD_INTRO, LEAD_STEPS, answers)
assert.ok(msg.startsWith(LEAD_INTRO), 'intro must lead the message')
for (const s of LEAD_STEPS) {
  assert.ok(msg.includes(`${s.label}: answer-${s.key}`), `message missing "${s.label}"`)
}

const link = buildQuoteLink('916283380110', LEAD_INTRO, LEAD_STEPS, answers)
assert.ok(link.startsWith('https://wa.me/916283380110?text='))
assert.ok(!/[ \n]/.test(link), 'link must be fully encoded - no raw spaces or newlines')
assert.equal(decodeURIComponent(link.split('?text=')[1]), msg)

// the automation page uses its own intro and labels through the same builder
const autoAnswers = Object.fromEntries(AUTO_STEPS.map((s) => [s.key, `x-${s.key}`]))
const autoMsg = buildQuoteMessage(AUTO_INTRO, AUTO_STEPS, autoAnswers)
assert.ok(autoMsg.startsWith(AUTO_INTRO))
assert.ok(!autoMsg.includes(LEAD_INTRO), 'automation message must not carry the EaseBot intro')

console.log('check-quote-link: all assertions passed')
