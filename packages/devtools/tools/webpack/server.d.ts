import { Configuration } from 'webpack';
import { ServerBuildConfig } from '../types/config';
import webpack from 'webpack';
import type { DeepPartial } from '@cutting/util';
export declare const getExternals: (isDevelopment: boolean) => webpack.ExternalsFunctionElement[];
export declare const configure: (options: ServerBuildConfig, overrides?: DeepPartial<Configuration>) => Configuration;
//# sourceMappingURL=server.d.ts.map