import { globalStyle, style } from '@vanilla-extract/css';

export const container = style({
  background: 'grey',
  color: 'white',
  overflow: 'hidden',
  resize: 'both',
  width: '50%',
  height: '50%',
  fontWeight: 'bold',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0 auto',
  marginBottom: '10rem',
});

globalStyle('svg', {
  border: '1px solid royalblue;',
});
