const path = require('path')
const compose = require('next-compose')
const optimizedImages = require('next-optimized-images')

module.exports = compose([
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
    future: {
      webpack5: true,
    },
    test: /\.svg$/,
    use: ['@svgr/webpack'],
    sassOptions: {
      includePaths: [path.join(__dirname, 'styles')],
    }
  }
])
