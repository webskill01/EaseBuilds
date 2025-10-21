/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 90, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  compress: true,
  trailingSlash: false,
  
  typescript: {
    ignoreBuildErrors: false,
  },
  
  eslint: {
    ignoreDuringBuilds: false,
  },
  
  poweredByHeader: false,
  
  // ✅ ADD: Generate ETags for better caching
  generateEtags: true,
  
  // ✅ ADD: Production source maps (for error tracking)
  productionBrowserSourceMaps: false, // Set to true if using Sentry
  
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          },
          // ✅ ADD: Additional security header
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          }
        ]
      },
      // Cache static assets (1 YEAR)
      {
        source: '/:path*\\.(jpg|jpeg|png|gif|webp|avif|svg|ico|woff|woff2)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      },
      // ✅ ADD: Cache CSS/JS files
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      },
      // Cache fonts
      {
        source: '/fonts/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      }
    ]
  },
  
  async redirects() {
    return [
      // ✅ ADD: Common redirects
      // {
      //   source: '/old-blog/:slug',
      //   destination: '/blog/:slug',
      //   permanent: true,
      // },
    ]
  },
  
  experimental: {
    // ✅ ADD: Additional optimizations
    optimizePackageImports: [
      'lucide-react', 
      '@heroicons/react',
      'react-icons', // ✅ ADD: Optimize react-icons
      'framer-motion', // ✅ ADD: Optimize framer-motion
    ],
    
    // ✅ ADD: Server actions (if using)
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
  
  // ✅ ADD: Webpack customization (if needed)
  webpack: (config, { isServer }) => {
    // Optimize bundle size
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      }
    }
    return config
  },
}

export default nextConfig
