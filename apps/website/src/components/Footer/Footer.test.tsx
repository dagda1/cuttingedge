import { Footer } from '.';
import { wrapComponentForTesting } from '../../tests';
import { describe, it, expect } from '@jest/globals';

describe('<Footer />', () => {
  it('should render footer', () => {
    const { container } = wrapComponentForTesting(<Footer />);

    expect(container.querySelectorAll('a').length).toBeGreaterThan(0);
  });
});
