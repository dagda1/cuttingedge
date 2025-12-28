import { responsiveStyle, vars } from '@cutting/component-library';
import { globalStyle, style } from '@vanilla-extract/css';

export const logo = style({
  whiteSpace: 'nowrap',
});

export const header = style({
  backgroundColor: vars.backgroundColor.body,
  top: 0,
  left: 0,
});

globalStyle(`${logo} img`, {
  position: 'relative',
  top: '-5px',
  marginRight: vars.space['medium'],
  ...responsiveStyle({
    mobile: {
      left: '-10px',
    },
    desktop: {
      left: 0,
    },
  }),
});
