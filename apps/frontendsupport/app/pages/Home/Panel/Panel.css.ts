import { vars } from '@cutting/component-library';
import { globalStyle, style } from '@vanilla-extract/css';

export const white = style({
  background: '#ffffff',
  color: '#0A0A0A',
});

export const dark = style({
  background: vars.backgroundColor.body,
});

globalStyle(`${white} h2 span`, {
  fontSize: '60px',
});

globalStyle(`${white} p, ${white} a, ${white} div span, ${white} h1, ${white} h2`, {
  color: '#000000',
});

globalStyle(`.testimonials figcaption a span, .testimonials blockquote:before, .testimonials blockquote:after`, {
  color: '#ffffff',
});
