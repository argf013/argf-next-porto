/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['infectionstudio.com'],
  },

  experimental: {
    optimizePackageImports: ['react', 'react-dom'],

    optimizeCss: true,
  },

  compiler: {
    removeConsole:
      process.env.NODE_ENV === 'production'
        ? {
            exclude: ['error', 'warn'],
          }
        : false,
  },
  poweredByHeader: false,
}

module.exports = nextConfig
