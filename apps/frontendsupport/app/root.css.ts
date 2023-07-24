import { responsiveStyle, vars } from '@cutting/component-library';
import { style } from '@vanilla-extract/css';

export const body = style({
  color: vars.foregroundColor.neutral,
  background: vars.backgroundColor.body,
});

export const cookieContainer = style({
  alignItems: 'center !important',
});

export const cookieContent = style({
  display: 'flex',
  flexGrow: 1,
  flexShrink: 0,
  ...responsiveStyle({
    mobile: {
      justifyContent: 'center',
    },
    desktop: {
      justifyContent: 'flex-end',
    },
  }),
});

export const buttonWrapper = style({
  flexGrow: 1,
  flexShrink: 0,
  display: 'flex',
  ...responsiveStyle({
    mobile: {
      justifyContent: 'center',
    },
    desktop: {
      justifyContent: 'flex-start',
    },
  }),
});
