/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, it, expect, afterEach, jest } from '@jest/globals';
import { renderHook } from '@testing-library/react-hooks';
import { useShortcuts } from './useShortcuts';
import { ShortcutHandler } from './types/types';
import mousetrap from 'mousetrap';
import { KeyCode } from './types/keycodes';

const shortcutMap = { DO_SOMETHING: 'a' };
const handler: ShortcutHandler<any> = (action) => {
  switch (action.type) {
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
    const { result } = renderHook((p) => useShortcuts(p), {
      initialProps: { shortcutMap, handler: (): undefined => undefined },
    });

    const { shortcuts } = result.current;

    expect(shortcuts).toHaveLength(1);
    expect(shortcuts[0].trapper).toBe(mousetrap); // should be global mousetrap function
  });

  it('should create shortcuts with a ref and not create multiple event handlers', () => {
    const ref: { current: any } = { current: document.body };

    const props = { shortcutMap, handler, ref: { current: null } };

    const { result, rerender } = renderHook((p) => useShortcuts(p), {
      initialProps: { ...props, ref: { current: null } },
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

    const input = document.querySelector('input') as HTMLInputElement;

    const fn = jest.fn();

    const props = { shortcutMap, handler: fn, ref: { current: null } };

    renderHook((p) => useShortcuts(p), {
      initialProps: { ...props, ref: { current: input } },
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
    const combinationShortcutMap = {
      COMBINATION_EXAMPLE: { combination: [KeyCode.Ctrl, 'f'] },
      SEQUENCE_EXAMPLE: { sequence: ['x', 'c'] },
    };
    const {
      result: {
        current: { shortcuts },
      },
    } = renderHook((p) => useShortcuts(p), {
      initialProps: { shortcutMap: combinationShortcutMap, handler },
    });

    expect(shortcuts).toHaveLength(2);
    expect(shortcuts[0].action.type).toBe('COMBINATION_EXAMPLE');
    expect(shortcuts[1].action.type).toBe('SEQUENCE_EXAMPLE');
  });
});
