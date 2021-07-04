import { style } from '@vanilla-extract/css';
import { vars } from '../../../style/themes/vars.css';
import { defaultThemeVars } from '../../../style/themes';

const base = style({
  ...vars.formControl,
  background: defaultThemeVars.inputBg,
  border: `${themeVars.borderWidth} solid ${themeVars.borderColor}`,
  ':focus': {
    background: themeVars.bgFocus,
    border: `${themeVars.borderWidthFocus} solid ${themeVars.borderColorFocus}`,
    outline: `${themeVars.borderWidthOutline} solid ${themeVars.outlineFocusColor}`,
  },
});

export const input = composeStyles(base);

export const invalid = composeStyles(
  base,
  style({
    background: themeVars.bgInvalid,
    borderColor: themeVars.borderColorInvalid,
    ':focus': {
      borderColor: themeVars.borderColorFocus,
    },
  }),
);
