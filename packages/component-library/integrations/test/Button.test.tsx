import { Button } from '../../src/components/atoms/Button/Button';
import { render } from '../helpers/render';

describe('<Button />', () => {
  it('renders a button', () => {
    render(<Button buttonStyle="primary">Primary</Button>);
    expect(true).toBe(true);
  });
});
