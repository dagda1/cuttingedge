"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tabs = void 0;
var react_1 = require("react");
var theming_1 = require("@storybook/theming");
var components_1 = require("@storybook/components");
exports.Tabs = function (_a) {
    var tabs = _a.tabs;
    var _b = react_1.useState(tabs[0].id), selected = _b[0], setSelected = _b[1];
    react_1.useEffect(function () {
        setSelected(tabs[0].id);
    }, [tabs]);
    return (theming_1.jsx(components_1.Tabs, { absolute: true, selected: selected, actions: { onSelect: setSelected } }, tabs.map(function (tab) { return (theming_1.jsx("div", { key: tab.id, id: tab.id, title: tab.name }, tab.offscreen || selected === tab.id ? tab.content : null)); })));
};
