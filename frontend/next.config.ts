
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    // ajuste para App Router se estiver usando (Next 13+)
    appDir: true
  },
  images: {
    // adicione domínios que usa com next/image
    domains: ['images.unsplash.com']
  }
};

module.exports = nextConfig;