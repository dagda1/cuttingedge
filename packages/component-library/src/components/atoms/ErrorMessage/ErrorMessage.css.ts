import { style } from '@vanilla-extract/css';
import { vars } from '../../../style/themes/vars.css';
import { atoms } from '../../../style/atoms/atoms';
import { responsiveText } from '../../../style/typography/typography.css';

export const root = style([
  responsiveText.body.untrimmed,
  atoms({
    marginBottom: '1x',
  }),
  {
    color: vars.foregroundColor.error,
    fontWeight: vars.fontWeight.regular,
    marginLeft: 0,
    listStyle: 'none',
    display: 'block',
  },
]);
