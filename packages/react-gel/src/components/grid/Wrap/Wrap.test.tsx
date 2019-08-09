import React from 'react';
import { Wrap } from '.';
import { render } from '@cutting/devtools/jest/react-testing-overrides';

const wrap = (props = { children: <span>span</span> }) => render(<Wrap {...props} />);

describe('<Wrap />', () => {
  it('renders a Wrap class', () => {
    const { container } = wrap();

    expect(container.querySelector('.gel-wrap')).toBeTruthy();
  });
});
