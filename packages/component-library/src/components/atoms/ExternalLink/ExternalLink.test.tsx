import React from 'react';
import { ExternalLink } from '.';
import { render } from '@cutting/devtools/jest/react-testing-overrides';

describe('<ExternalLink />', () => {
  it('should render target and rel props', () => {
    const { getByTestId } = render(
      <ExternalLink dataSelector="the-a" href="http://blah.com/">
        Blah
      </ExternalLink>
    );

    const a = getByTestId('the-a') as HTMLAnchorElement;

    expect(a.href).toBe('http://blah.com/');
    expect(a.target).toBe('_blank');
    expect(a.rel).toBe('noopener noreferrer');
    expect(a.innerHTML).toBe('Blah');
  });
});
