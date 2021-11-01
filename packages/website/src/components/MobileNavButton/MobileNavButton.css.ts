import { atoms } from '@cutting/component-library/src';
import { ComplexStyleRule, style } from '@vanilla-extract/css';

const buttonStyles: ComplexStyleRule = {
  borderRadius: '32px',
  fontSize: '18px',
  transition: 'none',
  background: 'transparent',
  border: 'none',
  padding: '0',
  marginTop: '1rem',
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
