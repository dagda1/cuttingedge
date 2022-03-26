"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createInitialFiles = void 0;
// import fs from 'fs-extra';
// import path from 'path';
// import { paths } from '../config/paths';
const logger_1 = __importDefault(require("./logger"));
const args = process.argv.slice(3);
console.dir({ args });
const createInitialFiles = () => {
    logger_1.default.info('init files check...');
    // if (!fs.existsSync(paths.tsConfig)) {
    //   fs.copyFileSync(path.join(__dirname, '../../demo/tsconfig.json'), paths.tsConfig);
    //   logger.info('created tsconfig.json');
    // }
    // if (!fs.existsSync(paths.eslintConfig)) {
    //   logger.info('created eslintrc.json');
    //   fs.copyFileSync(path.join(__dirname, '../../typescript/.eslintrc.json'), path.join(paths.eslintConfig));
    // }
    // if (!fs.existsSync(paths.gitIgnore)) {
    //   fs.copyFileSync(path.join(__dirname, '../../init/.gitignore'), paths.gitIgnore);
    //   logger.info('created .gitignore');
    // }
    logger_1.default.info('init check finished');
};
exports.createInitialFiles = createInitialFiles;
//# sourceMappingURL=createInitialFiles.js.map