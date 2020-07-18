import { CompilerOptions } from 'typescript';
import { ProxyConfigMap } from 'webpack-dev-server';

export type DeepPartial<T> = T extends object ? { [K in keyof T]?: DeepPartial<T[K]> } : T;

export type PickDeepPartial<T, K extends keyof T> = Omit<T, K> & DeepPartial<Pick<T, K>>;

export type OmitDeepPartial<T, K extends keyof T> = Pick<T, K> & DeepPartial<Omit<T, K>>;

export interface FullBuildConfig {
  client: {
    entries: string | string[];
    hotReloading: boolean;
    publicPath: string;
  };
  server: {
    entries: string;
    filename: string;
    bail: boolean;
    progress: boolean;
    isNode: true;
  };
  ts: {
    tsconfig: string;
    src: string[];
    options: CompilerOptions;
  };
  node: {
    entries: string;
    filename: string;
    externals: string[];
  };
  devServer: {
    entries: string;
    devServer: boolean;
    isStaticBuild: boolean;
    publicDir: string;
    publicPath: string;
    typescriptOptions: CompilerOptions;
    proxy: ProxyConfigMap;
    isNode?: boolean;
    isWeb?: boolean;
    publicUrl?: string;
  };
}

export type BuildConfig = OmitDeepPartial<FullBuildConfig, 'client'>;

export type ClientBuildConfig = Pick<FullBuildConfig, 'client'>['client'];
export type ServerBuildConfig = Pick<FullBuildConfig, 'server'>['server'];
export type NodeBuildConfig = Pick<FullBuildConfig, 'node'>['node'];
export type DevServerConfig = Pick<FullBuildConfig, 'devServer'>['devServer'];
