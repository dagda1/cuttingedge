import { responsiveStyle, vars } from '@cutting/component-library';
import { globalStyle, style } from '@vanilla-extract/css';

globalStyle('body', {
  fontFamily: "'Roboto' !important",
  backgroundColor: vars.backgroundColor.body,
  ...responsiveStyle({
    mobile: {
      padding: `0 ${vars.space['2x']}`,
    },
    tablet: {
      padding: 0,
    },
  }),
});

globalStyle('#root', {
  paddingTop: '0 !important',
});

export const covid = style({});

globalStyle(`${covid} h1`, {
  marginTop: '-20px',
  fontSize: '2rem',
  marginBottom: vars.space['2x'],
});

globalStyle(`${covid} svg:first-of-type`, {
  marginBottom: vars.space['2x'],
});

export const hidden = style({
  display: 'none',
});

globalStyle(`body`, {
  background: `url('${'/lightening.jpg'}') no-repeat center center fixed`,
  backgroundSize: 'cover',
});

globalStyle('header', {
  ...responsiveStyle({
    mobile: {
      paddingLeft: 0,
    },
    desktop: {
      paddingLeft: 'inherit',
    },
  }),
});

globalStyle('h1', {
  marginTop: 0,
  marginBottom: 0,
  paddingTop: 0,
  paddingBottom: 0,
  textShadow:
    '0 0 5px #fff, 0 0 10px #fff, 0 0 20px #ffffff, 0 0 30px #ffffff, 0 0 40px #ffffff, 0 0 55px #ffffff,0 0 75px #ffffff',
});
