import fs from 'fs-extra';
import path from 'path';
import { paths } from '../config/paths';

export const safePackageName = (name: string): string =>
  name.toLowerCase().replace(/(^@.*\/)|((^[^a-zA-Z]+)|[^\w.-])|([^a-zA-Z0-9]+$)/g, '');

export const writeCjsEntryFile = (name: string): Promise<void> => {
  const baseLine = `module.exports = require('./${safePackageName(name)}`;
  const contents = `
  'use strict'
  
  if (process.env.NODE_ENV === 'production') {
    ${baseLine}.cjs.production.min.js')
  } else {
    ${baseLine}.cjs.development.js')
  }
  `;

  return fs.outputFile(path.join(paths.appBuild, 'index.js'), contents);
};
