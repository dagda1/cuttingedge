import { CompilerOptions } from 'typescript';
import { ProxyConfigMap } from 'webpack-dev-server';
export interface BuildConfig {
  client: {
    entries: string | string[];
    hotReloading: boolean;
    isNode: false;
  };
  server: {
    entries: string | string[];
    filename: string;
    bail: boolean;
    ssrBuild: true;
    isNode: true;
  };
  ts: {
    tsconfig: string;
    src: string[];
    options: CompilerOptions;
  };
  node: {
    entries: string | string[];
    filename: string;
    externals: string[];
    modulesDir: string;
    isNode: true;
    hasShebang?: boolean;
  };
  devServer: {
    entries: string | string[] | Record<string, string | string[]>;
    devServer: boolean;
    isStaticBuild: boolean;
    publicDir: string;
    proxy?: ProxyConfigMap;
    isNode?: boolean;
    isWeb?: boolean;
    publicUrl?: string;
  };
}
export declare type ClientBuildConfig = Pick<BuildConfig, 'client'>['client'];
export declare type ServerBuildConfig = Pick<BuildConfig, 'server'>['server'];
export declare type NodeBuildConfig = Pick<BuildConfig, 'node'>['node'];
export declare type DevServerConfig = Pick<BuildConfig, 'devServer'>['devServer'];
//# sourceMappingURL=config.d.ts.map
