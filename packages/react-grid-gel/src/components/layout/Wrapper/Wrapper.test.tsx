import * as React from 'react';
import { shallow } from 'enzyme';
import { Wrapper } from '.';
import * as renderer from 'react-test-renderer';

const wrap = (props = { children: <span>span</span> }) => shallow(<Wrapper {...props} />);

describe('Wrapper', () => {
  it('renders a div by default', () => {
    const wrapper = wrap();

    expect(wrapper.find('div')).toHaveLength(1);
  });

  it('renders a wrapper class', () => {
    const wrapper = wrap();

    expect(wrapper.find('.wrapper')).toHaveLength(1);
  });

  it('renders correctly', () => {
    const wrapper = renderer.create(<Wrapper children={<span>span</span>} />).toJSON();

    expect(wrapper).toMatchSnapshot();
  });
});
