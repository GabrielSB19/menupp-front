const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  execTimeout: 1000,
  downloadsFolder: "cypress/downloads",
  pageLoadTimeout: 1000,
});
