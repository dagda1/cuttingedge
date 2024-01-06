import { assignVars, createThemeContract, style } from '@vanilla-extract/css';
import { vars } from '~/style/themes/vars.css';

const textLinkVars = createThemeContract({
  color: null,
  colorHover: null,
  textDecoration: null,
  textDecorationHover: null,
});

const weakLinkVars = assignVars(textLinkVars, {
  color: 'inherit',
  colorHover: 'inherit',
  textDecoration: 'underline',
  textDecorationHover: 'underline',
});

export const base = style({
  color: vars.foregroundColor.link,
  textDecoration: 'none',
  textDecorationThickness: '0.08em',
  textUnderlineOffset: 3,
  ':hover': {
    color: vars.foregroundColor.linkHover,
    textDecoration: 'none',
    /*
      Duplicating the thickness rule due to inconsistent support
      for shorthand properties of `text-decoration`. Without this,
      applying the above decoration rule resets the thickness in
      browsers that do support shorthands.

      We also cannot use the long-form `text-decoration-line` due
      to browser support policy of Edge 16+.
    */
    textDecorationThickness: '0.8em',
  },
  ':focus-visible': {
    color: textLinkVars.colorHover,
    outline: `${vars.focusRingSize} solid ${vars.borderColor.focus}`,
    outlineOffset: '0.2em',
    borderRadius: vars.borderRadius.small,
  },
});

export const visited = style({
  selectors: {
    '&:visited': {
      color: vars.foregroundColor.linkVisited,
    },
  },
});

export const underline = style({
  textDecoration: 'underline',
});

export const weakLink = style({
  vars: weakLinkVars,
});
