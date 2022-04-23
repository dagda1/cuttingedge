import { atoms, vars } from '@cutting/component-library';
import { globalStyle, style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  overflow: 'hidden',
});

globalStyle(`${container} svg`, {
  display: 'block',
});

export const links = style([
  { marginTop: 0, marginBottom: '1rem' },
  atoms({
    display: {
      mobile: 'none',
      tablet: 'flex',
    },
  }),
]);

globalStyle(`${links} li`, {
  marginRight: '1rem',
});

export const active = style({});

globalStyle(`${links} li a:not(${active})`, {
  textDecoration: 'underline',
});

export const legend = style({
  marginLeft: vars.space['2x'],
});

export const chart = style({
  flex: 1,
});
