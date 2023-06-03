import { assignVars, createThemeContract, style, styleVariants } from '@vanilla-extract/css';
import { vars } from '~/style/themes/vars.css';

const textLinkVars = createThemeContract({
  color: null,
  colorHover: null,
  textDecoration: null,
  textDecorationHover: null,
});

export const regularLinkVars = assignVars(textLinkVars, {
  color: vars.foregroundColor.link,
  colorHover: vars.foregroundColor.linkHover,
  textDecoration: 'none',
  textDecorationHover: 'underline',
});

const weakLinkVars = assignVars(textLinkVars, {
  color: 'inherit',
  colorHover: 'inherit',
  textDecoration: 'underline',
  textDecorationHover: 'underline',
});

export const base = style({
  color: textLinkVars.color,
  textDecoration: textLinkVars.textDecoration,
  textDecorationThickness: '0.1em',
  textUnderlineOffset: 3,
  ':hover': {
    color: textLinkVars.colorHover,
    textDecoration: textLinkVars.textDecorationHover,
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
    color: textLinkVars.colorHover,
  },
});

export const weakLink = style({
  vars: weakLinkVars,
});
