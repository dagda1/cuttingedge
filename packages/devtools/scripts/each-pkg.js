#! /usr/bin/env node

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const program = require('commander');
const { spawn, spawnSync } = require('child_process');

const packages = require(path.join(process.cwd(), 'pkg'));

/**
 * Gets the package.json contents of each package located in the
 * `./packages` subdirectory along with the package's path
 *
 * @returns {[Object]} Array of package.json data
 */
function getPackages() {
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
    console.log(chalk`{blue ${pkg.name}} {cyan \$ ${cmd} ${args.join(' ')}}`);

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
 * Returns true if a package differs from a commit (defaults to master)
 *
 * @param {String} pkg.path - package directory path
 * @param {String} [commit="master"] - commit to diff against
 * @returns {Boolean} true if the package has changed since commit
 */
function hasChanged(pkg, commit = 'origin/master') {
  let diff = spawnSync('git', ['diff', '--quiet', commit, pkg.path]);
  return diff.status === 1;
}

/**
 * Returns true if a package's version has not been published
 *
 * @param {String} pkg.path - package directory path
 * @param {String} pkg.version - package version
 * @returns {Boolean} true if the package version is not published
 */
function isNew(pkg) {
  let published = spawnSync('npm', ['view', pkg.name, 'versions']);

  if (published.status === 0) {
    let versions = JSON.parse(published.stdout.toString().replace(/'/g, '"'));
    return !versions.includes(pkg.version);
  } else {
    return true;
  }
}

/**
 * Executes a command for each package, optionally filtered by changed
 * or new packages. Explicity providing a package name is also
 * supported in conjunction with the changed and new options.
 */
program
  .description('Executes the specified command for each package')
  .arguments('<cmd> [args...]')
  .option('-n, --new', 'target unpublished packages only')
  .option('-c, --changed', 'target packages that have diverged from master')
  .option('-p, --package <name>', 'target a specific package (can be combined with the above)')
  .option('--diff <commit>', 'target packages that have diverged from a specific commit')
  .action(function(cmd, args) {
    // filter packages according to the provided options
    let pkgs = getPackages().filter(pkg => {
      let targeted = this.package ? this.package === pkg.name : true;

      if (targeted && (this.changed || this.diff)) {
        return hasChanged(pkg, this.diff);
      } else if (targeted && this.new) {
        return isNew(pkg);
      } else {
        return targeted;
      }
    });

    pkgs
      // run the command for each package sequentially
      .reduce((p, pkg) => p.then(() => runPkgCmd(cmd, args, pkg)), Promise.resolve())
      // exit when there are errors
      .catch(process.exit);
  })
  .parse(process.argv);
