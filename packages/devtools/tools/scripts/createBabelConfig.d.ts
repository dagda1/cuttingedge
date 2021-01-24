import { Options as RuntimeOptions } from '@babel/plugin-transform-runtime';
import { ModuleFormat } from '../types/moduleFormat';
export declare const createBabelPresets: ({ isDevelopment, isProduction, isNode, moduleFormat, }: {
    isDevelopment: boolean;
    isProduction: boolean;
    isNode: boolean;
    moduleFormat: ModuleFormat;
}) => any[][];
export declare const createBabelConfig: ({ isDevelopment, isProduction, isNode, moduleFormat, }: {
    isDevelopment: boolean;
    isProduction: boolean;
    isNode: boolean;
    moduleFormat: ModuleFormat;
}) => {
    babelrc: boolean;
    configFile: boolean;
    presets: any[][];
    cacheDirectory: boolean;
    cacheIdentifier: string;
    sourceType: string;
    plugins: (string | false | (string | RuntimeOptions)[] | (string | {
        loose: boolean;
    })[] | (string | {
        legacy: boolean;
    })[])[];
};
//# sourceMappingURL=createBabelConfig.d.ts.map