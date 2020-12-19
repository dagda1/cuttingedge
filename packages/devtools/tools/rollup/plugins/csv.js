"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.csv = void 0;
var pluginutils_1 = require("@rollup/pluginutils");
var papaparse_1 = __importDefault(require("papaparse"));
var csv = function () {
    var filter = pluginutils_1.createFilter('**/*.csv');
    return {
        name: 'csv',
        transform: function (code, id) {
            if (!filter(id)) {
                return null;
            }
            var parsed = papaparse_1.default.parse(code, {
                header: true,
                skipEmptyLines: true,
            });
            return {
                code: "export default " + JSON.stringify(parsed.data) + ";",
                map: { mappings: '' },
            };
        },
    };
};
exports.csv = csv;
//# sourceMappingURL=csv.js.map