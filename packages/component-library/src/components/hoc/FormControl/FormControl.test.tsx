import React from 'react';
import { Select } from '../../atoms/Select';
import { FormControl, FormControlProps } from '.';
import { render } from '@cutting/devtools/jest/react-testing-overrides';

const FormSelect = FormControl(Select);

const wrap = (props?: Partial<FormControlProps<HTMLSelectElement>>) =>
  render(<FormSelect options={[1, 2, 3]} label="label" {...props} />);

describe('FormControl', () => {
  it('should wrap component with label', () => {
    const { getByText } = wrap();

    getByText('label');
  });

  it('should render an error state', () => {
    const { getByTestId } = wrap({ invalid: true, errorMessage: 'error' });

    getByTestId('form-error');
  });

  it('should be able to tag an error label', () => {
    const { getByTestId, getByText } = wrap({
      invalid: true,
      errorDataSelector: 'error-selector',
      errorMessage: 'Error'
    });

    getByTestId('error-selector');

    getByText('Error');
  });

  it('should add aria tags for invalid', () => {
    const { container } = wrap({ invalid: true });

    expect(container.querySelector('[aria-invalid=true]')).toBeTruthy();
  });

  it('should add additional markup to FormControl', () => {
    const { getByText } = wrap({ additionalLabel: <em>additional</em> });

    getByText('additional');
  });
});
