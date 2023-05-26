import { atoms, vars } from '@cutting/component-library';
import type { ComplexStyleRule } from '@vanilla-extract/css';
import { style } from '@vanilla-extract/css';

const buttonStyles: ComplexStyleRule = {
  borderRadius: '32px',
  fontSize: '18px',
  transition: 'none',
  background: 'transparent',
  border: 'none',
  padding: '0',
  marginTop: vars.space['xxsmall'],
};

export const MobileNavButtonActive = style([{ ...buttonStyles, color: '#0000' }]);

export const MobileNavButton = style([
  { ...buttonStyles, color: '#546e7a' },
  atoms({
    display: {
      mobile: 'block',
      tablet: 'none',
    },
  }),
]);

export const MobileNavButtonIcon = style({
  width: '2.5rem',
  height: '2.5rem',
});

export const MobileNavButtonIconPath = style({
  fill: '#000',
});
