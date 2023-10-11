import { globalStyle, style } from '@vanilla-extract/css';

export const white = style({
  background: '#ffffff',
  color: '#0A0A0A',
});

globalStyle(`${white} h2 span`, {
  fontSize: '60px',
});

globalStyle(`${white} p, ${white} a, ${white} div span, ${white} h1`, {
  color: '#000000',
});

export const topBubble = style({
  willChange: 'transform',
  transformStyle: 'preserve-3d',
  transform:
    'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(14.4113deg) rotateZ(0deg) skew(0deg, 0deg)',
  width: '300vw',
  height: '150vw',
  backgroundColor: '#000',
  borderRadius: '50%',
  marginLeft: '-100vw',
});
