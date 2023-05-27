import { style } from '@vanilla-extract/css';
import { vars } from '~/style/themes/vars.css';
import { atoms } from '~/style/atoms/atoms';

export const root = style([
  atoms({
    reset: 'a',
  }),
  {
    color: vars.links.color.link,
    selectors: {
      [`&:active`]: {
        color: vars.links.color.active,
      },
      [`&:hover,&:focus`]: {
        color: vars.links.color.hover,
        textDecorationThickness: `max(3px, .1875rem, .12em)`,
      },
    },
  },
]);
