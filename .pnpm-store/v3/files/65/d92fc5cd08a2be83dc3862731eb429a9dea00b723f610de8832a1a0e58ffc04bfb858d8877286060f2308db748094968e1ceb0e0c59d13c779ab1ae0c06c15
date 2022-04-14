"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PARAM_KEY = exports.config = exports.withDesign = void 0;
var addons_1 = require("@storybook/addons");
var addon_1 = require("./addon");
Object.defineProperty(exports, "PARAM_KEY", { enumerable: true, get: function () { return addon_1.ParameterName; } });
var wrapper = function (getStory, context, _a) {
    var parameters = _a.parameters;
    var channel = addons_1.default.getChannel();
    channel.emit(addon_1.Events.UpdateConfig, parameters);
    return getStory(context);
};
exports.withDesign = addons_1.makeDecorator({
    name: 'withDesign',
    parameterName: addon_1.ParameterName,
    skipIfNoParametersOrOptions: true,
    wrapper: wrapper
});
exports.config = function (c) { return c; };
if (module && module.hot && module.hot.decline) {
    module.hot.decline();
}
