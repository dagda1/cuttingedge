import addons, { makeDecorator } from '@storybook/addons';
import { Events, ParameterName } from './addon';
var wrapper = function (getStory, context, _a) {
    var parameters = _a.parameters;
    var channel = addons.getChannel();
    channel.emit(Events.UpdateConfig, parameters);
    return getStory(context);
};
export var withDesign = makeDecorator({
    name: 'withDesign',
    parameterName: ParameterName,
    skipIfNoParametersOrOptions: true,
    wrapper: wrapper
});
export var config = function (c) { return c; };
if (module && module.hot && module.hot.decline) {
    module.hot.decline();
}
export { ParameterName as PARAM_KEY };
