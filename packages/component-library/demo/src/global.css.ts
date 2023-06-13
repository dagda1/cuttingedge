import { globalStyle, style } from '@vanilla-extract/css';
import { atoms } from '../../src/style/atoms/atoms';
import { vars } from '../../src/style/themes/vars.css';
import { palette } from '../../src/style/palette.css';
import { cuttingTheme } from '~/index';

// globalFontFace('Oswald', {
//   fontStyle: 'normal',
//   fontWeight: 200,
//   src: "url('https://fonts.googleapis.com/css?Oswald:wght@700&family=Cardo&display=swap')",
// });

// globalFontFace('Roboto', {
//   fontStyle: 'normal',
//   fontWeight: 600,
//   src: "url('https://fonts.googleapis.com/css?family=Roboto:100,100&amp;display=swap')",
// });

// globalFontFace('"Bebas Neue"', {
//   src: "url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap')",
//   fontStyle: 'normal',
//   fontWeight: 400,
// });

// globalStyle('h1', {
//   border: '1px solid red !important',
// });

globalStyle('body', {
  background: palette.black,
});

export const background = style({
  marginTop: vars.space['large'],
  background: vars.backgroundColor.body,
});

globalStyle(`${cuttingTheme} h1`, {
  marginTop: 0,
  marginBottom: 0,
  paddingTop: 0,
  paddingBottom: 0,
  textShadow:
    '0 0 5px #fff, 0 0 10px #fff, 0 0 20px #ffffff, 0 0 30px #ffffff, 0 0 40px #ffffff, 0 0 55px #ffffff,0 0 75px #ffffff',
});
