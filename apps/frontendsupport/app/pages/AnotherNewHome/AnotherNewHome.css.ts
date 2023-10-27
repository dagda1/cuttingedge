import { palette, responsiveStyle, vars } from '@cutting/component-library';
import { globalStyle, style } from '@vanilla-extract/css';

export const front = style({
  height: '90vh',
});

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

export const topBubbleWrapper = style({
  width: '100%',
  maxHeight: '100%',
  maxWidth: '100%',
  position: 'absolute',
  bottom: 'auto',
  left: 0,
  right: 0,
  overflow: 'hidden',
});

export const topBubble = style({
  width: '300vw',
  height: '80vh',
  backgroundColor: palette.white,
  borderRadius: '50%',
  marginLeft: '-100vw',
  position: 'relative',
});

globalStyle('.hero-title', {
  fontFamily: vars.fontFamily.heading,
  textTransform: 'uppercase',
  ...responsiveStyle({
    mobile: {
      fontSize: '1.75rem',
      lineHeight: '2rem',
    },
    tablet: {
      fontSize: '2.25rem',
      lineHeight: '3rem',
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
