import { globalStyle, style } from '@vanilla-extract/css';

globalStyle('*,*:before,*:after', {
  boxSizing: 'border-box',
});

globalStyle('body,main', {
  overflowX: 'hidden',
  overflowY: 'scroll',
});

export const header = style({
  background: 'inherit',
});
