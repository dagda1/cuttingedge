import path from 'path';

const createExport = (filename: string) =>
  `
    if (typeof module === 'object' && module) {
        Object.defineProperty(exports, "__esModule", {
          value: true
      });
        module.exports = ${JSON.stringify(path.basename(filename))}
    } else {
      Object.defineProperty(exports, "__esModule", {
          value: true
      });
      exports.default = ${JSON.stringify(path.basename(filename))};
    }
`
    .trim()
    .replace(/^\s{4}/g, '');

export const process = (src: string, filename: string): string => {
  const exp = createExport(filename);

  return exp;
};
