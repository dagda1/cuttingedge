import path from 'path';
const createExport = (filename) => `
    if (typeof module === 'object' && module) {
        Object.defineProperty(exports, "__esModule", {
          value: true
      });
        export default ${JSON.stringify(path.basename(filename))}
    } else {
      Object.defineProperty(exports, "__esModule", {
          value: true
      });
      exports.default = ${JSON.stringify(path.basename(filename))};
    }
`
    .trim()
    .replace(/^\s{4}/g, '');
export const process = (src, filename) => {
    const exp = createExport(filename);
    return exp;
};
export default { process };
//# sourceMappingURL=fileTransform.js.map