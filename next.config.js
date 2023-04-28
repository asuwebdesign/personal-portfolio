const nextConfig = {
  experimental: {
    appDir: false,
  },
  images: {
    minimumCacheTTL: 60,
    domains: ['cdn.dribbble.com', 'raw.githubusercontent.com']
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    return config
  }
}

module.exports = nextConfig