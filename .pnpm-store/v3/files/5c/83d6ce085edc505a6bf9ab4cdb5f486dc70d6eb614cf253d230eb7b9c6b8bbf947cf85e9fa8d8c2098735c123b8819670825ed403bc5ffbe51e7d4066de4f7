"use strict";
/**
 * Created by user on 2017/12/10/010.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterNameEntry = exports.vaildNameEntry = void 0;
const core_1 = require("../core");
let r_vaild = /[\\\?\/\!'"\:\<\>\*\|]+/g;
function vaildNameEntry(name) {
    return r_vaild.test(name.toString()) ? void 0 : name;
}
exports.vaildNameEntry = vaildNameEntry;
function filterNameEntry(name) {
    return name.toString().replace(r_vaild, '');
}
exports.filterNameEntry = filterNameEntry;
core_1.fn.vaildNameEntry = vaildNameEntry;
core_1.fn.filterNameEntry = filterNameEntry;
// @ts-ignore
//console.log(upath.vaildNameEntry('a/b.test'), upath.filterNameEntry('a/b.test'));
//# sourceMappingURL=fs.js.map