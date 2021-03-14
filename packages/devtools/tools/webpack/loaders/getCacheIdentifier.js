"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCacheIdentifier = void 0;
var getCacheIdentifier = function (_a) {
    var isDevelopment = _a.isDevelopment, moduleFormat = _a.moduleFormat, isNode = _a.isNode;
    return [isDevelopment ? 'development' : 'production', isNode ? 'node' : 'web', moduleFormat].join('-');
};
exports.getCacheIdentifier = getCacheIdentifier;
//# sourceMappingURL=getCacheIdentifier.js.map