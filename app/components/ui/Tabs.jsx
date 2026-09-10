'use client'

// Progressive disclosure for sections that were three or four cards of prose
// side by side.
//
// The copy is NOT cut - every word the cards carried is still here. It is the
// reading burden that changes: a scanner reads the tab labels and one body, a
// reader clicks through all of them. That was the explicit decision on
// 2026-09-10: restructure, delete nothing.
//
// Panels stay MOUNTED and are hidden with the `hidden` attribute rather than
// conditionally rendered, for the same reason Accordion.jsx keeps its answers
// mounted: text that is not in the HTML is text Google cannot read. These
// sections are not marked up as FAQ today, but the failure mode is identical
// and silent, so the component does not offer the other behaviour.

import { useState } from 'react'

export default function Tabs({ items = [], className = '', idPrefix = 'tab' }) {
  const [active, setActive] = useState(0)

  if (!items.length) return null

  function onKeyDown(e) {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return
    e.preventDefault()
    const dir = e.key === 'ArrowRight' ? 1 : -1
    const next = (active + dir + items.length) % items.length
    setActive(next)
    document.getElementById(`${idPrefix}-${next}`)?.focus()
  }

  return (
    <div className={className}>
      <div
        role="tablist"
        aria-orientation="horizontal"
        onKeyDown={onKeyDown}
        className="flex flex-wrap gap-2 justify-center mb-6 sm:mb-8"
      >
        {items.map((item, i) => {
          const on = i === active
          return (
            <button
              key={item.title}
              id={`${idPrefix}-${i}`}
              role="tab"
              type="button"
              aria-selected={on}
              aria-controls={`${idPrefix}-panel-${i}`}
              tabIndex={on ? 0 : -1}
              onClick={() => setActive(i)}
              className={`inline-flex items-center gap-2 min-h-[44px] px-4 sm:px-5 rounded-full text-sm font-semibold border transition-colors duration-200 ${
                on
                  ? 'bg-blue-600 border-blue-600 text-white shadow-[0_6px_16px_-6px_rgba(37,99,235,0.8)]'
                  : 'bg-white/80 border-gray-300 text-gray-700 hover:border-blue-400 hover:text-blue-700'
              }`}
            >
              {item.icon ? <item.icon className="w-4 h-4" aria-hidden="true" /> : null}
              {item.title}
            </button>
          )
        })}
      </div>

      {items.map((item, i) => (
        <div
          key={item.title}
          id={`${idPrefix}-panel-${i}`}
          role="tabpanel"
          aria-labelledby={`${idPrefix}-${i}`}
          hidden={i !== active}
          className="tone-card rounded-2xl border p-6 sm:p-8 max-w-3xl mx-auto shadow-[0_10px_30px_-18px_rgba(15,23,42,0.55)]"
        >
          <h3 className="font-bold text-lg sm:text-xl mb-3">{item.title}</h3>
          <p className="text-sm sm:text-base tone-muted leading-relaxed">{item.body}</p>
          {item.extra}
        </div>
      ))}
    </div>
  )
}
