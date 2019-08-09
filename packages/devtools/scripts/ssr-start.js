#! /usr/bin/env node
/* eslint-disable no-console */
'use strict';

process.env.NODE_ENV = 'development';
const fs = require('fs-extra');
const webpack = require('webpack');
const paths = require('../config/paths');
const devServer = require('webpack-dev-server');
const printErrors = require('razzle-dev-utils/printErrors');
const logger = require('razzle-dev-utils/logger');
const setPorts = require('razzle-dev-utils/setPorts');

const configureWebpackClient = require('../webpack/client').configure;
const configureWebpackServer = require('../webpack/server').configure;

process.noDeprecation = true;

// Capture any --inspect or --inspect-brk flags (with optional values) so that we
// can pass them when we invoke nodejs
process.env.INSPECT_BRK = process.argv.find((arg) => arg.match(/--inspect-brk(=|$)/)) || '';
process.env.INSPECT = process.argv.find((arg) => arg.match(/--inspect(=|$)/)) || '';

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

function main() {
  fs.emptyDirSync(paths.appBuild);

  logger.start('Compiling...');

  fs.removeSync(paths.appManifest);

  const globalBuildConfig = require(paths.jsBuildConfigPath);

  const localBuildConfig = fs.existsSync(paths.localBuildConfig) ? require(paths.localBuildConfig) : {};

  const buildConfig = { ...globalBuildConfig, ...localBuildConfig };

  const clientConfig = !!buildConfig.client && configureWebpackClient(buildConfig.client);
  const serverConfig = !!buildConfig.server && configureWebpackServer(buildConfig.server);

  const clientCompiler = compile(clientConfig);
  const serverCompiler = compile(serverConfig);

  clientCompiler.plugin('done', () => {
    serverCompiler.watch(
      {
        quiet: true,
        stats: 'none'
      },
      /* eslint-disable no-unused-vars */
      () => {}
    );
  });

  /**
   * Create a new instance of Webpack-dev-server for assets only
   * This will actually run on a different port than the main app.
   */
  const clientDevServer = new devServer(clientCompiler, clientConfig.devServer);

  clientDevServer.listen((process.env.PORT && Number(process.env.PORT) + 1) || razzle.port || 3001, (err) => {
    if (err) {
      console.log('fuckkk');
      logger.error(err);
    }
  });
}

setPorts()
  .then(main)
  .catch(console.error);
