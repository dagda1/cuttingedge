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
var rollup_1 = require("rollup");
var paths_1 = require("../config/paths");
var fs_extra_1 = __importDefault(require("fs-extra"));
var path_1 = __importDefault(require("path"));
var rollup_plugin_typescript2_1 = __importDefault(require("rollup-plugin-typescript2"));
var logger_1 = require("../scripts/logger");
var plugin_node_resolve_1 = __importDefault(require("@rollup/plugin-node-resolve"));
var assert_1 = require("../assert/assert");
var rollup_plugin_inject_process_env_1 = __importDefault(require("rollup-plugin-inject-process-env"));
var helpers_1 = require("./helpers");
var plugin_babel_1 = __importDefault(require("@rollup/plugin-babel"));
var plugin_json_1 = __importDefault(require("@rollup/plugin-json"));
var rollup_plugin_sourcemaps_1 = __importDefault(require("rollup-plugin-sourcemaps"));
var rollup_plugin_terser_1 = require("rollup-plugin-terser");
var dashdash_1 = __importDefault(require("dashdash"));
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
var rollup_plugin_eslint_1 = require("rollup-plugin-eslint");
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
var rollup_plugin_analyzer_1 = __importDefault(require("rollup-plugin-analyzer"));
var isProduction = process.env.NODE_ENV === 'production';
var options = [
    {
        name: 'package-name',
        type: 'string',
    },
    {
        name: 'minify',
        type: 'bool',
    },
];
if (!process.argv.includes('--package-name')) {
    throw new Error('no --package-name switch');
}
var parser = dashdash_1.default.createParser({ options: options });
var opts = parser.parse(process.argv);
var packageName = opts.package_name;
var minify = !!(opts === null || opts === void 0 ? void 0 : opts.minify);
function generateBundledModule(packageName, inputFile) {
    return __awaiter(this, void 0, void 0, function () {
        var bundle, fileName, outputFileName;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    assert_1.assert(fs_extra_1.default.existsSync(inputFile), "Input file " + inputFile + " does not exist");
                    logger_1.logger.info("Generating " + packageName + " bundle.");
                    return [4 /*yield*/, rollup_1.rollup({
                            input: inputFile,
                            external: function (id) {
                                return !id.startsWith('.') && !path_1.default.isAbsolute(id);
                            },
                            treeshake: {
                                // removes property getters and setters on objects
                                // does not remove them on classes
                                propertyReadSideEffects: false,
                            },
                            plugins: [
                                plugin_node_resolve_1.default({
                                    mainFields: ['module', 'main', 'browser'],
                                    extensions: ['.mjs', 'cjs', '.js', '.ts', '.tsx', '.json', '.jsx'],
                                }),
                                plugin_json_1.default(),
                                rollup_plugin_eslint_1.eslint({
                                    fix: isProduction,
                                    throwOnError: isProduction,
                                    throwOnWarning: false,
                                }),
                                rollup_plugin_typescript2_1.default({
                                    typescript: require('typescript'),
                                    tsconfig: paths_1.paths.tsConfig,
                                    abortOnError: true,
                                    tsconfigDefaults: {
                                        compilerOptions: {
                                            sourceMap: true,
                                            declaration: true,
                                            target: 'esnext',
                                            jsx: 'react',
                                        },
                                        useTsconfigDeclarationDir: true,
                                        exclude: ['**/*.spec.ts', '**/*.test.ts', '**/*.spec.tsx', '**/*.test.tsx', , 'node_modules', paths_1.paths.appBuild],
                                    },
                                    tsconfigOverride: {
                                        compilerOptions: {
                                            sourceMap: true,
                                            target: 'esnext',
                                        },
                                    },
                                }),
                                plugin_babel_1.default({
                                    exclude: /node_modules/,
                                    presets: [['@babel/preset-env', { loose: true }], '@babel/preset-react'],
                                    plugins: [
                                        'babel-plugin-annotate-pure-calls',
                                        ['babel-plugin-transform-rename-import', [{ original: 'lodash', replacement: 'lodash-es' }]],
                                        'babel-plugin-dev-expression',
                                        [
                                            'babel-plugin-transform-async-to-promises',
                                            {
                                                inlineHelpers: true,
                                                externalHelpers: true,
                                            },
                                        ],
                                        '@babel/plugin-proposal-class-properties',
                                        '@babel/plugin-proposal-optional-chaining',
                                        '@babel/plugin-proposal-nullish-coalescing-operator',
                                        '@babel/plugin-transform-regenerator',
                                        'babel-plugin-macros',
                                    ],
                                }),
                                rollup_plugin_inject_process_env_1.default({
                                    NODE_ENV: 'production',
                                }),
                                rollup_plugin_sourcemaps_1.default(),
                                minify === true &&
                                    rollup_plugin_terser_1.terser({
                                        compress: {
                                            keep_infinity: true,
                                            pure_getters: true,
                                            passes: 10,
                                        },
                                        ecma: 2016,
                                        toplevel: false,
                                        format: {
                                            comments: 'all',
                                        },
                                    }),
                                rollup_plugin_analyzer_1.default(),
                            ],
                        })];
                case 1:
                    bundle = _a.sent();
                    fileName = helpers_1.safePackageName(packageName) + ".esm.js";
                    outputFileName = path_1.default.join(paths_1.paths.appBuild, fileName);
                    logger_1.logger.info("writing output file " + outputFileName);
                    console.error(typeof minify);
                    logger_1.logger.info(minify === true ? 'creating a minified build' : 'creating a non minified build');
                    return [4 /*yield*/, bundle.write({
                            dir: paths_1.paths.appBuild,
                            format: 'es',
                            name: packageName,
                            exports: 'named',
                            sourcemap: true,
                            esModule: true,
                        })];
                case 2:
                    _a.sent();
                    logger_1.logger.done('finished building');
                    return [2 /*return*/];
            }
        });
    });
}
function build() {
    return __awaiter(this, void 0, void 0, function () {
        var candidates, rootFile;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    candidates = [];
                    [packageName, path_1.default.join(packageName, 'index'), 'index'].forEach(function (candidate) {
                        ['.ts', '.tsx'].forEach(function (fileType) {
                            candidates.push(path_1.default.join(paths_1.paths.appSrc, "" + candidate + fileType));
                        });
                    });
                    rootFile = candidates.find(function (candidate) { return fs_extra_1.default.existsSync(candidate); });
                    assert_1.assert(rootFile, 'No rootFile found for rollup');
                    logger_1.logger.start("using input file " + rootFile);
                    return [4 /*yield*/, Promise.all([generateBundledModule(packageName, rootFile)])];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
build().catch(function (e) {
    logger_1.logger.error(e);
    process.exit(1);
});
//# sourceMappingURL=rollup.js.map