'use strict';

const paths = require('./paths');
const fs = require('fs');
const path = require('path');

// Make sure that including paths.js after env.js will read .env variables.
delete require.cache[require.resolve('./paths')];

const NODE_ENV = process.env.NODE_ENV;
if (!NODE_ENV) {
  throw new Error('The NODE_ENV environment variable is required but was not specified.');
}

// https://github.com/bkeepers/dotenv#what-other-env-files-can-i-use
var dotenvFiles = [
  `${paths.dotenv}.${NODE_ENV}.local`,
  `${paths.dotenv}.${NODE_ENV}`,
  `${paths.dotenv}.local`,
  paths.dotenv
];
// Load environment variables from .env* files. Suppress warnings using silent
// if this file is missing. dotenv will never modify any environment variables
// that have already been set.
// https://github.com/motdotla/dotenv
dotenvFiles.forEach(dotenvFile => {
  if (fs.existsSync(dotenvFile)) {
    require('dotenv').config({
      path: dotenvFile
    });
  }
});

const appDirectory = fs.realpathSync(process.cwd());
const nodePath = (process.env.NODE_PATH || '')
  .split(path.delimiter)
  .filter(folder => folder && !path.isAbsolute(folder))
  .map(folder => path.resolve(appDirectory, folder))
  .join(path.delimiter);

// Grab NODE_ENV and C2_* environment variables and prepare them to be
// injected into the application via DefinePlugin in Webpack configuration.
const CUTTING = /^CUTTING_/i;

function getClientEnvironment(target, options = {}, additional = {}) {
  const raw = Object.keys(process.env)
    .filter(key => CUTTING.test(key))
    .reduce(
      (env, key) => {
        env[key] = process.env[key];
        return env;
      },
      Object.assign(
        {},
        {
          // Useful for determining whether we’re running in production mode.
          // Most importantly, it switches React into the correct mode.
          NODE_ENV: process.env.NODE_ENV || 'development',
          VERBOSE: !!process.env.VERBOSE,
          HOST: process.env.HOST || options.host || 'localhost',
          BUILD_TARGET: target === 'web' ? 'client' : 'server',
          C2_ASSETS_MANIFEST: paths.appManifest,
          // only for production builds. Useful if you need to serve from a CDN
          PUBLIC_PATH: process.env.PUBLIC_PATH || '/',
          // The public dir changes between dev and prod, so we use an environment
          // variable available to users.
          C2_PUBLIC_DIR: process.env.NODE_ENV === 'production' ? paths.appBuildPublic : paths.appPublic,
          CI: process.env.CI,
          PUBLIC_URL: ''
        },
        additional
      )
    );

  if (process.env.NODE_ENV === 'development') {
    raw.PORT = Number(process.env.PORT);
  }

  // Stringify all values so we can feed into Webpack DefinePlugin
  const stringified = Object.keys(raw).reduce((env, key) => {
    if (['__DEV__', '__BROWSER__'].includes(key)) {
      env[key] = JSON.stringify(raw[key]);
    } else {
      env[`process.env.${key}`] = JSON.stringify(raw[key]);
    }

    return env;
  }, {});

  return { raw, stringified };
}

module.exports = {
  getClientEnv: getClientEnvironment,
  nodePath: nodePath
};
