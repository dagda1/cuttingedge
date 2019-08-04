/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Shortcuts } from './Shortcuts';
import { ShortcutMap, ShortcutsProps } from '../../types';
import { KeyCode } from '../../types/keycodes';
import { Omit } from '../../types/omit';
import { render } from '@cutting/devtools/jest/react-testing-overrides';

describe('<Shortcuts />', () => {
  const Scoped = () => <div>Scoped</div>;

  const defaultProps: Omit<ShortcutsProps, 'handler' | 'shortcutMap'> = {
    scoped: true,
    ScopedWrapperComponentType: 'div'
  };

  const wrap = (props: ShortcutsProps) =>
    render(
      <Shortcuts {...defaultProps} {...props}>
        <Scoped />
      </Shortcuts>
    );

  describe('scoped Shortcuts', () => {
    const singleShortcutMap: ShortcutMap = {
      MOVE_LEFT: [KeyCode.LeftArrow, 'a'],
      MOVE_RIGHT: [KeyCode.RightArrow, 'd']
    };

    it('should wrap a scoped component in a div by default', () => {
      const { getByTestId } = wrap({ shortcutMap: singleShortcutMap, handler: jest.fn() });

      getByTestId('keyboard-shortcuts');
    });

    it('should override default data-selector', () => {
      const { getByTestId } = wrap({ shortcutMap: singleShortcutMap, handler: jest.fn(), dataSelector: 'my-selector' });

      getByTestId('my-selector');
    });

    it("should initially set the wrapped element's tabIndex to -1", () => {
      const { getByTestId } = wrap({ shortcutMap: singleShortcutMap, handler: jest.fn() });

      const mousetrap = getByTestId('keyboard-shortcuts');

      expect(mousetrap.tabIndex).toBe(-1);
    });

    it("should override wrapped element's tabIndex to prop", () => {
      const { getByTestId } = wrap({ shortcutMap: singleShortcutMap, handler: jest.fn(), tabIndex: 4 });

      const mousetrap = getByTestId('keyboard-shortcuts');

      expect(mousetrap.tabIndex).toBe(4);
    });

    it("should override wrapped element's element type", () => {
      const { getByTestId } = wrap({
        ScopedWrapperComponentType: 'span',
        shortcutMap: singleShortcutMap,
        handler: jest.fn()
      });

      const mousetrap = getByTestId('keyboard-shortcuts');

      expect(mousetrap.tagName.toLowerCase()).toBe('span');
    });

    it('should add className to wrapped element', () => {
      const { getByTestId } = wrap({ shortcutMap: singleShortcutMap, handler: jest.fn(), className: 'some-class' });

      const mousetrap = getByTestId('keyboard-shortcuts') as HTMLDivElement;

      expect(mousetrap.classList.contains('some-class')).toBe(true);
    });
  });
});
