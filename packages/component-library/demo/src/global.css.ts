import { globalFontFace, globalStyle, style } from '@vanilla-extract/css';
import { atoms } from '../../src/style/atoms/atoms';
import { vars } from '../../src/style/themes/vars.css';
import { palette } from '../../src/style/palette.css';
import { responsiveStyle } from '../../src/style/responsive-style';

globalFontFace('Oswald', {
  fontStyle: 'normal',
  fontWeight: 200,
  src: "url('https://fonts.googleapis.com/css?Oswald:wght@700&family=Cardo&display=swap')",
});

export const wrap = style({
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
  responsiveStyle({
    mobile: {
      flex: 'auto',
    },
    tablet: {
      flex: '1 0 auto',
    },
  }),
  atoms({
    reset: 'div',
    ...{
      paddingLeft: {
        mobile: '1x',
        tablet: '3x',
      },
      display: {
        mobile: 'block',
        tablet: 'inlineBlock',
      },
    },
  }),
]);
