import { globalStyle, style } from '@vanilla-extract/css';
import { tripleImages } from '../Panels.css';
import { responsiveStyle } from '@cutting/component-library';

export const typescript = style({
  position: 'absolute',
  left: '-21rem',
  ...responsiveStyle({
    mobile: {
      top: 'auto',
    },
    desktop: {
      top: '-28rem',
    },
    wide: {
      top: '-40rem',
    },
  }),
});

globalStyle(`${tripleImages}.frameworks figure:last-child`, {
  width: '20vh',
  height: '13rem',
  position: 'absolute',
  bottom: '-10%',
  left: '-20%',
});

globalStyle(`${tripleImages}.frameworks figure:nth-child(2)`, {
  width: '45vh',
  height: '50vh',
  position: 'absolute',
  top: '10%',
  right: '-0',
});
