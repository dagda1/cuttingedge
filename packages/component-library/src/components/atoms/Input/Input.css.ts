import { createTheme, createThemeContract, composeStyles } from '@vanilla-extract/css';
import { palette } from '../../../style/palette.css';
import { style } from '@vanilla-extract/css';
import { vars } from '../../../style/themes.css';

export const inputVars = createThemeContract({
  bgColor: null,
  borderColor: null,
  borderColorFocus: null,
  borderColorInvalid: null,
  borderFocusColorinvalid: null,
  outlineFocusColor: null,
  borderWidth: null,
  bgFocus: null,
  bgInvalid: null,
});

export const [themeClass, themeVars] = createTheme({
  bg: palette.white,
  borderColor: palette.trueGray900,
  borderColorFocus: palette.blue700,
  borderColorInvalid: palette.redError,
  borderFocusColorinvalid: palette.blue700,
  borderWidth: '1px',
  borderWidthFocus: '2px',
  borderWidthOutline: '3px',
  bgFocus: palette.blue100,
  bgInvalid: palette.redError,
  outlineFocusColor: palette.yellow400,
});

const base = style({
  ...vars.formControl,
  background: themeVars.bg,
  border: `${themeVars.borderWidth} solid ${themeVars.borderColor}`,
  // [`:focus`]: {
  //   background: themeVars.bgFocus,
  //   border: `${themeVars.borderWidthFocus} solid ${themeVars.borderColorFocus}`,
  //   outline: `${themeVars.borderWidthOutline} solid ${themeVars.outlineFocusColor}`,
  // },
});

export const input = composeStyles(base);

export const invalid = composeStyles(
  base,
  style({
    background: themeVars.bgInvalid,
    borderColor: themeVars.borderColorInvalid,
    // [`:focus`]: {
    //   borderColor: themeVars.borderColorFocus,
    // },
  }),
);
