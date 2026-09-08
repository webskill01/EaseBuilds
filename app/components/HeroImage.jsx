import Image from 'next/image'
import { blurData } from '@/lib/blurData'

// ponytail: no useState, no onLoad, no fade.
//
// The old version rendered the LCP image at opacity-0 behind an animate-pulse
// skeleton until a client-side onLoad fired. Two measured consequences: LCP
// could not complete until hydration finished (6.5s on /services/seo-services),
// and the skeleton->image swap scored CLS 1.0 on the same page.
//
// The blur placeholder replaces that fade. It is a ~150-byte base64 webp inlined
// in the HTML, so it paints with the text instead of after it — which is what
// stops the hero appearing a beat behind the content. Unlike the old skeleton it
// costs no request and no JS, so it cannot delay LCP.
export default function HeroImage({ src, alt }) {
  const blur = blurData[src]

  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority
      quality={80}
      sizes="100vw"
      className="object-cover"
      {...(blur ? { placeholder: 'blur', blurDataURL: blur } : {})}
    />
  )
}
