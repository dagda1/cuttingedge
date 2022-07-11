process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

process.on('unhandledRejection', (err) => {
  throw err;
});
import WebpackDevServer from 'webpack-dev-server';
import openBrowser from 'react-dev-utils/openBrowser';
import { paths } from '../config/paths.js';
import { logger } from '../scripts/logger.js';
import { choosePort, createCompiler, prepareProxy, prepareUrls } from 'react-dev-utils/WebpackDevServerUtils';
import webpack from 'webpack';
import { configure as configureWebpackClient } from '../webpack/client';
import { config as buildConfig } from '../config/build.config';
import { assert } from 'assert-ts';
import type { DevServerConfig } from '../types/config';
import fs from 'fs-extra';
import { scaffold } from './createScaffold';

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

    const compiler = createCompiler({ webpack, config, appName, urls });

    assert(!!config.devServer, 'no devServer in dev-server-start');

    config.devServer.proxy = prepareProxy(proxySetting, paths.appPublic, paths.publicUrlOrPath);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const server = new WebpackDevServer(config.devServer as any, compiler as any) as any;

    logger.info('Starting the development server...\n');

    server.startCallback(() => {
      openBrowser(urls.localUrlForBrowser);
    });

    ['SIGINT', 'SIGTERM'].forEach((sig) => {
      process.on(sig, function () {
        server.close();
        process.exit();
      });
    });
  } catch (err) {
    if (err instanceof Error) {
      console.error(err);
      logger.error(err.message);
    }
    process.exit(1);
  }
})();
