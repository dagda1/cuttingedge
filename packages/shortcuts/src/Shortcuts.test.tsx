import * as React from 'react';

import { Shortcuts, ShortcutsProps } from './Shortcuts';
import { mount } from 'enzyme';

const shortcuts = [{ keySequence: 'a', action: () => undefined }];

const wrap = (props: ShortcutsProps) => mount(<Shortcuts {...props} />);

describe('<Shortcuts />', () => {
  it('should add shortcuts for stateless component', () => {
    const Stateless = (props: any) => <div>Stateless</div>;

    const createShortcuts = (props: any) => shortcuts;

    const wrapper = mount(
      <Shortcuts createShortcuts={createShortcuts}>
        <Stateless />
      </Shortcuts>
    );

    expect(wrapper.state().shortcuts).toBe(shortcuts);
  });

  it('should assign ref to class component', () => {
    class Classy extends React.Component {
      render() {
        return <div>classy</div>;
      }
    }

    const createShortcuts = (props: any, instance: Classy) => {
      expect(instance).toBeInstanceOf(Classy);
      return shortcuts;
    };

    const wrapper = mount(
      <Shortcuts createShortcuts={createShortcuts}>
        <Classy ref={React.createRef()} />
      </Shortcuts>
    );
  });
});
