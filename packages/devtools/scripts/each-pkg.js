#! /usr/bin/env node

const fs = require('fs');
const path = require('path');
const program = require('commander');
const { spawn } = require('child_process');
const paths = require('../config/paths');
const logger = require('../scripts/logger');

function getPackages(packages) {
  return packages
    .filter((pkgPath) => fs.lstatSync(pkgPath).isDirectory())
    .map((pkgPath) => {
      const pkg = require(path.join(pkgPath, './package.json'));
      return { ...pkg, path: pkgPath };
    });
}

/**
 * Runs a command for a given package
 *
 * @param {String} cmd - the command to run
 * @param {Array} args - command arguments
 * @param {String} pkg.name - package name
 * @param {String} pkg.path - package directory path
 * @returns {Promise} resolves or rejects when the process exits
 */
function runPkgCmd(cmd, args, pkg) {
  return new Promise((resolve, reject) => {
    logger.info(`${pkg.name} ${cmd} ${args.join(' ')}`);

    const child = spawn(cmd, args, {
      stdio: [null, 1, 2],
      cwd: pkg.path,
    });

    child.on('exit', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(code);
      }
    });
  });
}

/**
 * Executes a command for each package, optionally filtered by changed
 * or new packages. Explicity providing a package name is also
 * supported in conjunction with the changed and new options.
 */
program
  .description('Executes the specified command for each package')
  .arguments('<cmd> [args...]')
  .option('-p, --package <name>', 'target a specific package (can be combined with the above)')
  .parse(process.argv)
  .action(function (cmd, args) {
    const pkgs = getPackages(paths.libPackages);

    pkgs
      .reduce(
        (p, pkg) =>
          p
            .then(() => runPkgCmd(cmd, args, pkg))
            .catch((e) => {
              logger.error(`${pkg.name} failed with ${e}`);
              process.exit(1);
            }),
        Promise.resolve(),
      )
      .catch(process.exit);
  })
  .parse(process.argv);
