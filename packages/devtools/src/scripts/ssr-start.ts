process.env.NODE_ENV = 'development';
import fs from 'fs-extra';
import webpack, { Configuration } from 'webpack';
import { paths } from '../config/paths';
import devServer from 'webpack-dev-server';
import printErrors from './printErrors';
import logger from './logger';
import { setPorts } from './setPorts';
import merge from 'webpack-merge';

import { configure as configureWebpackClient } from '../webpack/client';
import { configure as configureWebpackServer } from '../webpack/server';
import { ServerBuildConfig, DevServerConfig } from 'src/types/config';

(process as any).noDeprecation = true;

function compile(config: Configuration) {
  let compiler;
  try {
    compiler = webpack(config);
  } catch (e) {
    printErrors('Failed to compile.', [e]);
    process.exit(1);
  }
  return compiler;
}

// Capture any --inspect or --inspect-brk flags (with optional values) so that we
// can pass them when we invoke nodejs
process.env.INSPECT_BRK = process.argv.find((arg) => arg.match(/--inspect-brk(=|$)/)) || '';
process.env.INSPECT = process.argv.find((arg) => arg.match(/--inspect(=|$)/)) || '';

function main() {
  fs.emptyDirSync(paths.appBuild);

  logger.start('Compiling...');

  fs.removeSync(paths.appManifest);

  const globalBuildConfig = require(paths.jsBuildConfigPath);

  const localBuildConfig = require(paths.localBuildConfig);

  const buildConfig = merge(globalBuildConfig, localBuildConfig) as {
    server: ServerBuildConfig;
    client: DevServerConfig;
  };

  const clientConfig = !!buildConfig.client && configureWebpackClient(buildConfig.client);
  const serverConfig = !!buildConfig.server && configureWebpackServer(buildConfig.server);

  const clientCompiler = compile(clientConfig);
  const serverCompiler = compile(serverConfig);

  clientCompiler.plugin('done', () => {
    serverCompiler.watch(
      {},
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      (stats) => ({}),
    );
  });

  /**
   * Create a new instance of Webpack-dev-server for assets only
   * This will actually run on a different port than the main app.
   */
  const clientDevServer = new devServer(clientCompiler, clientConfig.devServer);

  clientDevServer.listen((process.env.PORT && parseInt(process.env.PORT) + 1) || 3001, (err) => {
    if (err) {
      logger.error(err);
    }
  });
}
setPorts().then(main).catch(logger.error);
