"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.copyAssets = void 0;
var copy_1 = __importDefault(require("copy"));
var paths_1 = require("../config/paths");
exports.copyAssets = function () {
    var patterns = ['*.scss', '*.css', '*.png', '*.jpg', '*.md', '*.svg', '*.json', '*.html', '*.csv', 'config.js'].map(function (pattern) { return paths_1.paths.appSrc + "/**/" + pattern; });
    copy_1.default(patterns, paths_1.paths.appBuild, function (err) {
        if (err) {
            throw err;
        }
    });
};
//# sourceMappingURL=copy-assets.js.map