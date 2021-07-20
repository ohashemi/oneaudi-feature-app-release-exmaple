/// <reference types="cypress" />
const webpack = require('cypress-webpack-preprocessor-v5');

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 * @param on is used to hook into various events Cypress emits
 * @param config is the resolved Cypress config
 */
module.exports = (on, config) => {
  const options = {
    webpackOptions: require('../webpack.config.js'),
  };
  on('file:preprocessor', webpack(options));
};
