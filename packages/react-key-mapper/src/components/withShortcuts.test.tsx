import React from 'react';

import { withShortcuts } from './withShortcuts';
import { Shortcuts, Shortcut } from './Shortcuts';
import { mount } from 'enzyme';

const shortcuts = [{ keySequence: 'a', action: () => undefined }];

describe('withShortcuts', () => {
  it('should create wrapped shortcuts component with stateless', () => {
    const createShortcuts = (props: any) => shortcuts;

    const Stateless = (props: any) => <div>Stateless</div>;
    const Wrapped = withShortcuts(createShortcuts)(Stateless as any);
    const wrapper = mount(<Wrapped />);

    expect(wrapper.find(Shortcuts)).toHaveLength(1);
    expect(wrapper.find(Stateless)).toHaveLength(1);
  });

  it('should wrap shortcuts with class and assign ref', () => {
    class Classy extends React.Component {
      render() {
        return <div>classy</div>;
      }
    }

    const createShortcuts = (ownProps: any, instance: Classy): Shortcut[] => {
      expect(instance).toBeInstanceOf(Classy);
      return shortcuts;
    };

    const Wrapped = withShortcuts(createShortcuts)(Classy);

    const wrapper = mount(<Wrapped />);

    expect(wrapper.find(Shortcuts)).toHaveLength(1);
    expect(wrapper.find(Classy)).toHaveLength(1);
  });
});
