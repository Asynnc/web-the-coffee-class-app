/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  experimental: {
    images: {
      unoptimized: true,
    },
    appDir: true,
  },
}

module.exports = nextConfig
