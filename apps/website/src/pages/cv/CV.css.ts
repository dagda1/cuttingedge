import { palette, responsiveStyle, vars } from '@cutting/component-library';
import { globalStyle, style } from '@vanilla-extract/css';

export const pdfViewer = style({
  ...responsiveStyle({
    mobile: {
      display: 'block',
    },
    desktop: {
      display: 'flex',
      justifyContent: 'space-around',
    },
  }),
});

globalStyle(`${pdfViewer} h2`, {
  margin: `0`,
});

globalStyle(`${pdfViewer} + iframe`, {
  marginTop: vars.space['xxsmall'],
  marginBottom: vars.space['xxsmall'],
  height: '100%',
  width: '100%',
});

export const main = style({
  display: 'block',
});

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
