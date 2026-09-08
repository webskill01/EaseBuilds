'use client'

import { useState } from 'react'
import { FaWhatsapp, FaCheck, FaPaperPlane, FaInfoCircle } from 'react-icons/fa'
import { BIZ } from './data'

// ponytail: the original ran the three chat bubbles in on setTimeout. Dropped
// the choreography - it is the exact pattern that produced the CLS this site
// spent a session fixing. Everything renders at once, height is stable.

export default function EaseBotDemo() {
  const [bizIndex, setBizIndex] = useState(0)
  const [keyIndex, setKeyIndex] = useState(null)

  const current = BIZ[bizIndex]
  const message = keyIndex === null ? null : current.keys[keyIndex].m

  function pickBiz(i) {
    setBizIndex(i)
    setKeyIndex(null)
  }

  return (
    <div className="mx-auto w-full max-w-lg">
      <span className="mb-3 block text-center text-sm font-semibold text-gray-500">
        Pick your kind of business
      </span>

      <div className="mb-5 flex flex-wrap justify-center gap-2">
        {BIZ.map((b, i) => (
          <button
            key={b.id}
            type="button"
            onClick={() => pickBiz(i)}
            aria-pressed={i === bizIndex}
            className={`min-h-[40px] rounded-full px-4 text-sm font-medium transition ${
              i === bizIndex
                ? 'bg-primary-600 text-white'
                : 'bg-white text-gray-600 ring-1 ring-gray-200 hover:bg-primary-50 hover:text-primary-700'
            }`}
          >
            {b.label}
          </button>
        ))}
      </div>

      <div className="overflow-hidden rounded-2xl border-2 border-gray-200 bg-white">
        <div className="border-b border-gray-200 bg-gray-50 px-4 py-3 text-sm font-semibold text-gray-700">
          {current.biz} &mdash; Front Desk
        </div>

        <div className="space-y-3 p-4">
          {/* staff types the enquiry */}
          <p className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-sm bg-primary-600 px-4 py-2 text-sm text-white">
            {current.who} {current.num.replace(/ /g, '')}
          </p>

          {/* bot confirms */}
          <div className="w-fit max-w-[90%] rounded-2xl rounded-bl-sm bg-gray-100 px-4 py-2 text-sm text-gray-800">
            <span className="inline-flex items-center gap-1.5 font-semibold text-success-600">
              <FaCheck aria-hidden="true" className="h-3 w-3" /> Saved.
            </span>{' '}
            {current.who} &middot; +91 {current.num}
            <span className="mt-1 block text-xs text-gray-500">
              New enquiry &middot; added by your front desk
            </span>
          </div>

          <p className="w-fit max-w-[90%] rounded-2xl rounded-bl-sm bg-gray-100 px-4 py-2 text-sm text-gray-800">
            What would you like to send {current.who}?
          </p>

          <div className="flex flex-wrap gap-2 pt-1" role="group" aria-label="Message templates">
            {current.keys.map((o, i) => (
              <button
                key={o.k}
                type="button"
                onClick={() => setKeyIndex(i)}
                aria-pressed={i === keyIndex}
                className={`min-h-[38px] rounded-lg px-3 text-sm font-medium transition ${
                  i === keyIndex
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-primary-700 ring-1 ring-primary-200 hover:bg-primary-50'
                }`}
              >
                {o.k}
              </button>
            ))}
          </div>

          {message && (
            <div className="mt-2 overflow-hidden rounded-xl border border-green-200 bg-green-50">
              <div className="flex items-center gap-2 border-b border-green-200 px-4 py-2 text-sm font-semibold text-green-800">
                <FaWhatsapp aria-hidden="true" className="h-4 w-4" />
                Opens in WhatsApp
                <span className="ml-auto rounded bg-green-200 px-1.5 py-0.5 text-[10px] font-bold tracking-wide text-green-900">
                  DEMO
                </span>
              </div>
              <p className="whitespace-pre-line px-4 py-3 text-sm text-gray-800">{message}</p>
              <div
                aria-hidden="true"
                className="mx-4 mb-3 flex items-center justify-center gap-2 rounded-lg bg-green-600 py-2 text-sm font-semibold text-white"
              >
                <FaPaperPlane className="h-3.5 w-3.5" /> Send
              </div>
              <p className="flex gap-2 border-t border-green-200 px-4 py-3 text-xs text-gray-600">
                <FaInfoCircle aria-hidden="true" className="mt-0.5 h-3.5 w-3.5 flex-none text-green-700" />
                <span>
                  <strong>This Send button is part of the demo &mdash; it does nothing here.</strong> On
                  your staff&rsquo;s phone this is WhatsApp&rsquo;s own Send button, and they tap it
                  themselves.
                </span>
              </p>
            </div>
          )}
        </div>
      </div>

      {!message && (
        <p className="mt-3 text-center text-sm text-gray-500">
          Tap any button above to see the message it writes.
        </p>
      )}
    </div>
  )
}
