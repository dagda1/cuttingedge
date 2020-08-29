"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMDLoader = void 0;
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
exports.createMDLoader = function () { return ({
    test: /\.md$/,
    use: [
        {
            loader: 'html-loader',
        },
        {
            loader: 'markdown-loader',
            options: {},
        },
    ],
}); };
//# sourceMappingURL=mdLoader.js.map