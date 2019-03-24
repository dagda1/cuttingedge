import React from 'react';
import { Shortcuts } from './index';
import { mount, ReactWrapper } from 'enzyme';
import { ShortcutMap, ShortcutsProps } from '../../types';
import { Omit } from '@cutting/util/src/types/misc';
import { KeyCode } from '../../types/keycodes';

type Wrap = (
  props?: Partial<ShortcutsProps<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>>,
  handler?: jest.Mock<any, any>
) => ReactWrapper;

const singleShortcutMap: ShortcutMap = {
  key: {
    MOVE_UP: 'a'
  }
};

const dummyHandler = (action: any, e: any) => undefined;

describe('<Shortcuts />', () => {
  xit('should add a shortcuts', () => {
    const Stateless = (props: any) => <div>Stateless</div>;

    const wrapper = mount<typeof Shortcuts>(
      <Shortcuts shortcutMap={singleShortcutMap} mapKey="key" handler={dummyHandler}>
        <Stateless />
      </Shortcuts>
    );

    const comp = wrapper.find(Shortcuts);

    Object.keys(comp).forEach((o) => console.log(`${o} = ${wrapper[o]}`));

    const shortcutActions = wrapper.state().shortcuts;

    expect(shortcutActions).toHaveLength(1);
  });

  const Scoped = () => <div>Scoped</div>;

  const defaultProps: Omit<ShortcutsProps, 'handler' | 'shortcutMap'> = {
    scoped: true,
    ScopedWrapperComponentType: 'div'
  };

  const createWrapper = (map: ShortcutMap, mapKey?: string) => (
    props: Partial<ShortcutsProps> = {},
    handler: jest.Mock = jest.fn()
  ) => {
    return mount<typeof Shortcuts>(
      <Shortcuts {...defaultProps} {...props} shortcutMap={map} mapKey={mapKey} handler={handler}>
        <Scoped />
      </Shortcuts>
    );
  };

  describe('scoped Shortcuts', () => {
    let wrap: Wrap;

    const singleShortcutMap: ShortcutMap = {
      MOVE_LEFT: [KeyCode.LeftArrow, 'a'],
      MOVE_RIGHT: [KeyCode.RightArrow, 'd']
    };

    beforeEach(() => {
      wrap = createWrapper(singleShortcutMap);
    });

    it('should wrap a scoped component in a div by default', () => {
      const wrapper = wrap(singleShortcutMap);

      const mousetrap = wrapper.find('.mousetrap');

      expect(mousetrap).toHaveLength(1);
    });

    xit('should assign event handler', () => {
      const handler = jest.fn();

      const wrapper = wrap(undefined, handler);

      const target = wrapper.find('.mousetrap');

      target.simulate('keypress', { keyCode: 'a'.charCodeAt(0) });

      expect(handler).toHaveBeenCalled();
    });

    it("should initially set the wrapped element's tabIndex to -1", () => {
      const wrapper = wrap();

      const mousetrap = wrapper.find('.mousetrap');

      expect(mousetrap.props().tabIndex).toBe(-1);
    });

    it("should override wrapped element's tabIndex to prop", () => {
      const wrapper = wrap({ tabIndex: 4 });

      const mousetrap = wrapper.find('.mousetrap');

      expect(mousetrap.props().tabIndex).toBe(4);
    });

    it("should override wrapped element's element type", () => {
      const wrapper = wrap({ ScopedWrapperComponentType: 'span' });

      const mousetrap = wrapper.find('span');

      expect(mousetrap).toHaveLength(1);
    });

    it('should add className to wrapped element', () => {
      const wrapper = wrap({ className: 'some-class' });

      expect(wrapper.find('.mousetrap').hasClass('some-class')).toBe(true);
    });
  });

  describe('with multiple maps', () => {
    const multipleShortcutMap: ShortcutMap = {
      key: {
        MOVE_UP: 'a'
      }
    };

    let wrap: Wrap;

    beforeEach(() => {
      wrap = createWrapper(multipleShortcutMap, 'key');
    });

    it('should pick correct map item', () => {
      const wrapper = wrap();

      const mousetrap = wrapper.find('.mousetrap');

      expect(mousetrap).toHaveLength(1);
    });
  });
});
