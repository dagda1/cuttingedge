import { globalStyle, style } from '@vanilla-extract/css';
import { responsiveStyle } from '@cutting/component-library';

export const main = style({
  ...responsiveStyle({
    mobile: {
      border: '10px solid yellow',
    },
    tablet: {
      border: '10px solid green',
    },
    desktop: {
      border: '10px solid red',
    },
    wide: {
      border: '10px solid blue',
    },
  }),
});

globalStyle(`${main} h2:before`, {
  ...responsiveStyle({
    mobile: {
      content: '"mobile"',
    },
    tablet: {
      content: '"tablet"',
    },
    desktop: {
      content: '"desktop"',
    },
    wide: {
      content: '"wide"',
    },
  }),
});
