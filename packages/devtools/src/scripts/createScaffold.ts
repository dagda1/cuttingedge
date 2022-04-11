import inquirer from 'inquirer';
import path from 'path';
import { paths } from '../config/paths';
import { createInitialFiles } from './createInitialFiles';
import fs from 'fs-extra';
import logger from './logger';
import { ApplicationType } from '../types/applicationType';

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

  const { value } = await inquirer.prompt({
    type: 'number',
    name: 'value',
    message: `What am I creating:
    
    1.  A web app
    2.  A package
    3.  A CLI app
    `,
  });

  if (!value) {
    throw new Error('No application type has been made.');
  }

  const applicationType = value as ApplicationType;

  if (applicationType !== ApplicationType.cli) {
    createInitialFiles(applicationType);
  }

  const source = path.join(__dirname, appSource[applicationType]);

  switch (applicationType) {
    case ApplicationType.WebApp:
      if (!fs.existsSync(paths.appSrc)) {
        fs.mkdirSync(paths.appSrc);
      }

      fs.copySync(path.join(source, 'public'), path.join(process.cwd(), 'public'));
      fs.copyFileSync(path.join(source, 'index.tsx'), path.join(paths.appSrc, 'index.tsx'));
      fs.copyFileSync(path.join(source, 'App.tsx'), path.join(paths.appSrc, 'App.tsx'));
      break;
    case ApplicationType.package:
      fs.mkdirSync(paths.devDir);
      fs.copySync(source, path.join(process.cwd(), 'demo'));
      break;
    case ApplicationType.cli:
      fs.mkdirSync(paths.appSrc);
      fs.copySync(source, paths.appSrc);
  }
}
