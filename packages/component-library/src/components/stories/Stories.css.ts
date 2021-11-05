import { style } from '@vanilla-extract/css';
import { atoms } from '../../style/atoms/atoms';

export const root = style([
  {
    // border: '10px solid green',
    flex: 1,
    width: '50%',
  },
  atoms({
    padding: '2x',
  }),
]);
