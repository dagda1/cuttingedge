#! /usr/bin/env node
/* eslint-disable @typescript-eslint/no-use-before-define */
'use strict';
process.env.NODE_ENV = 'production';

process.on('unhandledRejection', (err) => {
  throw err;
});

const path = require('path');

require('../config/env');

const requireRelative = (relativePath) => require(path.join(__dirname, relativePath));

const webpack = require('webpack');
const fs = require('fs-extra');
const paths = require('../config/paths');
const printErrors = require('./printErrors');
const FileSizeReporter = require('react-dev-utils/FileSizeReporter');
const formatWebpackMessages = require('react-dev-utils/formatWebpackMessages');
const measureFileSizesBeforeBuild = FileSizeReporter.measureFileSizesBeforeBuild;
const printFileSizesAfterBuild = FileSizeReporter.printFileSizesAfterBuild;
const configureWebpackClient = requireRelative('../webpack/client').configure;
const { copyPublicFolder } = require('./utils/copy-public-folder');
const logger = require('../scripts/logger');

measureFileSizesBeforeBuild(paths.appBuild)
  .then((previousFileSizes) => {
    fs.emptyDirSync(paths.appBuild);

    copyPublicFolder();

    return build(previousFileSizes);
  })
  .then(
    ({ stats, previousFileSizes, warnings }) => {
      if (warnings.length) {
        logger.info('Compiled with warnings.\n');
        logger.info(warnings.join('\n\n'));
        logger.info('\nSearch for the keywords to learn more about each warning.');
        logger.info('To ignore, add // eslint-disable-next-line to the line before.\n');
      } else {
        logger.done('Compiled successfully.\n');
      }
      logger.info('File sizes after gzip:\n');
      printFileSizesAfterBuild(stats, previousFileSizes, paths.appBuild);
    },
    (err) => {
      logger.error('Failed to compile.\n');
      logger.error(err.message || err);
      process.exit(1);
    },
  );

function build(previousFileSizes) {
  const globalBuildConfig = require(paths.jsBuildConfigPath);

  const localBuildConfig = fs.existsSync(paths.localBuildConfig) ? require(paths.localBuildConfig) : {};

  const buildConfig = { ...globalBuildConfig, ...localBuildConfig };

  const clientConfig = !!buildConfig.client && configureWebpackClient({ ...buildConfig.client, isStaticBuild: true });

  logger.info('Creating an optimized production build...');
  logger.info('Compiling client...');

  return new Promise((resolve, reject) => {
    compile(clientConfig, (err, clientStats) => {
      if (err) {
        logger.error(err.message);
        reject(err);
        return;
      }
      const clientMessages = formatWebpackMessages(clientStats.toJson({}, true));
      if (clientMessages.errors.length) {
        return reject(new Error(clientMessages.errors.join('\n\n')));
      }
      if (
        process.env.CI &&
        (typeof process.env.CI !== 'string' || process.env.CI.toLowerCase() !== 'false') &&
        clientMessages.warnings.length
      ) {
        logger.warn('\nTreating warnings as errors because process.env.CI = true.\nMost CI servers set it automatically.\n');
        return reject(new Error(clientMessages.warnings.join('\n\n')));
      }

      logger.done('Compiled client successfully.');

      return resolve({
        stats: clientStats,
        previousFileSizes,
        warnings: clientMessages.warnings,
      });
    });
  });
}

function compile(config, cb) {
  let compiler;
  try {
    compiler = webpack(config);
  } catch (e) {
    printErrors('Failed to compile.', [e]);
    process.exit(1);
  }
  compiler.run((err, stats) => {
    cb(err, stats);
  });
}
