module.exports = {
  debug: process.env.NODE_ENV === 'development',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt-br'],
  },
  reloadOnPrerender: process.env.NODE_ENV === 'development',
  strict: true,
};
