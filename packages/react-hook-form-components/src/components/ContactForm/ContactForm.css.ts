import { responsiveStyle } from '@cutting/component-library';
import { globalStyle, style } from '@vanilla-extract/css';

export const container = style({
  ...responsiveStyle({
    mobile: {
      width: '100%',
    },
    tablet: {
      width: '75%',
    },
    desktop: {
      width: '33%',
    },
  }),
});

export const buttonContainer = style({
  ...responsiveStyle({
    mobile: {
      textAlign: 'left',
    },
    tablet: {
      textAlign: 'center',
    },
  }),
});

globalStyle(`${buttonContainer} button`, {
  ...responsiveStyle({
    mobile: {
      width: '100%',
    },
    tablet: {
      width: 'auto',
    },
  }),
});

export const hidden = style({
  display: 'none',
});
