/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.githubusercontent.com'
      },
      {
        protocol: 'https',
        hostname: 'xsgames.co'
      },
      {
        protocol: 'https',
        hostname: '*.supabase.co'
      }
    ]
  },
  trailingSlash: true,
  reactStrictMode: true,
  swcMinify: true
}

module.exports = nextConfig
