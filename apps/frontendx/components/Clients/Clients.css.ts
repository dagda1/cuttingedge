import { palette, vars } from '@cutting/component-library';
import { globalStyle, style } from '@vanilla-extract/css';

export const main = style({
  position: 'relative',
  marginBottom: vars.space['medium'],
});

globalStyle(`${main} h1`, {
  textAlign: 'center',
  marginBottom: vars.space['medium'],
});

export const images = style({
  display: 'flex',
  flexWrap: 'wrap',
});

globalStyle(`${images} img`, {
  maxWidth: '100%',
});

globalStyle(`${images} svg`, {
  maxWidth: '100%',
});

export const client = style({
  width: `${100 / 3}%`,
  display: 'flex',
  padding: vars.space['small'],
  background: palette.white,
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '10px',
});

export const svg = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});
