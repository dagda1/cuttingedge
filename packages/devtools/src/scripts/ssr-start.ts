process.env.NODE_ENV = 'development';
import fs from 'fs-extra';
import webpack, { Configuration, Compiler } from 'webpack';
import { paths } from '../config/paths';
import devServer from 'webpack-dev-server';
import printErrors from './printErrors';
import { logger } from './logger';
import { merge } from 'webpack-merge';
import { configure as configureWebpackClient } from '../webpack/client';
import { configure as configureWebpackServer } from '../webpack/server';
import { BuildConfig } from '../types/config';
import { config as globalBuildConfig } from '../config/build.config';
import { getUrlParts } from '../webpack/getUrlParts';
import { emptyBuildDir } from './empty-build-dir';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(process as any).noDeprecation = true;

function compile(config: Configuration): Compiler {
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
  emptyBuildDir();

  logger.start('Compiling...');

  fs.removeSync(paths.appManifest);

  const localBuildConfig = require(paths.localBuildConfig) as BuildConfig;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const buildConfig = merge(globalBuildConfig as any, localBuildConfig as any) as any;

  const { port } = getUrlParts({ ssrBuild: true, isProduction: false });

  const clientConfig = configureWebpackClient({ ...buildConfig.client, isStaticBuild: false });
  const serverConfig = configureWebpackServer(buildConfig.server);

  const clientCompiler = compile(clientConfig);
  const serverCompiler = compile(serverConfig);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (clientCompiler as any).plugin('done', () => {
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

  clientDevServer.listen(port, (err) => {
    if (err) {
      logger.error(err);
    }
  });
}

main();
