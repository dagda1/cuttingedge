"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMDLoader = void 0;
var createMDLoader = function () { return ({
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
exports.createMDLoader = createMDLoader;
//# sourceMappingURL=mdLoader.js.map