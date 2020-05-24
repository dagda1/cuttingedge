const path = require('path');
const fs = require('fs-extra');

const MaxTries = 10;

const findFile = (current, fileName, tries = 0) => {
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
