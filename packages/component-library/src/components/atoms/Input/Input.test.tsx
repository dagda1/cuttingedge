import { expect, it, describe } from 'vitest';
import { Input } from './Input';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { render, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';

const wrap = (props = {}) => render(<Input {...props} />);

describe('<Input />', () => {
  it('renders text input by default', () => {
    const { container } = wrap();

    expect(container.querySelector('input[type="text"]')).toBeTruthy();
  });

  it('should handle keyDown', () => {
    const onKeyDown = vi.fn();
    const { container } = wrap({ onKeyDown });
    const input = container.querySelector('input[type="text"]') as HTMLInputElement;

    fireEvent.keyDown(input, { key: 'Enter', code: 13, charCode: 13 });

    expect(onKeyDown).toHaveBeenCalled();
  });
});
