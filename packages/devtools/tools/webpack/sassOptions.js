"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sassOptions = void 0;
var paths_1 = require("../config/paths");
var isDevelopment = process.env.NODE_ENV === "development";
var isProduction = !isDevelopment;
exports.sassOptions = {
  sassOptions: {
    outputStyle: "expanded",
    sourceMap: true,
    includePaths: [paths_1.paths.appSrc],
    minimize: isProduction,
  },
};
//# sourceMappingURL=sassOptions.js.map
