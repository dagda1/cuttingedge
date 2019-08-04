import { renderHook } from '@testing-library/react-hooks';
import { useShortcuts } from './useShortcuts';
import { KeyCode } from '../../types/keycodes';
import { ShortcutMap } from '../../types';

const shortcutMap: ShortcutMap = { DO_SOMETHING: KeyCode.DownArrow };
const handler = (action: keyof typeof shortcutMap) => {
  switch (action) {
    case 'DO_SOMETHING':
      // eslint-disable-next-line no-console
      console.log('do something');
      return;
    default:
      throw new Error('should not get here.');
  }
};

describe('useShortcuts', () => {
  it('should create shortcuts', () => {
    const { result } = renderHook(() => useShortcuts({ shortcutMap, handler }), {
      initialProps: true
    });

    const { shortcuts } = result.current;

    expect(shortcuts).toHaveLength(1);
  });
});
