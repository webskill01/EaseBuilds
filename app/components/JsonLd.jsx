// Renders JSON-LD into the server-rendered HTML.
//
// ponytail: a plain <script>, not next/script. next/script defers injection to
// the client (afterInteractive) or the flight payload (beforeInteractive), so
// the structured data never appeared in the served HTML — see Next.js docs,
// which tell you to use a raw script tag for JSON-LD.
export default function JsonLd({ id, data }) {
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
