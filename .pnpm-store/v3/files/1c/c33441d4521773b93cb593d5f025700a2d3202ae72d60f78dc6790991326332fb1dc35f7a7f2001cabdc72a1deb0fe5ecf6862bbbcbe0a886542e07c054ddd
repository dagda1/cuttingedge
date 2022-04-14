import { jsx } from '@storybook/theming';
import { useParameter, useStorybookState } from '@storybook/api';
import { ParameterName } from '../../addon';
import { Wrapper as Pure } from '../components/Wrapper';
export var Wrapper = function (_a) {
    var active = _a.active;
    if (!active) {
        return null;
    }
    var state = useStorybookState();
    var config = useParameter(ParameterName);
    return jsx(Pure, { key: state.storyId, config: config });
};
export default Wrapper;
