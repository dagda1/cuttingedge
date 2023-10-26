import { style } from '@vanilla-extract/css';
import { responsiveStyle } from '@cutting/component-library';

export const mobile = style({
  ...responsiveStyle({
    mobile: {
      display: 'flex',
      alignItems: 'center',
    },
    desktop: {
      display: 'none',
    },
  }),
});

export const desktop = style({
  ...responsiveStyle({
    mobile: {
      display: 'none',
    },
    desktop: {
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
