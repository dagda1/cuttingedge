import { ShortcutMap, Shortcut } from '../../types';
import { ShortcutAction } from '.';
import { isPlainObject } from '../../utils';

export const buildShortcuts = (map: Shortcut): ShortcutAction[] => {
  const shortcutActions: ShortcutAction[] = [];
  Object.keys(map).forEach((mapKey) => {
    const shortcut = map[mapKey];

    const createCombination = (shortcut: Shortcut) => {
      const comboType = Object.keys(shortcut)[0];
      const comboValues = shortcut[comboType];
      const keys = Array.isArray(comboValues) ? comboValues : [comboValues];

      const seperator = comboType === 'combination' ? '+' : ' ';

      return keys.join(seperator);
    };

    if (isPlainObject(shortcut)) {
      const keys = createCombination(shortcut);

      shortcutActions.push({ keys, action: mapKey });
    } else if (Array.isArray(shortcut)) {
      const keys = shortcut.map((element) => {
        if (typeof element === 'string') {
          return element;
        }

        return createCombination(element);
      });

      shortcutActions.push({ keys, action: mapKey });
    }
  });

  return shortcutActions;
};
