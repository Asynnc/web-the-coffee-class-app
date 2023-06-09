/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  env: {
    NEXT_PUBLIC_API_ENDPOINT_PRODUCTION: "https://api.the-coffee-class.com.br/api",
  },
  images: {
    minimumCacheTTL: 60,
    domains: ['https://imgur.com/', 'https://api.the-coffee-class.com.br', 'the-coffee-class.s3.amazonaws.com'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3001',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'the-coffee-class.s3.amazonaws.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'api.the-coffee-class.com.br',
        port: '',
        pathname: '/**',
      }
    ],
  },
}

// const withTM = require('next-transpile-modules')([], { debug: true })
const withNextIntl = require('next-intl/plugin')(
  './src/i18n.ts'
);
module.exports = withNextIntl(nextConfig)
