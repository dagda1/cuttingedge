import { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import { Error, ErrorLabel, ErrorProps } from '.';

const wrap = (props: ErrorProps) => shallow(<ErrorLabel {...props} />);

describe('ErrorLabel', () => {
  it('should tag custom data-selector', () => {
    const wrapper = wrap({
      id: 'error',
      dataSelector: 'error-selector',
      errorMessage: 'Error'
    });

    const label = wrapper
      .find(Error)
      .dive()
      .find('[data-selector="error-selector"]');
    expect(label).toHaveLength(1);

    expect(label.text()).toBe('Error');
  });

  it('renders consistently', () => {
    const errorLabel = renderer.create(<ErrorLabel id="error" errorMessage="error" />).toJSON();

    expect(errorLabel).toMatchSnapshot();
  });
});
