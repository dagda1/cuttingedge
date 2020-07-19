"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dasherize = exports.decamelize = void 0;
exports.decamelize = function (str) { return str.replace(/([a-z\d])([A-Z])/g, '$1_$2').toLowerCase(); };
exports.dasherize = function (str) { return exports.decamelize(str).replace(/[ _]/g, '-'); };
//# sourceMappingURL=string.js.map