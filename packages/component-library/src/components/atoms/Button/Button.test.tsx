import { shallow } from 'enzyme';
import React from 'react';
import { Button, ButtonProps } from '.';

const wrap = (props: Partial<ButtonProps> = {}) => shallow(<Button {...{ children: 'Click Me!', ...props }} />);

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
});
