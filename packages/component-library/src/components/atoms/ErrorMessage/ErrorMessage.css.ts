import { composeStyles, style } from '@vanilla-extract/css';
import { responsiveFont } from '../../../style/typography/typography';
import { vars } from '../../../style/themes/vars.css';
import { atoms } from '../../../style/atoms/sprinkles.css';

export const root = composeStyles(
  atoms({
    marginBottom: '1x',
  }),
  style({
    ...responsiveFont(),
    color: vars.foregroundColor.error,
    fontWeight: vars.fontWeight.regular,
    marginLeft: 0,
    listStyle: 'none',
    display: 'block',
  }),
);
