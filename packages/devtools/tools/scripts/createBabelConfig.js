"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBabelConfig = exports.createBabelPresets = void 0;
// import { getCacheIdentifier } from '../webpack/loaders/getCacheIdentifier';
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
var createBabelPresets = function (_a) {
    var isDevelopment = _a.isDevelopment, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    isProduction = _a.isProduction, isNode = _a.isNode, moduleFormat = _a.moduleFormat;
    var presetOptions = {
        exclude: ['transform-typeof-symbol'],
        modules: moduleFormat === 'esm' ? false : 'auto',
    };
    if (isNode) {
        presetOptions.targets = { node: '12' };
    }
    else {
        presetOptions.useBuiltIns = 'entry';
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
        ['@babel/preset-env', __assign({}, presetOptions)],
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
var createBabelConfig = function (_a) {
    var isDevelopment = _a.isDevelopment, isProduction = _a.isProduction, isNode = _a.isNode, moduleFormat = _a.moduleFormat;
    var hot = isDevelopment && !isNode;
    return {
        babelrc: false,
        configFile: false,
        presets: exports.createBabelPresets({ isDevelopment: isDevelopment, isProduction: isProduction, isNode: isNode, moduleFormat: moduleFormat }),
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
            hot && require.resolve('react-refresh/babel'),
        ].filter(Boolean),
    };
};
exports.createBabelConfig = createBabelConfig;
//# sourceMappingURL=createBabelConfig.js.map