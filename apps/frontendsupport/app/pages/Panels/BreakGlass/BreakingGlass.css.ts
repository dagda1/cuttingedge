import { globalStyle, style } from '@vanilla-extract/css';

export const breaking = style({
  minHeight: '100vh',
});

export const splitter = style({
  width: '60%',
});

globalStyle(`${breaking} img`, {
  zIndex: 3,
});

export const services = style({
  left: '50%',
  transform: 'translateX(-50%)',
});
