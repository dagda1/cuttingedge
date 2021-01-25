/* eslint-disable jest/consistent-test-it */
import { Button } from '../../src/components/atoms/Button/Button';
import { render } from '../webpack/render';

describe('<Button />', () => {
  test('renders a button', async () => {
    await render(<Button buttonStyle="primary">Primary</Button>, {
      viewport: { width: 100, height: 100, deviceScaleFactor: 1 },
    });
    expect(true).toBe(true);
  });
});
