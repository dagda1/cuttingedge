import { globalStyle, style } from '@vanilla-extract/css';

export const breaking = style({
  background: '#138F4A',
});

globalStyle('.bglass-left', {
  right: '50%',
});

globalStyle('.bglass-right', {
  left: '50%',
});
