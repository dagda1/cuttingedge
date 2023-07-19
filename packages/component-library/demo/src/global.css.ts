import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '../../src/style/themes/vars.css';
import { palette } from '../../src/style/palette.css';
import { cuttingTheme } from '~/index';

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
  paddingBottom: 0,
  textShadow:
    '0 0 5px #fff, 0 0 10px #fff, 0 0 20px #ffffff, 0 0 30px #ffffff, 0 0 40px #ffffff, 0 0 55px #ffffff,0 0 75px #ffffff',
});

globalStyle(`${cuttingTheme}`, {
  backgroundImage: `url('${'/lightening.jpg'}') no-repeat center center fixed`,
  backgroundSize: 'cover',
});
