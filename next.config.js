const compose = require('next-compose')
const withSass = require('@zeit/next-sass')
const optimizedImages = require('next-optimized-images')

module.exports = compose([
  [withSass, {
    /* config options */
  }],
  [optimizedImages, {
    optimizeImagesInDev: true,
  }],
  {
    webpack(config, { buildId, dev, isServer, defaultLoaders }) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      })

      return config
    }
  }
])
