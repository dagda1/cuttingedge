import React from 'react';
import { Shortcuts } from './index';
import { mount } from 'enzyme';
import { ShortcutMap, ShortcutsProps } from '../../types';
import { Omit } from '@cutting/util/src/types/misc';

const shortcutMap: ShortcutMap = {
  key: {
    MOVE_UP: 'a'
  }
};

const dummyHandler = (action: any, e: any) => undefined;

describe('<Shortcuts />', () => {
  xit('should add a shortcuts', () => {
    const Stateless = (props: any) => <div>Stateless</div>;

    const wrapper = mount<typeof Shortcuts>(
      <Shortcuts shortcutMap={shortcutMap} mapKey="key" handler={dummyHandler}>
        <Stateless />
      </Shortcuts>
    );

    const comp = wrapper.find(Shortcuts);

    Object.keys(comp).forEach((o) => console.log(`${o} = ${wrapper[o]}`));

    const shortcutActions = wrapper.state().shortcuts;

    expect(shortcutActions).toHaveLength(1);
  });

  describe('scoped Shortcuts', () => {
    const Scoped = () => <div>Scoped</div>;
    const defaultProps: Omit<ShortcutsProps, 'handler'> = {
      shortcutMap,
      mapKey: 'key',
      scoped: true,
      ScopedWrapperComponentType: 'div'
    };

    const wrap = (props: Partial<ShortcutsProps> = {}, handler: jest.Mock = jest.fn()) => {
      return mount<typeof Shortcuts>(
        <Shortcuts {...defaultProps} {...props} handler={handler}>
          <Scoped />
        </Shortcuts>
      );
    };

    it('should wrap a scoped component in a div by default', () => {
      const wrapper = wrap();

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
});
