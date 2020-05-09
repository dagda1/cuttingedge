import React from 'react';
import { Layout, LayoutProps } from '.';
import { render } from '@testing-library/react';

const wrap = (props: LayoutProps & { children?: React.ReactNode } = { children: <span>div</span> }) =>
  render(<Layout {...props}>test</Layout>);

describe('<Layout />', () => {
  it('renders a Layout class', () => {
    const { container } = wrap();

    expect(container.querySelector('.gel-layout')).toBeTruthy();
  });
});
