"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeToPackage = void 0;
var fs_1 = __importDefault(require("fs"));
var writeToPackage = function (filename, data) {
    return new Promise(function (resolve, reject) {
        fs_1.default.writeFile(filename, JSON.stringify(data, null, 2), function (err) {
            if (err) {
                reject(err);
                return;
            }
            resolve();
        });
    });
};
exports.writeToPackage = writeToPackage;
//# sourceMappingURL=write-package.js.map