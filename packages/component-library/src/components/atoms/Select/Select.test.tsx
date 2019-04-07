import { shallow } from 'enzyme';
import React from 'react';
import { Select, SelectProps } from '.';

/* eslint-disable */
const wrap = (props: SelectProps) => shallow(<Select {...props} />);

describe('Select', () => {
  it.only('renders props when passed in', () => {
    const wrapper = wrap({ id: 'foo', options: [] });

    expect(wrapper.find({ id: 'foo' })).toHaveLength(1);
  });

  it('renders a default label by default', () => {
    const wrapper = wrap({ options: [] });

    const options = wrapper.find('option');

    expect(options).toHaveLength(1);
  });

  it('should render options from array of objects', () => {
    const countries = [{ id: 'uk', displayName: 'United Kingdom' }];

    const wrapper = wrap({
      options: countries,
      valueKey: 'id',
      optionKey: 'displayName'
    });

    const options = wrapper.find('option');

    expect(options.length).toBe(2);
  });

  it('should insert a divider into the select', () => {
    const countries = [{ id: 'uk', displayName: 'United Kingdom' }, { id: 'irleand', displayName: 'Ireland' }];

    const wrapper = wrap({
      options: countries,
      valueKey: 'id',
      optionKey: 'displayName',
      dividerAt: 1
    });

    const options = wrapper.find('option');

    expect(options).toHaveLength(4);

    const option = options.at(2);

    expect(option.props().disabled).toBe(true);
  });

  it('should use filterOptions prop to exclude options from <Select />', () => {
    const countries = [
      { id: 'uk', displayName: 'United Kingdom' },
      { id: 'ireland', displayName: 'Ireland' },
      { id: 'albania', displayName: 'Albania' }
    ];

    const wrapper = wrap({
      options: countries,
      valueKey: 'id',
      optionKey: 'displayName',
      filterOptions: (o) => ['uk', 'ireland'].indexOf(o.id.toString()) === -1
    });

    const options = wrapper.find('option');

    expect(options).toHaveLength(2);

    expect(options.at(1).props().value).toBe('albania');
  });
});
