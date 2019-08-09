import React from 'react';
import { Footer } from '.';
import { wrapComponentInReduxForTesting } from '../../tests';

describe('<Footer />', () => {
  it('should render footer', () => {
    const { container } = wrapComponentInReduxForTesting(<Footer />);

    expect(container.querySelectorAll('footer a').length).toBeGreaterThan(0);
  });
});
