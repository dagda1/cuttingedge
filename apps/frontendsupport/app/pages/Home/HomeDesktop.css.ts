import { responsiveStyle } from '@cutting/component-library';
import { style } from '@vanilla-extract/css';

export const panels = style({
  display: 'flex',
  flexWrap: 'nowrap',
  overscrollBehavior: 'none',
  flexDirection: 'row',
  ...responsiveStyle({
    mobile: {
      display: 'none',
    },
    desktop: {
      display: 'flex',
    },
  }),
});

export const breaking = style({
  ...responsiveStyle({
    mobile: {
      display: 'none !IMPORTANT',
    },
    desktop: {
      display: 'flex !IMPORTANT',
    },
  }),
});
