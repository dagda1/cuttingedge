import { globalFontFace, style } from '@vanilla-extract/css';
import { rem } from 'polished';
import { atoms } from '../src/style/atoms/atoms';
import { vars } from '../src/style/themes/vars.css';

globalFontFace('Tahi', {
  src: `url('https://assets.website-files.com/60dbf2aaf4673e5eb42541b6/60f3ac325d007b530e26db11_PlusJakartaSans-Bold.woff2') format('woff2')`,
  fontWeight: 700,
  fontStyle: 'normal',
  fontDisplay: 'swap',
});

globalFontFace('Tahi', {
  src: `url('https://assets.website-files.com/60dbf2aaf4673e5eb42541b6/60f1379eed27dcc885ef3715_PlusJakartaSans-Light.woff2') format('woff2')`,
  fontWeight: 300,
  fontStyle: 'normal',
  fontDisplay: 'swap',
});

globalFontFace('Tahi', {
  src: `url('https://assets.website-files.com/60dbf2aaf4673e5eb42541b6/60f3ac7b24a8612974fadb83_PlusJakartaSans-Medium.woff2') format('woff2')`,
  fontWeight: 500,
  fontStyle: 'normal',
  fontDisplay: 'swap',
});

globalFontFace('Tahi', {
  src: `url('https://assets.website-files.com/60dbf2aaf4673e5eb42541b6/60f1379eed27dc6443ef3716_PlusJakartaSans-Regular.woff2') format('woff2')`,
  fontWeight: 400,
  fontStyle: 'normal',
  fontDisplay: 'swap',
});

export const wrap = style({
  maxWidth: rem(1008),
  paddingLeft: vars.space['2x'],
  paddingRight: vars.space['3x'],
  margin: '0 auto',
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
