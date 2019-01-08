import React from 'react';
import { Rhombus } from '.';
import { shallow } from 'enzyme';

describe('<Rhombus/>', () => {
  it('should render an svg', () => {
    const wrapper = shallow(<Rhombus />);

    expect(wrapper.find('svg')).toHaveLength(1);
  });
});
