'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.getClientEnv = exports.nodePath = void 0;
const path_1 = __importDefault(require('path'));
const fs_1 = __importDefault(require('fs'));
delete require.cache[require.resolve('./paths')];
const NODE_ENV = process.env.NODE_ENV;
if (!NODE_ENV) {
  throw new Error('The NODE_ENV environment variable is required but was not specified.');
}
const appDirectory = fs_1.default.realpathSync(process.cwd());
exports.nodePath = (process.env.NODE_PATH || '')
  .split(path_1.default.delimiter)
  .filter((folder) => folder && !path_1.default.isAbsolute(folder))
  .map((folder) => path_1.default.resolve(appDirectory, folder))
  .join(path_1.default.delimiter);
function getClientEnv(target = 'web', options = {}, additional = {}) {
  const raw = Object.assign(
    {
      NODE_ENV: process.env.NODE_ENV || 'development',
      VERBOSE: !!process.env.VERBOSE,
      HOST: process.env.HOST || options.host || 'localhost',
      BUILD_TARGET: target === 'web' ? 'client' : 'server',
      PUBLIC_PATH: process.env.PUBLIC_PATH || '/',
      CI: !!process.env.CI,
      PUBLIC_URL: options.publicUrl || '',
      nodePath: exports.nodePath,
    },
    additional,
  );
  // Stringify all values so we can feed into Webpack DefinePlugin
  const stringified = Object.keys(raw).reduce((env, key) => {
    if (['__DEV__', '__BROWSER__', '__COMMIT__'].includes(key)) {
      env[key] = JSON.stringify(raw[key]);
    } else {
      env[`process.env.${key}`] = JSON.stringify(raw[key]);
    }
    return env;
  }, {});
  return { raw, stringified };
}
exports.getClientEnv = getClientEnv;
//# sourceMappingURL=env.js.map
