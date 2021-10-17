import { style } from '@vanilla-extract/css';
import { responsiveFont } from '../../../style/typography/typography';
import { vars } from '../../../style/themes/vars.css';
import { atoms } from '../../../style/atoms/atoms';

export const root = style([
  atoms({
    marginBottom: '1x',
  }),
  {
    ...responsiveFont(),
    color: vars.foregroundColor.error,
    fontWeight: vars.fontWeight.regular,
    marginLeft: 0,
    listStyle: 'none',
    display: 'block',
  },
]);
