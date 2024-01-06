import { expect, it, describe } from 'vitest';
import type { ButtonProps } from './Button';
import { Button } from './Button';
import { render, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';

const wrap = (props: Partial<ButtonProps> = {}) => render(<Button {...{ children: 'Click Me!', ...props }} />);

describe('Button', () => {
  it('should render a button and text', () => {
    const { getByText } = wrap();

    const button = getByText('Click Me!').parentElement as HTMLButtonElement;

    expect(button.type).toBe('button');
  });

  it('should assign a click handler', () => {
    const onClick = vi.fn();
    const { getByText } = wrap({ onClick });

    fireEvent.click(getByText('Click Me!'));

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('should add a data-testid', () => {
    const { getByTestId } = wrap({ dataSelector: 'the-button' });

    const button = getByTestId('the-button') as HTMLButtonElement;

    expect(button).toBeDefined();
  });

  it('should add aria-label and aria-labelledby attributes', () => {
    const { getByLabelText } = wrap({
      ariaLabel: 'label',
      ariaLabelledBy: 'labelled by',
    });

    const button = getByLabelText('label') as HTMLButtonElement;

    expect(button.getAttribute('aria-labelledby')).toBe('labelled by');
  });
});
