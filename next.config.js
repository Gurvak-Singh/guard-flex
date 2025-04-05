/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/security-app' : '',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
