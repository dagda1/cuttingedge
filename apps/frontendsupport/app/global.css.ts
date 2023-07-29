import { responsiveStyle, vars } from '@cutting/component-library';
import { globalStyle, style } from '@vanilla-extract/css';

globalStyle('*,*:before,*:after', {
  boxSizing: 'border-box',
});

globalStyle('html,body', {
  height: '100%',
  margin: 0,
});

globalStyle('body', {
  overflowX: 'hidden',
  overflowY: 'auto',
});

globalStyle('.cutting-inline', {
  background: 'transparent !important',
  color: `${vars.foregroundColor.promote} !important`,
  ...responsiveStyle({
    mobile: {
      fontSize: '16px !important',
    },
    tablet: {
      fontSize: '19px !important',
    },
  }),
});

export const header = style({
  background: 'inherit',
});
