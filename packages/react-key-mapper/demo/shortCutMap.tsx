import { ShortcutMap } from '../src/types';
import { KeyCode } from '../src/types/keycodes';

export const shortcutMap: ShortcutMap = {
  BOX: {
    MOVE_LEFT: [KeyCode.LeftArrow, KeyCode.A],
    MOVE_RIGHT: [KeyCode.RightArrow, KeyCode.D],
    MOVE_UP: [KeyCode.UpArrow, KeyCode.W],
    MOVE_DOWN: [KeyCode.DownArrow, KeyCode.S],
    COMBINATION_EXAMPLE: { combination: [KeyCode.Ctrl, KeyCode.F] },
    SEQUENCE_EXAMPLE: { sequence: [KeyCode.X, KeyCode.C] }
  }
};
