import { generateMetadata as genMeta } from '@/lib/seo'

export const metadata = genMeta({
  title: 'About Us - Our Story, Mission & Values',
  description: 'Learn about CodeNest and our mission to help businesses succeed online. Meet our team, discover our values, and see why 50+ clients trust us with their digital presence.',
  url: '/about',
  type: 'website',
})

export default function AboutLayout({ children }) {
  return children
}
