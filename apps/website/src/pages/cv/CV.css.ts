import { responsiveStyle } from '@cutting/component-library';
import { style } from '@vanilla-extract/css';

export const pdfViewer = style({
  width: '100%',
  ...responsiveStyle({
    mobile: {
      height: '85%',
    },
    desktop: {
      height: '90%',
    },
    wide: {
      height: '95%',
    },
  }),
});
