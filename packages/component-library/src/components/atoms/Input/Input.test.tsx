import { shallow } from 'enzyme';
import React from 'react';
import { Input } from '.';

const wrap = (props = {}) => shallow(<Input {...props} />);

describe('<Input />', () => {
  it('renders text input by default', () => {
    const wrapper = wrap();

    expect(wrapper.find({ type: 'text' })).toHaveLength(1);
  });

  it('should handle keyDown', () => {
    const onKeyDown = jest.fn();
    const wrapper = wrap({ onKeyDown });

    wrapper.find('input').simulate('keydown');

    expect(onKeyDown).toHaveBeenCalled();
  });
});
