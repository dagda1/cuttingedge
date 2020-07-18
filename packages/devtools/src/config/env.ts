import { paths } from './paths';
import path from 'path';
import fs from 'fs';
import { Env } from '../types/env';

delete require.cache[require.resolve('./paths')];

const NODE_ENV = process.env.NODE_ENV;
if (!NODE_ENV) {
  throw new Error('The NODE_ENV environment variable is required but was not specified.');
}

const dotenvFiles = [
  `${paths.dotenv}.${NODE_ENV}.local`,
  `${paths.dotenv}.${NODE_ENV}`,
  `${paths.dotenv}.local`,
  paths.dotenv,
];

dotenvFiles.forEach((dotenvFile) => {
  if (fs.existsSync(dotenvFile)) {
    require('dotenv').config({
      path: dotenvFile,
    });
  }
});

const appDirectory = fs.realpathSync(process.cwd());
export const nodePath = (process.env.NODE_PATH || '')
  .split(path.delimiter)
  .filter((folder) => folder && !path.isAbsolute(folder))
  .map((folder) => path.resolve(appDirectory, folder))
  .join(path.delimiter);

export function getClientEnv(target = 'web', options: any = {}, additional = {}) {
  const raw: Env = Object.keys(process.env).reduce(
    (env: Env, key) => {
      env[key] = process.env[key];
      return env;
    },
    Object.assign(
      {},
      {
        NODE_ENV: process.env.NODE_ENV || 'development',
        VERBOSE: !!process.env.VERBOSE,
        HOST: process.env.HOST || options.host || 'localhost',
        BUILD_TARGET: target === 'web' ? 'client' : 'server',
        PUBLIC_PATH: process.env.PUBLIC_PATH || '/',
        CI: !!process.env.CI,
        PUBLIC_URL: options.publicUrl || '',
        WDS_SOCKET_HOST: process.env.WDS_SOCKET_HOST,
        WDS_SOCKET_PATH: process.env.WDS_SOCKET_PATH,
        WDS_SOCKET_PORT: process.env.WDS_SOCKET_PORT,
        FAST_REFRESH: !!process.env.FAST_REFRESH,
        nodePath,
        PORT: 0,
      },
      additional,
    ),
  );

  if (process.env.NODE_ENV === 'development') {
    raw.PORT = Number(process.env.PORT);
  }

  // Stringify all values so we can feed into Webpack DefinePlugin
  const stringified = Object.keys(raw).reduce((env: Partial<Env>, key) => {
    if (['__DEV__', '__BROWSER__'].includes(key)) {
      env[key] = JSON.stringify(raw[key]);
    } else {
      env[`process.env.${key}`] = JSON.stringify(raw[key]);
    }

    return env;
  }, {});

  return { raw, stringified };
}
