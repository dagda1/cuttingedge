import { globalStyle, style } from '@vanilla-extract/css';

export const breaking = style({
  minHeight: '100vh',
});

globalStyle(`${breaking} img`, {
  zIndex: 3,
});
