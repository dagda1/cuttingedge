"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFileLoader = void 0;
var createFileLoader = function (_a) {
    var staticAssetName = _a.staticAssetName, isWeb = _a.isWeb;
    return ({
        exclude: [
            /\.html$/,
            /\.jsx?$/,
            /\.jsx?$/,
            /\.tsx?$/,
            /\.css$/,
            /\.json$/,
            /\.bmp$/,
            /\.gif$/,
            /\.jpe?g$/,
            /\.png$/,
            /\.scss$/,
            /\.woff2?$/,
            /\.eot$/,
            /\.ttf$/,
            /\.svg$/,
            /\.csv$/,
            /\.md$/,
            /\.js$/,
            /\.mjs$/,
            /\.cjs$/,
        ],
        loader: 'file-loader',
        options: { name: staticAssetName, emitFile: isWeb },
    });
};
exports.createFileLoader = createFileLoader;
//# sourceMappingURL=fileLoader.js.map