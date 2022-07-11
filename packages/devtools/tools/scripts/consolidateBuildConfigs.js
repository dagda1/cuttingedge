import fs from 'fs-extra';
import { paths } from '../config/paths.js';
import merge from 'deepmerge';
import { config as globalBuildConfig } from '../config/build.config';
export const consolidateBuildConfigs = () => {
    const localBuildConfig = fs.existsSync(paths.localBuildConfig) ? require(paths.localBuildConfig) : {};
    return merge(globalBuildConfig, localBuildConfig);
};
//# sourceMappingURL=consolidateBuildConfigs.js.map