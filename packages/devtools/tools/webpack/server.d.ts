import { Configuration } from 'webpack';
import { ServerBuildConfig } from '../types/config';
import webpack from 'webpack';
export declare const getExternals: (isDevelopment: boolean) => webpack.ExternalsFunctionElement[];
export declare const configure: (options: ServerBuildConfig, overrides?: Partial<Configuration>) => Configuration;
//# sourceMappingURL=server.d.ts.map