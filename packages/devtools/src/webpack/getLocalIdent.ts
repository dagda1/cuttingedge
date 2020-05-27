import path from 'path';
import { sassModuleRegex } from './constants';

export type GetLocalIdent = (loaderContext: any, localIdentName: string, localName: string, options: any) => string;

const decamelize = (str: string) => str.replace(/([a-z\d])([A-Z])/g, '$1_$2').toLowerCase();

const dasherize = (str: string) => decamelize(str).replace(/[ _]/g, '-');

const getLocalIdent: GetLocalIdent = (loaderContext: any, localIdentName: string, localName: string, options: any) => {
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

export default getLocalIdent;
