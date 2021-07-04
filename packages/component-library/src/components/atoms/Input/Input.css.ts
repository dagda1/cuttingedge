import { composeStyles, style } from '@vanilla-extract/css';

const base = style({
  // background: defaultThemeVars.input.borderWidth,
  // border: `${defaultThemeVars.inputBorderWidth} solid ${defaultThemeVars.borderColor}`,
  // ':focus': {
  //   background: defaultThemeVars.bgFocus,
  //   border: `${defaultThemeVars.borderWidthFocus} solid ${defaultThemeVars.borderColorFocus}`,
  //   outline: `${defaultThemeVars.borderWidthOutline} solid ${defaultThemeVars.outlineFocusColor}`,
  // },
});

export const input = composeStyles(base);

export const invalid = composeStyles(
  base,
  style({
    // borderColor: defaultThemeVars.borderColorInvalid,
    // ':focus': {
    //   borderColor: defaultThemeVars.borderColorFocus,
    // },
  }),
);
