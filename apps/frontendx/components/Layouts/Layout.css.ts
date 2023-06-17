import { globalStyle, style } from '@vanilla-extract/css';

export const main = style({
  margin: '0 auto',
  display: 'block',
});

globalStyle(`${main} section`, {
  position: 'relative',
  flex: 1,
});

export const layout = style({
  position: 'relative',
});
