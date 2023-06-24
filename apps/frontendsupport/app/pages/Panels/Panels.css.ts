import { responsiveStyle } from '@cutting/component-library';
import { globalStyle, style } from '@vanilla-extract/css';

export const caption = style({
  paddingLeft: '5rem',
});

export const tripleImages = style({
  position: 'relative',
  maxWidth: '110rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '10rem',
});

globalStyle(`${tripleImages} img`, {
  width: 'auto',
  height: 'auto',
});

globalStyle(`${tripleImages}.frameworks figure:first-child`, {
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

globalStyle(`${tripleImages}.oss figure:first-child`, {
  width: '24rem',
  height: '24rem',
  top: '-24rem',
  left: '-24rem',
  position: 'absolute',
});

globalStyle(`${tripleImages}.oss figure:nth-child(2)`, {
  width: '45vh',
  height: '40vh',
  position: 'absolute',
  top: '10%',
  right: '-6rem',
  zIndex: 3,
});

globalStyle(`${tripleImages}.oss figure:last-child`, {
  width: 'auto',
  height: 'auto',
  position: 'absolute',
  bottom: '0',
  left: '-20%',
});

globalStyle(`${tripleImages}.clients figure:first-child`, {
  width: '50vh',
  height: '50vh',
  top: '-9rem',
  right: '-15rem',
  position: 'absolute',
});

globalStyle(`${tripleImages}.clients figure:nth-child(2)`, {
  width: '55vh',
  height: '50vh',
  position: 'absolute',
  top: '-10%',
  left: '-50%',
  zIndex: 3,
});

globalStyle(`${tripleImages}.clients figure:last-child`, {
  width: '25rem',
  height: '25rem',
  position: 'absolute',
  bottom: '-43rem',
  left: '-30rem',
});
