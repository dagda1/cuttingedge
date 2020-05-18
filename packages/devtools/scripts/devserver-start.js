#! /usr/bin/env node
'use strict';

process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

process.on('unhandledRejection', (err) => {
  throw err;
});

require('../config/env').getClientEnv();

const configureWebpackClient = require('../webpack/client').configure;
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const clearConsole = require('react-dev-utils/clearConsole');
const checkRequiredFiles = require('react-dev-utils/checkRequiredFiles');
const { choosePort, createCompiler, prepareProxy, prepareUrls } = require('react-dev-utils/WebpackDevServerUtils');
const openBrowser = require('react-dev-utils/openBrowser');
const paths = require('../config/paths');
const path = require('path');
const fs = require('fs');
const logger = require('../scripts/logger');

const isInteractive = process.stdout.isTTY;

const devServerConfig = require(paths.jsBuildConfigPath).devServer;

if (!fs.existsSync(devServerConfig.publicDir)) {
  devServerConfig.publicDir = paths.devDirPublic;
  devServerConfig.entries = paths.devDir;
}

const config = configureWebpackClient(devServerConfig);

// Warn and crash if required files are missing
if (!checkRequiredFiles([path.join(devServerConfig.publicDir, 'index.html'), devServerConfig.entries])) {
  process.exit(1);
}

const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 3000;
const HOST = process.env.HOST || '0.0.0.0';

choosePort(HOST, DEFAULT_PORT)
  .then((port) => {
    if (port === null) {
      logger.error('We have not found a port.');
      return;
    }
    const protocol = process.env.HTTPS === 'true' ? 'https' : 'http';
    const appName = require(paths.appPackageJson).name;
    const urls = prepareUrls(protocol, HOST, port);
    const useYarn = true;

    const compiler = createCompiler({ webpack, config, appName, urls, useYarn });

    const proxySetting = require(paths.appPackageJson).proxy;

    config.devServer.proxy = prepareProxy(proxySetting, paths.appPublic);

    const devServer = new WebpackDevServer(compiler, config.devServer);

    devServer.listen(port, HOST, (err) => {
      if (err) {
        logger.error(err);
        return;
      }
      if (isInteractive) {
        clearConsole();
      }
      logger.info('Starting the development server...\n');
      openBrowser(urls.localUrlForBrowser);
    });

    ['SIGINT', 'SIGTERM'].forEach(function (sig) {
      process.on(sig, function () {
        devServer.close();
        process.exit();
      });
    });
  })
  .catch((err) => {
    if (err && err.message) {
      logger.error(err.message);
    }
    process.exit(1);
  });
