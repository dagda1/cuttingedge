import { responsiveStyle, vars } from '@cutting/component-library';
import { globalStyle, style } from '@vanilla-extract/css';

export const doubleImages = style({
  position: 'relative',
  width: '90rem',
  display: 'flex',
});

globalStyle(`${doubleImages} figure:first-child`, {
  flexBasis: '60rem',
  flexShrink: 0,
  height: '80vh',
});

globalStyle(`${doubleImages} figure:last-child`, {
  position: 'absolute',
  top: 'auto',
  ...responsiveStyle({
    mobile: {
      maxWidth: '51rem',
      height: '62vh',
      bottom: '-5rem',
      right: 0,
    },
    desktop: {
      maxWidth: '51rem',
      height: '62vh',
      bottom: '-5rem',
      right: '40rem',
    },
  }),
});

export const headings = style({
  display: 'flex',
});

globalStyle(`${headings} h2:not(:last-of-type)`, {
  marginRight: vars.space['xxxlarge'],
});

export const main = style({
  border: '10px solid red',
});
