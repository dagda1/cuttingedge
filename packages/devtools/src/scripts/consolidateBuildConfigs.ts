import type { BuildConfig } from '../types/config';
import fs from 'fs-extra';
import { paths } from '../config/paths';
import merge from 'deepmerge';
import { config as globalBuildConfig } from '../config/build.config';

export const consolidateBuildConfigs = (): BuildConfig => {
  const localBuildConfig: BuildConfig = fs.existsSync(paths.localBuildConfig) ? require(paths.localBuildConfig) : {};

  return merge(globalBuildConfig, localBuildConfig);
};
