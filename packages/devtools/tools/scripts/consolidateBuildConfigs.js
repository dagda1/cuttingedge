"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.consolidateBuildConfigs = void 0;
const fs_extra_1 = __importDefault(require("fs-extra"));
const paths_1 = require("../config/paths");
const deepmerge_1 = __importDefault(require("deepmerge"));
const build_config_1 = require("../config/build.config");
const consolidateBuildConfigs = () => {
    const localBuildConfig = fs_extra_1.default.existsSync(paths_1.paths.localBuildConfig) ? require(paths_1.paths.localBuildConfig) : {};
    return (0, deepmerge_1.default)(build_config_1.config, localBuildConfig);
};
exports.consolidateBuildConfigs = consolidateBuildConfigs;
//# sourceMappingURL=consolidateBuildConfigs.js.map