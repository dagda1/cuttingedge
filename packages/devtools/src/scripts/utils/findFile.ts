import path from 'path';
import fs from 'fs';

const MaxTries = 10;

const findFile = (current: string, fileName: string, tries = 0): string => {
  const file = path.resolve(current, fileName);

  if (tries === MaxTries) {
    throw new Error(`cannot find ${fileName} in ${file}`);
  }

  if (fs.existsSync(file)) {
    return file;
  }

  return findFile(path.resolve(current, '..'), fileName, ++tries);
};

module.exports = {
  findFile,
};
