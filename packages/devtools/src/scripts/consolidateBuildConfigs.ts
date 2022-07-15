import type { BuildConfig } from '../types/config';
import fs from 'fs-extra';
import { paths } from '../config/paths.js';
import merge from 'deepmerge';
import { config as globalBuildConfig } from '../config/build.config.js';

const localBuildConfig: BuildConfig = fs.existsSync(paths.localBuildConfig)
  ? await import(paths.localBuildConfig).then((m) => m.default)
  : {};

export const consolidateBuildConfigs = (): BuildConfig => {
  return merge(globalBuildConfig, localBuildConfig);
};
