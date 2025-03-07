/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Ensure proper transpilation of client components
  experimental: {
    serverComponentsExternalPackages: [],
  },
}

module.exports = nextConfig 