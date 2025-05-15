/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true
  },
  trailingSlash: true,
  compiler: {
    removeConsole: true
  },
  webpack: (config) => {
    config.cache = false;
    return config;
  }
}

module.exports = nextConfig
