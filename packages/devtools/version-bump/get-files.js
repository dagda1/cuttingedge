const fs = require('fs');
const path = require('path');

const getFiles = (dir, filename) =>
  fs.readdirSync(dir).reduce((files, file) => {
    const name = path.join(dir, file);
    const isDirectory = fs.statSync(name).isDirectory();

    if (!isDirectory) {
      return name.includes(filename) ? [...files, name] : files;
    }

    if (name.includes('node_modules')) {
      return files;
    }

    return [...files, ...getFiles(name, filename)];
  }, []);

module.exports = getFiles;
