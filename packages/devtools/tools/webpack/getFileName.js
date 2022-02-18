'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.getFileName = void 0;
const getFileName = ({ fileType, isProduction }) => {
  const prefix = `static/${fileType}/`;
  // The client file mask is set to just name in start/dev mode as contenthash
  // is not supported for hot reloading. It can also cause non
  // deterministic snapshots in jest tests.
  if (!isProduction) {
    return `${prefix}[name]`;
  }
  // Production builds should contain contenthash for optimal file caching
  return `${prefix}[name]-[contenthash]`;
};
exports.getFileName = getFileName;
//# sourceMappingURL=getFileName.js.map
