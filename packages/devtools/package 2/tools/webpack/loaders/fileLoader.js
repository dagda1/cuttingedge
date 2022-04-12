"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFileLoader = void 0;
const createFileLoader = ({ staticAssetName, isWeb, }) => ({
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
exports.createFileLoader = createFileLoader;
//# sourceMappingURL=fileLoader.js.map