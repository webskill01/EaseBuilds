'use client'

import { useState } from 'react'
import { FaWhatsapp, FaArrowRight } from 'react-icons/fa'
import { STEPS, WHATSAPP } from './data'
import { normalisePhone, buildQuoteLink } from './quoteLink'

export default function QuoteForm() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState({})
  const [draft, setDraft] = useState('')
  const [error, setError] = useState('')

  const done = step >= STEPS.length
  const s = done ? null : STEPS[step]

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

  const pct = Math.round((step / STEPS.length) * 100)

  return (
    <div className="mx-auto w-full max-w-lg overflow-hidden rounded-2xl border-2 border-gray-200 bg-white">
      <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-4 py-3">
        <span className="text-sm font-semibold text-gray-700">EaseBot</span>
        <span className="text-xs font-medium text-gray-500">
          {done ? 'All done' : `Question ${step + 1} of ${STEPS.length}`}
        </span>
      </div>

      <div className="h-1 bg-gray-100">
        <div
          className="h-1 bg-primary-600 transition-all duration-300"
          style={{ width: `${done ? 100 : pct}%` }}
        />
      </div>

      <div className="space-y-3 p-4">
        {STEPS.slice(0, step).map((prev) => (
          <div key={prev.key} className="space-y-2">
            <p className="w-fit max-w-[90%] rounded-2xl rounded-bl-sm bg-gray-100 px-4 py-2 text-sm text-gray-800">
              {prev.q}
            </p>
            <p className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-sm bg-primary-600 px-4 py-2 text-sm text-white">
              {answers[prev.key]}
            </p>
          </div>
        ))}

        {!done && (
          <p className="w-fit max-w-[90%] rounded-2xl rounded-bl-sm bg-gray-100 px-4 py-2 text-sm text-gray-800">
            {s.q}
          </p>
        )}

        {done && (
          <div className="pt-1">
            <p className="mb-3 text-sm text-gray-700">
              That is everything. Tap below and WhatsApp opens with your answers already written &mdash;
              you just hit send.
            </p>
            <a
              href={buildQuoteLink(WHATSAPP, answers)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-green-600 px-6 font-semibold text-white transition hover:bg-green-700"
            >
              <FaWhatsapp aria-hidden="true" className="h-5 w-5" />
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
        <div className="border-t border-gray-200 bg-gray-50 p-4">
          {s.type === 'choice' ? (
            <div className="flex flex-wrap gap-2">
              {s.opts.map((o) => (
                <button
                  key={o}
                  type="button"
                  onClick={() => accept(o)}
                  className="min-h-[42px] rounded-full bg-white px-4 text-sm font-medium text-gray-700 ring-1 ring-gray-200 transition hover:bg-primary-50 hover:text-primary-700"
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
                className="min-h-[48px] flex-1 rounded-xl border-2 border-gray-200 px-4 text-sm focus:border-primary-500 focus:outline-none"
              />
              <button
                type="button"
                onClick={() => accept(draft)}
                aria-label="Next question"
                className="flex min-h-[48px] w-12 items-center justify-center rounded-xl bg-primary-600 text-white transition hover:bg-primary-700"
              >
                <FaArrowRight aria-hidden="true" className="h-4 w-4" />
              </button>
            </div>
          )}
          {error && (
            <p role="alert" className="mt-2 text-sm font-medium text-red-600">
              {error}
            </p>
          )}
        </div>
      )}
    </div>
  )
}
