const withCSS = require("@zeit/next-css")
const withSass = require('@zeit/next-sass')

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  }
}

module.exports = withCSS(
  withSass({
    /* config options here */
  })
)
