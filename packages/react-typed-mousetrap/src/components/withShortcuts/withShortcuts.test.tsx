import React from 'react';

import { withShortcuts } from '.';
import { Shortcuts } from '../Shortcuts';
import { mount } from 'enzyme';
import { ShortcutMap } from '../../types';

const shortcutMap: ShortcutMap = {
  key: {
    MOVE_UP: 'a'
  }
};

const props = { shortcutMap, mapKey: 'key', handler: (action: any, e: any) => undefined };

describe('withShortcuts', () => {
  it('should create wrapped shortcuts component with stateless', () => {
    const Stateless = (props: any) => <div>Stateless</div>;
    const Wrapped = withShortcuts(props as any)(Stateless as any);
    const wrapper = mount(<Wrapped />);

    expect(wrapper.find(Shortcuts)).toHaveLength(1);
    expect(wrapper.find(Stateless)).toHaveLength(1);
  });
});
