import React from 'react';
import { Select, SelectProps } from '.';
import { render } from '@cutting/devtools/jest/react-testing-overrides';

const wrap = (props: SelectProps) => render(<Select {...props} />);

describe('Select', () => {
  it('renders props when passed in', () => {
    const { container } = wrap({ id: 'foo', options: [] });

    expect(container.querySelector('#foo')).toBeTruthy();
  });

  it('should a default label', () => {
    const { container } = wrap({ options: [] });

    const options = container.getElementsByTagName('option');

    expect(options).toHaveLength(1);
  });

  it('should render options from array of objects', () => {
    const countries = [{ id: 'uk', displayName: 'United Kingdom' }];

    const { container } = wrap({
      options: countries,
      valueKey: 'id',
      optionKey: 'displayName'
    });

    const options = container.getElementsByTagName('option');

    expect(options.length).toBe(2);
  });

  it('should insert a divider into the select', () => {
    const countries = [{ id: 'uk', displayName: 'United Kingdom' }, { id: 'irleand', displayName: 'Ireland' }];

    const { container } = wrap({
      options: countries,
      valueKey: 'id',
      optionKey: 'displayName',
      dividerAt: 1
    });

    const options = container.getElementsByTagName('option');

    expect(options).toHaveLength(4);

    const option = options[2];

    expect(option.hasAttribute('disabled')).toBe(true);
  });

  it('should use filterOptions prop to exclude options from <Select />', () => {
    const countries = [
      { id: 'uk', displayName: 'United Kingdom' },
      { id: 'ireland', displayName: 'Ireland' },
      { id: 'albania', displayName: 'Albania' }
    ];

    const { container } = wrap({
      options: countries,
      valueKey: 'id',
      optionKey: 'displayName',
      filterOptions: (o) => ['uk', 'ireland'].indexOf(o.id.toString()) === -1
    });

    const options = container.getElementsByTagName('option');

    expect(options).toHaveLength(2);

    expect(options[1].value).toBe('albania');
  });

  it('should render a select from an arraoy of strings', () => {
    const colours = ['green', 'blue', 'purple'];

    const { container } = wrap({
      options: colours
    });

    const options = container.getElementsByTagName('option');

    expect(options).toHaveLength(4);
  });
});
