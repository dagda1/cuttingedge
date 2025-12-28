import { responsiveStyle, vars } from '@cutting/component-library';
import { globalStyle, style } from '@vanilla-extract/css';

globalStyle('*,*:before,*:after', {
  boxSizing: 'border-box',
});

globalStyle('html,body', {
  height: '100%',
  scrollBehavior: 'auto',
  margin: 0,
});

globalStyle('body', {
  overflowX: 'hidden',
  overflowY: 'scroll',
});

globalStyle('main', {
  height: '100%',
});

globalStyle('img', {
  maxWidth: '100%',
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

globalStyle('h1', {
  wordWrap: 'break-word',
});

export const header = style({
  background: 'inherit',
});
