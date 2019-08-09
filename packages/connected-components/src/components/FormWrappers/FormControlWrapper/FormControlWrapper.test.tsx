import React from 'react';
import { FormControlWrapperProps, ConnectedFormInput } from '.';
import { render } from '@cutting/devtools/jest/react-testing-overrides';

const wrap = (props: FormControlWrapperProps) => render(<ConnectedFormInput {...props} />);

describe('renderFormInput', () => {
  it('should render error label if invalid', () => {
    const { getByTestId, getByText } = wrap({
      // input: {} as any,
      // meta: {
      //   invalid: true,
      //   submitFailed: true,
      //   error: 'some error',
      //   touched: true
      // } as any
    });

    getByTestId('form-error');
    getByText('some error');
  });
});
