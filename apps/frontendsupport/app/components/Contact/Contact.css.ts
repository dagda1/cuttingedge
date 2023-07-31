import { responsiveStyle } from '@cutting/component-library';
import { style } from '@vanilla-extract/css';

export const container = style({
  ...responsiveStyle({
    wide: {
      width: '40%',
    },
    desktop: {
      width: '50%',
    },
    tablet: {
      width: '75%',
    },
    mobile: {
      width: '95%',
    },
  }),
});
