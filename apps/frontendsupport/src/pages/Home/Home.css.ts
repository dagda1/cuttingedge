import { responsiveStyle, vars } from '@cutting/component-library';
import { globalStyle, style } from '@vanilla-extract/css';

export const front = style({});

export const responsive = style({
  ...responsiveStyle({
    mobile: {
      border: '10px solid red',
    },
    tablet: {
      border: '10px solid green',
    },
    desktop: {
      border: '10px solid blue',
    },
    wide: {
      border: '10px solid yellow',
    },
    extraWide: {
      border: '10px solid cyan',
    },
  }),
});

globalStyle('.hero-title', {
  fontFamily: vars.fontFamily.heading,
  textTransform: 'uppercase',
  ...responsiveStyle({
    mobile: {
      fontSize: '2rem',
      lineHeight: '2rem',
    },
    tablet: {
      fontSize: '4rem',
      lineHeight: '4.5rem',
    },
    desktop: {
      fontSize: '5rem',
      lineHeight: '8rem',
    },
    wide: {
      fontSize: '7rem',
      lineHeight: '10rem',
    },
  }),
});

globalStyle('.hero-title.italic', {
  fontStyle: 'italic',
});

globalStyle('.hero-image img', {
  opacity: 0,
});

globalStyle('.hero-title2,.hero-title3', {
  fontFamily: vars.fontFamily.heading,
  textTransform: 'uppercase',
  ...responsiveStyle({
    mobile: {
      fontSize: '2rem',
      lineHeight: '3rem',
    },
    desktop: {
      fontSize: '4rem',
      lineHeight: '4rem',
    },
  }),
});

export const hdn = style({ display: 'none' });
