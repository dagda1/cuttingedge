import addons, { types } from '@storybook/addons';
import { useParameter } from '@storybook/api';
import { jsx } from '@storybook/theming';
import { AddonName, PanelName, ParameterName } from '../addon';
import { Wrapper } from './containers/Wrapper';
var DEFAULT_TAB_NAME = 'Design';
export default function register(renderTarget) {
    addons.register(AddonName, function (api) {
        var title = function () {
            var param = useParameter(ParameterName);
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
            return (jsx(Wrapper, { key: key, active: !!active }));
        };
        if (renderTarget === 'tab') {
            addons.add(PanelName, {
                title: DEFAULT_TAB_NAME,
                render: render,
                type: types.TAB,
                paramKey: ParameterName,
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
            addons.addPanel(PanelName, { title: title, paramKey: ParameterName, render: render });
        }
    });
}
