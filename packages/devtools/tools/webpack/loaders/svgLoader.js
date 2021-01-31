"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSVGLoader = void 0;
var createSVGLoader = function () { return ({
    test: /\.svg/,
    use: {
        loader: 'svg-url-loader',
        options: {},
    },
}); };
exports.createSVGLoader = createSVGLoader;
//# sourceMappingURL=svgLoader.js.map