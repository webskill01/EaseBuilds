import Link from 'next/link'
import { FaWhatsapp, FaCheck, FaPhoneAlt } from 'react-icons/fa'
import EaseBotDemo from './EaseBotDemo'
import QuoteForm from './QuoteForm'
import { FEATURES, VERTICALS, FAQS, PRICE, WHATSAPP } from './data'

// ponytail: server component. Only the demo and the qualifier are client
// islands - this page deliberately does not import framer-motion, which is the
// 166 KiB of unused JS logged as deferred debt in PHASES.md Phase 2.

const HOW = [
  ['Someone enquires', 'Your staff types their name and number into your team group - Rahul 9876543210. That is it.'],
  ['EaseBot saves it', "Checks if they have enquired before, saves them to your list, and shows your buttons."],
  ['Tap one button', 'WhatsApp opens with the full message already written and addressed to them. Your staff just hits send.'],
]

function Section({ eyebrow, title, lede, children, className = '' }) {
  return (
    <section className={`px-5 py-14 sm:py-16 ${className}`}>
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          {eyebrow && (
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-primary-600">
              {eyebrow}
            </p>
          )}
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{title}</h2>
          {lede && <p className="mt-4 text-lg text-gray-600">{lede}</p>}
        </div>
        {children}
      </div>
    </section>
  )
}

export default function LeadManagementPage() {
  const waHref = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
    'Hi EaseBuilds, I would like a price for EaseBot.'
  )}`

  return (
    <article>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="px-5 pb-12 pt-14 text-center sm:pt-16">
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.12em] text-primary-600">
            EaseBot &middot; Lead management
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl">
            Lead management for small businesses,{' '}
            <span className="text-primary-600">run from your phone.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-gray-600">
            Every enquiry recorded, every follow-up remembered. Your staff types a name and number
            into Telegram &mdash; EaseBot saves it, writes the WhatsApp message, and reminds you to
            follow up.
          </p>
          <div className="mt-8">
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl bg-primary-600 px-7 font-semibold text-white transition hover:bg-primary-700"
            >
              <FaWhatsapp aria-hidden="true" className="h-5 w-5" /> Get my price
            </a>
            <span className="mt-3 block text-sm text-gray-500">
              Takes 30 seconds. No call unless you want one.
            </span>
          </div>
        </div>
      </section>

      {/* ── Problem ──────────────────────────────────────── */}
      <Section
        eyebrow="The problem"
        title="Your staff writes it on a pad. Then everyone forgets."
        lede="Enquiries arrive all day — a walk-in, a phone call, a DM. They get scribbled somewhere, and by evening nobody remembers who still needs calling back. You already paid to get those enquiries."
        className="bg-gray-50"
      />

      {/* ── Demo ─────────────────────────────────────────── */}
      <Section
        eyebrow="See it working"
        title="Try it yourself"
        lede="Pick your kind of business, then tap any button. This is exactly what your staff sees."
      >
        <div className="mt-10">
          <EaseBotDemo />
        </div>
      </Section>

      {/* ── How it works ─────────────────────────────────── */}
      <Section
        eyebrow="How it works"
        title="Here's exactly what happens"
        lede="Three steps. Your staff learns it in one try."
        className="bg-gray-50"
      >
        <ol className="mt-10 grid gap-6 sm:grid-cols-3">
          {HOW.map(([title, body], i) => (
            <li key={title} className="rounded-2xl border-2 border-gray-200 bg-white p-6">
              <span className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-primary-600 font-bold text-white">
                {i + 1}
              </span>
              <h3 className="mb-2 font-bold text-gray-900">{title}</h3>
              <p className="text-sm leading-relaxed text-gray-600">{body}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* ── Why it works ─────────────────────────────────── */}
      <Section eyebrow="Why it works" title="Your staff will actually use it">
        <div className="mx-auto mt-10 max-w-2xl space-y-4 text-gray-600">
          <p>
            Most business software fails for one reason &mdash; nobody opens it. EaseBot runs inside
            Telegram, a free app your team probably already has. Nothing to install to get started,
            no training.
          </p>
          <p>
            Add someone to the group and they can use it. Remove them and access is gone. That is the
            whole system.
          </p>
          <p className="font-semibold text-gray-900">
            Messages go from your own WhatsApp, sent by your own staff. Your customers just see you,
            not a broadcast.
          </p>
        </div>
      </Section>

      {/* ── The app ──────────────────────────────────────── */}
      <Section
        eyebrow="Same customers, two ways in"
        title="And a proper app, at your own web address"
        lede="Some people live in the group chat. Others want to see the whole list. You get both, and they are the same thing — a customer added in the group is on the app the same second."
        className="bg-gray-50"
      >
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border-2 border-gray-200 bg-white p-6">
            <h3 className="mb-2 font-bold text-gray-900">yourname.easebuilds.in</h3>
            <p className="text-sm leading-relaxed text-gray-600">
              Your name, your colours, your logo. Open it once in Chrome, tap add to home screen, and
              it sits on the phone like any other app. Add a customer, search the list, work through
              who is still waiting, open a ready WhatsApp message, read your numbers.
            </p>
          </div>
          <div className="rounded-2xl border-2 border-gray-200 bg-white p-6">
            <h3 className="mb-2 font-bold text-gray-900">It taps you on the shoulder</h3>
            <p className="text-sm leading-relaxed text-gray-600">
              A membership coming up for renewal, a package about to run out &mdash; the phone buzzes
              that morning, even with the app closed. And there is a Today screen listing everything
              due, so a missed notification is never a missed renewal.
            </p>
          </div>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-sm text-gray-500">
          One price covers all of it. The app is not a bigger plan &mdash; it is the same product, on
          a different screen.
        </p>
      </Section>

      {/* ── Features ─────────────────────────────────────── */}
      <Section eyebrow="What you get" title="Everything it does">
        <ul className="mt-10 grid gap-x-8 gap-y-5 sm:grid-cols-2">
          {FEATURES.map(([title, body]) => (
            <li key={title} className="flex gap-3">
              <FaCheck aria-hidden="true" className="mt-1 h-4 w-4 flex-none text-success-600" />
              <div>
                <b className="block text-gray-900">{title}</b>
                <span className="text-sm text-gray-600">{body}</span>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      {/* ── Verticals ────────────────────────────────────── */}
      <Section
        eyebrow="Who it's for"
        title="Works for businesses like yours"
        lede="Set up around how you actually work — your buttons, your messages, your follow-ups."
        className="bg-gray-50"
      >
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {VERTICALS.map(([name, what]) => (
            <li key={name} className="rounded-xl border-2 border-gray-200 bg-white p-4">
              <b className="block text-sm text-gray-900">{name}</b>
              <span className="text-sm text-gray-600">{what}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* ── Pricing ──────────────────────────────────────── */}
      <Section
        eyebrow="Pricing"
        title="One price for your whole team"
        lede="Most systems charge you for every single person who uses them. A team of five ends up paying five times over, every month. We don't work like that."
      >
        <div className="mx-auto mt-10 max-w-md rounded-2xl border-2 border-primary-200 bg-primary-50 p-8 text-center">
          <p className="text-4xl font-bold text-gray-900">
            &#8377;{PRICE.monthly.toLocaleString('en-IN')}
            <span className="text-base font-medium text-gray-500"> / month</span>
          </p>
          <p className="mt-2 text-sm text-gray-600">
            Everyone included. Never per person, however big your team gets.
          </p>
          <ul className="mt-6 space-y-2 text-left text-sm text-gray-700">
            {[
              'Running in 30 minutes — we write your messages and set up your team',
              `Setup ${'₹'}${PRICE.setup.toLocaleString('en-IN')} one time, free if you pay yearly`,
              "No contract. If it isn't saving you time, stop.",
            ].map((line) => (
              <li key={line} className="flex gap-2">
                <FaCheck aria-hidden="true" className="mt-1 h-3.5 w-3.5 flex-none text-success-600" />
                <span>{line}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-xs text-gray-500">{PRICE.note}</p>
        </div>
      </Section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <Section title="Things people ask" className="bg-gray-50">
        <div className="mx-auto mt-10 max-w-2xl space-y-4">
          {FAQS.map((faq) => (
            <details key={faq.question} className="rounded-xl border-2 border-gray-200 bg-white p-5">
              <summary className="cursor-pointer font-bold text-gray-900 marker:text-primary-600">
                {faq.question}
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </Section>

      {/* ── Quote ────────────────────────────────────────── */}
      <Section
        eyebrow="Get your quote"
        title="Five quick questions"
        lede="Answer these and we'll open WhatsApp with everything filled in. You just hit send."
      >
        <div className="mt-10">
          <QuoteForm />
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[48px] items-center gap-2 rounded-xl bg-green-600 px-6 font-semibold text-white transition hover:bg-green-700"
          >
            <FaWhatsapp aria-hidden="true" className="h-4 w-4" /> WhatsApp us
          </a>
          <a
            href="tel:+916283380110"
            className="inline-flex min-h-[48px] items-center gap-2 rounded-xl border-2 border-gray-200 px-6 font-semibold text-gray-700 transition hover:bg-gray-50"
          >
            <FaPhoneAlt aria-hidden="true" className="h-3.5 w-3.5" /> Call now
          </a>
          <Link
            href="/pricing"
            className="inline-flex min-h-[48px] items-center rounded-xl border-2 border-gray-200 px-6 font-semibold text-gray-700 transition hover:bg-gray-50"
          >
            See all pricing
          </Link>
        </div>
      </Section>
    </article>
  )
}
