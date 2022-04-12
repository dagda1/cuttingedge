"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/ban-ts-comment */
const rollup_1 = require("rollup");
const paths_1 = require("../config/paths");
const fs_extra_1 = __importDefault(require("fs-extra"));
const path_1 = __importDefault(require("path"));
const rollup_plugin_typescript2_1 = __importDefault(require("rollup-plugin-typescript2"));
const logger_1 = require("./logger");
const plugin_node_resolve_1 = __importDefault(require("@rollup/plugin-node-resolve"));
const assert_ts_1 = require("assert-ts");
const plugin_babel_1 = __importDefault(require("@rollup/plugin-babel"));
const plugin_json_1 = __importDefault(require("@rollup/plugin-json"));
const rollup_plugin_sourcemaps_1 = __importDefault(require("rollup-plugin-sourcemaps"));
const rollup_plugin_terser_1 = require("rollup-plugin-terser");
const copy_assets_1 = require("./copy-assets");
const rollup_plugin_postcss_1 = __importDefault(require("rollup-plugin-postcss"));
const rollup_plugin_md_1 = require("@cutting/rollup-plugin-md");
// @ts-ignore
const rollup_plugin_svgo_1 = __importDefault(require("rollup-plugin-svgo"));
// @ts-ignore
const rollup_plugin_eslint_1 = __importDefault(require("@rbnlffl/rollup-plugin-eslint"));
// @ts-ignore
const postcss_url_1 = __importDefault(require("postcss-url"));
// @ts-ignore
const autoprefixer_1 = __importDefault(require("autoprefixer"));
const plugin_commonjs_1 = __importDefault(require("@rollup/plugin-commonjs"));
const createBabelConfig_1 = require("./createBabelConfig");
const helpers_1 = require("../rollup/helpers");
const write_package_1 = require("./write-package");
const csv_1 = require("../rollup/plugins/csv");
const postcss_import_1 = __importDefault(require("postcss-import"));
const empty_build_dir_1 = require("./empty-build-dir");
const core_1 = require("@babel/core");
const commander_1 = require("commander");
const rollup_plugin_visualizer_1 = require("rollup-plugin-visualizer");
const rollup_plugin_size_snapshot_1 = require("rollup-plugin-size-snapshot");
logger_1.logger.debug(`using ${path_1.default.basename(paths_1.paths.tsConfigProduction)}`);
function generateBundledModule({ packageName, entryFile, moduleFormat, env, vizualize, analyze, }) {
    return __awaiter(this, void 0, void 0, function* () {
        (0, assert_ts_1.assert)(fs_extra_1.default.existsSync(entryFile), `Input file ${entryFile} does not exist`);
        const minify = env === 'production';
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const babelConfig = __rest((0, createBabelConfig_1.createBabelConfig)({
            isDevelopment: false,
            isProduction: true,
            isNode: false,
            moduleFormat,
        }), []);
        const bundle = yield (0, rollup_1.rollup)({
            input: entryFile,
            external: (id) => {
                if (id === 'babel-plugin-transform-async-to-promises/helpers') {
                    return false;
                }
                return !id.startsWith('.') && !path_1.default.isAbsolute(id);
            },
            treeshake: {
                propertyReadSideEffects: false,
            },
            plugins: [
                analyze && (0, rollup_plugin_size_snapshot_1.sizeSnapshot)(),
                (0, rollup_plugin_eslint_1.default)({
                    fix: false,
                    throwOnError: true,
                    throwOnWarning: true,
                    extensions: ['.ts', '.tsx', '.test.ts', '.test.tsx'],
                    filterInclude: 'src/**',
                    filterExclude: ['**/*.scss', '**/*.css', '**/*.md', '**/*.csv', 'dist/**', '**/*.json'],
                    useEslintrc: true,
                }),
                (0, plugin_node_resolve_1.default)({
                    mainFields: ['module', 'browser', 'main'],
                    extensions: ['.mjs', '.cjs', '.js', '.ts', '.tsx', '.json', '.jsx'],
                }),
                (0, plugin_commonjs_1.default)({
                    // use a regex to make sure to include eventual hoisted packages
                    include: moduleFormat === 'umd' ? /\/node_modules\// : /\/regenerator-runtime\//,
                }),
                (0, plugin_json_1.default)(),
                (0, rollup_plugin_md_1.md)(),
                (0, rollup_plugin_postcss_1.default)({
                    extract: true,
                    modules: false,
                    autoModules: true,
                    sourceMap: true,
                    use: ['sass'],
                    plugins: [
                        (0, postcss_import_1.default)(),
                        (0, autoprefixer_1.default)(),
                        (0, postcss_url_1.default)({
                            url: 'inline',
                        }),
                    ],
                }),
                (0, csv_1.csv)(),
                (0, rollup_plugin_typescript2_1.default)({
                    typescript: require('typescript'),
                    tsconfig: paths_1.paths.tsConfigProduction,
                    abortOnError: true,
                    tsconfigDefaults: {
                        compilerOptions: {
                            sourceMap: true,
                            declaration: true,
                            target: 'esnext',
                            jsx: 'react-jsx',
                        },
                        useTsconfigDeclarationDir: true,
                    },
                    tsconfigOverride: {
                        compilerOptions: {
                            sourceMap: true,
                            target: 'esnext',
                        },
                    },
                }),
                (0, plugin_babel_1.default)(Object.assign(Object.assign({ exclude: /\/node_modules\/(core-js)\//, babelHelpers: 'runtime' }, babelConfig), { extensions: [...core_1.DEFAULT_EXTENSIONS, 'ts', 'tsx'] })),
                // injectProcessEnv({
                //   NODE_ENV: env,
                // }),
                (0, rollup_plugin_svgo_1.default)(),
                minify &&
                    (0, rollup_plugin_terser_1.terser)({
                        output: { comments: false },
                        compress: {
                            keep_infinity: true,
                            pure_getters: true,
                            passes: 10,
                        },
                        ecma: 5,
                        toplevel: moduleFormat === 'cjs',
                    }),
                (0, rollup_plugin_sourcemaps_1.default)(),
                vizualize &&
                    moduleFormat === 'esm' &&
                    (0, rollup_plugin_visualizer_1.visualizer)({
                        open: true,
                        gzipSize: true,
                        sourcemap: true,
                        template: 'sunburst',
                    }),
            ].filter(Boolean),
        });
        const pkgName = (0, helpers_1.safePackageName)(packageName);
        const extension = env === 'production' ? 'min.js' : 'js';
        const fileName = ['esm', 'umd'].includes(moduleFormat) ? `index.js` : `${pkgName}.cjs.${env}.${extension}`;
        const outputFileName = path_1.default.join(paths_1.paths.appBuild, moduleFormat, fileName);
        logger_1.logger.info(`writing ${path_1.default.basename(outputFileName)} for ${packageName}`);
        yield bundle.write({
            file: outputFileName,
            format: moduleFormat,
            name: packageName,
            exports: 'named',
            sourcemap: true,
            esModule: moduleFormat !== 'umd',
            interop: 'auto',
            freeze: false,
            globals: { react: 'React' },
        });
        (0, copy_assets_1.copyAssets)();
    });
}
const getInputFile = (packageName, inputFileOverride) => {
    if (inputFileOverride) {
        (0, assert_ts_1.assert)(fs_extra_1.default.existsSync(inputFileOverride), `no --input-file found at ${inputFileOverride}`);
        return inputFileOverride;
    }
    const candidates = [];
    [packageName, path_1.default.join(packageName, 'index'), 'index', path_1.default.join('bin', (0, helpers_1.safePackageName)(packageName))].forEach((candidate) => {
        ['.ts', '.tsx'].forEach((fileType) => {
            candidates.push(path_1.default.join(paths_1.paths.appSrc, `${candidate}${fileType}`));
        });
    });
    const inputFile = candidates.find((candidate) => fs_extra_1.default.existsSync(candidate));
    (0, assert_ts_1.assert)(!!inputFile, 'No rootFile found for rollup');
    logger_1.logger.start(`using input file ${path_1.default.basename(inputFile)} for ${packageName}`);
    return inputFile;
};
function build({ vizualize, analyze, inputFile, }) {
    return __awaiter(this, void 0, void 0, function* () {
        (0, empty_build_dir_1.emptyBuildDir)();
        const pkgJsonPath = path_1.default.join(process.cwd(), 'package.json');
        const { default: pkg } = yield Promise.resolve().then(() => __importStar(require(pkgJsonPath)));
        const packageName = pkg.name;
        const entryFile = getInputFile(packageName, inputFile);
        const configs = [
            { moduleFormat: 'cjs', env: 'development' },
            { moduleFormat: 'cjs', env: 'production' },
            { moduleFormat: 'esm', env: 'production' },
            { moduleFormat: 'umd', env: 'production' },
        ];
        logger_1.logger.info(`Generating ${packageName} bundle.`);
        for (const { moduleFormat, env } of configs) {
            yield generateBundledModule({ packageName, entryFile, moduleFormat, env, vizualize, analyze });
        }
        yield (0, helpers_1.writeCjsEntryFile)(packageName);
        const pkgJson = Object.assign({}, pkg);
        if (typeof pkgJson.exports !== 'undefined') {
            return;
        }
        const buildDir = path_1.default.basename(paths_1.paths.appBuild);
        const commonjsFile = path_1.default.join(buildDir, 'cjs', 'index.js');
        const esmFile = path_1.default.join(buildDir, 'esm', `index.js`);
        pkgJson.module = esmFile;
        const umdFile = path_1.default.join(buildDir, 'umd', `index.js`);
        pkgJson.browser = umdFile;
        const dtsFile = path_1.default.join(buildDir, 'esm', `index.d.ts`);
        pkgJson.types = dtsFile;
        pkgJson.exports = {
            import: `./${esmFile}`,
            require: `./${commonjsFile}`,
            browser: `./${umdFile}`,
        };
        pkgJson.typesVersions = {
            '*': {
                '*': [`${dtsFile}`],
            },
        };
        yield (0, write_package_1.writeToPackage)(pkgJsonPath, pkgJson);
    });
}
const program = (0, commander_1.createCommand)('rollup');
program
    .description('execute a rollup build')
    .option('-v, --vizualize', 'run the rollup-plugin-visualizer', false)
    .option('-a, --analyze', 'analyze the bundle', false)
    .option('-i, --input-file <path>', 'the entry file')
    .parse(process.argv)
    .action(function ({ vizualize, inputFile, analyze }) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield build({ vizualize, inputFile, analyze });
            logger_1.logger.done('finished building');
        }
        catch (err) {
            logger_1.logger.error(err);
            process.exit(1);
        }
    });
})
    .parse(process.argv);
//# sourceMappingURL=rollup.js.map