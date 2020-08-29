"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUrlLoader = void 0;
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
exports.createUrlLoader = function (_a) {
    var staticAssetName = _a.staticAssetName, isWeb = _a.isWeb;
    return ({
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.woff$/, /\.woff2$/, /\.eot$/, /\.eot$/, /\.ttf$/],
        loader: 'url-loader',
        options: { name: staticAssetName, limit: 10000, emitFile: isWeb },
    });
};
//# sourceMappingURL=urlLoader.js.map