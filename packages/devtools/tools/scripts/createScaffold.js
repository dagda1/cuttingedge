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
const fs_extra_1 = __importDefault(require("fs-extra"));
const logger_1 = __importDefault(require("./logger"));
const applicationType_1 = require("../types/applicationType");
const validate_npm_package_name_1 = __importDefault(require("validate-npm-package-name"));
const console_1 = require("console");
const installDependencies_1 = require("./installDependencies");
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
        const { projectName } = yield inquirer_1.default.prompt({
            type: 'input',
            name: 'projectName',
            message: 'What is the name of your project?',
            validate: (input) => __awaiter(this, void 0, void 0, function* () {
                const { validForNewPackages } = (0, validate_npm_package_name_1.default)(input);
                return validForNewPackages;
            }),
        });
        (0, console_1.assert)(!!projectName, 'projectName is required');
        const { value } = yield inquirer_1.default.prompt({
            type: 'number',
            name: 'value',
            message: `What am I creating:
    
    1.  A web app
    2.  A package
    3.  A CLI app
    `,
        });
        (0, console_1.assert)(!!value, 'No application type has been made.');
        const applicationType = value;
        const root = path_1.default.resolve(projectName);
        const source = path_1.default.join(__dirname, appSource[applicationType]);
        const appName = path_1.default.basename(root);
        fs_extra_1.default.ensureDirSync(projectName);
        const originalDirectory = process.cwd();
        process.chdir(root);
        (0, installDependencies_1.installDependencies)(appName, applicationType);
        fs_extra_1.default.copySync(path_1.default.join(__dirname, '../../init/gitignore'), path_1.default.join(process.cwd(), '.gitignore'));
        switch (applicationType) {
            case applicationType_1.ApplicationType.WebApp:
                fs_extra_1.default.copySync(source, root);
                const rootSrc = path_1.default.join(root, 'src');
                fs_extra_1.default.moveSync(path_1.default.join(root, 'App.tsx'), path_1.default.join(rootSrc, 'App.tsx'));
                fs_extra_1.default.moveSync(path_1.default.join(root, 'index.tsx'), path_1.default.join(rootSrc, 'index.tsx'));
                break;
            case applicationType_1.ApplicationType.package:
                const devDir = path_1.default.join(root, 'demo');
                fs_extra_1.default.mkdirSync(devDir);
                fs_extra_1.default.copySync(source, devDir);
                fs_extra_1.default.copySync(path_1.default.join(__dirname, '../../package'), root);
                fs_extra_1.default.moveSync(path_1.default.join(devDir, 'tsconfig.json'), path_1.default.join(root, 'tsconfig.json'));
                fs_extra_1.default.moveSync(path_1.default.join(devDir, 'tsconfig.dist.json'), path_1.default.join(root, 'tsconfig.dist.json'));
                break;
            case applicationType_1.ApplicationType.cli:
                fs_extra_1.default.copySync(source, root);
                break;
            default:
                throw new Error(`unknown application type: ${applicationType}`);
        }
        fs_extra_1.default.moveSync(path_1.default.join(process.cwd(), 'eslintrc.json'), path_1.default.join(process.cwd(), '.eslintrc.json'));
        const packageJson = path_1.default.join(process.cwd(), 'package.json');
        const raw = fs_extra_1.default.readFileSync(packageJson, 'utf8').replace(/\{\{name\}\}/g, appName);
        fs_extra_1.default.writeFileSync(packageJson, raw);
        process.chdir(originalDirectory);
    });
}
exports.scaffold = scaffold;
//# sourceMappingURL=createScaffold.js.map