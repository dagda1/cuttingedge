import { globalStyle, style } from '@vanilla-extract/css';

export const white = style({
  background: '#ffffff',
  color: '#0A0A0A',
});

globalStyle(`${white} h2 span`, {
  fontSize: '60px',
});

globalStyle(`${white} p, ${white} a, ${white} div span, ${white} h1, ${white} h2`, {
  color: '#000000',
});
