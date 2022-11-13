import { vars, atoms, responsiveStyle, palette } from '@cutting/component-library';
import { style, globalStyle } from '@vanilla-extract/css';

globalStyle('footer', {
  display: 'flex',
  flexShrink: 0,
  width: '100%',
  ...responsiveStyle({
    mobile: {
      flexDirection: 'column',
    },
    tablet: {
      flexDirection: 'row',
    },
    wide: {},
  }),
});

export const footer = style([
  {
    display: 'flex',
    flexShrink: 0,
    ...responsiveStyle({
      mobile: {
        fontSize: '14px',
      },
      tablet: {
        fontSize: '19px',
      },
    }),
  },
  atoms({
    marginBottom: {
      mobile: '2x',
      tablet: 'none',
    },
    flexDirection: {
      mobile: 'column',
      tablet: 'row',
    },
  }),
]);

export const left = style({
  display: 'flex',
  ...responsiveStyle({
    mobile: {
      flexDirection: 'column',
      flex: 'auto',
    },
    tablet: {
      flexDirection: 'row',
      flex: '0 0 33.333%',
    },
  }),
});

export const right = style({
  ...responsiveStyle({
    mobile: {
      flexDirection: 'column',
      flex: 'auto',
    },
    tablet: {
      flexDirection: 'row',
      flex: '0 0 66.666%',
    },
  }),
});

export const logoContainer = style({
  width: '40px',
  display: 'inline-block',
  verticalAlign: 'middle',
});

globalStyle(`${logoContainer} svg`, {
  width: '100%',
  height: 'auto',
});

globalStyle(`${logoContainer} svg path`, {
  fill: palette.white,
});

globalStyle(`${logoContainer} > div`, {
  marginTop: '-5px',
  paddingTop: 0,
});

export const links = style([
  {
    textAlign: 'center',
    flex: '0 0 50%',
  },
  atoms({
    textAlign: {
      mobile: 'center',
      tablet: 'left',
    },
  }),
]);

export const name = style({
  display: 'inline-block',
  marginLeft: '5px',
});

export const seal = style({
  paddingTop: 0,
  position: 'relative',
  top: '3px',
});

export const logo = style([
  {
    flex: '0 0 50%',
  },
  atoms({
    textAlign: {
      mobile: 'center',
      tablet: 'left',
    },
  }),
]);

export const contact = style([
  atoms({
    textAlign: {
      mobile: 'center',
      tablet: 'right',
    },
  }),
]);

export const social = style({
  display: 'inline-block',
  verticalAlign: 'top',
});

globalStyle(`${social} li`, {
  display: 'inline-block',
  marginRight: vars.space['2x'],
  paddingRight: vars.space['2x'],
  borderRight: '1px solid #333',
  height: '20px',
  lineHeight: '21px',
});

globalStyle(`${social} a`, {
  height: '20px',
  lineHeight: '21px',
});

globalStyle(`${social} li a`, {
  display: 'inline-block',
  width: '20px',
});

globalStyle(`${social} svg`, {
  width: '100%',
  height: 'auto',
});

export const email = style({
  display: 'inline-block',
  verticalAlign: 'top',
  position: 'relative',
  top: '-3px',
});

export const copyright = style({
  marginTop: '-15px',
});
