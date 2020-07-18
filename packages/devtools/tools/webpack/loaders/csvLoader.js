"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCSVLoader = void 0;
exports.createCSVLoader = function () { return ({
    test: /\.csv$/,
    loader: 'csv-loader',
    options: {
        header: true,
        skipEmptyLines: true,
    },
}); };
//# sourceMappingURL=csvLoader.js.map