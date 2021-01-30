"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var paths_1 = require("../config/paths");
var isDevelopment = process.env.NODE_ENV === 'development';
var isProduction = !isDevelopment;
var sassOptions = {
    sassOptions: {
        outputStyle: 'expanded',
        sourceMap: true,
        includePaths: [paths_1.paths.appSrc],
        minimize: isProduction,
    },
};
exports.default = sassOptions;
//# sourceMappingURL=sassOptions.js.map