import { createTheme } from '@vanilla-extract/css';
import { palette } from '../palette.css';

export const [defaultTheme, defaultThemeVars] = createTheme({
  inputBg: palette.white,
  inputBorderColor: palette.trueGray900,
  inputBorderColorFocus: palette.blue700,
  inputBorderColorInvalid: palette.redError,
  inputBorderFocusColorinvalid: palette.blue700,
  inputBgFocus: palette.blue100,
  inputBgInvalid: palette.redError,
  inputOutlineFocusColor: palette.yellow400,
});
