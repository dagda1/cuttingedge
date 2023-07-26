import { globalStyle, style } from '@vanilla-extract/css';

globalStyle('*,*:before,*:after', {
  boxSizing: 'border-box',
});

globalStyle('html,body', {
  height: '100%',
  margin: 0,
});

globalStyle('body', {
  overflowX: 'hidden',
  overflowY: 'auto',
});

export const header = style({
  background: 'inherit',
});
