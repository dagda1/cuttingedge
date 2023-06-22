import { style } from '@vanilla-extract/css';
import { responsiveStyle, vars } from '@cutting/component-library';
import { globalStyle } from '@vanilla-extract/css';

export const nav = style({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  margin: 0,
  ...responsiveStyle({
    mobile: {
      fontSize: '1.5rem',
    },
    tablet: {
      fontSize: '2rem',
    },
    desktop: {
      fontSize: '3rem',
    },
  }),
});

globalStyle(`${nav} li:not(:last-of-type)`, {
  marginRight: vars.space['small'],
});
