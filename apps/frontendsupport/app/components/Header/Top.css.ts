import { globalStyle, style } from '@vanilla-extract/css';
import { responsiveStyle, vars } from '@cutting/component-library';

export const logo = style({
  whiteSpace: 'nowrap',
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
