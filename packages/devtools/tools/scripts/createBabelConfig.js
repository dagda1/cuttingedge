"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBabelConfig = exports.createBabelPresets = void 0;
// import { getCacheIdentifier } from '../webpack/loaders/getCacheIdentifier';
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const createBabelPresets = ({ isDevelopment, 
// eslint-disable-next-line @typescript-eslint/no-unused-vars
isProduction, isNode, moduleFormat, }) => {
    const presetOptions = {
        exclude: ['transform-typeof-symbol'],
        modules: moduleFormat === 'esm' ? false : 'auto',
        useBuiltIns: 'usage',
        corejs: 3,
    };
    if (isNode) {
        presetOptions.targets = { node: '16' };
    }
    else {
        presetOptions.corejs = 3;
        presetOptions.targets = {
            edge: '17',
            firefox: '60',
            chrome: '67',
            safari: '11.1',
            ie: '11',
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        };
    }
    return [
        ['@babel/preset-env', Object.assign({}, presetOptions)],
        [
            require('@babel/preset-react').default,
            {
                development: isDevelopment,
                useBuiltIns: isDevelopment,
            },
        ],
    ];
};
exports.createBabelPresets = createBabelPresets;
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const createBabelConfig = ({ isDevelopment, isProduction, isNode, moduleFormat, }) => {
    const hot = isDevelopment && !isNode;
    return {
        babelrc: false,
        configFile: false,
        presets: (0, exports.createBabelPresets)({ isDevelopment, isProduction, isNode, moduleFormat }),
        // cacheDirectory: true,
        // cacheIdentifier: getCacheIdentifier({ isDevelopment, isNode, moduleFormat }),
        sourceType: 'unambiguous',
        plugins: [
            'babel-plugin-macros',
            'babel-plugin-annotate-pure-calls',
            'babel-plugin-dev-expression',
            [
                '@babel/plugin-proposal-class-properties',
                {
                    loose: true,
                },
            ],
            ['@babel/plugin-proposal-decorators', { legacy: true }],
            ['@babel/plugin-proposal-private-methods', { loose: true }],
            ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
            '@babel/plugin-proposal-numeric-separator',
            [
                '@babel/plugin-transform-runtime',
                {
                    corejs: false,
                    helpers: true,
                    version: require('@babel/runtime/package.json').version,
                    regenerator: true,
                    useESModules: moduleFormat === 'esm',
                },
            ],
            '@babel/plugin-syntax-dynamic-import',
            '@loadable/babel-plugin',
            '@babel/plugin-proposal-optional-chaining',
            '@babel/plugin-proposal-nullish-coalescing-operator',
            '@vanilla-extract/babel-plugin',
            hot && require.resolve('react-refresh/babel'),
        ].filter(Boolean),
    };
};
exports.createBabelConfig = createBabelConfig;
//# sourceMappingURL=createBabelConfig.js.map