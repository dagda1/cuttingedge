#!/usr/bin/env node
'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = __importDefault(require("inquirer"));
var update_version_1 = require("./update-version");
var logger_1 = require("../scripts/logger");
var path_1 = __importDefault(require("path"));
var util_1 = require("util");
var get_root_package_1 = require("./get-root-package");
var glob_1 = __importDefault(require("glob"));
var semver_1 = __importDefault(require("semver"));
var glob = util_1.promisify(glob_1.default);
var main = function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a, rootDir, currentVersion, packageFiles, major, minor, patch, choice, version, custom, confirm, _i, packageFiles_1, pkg, err_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                logger_1.logger.start('finding package.json');
                return [4 /*yield*/, get_root_package_1.getRootPackage(process.cwd())];
            case 1:
                _a = _b.sent(), rootDir = _a.rootDir, currentVersion = _a.version;
                logger_1.logger.info("found root package.json in " + rootDir);
                if (currentVersion === undefined) {
                    logger_1.logger.info('The package file does not have version property defined?. So, version update cannot be done on this file');
                    return [2 /*return*/];
                }
                return [4 /*yield*/, glob('**/package.json', { cwd: rootDir, ignore: ['**/node_modules/**'] })];
            case 2:
                packageFiles = _b.sent();
                major = semver_1.default.inc(currentVersion, 'major');
                minor = semver_1.default.inc(currentVersion, 'minor');
                patch = semver_1.default.inc(currentVersion, 'patch');
                logger_1.logger.info("The current version number is " + currentVersion);
                return [4 /*yield*/, inquirer_1.default.prompt({
                        type: 'list',
                        name: 'value',
                        message: 'Bump version:',
                        choices: ["major : " + major, "minor : " + minor, "patch : " + patch, new inquirer_1.default.Separator(), 'custom', 'cancel'],
                    })];
            case 3:
                choice = _b.sent();
                if (choice.value === 'cancel') {
                    logger_1.logger.info('version change cancelled');
                    return [2 /*return*/];
                }
                if (!(choice.value === 'custom')) return [3 /*break*/, 5];
                return [4 /*yield*/, inquirer_1.default.prompt({
                        type: 'input',
                        name: 'value',
                        message: 'Please input the version number of choice:',
                    })];
            case 4:
                custom = _b.sent();
                if (!semver_1.default.valid(custom.value)) {
                    logger_1.logger.info('Version number format is incorrect. Please use the correct format');
                    return [2 /*return*/];
                }
                version = custom.value;
                return [3 /*break*/, 6];
            case 5:
                version = choice.value.split(':')[1].trim();
                _b.label = 6;
            case 6: return [4 /*yield*/, inquirer_1.default.prompt({
                    type: 'confirm',
                    name: 'value',
                    message: 'Confirm the version update:',
                })];
            case 7:
                confirm = _b.sent();
                if (!confirm.value) {
                    logger_1.logger.info('version change cancelled');
                    return [2 /*return*/];
                }
                _i = 0, packageFiles_1 = packageFiles;
                _b.label = 8;
            case 8:
                if (!(_i < packageFiles_1.length)) return [3 /*break*/, 13];
                pkg = packageFiles_1[_i];
                _b.label = 9;
            case 9:
                _b.trys.push([9, 11, , 12]);
                return [4 /*yield*/, update_version_1.updateVersion(path_1.default.join(rootDir, pkg), currentVersion, version)];
            case 10:
                _b.sent();
                return [3 /*break*/, 12];
            case 11:
                err_1 = _b.sent();
                logger_1.logger.error(err_1);
                process.exit(1);
                return [3 /*break*/, 12];
            case 12:
                _i++;
                return [3 /*break*/, 8];
            case 13: return [2 /*return*/];
        }
    });
}); };
(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        main();
        return [2 /*return*/];
    });
}); })();
//# sourceMappingURL=index.js.map