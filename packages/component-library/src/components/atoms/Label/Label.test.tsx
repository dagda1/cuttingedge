import { shallow } from 'enzyme';
import * as React from 'react';
import { Label, LabelProps } from '.';

const wrap = (props: LabelProps = {}) => shallow(<Label {...props}>label</Label>);

describe('Label', () => {
  it('renders a label', () => {
    const wrapper = wrap();

    expect(wrapper.find('label')).toHaveLength(1);
  });
});
