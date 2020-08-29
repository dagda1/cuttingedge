"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSVGLoader = void 0;
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
exports.createSVGLoader = function () { return ({
    test: /\.svg/,
    use: {
        loader: 'svg-url-loader',
        options: {},
    },
}); };
//# sourceMappingURL=svgLoader.js.map