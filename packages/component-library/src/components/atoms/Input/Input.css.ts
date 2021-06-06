import { createTheme, createThemeContract } from '@vanilla-extract/css';
import { palette } from '../../../style/palette.css';

export const vars = createThemeContract({
  borderColor: null,
  borderColorFocus: null,
  borderColorInvalid: null,
  borderFocusColorinvalid: null,
  bgInvalid: null,
});

export const darkTheme = createTheme(vars, {
  borderColor: palette.trueGray700,
  borderColorFocus: palette.blue700,
  borderColorInvalid: palette.redError,
  borderFocusColorinvalid: palette.blue700,
  bgInvalid: palette.redError,
});

// export const vars = createTheme(':root', {
//   grid: px(grid),
//   spacing: {
//     none: '0',
//     xsmall: px(1 * grid),
//     small: px(2 * grid),
//     medium: px(3 * grid),
//     large: px(5 * grid),
//     xlarge: px(8 * grid),
//     xxlarge: px(12 * grid),
//     xxxlarge: px(24 * grid),
//   },
//   palette: palette,
//   input: {
//     borderColor: palette.coolGray700,
//   },
// });
