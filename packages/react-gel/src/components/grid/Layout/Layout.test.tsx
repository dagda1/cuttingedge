import React from 'react';
import { shallow } from 'enzyme';
import { Layout, LayoutProps } from '.';

const wrap = (props: LayoutProps & { children?: any } = { children: <span>div</span> }) =>
  shallow(<Layout {...props}>test</Layout>);

describe('<Layout />', () => {
  it('renders a div by default', () => {
    const wrapper = wrap();

    expect(wrapper.find('div')).toHaveLength(1);
  });

  it('renders a Layout class', () => {
    const wrapper = wrap();

    expect(wrapper.find('.gel-layout')).toHaveLength(1);
  });
});
