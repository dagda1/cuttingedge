import React from 'react';

import { withShortcuts } from '.';
import { Shortcuts } from '../Shortcuts';
import { mount } from 'enzyme';
import { ShortcutMap } from '../../types';

const shortcuts: ShortcutMap = {
  key: {
    MOVE_UP: 'a'
  }
};

describe('withShortcuts', () => {
  it('should create wrapped shortcuts component with stateless', () => {
    const Stateless = (props: any) => <div>Stateless</div>;
    const Wrapped = withShortcuts(shortcuts, 'key', (action, e) => undefined)(Stateless as any);
    const wrapper = mount(<Wrapped />);

    expect(wrapper.find(Shortcuts)).toHaveLength(1);
    expect(wrapper.find(Stateless)).toHaveLength(1);
  });
});
