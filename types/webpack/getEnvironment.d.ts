import { Env } from '../types/env';
declare const commitHash: string;
export declare const getEnvironment: () => {
  isDevelopment: boolean;
  staticAssetName: string;
  isAnalyse: boolean;
  isVerbose: boolean;
  isProduction: boolean;
  commitHash: string;
};
export declare const getEnvVariables: ({ isNode }: { isNode: boolean }) => {
  raw: Env;
  stringified: Partial<Env>;
};
export {};
//# sourceMappingURL=getEnvironment.d.ts.map
