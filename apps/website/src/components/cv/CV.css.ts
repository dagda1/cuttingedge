import { palette, responsiveStyle, vars } from '@cutting/component-library';
import { globalStyle, style } from '@vanilla-extract/css';

export const pdfViewer = style({
  display: 'flex',

  ...responsiveStyle({
    mobile: {
      flexDirection: 'column',
    },
    tablet: {
      justifyContent: 'space-around',
      flexDirection: 'row',
    },
    desktop: {
      justifyContent: 'space-evenly',
    },
  }),
});

globalStyle(`${pdfViewer} h2`, {
  margin: `0`,
});

globalStyle(`${pdfViewer} + iframe`, {
  marginTop: vars.space['1x'],
  marginBottom: vars.space['1x'],
  flex: 1,
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
