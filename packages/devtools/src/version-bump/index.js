#! /usr/bin/env node
const inquirer = require('inquirer');
const getFiles = require('./get-files');
const updateVersion = require('./update-version');
const getPackageInfo = require('./get-package-info');
const logger = require('../scripts/logger');

const semver = require('semver');

const main = async () => {
  const package = getPackageInfo(process.cwd());
  const currentVersion = package.version;
  const versionRegex = /^(?:(\d*)\.)(?:(\d*)\.)(\*|\d*)?([-(SNAPSHOT|RELEASE)]*)$/;
  const packageFiles = getFiles(package.dir, 'package.json');

  if (package.version === undefined) {
    logger.info('The package file does not have version property defined?. So, version update cannot be done on this file');
    return;
  }

  const major = semver.inc(currentVersion, 'major');
  const minor = semver.inc(currentVersion, 'minor');
  const patch = semver.inc(currentVersion, 'patch');

  logger.info(`The current version number is ${currentVersion}`);

  const choice = await inquirer.prompt({
    type: 'list',
    name: 'value',
    message: 'Bump version:',
    choices: [`major : ${major}`, `minor : ${minor}`, `patch : ${patch}`, new inquirer.Separator(), 'custom', 'cancel'],
  });

  if (choice.value === 'cancel') {
    logger.info('version change cancelled');
    return;
  }

  if (choice.value === 'custom') {
    const custom = await inquirer.prompt({
      type: 'input',
      name: 'value',
      message: 'Please input the version number of choice:',
    });

    if (!versionRegex.test(custom.value)) {
      logger.info('Version number format is incorrect. Please use the correct format');
      return;
    }

    version = custom.value;
  } else {
    version = choice.value.split(':')[1].trim();
  }

  const confirm = await inquirer.prompt({
    type: 'confirm',
    name: 'value',
    message: 'Confirm the version update:',
  });

  const updateDsDepVersion = package.name === '@cutting/root' ? true : false;

  return confirm.value
    ? packageFiles.map((filename) => updateVersion(filename, version, updateDsDepVersion))
    : logger.info('version change cancelled');
};

main();
