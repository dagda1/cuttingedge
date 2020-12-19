declare const commitHash: string;
export declare const getEnvironment: () => {
    isDevelopment: boolean;
    staticAssetName: string;
    isAnalyse: boolean;
    isVerbose: boolean;
    isProduction: boolean;
    commitHash: string;
};
export declare const getEnvVariables: ({ isNode }: {
    isNode: boolean;
}) => {
    raw: import("../types/env").Env;
    stringified: Partial<import("../types/env").Env>;
};
export {};
//# sourceMappingURL=getEnvironment.d.ts.map