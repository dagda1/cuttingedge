import React from 'react';
import { Select } from '../../atoms/Select';
import { FormControl, FormControlProps } from '.';
import { render } from '@cutting/devtools/jest/react-testing-overrides';

const FormSelect = FormControl(Select);

const wrap = (props?: Partial<FormControlProps<HTMLSelectElement>>) =>
  render(<FormSelect options={[1, 2, 3].map(String)} label="label" {...props} />);

describe('FormControl', () => {
  it('should wrap component with label', () => {
    const { findAllByText } = wrap();

    findAllByText('label');
  });

  // it('should render an error state', () => {
  //   const wrapper = wrap({ invalid: true, errorMessage: 'error' });

  //   const errorLabel = wrapper.find('[data-selector]');

  //   expect(errorLabel.text()).toBe('error');
  // });

  // it('should be able to tag an error label', () => {
  //   const wrapper = wrap({
  //     invalid: true,
  //     errorDataSelector: 'error-selector',
  //     errorMessage: 'Error'
  //   });

  //   const label = wrapper.find('[data-selector="error-selector"]').hostNodes();

  //   expect(label).toHaveLength(1);

  //   expect(label.text()).toBe('Error');
  // });

  // it('should add aria tags for invalid', () => {
  //   const wrapper = wrap({ invalid: true });

  //   expect(wrapper.find('[aria-invalid=true]').hostNodes()).toHaveLength(1);
  // });

  // it('should add additional markup to FormControl', () => {
  //   const wrapper = wrap({ additionalLabel: <em>additional</em> });

  //   const target = wrapper.find('em');

  //   expect(target).toHaveLength(1);

  //   expect(target.text()).toBe('additional');
  // });
});
