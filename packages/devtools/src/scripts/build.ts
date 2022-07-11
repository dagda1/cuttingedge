process.env.NODE_ENV = 'production';

process.on('unhandledRejection', (err) => {
  throw err;
});

import '../config/env';
import { paths } from '../config/paths.js';
import { logger } from './logger.js';
import FileSizeReporter from 'react-dev-utils/FileSizeReporter';
import { copyPublicFolder } from './utils/copy-public-folder';
import { compile } from './webpack/compile';
import { BuildType } from '../types/build';
import { configure as configureWebpackClient } from '../webpack/client';
import { configure as configureWebpackServer } from '../webpack/server';
import { configure as configureWebpackNode } from '../webpack/node';
import { assert } from 'assert-ts';
import { emptyBuildDir } from './empty-build-dir';
import { consolidateBuildConfigs } from './consolidateBuildConfigs';
const measureFileSizesBeforeBuild = FileSizeReporter.measureFileSizesBeforeBuild;
const printFileSizesAfterBuild = FileSizeReporter.printFileSizesAfterBuild;

export const build = async ({
  buildClient,
  buildServer,
  buildNode,
}: {
  buildClient: boolean;
  buildServer: boolean;
  buildNode: boolean;
}): Promise<void> => {
  logger.start('starting build');

  const buildConfig = consolidateBuildConfigs();

  const nodeConfig = !!buildNode && configureWebpackNode(buildConfig.node);

  const publicDir = buildServer ? paths.appBuildPublic : paths.appBuild;

  try {
    const previousFileSizes = await measureFileSizesBeforeBuild(publicDir);

    emptyBuildDir();

    copyPublicFolder();

    if (nodeConfig) {
      await compile(nodeConfig, BuildType.node);
      logger.done('finished building node webpack build');
      return;
    }
    const serverConfig = !!buildServer && configureWebpackServer(buildConfig.server);
    const clientConfig =
      buildClient &&
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      configureWebpackClient({ ...(buildConfig.client as any), isStaticBuild: !buildServer });

    assert(!!clientConfig, 'clientConfig is not present');

    const { stats: clientStats } = await compile(clientConfig, BuildType.client);

    logger.done('finished building client webpack build');

    if (serverConfig) {
      await compile(serverConfig, BuildType.server);

      logger.done('finished building server webpack build');
    }

    printFileSizesAfterBuild(clientStats, previousFileSizes, publicDir);

    logger.done('build finished');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    logger.error('Failed to compile.');
    logger.error(err.message || err);
    logger.error(err.stack);
    process.exit(1);
  }
};
