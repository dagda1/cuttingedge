#! /usr/bin/env node
const inquirer = require('inquirer');
const versionCompare = require('./version-compare');
const getFiles = require('./get-files');
const updateVersion = require('./update-version');
const getPackageInfo = require('./get-package-info');

const versionBumpTypes = ['major', 'minor', 'patch'];

const bumpVersion = (version, type) => {
  return version
    .split('.')
    .map((factor, i) => (versionBumpTypes[i] === type ? Number(factor.match(/^[0-9]*/)[0]) + 1 : factor))
    .join('.');
};

const main = async () => {
  const package = getPackageInfo(process.cwd());
  const currentVersion = package.version;
  const versionRegex = /^(?:(\d*)\.)(?:(\d*)\.)(\*|\d*)?([-(SNAPSHOT|RELEASE)]*)$/;
  const packageFiles = getFiles(package.dir, 'package.json');

  if (package.version === undefined) {
    console.log('The package file does not have version property defined?. So, version update cannot be done on this file');
    return;
  }

  //possible upgrade version values
  const [major, minor, patch] = versionBumpTypes.map(type => bumpVersion(currentVersion, type));

  let version;

  console.log(`The current version number is ${currentVersion}`);

  const choice = await inquirer.prompt({
    type: 'list',
    name: 'value',
    message: 'Bump version:',
    choices: [`major : ${major}`, `minor : ${minor}`, `patch : ${patch}`, new inquirer.Separator(), 'custom', 'cancel'],
  });

  if (choice.value === 'cancel') {
    console.error('version change cancelled');
    return;
  }

  if (choice.value === 'custom') {
    const custom = await inquirer.prompt({
      type: 'input',
      name: 'value',
      message: 'Please input the version number of choice:',
    });

    if (!versionRegex.test(custom.value)) {
      console.log('Version number format is incorrect. Please use the correct format');
      return;
    }

    // check if the version number is smaller than earlier.
    const isValid = versionCompare(custom.value.replace(/[-,A-Z]/g, ''), currentVersion.replace(/[-,A-Z]/g, ''));
    if (!isValid) {
      console.log('Version number can not be reduced');
      return;
    }

    version = custom.value;
  } else {
    version = choice.value.split(':')[1].trim();
  }

  //
  const confirm = await inquirer.prompt({
    type: 'confirm',
    name: 'value',
    message: 'Confirm the version update:',
  });

  const updateDsDepVersion = package.name === '@ds/root' ? true : false;

  return confirm.value
    ? packageFiles.map(filename => updateVersion(filename, version, updateDsDepVersion))
    : console.log('version change cancelled');
};

main();
