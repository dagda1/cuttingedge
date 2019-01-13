import { buildShortcuts } from './buildShortcuts';
import { KeyCode } from '../../types/keycodes';
import { ShortcutMap } from '../../types';

export const shortcutMap: ShortcutMap = {
  object: {
    FIRST: { combination: [KeyCode.Ctrl, 'a'] }
  },
  array: {
    MOVE_LEFT: [KeyCode.LeftArrow, 'a'],
    COMBINATION_EXAMPLE: { combination: [KeyCode.Ctrl, 'f'] },
    SEQUENCE_EXAMPLE: { sequence: ['x', 'c'] }
  }
};

describe('buildShortcuts', () => {
  it('should build shortCuts from 1 object', () => {
    const result = buildShortcuts(shortcutMap.object);

    expect(result).toEqual([{ keys: 'ctrl+a', action: 'FIRST' }]);
  });

  it('should build shortcuts from array', () => {
    const result = buildShortcuts(shortcutMap.array);

    expect(result).toEqual([
      { keys: ['left', 'a'], action: 'MOVE_LEFT' },
      { keys: 'ctrl+f', action: 'COMBINATION_EXAMPLE' },
      { keys: 'x c', action: 'SEQUENCE_EXAMPLE' }
    ]);
  });
});
