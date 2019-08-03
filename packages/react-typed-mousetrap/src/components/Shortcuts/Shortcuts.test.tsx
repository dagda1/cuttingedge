/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Shortcuts } from './index';
import { ShortcutMap, ShortcutsProps } from '../../types';
import { KeyCode } from '../../types/keycodes';
import { Omit } from '../../types/omit';
import { render } from '@cutting/devtools/jest/react-testing-overrides';

describe('<Shortcuts />', () => {
  // xit('should add a shortcuts', () => {
  //   const Stateless = (props: any) => <div>Stateless</div>;

  //   const wrapper = render(
  //     <Shortcuts shortcutMap={singleShortcutMap} mapKey="key" handler={dummyHandler}>
  //       <Stateless />
  //     </Shortcuts>
  //   );

  //   const comp = wrapper.find(Shortcuts);

  //   Object.keys(comp).forEach((o) => console.log(`${o} = ${wrapper[o]}`));

  //   const shortcutActions = wrapper.state().shortcuts;

  //   expect(shortcutActions).toHaveLength(1);
  // });

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

      expect(getByTestId('keyboard-shortcuts')).toBeTruthy();
    });

    it('should override default data-selector', () => {
      const { getByTestId } = wrap({ shortcutMap: singleShortcutMap, handler: jest.fn(), dataSelector: 'my-selector' });

      expect(getByTestId('my-selector')).toBeTruthy();
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

  // describe('with multiple maps', () => {
  //   const multipleShortcutMap: ShortcutMap = {
  //     key: {
  //       MOVE_UP: 'a'
  //     }
  //   };

  //   let wrap: Wrap;

  //   beforeEach(() => {
  //     wrap = createWrapper(multipleShortcutMap, 'key');
  //   });

  //   it('should pick correct map item', () => {
  //     const wrapper = wrap();

  //     const mousetrap = wrapper.find('.mousetrap');

  //     expect(mousetrap).toHaveLength(1);
  //   });
  // });
});
