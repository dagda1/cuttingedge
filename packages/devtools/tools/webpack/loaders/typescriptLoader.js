import { paths } from '../../config/paths.js';
import { createBabelConfig } from '../../scripts/createBabelConfig';
export const createTypescriptLoader = ({ isDevelopment, isNode, moduleFormat, }) => {
    const isProduction = !isDevelopment;
    const options = {
        silent: isDevelopment,
        configFile: isProduction ? paths.tsConfigProduction : paths.tsConfig,
        transpileOnly: isDevelopment,
        happyPackMode: isDevelopment,
        projectReferences: paths.projectReferences,
        compilerOptions: {},
        logLevel: 'WARN',
    };
    return [
        {
            test: /\.tsx?$/,
            exclude: /\/node_modules\//,
            use: [
                {
                    loader: 'babel-loader',
                    options: createBabelConfig({ isDevelopment, isProduction, isNode, moduleFormat }),
                },
                {
                    loader: 'ts-loader',
                    options,
                },
            ].filter(Boolean),
        },
    ];
};
//# sourceMappingURL=typescriptLoader.js.map