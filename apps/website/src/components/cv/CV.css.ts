import { palette, vars } from '@cutting/component-library';
import { globalStyle, style } from '@vanilla-extract/css';

export const pdfViewer = style({
  display: 'flex',
  flex: '1 1 auto',
  flexDirection: 'column',
  marginRight: vars.space['2x'],
});

globalStyle(`${pdfViewer} iframe`, {
  flex: 1,
  marginTop: vars.space['1x'],
});

export const main = style({});

globalStyle(`${main} h1`, {
  textAlign: 'center',
});

export const link = style({
  color: palette.white,
});

globalStyle(`${link} span`, {
  display: 'inline-block',
  borderBottom: `1px solid ${palette.white}`,
});
