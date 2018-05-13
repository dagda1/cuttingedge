import { mount } from 'enzyme';
import * as React from 'react';
import { FormControlProps, renderFormInput as RenderFormInput } from '.';

const wrap = (props: FormControlProps) => mount(<RenderFormInput {...props} />);

describe('renderFormInput', () => {
  it('should render error label if invalid', () => {
    const wrapper = wrap({
      input: {} as any,
      meta: {
        invalid: true,
        submitFailed: true,
        error: 'some error',
        touched: true
      } as any
    });

    const error = wrapper.find('[data-selector]');

    expect(error.props()['data-selector']).toBe('form-error');
    expect(error.text()).toBe('some error');
  });
});
