import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import type { ErrorProps } from './ErrorMessage';
import { ErrorMessage } from './ErrorMessage';

const wrap = (props: ErrorProps) => render(<ErrorMessage {...props} />);

describe('ErrorLabel', () => {
  it('should tag custom data-testid', () => {
    const { getByTestId } = wrap({
      id: 'error',
      dataSelector: 'error-selector',
      errorMessage: 'Error',
    });

    const label = getByTestId('error-selector') as HTMLLabelElement;

    expect(label.innerHTML).toContain('Error');
  });
});
