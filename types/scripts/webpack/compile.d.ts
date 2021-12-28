import { Configuration, Stats } from 'webpack';
import { BuildType } from '../../types/build';
export declare const compile: (
  config: Configuration,
  buildType: BuildType,
) => Promise<{
  stats: Stats;
}>;
//# sourceMappingURL=compile.d.ts.map
