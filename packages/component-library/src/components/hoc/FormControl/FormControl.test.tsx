/* eslint-disable jest/expect-expect */
import { expect, it, describe } from '@jest/globals';
import { Input } from '../../atoms/Input';
import { FormControl, FormControlProps } from '.';
import { render, RenderResult } from '@testing-library/react';

const FormInput = FormControl(Input);

const wrap = (props?: Partial<FormControlProps<HTMLInputElement>>): RenderResult =>
  render(<FormInput value={props?.value} label="label" {...props} />);

describe('FormControl', () => {
  it('should wrap component with label', () => {
    const { getByText } = wrap();

    getByText('label');
  });

  it('should render an error state', () => {
    const { getByTestId } = wrap({ invalid: true, errorMessage: 'error' });

    getByTestId('form-control-error');
  });

  it('should be able to tag an error label', () => {
    const { getByTestId, getByText } = wrap({
      invalid: true,
      errorDataSelector: 'error-selector',
      errorMessage: 'Error',
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
