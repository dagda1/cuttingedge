import React from 'react';
import { Button, ButtonProps } from '.';
import { render, fireEvent } from '@cutting/devtools/jest/react-testing-overrides';

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

  it('should add a data-selector', () => {
    const { getByTestId } = wrap({ dataSelector: 'the-button' });

    const button = getByTestId('the-button') as HTMLButtonElement;

    expect(button).toBeDefined();
  });
});
