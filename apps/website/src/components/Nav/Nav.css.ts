import { palette, responsiveStyle, vars } from '@cutting/component-library';
import { globalStyle, style } from '@vanilla-extract/css';

export const contact = style([
  {
    backgroundColor: '#FF8B45',
  },
]);
globalStyle(`${contact} a`, {
  color: vars.foregroundColor.neutral,
  background: 'transparent',
});

export const active = style({
  color: 'blue',
  fontStyle: 'bold',
});

export const dropdown = style({
  border: 0,
  background: 'transparent',
  textDecoration: vars.links.decoration.link,
  color: vars.links.color.link,
  textUnderlineOffset: '.1em',
  lineHeight: vars.links.lineHeight,
  cursor: 'pointer',
  zIndex: 15,
});

globalStyle(`${dropdown} + div`, {
  ...responsiveStyle({
    mobile: {
      width: '100%',
    },
    desktop: {
      width: 'auto',
    },
  }),
});

globalStyle(`${dropdown} + div ul`, {
  ...responsiveStyle({
    mobile: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    desktop: {
      width: 'auto',
    },
  }),
});

globalStyle(`${dropdown} + div ul li`, {
  ...responsiveStyle({
    mobile: {
      border: 'none',
      width: '80%',
    },
    desktop: {
      width: '100%',
    },
  }),
});

globalStyle(`${dropdown} ul`, {
  listStyle: 'none',
});

export const submenu = style({
  color: `${palette.black}`,
  selectors: {
    [`&:hover,&:focus`]: {
      textDecorationThickness: `max(3px, .1875rem, .12em)`,
    },
  },
});
