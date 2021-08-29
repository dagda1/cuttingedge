"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var esbuild_1 = require("esbuild");
var paths_1 = require("../config/paths");
var consolidateBuildConfigs_1 = require("./consolidateBuildConfigs");
var esbuild_node_externals_1 = require("esbuild-node-externals");
var assert_ts_1 = require("assert-ts");
var helpers_1 = require("../rollup/helpers");
var logger_1 = __importDefault(require("./logger"));
var path_1 = __importDefault(require("path"));
var empty_build_dir_1 = require("./empty-build-dir");
var esbuild_plugin_1 = require("@vanilla-extract/esbuild-plugin");
var copy_assets_1 = require("./copy-assets");
var buildConfig = consolidateBuildConfigs_1.consolidateBuildConfigs();
var postcss = require('postcss');
var autoprefixer = require('autoprefixer');
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function processCss(css) {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, postcss([autoprefixer]).process(css, {
                        from: undefined /* suppress source map warning */,
                    })];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, result.css];
            }
        });
    });
}
function bundle(_a) {
    var packageName = _a.packageName, format = _a.format, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    env = _a.env;
    return __awaiter(this, void 0, void 0, function () {
        var pkgName, fileName, outfile;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    assert_ts_1.assert(Array.isArray(buildConfig.client.entries), "build config entries needs to be a string array");
                    pkgName = helpers_1.safePackageName(packageName);
                    fileName = pkgName + "." + (format === 'iife' ? 'umd' : format) + ".js";
                    outfile = path_1.default.join(paths_1.paths.appBuild, format === 'iife' ? 'umd' : format, fileName);
                    logger_1.default.info("writing " + path_1.default.basename(outfile) + " for " + packageName);
                    return [4 /*yield*/, esbuild_1.build({
                            entryPoints: buildConfig.client.entries,
                            outfile: outfile,
                            bundle: true,
                            // minify: env === 'production',
                            minify: false,
                            platform: 'node',
                            sourcemap: true,
                            format: format,
                            target: 'node14',
                            treeShaking: true,
                            allowOverwrite: false,
                            tsconfig: paths_1.paths.tsConfigProduction,
                            jsx: 'transform',
                            logLevel: 'warning',
                            color: true,
                            plugins: [
                                esbuild_node_externals_1.nodeExternalsPlugin({
                                    packagePath: paths_1.paths.appPackageJson,
                                }),
                                esbuild_plugin_1.vanillaExtractPlugin({
                                    processCss: processCss,
                                }),
                            ],
                        }).catch(function (err) {
                            console.error(err);
                            process.exit(1);
                        })];
                case 1:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
}
var buildPackage = function () { return __awaiter(void 0, void 0, void 0, function () {
    var pkg, packageName, configs, configs_1, configs_1_1, _a, format, env, e_1_1;
    var e_1, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                empty_build_dir_1.emptyBuildDir();
                copy_assets_1.copyAssets();
                return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require(paths_1.paths.appPackageJson)); })];
            case 1:
                pkg = (_c.sent()).default;
                packageName = pkg.name;
                configs = [
                    { format: 'iife', env: 'production' },
                    { format: 'cjs', env: 'production' },
                    { format: 'esm', env: 'production' },
                ];
                logger_1.default.info("Generating " + packageName + " bundle.");
                _c.label = 2;
            case 2:
                _c.trys.push([2, 7, 8, 9]);
                configs_1 = __values(configs), configs_1_1 = configs_1.next();
                _c.label = 3;
            case 3:
                if (!!configs_1_1.done) return [3 /*break*/, 6];
                _a = configs_1_1.value, format = _a.format, env = _a.env;
                return [4 /*yield*/, bundle({ packageName: packageName, format: format, env: env })];
            case 4:
                _c.sent();
                _c.label = 5;
            case 5:
                configs_1_1 = configs_1.next();
                return [3 /*break*/, 3];
            case 6: return [3 /*break*/, 9];
            case 7:
                e_1_1 = _c.sent();
                e_1 = { error: e_1_1 };
                return [3 /*break*/, 9];
            case 8:
                try {
                    if (configs_1_1 && !configs_1_1.done && (_b = configs_1.return)) _b.call(configs_1);
                }
                finally { if (e_1) throw e_1.error; }
                return [7 /*endfinally*/];
            case 9: return [2 /*return*/];
        }
    });
}); };
buildPackage();
//# sourceMappingURL=es-build.js.map