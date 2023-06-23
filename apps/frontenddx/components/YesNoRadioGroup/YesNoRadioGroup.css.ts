import { responsiveStyle, vars } from '@cutting/component-library';
import { globalStyle, style } from '@vanilla-extract/css';

export const root = style({
  marginTop: vars.space['medium'],
});

globalStyle(`${root} fieldset`, {
  marginTop: vars.space['medium'],
});

globalStyle('.popup-overlay .popup-content', {
  zIndex: 99999,
  ...responsiveStyle({
    mobile: {
      width: '90%',
    },
    tablet: {
      width: 'auto',
    },
  }),
});
