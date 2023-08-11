import { globalStyle, style } from '@vanilla-extract/css';

export const container = style({
  background: 'grey',
  color: 'white',
  resize: 'both',
});

globalStyle('svg', {
  border: '1px solid royalblue;',
});

globalStyle('circle', {
  stroke: '#000000',
});
