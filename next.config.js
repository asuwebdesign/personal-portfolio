const compose = require('next-compose')
const withSass = require('@zeit/next-sass')
const optimizedImages = require('next-optimized-images')

module.exports = compose([
  [withSass, {}],
  [optimizedImages, {
    defaultImageLoader: 'responsive-loader',
    optimizeImagesInDev: true,
  }],
])
