import { palette } from '@cutting/component-library';
import { globalStyle, style } from '@vanilla-extract/css';

globalStyle('*,*:before,*:after', {
  boxSizing: 'border-box',
});

// globalStyle('html, body', {
//   margin: 0,
//   padding: 0,
//   height: '100%',
//   textSizeAdjust: '100%',
// });

// globalStyle('main', {
//   display: 'block !IMPORTANT',
// });

export const body = style({
  // fontFamily: '"Bebas Neue", cursive !IMPORTANT',
  // color: palette.white,
  // background: palette.black,
  // height: '100%',
});

globalStyle('body,main', {
  overflowX: 'hidden',
  overflowY: 'scroll',
});
