import { style } from '@vanilla-extract/css';

export const dot = style({
  width: '12vw',
  height: '12vw',
  transformOrigin: '50%',
  cursor: 'pointer',
  borderRadius: '50%',
  flex: 'none',
  marginRight: '1vw',
  transform: 'perspective(373px)',
});

export const white = style({
  borderRadius: '150px',
});
