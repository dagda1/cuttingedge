"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.scaffold = void 0;
const inquirer_1 = __importDefault(require("inquirer"));
const path_1 = __importDefault(require("path"));
const paths_1 = require("../config/paths");
const createInitialFiles_1 = require("./createInitialFiles");
const fs_extra_1 = __importDefault(require("fs-extra"));
const logger_1 = __importDefault(require("./logger"));
const applicationType_1 = require("../types/applicationType");
const appSource = {
    [applicationType_1.ApplicationType.WebApp]: '../../demo',
    [applicationType_1.ApplicationType.package]: '../../demo',
    [applicationType_1.ApplicationType.cli]: '../../cli',
};
function scaffold() {
    return __awaiter(this, void 0, void 0, function* () {
        if ([paths_1.paths.appPublic, paths_1.paths.devDirPublic].some((dir) => {
            if (fs_extra_1.default.existsSync(dir)) {
                logger_1.default.info(`${dir} exists, aborting scaffold.`);
                return true;
            }
            return false;
        })) {
            return;
        }
        const { value } = yield inquirer_1.default.prompt({
            type: 'number',
            name: 'value',
            message: `What am I creating:
    
    1.  A web app
    2.  A package
    3.  A CLI app
    `,
        });
        if (!value) {
            throw new Error('No application type has been made.');
        }
        const applicationType = value;
        if (applicationType !== applicationType_1.ApplicationType.cli) {
            (0, createInitialFiles_1.createInitialFiles)(applicationType);
        }
        const source = path_1.default.join(__dirname, appSource[applicationType]);
        switch (applicationType) {
            case applicationType_1.ApplicationType.WebApp:
                if (!fs_extra_1.default.existsSync(paths_1.paths.appSrc)) {
                    fs_extra_1.default.mkdirSync(paths_1.paths.appSrc);
                }
                fs_extra_1.default.copySync(path_1.default.join(source, 'public'), path_1.default.join(process.cwd(), 'public'));
                fs_extra_1.default.copyFileSync(path_1.default.join(source, 'index.tsx'), path_1.default.join(paths_1.paths.appSrc, 'index.tsx'));
                fs_extra_1.default.copyFileSync(path_1.default.join(source, 'App.tsx'), path_1.default.join(paths_1.paths.appSrc, 'App.tsx'));
                break;
            case applicationType_1.ApplicationType.package:
                fs_extra_1.default.mkdirSync(paths_1.paths.devDir);
                fs_extra_1.default.copySync(source, path_1.default.join(process.cwd(), 'demo'));
                break;
            case applicationType_1.ApplicationType.cli:
                fs_extra_1.default.mkdirSync(paths_1.paths.appSrc);
                fs_extra_1.default.copySync(source, paths_1.paths.appSrc);
        }
    });
}
exports.scaffold = scaffold;
//# sourceMappingURL=createScaffold.js.map