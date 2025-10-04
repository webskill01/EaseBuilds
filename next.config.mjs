/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year cache - HUGE SPEED BOOST
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  
  // Enable compression (Gzip/Brotli)
  compress: true,
  
  // Optimize production builds
  swcMinify: true, // Use SWC for faster minification (3x faster)
  
  // Remove trailing slashes for consistent URLs (FIXES MOBILE REDIRECT)
  trailingSlash: false,
  
  // Skip type checking during build (do it separately)
  typescript: {
    ignoreBuildErrors: false, // Set to true only if needed
  },
  
  // Skip ESLint during build (run separately)
  eslint: {
    ignoreDuringBuilds: false, // Set to true only if needed
  },
  
  
  // Remove X-Powered-By header
  poweredByHeader: false,
  
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          // DNS prefetch for faster external resource loading
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          // Force HTTPS
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          // Prevent clickjacking
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          // Prevent MIME sniffing
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          // Referrer policy
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          // Permissions policy
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          }
        ]
      },
      // Cache static assets aggressively (1 YEAR)
      {
        source: '/(.*)\\.(jpg|jpeg|png|gif|webp|avif|svg|ico)$',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      },
      // Cache fonts (1 YEAR)
      {
        source: '/fonts/(.*)',
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
      // Keep this empty to avoid redirect chains
    ]
  },
  
  experimental: {
    // Optimize CSS (removes unused styles)
    optimizeCss: true,
    
    // Optimize icon libraries (tree-shaking)
    optimizePackageImports: ['lucide-react', '@heroicons/react'],
  },
}

export default nextConfig
