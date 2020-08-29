"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.safePackageName = void 0;
exports.safePackageName = function (name) {
    return name.toLowerCase().replace(/(^@.*\/)|((^[^a-zA-Z]+)|[^\w.-])|([^a-zA-Z0-9]+$)/g, '');
};
//# sourceMappingURL=helpers.js.map