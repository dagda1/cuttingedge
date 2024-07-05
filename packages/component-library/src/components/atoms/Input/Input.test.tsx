// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { Input } from './Input';

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
