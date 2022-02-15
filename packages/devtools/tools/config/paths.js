"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.paths = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const finders_1 = require("../scripts/utils/finders");
const getPublicUrlOrPath_1 = __importDefault(require("react-dev-utils/getPublicUrlOrPath"));
const appDirectory = fs_1.default.realpathSync(process.cwd());
const resolveApp = (relativePath) => path_1.default.resolve(appDirectory, relativePath);
const DefaultBuildDir = 'dist';
const publicUrlOrPath = (0, getPublicUrlOrPath_1.default)(process.env.NODE_ENV === 'development', undefined, process.env.PUBLIC_URL);
const resolveOwn = (relativePath) => path_1.default.resolve(__dirname, '..', relativePath);
const nodePaths = (process.env.NODE_PATH || '')
    .split(process.platform === 'win32' ? ';' : ':')
    .filter(Boolean)
    .filter((folder) => !path_1.default.isAbsolute(folder))
    .map(resolveApp);
const appNodeModules = (0, finders_1.findAppNodeModules)(process.cwd());
const resolvedNodeModules = [appNodeModules, './node_modules']
    .filter((m) => fs_1.default.existsSync(m))
    .map((m) => path_1.default.relative(process.cwd(), m));
const libPackages = [
    'packages/devtools',
    'packages/eslint-config',
    'packages/tsconfig',
    'packages/useful-types',
    'packages/util',
    'packages/use-get-parent-size',
    'packages/hooks',
    'packages/use-mathjax',
    'packages/design-system',
    'packages/component-library',
    'packages/svg',
    'packages/use-shortcuts',
    'packages/react-abortable-fetch',
].map((dep) => path_1.default.resolve(process.cwd(), dep));
const tsConfigPath = resolveApp('tsconfig.json');
const testTsConfig = require.resolve('@cutting/tsconfig/tsconfig.test.json');
const tsConfigProductionPath = resolveApp('tsconfig.dist.json');
const tsConfig = fs_1.default.existsSync(tsConfigPath)
    ? require(tsConfigPath)
    : { compilerOptions: { outDir: undefined, module: undefined } };
const tsConfigProduction = fs_1.default.existsSync(tsConfigProductionPath) ? tsConfigProductionPath : tsConfigPath;
const outDir = ((_a = tsConfig.compilerOptions) === null || _a === void 0 ? void 0 : _a.outDir) || DefaultBuildDir;
const isCommonJs = ((_c = (_b = tsConfig.compilerOptions) === null || _b === void 0 ? void 0 : _b.module) === null || _c === void 0 ? void 0 : _c.toLowerCase()) === 'commonjs';
const appBuild = outDir ? resolveApp(outDir) : resolveApp(DefaultBuildDir);
const DevFolder = 'demo';
exports.paths = {
    dotenv: resolveApp('.env'),
    appPath: resolveApp('.'),
    appBuild,
    appBuildPublic: path_1.default.join(appBuild, 'public'),
    appManifest: path_1.default.join(appBuild, 'loadable-stats.json'),
    appPublic: resolveApp('public'),
    appNodeModules: resolveApp('node_modules'),
    appSrc: resolveApp('src'),
    appPackageJson: resolveApp('package.json'),
    appServerIndexJs: resolveApp('src'),
    appClientIndexJs: resolveApp('src/client'),
    appSrcIndexJs: './src',
    ownPath: resolveOwn('.'),
    appHtml: resolveApp('public/index.html'),
    nodePaths: nodePaths,
    ownNodeModules: resolveOwn('node_modules'),
    localBuildConfig: resolveApp('./build.config.js'),
    resolvedNodeModules,
    tsConfig: tsConfigPath,
    tsConfigProduction,
    testTsConfig,
    devDir: resolveApp(DevFolder),
    devDirPublic: resolveApp(`${DevFolder}/public`),
    libPackages,
    defaultBuildConfigPath: path_1.default.join(__dirname, './build.config.js'),
    proxySetup: resolveApp('setupProxy.js'),
    tranlationsDir: resolveApp('src/translations'),
    publicUrlOrPath,
    gitDir: resolveApp('./.git'),
    eslintConfig: resolveApp('./.eslintrc.json'),
    gitIgnore: resolveApp('./.gitignore'),
    ossIndex: resolveApp('ossindex'),
    ownJestConfig: resolveApp('jest.config.js'),
    jestConfig: path_1.default.join(__dirname, '../jest/jest.config.js'),
    projectReferences: !!tsConfig.references,
    isCommonJS: isCommonJs,
};
//# sourceMappingURL=paths.js.map