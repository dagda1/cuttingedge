import { style } from '@vanilla-extract/css';
import { vars } from '~/style/themes/vars.css';

export const base = style({
  color: vars.foregroundColor.link,
  textDecoration: 'none',
  textDecorationThickness: '0.1em',
  textUnderlineOffset: 3,
  ':hover': {
    color: 'hover',
    textDecoration: 'none',
    /*
      Duplicating the thickness rule due to inconsistent support
      for shorthand properties of `text-decoration`. Without this,
      applying the above decoration rule resets the thickness in
      browsers that do support shorthands.

      We also cannot use the long-form `text-decoration-line` due
      to browser support policy of Edge 16+.
    */
    textDecorationThickness: '0.1em',
  },
  ':focus': {
    color: 'inherit',
  },
  ':visited': {
    color: vars.foregroundColor.linkVisited,
  },
});

export const underline = style({
  textDecoration: 'underline',
});
