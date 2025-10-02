import { generateMetadata as genMeta } from '@/lib/seo'

export const metadata = genMeta({
  title: 'Pricing & Plans - Website Development Packages',
  description: 'Choose from our transparent website development packages. Basic (₹7,457), Standard (₹11,185), or Premium (₹16,777). Fast delivery, money-back guarantee.',
  url: '/pricing',
  type: 'website',
})

export default function PricingLayout({ children }) {
  return children
}
