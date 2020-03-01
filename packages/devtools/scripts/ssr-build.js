#! /usr/bin/env node
'use strict';
// Do this as the first thing so that any code reading it knows the right env.
process.env.NODE_ENV = 'production';

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', err => {
  throw err;
});

// Ensure environment variables are read.
require('../config/env');

const webpack = require('webpack');
const fs = require('fs-extra');
const chalk = require('chalk');
const paths = require('../config/paths');
const printErrors = require('./printErrors');
const logger = require('./logger');
const FileSizeReporter = require('react-dev-utils/FileSizeReporter');
const formatWebpackMessages = require('react-dev-utils/formatWebpackMessages');
const measureFileSizesBeforeBuild = FileSizeReporter.measureFileSizesBeforeBuild;
const printFileSizesAfterBuild = FileSizeReporter.printFileSizesAfterBuild;
const merge = require('lodash/merge');
const { copyPublicFolder } = require('./utils/copy-public-folder');

const configureWebpackClient = require('../webpack/client').configure;
const configureWebpackServer = require('../webpack/server').configure;

measureFileSizesBeforeBuild(paths.appBuildPublic)
  .then(previousFileSizes => {
    fs.emptyDirSync(paths.appBuild);

    copyPublicFolder();

    return build(previousFileSizes);
  })
  .then(
    ({ stats, previousFileSizes, warnings }) => {
      if (warnings.length) {
        logger.info('Compiled with warnings.\n');
        logger.info(warnings.join('\n\n'));
        logger.info(
          '\nSearch for the ' + chalk.underline(chalk.yellow('keywords')) + ' to learn more about each warning.'
        );
        logger.info('To ignore, add ' + chalk.cyan('// eslint-disable-next-line') + ' to the line before.\n');
      } else {
        logger.info('Compiled successfully.\n');
      }

      logger.info('File sizes after gzip:\n');

      printFileSizesAfterBuild(stats, previousFileSizes, paths.appBuild);
    }).catch(err => {
      logger.error('Failed to compile.\n');
      logger.error((err.message || err) + '\n');
      logger.error(err.stack);
      process.exit(1);
    });

function build(previousFileSizes) {
  const globalBuildConfig = require(paths.jsBuildConfigPath);

  const localBuildConfig = fs.existsSync(paths.localBuildConfig) ? require(paths.localBuildConfig) : {};

  const buildConfig = merge(globalBuildConfig, localBuildConfig);

  let clientConfig = !!buildConfig.client && configureWebpackClient(buildConfig.client);
  let serverConfig = !!buildConfig.server && configureWebpackServer(buildConfig.server);

  process.noDeprecation = true; // turns off that loadQuery clutter.

  logger.info('Creating an optimized production build...');
  logger.info('Compiling client...');

  // First compile the client. We need it to properly output assets.json (asset
  // manifest file with the correct hashes on file names BEFORE we can start
  // the server compiler.
  return new Promise((resolve, reject) => {
    compile(clientConfig, (err, clientStats) => {
      if (err) {
        logger.error(err);
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
        logger.info(
            '\nTreating warnings as errors because process.env.CI = true.\n' + 'Most CI servers set it automatically.\n'
          );

        return reject(new Error(clientMessages.warnings.join('\n\n')));
      }

      logger.info('Compiled client successfully.');
      logger.info('Compiling server...');

      compile(serverConfig, (err, serverStats) => {
        if (err) {
          logger.error(err);
          reject(err);
          return;
        }

        const serverMessages = formatWebpackMessages(serverStats.toJson({}, true));

        if (serverMessages.errors.length) {
          logger.error(JSON.stringify({errors: serverMessages.errors}));
          return reject(new Error(serverMessages.errors.join('\n\n')));
        }

        if (
          process.env.CI &&
          (typeof process.env.CI !== 'string' || process.env.CI.toLowerCase() !== 'false') &&
          serverMessages.warnings.length
        ) {
          logger.warn(
              '\nTreating warnings as errors because process.env.CI = true.\n' +
                'Most CI servers set it automatically.\n'
            );

          return reject(new Error(serverMessages.warnings.join('\n\n')));
        }

        logger.done('Compiled server successfully.');

        return resolve({
          stats: clientStats,
          previousFileSizes,
          warnings: Object.assign({}, clientMessages.warnings, serverMessages.warnings)
        });
      });
    });
  });
}

// Wrap webpack compile in a try catch.
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
