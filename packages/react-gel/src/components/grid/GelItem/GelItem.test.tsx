import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { GelItem, GelItemProps } from '.';

const wrap = (props: GelItemProps = {}) =>
  shallow(
    <GelItem {...props}>
      <span>GelItem</span>
    </GelItem>
  );

describe('<GelItem />', () => {
  it('renders a div by default', () => {
    const wrapper = wrap();

    expect(wrapper.find('div')).toHaveLength(1);
  });

  it('renders a gel-layout__item class', () => {
    const wrapper = wrap();

    expect(wrapper.find('.gel-layout__item')).toHaveLength(1);
  });

  it('renders responsive classes', () => {
    const wrapper = wrap({ m: '3/4', l: '3/10' });

    const el = wrapper.find('div');

    expect(el.hasClass('gel-layout__item')).toBe(true);
    expect(el.hasClass('gel-3/4@m')).toBe(true);
    expect(el.hasClass('gel-3/10@l')).toBe(true);
  });

  it('renders correctly', () => {
    renderer.create(<GelItem l="1/2">Foo</GelItem>);
  });
});
