const compose = require('next-compose')
const withSass = require('@zeit/next-sass')
const optimizedImages = require('next-optimized-images')
const withOffline = require('next-offline')

const nextConfig = compose([
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
  {
    workboxOpts: {
      swDest: 'static/service-worker.js',
      runtimeCaching: [
        {
          urlPattern: /^https?.*/,
          handler: 'NetworkFirst',
          options: {
            cacheName: 'https-calls',
            networkTimeoutSeconds: 15,
            expiration: {
              maxEntries: 150,
              maxAgeSeconds: 30 * 24 * 60 * 60, // 1 month
            },
            cacheableResponse: {
              statuses: [0, 200],
            },
          },
        },
      ],
    },
  },
])

module.exports = withOffline(nextConfig)
