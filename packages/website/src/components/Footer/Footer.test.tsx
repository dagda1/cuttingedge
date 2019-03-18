import { Footer } from '.';
import { wrapComponentInReduxForTesting } from '../../tests';
import { NavLink } from 'react-router-dom';

describe('<Footer />', () => {
  it('should render footer', () => {
    const footer = wrapComponentInReduxForTesting(Footer, {}, {});

    expect(footer.find(NavLink).length).toBeGreaterThan(0);
  });
});
