import React from 'react';
import { Input } from '.';
import { render, fireEvent } from '@cutting/devtools/jest/react-testing-overrides';

const wrap = (props = {}) => render(<Input {...props} />);

describe('<Input />', () => {
  it('renders text input by default', () => {
    const { container } = wrap();

    expect(container.querySelector('input[type="text"]')).toBeTruthy();
  });

  it('should handle keyDown', () => {
    const onKeyDown = jest.fn();
    const { container } = wrap({ onKeyDown });
    const input = container.querySelector('input[type="text"]') as HTMLInputElement;

    fireEvent.keyDown(input, { key: 'Enter', code: 13, charCode: 13 });

    expect(onKeyDown).toHaveBeenCalled();
  });
});
