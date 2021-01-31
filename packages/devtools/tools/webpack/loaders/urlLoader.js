"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUrlLoader = void 0;
var createUrlLoader = function (_a) {
    var staticAssetName = _a.staticAssetName, isWeb = _a.isWeb;
    return ({
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.woff$/, /\.woff2$/, /\.eot$/, /\.eot$/, /\.ttf$/],
        loader: 'url-loader',
        options: { name: staticAssetName, limit: 10000, emitFile: isWeb },
    });
};
exports.createUrlLoader = createUrlLoader;
//# sourceMappingURL=urlLoader.js.map