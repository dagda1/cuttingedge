'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.getEnvVariables = exports.getEnvironment = void 0;
const env_1 = require('../config/env');
const git_1 = require('../scripts/git');
const commitHash = (0, git_1.getCommitHash)();
const getEnvironment = () => {
  const isDevelopment = process.env.NODE_ENV !== 'production';
  const isProduction = process.env.NODE_ENV === 'production';
  const staticAssetName = isDevelopment ? '[path][name].[ext]?[hash:8]' : 'static/media/[hash:8].[ext]';
  const isAnalyse = process.argv.includes('--analyze') || process.argv.includes('--analyse');
  const isVerbose = process.argv.includes('--verbose');
  return {
    isDevelopment,
    staticAssetName,
    isAnalyse,
    isVerbose,
    isProduction,
    commitHash,
  };
};
exports.getEnvironment = getEnvironment;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getEnvVariables = ({ isNode }) => {
  const { isDevelopment } = (0, exports.getEnvironment)();
  delete require.cache[require.resolve('../config/env')];
  return (0, env_1.getClientEnv)(
    isNode ? 'node' : 'web',
    {},
    {
      'process.env.NODE_ENV': isDevelopment ? JSON.stringify('development') : JSON.stringify('production'),
      __COMMIT__: commitHash,
      __DEV__: isDevelopment,
      __BROWSER__: !isNode,
      __SERVER__: isNode,
    },
  );
};
exports.getEnvVariables = getEnvVariables;
//# sourceMappingURL=getEnvironment.js.map
