import { globalStyle, style } from '@vanilla-extract/css';

export const container = style({
  gridRowTemplates: '[header] auto [body] auto',
});

globalStyle('main h1:first-of-type', {
  gridRow: 'heading',
});

export const center = style({
  textAlign: 'center',
});
