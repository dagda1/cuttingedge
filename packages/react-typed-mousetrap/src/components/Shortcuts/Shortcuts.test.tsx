import React from 'react';

import { Shortcuts } from '.';
import { mount } from 'enzyme';
import { ShortcutMap, ShortcutsProps } from '../../types';

const shortcutMap: ShortcutMap = {
  key: {
    MOVE_UP: 'a'
  }
};

const dummyHandler = (action, e) => undefined;

describe('<Shortcuts />', () => {
  it('should add a shortcuts', () => {
    const Stateless = (props: any) => <div>Stateless</div>;

    const wrapper = mount<Shortcuts>(
      <Shortcuts shortcutMap={shortcutMap} mapKey="key" handler={dummyHandler}>
        <Stateless />
      </Shortcuts>
    );

    const shortcutActions = wrapper.state().shortcuts;

    expect(shortcutActions).toHaveLength(1);
  });

  describe('scoped Shortcuts', () => {
    const Scoped = () => <div>Scoped</div>;

    const defaultProps: ShortcutsProps = {
      shortcutMap,
      mapKey: 'key',
      handler: dummyHandler,
      scoped: true,
      ScopedWrapperComponentType: 'div'
    };

    const wrap = (props: Partial<ShortcutsProps> = {}) => {
      return mount<Shortcuts>(
        <Shortcuts {...defaultProps} {...props}>
          <Scoped />
        </Shortcuts>
      );
    };

    it('should wrap a scoped component in a div by default', () => {
      const wrapper = wrap();

      const mousetrap = wrapper.find('.mousetrap');

      expect(mousetrap).toHaveLength(1);
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
