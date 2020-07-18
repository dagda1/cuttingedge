process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

process.on('unhandledRejection', (err) => {
  throw err;
});

require('../config/env').getClientEnv();

import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import clearConsole from 'react-dev-utils/clearConsole';
import checkRequiredFiles from 'react-dev-utils/checkRequiredFiles';
import openBrowser from 'react-dev-utils/openBrowser';
import { paths } from '../config/paths';
import path from 'path';
import fs from 'fs';
import logger from '../scripts/logger';
import { choosePort, createCompiler, prepareProxy, prepareUrls } from 'react-dev-utils/WebpackDevServerUtils';

const configureWebpackClient = require('../webpack/client').configure;
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

const DEFAULT_PORT = Number(process.env.PORT) || 3000;
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

    config.devServer.proxy = prepareProxy(proxySetting, paths.appPublic, paths.publicUrlOrPath);

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

    ['SIGINT', 'SIGTERM'].forEach((sig: any) => {
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
