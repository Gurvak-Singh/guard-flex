/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'avatars.githubusercontent.com',
      'xsgames.co', // for placeholder avatars
      'supabase.co' // for Supabase storage
    ]
  },
  webpack: (config, { dev, isServer }) => {
    // Production optimizations
    if (!dev) {
      config.optimization = {
        ...config.optimization,
        minimize: true,
        splitChunks: {
          chunks: 'all',
          minSize: 20000,
          maxSize: 24000000, // Keep chunks under 24MB to stay within GitHub's limit
          cacheGroups: {
            default: false,
            vendors: false,
            commons: {
              name: 'commons',
              chunks: 'all',
              minChunks: 2,
              reuseExistingChunk: true
            },
            lib: {
              test: /[\\/]node_modules[\\/]/,
              name(module) {
                const packageName = module.context.match(/[\\/]node_modules[\\/]([^@\\/]+)/)?.[1] || '';
                return `npm.${packageName.replace(/[\/@]/g, '_')}`;
              },
              priority: 20,
              minChunks: 1,
              reuseExistingChunk: true
            }
          }
        }
      };
    }
    return config;
  }
}

module.exports = nextConfig
