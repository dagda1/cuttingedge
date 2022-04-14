import { useEffect, useState } from 'react';
import { jsx } from '@storybook/theming';
import { Tabs as SbTabs } from '@storybook/components';
export var Tabs = function (_a) {
    var tabs = _a.tabs;
    var _b = useState(tabs[0].id), selected = _b[0], setSelected = _b[1];
    useEffect(function () {
        setSelected(tabs[0].id);
    }, [tabs]);
    return (jsx(SbTabs, { absolute: true, selected: selected, actions: { onSelect: setSelected } }, tabs.map(function (tab) { return (jsx("div", { key: tab.id, id: tab.id, title: tab.name }, tab.offscreen || selected === tab.id ? tab.content : null)); })));
};
