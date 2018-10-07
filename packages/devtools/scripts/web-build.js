#! /usr/bin/env node
'use strict';
// Do this as the first thing so that any code reading it knows the right env.
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
const configureWebpackClient = requireRelative('../webpack/client').configure;
const configureWebpackServer = requireRelative('../webpack/server').configure;
const merge = require('lodash').merge;

// First, read the current file sizes in build directory.
// This lets us display how much they changed later.
measureFileSizesBeforeBuild(paths.appBuild)
  .then((previousFileSizes) => {
    // Remove all content but keep the directory so that
    // if you're in it, you don't end up in Trash
    fs.emptyDirSync(paths.appBuild);

    // Merge with the public folder
    copyPublicFolder();

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

  const buildConfig = merge(globalBuildConfig, localBuildConfig);

  let clientConfig = !!buildConfig.client && configureWebpackClient(buildConfig.client);
  let serverConfig = !!buildConfig.server && configureWebpackServer(buildConfig.server);

  let nodeConfig = !!buildConfig.server && configureWebpackServer(buildConfig.node);

  console.log('Creating an optimized production build...');
  console.log('Compiling client...');

  return new Promise((resolve, reject) => {
    compile(clientConfig, (err, clientStats) => {
      if (err) {
        console.dir(err);
        process.exit(1);
        reject(err);
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

      console.log(chalk.green('Compiled client successfully.'));

      if (!serverConfig) {
        console.log(chalk.green('client only build.'));

        return resolve({
          stats: clientStats,
          previousFileSizes,
          warnings: clientMessages.warnings
        });
      }
      console.log('Compiling server...');
      compile(serverConfig, (err, serverStats) => {
        if (err) {
          console.log(chalk.red('server errored....'));
          consol.dir(err, { depth: null });
          reject(err);
          return;
        }
        const serverMessages = formatWebpackMessages(serverStats.toJson({}, true));

        console.dir(serverMessages);

        if (serverMessages.errors.length) {
          return reject(new Error(serverMessages.errors.join('\n\n')));
        }
        if (
          process.env.CI &&
          (typeof process.env.CI !== 'string' || process.env.CI.toLowerCase() !== 'false') &&
          serverMessages.warnings.length
        ) {
          console.log(
            chalk.yellow(
              '\nTreating warnings as errors because process.env.CI = true.\n' +
                'Most CI servers set it automatically.\n'
            )
          );
          return reject(new Error(serverMessages.warnings.join('\n\n')));
        }

        console.log(chalk.cyan('compiling node.......'));

        compile(nodeConfig, (err, nodeStats) => {
          if (err) {
            console.dir(err);
            reject(err);
            process.exit(1);
            return;
          }
          const nodeMessages = formatWebpackMessages(nodeStats.toJson({}, true));
          if (nodeMessages.errors.length) {
            return reject(new Error(nodeMessages.errors.join('\n\n')));
          }

          if (
            process.env.CI &&
            (typeof process.env.CI !== 'string' || process.env.CI.toLowerCase() !== 'false') &&
            nodeMessages.warnings.length
          ) {
            console.log(
              chalk.yellow(
                '\nTreating warnings as errors because process.env.CI = true.\n' +
                  'Most CI servers set it automatically.\n'
              )
            );
            return reject(new Error(nodeMessages.warnings.join('\n\n')));
          }

          console.log(chalk.green('Compiled node successfully.'));

          return resolve({
            stats: clientStats,
            previousFileSizes,
            warnings: Object.assign({}, clientMessages.warnings, nodeMessages.warnings, serverMessages.warnings)
          });
        });
      });
    });
  });
}

function copyPublicFolder() {
  fs.copySync(paths.appPublic, paths.appBuildPublic, {
    dereference: true,
    filter: (file) => file !== paths.appHtml
  });
}

// Wrap webpack compile in a try catch.
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
