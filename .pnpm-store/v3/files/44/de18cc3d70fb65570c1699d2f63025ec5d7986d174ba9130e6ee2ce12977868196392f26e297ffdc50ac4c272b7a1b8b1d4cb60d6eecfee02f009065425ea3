"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var addons_1 = require("@storybook/addons");
var api_1 = require("@storybook/api");
var theming_1 = require("@storybook/theming");
var addon_1 = require("../addon");
var Wrapper_1 = require("./containers/Wrapper");
var DEFAULT_TAB_NAME = 'Design';
function register(renderTarget) {
    addons_1.default.register(addon_1.AddonName, function (api) {
        var title = function () {
            var param = api_1.useParameter(addon_1.ParameterName);
            if (!param) {
                return DEFAULT_TAB_NAME;
            }
            if (Array.isArray(param)) {
                return param.length > 0
                    ? DEFAULT_TAB_NAME + " (" + param.length + ")"
                    : DEFAULT_TAB_NAME;
            }
            return (param.name || DEFAULT_TAB_NAME) + ' (1)';
        };
        var render = function (_a) {
            var active = _a.active, key = _a.key;
            return (theming_1.jsx(Wrapper_1.Wrapper, { key: key, active: !!active }));
        };
        if (renderTarget === 'tab') {
            addons_1.default.add(addon_1.PanelName, {
                title: DEFAULT_TAB_NAME,
                render: render,
                type: addons_1.types.TAB,
                paramKey: addon_1.ParameterName,
                route: function (_a) {
                    var storyId = _a.storyId;
                    return "/design/" + storyId;
                },
                match: function (_a) {
                    var viewMode = _a.viewMode;
                    return viewMode === 'design';
                },
            });
        }
        else {
            addons_1.default.addPanel(addon_1.PanelName, { title: title, paramKey: addon_1.ParameterName, render: render });
        }
    });
}
exports.default = register;
