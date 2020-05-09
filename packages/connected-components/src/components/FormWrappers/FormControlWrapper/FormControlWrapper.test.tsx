/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable jest/expect-expect */
import React from 'react';
import { FormControlWrapperProps, ConnectedFormInput } from '.';
import { render } from '@testing-library/react';

const defaultProps: any = {
  handleSubmit: () => undefined,
  handleBlur: () => undefined,
  handleChange: () => undefined,
  handleReset: () => undefined,
  name: 'input',
  touched: {},
  errors: {},
  isValidating: false,
  isSubmitting: false,
  submitCount: 0,
  values: {},
  dirty: true,
  isValid: false,
  initialValues: {},
  label: 'input',
};

const wrap = (props: Partial<FormControlWrapperProps> = {}) => {
  const merged = { ...defaultProps, ...props };
  return render(<ConnectedFormInput {...merged} />);
};

describe('renderFormInput', () => {
  it('should render abel', () => {
    const { getByLabelText } = wrap();

    getByLabelText('input');
  });

  it('should render error label if invalid', () => {
    const { getByTestId, getByText } = wrap({
      invalid: true,
      errors: { input: 'something required' },
      touched: { input: true },
      submitCount: 1,
    });

    getByTestId('form-error');
    getByText('something required');
  });
});
