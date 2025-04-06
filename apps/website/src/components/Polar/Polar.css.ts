import { responsiveStyle } from '@cutting/component-library';
import { style } from '@vanilla-extract/css';

export const main = style({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
});

export const container = style({
  flex: 1,
  overflow: 'hidden',
});

export const expression = style({
  ...responsiveStyle({
    mobile: {
      fontSize: '1rem',
    },
    tablet: {
      fontSize: '1.5rem',
    },
    desktop: {
      fontSize: '2rem',
    },
  }),
});
