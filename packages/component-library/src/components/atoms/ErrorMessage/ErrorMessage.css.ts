import { style } from '@vanilla-extract/css';
import { vars } from '~/style/themes/vars.css';
import { atoms } from '~/style/atoms/atoms';

export const root = style([
  // responsiveText.body.untrimmed,
  atoms({
    marginBottom: 'xxsmall',
  }),
  {
    color: vars.foregroundColor.error,
    fontWeight: vars.textWeight.regular,
    marginLeft: 0,
    listStyle: 'none',
    display: 'block',
  },
]);
