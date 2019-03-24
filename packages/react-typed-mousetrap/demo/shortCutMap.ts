import { ShortcutMap } from '../src/types';
import { KeyCode } from '../src/types/keyCodes';

export const shortcutMap: ShortcutMap = {
  MOVE_LEFT: [KeyCode.LeftArrow, 'a'],
  MOVE_RIGHT: [KeyCode.RightArrow, 'd'],
  MOVE_UP: [KeyCode.UpArrow, 'w'],
  MOVE_DOWN: [KeyCode.DownArrow, 'k'],
  COMBINATION_EXAMPLE: { combination: [KeyCode.Ctrl, 'f'] },
  SEQUENCE_EXAMPLE: { sequence: ['x', 'c'] }
};
