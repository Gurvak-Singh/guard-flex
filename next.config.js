/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    domains: ['avatars.githubusercontent.com'],
    unoptimized: true,
  },
  // Add basePath and assetPrefix for GitHub Pages deployment
  // The following lines can be uncommented and modified with your repo name when deploying
  // basePath: process.env.NODE_ENV === 'production' ? '/security-app' : '',
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/security-app/' : '',
}

module.exports = nextConfig
