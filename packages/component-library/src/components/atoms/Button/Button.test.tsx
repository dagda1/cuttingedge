import { shallow } from 'enzyme';
import * as React from 'react';
import { Button } from '.';

const wrap = (props?) => shallow(<Button {...{ children: 'Click Me!', ...props }} />);

describe('Button', () => {
  it('should render a button and text', () => {
    const wrapper = wrap();

    expect(wrapper.type()).toBe('button');
    expect(wrapper.find('button').text()).toBe('Click Me!');
  });

  it('should assign a click handler', () => {
    const onClick = jest.fn();
    const wrapper = wrap({ onClick });

    wrapper.find('button').simulate('click');
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('renders the component you specify', () => {
    const wrapper = wrap({ component: 'a' });
    expect(wrapper.is('a')).toBeTruthy();
  });
});
