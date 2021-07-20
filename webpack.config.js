const { configure } = require('@volkswagen-onehub/oneaudi-os-build-scripts');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

/**
 * This config file expects arguments passed to the CLI
 *
 *    oneaudi-os-cli build --scope=modern
 *    oneaudi-os-cli build --scope=fh
 *    oneaudi-os-cli build --scope=demo
 *    oneaudi-os-cli build
 */

/**
 * This config is just for the development
 * You can access two main endpoints when developing:
 *  http://localhost:3000/          - module federation without feature hub (modern architecture)
 *  http://localhost:3000/demo.html - feature hub app with sample demo integrator
 */
const developmentConfig = (env, isProd) => {
  return {
    entry: {
      demo: path.join(__dirname, 'src/app/demo/index.tsx'),
      main: path.join(__dirname, 'src/index.tsx'),
    },
    output: {
      filename: '[name].js',
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src/index.html'),
        minify: isProd,
        chunks: ['demo'],
        filename: 'demo.html',
      }),
    ],
  };
};

/**
 * This config is used for production builds of the Feature Hub Feature App only
 */
const featureHubAppConfig = (env, isProd) => {
  return {
    entry: {
      main: path.join(__dirname, './src/app/FeatureHubAppDefinition.tsx'),
    },
    output: {
      filename: 'app.js',
      path: path.resolve(__dirname, './dist/app/fh'),
      libraryTarget: 'umd',
    },
    externals: {
      react: 'react',
      'styled-components': 'styled-components',
      '@feature-hub/react': '@feature-hub/react',
    },
  };
};

/**
 * This config builds the modern (federated) Feature App
 */
const modernFeatureAppConfig = (env, isProd) => {
  return {
    entry: {
      main: path.join(__dirname, './src/index.tsx'),
    },
  };
};

/**
 * Feature Hub demo integrator for production
 */
const productionHubDemoConfig = (env, isProd) => {
  return {
    entry: {
      main: path.join(__dirname, 'src/app/demo/index.tsx'),
    },
    output: {
      path: path.resolve(__dirname, './dist/app/demo'),
    },
  };
};

/**
 * Get the right config script based on arguments passed to the CLI
 */
function getCompiler() {
  const { argv } = yargs(hideBin(process.argv));

  switch (argv.scope) {
    case 'fh':
      return configure({ config: featureHubAppConfig, noFederation: true });
    case 'demo':
      return configure({ config: productionHubDemoConfig, noFederation: true });
    case 'modern':
      return configure({ config: modernFeatureAppConfig });
    default:
      return configure({ config: developmentConfig });
  }
}

module.exports = getCompiler();
