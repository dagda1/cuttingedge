import { globalStyle, style } from '@vanilla-extract/css';

export const root = style({
  whiteSpace: 'nowrap',
});

globalStyle(`${root} a`, {
  padding: 0,
});
