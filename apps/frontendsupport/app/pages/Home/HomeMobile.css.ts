import { responsiveStyle } from '@cutting/component-library';
import { style } from '@vanilla-extract/css';

export const bgWrap = style({
  ...responsiveStyle({
    mobile: {
      display: 'block',
      clip: 'rect(0, auto, auto, 0)',
      position: 'absolute',
      top: 0,
      left: 0,
      height: '100%',
      width: '100%',
    },
    desktop: {
      display: 'none',
      clip: 'auto',
      position: 'static',
      width: 'auto',
      height: 'auto',
    },
  }),
});

export const desktop = style({
  ...responsiveStyle({
    mobile: {
      display: 'none',
    },
    desktop: {
      display: 'block',
    },
  }),
});
