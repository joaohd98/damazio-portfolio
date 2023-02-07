const cypress = require('cypress');

module.exports = cypress.defineConfig({
  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack'
    },
    specPattern: 'src/**/*.cy.{js,jsx,ts,tsx}'
  },
  e2e: {
    setupNodeEvents() {
      // implement node event listeners here
    }
  }
});
