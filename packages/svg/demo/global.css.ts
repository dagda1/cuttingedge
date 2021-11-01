import { style, globalStyle } from '@vamilla-extract/css';

export const container = style({
  border: '1px solid yellow',
  background: 'grey',
  color: 'white',
  overflow: 'hidden',
  resize: 'auto',
  width: '50%',
  height: '50%',
  fontWeight: 'bold',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0 auto',
});

globalStyle('svg', {
  border: '1px solid royalblue;',
});
