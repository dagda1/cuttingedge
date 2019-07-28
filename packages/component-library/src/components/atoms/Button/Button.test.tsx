import React from 'react';
import { Button, ButtonProps } from '.';
import { render, fireEvent } from '@testing-library/react';

const wrap = (props: Partial<ButtonProps> = {}) => render(<Button {...{ children: 'Click Me!', ...props }} />);

describe('Button', () => {
  it('should render a button and text', () => {
    const { getByText } = wrap();

    const button = getByText('Click Me!') as HTMLButtonElement;

    expect(button.type).toBe('button');
  });

  it('should assign a click handler', () => {
    const onClick = jest.fn();
    const { getByText } = wrap({ onClick });

    fireEvent.click(getByText('Click Me!'));

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
