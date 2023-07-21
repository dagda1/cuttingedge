import { responsiveStyle } from '@cutting/component-library';
import { style } from '@vanilla-extract/css';

export const panel = style({
  ...responsiveStyle({
    desktop: {
      // marginRight: '20vw',
    },
  }),
});
