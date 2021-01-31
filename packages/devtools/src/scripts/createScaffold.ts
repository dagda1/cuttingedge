import inquirer from 'inquirer';
import path from 'path';
import { paths } from '../config/paths';
import { createInitialFiles } from './createInitialFiles';
import fs from 'fs-extra';
import logger from './logger';

enum UserDirectoryChoice {
  root = 1,
  demo = 2,
}

export const scaffold = async (): Promise<void> => {
  createInitialFiles();

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
    message: `There is no public index.html etc, should I create these:
    
    1.  In the root
    2.  In a ./demo directory
    `,
  });

  if (!value) {
    throw new Error('No public index.html to start dev server');
  }

  const source = path.join(__dirname, '../../demo');

  if (Number(value) === UserDirectoryChoice.root) {
    if (!fs.existsSync(paths.appSrc)) {
      fs.mkdirSync(paths.appSrc);
    }

    fs.copySync(path.join(source, 'public'), path.join(process.cwd(), 'public'));
    fs.copyFileSync(path.join(source, 'index.tsx'), path.join(paths.appSrc, 'index.tsx'));
    fs.copyFileSync(path.join(source, 'App.tsx'), path.join(paths.appSrc, 'App.tsx'));
  } else if (Number(value) === UserDirectoryChoice.demo) {
    fs.mkdirSync(paths.devDir);
    fs.copySync(source, path.join(process.cwd(), 'demo'));
  }
};
