const compose = require('next-compose')
const withSass = require('@zeit/next-sass')
const optimizedImages = require('next-optimized-images')

module.exports = compose([
  [withSass, {}],
  [optimizedImages, {
    defaultImageLoader: 'responsive-loader',
    optimizeImagesInDev: true,
    responsive: {
      sizes: [300, 600, 1200, 1920],
      placeholder: true,
      placeholderSize: 50
    }
  }],
])
