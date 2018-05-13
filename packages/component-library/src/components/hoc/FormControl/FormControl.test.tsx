import { mount } from 'enzyme';
import * as React from 'react';
import { Select } from '../../atoms/Select/Select';
import { FormControl } from './FormControl';

const FormSelect = FormControl(Select);

const wrap = (props?) =>
  mount(<FormSelect options={[1, 2, 3]} label="label" {...props} />);

describe('FormControl', () => {
  it('should wrap component with label', () => {
    const wrapper = wrap();

    expect(wrapper.find('label')).toHaveLength(1);
  });

  it('should render an error state', () => {
    const wrapper = wrap({ invalid: true, errorMessage: 'error' });

    const errorLabel = wrapper.find('[data-selector]');

    expect(errorLabel.text()).toBe('error');
  });

  it('should create error-data-selector when data-selector exists', () => {
    const wrapper = wrap({
      'invalid': true,
      'data-selector': 'wrapper',
      'errorMessage': 'Error'
    });

    const label = wrapper.find('[data-selector="wrapper-error"]');

    expect(label).toHaveLength(1);

    expect(label.text()).toBe('Error');
  });

  it('should be able to tag an error label', () => {
    const wrapper = wrap({
      invalid: true,
      errorDataSelector: 'error-selector',
      errorMessage: 'Error'
    });

    const label = wrapper.find('[data-selector="error-selector"]').hostNodes();

    expect(label).toHaveLength(1);

    expect(label.text()).toBe('Error');
  });

  it('should add aria tags for invalid', () => {
    const wrapper = wrap({ invalid: true });

    expect(wrapper.find('[aria-invalid=true]').hostNodes()).toHaveLength(1);
  });

  it('should add additional markup to FormControl', () => {
    const wrapper = wrap({ additionalLabel: <em>additional</em> });

    const target = wrapper.find('em');

    expect(target).toHaveLength(1);

    expect(target.text()).toBe('additional');
  });
});
