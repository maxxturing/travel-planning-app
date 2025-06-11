/** @type {import('next').NextConfig} */
module.exports = {
  transpilePackages: ['@travel-planning/ui', '@travel-planning/app', '@travel-planning/config'],
  experimental: {
    externalDir: true,
  },
  webpack: (config, { isServer }) => {
    // Exclude React Native packages from web build
    if (!isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        'react-native$': 'react-native-web',
      }
    }
    
    config.resolve.extensions = ['.web.js', '.web.jsx', '.web.ts', '.web.tsx', ...config.resolve.extensions]
    
    return config
  },
}