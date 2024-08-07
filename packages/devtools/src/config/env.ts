import fs from 'fs';
import path from 'path';

import type { Env } from '../types/env.js';

const NODE_ENV = process.env.NODE_ENV;
if (!NODE_ENV) {
  throw new Error('The NODE_ENV environment variable is required but was not specified.');
}

const appDirectory = fs.realpathSync(process.cwd());

export const nodePath = (process.env.NODE_PATH || '')
  .split(path.delimiter)
  .filter((folder) => folder && !path.isAbsolute(folder))
  .map((folder) => path.resolve(appDirectory, folder))
  .join(path.delimiter);

export function getClientEnv(
  target = 'web',
  options: Partial<Env> = {},
  additional = {},
): {
  raw: Env;
  stringified: Partial<Env>;
} {
  const raw: Env = {
    ...{
      NODE_ENV: process.env.NODE_ENV || 'development',
      VERBOSE: !!process.env.VERBOSE,
      HOST: process.env.HOST || options.host || 'localhost',
      BUILD_TARGET: target === 'web' ? 'client' : 'server',
      PUBLIC_PATH: process.env.PUBLIC_PATH || '/',
      CI: !!process.env.CI,
      PUBLIC_URL: options.publicUrl || '',
      nodePath,
    },
    ...additional,
  };

  // Stringify all values so we can feed into Webpack DefinePlugin
  const stringified = Object.keys(raw).reduce((env: Partial<Env>, key) => {
    if (['__DEV__', '__BROWSER__', '__COMMIT__'].includes(key)) {
      env[key] = JSON.stringify(raw[key]);
    } else {
      env[`process.env.${key}`] = JSON.stringify(raw[key]);
    }

    return env;
  }, {});

  return { raw, stringified };
}
