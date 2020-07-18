process.env.NODE_ENV = 'production';

process.on('unhandledRejection', (err) => {
  throw err;
});

import '.../config/env';

import fs from 'fs-extra';
import { paths } from '../config/paths';
import logger from './logger';
import FileSizeReporter from 'react-dev-utils/FileSizeReporter';
import { copyPublicFolder } from './utils/copy-public-folder';
import { compile } from './webpack/compile';
import { BuildType } from '../types/build';

const measureFileSizesBeforeBuild = FileSizeReporter.measureFileSizesBeforeBuild;
const printFileSizesAfterBuild = FileSizeReporter.printFileSizesAfterBuild;
const merge = require('webpack-merge');

const configureWebpackClient = require('../webpack/client').configure;
const configureWebpackServer = require('../webpack/server').configure;
const configureWebpackNode = require('../webpack/node').configure;

export const build = async ({
  buildClient,
  buildServer,
  buildNode,
}: {
  buildClient: boolean;
  buildServer: boolean;
  buildNode: boolean;
}) => {
  logger.start('starting build');
  const globalBuildConfig = require(paths.jsBuildConfigPath);

  const localBuildConfig = fs.existsSync(paths.localBuildConfig) ? require(paths.localBuildConfig) : {};

  const buildConfig = merge(globalBuildConfig, localBuildConfig);

  const clientConfig = !!buildClient && configureWebpackClient(buildConfig.client);
  const serverConfig = !!buildServer && configureWebpackServer(buildConfig.server);
  const nodeConfig = !!buildNode && configureWebpackNode(buildConfig.node);

  const publicDir = buildServer ? paths.appBuildPublic : paths.appBuild;

  try {
    const previousFileSizes = await measureFileSizesBeforeBuild(publicDir);

    fs.emptyDirSync(paths.appBuild);

    copyPublicFolder();

    if (buildNode) {
      await compile(nodeConfig, BuildType.node);
      logger.done('build finished');
      return;
    }

    const { stats: clientStats } = await compile(clientConfig, BuildType.client);

    if (buildServer) {
      await compile(serverConfig, BuildType.server);
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
