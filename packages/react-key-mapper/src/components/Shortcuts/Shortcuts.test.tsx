import React from 'react';

import { Shortcuts } from '.';
import { mount } from 'enzyme';
import { ShortcutMap, ShortcutHandler } from '../../types';

const shortcuts: ShortcutMap = {
  key: {
    MOVE_UP: 'a'
  }
};

describe('<Shortcuts />', () => {
  it('should add shortcuts for stateless component', () => {
    const Stateless = (props: any) => <div>Stateless</div>;

    const wrapper = mount<Shortcuts>(
      <Shortcuts shortcutMap={shortcuts} mapKey="key" handler={(action, e) => undefined}>
        <Stateless />
      </Shortcuts>
    );

    const shortcutActions = wrapper.state().shortcuts;

    expect(shortcutActions).toHaveLength(1);
  });
});
