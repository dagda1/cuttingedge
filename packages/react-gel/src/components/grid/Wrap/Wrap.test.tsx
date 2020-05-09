import React from 'react';
import { Wrap } from '.';
import { render } from '@testing-library/react';

const wrap = (props = { children: <span>span</span> }) => render(<Wrap {...props} />);

describe('<Wrap />', () => {
  it('renders a Wrap class', () => {
    const { container } = wrap();

    expect(container.querySelector('.gel-wrap')).toBeTruthy();
  });
});
