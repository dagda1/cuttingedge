export const getEnvironment = (): {
  isDevelopment: boolean;
  staticAssetName: string;
  isAnalyse: boolean;
  isVerbose: boolean;
  isProduction: boolean;
} => {
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
  };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getEnvVariables = ({ isNode }: { isNode: boolean }): any => {
  const { isDevelopment } = getEnvironment();
  delete require.cache[require.resolve('../config/env')];

  const { getClientEnv } = require('../config/env');

  return getClientEnv(
    isNode ? 'node' : 'web',
    {},
    {
      'process.env.NODE_ENV': isDevelopment ? JSON.stringify('development') : JSON.stringify('production'),
      __DEV__: isDevelopment,
      __BROWSER__: !isNode,
    },
  );
};
