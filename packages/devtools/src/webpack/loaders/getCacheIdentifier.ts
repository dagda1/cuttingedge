import { ModuleFormat } from 'rollup';

export const getCacheIdentifier = ({
  isDevelopment,
  moduleFormat,
  isNode,
}: {
  isDevelopment: boolean;
  moduleFormat: ModuleFormat;
  isNode: boolean;
}): string => {
  return [isDevelopment ? 'development' : 'production', isNode ? 'node' : 'web', moduleFormat].join('-');
};
