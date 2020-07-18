import inquirer from 'inquirer';
import { updateVersion } from './update-version';
import logger from '../scripts/logger';
import path from 'path';
import { promisify } from 'util';
import { getRootPackage } from './get-root-package';
import globber from 'glob';
import semver from 'semver';

const glob = promisify(globber);

const main = async () => {
  logger.start('finding package.json');

  const { rootDir, version: currentVersion } = await getRootPackage(process.cwd());

  logger.info(`found root package.json in ${rootDir}`);

  if (currentVersion === undefined) {
    logger.info(
      'The package file does not have version property defined?. So, version update cannot be done on this file',
    );
    return;
  }

  const packageFiles = await glob('**/package.json', { cwd: rootDir, ignore: ['**/node_modules/**'] });

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

  let version: string;

  if (choice.value === 'custom') {
    const custom = await inquirer.prompt({
      type: 'input',
      name: 'value',
      message: 'Please input the version number of choice:',
    });

    if (!semver.valid(custom.value)) {
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

  return confirm.value
    ? packageFiles.map((filename) => updateVersion(path.join(rootDir, filename), currentVersion, version))
    : logger.info('version change cancelled');
};

main();
