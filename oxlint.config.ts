import config from '@cutting/oxc-config/react';

export default {
  ...config,
  ignorePatterns: [...config.ignorePatterns, 'packages/devtools/tools', 'packages/performance-scout/tools'],
};
