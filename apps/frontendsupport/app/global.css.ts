import { globalStyle, style } from '@vanilla-extract/css';

globalStyle('*,*:before,*:after', {
  boxSizing: 'border-box',
});

globalStyle('main', {
  overflowX: 'hidden',
  overflowY: 'hidden',
});

export const header = style({
  background: 'inherit',
});
