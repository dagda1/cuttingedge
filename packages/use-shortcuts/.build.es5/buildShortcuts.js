import { isPlainObject } from './utils/isPlainObject';
export var buildShortcuts = function (map) {
    var shortcutActions = [];
    Object.keys(map).forEach(function (mapKey) {
        var shortcut = map[mapKey];
        var createCombination = function (shortcut) {
            var comboType = Object.keys(shortcut)[0];
            var comboValues = shortcut[comboType];
            var keys = Array.isArray(comboValues) ? comboValues : [comboValues];
            var seperator = comboType === 'combination' ? '+' : ' ';
            return keys.join(seperator);
        };
        if (isPlainObject(shortcut)) {
            var keys = createCombination(shortcut);
            shortcutActions.push({ keys: keys, action: mapKey });
        }
        else if (Array.isArray(shortcut)) {
            var keys = shortcut.map(function (element) {
                if (typeof element === 'string') {
                    return element;
                }
                return createCombination(element);
            });
            shortcutActions.push({ keys: keys, action: mapKey });
        }
        else if (typeof shortcut === 'string') {
            shortcutActions.push({ keys: shortcut, action: mapKey });
        }
    });
    return shortcutActions;
};
