import { globalStyle, style } from '@vanilla-extract/css';

globalStyle('main', {
  display: 'grid',
  gridTemplateRows: '[heading] 6rem [body] 0.5fr'
});

globalStyle('main h1:first-of-type', {
  gridRow: 'heading',
  border: '10px solid white'
});

globalStyle('main section:first-of-type', {
  gridRow: 'body',
  border: '10px solid pink'
});

export const center = style({
  textAlign: 'center',
});
