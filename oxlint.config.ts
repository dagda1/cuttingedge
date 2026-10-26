import config from '@cutting/eslint-config/react';

export default {
  ...config,
  ignorePatterns: [...config.ignorePatterns, 'packages/devtools/tools', 'packages/performance-scout/tools'],
};
