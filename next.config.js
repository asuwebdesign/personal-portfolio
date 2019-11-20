const path = require('path')
const compose = require('next-compose')
const withSass = require('@zeit/next-sass')
const optimizedImages = require('next-optimized-images')
const withOffline = require('next-offline')

module.exports = compose([
  [withSass, {}],
  [optimizedImages, {
    defaultImageLoader: 'responsive-loader',
    responsive: {
      adapter: require('responsive-loader/sharp'),
      sizes: [320, 480, 640, 960, 1280, 1440, 1680, 1920],
      placeholder: true,
      placeholderSize: 50
    }
  }],
  [withOffline, {
    generateSw: false,
    workboxOpts: {
      swSrc: path.join(__dirname, 'service-worker.js'),
      importWorkboxFrom: 'local'
    }
  }],
])
