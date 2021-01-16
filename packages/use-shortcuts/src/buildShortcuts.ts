import { ShortcutAction } from './types/types';
import { isCombination, isSequence } from './utils/guards';

function createKeyStrokes(keyStrokes: string | string[], separator: '+' | ' '): string {
  const keys = Array.isArray(keyStrokes) ? keyStrokes : [keyStrokes];

  return keys.join(separator);
}
export const buildShortcuts = <R extends Record<string, unknown>>(map: R): ShortcutAction<keyof R>[] => {
  const shortcutActions: ShortcutAction<keyof R>[] = [];

  for (const key of Object.keys(map)) {
    const shortcut = map[key];

    if (isCombination(shortcut)) {
      const keys = createKeyStrokes(shortcut.combination, '+');

      shortcutActions.push({ keys, action: { type: key } });
    } else if (isSequence(shortcut)) {
      const keys = createKeyStrokes(shortcut.sequence, ' ');

      shortcutActions.push({ keys, action: { type: key } });
    } else if (Array.isArray(shortcut)) {
      const keys = shortcut.map((element) => {
        if (typeof element === 'string') {
          return element;
        }

        return createKeyStrokes(element, ' ');
      });

      shortcutActions.push({ keys, action: { type: key } });
    } else if (typeof shortcut === 'string') {
      shortcutActions.push({ keys: shortcut, action: { type: key } });
    }
  }

  return shortcutActions;
};
