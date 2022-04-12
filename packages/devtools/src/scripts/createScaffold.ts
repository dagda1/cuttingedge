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

  fs.copySync(path.join(__dirname, '../../init/gitignore'), path.join(process.cwd(), '.gitignore'));

  switch (applicationType) {
    case ApplicationType.WebApp:
      fs.copySync(source, root);
      const rootSrc = path.join(root, 'src');
      fs.moveSync(path.join(root, 'App.tsx'), path.join(rootSrc, 'App.tsx'));
      fs.moveSync(path.join(root, 'index.tsx'), path.join(rootSrc, 'index.tsx'));
      break;
    case ApplicationType.package:
      const devDir = path.join(root, 'demo');

      fs.mkdirSync(devDir);
      fs.copySync(source, devDir);
      fs.copySync(path.join(__dirname, '../../package'), root);
      fs.moveSync(path.join(devDir, 'tsconfig.json'), path.join(root, 'tsconfig.json'));
      fs.moveSync(path.join(devDir, 'tsconfig.dist.json'), path.join(root, 'tsconfig.dist.json'));
      break;
    case ApplicationType.cli:
      fs.copySync(source, root);
      const packageJson = path.join(process.cwd(), 'package.json');

      const raw = fs.readFileSync(packageJson, 'utf8').replace(/\{\{name\}\}/g, appName);

      fs.writeFileSync(packageJson, raw);
      break;
    default:
      throw new Error(`unknown application type: ${applicationType}`);
  }

  fs.moveSync(path.join(process.cwd(), 'eslintrc.json'), path.join(process.cwd(), '.eslintrc.json'));

  process.chdir(originalDirectory);
}
