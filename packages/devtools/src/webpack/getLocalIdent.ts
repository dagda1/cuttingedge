/* eslint-disable @typescript-eslint/no-explicit-any */
import path from 'path';
import { sassModuleRegex } from './constants';
import { dasherize } from '../scripts/utils/string';

export type GetLocalIdent = (loaderContext: any, localIdentName: string, localName: string, options: any) => string;

export const getLocalIdent: GetLocalIdent = (loaderContext: any, _: string, localName: string, options: any) => {
  if (!options.context) {
    options.context =
      loaderContext.options && typeof loaderContext.options.context === 'string'
        ? loaderContext.options.context
        : loaderContext.context;
  }

  const request = path.relative(options.context, loaderContext.resourcePath).replace(sassModuleRegex, '');
  const prefix = dasherize(path.parse(request).name);

  return `${prefix}__${localName}`;
};
