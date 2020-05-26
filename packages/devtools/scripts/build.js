#! /usr/bin/env node
'use strict';
process.env.NODE_ENV = 'production';

process.on('unhandledRejection', (err) => {
  throw err;
});

require('../config/env');

const fs = require('fs-extra');
const paths = require('../config/paths');
const logger = require('./logger');
const FileSizeReporter = require('react-dev-utils/FileSizeReporter');
const measureFileSizesBeforeBuild = FileSizeReporter.measureFileSizesBeforeBuild;
const printFileSizesAfterBuild = FileSizeReporter.printFileSizesAfterBuild;
const merge = require('lodash/merge');
const { copyPublicFolder } = require('./utils/copy-public-folder');
const { compile } = require('./webpack/compile');

const configureWebpackClient = require('../webpack/client').configure;
const configureWebpackServer = require('../webpack/server').configure;

module.exports.build = async ({ buildClient, buildServer, buildNode }) => {
  logger.start('starting build');
  const globalBuildConfig = require(paths.jsBuildConfigPath);

  const localBuildConfig = fs.existsSync(paths.localBuildConfig) ? require(paths.localBuildConfig) : {};

  const buildConfig = merge(globalBuildConfig, localBuildConfig);

  const clientConfig = !!buildClient && configureWebpackClient(buildConfig.client);
  const serverConfig = !!buildServer && configureWebpackServer(buildConfig.server);
  const nodeConfig = !!buildNode && configureWebpackServer(buildConfig.node);

  try {
    const previousFileSizes = await measureFileSizesBeforeBuild(paths.appBuildPublic);

    fs.emptyDirSync(paths.appBuild);

    copyPublicFolder();

    if (buildNode) {
      await compile(nodeConfig, 'node');
      logger.done('build finished');
    }

    const { stats: clientStats } = await compile(clientConfig, 'client');

    if (buildServer) {
      await compile(serverConfig, 'server');
    }

    printFileSizesAfterBuild(clientStats, previousFileSizes, paths.appBuild);

    logger.done('build finished');
  } catch (err) {
    logger.error('Failed to compile.');
    logger.error(err.message || err);
    logger.error(err.stack);
    process.exit(1);
  }
};
