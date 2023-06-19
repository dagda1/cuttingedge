import { responsiveStyle, vars } from '@cutting/component-library';
import { globalStyle, style } from '@vanilla-extract/css';

export const post = style({
  borderBottom: '1px solid #e5e5e5;',
  paddingBottom: vars.space['small'],
  borderTop: '1px solid #e5e5e5;',
  paddingTop: vars.space['small'],
});

export const container = style({});

globalStyle(`${container} h1`, {
  opacity: 1,
  marginTop: '0',
  fontWeight: 'bold',
  ...responsiveStyle({
    mobile: {
      lineHeight: '1.25',
      fontSize: '36px',
    },
    tablet: {
      fontSize: '50px',
    },
    desktop: {
      fontSize: '80px',
    },
  }),
});
