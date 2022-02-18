'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.csv = void 0;
const pluginutils_1 = require('@rollup/pluginutils');
const papaparse_1 = __importDefault(require('papaparse'));
const csv = () => {
  const filter = (0, pluginutils_1.createFilter)('**/*.csv');
  return {
    name: 'csv',
    transform(code, id) {
      if (!filter(id)) {
        return null;
      }
      const parsed = papaparse_1.default.parse(code, {
        header: true,
        skipEmptyLines: true,
      });
      return {
        code: `export default ${JSON.stringify(parsed.data)};`,
        map: { mappings: '' },
      };
    },
  };
};
exports.csv = csv;
//# sourceMappingURL=csv.js.map
