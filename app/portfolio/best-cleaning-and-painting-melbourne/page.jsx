import Image from 'next/image'
import Link from 'next/link'
import JsonLd from '../../components/JsonLd'

// Australia-facing case study, 2026-09-30. A deliberate one-page test: Google
// Trends shows "web developer india" interest highest in Australia (SEO.md,
// Round 8). The WhatsApp prefill below tags enquiries that came from this page,
// which is how the test gets measured. Every claim is from the bestcd-web repo,
// a PageSpeed run, or the client's own Search Console export (29 Jun - 27 Sep
// 2026, gsc_reports/bestcd, kept local) - the client approved publishing those
// on 2026-09-30. The quote is the wording the client approved ("I have no
// issues, you can put this on the website") - do not edit it. No AUD price.
// Never add a figure that is not in those sources.

const URL = 'https://easebuilds.in/portfolio/best-cleaning-and-painting-melbourne'
const TITLE = 'Web Developer in India for a Melbourne Business | EaseBuilds'
const DESCRIPTION =
  'How a Melbourne cleaning and painting company had its website built from India: the brief, working across time zones, and the measured PageSpeed results.'
const WHATSAPP =
  'https://wa.me/916283380110?text=' +
  encodeURIComponent("Hi EaseBuilds, I'm in Australia and read the Melbourne case study.")

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    siteName: 'EaseBuilds',
    title: TITLE,
    description: DESCRIPTION,
    type: 'article',
    locale: 'en_AU',
    url: URL,
    images: [{ url: 'https://easebuilds.in/images/bestcleaning.webp', alt: 'Best Cleaning & Painting website' }],
  },
  alternates: { canonical: URL },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'A Melbourne cleaning and painting website, built from India',
  description: DESCRIPTION,
  datePublished: '2026-09-30',
  dateModified: '2026-09-30',
  image: 'https://easebuilds.in/images/bestcleaning.webp',
  url: URL,
  author: { '@type': 'Person', name: 'Nitin', url: 'https://easebuilds.in/about' },
  publisher: { '@type': 'Organization', name: 'EaseBuilds', url: 'https://easebuilds.in' },
  about: { '@type': 'WebSite', name: 'Best Cleaning & Painting Services', url: 'https://bestcleaningandpainting.services' },
}

const timeline = [
  ['Sample homepage first', 'Before any full build, the homepage went over as a sample. The client saw real work before committing to the rest.'],
  ['Redesign on feedback', 'The first version felt plain to them and the colours weak. The homepage was reworked with more interaction and a stronger palette the same day.'],
  ['Their preferences, not ours', 'The code was converted from TypeScript to JavaScript because the client asked. "Professional" came out of the branding for "Best", at their direction.'],
  ['Rebrand mid-project', 'When a new logo arrived, the whole site moved from navy and blue to black and gold to match it.'],
]

const built = [
  ['11 services, one page each in the flow', 'House, end of lease and commercial cleaning, interior and exterior painting, pressure washing, steam carpet cleaning and more.'],
  ['Quote requests straight to WhatsApp', 'No backend and no inbox to check. The quote form builds a WhatsApp message, so the enquiry lands on the owner\'s phone with the service already filled in.'],
  ['Photos the client can swap themselves', 'Every image has a fixed filename. Dropping a real job photo in under that name replaces the placeholder, no developer needed.'],
  ['Before-and-after gallery', 'Six before/after pairs, with the first four on the homepage.'],
  ['Local search basics', 'Per-page titles and descriptions, LocalBusiness structured data, sitemap and robots, and Vercel Analytics for real traffic numbers.'],
]

// Client's Search Console, first three months live (29 Jun - 27 Sep 2026)
const searchResults = [
  ['541', 'Appearances in Google search'],
  ['92%', 'Of them in Australia'],
  ['3.6', 'Average position'],
  ['Top 2', 'For "mattress cleaning melbourne"'],
]

const rankings = [
  ['mattress cleaning near me', '1.0'],
  ['mattress cleaning melbourne', '1.4'],
  ['site cleaning services beveridge', '1.7'],
]

const scores = [
  ['91', 'Performance'],
  ['100', 'SEO'],
  ['88', 'Accessibility'],
  ['0', 'Layout shift (CLS)'],
]

export default function MelbourneCaseStudy() {
  return (
    <>
      <JsonLd data={articleSchema} />

      <section className="section-padding bg-gradient-to-br from-slate-50 to-blue-50/30">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm font-semibold text-blue-600 mb-3">Case study · Melbourne, Australia</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              A Melbourne cleaning and painting website, built from India
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Best Cleaning &amp; Painting Services wanted a website where every page pushes a visitor
              to call or ask for a free quote. It was designed, built and delivered from Patiala,
              India, over WhatsApp and email. This is how that went, including the parts that
              changed along the way.
            </p>
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-lg bg-gray-100">
              <Image
                src="/images/bestcleaning.webp"
                alt="Best Cleaning & Painting Services website homepage"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 896px"
              />
            </div>
            <p className="mt-4 text-sm text-gray-600">
              Live at{' '}
              <a href="https://bestcleaningandpainting.services" target="_blank" rel="noopener noreferrer" className="underline font-semibold">
                bestcleaningandpainting.services
              </a>
              . Open it on your phone and judge it yourself.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-14">
            <figure className="border-l-4 border-blue-600 bg-blue-50 rounded-r-2xl p-6 sm:p-8">
              <blockquote className="text-xl sm:text-2xl font-medium text-gray-900 leading-relaxed">
                &ldquo;We found EaseBuilds on Google. They showed us a sample homepage before the full
                build, made every change we asked for, and the site now shows up at the top of Google
                for mattress cleaning in Melbourne.&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-gray-600">
                Best Cleaning &amp; Painting Services, Melbourne
              </figcaption>
            </figure>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">The brief</h2>
              <p className="text-gray-700 mb-3">
                The client found EaseBuilds through a Google search. The brief: five pages (Home,
                Services, Gallery, About and Contact), a premium look, fast on mobile, and a free-quote
                request that takes as little effort as possible. They would supply their own job
                photos as the build went on. Work started on 9 June 2026.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">First three months in Google</h2>
              <p className="text-gray-700 mb-6">
                From the client&apos;s own Google Search Console, 29 June to 27 September 2026 - the
                site&apos;s first three months live.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                {searchResults.map(([value, label]) => (
                  <div key={label} className="text-center bg-blue-50 rounded-xl p-5">
                    <div className="text-3xl font-bold text-blue-700">{value}</div>
                    <div className="text-sm text-gray-600">{label}</div>
                  </div>
                ))}
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm border border-gray-200 rounded-lg">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left px-4 py-2 border-b">Search</th>
                      <th className="text-right px-4 py-2 border-b">Average position</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rankings.map(([query, pos]) => (
                      <tr key={query}>
                        <td className="px-4 py-2 border-b">{query}</td>
                        <td className="px-4 py-2 border-b text-right font-semibold">{pos}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-sm text-gray-600">
                A new domain, three months old. These are the searches where the site already shows at
                the top of Google, not a promise about yours.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">How the project ran</h2>
              <ol className="space-y-4">
                {timeline.map(([title, text], i) => (
                  <li key={title} className="flex gap-4">
                    <span className="flex-none w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center">{i + 1}</span>
                    <div>
                      <h3 className="font-bold text-gray-900">{title}</h3>
                      <p className="text-gray-700">{text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">What was built</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {built.map(([title, text]) => (
                  <div key={title} className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                    <p className="text-sm text-gray-700">{text}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-gray-600">Built with Next.js, React, Tailwind CSS and Framer Motion, hosted on Vercel.</p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Measured, not claimed</h2>
              <p className="text-gray-700 mb-6">Google PageSpeed Insights, mobile, run on 30 September 2026.</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {scores.map(([value, label]) => (
                  <div key={label} className="text-center bg-slate-50 rounded-xl p-5">
                    <div className="text-3xl font-bold text-gray-900">{value}</div>
                    <div className="text-sm text-gray-600">{label}</div>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-gray-600">
                Accessibility sits at 88, just under the 90 we aimed for. That one is on the list, not
                hidden.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Working with a developer in India, from Australia</h2>
              <ul className="space-y-3 text-gray-700 list-disc pl-5">
                <li>
                  <strong>Time zones:</strong> Patiala is 4.5 hours behind Melbourne (5.5 during daylight
                  saving), so Melbourne afternoons overlap the working day in Patiala.
                </li>
                <li>
                  <strong>Everything in writing:</strong> briefs, feedback and approvals ran over WhatsApp
                  and email, so every decision can be pointed back to.
                </li>
                <li>
                  <strong>You see work early:</strong> a sample homepage came before the full build, so
                  the client judged real work, not a mock-up.
                </li>
                <li>
                  <strong>You talk to the person building it:</strong> EaseBuilds is one developer, not an
                  account manager passing notes to a team.
                </li>
              </ul>
            </div>

            <div className="bg-gray-900 text-white rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-3">Running a business in Australia?</h2>
              <p className="text-gray-300 mb-6">Tell me what you need. You will get a straight answer on whether I am the right fit.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-lg">
                  Message on WhatsApp
                </a>
                <Link href="/portfolio" className="inline-block bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-3 rounded-lg">
                  See the rest of the work
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
