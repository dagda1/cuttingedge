import { describe, it, expect } from '@jest/globals';
import type { AlertProps } from './Alert';
import { Alert } from './Alert';
import { render } from '@testing-library/react';

const wrap = (props: AlertProps) => render(<Alert {...props} />);

describe('<Alert />', () => {
  describe('success', () => {
    it('renders a success Alert', () => {
      const { getByText, getByRole } = wrap({ type: 'success', bannerHeading: 'bannerHeading', children: 'test' });

      expect(getByRole('alert')).toBeTruthy();
      expect(getByText('Success').tagName.toLowerCase()).toBe('h2');
      expect(getByText('bannerHeading').tagName.toLowerCase()).toBe('p');
    });
  });

  describe('error', () => {
    it('renders a error Alert', () => {
      const { getByText, getByRole } = wrap({ type: 'error', bannerHeading: 'bannerHeading', children: 'test' });

      expect(getByRole('alert')).toBeTruthy();
      expect(getByText('Error').tagName.toLowerCase()).toBe('h2');
      expect(getByText('bannerHeading').tagName.toLowerCase()).toBe('p');
    });
  });
});
