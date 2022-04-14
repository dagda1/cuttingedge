"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.matchNetworkDrive02 = exports.matchNetworkDriveRoot = exports.pathIsNetworkDrive = void 0;
function pathIsNetworkDrive(input) {
    return /^\\\\[^/\\]/.test(input);
}
exports.pathIsNetworkDrive = pathIsNetworkDrive;
function matchNetworkDriveRoot(input) {
    return input.match(/^\\\\([^\\/]+)[\\/]?$/);
}
exports.matchNetworkDriveRoot = matchNetworkDriveRoot;
function matchNetworkDrive02(input) {
    return input.match(/^\\\\([^\\/]+)[\\/]([^\\/]+)[\\/]?$/);
}
exports.matchNetworkDrive02 = matchNetworkDrive02;
exports.default = pathIsNetworkDrive;
//# sourceMappingURL=index.js.map