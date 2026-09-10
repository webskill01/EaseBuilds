'use client'

import { useState } from 'react'
import { FaWhatsapp, FaCheck, FaPaperPlane, FaInfoCircle, FaTelegramPlane, FaEllipsisV } from 'react-icons/fa'
import { BIZ } from './data'

// ponytail: the original ran the three chat bubbles in on setTimeout. Dropped
// the choreography - it is the exact pattern that produced the CLS this site
// spent a session fixing. Everything renders at once, height is stable.
//
// The message text is real: BIZ in ./data.js holds the actual per-vertical
// templates EaseBot sends. Nothing here is a mocked screenshot of a product
// that does not exist - it is the product, rendered.

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
      <span className="block text-center text-sm font-semibold tone-muted mb-3">
        Pick your kind of business
      </span>

      <div className="flex flex-wrap justify-center gap-2 mb-7">
        {BIZ.map((b, i) => (
          <button
            key={b.id}
            type="button"
            onClick={() => pickBiz(i)}
            aria-pressed={i === bizIndex}
            className={`min-h-[40px] px-4 rounded-full text-sm font-semibold transition-colors duration-200 border ${
              i === bizIndex
                ? 'bg-sky-400 border-sky-400 text-slate-950'
                : 'bg-white/5 border-white/15 text-slate-300 hover:border-sky-400/60 hover:text-white'
            }`}
          >
            {b.label}
          </button>
        ))}
      </div>

      {/* Device shell. The bezel and the chat wallpaper are what make these read
          as messages in a thread rather than boxes stacked on a panel. */}
      <div className="rounded-[2rem] border border-white/12 bg-slate-950/60 p-2 shadow-[0_28px_70px_-30px_rgba(0,0,0,0.9)]">
        <div className="overflow-hidden rounded-[1.6rem]">
          {/* thread header */}
          <div className="flex items-center gap-3 bg-[#17263c] px-4 py-3">
            <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-sky-500/20 text-sky-300">
              <FaTelegramPlane className="h-4 w-4" />
            </span>
            <span className="min-w-0">
              <span className="block truncate text-sm font-semibold text-white">
                {current.biz} &mdash; Front Desk
              </span>
              <span className="block text-xs text-emerald-400">online</span>
            </span>
            <FaEllipsisV aria-hidden="true" className="ml-auto h-3.5 w-3.5 flex-none text-slate-500" />
          </div>

          <div className="chat-surface space-y-3 px-4 py-5">
            {/* staff types the enquiry */}
            <div className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-sm chat-bubble-out px-3.5 py-2 text-sm shadow-sm">
              {current.who} {current.num.replace(/ /g, '')}
              <span className="mt-0.5 flex items-center justify-end gap-1 text-[10px] text-emerald-300/70">
                09:24
                <FaCheck aria-hidden="true" className="h-2.5 w-2.5" />
              </span>
            </div>

            {/* bot confirms */}
            <div className="w-fit max-w-[90%] rounded-2xl rounded-bl-sm chat-bubble-in px-3.5 py-2 text-sm shadow-sm">
              <span className="inline-flex items-center gap-1.5 font-bold text-emerald-400">
                <FaCheck aria-hidden="true" className="h-3 w-3" /> Saved.
              </span>{' '}
              {current.who} &middot; +91 {current.num}
              <span className="mt-1 block text-xs text-slate-400">
                New enquiry &middot; added by your front desk
              </span>
            </div>

            <div className="w-fit max-w-[90%] rounded-2xl rounded-bl-sm chat-bubble-in px-3.5 py-2 text-sm shadow-sm">
              What would you like to send {current.who}?
            </div>

            <div className="flex flex-wrap gap-2 pt-1" role="group" aria-label="Message templates">
              {current.keys.map((o, i) => (
                <button
                  key={o.k}
                  type="button"
                  onClick={() => setKeyIndex(i)}
                  aria-pressed={i === keyIndex}
                  className={`min-h-[38px] rounded-lg px-3 text-sm font-semibold transition-colors duration-200 border ${
                    i === keyIndex
                      ? 'bg-sky-400 border-sky-400 text-slate-950'
                      : 'bg-white/5 border-sky-400/30 text-sky-200 hover:bg-sky-400/10'
                  }`}
                >
                  {o.k}
                </button>
              ))}
            </div>

            {message && (
              <div className="mt-2 overflow-hidden rounded-xl border border-emerald-500/30 bg-[#0d2a22]">
                <div className="flex items-center gap-2 border-b border-emerald-500/25 bg-emerald-500/10 px-4 py-2 text-sm font-bold text-emerald-300">
                  <FaWhatsapp aria-hidden="true" className="h-4 w-4" />
                  Opens in WhatsApp
                  <span className="ml-auto rounded bg-emerald-400/20 px-1.5 py-0.5 text-[10px] font-bold tracking-wide text-emerald-200">
                    DEMO
                  </span>
                </div>
                <p className="whitespace-pre-line px-4 py-3 text-sm leading-relaxed text-emerald-50">
                  {message}
                </p>
                <div
                  aria-hidden="true"
                  className="mx-4 mb-3 flex items-center justify-center gap-2 rounded-lg bg-emerald-600 py-2 text-sm font-bold text-white"
                >
                  <FaPaperPlane className="h-3.5 w-3.5" /> Send
                </div>
                <p className="flex gap-2 border-t border-emerald-500/20 px-4 py-3 text-xs text-emerald-200/80">
                  <FaInfoCircle
                    aria-hidden="true"
                    className="mt-0.5 h-3.5 w-3.5 flex-none text-emerald-400"
                  />
                  <span>
                    <strong className="text-emerald-100">
                      This Send button is part of the demo &mdash; it does nothing here.
                    </strong>{' '}
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
        <p className="mt-4 text-center text-sm tone-muted">
          Tap any button above to see the message it writes.
        </p>
      )}
    </div>
  )
}
