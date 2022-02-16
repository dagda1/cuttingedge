import { atoms, responsiveStyle, vars } from '@cutting/component-library';
import { style, globalStyle } from '@vanilla-extract/css';

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

export const left = style([
  { display: 'flex' },
  atoms({
    flexDirection: {
      mobile: 'column',
      tablet: 'row',
    },
    flex: {
      mobile: 'auto',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      tablet: '0 0 33.333%' as any,
    },
  }),
]);

export const right = style([
  { display: 'flex' },
  atoms({
    flexDirection: {
      mobile: 'column',
      tablet: 'row',
    },
    flex: {
      mobile: 'auto',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      tablet: '0 0 66.6666%' as any,
    },
  }),
]);

export const logoContainer = style({
  width: '40px',
  display: 'inline-block',
  verticalAlign: 'middle',
});

globalStyle(`${logoContainer} svg`, {
  width: '100%',
  height: 'auto',
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
