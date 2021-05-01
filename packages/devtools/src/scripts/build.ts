process.env.NODE_ENV = 'production';

process.on('unhandledRejection', (err) => {
  throw err;
});

import '../config/env';

import fs from 'fs-extra';
import { paths } from '../config/paths';
import { logger } from './logger';
import FileSizeReporter from 'react-dev-utils/FileSizeReporter';
import { copyPublicFolder } from './utils/copy-public-folder';
import { compile } from './webpack/compile';
import { BuildType } from '../types/build';
import { config as globalBuildConfig } from '../config/build.config';
import { merge } from 'webpack-merge';
import { configure as configureWebpackClient } from '../webpack/client';
import { configure as configureWebpackServer } from '../webpack/server';
import { configure as configureWebpackNode } from '../webpack/node';
import { BuildConfig } from '../types/config';
import { assert } from 'assert-ts';
import { emptyBuildDir } from './empty-build-dir';
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

  const localBuildConfig: BuildConfig = fs.existsSync(paths.localBuildConfig)
    ? await import(paths.localBuildConfig)
    : {};

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const buildConfig = merge(globalBuildConfig as any, localBuildConfig as any) as any;

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
    const clientConfig = buildClient && configureWebpackClient({ ...buildConfig.client, isStaticBuild: !buildServer });

    assert(!!clientConfig, 'clientConfig is not present');

    const { stats: clientStats } = await compile(clientConfig, BuildType.client);

    logger.done('finished building client webpack build');

    if (serverConfig) {
      await compile(serverConfig, BuildType.server);

      logger.done('finished building server webpack build');
    }

    printFileSizesAfterBuild(clientStats, previousFileSizes, publicDir);

    logger.done('build finished');
  } catch (err) {
    logger.error('Failed to compile.');
    logger.error(err.message || err);
    logger.error(err.stack);
    process.exit(1);
  }
};
