'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.copyAssets = void 0;
const copy_1 = __importDefault(require('copy'));
const paths_1 = require('../config/paths');
const copyAssets = () => {
  const patterns = ['*.scss', '*.css', '*.png', '*.jpg', '*.md', '*.svg', '*.json', '*.html', '*.csv', 'config.js'].map(
    (pattern) => `${paths_1.paths.appSrc}/**/${pattern}`,
  );
  (0, copy_1.default)(patterns, paths_1.paths.appBuild, (err) => {
    if (err) {
      throw err;
    }
  });
};
exports.copyAssets = copyAssets;
//# sourceMappingURL=copy-assets.js.map
