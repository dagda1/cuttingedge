import { ShortcutAction, ShortcutItem, ShortcutMap } from './types';
import { isPlainObject } from './utils/isPlainObject';

export const buildShortcuts = (map: ShortcutMap): ShortcutAction[] => {
  const shortcutActions: ShortcutAction[] = [];
  Object.keys(map).forEach((key) => {
    const shortcut = map[key];

    const createCombination = (shortcut: ShortcutItem): string => {
      const comboType = Object.keys(shortcut)[0];
      const comboValues = shortcut[comboType];
      const keys = Array.isArray(comboValues) ? comboValues : [comboValues];

      const seperator = comboType === 'combination' ? '+' : ' ';

      return keys.join(seperator);
    };

    if (isPlainObject(shortcut)) {
      const keys = createCombination(shortcut);

      shortcutActions.push({ keys, action: { type: key } });
    } else if (Array.isArray(shortcut)) {
      const keys = shortcut.map((element) => {
        if (typeof element === 'string') {
          return element;
        }

        return createCombination(element);
      });

      shortcutActions.push({ keys, action: { type: key } });
    } else if (typeof shortcut === 'string') {
      shortcutActions.push({ keys: shortcut, action: { type: key } });
    }
  });

  return shortcutActions;
};
