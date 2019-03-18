import { shallow } from 'enzyme';
import React from 'react';
import { Heading, HeadingProps } from '.';

const wrap = (props: HeadingProps = {}) => shallow(<Heading {...props} />);

describe('Heading', () => {
  it('renders children when passed in', () => {
    const wrapper = wrap({ children: 'test' });

    expect(wrapper.contains('test')).toBe(true);
  });

  it('renders props when passed in', () => {
    const wrapper = wrap({ id: 'foo' });

    expect(wrapper.find({ id: 'foo' })).toHaveLength(1);
  });

  it('renders H1 by default', () => {
    const wrapper = wrap();

    expect(wrapper.find('h1')).toHaveLength(1);
  });

  it('renders hLevel when passed in', () => {
    const wrapper = wrap({ level: 2 });

    expect(wrapper.find('h2')).toHaveLength(1);
  });
});
