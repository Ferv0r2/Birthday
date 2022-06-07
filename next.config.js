/** @type {import('next').NextConfig} */

const isProd = (process.env.NODE_ENV || 'production') === 'production';
const assetPrefix = isProd ? 'https://kojiyoung.shop' : '';

module.exports = {
  assetPrefix: assetPrefix,
  images: {
    loader: 'akamai',
    path: '',
  },
  eslint: {
    dirs: ['src'],
  },

  reactStrictMode: true,

  // Uncoment to add domain whitelist
  // images: {
  //   domains: [
  //     'res.cloudinary.com',
  //   ],
  // },

  // SVGR
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            typescript: true,
            icon: true,
          },
        },
      ],
    });

    return config;
  },
};
