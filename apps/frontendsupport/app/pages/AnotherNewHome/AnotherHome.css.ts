import { palette, responsiveStyle, vars } from '@cutting/component-library';
import { globalStyle, style } from '@vanilla-extract/css';

export const front = style({
  height: '90vh',
  border: '10px solid cyan',
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
  fontStyle: 'italic',
  textTransform: 'uppercase',
  ...responsiveStyle({
    mobile: {
      fontSize: '3rem',
      lineHeight: '3rem',
    },
    desktop: {
      fontSize: '6rem',
      lineHeight: '7rem',
    },
  }),
});

globalStyle('.hero-image', {
  // opacity: 0,
});

export const hdn = style({ display: 'none' });
