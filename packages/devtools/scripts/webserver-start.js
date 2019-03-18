#! /usr/bin/env node
'use strict';

process.env.NODE_ENV = 'development';
const fs = require('fs-extra');
const webpack = require('webpack');
const paths = require('../config/paths');
const devServer = require('webpack-dev-server-speedy');
const printErrors = require('razzle-dev-utils/printErrors');
const clearConsole = require('react-dev-utils/clearConsole');
const logger = require('razzle-dev-utils/logger');
const setPorts = require('razzle-dev-utils/setPorts');

const configureWebpackClient = require('../webpack/client').configure;
const configureWebpackServer = require('../webpack/server').configure;
const path = require('path');

process.noDeprecation = true; // turns off that loadQuery clutter.

if (process.argv.includes('--inspect-brk')) {
  process.env.INSPECT_BRK_ENABLED = true;
} else if (process.argv.includes('--inspect')) {
  process.env.INSPECT_ENABLED = true;
}

const HOST = process.env.HOST || '0.0.0.0';

function main() {
  logger.start('Compiling...');

  let c2 = require(paths.jsBuildConfigPath);

  // Delete assets.json to always have a manifest up to date
  fs.removeSync(paths.appManifest);

  // Create dev configs using our config factory, passing in razzle file as
  // options.
  let clientConfig = configureWebpackClient(c2.client);
  let serverConfig = configureWebpackServer(c2.server);

  // Compile our assets with webpack
  const clientCompiler = compile(clientConfig);
  const serverCompiler = compile(serverConfig);

  // Start our server webpack instance in watch mode after assets compile
  clientCompiler.plugin('done', () => {
    serverCompiler.watch(
      {
        quiet: true,
        stats: 'none'
      },
      /* eslint-disable no-unused-vars */
      (stats) => {}
    );
  });

  // Create a new instance of Webpack-dev-server for our client assets.
  // This will actually run on a different port than the users app.
  const clientDevServer = new devServer(clientCompiler, configureWebpackClient(c2.devServer).devServer);

  const port = (process.env.PORT && parseInt(process.env.PORT) + 1) || c2.port || 3001;

  // Start Webpack-dev-server
  clientDevServer.listen(port, HOST, (err) => {
    console.dir(err);
    if (err) {
      logger.error(err);
    }
  });
}

// Webpack compile in a try-catch
function compile(config) {
  let compiler;
  try {
    compiler = webpack(config);
  } catch (e) {
    printErrors('Failed to compile.', [e]);
    process.exit(1);
  }
  return compiler;
}

setPorts()
  .then(main)
  .catch(console.error);
