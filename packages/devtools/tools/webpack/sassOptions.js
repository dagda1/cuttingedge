'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.sassOptions = void 0;
const paths_1 = require('../config/paths');
const isDevelopment = process.env.NODE_ENV === 'development';
const isProduction = !isDevelopment;
exports.sassOptions = {
  sassOptions: {
    outputStyle: 'expanded',
    sourceMap: true,
    includePaths: [paths_1.paths.appSrc],
    minimize: isProduction,
  },
};
//# sourceMappingURL=sassOptions.js.map
