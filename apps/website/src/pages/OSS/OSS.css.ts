import { palette, responsiveStyle, vars } from '@cutting/component-library';
import { globalStyle, style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
});

globalStyle(`${container} h2`, {
  marginRight: vars.space['4x'],
});

export const icon = style({
  width: '50px',
});

export const repos = style({
  display: 'block',
  ...responsiveStyle({
    mobile: {},
    tablet: {
      display: 'flex',
      flexFlow: 'wrap',
    },
  }),
});

export const repo = style({
  marginRight: vars.space['1x'],
  ...responsiveStyle({
    mobile: {},
    tablet: {
      flex: '1 0 47%',
    },
    desktop: {
      flex: '1 0 21%',
    },
  }),
});

globalStyle(`${repo} a`, {
  display: 'inline-block',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: 'rgb(51, 51, 51)',
  borderImage: 'initial',
  overflow: 'auto',
  transition: 'all 0.2s ease',
  padding: '20px',
  height: '270px',
  color: palette.white,
  width: '100%',
});

globalStyle(`${repo} a:hover`, {
  borderColor: palette.white,
});

export const communityList = style({});

globalStyle(`${communityList} li`, {
  display: 'block',
});

globalStyle(`${communityList} a`, {
  textDecoration: 'underline',
});
