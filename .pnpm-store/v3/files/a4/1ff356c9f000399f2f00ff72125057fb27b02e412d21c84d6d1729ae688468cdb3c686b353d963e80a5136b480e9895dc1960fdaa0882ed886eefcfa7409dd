"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wrapper = void 0;
var theming_1 = require("@storybook/theming");
var api_1 = require("@storybook/api");
var addon_1 = require("../../addon");
var Wrapper_1 = require("../components/Wrapper");
exports.Wrapper = function (_a) {
    var active = _a.active;
    if (!active) {
        return null;
    }
    var state = api_1.useStorybookState();
    var config = api_1.useParameter(addon_1.ParameterName);
    return theming_1.jsx(Wrapper_1.Wrapper, { key: state.storyId, config: config });
};
exports.default = exports.Wrapper;
