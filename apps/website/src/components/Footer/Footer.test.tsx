import { Footer } from '.';
import { wrapComponentInReduxForTesting } from '../../tests';
import { describe, it, expect } from '@jest/globals';

describe('<Footer />', () => {
  it('should render footer', () => {
    const { container } = wrapComponentInReduxForTesting(<Footer />);

    expect(container.querySelectorAll('footer a').length).toBeGreaterThan(0);
  });
});
