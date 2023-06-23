import { globalStyle, style } from '@vanilla-extract/css';
import { atoms, palette, responsiveStyle, vars } from '@cutting/component-library';

export const main = style({
  fontStretch: '100%',
});

globalStyle(`${main} h1`, {
  color: palette.white,
});

globalStyle(`${main} h2,${main} h3`, {
  color: '#facc15',
  marginBottom: vars.space['xxsmall'],
});

globalStyle(`${main} ul`, {
  marginTop: '0',
  marginBottom: vars.space['medium'],
});

globalStyle(`${main} ul li`, {
  marginTop: vars.space['small'],
});

globalStyle(`${main} span`, {
  background: palette.teal500,
  color: palette.white,
  padding: '3px 7px',
  borderRadius: '100%',
});

globalStyle(`${main} p`, {
  margin: `${vars.space['small']} 0`,
  padding: 0,
});

globalStyle(`${main} ul`, {
  listStyle: 'inside',
});

export const introEnd = style({
  marginTop: vars.space['small'],
  marginBottom: vars.space['medium'],
});

globalStyle(`${introEnd} h1`, {
  textAlign: 'center',
});

export const serviceBody = style({});

export const container = style([
  atoms({
    display: {
      mobile: 'block',
      tablet: 'flex',
    },
  }),
]);

globalStyle(`${container} > div`, {
  flex: '1',
  alignItems: 'center',
  background: '#62636A',
  paddingLeft: vars.space['small'],
  ...responsiveStyle({
    mobile: {
      marginBottom: vars.space['medium'],
    },
    tablet: {
      marginBottom: 0,
    },
  }),
});

globalStyle(`${container} button`, {
  width: 'auto',
});

export const service = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  margin: '1rem',
});
