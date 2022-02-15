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
exports.findAppNodeModules = exports.findFile = exports.findAsync = exports.find = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const MaxTries = 10;
const ModulesDirName = 'node_modules';
const find = (cwd, predicate, tries = 0) => {
    if (tries === MaxTries) {
        throw new Error(`cannot find in ${cwd}`);
    }
    if (predicate(cwd)) {
        return cwd;
    }
    return (0, exports.find)(path_1.default.resolve(cwd, '..'), predicate, ++tries);
};
exports.find = find;
const findAsync = (cwd, predicate, tries = 0) => __awaiter(void 0, void 0, void 0, function* () {
    if (tries === MaxTries) {
        throw new Error(`cannot find in ${cwd}`);
    }
    if (yield predicate(cwd)) {
        return cwd;
    }
    return yield (0, exports.findAsync)(path_1.default.resolve(cwd, '..'), predicate, ++tries);
});
exports.findAsync = findAsync;
const findFile = (cwd, fileName) => {
    const dir = (0, exports.find)(cwd, (dir) => fs_1.default.existsSync(path_1.default.resolve(dir, fileName)));
    return path_1.default.resolve(dir, fileName);
};
exports.findFile = findFile;
const findAppNodeModules = (cwd, packageName = 'typescript') => {
    const dir = (0, exports.find)(cwd, (dir) => fs_1.default.existsSync(path_1.default.resolve(dir, ModulesDirName, packageName)));
    return path_1.default.join(dir, ModulesDirName);
};
exports.findAppNodeModules = findAppNodeModules;
//# sourceMappingURL=finders.js.map