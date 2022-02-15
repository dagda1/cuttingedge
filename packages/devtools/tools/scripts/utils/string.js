"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dasherize = exports.decamelize = void 0;
const decamelize = (str) => str.replace(/([a-z\d])([A-Z])/g, '$1_$2').toLowerCase();
exports.decamelize = decamelize;
const dasherize = (str) => (0, exports.decamelize)(str).replace(/[ _]/g, '-');
exports.dasherize = dasherize;
//# sourceMappingURL=string.js.map