import { globalStyle, style } from '@vanilla-extract/css';

export const container = style({
  background: 'grey',
  color: 'white',
  resize: 'both',
  width: '100%',
  height: '100%',
});

globalStyle('svg', {
  border: '1px solid royalblue;',
});

globalStyle('circle', {
  stroke: '#000000',
});
