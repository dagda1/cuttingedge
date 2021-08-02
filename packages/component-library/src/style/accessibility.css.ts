import { style } from '@vanilla-extract/css';

export const visuallyHidden = style({
  position: 'absolute',
  width: '1px',
  height: '1px',
  margin: '0',
  padding: '0',
  overflow: 'hidden',
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  border: '0',
  whiteSpace: 'nowrap',
});
