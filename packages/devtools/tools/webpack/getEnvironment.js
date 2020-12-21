"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEnvVariables = exports.getEnvironment = void 0;
var env_1 = require("../config/env");
var git_1 = require("../scripts/git");
var commitHash = git_1.getCommitHash();
var getEnvironment = function () {
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
        commitHash: commitHash,
    };
};
exports.getEnvironment = getEnvironment;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
var getEnvVariables = function (_a) {
    var isNode = _a.isNode;
    var isDevelopment = exports.getEnvironment().isDevelopment;
    delete require.cache[require.resolve('../config/env')];
    return env_1.getClientEnv(isNode ? 'node' : 'web', {}, {
        'process.env.NODE_ENV': isDevelopment ? JSON.stringify('development') : JSON.stringify('production'),
        __COMMIT__: commitHash,
        __DEV__: isDevelopment,
        __BROWSER__: !isNode,
        __SERVER__: isNode,
    });
};
exports.getEnvVariables = getEnvVariables;
//# sourceMappingURL=getEnvironment.js.map