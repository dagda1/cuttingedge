import inquirer from 'inquirer';
import path from 'path';
import { paths } from '../config/paths';
import fs from 'fs-extra';
import logger from './logger';
import { ApplicationType } from '../types/applicationType';
import validateProjectName from 'validate-npm-package-name';
import { assert } from 'console';
import { installDependencies } from './installDependencies';

const appSource: Record<ApplicationType, string> = {
  [ApplicationType.WebApp]: '../../demo',
  [ApplicationType.package]: '../../demo',
  [ApplicationType.cli]: '../../cli',
};

export async function scaffold(): Promise<void> {
  if (
    [paths.appPublic, paths.devDirPublic].some((dir) => {
      if (fs.existsSync(dir)) {
        logger.info(`${dir} exists, aborting scaffold.`);
        return true;
      }

      return false;
    })
  ) {
    return;
  }

  const { projectName } = await inquirer.prompt({
    type: 'input',
    name: 'projectName',
    message: 'What is the name of your project?',
    validate: async (input: string) => {
      const { validForNewPackages } = validateProjectName(input);

      return validForNewPackages;
    },
  });

  assert(!!projectName, 'projectName is required');

  const { value } = await inquirer.prompt({
    type: 'number',
    name: 'value',
    message: `What am I creating:
    
    1.  A web app
    2.  A package
    3.  A CLI app
    `,
  });

  assert(!!value, 'No application type has been made.');

  const applicationType = value as ApplicationType;

  const root = path.resolve(projectName);

  const source = path.join(__dirname, appSource[applicationType]);

  const appName = path.basename(root);

  fs.ensureDirSync(projectName);

  const originalDirectory = process.cwd();

  process.chdir(root);

  installDependencies(appName, applicationType);

  const rootSrc = path.join(root, 'src');
  const devDir = path.join(root, 'demo');

  fs.copyFileSync(path.join(__dirname, '../../init/.gitignore'), path.join(process.cwd(), '.gitignore'));

  switch (applicationType) {
    case ApplicationType.WebApp:
      if (!fs.existsSync(rootSrc)) {
        fs.mkdirSync(rootSrc);
      }

      fs.copySync(path.join(source, 'public'), path.join(process.cwd(), 'public'));
      fs.copyFileSync(path.join(source, 'index.tsx'), path.join(rootSrc, 'index.tsx'));
      fs.copyFileSync(path.join(source, 'App.tsx'), path.join(rootSrc, 'App.tsx'));
      break;
    case ApplicationType.package:
      fs.mkdirSync(devDir);
      fs.copySync(source, devDir);
      fs.copySync(path.join(__dirname, '../../package'), root);
      break;
    case ApplicationType.cli:
      fs.copySync(source, root);
  }

  process.chdir(originalDirectory);
}
