import { style, globalStyle } from '@vanilla-extract/css';
import { palette, vars } from '@cutting/component-library';

export const main = style({});

globalStyle(`${main} h1`, {
  opacity: 1,
  fontWeight: 'bold',
  color: palette.white,
});

globalStyle(`${main} ul`, {
  listStyle: 'inside',
});

globalStyle(`${main} h1`, {});

globalStyle(`${main} h2:not(#notification-banner-title)`, {
  color: '#facc15',
  marginBottom: vars.space['xxsmall'],
});

export const container = style({
  display: 'flex',
});

export const children = style({
  flex: 2,
});

export const images = style({
  flex: 1,
  display: 'flex',
  flexWrap: 'wrap',
});

export const cta = style({});
