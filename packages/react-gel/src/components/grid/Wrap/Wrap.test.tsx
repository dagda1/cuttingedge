import React from 'react';
import { shallow } from 'enzyme';
import { Wrap } from '.';

const wrap = (props = { children: <span>span</span> }) => shallow(<Wrap {...props} />);

describe('<Wrap />', () => {
  it('renders a div by default', () => {
    const wrapper = wrap();

    expect(wrapper.find('div')).toHaveLength(1);
  });

  it('renders a Wrap class', () => {
    const wrapper = wrap();

    expect(wrapper.find('.gel-wrap')).toHaveLength(1);
  });
});
