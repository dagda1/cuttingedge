import { style } from '@vanilla-extract/css';
import { responsiveStyle } from '@cutting/component-library';

export const mobile = style({
  ...responsiveStyle({
    mobile: {
      display: 'flex',
      alignItems: 'center',
    },
    tablet: {
      display: 'none',
    },
  }),
});

export const tablet = style({
  ...responsiveStyle({
    mobile: {
      display: 'none',
    },
    tablet: {
      display: 'flex',
      alignItems: 'center',
    },
  }),
});

export const container = style({
  ...responsiveStyle({
    mobile: {
      minWidth: 160,
      minHeight: 80,
      maxWidth: 160,
      maxHeight: 80,
    },
  }),
});
