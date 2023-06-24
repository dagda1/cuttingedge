import { responsiveStyle } from '@cutting/component-library';
import { style } from '@vanilla-extract/css';

export const startContent = style({
  ...responsiveStyle({
    mobile: {
      flex: 1,
    },
    desktop: {
      flex: '0 0 100vw',
    },
  }),
});
