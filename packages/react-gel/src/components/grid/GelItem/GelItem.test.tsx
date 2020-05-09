import React from 'react';
import { GelItem, GelItemProps } from '.';
import { render } from '@testing-library/react';

const wrap = (props: GelItemProps = {}) =>
  render(
    <GelItem {...props}>
      <span>GelItem</span>
    </GelItem>,
  );

describe('<GelItem />', () => {
  it('renders a gel-layout__item class', () => {
    const { container } = wrap();

    expect(container.querySelector('.gel-layout__item')).toBeTruthy();
  });

  it('renders responsive classes', () => {
    const { container } = wrap({ m: '3/4', l: '3/10' });

    const el = container.querySelector('div')!;

    expect(el.classList.contains('gel-layout__item')).toBe(true);
    expect(el.classList.contains('gel-3/4@m')).toBe(true);
    expect(el.classList.contains('gel-3/10@l')).toBe(true);
  });
});
