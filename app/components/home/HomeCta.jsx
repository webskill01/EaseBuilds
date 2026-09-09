// Replaces the 723-line Contact form section that used to close the homepage.
//
// The form still exists in full on /contact - this only removes it from the
// homepage, where the market answers on WhatsApp rather than filling in fields.
// The link to /contact stays so the form is never more than one click away.
//
// ponytail: a plain section, not a shared CTA primitive. Phase 7 extracts the
// button and section tokens sitewide; building the abstraction here would just
// freeze today's spacing as the standard before that decision is made.
import Link from 'next/link'
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa'
import ScrollReveal from '@/app/components/animations/ScrollReveal'

const PHONE = '+916283380110'
const WA_HREF =
  'https://wa.me/916283380110?text=' +
  encodeURIComponent('Hi EaseBuilds, I need a website for my business.')

export default function HomeCta() {
  return (
    <section className="py-10 bg-gradient-to-b from-gray-50 to-white" aria-labelledby="home-cta-heading">
      <div className="container-custom">
        <ScrollReveal direction="up">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-10 sm:px-10 sm:py-12 text-center shadow-xl">
            <h2 id="home-cta-heading" className="text-3xl sm:text-4xl font-bold text-white mb-3">
              Tell us what you need built
            </h2>
            <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto mb-8">
              Send a message and you will get a straight answer about scope, price and
              timeline — from the person who would build it, not a sales desk.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <a
                href={WA_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-lg bg-white text-blue-600 font-bold hover:bg-gray-100 transition-colors"
              >
                <FaWhatsapp className="w-5 h-5" />
                Message on WhatsApp
              </a>
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-lg border-2 border-white/70 text-white font-bold hover:bg-white/10 transition-colors"
              >
                <FaPhoneAlt className="w-4 h-4" />
                Call +91 62833 80110
              </a>
            </div>

            <p className="mt-6 text-sm text-white/80">
              Prefer to write it out?{' '}
              <Link href="/contact" className="underline font-semibold hover:text-white">
                Use the contact form
              </Link>
              .
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
