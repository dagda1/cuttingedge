import { createTheme, createThemeContract, createGlobalTheme } from '@vanilla-extract/css';
import { palette } from './palette.css';

const grid = 4;
const px = (value: string | number) => `${value}px`;

export const formControlVars = createThemeContract({
  formControl: {
    height: null,
    width: null,
    padding: null,
  },
});

export const darkTheme = createTheme(formControlVars, {
  formControl: {
    height: '2.5rem',
    width: '100%',
    padding: '6px 12px',
  },
});

export const vars = createGlobalTheme(':root', {
  grid: px(grid),
  contentWidth: {
    xsmall: px(480),
    small: px(600),
    standard: px(740),
    large: px(1350),
  },
  spacing: {
    none: '0',
    xsmall: px(1 * grid),
    small: px(2 * grid),
    medium: px(3 * grid),
    large: px(5 * grid),
    xlarge: px(8 * grid),
    xxlarge: px(12 * grid),
    xxxlarge: px(24 * grid),
  },
  weight: {
    regular: '400',
    strong: '700',
  },
  palette: palette,
});
