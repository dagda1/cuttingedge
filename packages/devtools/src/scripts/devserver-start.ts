process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

process.on('unhandledRejection', (err) => {
  throw err;
});
import WebpackDevServer from 'webpack-dev-server';
import clearConsole from 'react-dev-utils/clearConsole';
import openBrowser from 'react-dev-utils/openBrowser';
import { paths } from '../config/paths';
import { logger } from '../scripts/logger';
import { choosePort, createCompiler, prepareProxy, prepareUrls } from 'react-dev-utils/WebpackDevServerUtils';
import webpack from 'webpack';
import { configure as configureWebpackClient } from '../webpack/client';
import { config as buildConfig } from '../config/build.config';
import { assert } from 'assert-ts';
import { DevServerConfig } from '../types/config';
import fs from 'fs-extra';
import { scaffold } from './createScaffold';

const isInteractive = process.stdout.isTTY;

const { devServer } = buildConfig;

assert(devServer, 'no devServer node');

assert(devServer.publicDir, 'no publicDir');
assert(devServer.entries, 'no devServer entries');

const DEFAULT_PORT = Number(process.env.PORT) || 3000;
const HOST = process.env.HOST || '0.0.0.0';

(async () => {
  try {
    if (!fs.existsSync(devServer.publicDir) && !fs.existsSync(paths.devDirPublic)) {
      scaffold();
    }

    if (!fs.existsSync(devServer.publicDir) && fs.existsSync(paths.devDirPublic)) {
      devServer.publicDir = paths.devDirPublic;
      devServer.entries = paths.devDir;
    }

    const config = configureWebpackClient(devServer as DevServerConfig);

    const port = await choosePort(HOST, DEFAULT_PORT);

    if (port === null) {
      logger.error('We have not found a port.');
      return;
    }

    const protocol = process.env.HTTPS === 'true' ? 'https' : 'http';
    const pkg = await import(paths.appPackageJson);
    const { name: appName, proxy: proxySetting } = pkg;
    const urls = prepareUrls(protocol, HOST, port);

    const compiler = createCompiler({ webpack, config, appName, urls, useYarn: true });

    assert(!!config.devServer, 'no devServer in dev-server-start');

    config.devServer.proxy = prepareProxy(proxySetting, paths.appPublic, paths.publicUrlOrPath);

    const server = new WebpackDevServer(compiler, config.devServer);

    server.listen(port, HOST, (err) => {
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

    ['SIGINT', 'SIGTERM'].forEach((sig) => {
      process.on(sig, function () {
        server.close();
        process.exit();
      });
    });
  } catch (err) {
    if (err) {
      logger.error(err.message);
    }
    process.exit(1);
  }
})();
