/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en-US', 'pt-BR'],
    defaultLocale: 'en-US'
  },
  reactStrictMode: false,
  compiler: {
    styledComponents: true
  }
};

module.exports = nextConfig;
