import { palette, vars } from '@cutting/component-library';
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

export const submenu = style({
  color: `${palette.black}`,
  selectors: {
    [`&:hover,&:focus`]: {
      textDecorationThickness: `max(3px, .1875rem, .12em)`,
    },
  },
});
