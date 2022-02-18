'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.writeCjsEntryFile = exports.safePackageName = void 0;
const fs_extra_1 = __importDefault(require('fs-extra'));
const path_1 = __importDefault(require('path'));
const paths_1 = require('../config/paths');
const safePackageName = (name) => name.toLowerCase().replace(/(^@.*\/)|((^[^a-zA-Z]+)|[^\w.-])|([^a-zA-Z0-9]+$)/g, '');
exports.safePackageName = safePackageName;
const writeCjsEntryFile = (name) => {
  const baseLine = `module.exports = require('./${(0, exports.safePackageName)(name)}`;
  const contents = `
  'use strict'
  
  if (process.env.NODE_ENV === 'production') {
    ${baseLine}.cjs.production.min.js')
  } else {
    ${baseLine}.cjs.development.js')
  }
  `;
  return fs_extra_1.default.outputFile(path_1.default.join(paths_1.paths.appBuild, 'cjs', 'index.js'), contents);
};
exports.writeCjsEntryFile = writeCjsEntryFile;
//# sourceMappingURL=helpers.js.map
