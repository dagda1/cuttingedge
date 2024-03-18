import { palette } from '@cutting/component-library';
import type { ComplexStyleRule } from '@vanilla-extract/css';
import { style } from '@vanilla-extract/css';

const strokeColor = palette.white;
const strokeWidth = 2;

const styles: ComplexStyleRule = {
  stroke: strokeColor,
  strokeWidth,
};
export const sine = style({ ...styles, fill: 'none' });
