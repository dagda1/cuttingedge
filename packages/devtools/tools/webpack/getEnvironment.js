"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEnvVariables = exports.getEnvironment = void 0;
exports.getEnvironment = function () {
    var isDevelopment = process.env.NODE_ENV !== 'production';
    var isProduction = process.env.NODE_ENV === 'production';
    var staticAssetName = isDevelopment ? '[path][name].[ext]?[hash:8]' : 'static/media/[hash:8].[ext]';
    var isAnalyse = process.argv.includes('--analyze') || process.argv.includes('--analyse');
    var isVerbose = process.argv.includes('--verbose');
    return {
        isDevelopment: isDevelopment,
        staticAssetName: staticAssetName,
        isAnalyse: isAnalyse,
        isVerbose: isVerbose,
        isProduction: isProduction,
    };
};
exports.getEnvVariables = function (_a) {
    var isNode = _a.isNode;
    var isDevelopment = exports.getEnvironment().isDevelopment;
    delete require.cache[require.resolve('../config/env')];
    var getClientEnv = require('../config/env').getClientEnv;
    return getClientEnv(isNode ? 'node' : 'web', {}, {
        'process.env.NODE_ENV': isDevelopment ? JSON.stringify('development') : JSON.stringify('production'),
        __DEV__: isDevelopment,
        __BROWSER__: !isNode,
    });
};
//# sourceMappingURL=getEnvironment.js.map