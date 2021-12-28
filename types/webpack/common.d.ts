import { DevServerConfig, ServerBuildConfig, NodeBuildConfig } from '../types/config';
import { Configuration } from 'webpack';
export declare const configureCommon: (
  options: DevServerConfig | ServerBuildConfig | NodeBuildConfig,
  overrides: Partial<Configuration>,
) => Configuration;
//# sourceMappingURL=common.d.ts.map
