/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import { renderHook } from '@testing-library/react-hooks';
import { useShortcuts } from './useShortcuts';
import { ShortcutMap, UseShortcuts, UseShortcutsResult } from './types';
import mousetrap from 'mousetrap';
import { KeyCode } from './types/keycodes';

const shortcutMap: ShortcutMap = { DO_SOMETHING: 'a' };
const handler = (action: keyof typeof shortcutMap) => {
  switch (action) {
    case 'DO_SOMETHING':
      console.log('do something');
      return;
    default:
      throw new Error('should not get here.');
  }
};

describe('useShortcuts', () => {
  afterEach(() => {
    mousetrap.reset();
  });

  it('should create shortcuts with no ref', () => {
    const { result } = renderHook<UseShortcuts, UseShortcutsResult>((p) => useShortcuts(p), {
      initialProps: { shortcutMap, handler }
    });

    const { shortcuts } = result.current;

    expect(shortcuts).toHaveLength(1);
    expect(shortcuts[0].trapper).toBe(mousetrap); // should be global mousetrap function
  });

  it('should create shortcuts with a ref and not create multiple event handlers', () => {
    const ref = { current: document.body };

    const props: UseShortcuts = { shortcutMap, handler, ref: { current: null } };

    const { result, rerender } = renderHook<UseShortcuts, UseShortcutsResult>((p) => useShortcuts(p), {
      initialProps: { ...props, ref: { current: null } }
    });

    const { shortcuts } = result.current;

    rerender({ ...props, ref });

    expect(shortcuts).toHaveLength(1);

    expect(shortcuts[0].trapper).not.toBe(mousetrap); // should be mousetrap instance
    let mtrap = shortcuts[0].trapper as any;
    expect(Object.keys(mtrap._callbacks)[0]).toBe('a');

    rerender({ ...props, ref, handler: () => console.log('new handler') });

    expect(shortcuts).toHaveLength(1);
    mtrap = shortcuts[0].trapper as any;
    expect(Object.keys(mtrap._callbacks)[0]).toBe('a');
  });

  it('should call the supplied handler', () => {
    document.body.insertAdjacentHTML('afterbegin', `<input id="input" type="text">`);

    var input = document.querySelector('input') as HTMLInputElement;

    const fn = jest.fn();

    const props: UseShortcuts = { shortcutMap, handler: fn, ref: { current: null } };

    renderHook<UseShortcuts, UseShortcutsResult>((p) => useShortcuts(p), {
      initialProps: { ...props, ref: { current: input } }
    });

    const event = document.createEvent('Events') as any;

    event.initEvent('keypress', true, true);
    event.keyCode = 65;
    event.which = 65;
    event.code = 'a';

    input.dispatchEvent(event);

    expect(fn).toBeCalled();
  });

  it('should create combination and sequence shortcuts', () => {
    const combinationShortcutMap: ShortcutMap = {
      COMBINATION_EXAMPLE: { combination: [KeyCode.Ctrl, 'f'] },
      SEQUENCE_EXAMPLE: { sequence: ['x', 'c'] }
    };
    const {
      result: {
        current: { shortcuts }
      }
    } = renderHook<UseShortcuts, UseShortcutsResult>((p) => useShortcuts(p), {
      initialProps: { shortcutMap: combinationShortcutMap, handler }
    });

    console.log(shortcuts);

    expect(shortcuts).toHaveLength(2);
    expect(shortcuts[0].action).toBe('COMBINATION_EXAMPLE');
    expect(shortcuts[1].action).toBe('SEQUENCE_EXAMPLE');
  });
});
