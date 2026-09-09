// Replaces the 723-line Contact form section that used to close the homepage.
//
// The form still exists in full on /contact - this only removes it from the
// homepage, where the market answers on WhatsApp rather than filling in fields.
// The link to /contact stays so the form is never more than one click away.
//
// Task 7.2/7.4 have since landed, so this now uses the shared .section-padding,
// .btn and .btn-whatsapp tokens rather than its own spacing.
import Link from 'next/link'
import { FaWhatsapp, FaPhoneAlt, FaRegEdit, FaStar } from 'react-icons/fa'
import ScrollReveal from '@/app/components/animations/ScrollReveal'

const PHONE = '+916283380110'
const WA_HREF =
  'https://wa.me/916283380110?text=' +
  encodeURIComponent('Hi EaseBuilds, I need a website for my business.')

export default function HomeCta() {
  return (
    <section className="section-padding bg-gradient-to-b from-blue-50 to-white" aria-labelledby="home-cta-heading">
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
                className="w-full sm:w-auto btn-whatsapp"
              >
                <FaWhatsapp className="w-5 h-5" />
                Message on WhatsApp
              </a>
              <a
                href={`tel:${PHONE}`}
                className="w-full sm:w-auto btn border-2 border-white/70 text-white hover:bg-white/10"
              >
                <FaPhoneAlt className="w-4 h-4" />
                Call +91 62833 80110
              </a>
            </div>

            {/* Task 7.6: proof sits AT the button, not in a section far above
                it - hesitation peaks here. Every figure repeats one already
                published on this page; do not add a number that is not. */}
            <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/90">
              <span className="inline-flex items-center gap-1.5">
                <span className="flex gap-0.5" aria-hidden="true">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-300 text-xs" />
                  ))}
                </span>
                <span className="font-semibold">5.0 on Google</span>
              </span>
              <span className="hidden sm:inline text-white/40" aria-hidden="true">|</span>
              <span>15 projects shipped</span>
              <span className="hidden sm:inline text-white/40" aria-hidden="true">|</span>
              <span>Live in 2-3 weeks</span>
            </div>

            <div className="mt-6 flex justify-center">
              <Link href="/contact" className="btn-ghost w-full sm:w-auto bg-white/10 text-white hover:bg-white/20">
                <FaRegEdit className="w-4 h-4" />
                Prefer to write it out? Use the contact form
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
