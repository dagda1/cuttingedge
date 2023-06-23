import { atoms, responsiveStyle, vars } from '@cutting/component-library';
import { globalStyle, style } from '@vanilla-extract/css';

export const main = style({
  ...responsiveStyle({
    mobile: {
      display: 'block',
      textAlign: 'center',
    },
    tablet: {
      display: 'flex',
      textAlign: 'left',
    },
  }),
  flexShrink: 0,
  justifyContent: 'stretch',
  padding: vars.space['small'],
});

export const links = style([
  {
    marginTop: 0,
    paddingTop: 0,
  },
  atoms({
    marginBottom: {
      mobile: 'small',
      tablet: 'none',
    },
  }),
]);

globalStyle(`${links} li`, {
  display: 'inline-block',
});

globalStyle(`${links} li:not(:last-of-type):after`, {
  content: '"|"',
  marginLeft: vars.space['small'],
  marginRight: vars.space['small'],
});

export const left = style({
  display: 'flex',
  flex: `0 0 66.66%`,
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export const right = style({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});
