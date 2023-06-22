import { responsiveStyle } from '@cutting/component-library';
import { style } from '@vanilla-extract/css';

export const panels = style({
  flexWrap: 'nowrap',
  overscrollBehavior: 'none',
  flexDirection: 'column',
  ...responsiveStyle({
    mobile: {
      display: 'flex',
    },
    desktop: {
      display: 'none',
    },
  }),
});
