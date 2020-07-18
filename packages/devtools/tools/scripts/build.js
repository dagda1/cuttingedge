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
exports.build = void 0;
process.env.NODE_ENV = 'production';
process.on('unhandledRejection', function (err) {
    throw err;
});
require(".../config/env");
var fs_extra_1 = __importDefault(require("fs-extra"));
var paths_1 = require("../config/paths");
var logger_1 = __importDefault(require("./logger"));
var FileSizeReporter_1 = __importDefault(require("react-dev-utils/FileSizeReporter"));
var copy_public_folder_1 = require("./utils/copy-public-folder");
var compile_1 = require("./webpack/compile");
var build_1 = require("../types/build");
var measureFileSizesBeforeBuild = FileSizeReporter_1.default.measureFileSizesBeforeBuild;
var printFileSizesAfterBuild = FileSizeReporter_1.default.printFileSizesAfterBuild;
var merge = require('webpack-merge');
var configureWebpackClient = require('../webpack/client').configure;
var configureWebpackServer = require('../webpack/server').configure;
var configureWebpackNode = require('../webpack/node').configure;
exports.build = function (_a) {
    var buildClient = _a.buildClient, buildServer = _a.buildServer, buildNode = _a.buildNode;
    return __awaiter(void 0, void 0, void 0, function () {
        var globalBuildConfig, localBuildConfig, buildConfig, clientConfig, serverConfig, nodeConfig, publicDir, previousFileSizes, clientStats, err_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    logger_1.default.start('starting build');
                    globalBuildConfig = require(paths_1.paths.jsBuildConfigPath);
                    localBuildConfig = fs_extra_1.default.existsSync(paths_1.paths.localBuildConfig) ? require(paths_1.paths.localBuildConfig) : {};
                    buildConfig = merge(globalBuildConfig, localBuildConfig);
                    clientConfig = !!buildClient && configureWebpackClient(buildConfig.client);
                    serverConfig = !!buildServer && configureWebpackServer(buildConfig.server);
                    nodeConfig = !!buildNode && configureWebpackNode(buildConfig.node);
                    publicDir = buildServer ? paths_1.paths.appBuildPublic : paths_1.paths.appBuild;
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 8, , 9]);
                    return [4 /*yield*/, measureFileSizesBeforeBuild(publicDir)];
                case 2:
                    previousFileSizes = _b.sent();
                    fs_extra_1.default.emptyDirSync(paths_1.paths.appBuild);
                    copy_public_folder_1.copyPublicFolder();
                    if (!buildNode) return [3 /*break*/, 4];
                    return [4 /*yield*/, compile_1.compile(nodeConfig, build_1.BuildType.node)];
                case 3:
                    _b.sent();
                    logger_1.default.done('build finished');
                    return [2 /*return*/];
                case 4: return [4 /*yield*/, compile_1.compile(clientConfig, build_1.BuildType.client)];
                case 5:
                    clientStats = (_b.sent()).stats;
                    if (!buildServer) return [3 /*break*/, 7];
                    return [4 /*yield*/, compile_1.compile(serverConfig, build_1.BuildType.server)];
                case 6:
                    _b.sent();
                    _b.label = 7;
                case 7:
                    printFileSizesAfterBuild(clientStats, previousFileSizes, publicDir);
                    logger_1.default.done('build finished');
                    return [3 /*break*/, 9];
                case 8:
                    err_1 = _b.sent();
                    logger_1.default.error('Failed to compile.');
                    logger_1.default.error(err_1.message || err_1);
                    logger_1.default.error(err_1.stack);
                    process.exit(1);
                    return [3 /*break*/, 9];
                case 9: return [2 /*return*/];
            }
        });
    });
};
//# sourceMappingURL=build.js.map