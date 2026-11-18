import { join } from 'node:path';

import { defineConfig, mergeConfig } from 'vitest/config';

import baseConfig from './vitest.config';

export default mergeConfig(
  baseConfig,
  defineConfig({
    resolve: {
      alias: { '~': join(import.meta.dirname, 'src') },
    },
  }),
);
