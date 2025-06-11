/** @type {import('next').NextConfig} */
module.exports = {
  transpilePackages: ['@travel-planning/ui', '@travel-planning/app', '@travel-planning/config'],
  experimental: {
    externalDir: true,
  },
}