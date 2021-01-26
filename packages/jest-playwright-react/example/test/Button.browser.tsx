/* eslint-disable jest/consistent-test-it */
import { Button } from '@cutting/component-library';
import { render } from '@cutting/jest-playwright-react';

describe('<Button />', () => {
  test('renders a button', async () => {
    await render(<Button buttonStyle="primary">Primary</Button>, {
      viewport: { width: 100, height: 100 },
    });

    expect(true).toBe(true);
  });
});
