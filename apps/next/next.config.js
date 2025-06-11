/** @type {import('next').NextConfig} */
const { withTamagui } = require('@tamagui/next-plugin')

module.exports = withTamagui({
  config: './tamagui.config.ts',
  components: ['@travel-planning/ui'],
  importsWhitelist: ['constants.js', 'colors.js'],
  outputCSS: process.env.NODE_ENV === 'production' ? './public/tamagui.css' : null,
  logTimings: true,
  disableExtraction: process.env.NODE_ENV === 'development',
})