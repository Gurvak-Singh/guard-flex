/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'avatars.githubusercontent.com',
      'xsgames.co', // for placeholder avatars
      'supabase.co' // for Supabase storage
    ]
  }
}

module.exports = nextConfig
