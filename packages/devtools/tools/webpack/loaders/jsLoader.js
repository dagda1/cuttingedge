"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createJsLoader = void 0;
exports.createJsLoader = function () { return ({
    test: /\.(js|jsx|mjs)$/,
    exclude: /\/node_modules\/core-js\//,
    use: [
        {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                cacheDirectory: true,
            },
        },
    ],
}); };
//# sourceMappingURL=jsLoader.js.map