"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createInitialFiles = void 0;
const fs_extra_1 = __importDefault(require("fs-extra"));
const path_1 = __importDefault(require("path"));
const paths_1 = require("../config/paths");
const logger_1 = __importDefault(require("./logger"));
const args = process.argv.slice(3);
console.dir({ args });
const createInitialFiles = () => {
    logger_1.default.info('init files check...');
    if (!fs_extra_1.default.existsSync(paths_1.paths.tsConfig)) {
        fs_extra_1.default.copyFileSync(path_1.default.join(__dirname, '../../demo/tsconfig.json'), paths_1.paths.tsConfig);
        logger_1.default.info('created tsconfig.json');
    }
    if (!fs_extra_1.default.existsSync(paths_1.paths.eslintConfig)) {
        logger_1.default.info('created eslintrc.json');
        fs_extra_1.default.copyFileSync(path_1.default.join(__dirname, '../../typescript/.eslintrc.json'), path_1.default.join(paths_1.paths.eslintConfig));
    }
    if (!fs_extra_1.default.existsSync(paths_1.paths.gitIgnore)) {
        fs_extra_1.default.copyFileSync(path_1.default.join(__dirname, '../../init/.gitignore'), paths_1.paths.gitIgnore);
        logger_1.default.info('created .gitignore');
    }
    logger_1.default.info('init check finished');
};
exports.createInitialFiles = createInitialFiles;
//# sourceMappingURL=createInitialFiles.js.map