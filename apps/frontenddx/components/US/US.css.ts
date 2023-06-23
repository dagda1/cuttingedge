import { responsiveStyle, vars } from '@cutting/component-library';
import { globalStyle, style } from '@vanilla-extract/css';

export const main = style({
  position: 'relative',
  marginBottom: vars.space['large'],
  marginTop: vars.space['large'],
});

globalStyle(`${main} h1`, {
  position: 'relative',
  textAlign: 'center',
  marginBottom: 0,
  margin: '3rem 0',
});

export const image = style({
  ...responsiveStyle({
    mobile: {
      width: '25%',
    },
    tablet: {
      width: '20%',
    },
  }),
});

globalStyle(`${image} img`, {
  maxWidth: '100%',
});

export const heading = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  ...responsiveStyle({
    mobile: {
      flex: '0 0 50%',
    },
    tablet: {
      flex: 1,
    },
  }),
});

export const images = style({
  display: 'flex',
  flex: 1,
});

export const topImages = style({
  alignItems: 'flex-end',
  justifyContent: 'space-between',
});

export const bottomImages = style({
  alignItems: 'flex-start',
  justifyContent: 'space-between',
});
