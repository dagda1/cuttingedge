import { palette, responsiveStyle } from '@cutting/component-library';
import { globalStyle, style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
});

export const icon = style({
  width: '50px',
});

export const repos = style({
  display: 'grid',
  gap: '1rem',
  ...responsiveStyle({
    mobile: {},
    tablet: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    desktop: {
      gridTemplateColumns: 'repeat(4, 1fr)',
    },
  }),
});

export const repo = style({
  width: '100%',
});

globalStyle(`${repo} a`, {
  display: 'inline-block',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: 'rgb(51, 51, 51)',
  borderImage: 'initial',
  transition: 'all 0.2s ease',
  padding: '20px',
  height: '100%',
  color: palette.white,
  width: '100%',
});

globalStyle(`${repo} a:hover`, {
  borderColor: palette.white,
});

export const communityList = style({});

globalStyle(`${communityList} li`, {});

globalStyle(`${communityList} a`, {
  textDecoration: 'underline',
});
