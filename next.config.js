/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.dribbble.com',
      }
    ],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ['@svgr/webpack'],
    });
    return config;
  },
}

module.exports = nextConfig


// const nextConfig = {
//   experimental: {
//     appDir: false,
//   },
//   images: {
//     minimumCacheTTL: 60,
//     domains: [
//       'cdn.dribbble.com',
//       'raw.githubusercontent.com',
//       'images.unsplash.com'
//     ]
//   },
//   webpack: (config, options) => {
//     config.module.rules.push({
//       test: /\.svg$/,
//       use: ['@svgr/webpack'],
//     })
//     return config
//   }
// }

// module.exports = nextConfig