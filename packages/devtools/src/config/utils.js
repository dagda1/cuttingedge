import path from 'path';
import fs from 'fs-extra';

const MaxTries = 10;

export const findFile = (current: string, fileName: string, tries = 0): any => {
  const file = path.resolve(current, fileName);

  if (tries === MaxTries) {
    throw new Error(`cannot find ${fileName} in ${file}`);
  }

  if (fs.existsSync(file)) {
    return file;
  }

  return findFile(path.resolve(current, '..'), fileName, ++tries);
};
