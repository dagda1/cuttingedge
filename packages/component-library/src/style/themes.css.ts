import { createGlobalTheme } from '@vanilla-extract/css';
import { palette } from './palette.css';

const grid = 4;
const px = (value: string | number) => `${value}px`;

export const vars = createGlobalTheme(':root', {
  fonts: {
    brand: 'Shrikhand, "Helvetica Neue", HelveticaNeue, Helvetica, sans-serif',
    heading: '"DM Sans", "Helvetica Neue", HelveticaNeue, Helvetica, sans-serif',
    body: '-apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", HelveticaNeue, Helvetica, Arial, sans-serif',
    code: 'MonoLisa, "Roboto Mono", Menlo, monospace',
  },
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
  formControl: {
    height: '2.5rem',
    width: '100%',
    padding: '5px',
  },
  palette: palette,
});
