import { globalFontFace, globalStyle, style } from '@vanilla-extract/css';
import rem from 'polished/lib/helpers/rem.js';
import { palette } from '../src';
import { atoms } from '../src/style/atoms/atoms';
import { vars } from '../src/style/themes/vars.css';

globalFontFace('Oswald', {
  fontStyle: 'normal',
  fontWeight: 200,
  src: "url('https://fonts.googleapis.com/css?Oswald:wght@700&family=Cardo&display=swap')",
});

export const wrap = style({
  maxWidth: rem(1008),
  paddingLeft: vars.space['1x'],
  paddingRight: vars.space['2x'],
  margin: '0 auto',
});

globalStyle('body', {
  background: palette.black,
});

export const background = style({
  background: vars.backgroundColor.body,
});

export const layout = style({
  display: 'flex',
  flex: 1,
  textAlign: 'left',
  flexFlow: 'row wrap',
});

export const item = style([
  atoms({
    reset: 'div',
    ...{
      paddingLeft: {
        mobile: '1x',
        tablet: '3x',
      },
      display: {
        mobile: 'block',
        tablet: 'inline-block',
      },
      flex: {
        mobile: 'auto',
        tablet: '1 0 auto',
      },
    },
  }),
]);
