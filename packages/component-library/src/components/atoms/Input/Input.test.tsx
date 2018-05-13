import { shallow } from 'enzyme';
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { Input } from './Input';

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

  it('snapshot test', () => {
    const input = renderer.create(<Input />).toJSON();

    expect(input).toMatchSnapshot();
  });
});
