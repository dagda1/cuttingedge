/* eslint-disable jest/consistent-test-it */
import { Button } from '@cutting/component-library';
import { render } from '@cutting/jest-playwright-react';

describe('<Button />', () => {
  test('renders a button', async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    await render(<Button buttonStyle="primary">Primary</Button>, {} as any);

    expect(true).toBe(true);
  });
});
