import { describe, it, expect } from '@jest/globals';
import { buildShortcuts } from './buildShortcuts';
import { KeyCode } from './types/keycodes';

describe('buildShortcuts', () => {
  it('should assign 1 key to 1 handler', () => {
    const result = buildShortcuts({
      FIRST: 'a',
    });

    expect(result).toEqual([{ keys: 'a', action: { type: 'FIRST' } }]);
  });

  it('should build shortCuts from 1 object', () => {
    const result = buildShortcuts({
      FIRST: { combination: [KeyCode.Ctrl, 'a'] },
    });

    expect(result).toEqual([{ keys: 'ctrl+a', action: { type: 'FIRST' } }]);
  });

  it('should build shortcuts from array', () => {
    const result = buildShortcuts({
      MOVE_LEFT: [KeyCode.LeftArrow, 'a'],
      COMBINATION_EXAMPLE: { combination: [KeyCode.Ctrl, 'f'] },
      SEQUENCE_EXAMPLE: { sequence: ['x', 'c'] },
    });

    expect(result).toEqual([
      { keys: ['left', 'a'], action: { type: 'MOVE_LEFT' } },
      { keys: 'ctrl+f', action: { type: 'COMBINATION_EXAMPLE' } },
      { keys: 'x c', action: { type: 'SEQUENCE_EXAMPLE' } },
    ]);
  });
});
