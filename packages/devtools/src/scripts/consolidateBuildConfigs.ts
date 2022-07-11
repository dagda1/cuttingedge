import type { BuildConfig } from '../types/config';
import fs from 'fs-extra';
import { paths } from '../config/paths.js';
import merge from 'deepmerge';
import { config as globalBuildConfig } from '../config/build.config';
import { readFile } from 'fs/promises';

const localBuildConfig: BuildConfig = fs.existsSync(paths.localBuildConfig)
  ? JSON.parse(await readFile(paths.localBuildConfig, 'utf-8'))
  : {};

export const consolidateBuildConfigs = (): BuildConfig => {
  return merge(globalBuildConfig, localBuildConfig);
};
