import path from 'path';

const fileTransform = {
  process(src: string, filename: string) {
    return `module.exports = ${JSON.stringify(path.basename(filename))};`;
  },
};

module.exports = fileTransform;
