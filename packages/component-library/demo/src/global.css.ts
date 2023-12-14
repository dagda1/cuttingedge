import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '../../src/style/themes/vars.css.js';
import { cuttingTheme } from '~/index';

export const background = style({
  marginTop: vars.space['large'],
});

globalStyle(`${cuttingTheme} h1`, {
  marginTop: 0,
  marginBottom: 0,
  paddingBottom: 0,
  textShadow:
    '0 0 5px #fff, 0 0 10px #fff, 0 0 20px #ffffff, 0 0 30px #ffffff, 0 0 40px #ffffff, 0 0 55px #ffffff,0 0 75px #ffffff',
});

globalStyle(`${cuttingTheme}`, {
  background: `url('${'/lightening.png'}') no-repeat center center fixed`,
});
