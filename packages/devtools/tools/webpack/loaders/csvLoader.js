"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCSVLoader = void 0;
var createCSVLoader = function () { return ({
    test: /\.csv$/,
    loader: 'csv-loader',
    options: {
        header: true,
        skipEmptyLines: true,
    },
}); };
exports.createCSVLoader = createCSVLoader;
//# sourceMappingURL=csvLoader.js.map