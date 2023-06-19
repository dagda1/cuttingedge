import { palette, vars } from '@cutting/component-library';
import { globalStyle, style } from '@vanilla-extract/css';

export const contact = style([
  {
    backgroundColor: '#FF8B45',
  },
]);

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

globalStyle(`${dropdown} ul`, {
  listStyle: 'none',
});

export const VizMenuItem = style({
  background: palette.white,
  zIndex: 15,
  selectors: {
    [`&:hover,&:focus`]: {
      background: `${palette.yellow400} !important`,
    },
  },
});

export const submenu = style({
  marginBottom: '0 !important',
  color: `${palette.black} !important`,
  selectors: {
    [`&:hover,&:focus`]: {
      color: '#ffffff !important',
      textDecorationThickness: `max(3px, .1875rem, .12em)`,
    },
  },
});

globalStyle('.szh-menu', {
  padding: 0,
});

globalStyle('.szh-menu__item', {
  border: `1px solid ${palette.white}`,
  width: '100%',
});

globalStyle('[role=menuitem]', {
  display: 'inline-block',
  padding: vars.space['medium'],
  zIndex: 33,
  position: 'relative',
});
