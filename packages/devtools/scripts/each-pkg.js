#! /usr/bin/env node

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const program = require('commander');
const { spawn, spawnSync } = require('child_process');
const paths = require('../config/paths');

function getPackages(packages) {
  return packages.filter(pkgPath => fs.lstatSync(pkgPath).isDirectory()).map(pkgPath => {
    let pkg = require(path.join(pkgPath, './package.json'));
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
    console.log(chalk.blue(pkg.name) + ' ' + chalk.cyan(`${cmd} ${args.join(' ')}`));

    let child = spawn(cmd, args, {
      stdio: [null, 1, 2],
      cwd: pkg.path
    });

    child.on('exit', code => {
      if (code === 0) resolve();
      else reject(code);
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
  .option('-l, --libs-only', 'only build dependencies')
  .option('-p, --package <name>', 'target a specific package (can be combined with the above)')
  .parse(process.argv)
  .action(function(cmd, args) {
    const packagePaths = program.libsOnly ? paths.libPackages : paths.allPackages;

    let pkgs = getPackages(packagePaths);

    pkgs.reduce((p, pkg) => p.then(() => runPkgCmd(cmd, args, pkg)), Promise.resolve()).catch(process.exit);
  })
  .parse(process.argv);
