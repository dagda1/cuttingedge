"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dasherize = exports.decamelize = void 0;
var decamelize = function (str) { return str.replace(/([a-z\d])([A-Z])/g, '$1_$2').toLowerCase(); };
exports.decamelize = decamelize;
var dasherize = function (str) { return exports.decamelize(str).replace(/[ _]/g, '-'); };
exports.dasherize = dasherize;
//# sourceMappingURL=string.js.map