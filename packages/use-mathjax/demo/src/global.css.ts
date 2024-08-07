import type { ComplexStyleRule } from '@vanilla-extract/css';
import { style } from '@vanilla-extract/css';

const styles: ComplexStyleRule = {
  border: '1px solid red',
  background: 'grey',
  color: 'white',
  fontWeight: 'bold',
  overflow: 'hidden',
  resize: 'both',
  width: '200px',
  height: '200px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export const parent = style({ ...styles });

export const child = style([
  styles,
  {
    backgroundColor: 'white',
    color: 'black',
    border: '1px solid blue',
  },
]);
