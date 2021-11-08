import { style } from '@vanilla-extract/css';
import { atoms } from '../../../style/atoms/atoms';
import { vars } from '../../../style/themes/vars.css';

export const container = style({ display: 'flex', alignItems: 'center' });

export const color = style([
  { width: vars.space['4x'], height: vars.space['4x'], border: '1px solid black' },
  atoms({
    marginRight: '1x',
    marginBottom: '1x',
  }),
]);
