import { style } from '@vanilla-extract/css';

import { atoms } from '../../style/atoms/atoms';

export const root = style([
  {
    flex: 1,
    width: '50%',
  },
  atoms({
    padding: 'xsmall',
  }),
]);
