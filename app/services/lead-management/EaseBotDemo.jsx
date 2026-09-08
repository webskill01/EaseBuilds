'use client'

import { useState } from 'react'
import { FaWhatsapp, FaCheck, FaPaperPlane, FaInfoCircle, FaTelegramPlane } from 'react-icons/fa'
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
    <div className="max-w-lg mx-auto w-full">
      <span className="block text-center text-sm font-semibold text-gray-500 mb-3">
        Pick your kind of business
      </span>

      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {BIZ.map((b, i) => (
          <button
            key={b.id}
            type="button"
            onClick={() => pickBiz(i)}
            aria-pressed={i === bizIndex}
            className={`min-h-[40px] px-4 rounded-full text-sm font-semibold transition-all ${
              i === bizIndex
                ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg'
                : 'bg-white text-gray-600 border border-gray-200 hover:border-blue-300 hover:text-blue-600'
            }`}
          >
            {b.label}
          </button>
        ))}
      </div>

      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300" />
        <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
            <FaTelegramPlane className="text-lg" />
            <span className="text-sm font-bold">{current.biz} &mdash; Front Desk</span>
          </div>

          <div className="p-4 space-y-3 bg-gray-50">
            {/* staff types the enquiry */}
            <p className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-sm bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2 text-sm text-white shadow-sm">
              {current.who} {current.num.replace(/ /g, '')}
            </p>

            {/* bot confirms */}
            <div className="w-fit max-w-[90%] rounded-2xl rounded-bl-sm bg-white border border-gray-200 px-4 py-2 text-sm text-gray-800 shadow-sm">
              <span className="inline-flex items-center gap-1.5 font-bold text-green-600">
                <FaCheck aria-hidden="true" className="w-3 h-3" /> Saved.
              </span>{' '}
              {current.who} &middot; +91 {current.num}
              <span className="block text-xs text-gray-500 mt-1">
                New enquiry &middot; added by your front desk
              </span>
            </div>

            <p className="w-fit max-w-[90%] rounded-2xl rounded-bl-sm bg-white border border-gray-200 px-4 py-2 text-sm text-gray-800 shadow-sm">
              What would you like to send {current.who}?
            </p>

            <div className="flex flex-wrap gap-2 pt-1" role="group" aria-label="Message templates">
              {current.keys.map((o, i) => (
                <button
                  key={o.k}
                  type="button"
                  onClick={() => setKeyIndex(i)}
                  aria-pressed={i === keyIndex}
                  className={`min-h-[38px] px-3 rounded-lg text-sm font-semibold transition-all ${
                    i === keyIndex
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-white text-blue-600 border border-blue-200 hover:bg-blue-50'
                  }`}
                >
                  {o.k}
                </button>
              ))}
            </div>

            {message && (
              <div className="mt-2 rounded-xl overflow-hidden border-2 border-green-200 bg-white">
                <div className="flex items-center gap-2 px-4 py-2 bg-green-50 border-b border-green-200 text-sm font-bold text-green-800">
                  <FaWhatsapp aria-hidden="true" className="w-4 h-4" />
                  Opens in WhatsApp
                  <span className="ml-auto rounded bg-green-200 px-1.5 py-0.5 text-[10px] font-bold tracking-wide text-green-900">
                    DEMO
                  </span>
                </div>
                <p className="whitespace-pre-line px-4 py-3 text-sm text-gray-800">{message}</p>
                <div
                  aria-hidden="true"
                  className="mx-4 mb-3 flex items-center justify-center gap-2 rounded-lg bg-green-600 py-2 text-sm font-bold text-white"
                >
                  <FaPaperPlane className="w-3.5 h-3.5" /> Send
                </div>
                <p className="flex gap-2 border-t border-green-100 bg-green-50/50 px-4 py-3 text-xs text-gray-600">
                  <FaInfoCircle
                    aria-hidden="true"
                    className="mt-0.5 w-3.5 h-3.5 flex-none text-green-700"
                  />
                  <span>
                    <strong>This Send button is part of the demo &mdash; it does nothing here.</strong>{' '}
                    On your staff&rsquo;s phone this is WhatsApp&rsquo;s own Send button, and they tap
                    it themselves.
                  </span>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {!message && (
        <p className="mt-4 text-center text-sm text-gray-500">
          Tap any button above to see the message it writes.
        </p>
      )}
    </div>
  )
}
