#! /usr/bin/env node
/* eslint-disable no-console */
'use strict';

process.env.NODE_ENV = 'production';

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', (err) => {
  throw err;
});

const path = require('path');

// Ensure environment variables are read.
require('../config/env');

const requireRelative = (relativePath) => require(path.join(__dirname, relativePath));

const webpack = require('webpack');
const fs = require('fs-extra');
const chalk = require('chalk');
const paths = require('../config/paths');
const printErrors = require('razzle-dev-utils/printErrors');
const FileSizeReporter = require('react-dev-utils/FileSizeReporter');
const formatWebpackMessages = require('react-dev-utils/formatWebpackMessages');
const measureFileSizesBeforeBuild = FileSizeReporter.measureFileSizesBeforeBuild;
const printFileSizesAfterBuild = FileSizeReporter.printFileSizesAfterBuild;
const configureWebpackServer = requireRelative('../webpack/node').configure;

// First, read the current file sizes in build directory.
// This lets us display how much they changed later.
measureFileSizesBeforeBuild(paths.appBuild)
  .then((previousFileSizes) => {
    // Remove all content but keep the directory so that
    // if you're in it, you don't end up in Trash
    fs.emptyDirSync(paths.appBuild);

    // Start the webpack build
    return build(previousFileSizes);
  })
  .then(
    ({ stats, previousFileSizes, warnings }) => {
      if (warnings.length) {
        console.log(chalk.yellow('Compiled with warnings.\n'));
        console.log(warnings.join('\n\n'));
        console.log(
          '\nSearch for the ' + chalk.underline(chalk.yellow('keywords')) + ' to learn more about each warning.'
        );
        console.log('To ignore, add ' + chalk.cyan('// eslint-disable-next-line') + ' to the line before.\n');
      } else {
        console.log(chalk.green('Compiled successfully.\n'));
      }
      console.log('File sizes after gzip:\n');
      printFileSizesAfterBuild(stats, previousFileSizes, paths.appBuild);
      console.log();
    },
    (err) => {
      console.log(chalk.red('Failed to compile.\n'));
      console.log((err.message || err) + '\n');
      process.exit(1);
    }
  );

function build(previousFileSizes) {
  const globalBuildConfig = require(paths.jsBuildConfigPath);

  const localBuildConfig = fs.existsSync(paths.localBuildConfig) ? require(paths.localBuildConfig) : {};

  const buildConfig = { ...globalBuildConfig, ...localBuildConfig };

  let nodeConfig = !!buildConfig.server && configureWebpackServer(buildConfig.node);
  console.log(chalk.cyan('Creating an optimized production build...'));
  console.log(chalk.cyan('Compiling client...'));

  return new Promise((resolve, reject) => {
    compile(nodeConfig, (err, clientStats) => {
      if (err) {
        console.dir(err);
        process.exit(1);
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
        console.log(
          chalk.yellow(
            '\nTreating warnings as errors because process.env.CI = true.\n' + 'Most CI servers set it automatically.\n'
          )
        );

        return reject(new Error(clientMessages.warnings.join('\n\n')));
      }

      console.log(chalk.green('Compiled node successfully.'));

      return resolve({
        stats: clientStats,
        previousFileSizes,
        warnings: clientMessages.warnings
      });
    });
  });
}

function compile(config, cb) {
  let compiler;
  try {
    config.bail = true;
    compiler = webpack(config);
  } catch (e) {
    printErrors('Failed to compile.', [e]);
    process.exit(1);
  }
  compiler.run((err, stats) => {
    cb(err, stats);
  });
}
