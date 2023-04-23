/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    GITHUB_ID: "6a9183d11ec0a5e68b09",
    GITHUB_SECRET: "dcfbf1bca3a0b5ae09b8f0826b38840356f8737d",
    NEXTAUTH_URL: "http://localhost:3000",
    JWT_SECRET: "TKyCiNJ1Jncffp5rLte41qcjKI25yu1YApEfEoinN88",
    GOOGLE_CLIENT_ID: "335110824891-ukoj7pm51l5meibrq4i5t1oajafgmt4n.apps.googleusercontent.com",
    GOOGLE_CLIENT_SECRET: "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"
  },
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3001',
        pathname: '/uploads/**',
      }
    ],
  },
}

const withTM = require('next-transpile-modules')([], { debug: true })

module.exports = withTM(nextConfig)
