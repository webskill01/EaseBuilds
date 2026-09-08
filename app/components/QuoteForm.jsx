'use client'

// Chat-style qualifier that ends in a prefilled WhatsApp message.
// Shared: pass `steps`, an `intro` line for the message, and the number.

import { useState } from 'react'
import { FaWhatsapp, FaArrowRight, FaTelegramPlane } from 'react-icons/fa'
import { normalisePhone, buildQuoteLink } from './quoteLink'

export default function QuoteForm({ steps, intro, whatsapp, title = 'EaseBuilds' }) {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState({})
  const [draft, setDraft] = useState('')
  const [error, setError] = useState('')

  const done = step >= steps.length
  const s = done ? null : steps[step]

  function accept(value) {
    const v = String(value || '').trim()
    if (!v) {
      setError('Please fill this in.')
      return
    }
    if (s.type === 'tel' && !normalisePhone(v)) {
      setError('That does not look like a 10-digit Indian mobile number.')
      return
    }
    setAnswers((a) => ({ ...a, [s.key]: s.type === 'tel' ? normalisePhone(v) : v }))
    setDraft('')
    setError('')
    setStep((n) => n + 1)
  }

  const pct = done ? 100 : Math.round((step / steps.length) * 100)

  return (
    <div className="max-w-lg mx-auto w-full">
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300" />
        <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
            <span className="inline-flex items-center gap-2 text-sm font-bold">
              <FaTelegramPlane className="text-lg" /> {title}
            </span>
            <span className="text-xs font-semibold text-white/90">
              {done ? 'All done' : `Question ${step + 1} of ${steps.length}`}
            </span>
          </div>

          <div className="h-1.5 bg-gray-100">
            <div
              className="h-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 transition-all duration-300"
              style={{ width: `${pct}%` }}
            />
          </div>

          <div className="p-4 space-y-3 bg-gray-50 min-h-[180px]">
            {steps.slice(0, step).map((prev) => (
              <div key={prev.key} className="space-y-2">
                <p className="w-fit max-w-[90%] rounded-2xl rounded-bl-sm bg-white border border-gray-200 px-4 py-2 text-sm text-gray-800 shadow-sm">
                  {prev.q}
                </p>
                <p className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-sm bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2 text-sm text-white shadow-sm">
                  {answers[prev.key]}
                </p>
              </div>
            ))}

            {!done && (
              <p className="w-fit max-w-[90%] rounded-2xl rounded-bl-sm bg-white border border-gray-200 px-4 py-2 text-sm text-gray-800 shadow-sm">
                {s.q}
              </p>
            )}

            {done && (
              <div className="pt-1">
                <p className="text-sm text-gray-700 mb-4">
                  That is everything. Tap below and WhatsApp opens with your answers already written
                  &mdash; you just hit send.
                </p>
                <a
                  href={buildQuoteLink(whatsapp, intro, steps, answers)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full min-h-[52px] flex items-center justify-center gap-2 rounded-xl bg-green-600 px-6 font-bold text-white shadow-lg hover:bg-green-700 hover:shadow-xl transition-all"
                >
                  <FaWhatsapp aria-hidden="true" className="w-5 h-5" />
                  Send on WhatsApp
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setStep(0)
                    setAnswers({})
                    setError('')
                  }}
                  className="mt-3 w-full text-sm font-medium text-gray-500 underline hover:text-gray-700"
                >
                  Start again
                </button>
              </div>
            )}
          </div>

          {!done && (
            <div className="p-4 border-t border-gray-200 bg-white">
              {s.type === 'choice' ? (
                <div className="flex flex-wrap gap-2">
                  {s.opts.map((o) => (
                    <button
                      key={o}
                      type="button"
                      onClick={() => accept(o)}
                      className="min-h-[42px] px-4 rounded-full bg-white text-sm font-semibold text-gray-700 border border-gray-200 hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50 transition-all"
                    >
                      {o}
                    </button>
                  ))}
                </div>
              ) : (
                <div className="flex gap-2">
                  <label htmlFor="quote-input" className="sr-only">
                    {s.q}
                  </label>
                  <input
                    id="quote-input"
                    type={s.type === 'tel' ? 'tel' : 'text'}
                    inputMode={s.type === 'tel' ? 'numeric' : undefined}
                    autoComplete={s.type === 'tel' ? 'tel' : 'off'}
                    value={draft}
                    placeholder={s.ph}
                    onChange={(e) => setDraft(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault()
                        accept(draft)
                      }
                    }}
                    className="flex-1 min-h-[48px] rounded-xl border-2 border-gray-200 px-4 text-sm focus:border-blue-500 focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => accept(draft)}
                    aria-label="Next question"
                    className="w-12 min-h-[48px] flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md hover:shadow-lg transition-all"
                  >
                    <FaArrowRight aria-hidden="true" className="w-4 h-4" />
                  </button>
                </div>
              )}
              {error && (
                <p role="alert" className="mt-2 text-sm font-semibold text-red-600">
                  {error}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
