import { ShortcutMap } from '../src/types';
import { KeyCode } from '../src/types/keyCodes';

export const shortcutMap: ShortcutMap = {
  BOX: {
    MOVE_LEFT: [KeyCode.LeftArrow, 'a'],
    MOVE_RIGHT: [KeyCode.RightArrow, 'd'],
    MOVE_UP: [KeyCode.UpArrow, 'w'],
    MOVE_DOWN: [KeyCode.DownArrow, 's'],
    COMBINATION_EXAMPLE: { combination: [KeyCode.Ctrl, 'f'] },
    SEQUENCE_EXAMPLE: { sequence: ['x', 'c'] }
  }
};
