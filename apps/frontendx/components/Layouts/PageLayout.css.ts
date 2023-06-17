import { globalStyle, style } from '@vanilla-extract/css';
import { responsiveStyle, breakpoints, vars } from '@cutting/component-library';

export const main = style({
  ...responsiveStyle({
    mobile: {
      maxWidth: 'none',
      padding: `0 ${vars.space['small']}`,
    },
    tablet: {
      maxWidth: `${breakpoints.tablet}rem`,
    },
    desktop: {
      maxWidth: `${breakpoints.desktop}rem`,
    },
  }),
});

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
});

export const full = style({
  marginTop: vars.space['large'],
});

globalStyle(`${full} h1`, {
  ...responsiveStyle({
    mobile: {
      marginTop: vars.space['large'],
    },
    tablet: {
      marginTop: '0',
    },
  }),
});
