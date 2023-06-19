import { responsiveStyle } from '@cutting/component-library';
import { globalStyle, style } from '@vanilla-extract/css';

export const root = style({
  display: 'flex',
  flexDirection: 'column',
  ...responsiveStyle({
    mobile: {},
    tablet: {
      alignItems: 'center',
    },
  }),
});

globalStyle(`${root} h1`, {
  marginBottom: '0',
});

globalStyle(`${root} fieldset`, {
  border: 'none',
});

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  ...responsiveStyle({
    mobile: {
      width: '100%',
    },
    tablet: {
      width: '50vw',
    },
    desktop: {
      width: '35vw',
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
      width: '50%',
    },
  }),
});
