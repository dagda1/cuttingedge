import { expect, it, describe } from '@jest/globals';
import { ErrorMessage, ErrorProps } from './ErrorMessage';
import { render } from '@testing-library/react';

const wrap = (props: ErrorProps) => render(<ErrorMessage {...props} />);

describe('ErrorLabel', () => {
  it('should tag custom data-selector', () => {
    const { getByTestId } = wrap({
      id: 'error',
      dataSelector: 'error-selector',
      errorMessage: 'Error',
    });

    const label = getByTestId('error-selector') as HTMLLabelElement;

    expect(label.innerHTML).toBe('Error');
  });
});
